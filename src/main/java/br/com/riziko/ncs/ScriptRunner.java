/**
 * 
 */
package br.com.riziko.ncs;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.Charset;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.LocalDate;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.bson.Document;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

import br.com.riziko.ncs.core.tool.DateConverter;
import br.com.riziko.ncs.core.tool.SplitPipes;
import br.com.riziko.ncs.core.tool.TraditionalReader;
import br.com.riziko.ncs.core.tool.TraditionalWriter;
import br.com.riziko.ncs.core.tool.TypeConverter;
import br.com.riziko.ncs.datamodel.*;

/**
 * @author Rogerio
 * 
 */
public class ScriptRunner {

	private static final Logger LOGGER = Logger.getLogger(ScriptRunner.class.getName());
	private static final Logger mongoLogger = Logger.getLogger( "org.mongodb.driver" );	

	static Connection conn;
	static String user;
	static String password;
	static String databaseUri;
	static String catalog;
	static String driver;

	static TVersioning tVersioning;

	public ScriptRunner() {
		header();
		init();
		Logger mongoLogger = Logger.getLogger( "org.mongodb.driver" );
		mongoLogger.setLevel(Level.SEVERE); 
	}
	
	private static void header() {
		println("\n"); //$NON-NLS-1$
		println(Messages.getString("Console.menu.console.header.1")); //$NON-NLS-1$
		println(Messages.getString("Console.menu.console.header.2")); //$NON-NLS-1$
		println(Messages.getString("Console.menu.console.header.3")); //$NON-NLS-1$
		println(Messages.getString("Console.menu.console.header.4")); //$NON-NLS-1$

	}

	private static void init() {

		final String UTF8 = "UTF-8";

		final String USER_HOME = System.getProperty("user.home");
		final String SEPARATOR = System.getProperty("file.separator");
		final String FILE_NAME = USER_HOME + SEPARATOR + "NCSDatabaseConnectionParameters.dat";

		try {
			TraditionalReader reader = new TraditionalReader();
			reader.open(FILE_NAME, Charset.forName(UTF8));
			println(Messages.getString("Console.connection.existConnectionParameters"));
			reader.close();
		} catch (FileNotFoundException e) {
			println(Messages.getString("Console.connection.notExistConnectionParameters"));
			TraditionalWriter writer = new TraditionalWriter();
			writer.open(FILE_NAME);
			writer.writeLine("org.h2.Driver|jdbc:h2:tcp://localhost/~/NCSDatabase|NCSDATABASE|sa|null");
			writer.close();
		}

		TraditionalReader reader = new TraditionalReader();
		try {
			reader.open(FILE_NAME, Charset.forName(UTF8));
			String line = reader.readLine();
			reader.close();
			String[] params = SplitPipes.split(line);
			driver = params[0];
			databaseUri = params[1];
			catalog = params[2];
			user = params[3];
			password = params[4];

		} catch (FileNotFoundException ex) {
			LOGGER.log(Level.SEVERE, ex.getMessage());
		}

	}

	private static boolean connect() {

		Properties connectionProps = new Properties();
		connectionProps.put("user", user); //$NON-NLS-1$
		connectionProps.put("password", password); //$NON-NLS-1$
		connectionProps.put("catalog", catalog);

		try {
			Class.forName(driver);
			conn = DriverManager.getConnection(databaseUri, connectionProps);
			println(Messages.getString("Console.connection.connectedTo") + " " + conn.getClientInfo());
		} catch (SQLException e) {
			LOGGER.log(Level.SEVERE, e.getMessage());
			println(Messages.getString("Console.connection.errorOnConnecting"));
		} catch (ClassNotFoundException e) {
			LOGGER.log(Level.SEVERE, e.getMessage());
			println(Messages.getString("Console.connection.driverNotFound:" + driver));

		}
		return true;
	}

	public boolean insertIntoMongoDB(String collection, StringBuilder json) {

		mongoLogger.setLevel(Level.SEVERE); 

		MongoClient mongoClient = MongoClients.create(databaseUri);
		MongoDatabase database = mongoClient.getDatabase(catalog);
		
		try {
			database.getCollection(collection).insertOne(Document.parse(json.toString()));
		} catch (Exception e) {
			System.out.println("Erro de conexao com MongoDB:\n" + e.getMessage() + "::"+ json.toString());
			return false;
		}
		mongoClient.close();

		return true;
	}
	
	
	private static void createTIRDatabase() {

		final String CONSOLE_INFO_SUCESS = "Console.info.success";
		final String CONSOLE_INFO_FAILURE = "Console.info.failure";

		connect();
		try {
			Map<String, StringBuilder> sql = new HashMap<>();
			sql.put("Select", new StringBuilder("Select * from " + tVersioning.getClass().getName()));
			boolean success = insertIntoDatabase(sql);
			if (success)
				println(Messages.getString(CONSOLE_INFO_SUCESS));
			if (!success)
				println(Messages.getString(CONSOLE_INFO_FAILURE));
		} catch (Exception e) {
			boolean success = insertIntoDatabase(createTIR());
			if (success)
				println(Messages.getString(CONSOLE_INFO_SUCESS));
			if (!success)
				println(Messages.getString(CONSOLE_INFO_FAILURE));
		}

	}

	private static boolean startVersioning() {
		try {
			Date today = new Date();
			tVersioning = new TVersioning();
			Scanner keyboard = new Scanner(System.in);

			println(Messages.getString("Console.versioning.inputVersionNumber"));
			int version = Long.valueOf(keyboard.next()).intValue();
			tVersioning.setVersion(version);

			println(Messages.getString("Console.versioning.inputDateofSSR") + "[" + today + "]");
			Date dateOfSSR = DateConverter.fromJulianToDate(keyboard.next());
			//tVersioning.setDateOfSSR(dateOfSSR);

			println(Messages.getString("Console.versioning.inputDateofMRD") + "[" + today + "]");
			Date dateOfMRD = DateConverter.fromJulianToDate(keyboard.next());
			//tVersioning.setDateOfMRD(dateOfMRD);

			println(Messages.getString("Console.versioning.inputDateofKHN") + "[" + today + "]");
			Date dateOfKHN = DateConverter.fromJulianToDate(keyboard.next());
			//tVersioning.setDateOfKHN(dateOfKHN);

			println(Messages.getString("Console.versioning.inputDateofKFF") + "[" + today + "]");
			Date dateOfKFF = DateConverter.fromJulianToDate(keyboard.next());
			//tVersioning.setDateOfKFF(dateOfKFF);

			tVersioning.setId(LocalDate.now().toEpochDay());
			tVersioning.setNoteOfVersion("Import from NCSTools/ScriptRunner.");

			keyboard.close();
			HashMap<String, StringBuilder> list = new HashMap<>();

			StringBuilder creationCommand = TypeConverter.toDDL(tVersioning);
			list.put(tVersioning.getClass().getName(), creationCommand);

			insertIntoDatabase(list);

			StringBuilder insertCommand = TypeConverter.toSQL(tVersioning);
			list.put(tVersioning.getClass().getName(), insertCommand);

			insertIntoDatabase(list);

		} catch (Exception e) {
			println(Messages.getString("Console.versioning.errorOnParsingDate"));
			return false;
		}
		return true;
	}

	public void importProcedure(String fileName) {
		String line = "";
		HashMap<String, StringBuilder> lista = new HashMap<>();
		TraditionalReader reader = new TraditionalReader();

		try {
			reader.open(fileName, Charset.forName("UTF-8"));
			while ((line = reader.readLine()) != null) {
				lista.put(line, new StringBuilder(line));
			}
			insertIntoDatabase(lista);
		} catch (IOException e) {
			LOGGER.log(Level.SEVERE, e.getMessage());
			println(Messages.getString("Console.info.failure"));
		}

	}

	/**
	 * DELETE and UPDATE commands will be avoided
	 * 
	 * @param hashMap
	 * @return
	 */
	private static boolean insertIntoDatabase(Map<String, StringBuilder> tables) {
		connect();
		boolean success = true;

		println(Messages.getString("Console.menu.content.explanation.1") + new Date()); //$NON-NLS-1$
		Stream<StringBuilder> stream = tables.values().stream();

		for (StringBuilder sb : stream.collect(Collectors.toList())) {

			try (Statement stmt = conn.createStatement()) {
				String sql = sb.toString();
				if (!sql.startsWith("DELETE") && !sql.startsWith("UPDATE"))
					stmt.executeUpdate(sql);
				println("- " + sql);

			} catch (SQLException se) {
				LOGGER.log(Level.SEVERE, se.getMessage());
				success = false;

			}

		}
		println(Messages.getString("Console.menu.content.explanation.2") + new Date());
		return success;
	}

	public static HashMap<String, StringBuilder> createTIR() {
		HashMap<String, StringBuilder> tables = new HashMap<>();
		tables.put(TCharacteristic.class.getName(), TypeConverter.toDDL(new TCharacteristic()));
		tables.put(TEntity.class.getName(), TypeConverter.toDDL(new TEntity()));
		tables.put(TIdentification.class.getName(), TypeConverter.toDDL(new TIdentification()));
		tables.put(TMaterialManagement.class.getName(), TypeConverter.toDDL(new TMaterialManagement()));
		tables.put(TMoeRule.class.getName(), TypeConverter.toDDL(new TMoeRule()));
		tables.put(TNote.class.getName(), TypeConverter.toDDL(new TNote()));
		tables.put(TPackagingData.class.getName(), TypeConverter.toDDL(new TPackagingData()));
		tables.put(TReference.class.getName(), TypeConverter.toDDL(new TReference()));
		tables.put(TReplacement.class.getName(), TypeConverter.toDDL(new TReplacement()));
		tables.put(TStandardizationRelationship.class.getName(),
				TypeConverter.toDDL(new TStandardizationRelationship()));
		tables.put(TVersioning.class.getName(), TypeConverter.toDDL(new TVersioning()));
		tables.put(TNatoStockNumberRoot.class.getName(), TypeConverter.toDDL(new TNatoStockNumberRoot()));
		return tables;
	}

	public static void mommentum() {

		createTIRDatabase();
		startVersioning();
	}

	private static void println(String text) {
		System.out.println(text);
	}

}

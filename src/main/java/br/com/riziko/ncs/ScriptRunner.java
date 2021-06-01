package br.com.riziko.ncs;

import java.io.FileNotFoundException;
import java.io.IOException;

import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.Instant;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.bson.Document;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

import br.com.riziko.ncs.core.tool.SplitPipes;
import br.com.riziko.ncs.core.tool.TraditionalReader;
import br.com.riziko.ncs.core.tool.TraditionalWriter;
import br.com.riziko.ncs.core.tool.TypeConverter;
import br.com.riziko.ncs.datamodel.TCharacteristic;
import br.com.riziko.ncs.datamodel.TEntity;
import br.com.riziko.ncs.datamodel.TIdentification;
import br.com.riziko.ncs.datamodel.TMaterialManagement;
import br.com.riziko.ncs.datamodel.TMoeRule;
import br.com.riziko.ncs.datamodel.TNote;
import br.com.riziko.ncs.datamodel.TPackagingData;
import br.com.riziko.ncs.datamodel.TReference;
import br.com.riziko.ncs.datamodel.TReplacement;
import br.com.riziko.ncs.datamodel.TStandardizationRelationship;
import br.com.riziko.ncs.datamodel.TVersioning;

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


	public ScriptRunner() {
		header();
		init();
		Logger.getLogger( "org.mongodb.driver" );
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


		final String USER_HOME = System.getProperty("user.home");
		final String SEPARATOR = System.getProperty("file.separator");
		final String FILE_NAME = USER_HOME + SEPARATOR + "NCSDatabaseConnectionParameters.dat";

		try {
			TraditionalReader reader = new TraditionalReader();
			reader.open(FILE_NAME, StandardCharsets.UTF_8);
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
			reader.open(FILE_NAME, StandardCharsets.UTF_8);
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

	private static void connect() {

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
	}

	public void insertIntoMongoDB(String collection, StringBuilder json) {

		mongoLogger.setLevel(Level.SEVERE);

		MongoClient mongoClient = MongoClients.create(databaseUri);
		MongoDatabase database = mongoClient.getDatabase(catalog);

		try {
			database.getCollection(collection).insertOne(Document.parse(json.toString()));
		} catch (Exception e) {
			println("Erro de conexao com MongoDB:\n" + e.getMessage() + "::"+ json.toString());

		}
		mongoClient.close();

	}


	public void importProcedure(String fileName) {
		String line;
		HashMap<String, StringBuilder> lista = new HashMap<>();
		TraditionalReader reader = new TraditionalReader();

		try {
			reader.open(fileName, StandardCharsets.UTF_8);
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
	 * @param tables - a set of key value to insert
	 */
	private static void insertIntoDatabase(Map<String, StringBuilder> tables) {
		connect();

		println(Messages.getString("Console.menu.content.explanation.1") + Instant.now()); //$NON-NLS-1$
		Stream<StringBuilder> stream = tables.values().stream();

		for (StringBuilder sb : stream.collect(Collectors.toList())) {

			try (Statement stmt = conn.createStatement()) {
				String sql = sb.toString();
				if (!sql.startsWith("DELETE") && !sql.startsWith("UPDATE"))
					stmt.executeUpdate(sql);
				println("- " + sql);

			} catch (SQLException se) {
				LOGGER.log(Level.SEVERE, se.getMessage());

			}

		}
		println(Messages.getString("Console.menu.content.explanation.2") + Instant.now());
	}

	public static Map<String, StringBuilder> createTIR() {
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
		return tables;
	}

	@SuppressWarnings("Replace this use of System.out or System.err by a logger")
	private static void println(String text) {
		System.out.println(text);
	}

}

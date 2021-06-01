/**
 * 
 */
package br.com.riziko.ncs;

import java.io.FileNotFoundException;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

import br.com.riziko.ncs.core.model.digester.AACDigester;
import br.com.riziko.ncs.core.model.digester.ADPEDigester;
import br.com.riziko.ncs.core.model.digester.CIICDigester;
import br.com.riziko.ncs.core.model.digester.DACDigester;
import br.com.riziko.ncs.core.model.digester.DemilCodeDigester;
import br.com.riziko.ncs.core.model.digester.ISCDigester;
import br.com.riziko.ncs.core.model.digester.MaintenanceRequestCodeDigester;
import br.com.riziko.ncs.core.model.digester.Mrd06p1Digester;
import br.com.riziko.ncs.core.model.digester.Mrd06p2Digester;
import br.com.riziko.ncs.core.model.digester.Mrd076h2Digester;
import br.com.riziko.ncs.core.model.digester.Mrd107Digester;
import br.com.riziko.ncs.core.model.digester.Mrd120Digester;
import br.com.riziko.ncs.core.model.digester.Mrd300Digester;
import br.com.riziko.ncs.core.model.digester.Mrd500Digester;
import br.com.riziko.ncs.core.model.digester.NCAGESDCodeDigester;
import br.com.riziko.ncs.core.model.digester.NCBCodeDigester;
import br.com.riziko.ncs.core.model.digester.NationalMoeCodeDigester;
import br.com.riziko.ncs.core.model.digester.NiinSCDigester;
import br.com.riziko.ncs.core.model.digester.ODRCDigester;
import br.com.riziko.ncs.core.model.digester.PICDigester;
import br.com.riziko.ncs.core.model.digester.PMICDigester;
import br.com.riziko.ncs.core.model.digester.PhraseDigester;
import br.com.riziko.ncs.core.model.digester.QUPCDigester;
import br.com.riziko.ncs.core.model.digester.RNCCDigester;
import br.com.riziko.ncs.core.model.digester.RNFCDigester;
import br.com.riziko.ncs.core.model.digester.RNJCDigester;
import br.com.riziko.ncs.core.model.digester.RNSCDigester;
import br.com.riziko.ncs.core.model.digester.RNVCDigester;
import br.com.riziko.ncs.core.model.digester.RPDMRCDigester;
import br.com.riziko.ncs.core.model.digester.ReasonCodeDigester;
import br.com.riziko.ncs.core.model.digester.ReasonForReturnCodificationCodeDigester;
import br.com.riziko.ncs.core.model.digester.RepCodeDigester;
import br.com.riziko.ncs.core.model.digester.RequestForCodificationDigester;
import br.com.riziko.ncs.core.model.digester.ReturnCodeDefinitionDigester;
import br.com.riziko.ncs.core.model.digester.SOSCDigester;
import br.com.riziko.ncs.core.model.digester.SOSMCDigester;
import br.com.riziko.ncs.core.model.digester.ShelfLifeCodeDigester;
import br.com.riziko.ncs.core.model.digester.StandardMRCDigester;
import br.com.riziko.ncs.core.model.digester.StateProvinceCodeDigester;
import br.com.riziko.ncs.core.model.digester.TSCDigester;
import br.com.riziko.ncs.core.model.digester.Tabl076Digester;
import br.com.riziko.ncs.core.model.digester.Tabl091Digester;
import br.com.riziko.ncs.core.model.digester.Tabl098Digester;
import br.com.riziko.ncs.core.model.digester.Tabl099Digester;
import br.com.riziko.ncs.core.model.digester.Tabl120Digester;
import br.com.riziko.ncs.core.model.digester.Tabl121Digester;
import br.com.riziko.ncs.core.model.digester.Tabl122Digester;
import br.com.riziko.ncs.core.model.digester.Tabl124Digester;
import br.com.riziko.ncs.core.model.digester.Tabl125Digester;
import br.com.riziko.ncs.core.model.digester.Tabl126Digester;
import br.com.riziko.ncs.core.model.digester.Tabl127Digester;
import br.com.riziko.ncs.core.model.digester.Tabl128Digester;
import br.com.riziko.ncs.core.model.digester.Tabl131Digester;
import br.com.riziko.ncs.core.model.digester.Tabl316Digester;
import br.com.riziko.ncs.core.model.digester.Tabl347Digester;
import br.com.riziko.ncs.core.model.digester.Tabl363Digester;
import br.com.riziko.ncs.core.model.digester.Tabl364Digester;
import br.com.riziko.ncs.core.model.digester.Tabl390Digester;
import br.com.riziko.ncs.core.model.digester.Tabl391Digester;
import br.com.riziko.ncs.core.model.digester.Tabl462Digester;
import br.com.riziko.ncs.core.model.digester.Tabl557Digester;
import br.com.riziko.ncs.core.model.digester.Tabl990Digester;
import br.com.riziko.ncs.core.model.digester.TypeIICodeDigester;
import br.com.riziko.ncs.core.model.digester.TypeOECodeDigester;
import br.com.riziko.ncs.core.model.digester.UFSDDCodeDigester;
import br.com.riziko.ncs.core.model.digester.UICDigester;
import br.com.riziko.ncs.core.model.digester.USIServCodeDigester;
import br.com.riziko.ncs.core.model.digester.UnitOfMeasureDigester;
import br.com.riziko.ncs.core.tool.TraditionalReader;
import br.com.riziko.ncs.core.tool.TypeConverter;

/**
 * @author Sophia
 *
 */
public class PostgresqlRunner {

	/**
	 * @param args
	 */

	static Logger LOGGER;

	static String driver;
	static String databaseUri;
	static String user;
	static String password;
	static String catalog;
	static Properties connectionProps;

	static Connection conn;

	public static void main(String[] args) {

		LOGGER = Logger.getLogger("PostgresqlRunner");
		LOGGER.setLevel(Level.SEVERE);
		driver = "org.postgresql.Driver";
		databaseUri = "jdbc:postgresql://localhost:5432/SISPAN2019";
		user = "postgres";
		password = "masterkey";
		catalog = "public";

		connectionProps = new Properties();
		connectionProps.put("user", user); //$NON-NLS-1$
		connectionProps.put("password", password); //$NON-NLS-1$
		connectionProps.put("catalog", catalog);

		try {
			Class.forName(driver);
			conn = DriverManager.getConnection(databaseUri, connectionProps);
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}

		System.out.println("Started " + args[0].replace("-", "") + "...");

		run(args);

		System.out.println("Finished successfuly.");

	}

	public static void run(String[] args) {

		boolean foundIt = false;

		TraditionalReader reader = new TraditionalReader();

		try {
			reader.open(args[1], StandardCharsets.UTF_8);
		} catch (FileNotFoundException e) {
			LOGGER.log(Level.SEVERE, e.getMessage());
		}
		try {
			if ("-tabl091".equals(args[0])) {
				Tabl091Digester digester = new Tabl091Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}

			if (args[0].equals("-tabl098")) {
				Tabl098Digester digester = new Tabl098Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl099")) {
				Tabl099Digester digester = new Tabl099Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl363")) {
				Tabl363Digester digester = new Tabl363Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl364")) {
				Tabl364Digester digester = new Tabl364Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl990")) {
				Tabl990Digester digester = new Tabl990Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl076")) {
				Tabl076Digester digester = new Tabl076Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl316")) {
				Tabl316Digester digester = new Tabl316Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl120")) {
				Tabl120Digester digester = new Tabl120Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl121")) {
				Tabl121Digester digester = new Tabl121Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					String line2 = reader.readLine();
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line, line2), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl122")) {
				Tabl122Digester digester = new Tabl122Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl124")) {
				Tabl124Digester digester = new Tabl124Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl125")) {
				Tabl125Digester digester = new Tabl125Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl126")) {
				Tabl126Digester digester = new Tabl126Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl127")) {
				Tabl127Digester digester = new Tabl127Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl128")) {
				Tabl128Digester digester = new Tabl128Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl131")) {
				Tabl131Digester digester = new Tabl131Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl347")) {
				Tabl347Digester digester = new Tabl347Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl390")) {
				Tabl390Digester digester = new Tabl390Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl391")) {
				Tabl391Digester digester = new Tabl391Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl462")) {
				Tabl462Digester digester = new Tabl462Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-tabl557")) {
				Tabl557Digester digester = new Tabl557Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-mrd06p1")) {
				Mrd06p1Digester digester = new Mrd06p1Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-mrd06p2")) {
				Mrd06p2Digester digester = new Mrd06p2Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-mrd076")) {
				Mrd076h2Digester digester = new Mrd076h2Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-mrd098")) {
				Mrd06p1Digester digester = new Mrd06p1Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-mrd099")) {
				Mrd06p1Digester digester = new Mrd06p1Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-mrd107")) {
				Mrd107Digester digester = new Mrd107Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-mrd120")) {
				Mrd120Digester digester = new Mrd120Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-mrd300")) {
				Mrd300Digester digester = new Mrd300Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-mrd500")) {
				Mrd500Digester digester = new Mrd500Digester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}

			// Auxiliar tables
			if (args[0].equals("-niinSC")) {
				NiinSCDigester digester = new NiinSCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-02")) {
				ReturnCodeDefinitionDigester digester = new ReturnCodeDefinitionDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-odrc")) {
				ODRCDigester digester = new ODRCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-dac")) {
				DACDigester digester = new DACDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-RNJC")) {
				RNJCDigester digester = new RNJCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-pic")) {
				PICDigester digester = new PICDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-RNCC")) {
				RNCCDigester digester = new RNCCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-RNFC")) {
				RNFCDigester digester = new RNFCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-type2")) {
				TypeIICodeDigester digester = new TypeIICodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-RPDMRC")) {
				RPDMRCDigester digester = new RPDMRCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-RNVC")) {
				RNVCDigester digester = new RNVCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt=true;
			}
			if (args[0].equals("-RNAAC")) {
				NCBCodeDigester digester = new NCBCodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-RNSC")) {
				RNSCDigester digester = new RNSCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-isc")) {
				ISCDigester digester = new ISCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-ncagesd")) {
				NCAGESDCodeDigester digester = new NCAGESDCodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-UFSDD")) {
				UFSDDCodeDigester digester = new UFSDDCodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-TSC")) {
				TSCDigester digester = new TSCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-USI")) {
				USIServCodeDigester digester = new USIServCodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-slf")) {
				ShelfLifeCodeDigester digester = new ShelfLifeCodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-phrase")) {
				PhraseDigester digester = new PhraseDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-UIC")) {
				UICDigester digester = new UICDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-qupc")) {
				QUPCDigester digester = new QUPCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-aac")) {
				AACDigester digester = new AACDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-ciic")) {
				CIICDigester digester = new CIICDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-UOM")) {
				UnitOfMeasureDigester digester = new UnitOfMeasureDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-SOSC")) {
				SOSCDigester digester = new SOSCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-SOSMC")) {
				SOSMCDigester digester = new SOSMCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;

			}
			if (args[0].equals("-repCode")) {
				RepCodeDigester digester = new RepCodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-dC")) {
				DemilCodeDigester digester = new DemilCodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-adpe")) {
				ADPEDigester digester = new ADPEDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-pmiC")) {
				PMICDigester digester = new PMICDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-typeOE")) {
				TypeOECodeDigester digester = new TypeOECodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-4RCC")) {
				ReasonForReturnCodificationCodeDigester digester = new ReasonForReturnCodificationCodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-RFC")) {
				RequestForCodificationDigester digester = new RequestForCodificationDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-rc")) {
				ReasonCodeDigester digester = new ReasonCodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-mrrc")) {
				MaintenanceRequestCodeDigester digester = new MaintenanceRequestCodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-spc")) {
				StateProvinceCodeDigester digester = new StateProvinceCodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-stdMRC")) {
				StandardMRCDigester digester = new StandardMRCDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}
			if (args[0].equals("-moe")) {
				NationalMoeCodeDigester digester = new NationalMoeCodeDigester();
				String line = "";
				while ((line = reader.readLine()) != null) {
					insertIntoPostgresql(TypeConverter.convert(digester.digest(line), TypeConverter.SQL));
				}
				foundIt = true;
			}

			if (!foundIt) {
				System.out.println("No command recognized!");
			}

		} catch (Exception e) {
			System.out.println("\n");
			System.out.println("The expected format doesn't match! See NCSTools.jar -h for more information.");
			LOGGER.log(Level.SEVERE, e.getMessage());
		}
	}

	public static boolean insertIntoPostgresql(StringBuilder insert) {

		try (Statement stmt = conn.createStatement()) {
			String sql = insert.toString();
			if (!sql.startsWith("DELETE") && !sql.startsWith("UPDATE")) {
				stmt.executeUpdate(sql);
			}

		} catch (SQLException se) {
			LOGGER.log(Level.SEVERE, insert.toString() + "\n" + se.getMessage());
			return false;

		}

		return true;
	}

}

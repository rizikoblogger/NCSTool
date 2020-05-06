/**
 * 
 */
package br.com.riziko.ncs;

import java.io.FileNotFoundException;
import java.nio.charset.StandardCharsets;

import br.com.riziko.ncs.core.model.digester.DACDigester;
import br.com.riziko.ncs.core.model.digester.NCBCodeDigester;
import br.com.riziko.ncs.core.model.digester.NCSEntityDigester;
import br.com.riziko.ncs.core.model.digester.RNCCDigester;
import br.com.riziko.ncs.core.model.digester.RNFCDigester;
import br.com.riziko.ncs.core.model.digester.RNJCDigester;
import br.com.riziko.ncs.core.model.digester.RNSCDigester;
import br.com.riziko.ncs.core.model.digester.RNVCDigester;
import br.com.riziko.ncs.core.model.digester.Tabl091Digester;
import br.com.riziko.ncs.core.model.digester.Tabl098Digester;
import br.com.riziko.ncs.core.model.digester.Tabl120Digester;
import br.com.riziko.ncs.core.model.digester.Tabl347Digester;
import br.com.riziko.ncs.core.model.tir.NCSEntity;
import br.com.riziko.ncs.core.tool.TraditionalReader;
import br.com.riziko.ncs.core.tool.TypeConverter;

/**
 * @author Sophia
 *
 */
public class MongoRunner {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		run(args);
		System.out.println("Finished successfuly.");

	}
	public static void run(String[] args) {
		ScriptRunner scriptRunner = new ScriptRunner();
		String option = args[0].substring(8);
		String collection = args[0].substring(9);
		TraditionalReader reader = new TraditionalReader();
		
		try {
			reader.open(args[1],StandardCharsets.UTF_8);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}				
		
		if("-tabl091".equals(option)) {
			Tabl091Digester digester = new Tabl091Digester();
			String line = "";
			while ((line = reader.readLine()) != null) {
				scriptRunner.insertIntoMongoDB(collection,
				TypeConverter.convert(digester.digest(line),"json"));
			}
						
		}
		if("-tabl098".equals(option)) {
			Tabl098Digester digester = new Tabl098Digester();
			String line = "";
			while ((line = reader.readLine()) != null) {
				scriptRunner.insertIntoMongoDB(collection,
				TypeConverter.convert(digester.digest(line),"json"));
			}
						
		}
		if("-tabl120".equals(option)) {
			
			Tabl120Digester digester = new Tabl120Digester();
			String line = "";
			while ((line = reader.readLine()) != null) {
				scriptRunner.insertIntoMongoDB(collection,
				TypeConverter.convert(digester.digest(line),"json"));
			}
						
		}
		if("-tabl347".equals(option)) {
			Tabl347Digester digester = new Tabl347Digester();
			String line = "";
			while ((line = reader.readLine()) != null) {
				scriptRunner.insertIntoMongoDB(collection,
				TypeConverter.convert(digester.digest(line),"json"));
			}
						
		}
		if("-H4".equals(option)) {
			NCSEntityDigester entityDigester = new NCSEntityDigester();					
			for(NCSEntity entity:entityDigester.execute(args[1])) {
				scriptRunner.insertIntoMongoDB(collection,
				TypeConverter.convert(entity,"json"));
			}						
		} 	
		if("-dac".equals(option)) {
			DACDigester digester = new DACDigester();
			String line = "";
			while ((line = reader.readLine()) != null) {
				scriptRunner.insertIntoMongoDB(collection,
				TypeConverter.convert(digester.digest(line),"json"));
			}						
		}
		if("-RNJC".equals(option)) {
			RNJCDigester digester = new RNJCDigester();
			String line = "";
			while ((line = reader.readLine()) != null) {
				scriptRunner.insertIntoMongoDB(collection,
				TypeConverter.convert(digester.digest(line),"json"));
			}						
		}
		if("-RNCC".equals(option)) {
			RNCCDigester digester = new RNCCDigester();
			String line = "";
			while ((line = reader.readLine()) != null) {
				scriptRunner.insertIntoMongoDB(collection,
				TypeConverter.convert(digester.digest(line),"json"));
			}						
		}
		if("-RNFC".equals(option)) {
			RNFCDigester digester = new RNFCDigester();
			String line = "";
			while ((line = reader.readLine()) != null) {
				scriptRunner.insertIntoMongoDB(collection,
				TypeConverter.convert(digester.digest(line),"json"));
			}						
		}
		if("-RNVC".equals(option)) {
			RNVCDigester digester = new RNVCDigester();
			String line = "";
			while ((line = reader.readLine()) != null) {
				scriptRunner.insertIntoMongoDB(collection,
				TypeConverter.convert(digester.digest(line),"json"));
			}						
		}
		if("-RNSC".equals(option)) {
			RNSCDigester digester = new RNSCDigester();
			String line = "";
			while ((line = reader.readLine()) != null) {
				scriptRunner.insertIntoMongoDB(collection,
				TypeConverter.convert(digester.digest(line),"json"));
			}						
		}
		if("-RNAAC".equals(option)) {
			NCBCodeDigester digester = new NCBCodeDigester();
			String line = "";
			while ((line = reader.readLine()) != null) {
				scriptRunner.insertIntoMongoDB(collection,
				TypeConverter.convert(digester.digest(line),"json"));
			}						
		}
		System.out.println("Finished successfuly.");
	}	  
}

/**
 * 
 */
package br.com.riziko.ncs;

import java.util.ArrayList;
import java.util.Enumeration;

import br.com.riziko.ncs.core.tool.PropertieReader;
import br.com.riziko.ncs.core.tool.TypeConverter;

/**
 * @author Rogerio
 * 
 */
public class Main {

	/**
	 * This is the Main class for application console using.
	 * 
	 * Try java -jar NCSTools.jar -h to see more information.
	 * 
	 * @param args - [0] Options, [1] source-file, [2] target format.
	 */
	public static void main(String[] args) {

		boolean findIt = false;

		try {
			if (args[0].equals("-tx")) {
				TypeConverter.convertTransmission(args[1], args[2]);
				findIt = true;
			}
			
			if (args[0].equals("-clean")) {
				TypeConverter.convertCleanedTransmission(args[1]);
				findIt = true;
			}
			
			if (args[0].equals("-khn")) {
				TypeConverter.convertSegments(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-kff") || args[0].equals("-v")) {
				TypeConverter.convertSegments(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-H4") || args[0].equals("-v")) {
				TypeConverter.convertSegment8ToEntityConcept(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl091")) {
				TypeConverter.convertTabl091(args[1], args[2]);
				findIt = true;
			}

			if (args[0].equals("-tabl098")) {
				TypeConverter.convertTabl098(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl099")) {
				TypeConverter.convertTabl099(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl363")) {
				TypeConverter.convertTabl363(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl364")) {
				TypeConverter.convertTabl364(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl990")) {
				TypeConverter.convertTabl990(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl076")) {
				TypeConverter.convertTabl076(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl316")) {
				TypeConverter.convertTabl316(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl120")) {
				TypeConverter.convertTabl120(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl121")) {
				TypeConverter.convertTabl121(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl122")) {
				TypeConverter.convertTabl122(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl124")) {
				TypeConverter.convertTabl124(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl125")) {
				TypeConverter.convertTabl125(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl126")) {
				TypeConverter.convertTabl126(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl127")) {
				TypeConverter.convertTabl127(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl128")) {
				TypeConverter.convertTabl128(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl131")) {
				TypeConverter.convertTabl131(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl347")) {
				TypeConverter.convertTabl347(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl390")) {
				TypeConverter.convertTabl390(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl391")) {
				TypeConverter.convertTabl391(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-tabl462")) {
				TypeConverter.convertTabl462(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-mrd06p1")) {
				TypeConverter.convertMrd06p1(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-mrd06p2")) {
				TypeConverter.convertMrd06p2(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-mrd076")) {
				TypeConverter.convertMrd076h2(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-mrd098")) {
				TypeConverter.convertMrd098h6(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-mrd099")) {
				TypeConverter.convertMrd099(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-mrd107")) {
				TypeConverter.convertMrd107(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-mrd120")) {
				TypeConverter.convertMrd120(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-mrd300")) {
				TypeConverter.convertMrd300(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-mrd500")) {
				TypeConverter.convertMrd500(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-ncssXml")) {
				TypeConverter.convertNCSSXmlDocument(args[1], args[2]);
				findIt = true;
			}

			// Auxiliar tables
			if (args[0].equals("-niinSC")) {
				TypeConverter.convertNiinSC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-02")) {
				TypeConverter.convertReturnCodeDefinition(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-odrc")) {
				TypeConverter.convertODRC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-dac")) {
				TypeConverter.convertDAC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-RNJC")) {
				TypeConverter.convertRNJC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-pic")) {
				TypeConverter.convertPIC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-RNCC")) {
				TypeConverter.convertRNCC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-RNFC")) {
				TypeConverter.convertRNFC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-type2")) {
				TypeConverter.convertTypeII(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-RPDMRC")) {
				TypeConverter.convertRPDMRC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-RNVC")) {
				TypeConverter.convertRNVC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-RNAAC")) {
				TypeConverter.convertNCBCode(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-RNSC")) {
				TypeConverter.convertRNSC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-isc")) {
				TypeConverter.convertISC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-ncagesd")) {
				TypeConverter.convertNCAGESDCode(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-UFSDD")) {
				TypeConverter.convertUFSDDCode(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-TSC")) {
				TypeConverter.convertTSC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-USI")) {
				TypeConverter.convertUSIServCode(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-slf")) {
				TypeConverter.convertShelfLifeCode(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-phrase")) {
				TypeConverter.convertPhrase(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-UIC")) {
				TypeConverter.convertUIC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-qupc")) {
				TypeConverter.convertQUPC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-aac")) {
				TypeConverter.convertAAC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-ciic")) {
				TypeConverter.convertCIIC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-UOM")) {
				TypeConverter.convertUnitOfMeasure(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-SOSC")) {
				TypeConverter.convertSOSC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-SOSMC")) {
				findIt = true;
				TypeConverter.convertSOSMC(args[1], args[2]);
			}
			if (args[0].equals("-repCode")) {
				TypeConverter.convertRepCode(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-dC")) {
				TypeConverter.convertDemilCode(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-adpe")) {
				TypeConverter.convertADPE(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-pmiC")) {
				TypeConverter.convertPMIC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-typeOE")) {
				TypeConverter.convertTypeOECode(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-4RCC")) {
				TypeConverter.convertReasonForReturnCodificationCode(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-RFC")) {
				TypeConverter.convertRequestForCodification(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-rc")) {
				TypeConverter.convertReasonCode(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-mrrc")) {
				TypeConverter.convertMaintenanceRequestCode(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-spc")) {
				TypeConverter.convertStateProvinceCode(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-stdMRC")) {
				TypeConverter.convertStandardMRC(args[1], args[2]);
				findIt = true;
			}
			if (args[0].equals("-moe")) {
				TypeConverter.convertNationalMoeCode(args[1], args[2]);
				findIt = true;
			}

			if (args[0].equals("-contacts")) {
				TypeConverter.convertContacts(args[1]);
				findIt = true;
			}

			if (args[0].equals("-h")) {
				info();
				findIt = true;
			}

			if (args[0].equals("-script")) {
				ScriptRunner scriptRunner = new ScriptRunner();
				scriptRunner.importProcedure(args[1]);
				findIt = true;
			}
			
			if (args[0].contains("-mongodb")) {
				MongoRunner.run(args);	
				findIt = true;					
					
			}	  
			
			// Adicional Nacional 
			if (args[0].contains("-classe")) {
				TypeConverter. convertClasseNacional(args[1], args[2]);
				findIt = true;					
			}	
			if (args[0].contains("-atividadeEconomica")) {
				TypeConverter.convertAtividadeEconomica(args[1], args[2]);
				findIt = true;					
			}
			if (args[0].contains("-produto")) {
				TypeConverter.convertProduto(args[1], args[2]);
				findIt = true;					
			}
			if (args[0].contains("-descricao")) {
				TypeConverter.convertDescricao(args[1], args[2]);
				findIt = true;					
			}
			
			
			if (args[0].equals("-params")) {
				header();
				System.out.println("#             PARAMETERS FROM MRD.PROPERTIES FILE                   #");
				System.out.println("#                                                                   #");
				Enumeration<String> enumeration = PropertieReader.getKeys();
				ArrayList<String> lista = new ArrayList<>();
				do {
					String key = enumeration.nextElement();
					lista.add("# "+key+": "+PropertieReader.getString(key));
				}while(enumeration.hasMoreElements());
				lista.stream().sorted().forEach(s->System.out.println(s));
				footer();
				findIt = true;
			}
			 			
			if (!findIt) {
				info();
			}

		} catch (Exception e) {
			System.out.println("\n");
			System.out.println("The expected format doesn't match! See NCSTools.jar -h for more information.");
			e.printStackTrace();

		} 

	}
	
	/**
	 * This is the info method for application console using
	 * 
	 * Try java -jar NCSTools.jar -h to see its content.
	 */
	private static void info() {
		header();
		System.out.println("# Use: NCSTools.jar -option <source-file> [xml|json|sql|ddl]        #");
		System.out.println("# Options:                                                          #");
		System.out.println("# -tx - converts from NCS Transmission to selected one (i.e. json)  #");
		System.out.println("# -clean - removes I/O Header and EOF from NCS Transmission         #");
		System.out.println("# -khn - converts from Segment 8 format to selected one (i.e. json) #");
		System.out.println("# -H4 - from Seg 8 to NCS Entity before converting to selected one  #");
		System.out.println("# -kff - converts from KFF Segments format to selected one          #");
		System.out.println("#                                                                   #");
		System.out.println("# -niinSC - from Table 01 - DRN2670 (NIINSC)                        #");
		System.out.println("# -02 - from Table 02 - DRN9480 (RET CODE)                          #");
		System.out.println("# -odrc - from Table 03 - DRN4690 (ODRC)                            #");
		System.out.println("# -dac - from  Table 05 - DRN2640 (DAC)                             #");
		System.out.println("# -RNJC - from Table 06 - DRN2750 (RNJC)                            #");
		System.out.println("# -pic - from Table 07 - DRN2867 (PIC)                              #");
		System.out.println("# -RNCC - from Table 08 - DRN2910 (RNCC)                            #");
		System.out.println("# -RNFC - from Table 09 - DRN2920 (RNFC)                            #");
		System.out.println("# -type2 - from Table 10 - Type of Item Identification Code(TYPE II)#");
		System.out.println("# -RPDMRC - from Table 11 - DRN4765 (RPDMRC)                        #");
		System.out.println("# -RNVC - from Table 12 - DRN4780 (RNVC)                            #");
		System.out.println("# -RNAAC - from Table 13+ (DRN4130 + DRN2833 + DRN4130 + DRN4140)   #");
		System.out.println("# -RNSC - from Table 14 - DRN2923 (RNSC)                            #");
		System.out.println("# -isc - from  Table 20 - DRN2650 (ISC)                             #");
		System.out.println("# -ncagesd - from Table 24 - DRN2694 (NCAGESD)                      #");
		System.out.println("# -UFSDD - from Table 25 - DRN4235 (US F/DDC)                       #");
		System.out.println("# -TSC - from Table 26 - DRN5156 (TSC)                              #");
		System.out.println("# -USI - from Table 28 - DRN0745 (USI SERV CODE)                    #");
		System.out.println("# -slf - from Table 29 - DRN2493 (Shelf-Life Code)                  #");
		System.out.println("# -phrase - from Table 30 - DRN2862 (PHRASE)                        #");
		System.out.println("# -UIC - from Table 31 - DRN3050 (UIC)                              #");
		System.out.println("# -qupc - from Table 32 - DRN6106 (QUPC)                            #");
		System.out.println("# -aac - from  Table 33 - DRN2507 (AAC)                             #");
		System.out.println("# -ciic - from Table 34 - DRN2863 (CIIC)                            #");
		System.out.println("# -UOM - from Table 36 - DRN0107 (CIIC)                             #");
		System.out.println("# -SOSC - from Table 37 - DRN3690 (SOSC)                            #");
		System.out.println("# -SOSMC - from Table 38 - DRN2948 (SOSMC)                          #");
		System.out.println("# -repCode - from Table 39 - Reparability Code (REP CODE)           #");
		System.out.println("# -dC - from  Table 41 - DRN0167 (DEMIL CODE)                       #");
		System.out.println("# -adpe - from  Table 126 - DRN0801 (ADPE)                          #");
		System.out.println("# -pmiC - from Table 128 - DRN0802 (PMIC)                           #");
		System.out.println("# -typeOE - from Table 129 - DRN4238 (TYPE OE CODE)                 #");
		System.out.println("# -4RCC - from Table 130 - DRN9975 (REASON FOR RESPONSE)            #");
		System.out.println("# -RFC - from Table 131 - DRN0950 (RFC)                             #");
		System.out.println("# -rc - from Table 136 - DRN6998 (REASON CANCEL CODES)              #");
		System.out.println("# -spc - from Table 137 - US State and Canadian Province Codes      #");
		System.out.println("# -mrrc - from Table 138 - NSN Maintenance Request Reason Codes     #");
		System.out.println("# -stdMRC - from Table 139 -DRN3445 (STANDARD MRCS)                 #");
		System.out.println("#                                                                   #");
		System.out.println("# -tabl091 - converts from Item Name Code(INC) to selected format   #");
		System.out.println("# -tabl098 - converts from Names By Type to selected format         #");
		System.out.println("# -tabl099 - converts from Federal Supply Class to selected format  #");
		System.out.println("# -tabl363 - converts from Non-approved INC to selected format      #");
		System.out.println("# -tabl364 - converts from Pseudo INC Key-word INC                  #");
		System.out.println("# -tabl990 - converts from REPL_NCAGE_3595 INC for cancelled ones   #");
		System.out.println("# -tabl076 - converts from Active Federal Supply Class / Group      #");
		System.out.println("# -tabl120 - converts from Edits for INC Requirement (Edit Guide 1) #");
		System.out.println("# -tabl121 - converts from LGA, LGB, LGC Edits (Edit Guide 2)       #");
		System.out.println("# -tabl122 - converts from FIIG to INC cross-reference(Edit Guide 3)#");
		System.out.println("# -tabl124 - converts from Entire Master Requirement Directory (MRD)#");
		System.out.println("# -tabl125 - converts from ISAC Table Names, codes and replies      #");
		System.out.println("# -tabl126 - converts from Master Requirement Codes(MRC)+reply table#");
		System.out.println("# -tabl127 - converts from MRD Decode tables | Assigned mode codes  #");
		System.out.println("# -tabl128 - converts from Reply Tables and Codes to selected format#");
		System.out.println("# -tabl131 - converts from Styles and Titles Reply Table            #");
		System.out.println("# -tabl316 - converts from FSG_NOTE_DAT_GROUP with all active FSGs  #");
		System.out.println("# -tabl347 - converts from MRC Requirement Definitions              #");
		System.out.println("# -tabl390 - converts from Reply Format for Each Mode Code          #");
		System.out.println("# -tabl391 - converts from Key Group Code | 19-basic categories     #");
		System.out.println("# -tabl462 - converts from Table 462 Physical Drawing categories    #");
		System.out.println("#                                                                   #");
		System.out.println("# -mrd06p1 - converts from traditional MRD file 06p1                #");
		System.out.println("# -mrd06p2 - converts from traditional MRD file 06p2                #");
		System.out.println("# -mrd076 - converts from traditional MRD file 076H2                #");
		System.out.println("# -mrd098 - converts from traditional MRD file 098H6                #");
		System.out.println("# -mrd099 - converts from traditional MRD file 099                  #");
		System.out.println("# -mrd107 - converts from traditional MRD file 107                  #");
		System.out.println("# -mrd120 - converts from traditional MRD file 120                  #");
		System.out.println("# -mrd300 - converts from traditional MRD file 300                  #");
		System.out.println("# -mrd500 - converts from traditional MRD file 500                  #");
		System.out.println("# -produto - converts from CTNRJ/'Produto' Model                    #");
		System.out.println("# -descricao - converts from CTNRJ/'Descricao' Model                #");
		System.out.println("#                                                                   #");
		System.out.println("# -contacts - converts from Segment8 to Native 'List of Contacts'   #");
		System.out.println("#                                                                   #");
		System.out.println("# -moe - from CodSP-5 list of local MOE codes used in each nation   #");
		System.out.println("#                                                                   #");
		System.out.println("# -ncssXml - converts from NCSSXML (to json only)                   #");
		System.out.println("#                                                                   #");
		System.out.println("# -script - connects to NCSDatabase and runs SQL commands           #");
		System.out.println("#                                                                   #");
		System.out.println("# -mongodb<-option> - converts according option. Insert into MongoDB.#");
		System.out.println("#                                                                   #");		
		System.out.println("# -params - shows its default parameters from mrd.properties file.  #");
		footer();

	}

	private static void header() {
		System.out.println("\n");
		System.out.println("#####################################################################");
		System.out.println("#              NCS Tools version 0.0.1 (April 07, 2020)             #");
		System.out.println("#####################################################################");
		System.out.println("#                                                                   #");
	}

	private static void footer() {
		System.out.println("#                                                                   #");
		System.out.println("# Use: NCSTools.jar -option <source-file> [xml|json|sql|ddl] or     #");
		System.out.println("#      NCSTools.jar -mongodb<-option>  <source-file>                #");
		System.out.println("#####################################################################");

		System.out.println("\n");
	}
}

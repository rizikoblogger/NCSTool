package br.com.riziko.ncs;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Map;

import br.com.riziko.ncs.core.tool.PropertieReader;
import br.com.riziko.ncs.core.tool.TypeConverter;

/**
 * @author Rogerio
 *
 */
public class Main {

	public static final String BARRA = "#####################################################################";
	public static final String SEPARADORA = "#                                                                   #";

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

			if(args[0].contains("-generate-tir")) {
				Map<String, StringBuilder> mapTir = ScriptRunner.createTIR();
				for(Map.Entry<String,StringBuilder> map: mapTir.entrySet()){
					println(map.getKey()+":"+map.getValue());
				}
			}


			if (args[0].equals("-params")) {
				header();
				println("#             PARAMETERS FROM MRD.PROPERTIES FILE                   #");
				println(SEPARADORA);
				Enumeration<String> enumeration = PropertieReader.getKeys();
				ArrayList<String> lista = new ArrayList<>();
				do {
					String key = enumeration.nextElement();
					lista.add("# "+key+": "+PropertieReader.getString(key));
				}while(enumeration.hasMoreElements());
				lista.stream().sorted().forEach(Main::println);
				footer();
				findIt = true;
			}

			if (!findIt) {
				info();
			}

		} catch (Exception e) {
			println("\n");
			println("The expected format doesn't match! See NCSTools.jar -h for more information.");
			e.printStackTrace();

		}

	}

	private static void println(String s) {
		System.out.println(s);
	}

	/**
	 * This is the info method for application console using
	 *
	 * Try java -jar NCSTools.jar -h to see its content.
	 */
	private static void info() {
		header();
		println("# Use: NCSTools.jar -option <source-file> [xml|json|sql|ddl]        #");
		println("# Options:                                                          #");
		println("# -tx - converts from NCS Transmission to selected one (i.e. json)  #");
		println("# -clean - removes I/O Header and EOF from NCS Transmission         #");
		println("# -khn - converts from Segment 8 format to selected one (i.e. json) #");
		println("# -H4 - from Seg 8 to NCS Entity before converting to selected one  #");
		println("# -kff - converts from KFF Segments format to selected one          #");
		println(SEPARADORA);
		println("# -niinSC - from Table 01 - DRN2670 (NIINSC)                        #");
		println("# -02 - from Table 02 - DRN9480 (RET CODE)                          #");
		println("# -odrc - from Table 03 - DRN4690 (ODRC)                            #");
		println("# -dac - from  Table 05 - DRN2640 (DAC)                             #");
		println("# -RNJC - from Table 06 - DRN2750 (RNJC)                            #");
		println("# -pic - from Table 07 - DRN2867 (PIC)                              #");
		println("# -RNCC - from Table 08 - DRN2910 (RNCC)                            #");
		println("# -RNFC - from Table 09 - DRN2920 (RNFC)                            #");
		println("# -type2 - from Table 10 - Type of Item Identification Code(TYPE II)#");
		println("# -RPDMRC - from Table 11 - DRN4765 (RPDMRC)                        #");
		println("# -RNVC - from Table 12 - DRN4780 (RNVC)                            #");
		println("# -RNAAC - from Table 13+ (DRN4130 + DRN2833 + DRN4130 + DRN4140)   #");
		println("# -RNSC - from Table 14 - DRN2923 (RNSC)                            #");
		println("# -isc - from  Table 20 - DRN2650 (ISC)                             #");
		println("# -ncagesd - from Table 24 - DRN2694 (NCAGESD)                      #");
		println("# -UFSDD - from Table 25 - DRN4235 (US F/DDC)                       #");
		println("# -TSC - from Table 26 - DRN5156 (TSC)                              #");
		println("# -USI - from Table 28 - DRN0745 (USI SERV CODE)                    #");
		println("# -slf - from Table 29 - DRN2493 (Shelf-Life Code)                  #");
		println("# -phrase - from Table 30 - DRN2862 (PHRASE)                        #");
		println("# -UIC - from Table 31 - DRN3050 (UIC)                              #");
		println("# -qupc - from Table 32 - DRN6106 (QUPC)                            #");
		println("# -aac - from  Table 33 - DRN2507 (AAC)                             #");
		println("# -ciic - from Table 34 - DRN2863 (CIIC)                            #");
		println("# -UOM - from Table 36 - DRN0107 (CIIC)                             #");
		println("# -SOSC - from Table 37 - DRN3690 (SOSC)                            #");
		println("# -SOSMC - from Table 38 - DRN2948 (SOSMC)                          #");
		println("# -repCode - from Table 39 - Reparability Code (REP CODE)           #");
		println("# -dC - from  Table 41 - DRN0167 (DEMIL CODE)                       #");
		println("# -adpe - from  Table 126 - DRN0801 (ADPE)                          #");
		println("# -pmiC - from Table 128 - DRN0802 (PMIC)                           #");
		println("# -typeOE - from Table 129 - DRN4238 (TYPE OE CODE)                 #");
		println("# -4RCC - from Table 130 - DRN9975 (REASON FOR RESPONSE)            #");
		println("# -RFC - from Table 131 - DRN0950 (RFC)                             #");
		println("# -rc - from Table 136 - DRN6998 (REASON CANCEL CODES)              #");
		println("# -spc - from Table 137 - US State and Canadian Province Codes      #");
		println("# -mrrc - from Table 138 - NSN Maintenance Request Reason Codes     #");
		println("# -stdMRC - from Table 139 -DRN3445 (STANDARD MRCS)                 #");
		println(SEPARADORA);
		println("# -tabl091 - converts from Item Name Code(INC) to selected format   #");
		println("# -tabl098 - converts from Names By Type to selected format         #");
		println("# -tabl099 - converts from Federal Supply Class to selected format  #");
		println("# -tabl363 - converts from Non-approved INC to selected format      #");
		println("# -tabl364 - converts from Pseudo INC Key-word INC                  #");
		println("# -tabl990 - converts from REPL_NCAGE_3595 INC for cancelled ones   #");
		println("# -tabl076 - converts from Active Federal Supply Class / Group      #");
		println("# -tabl120 - converts from Edits for INC Requirement (Edit Guide 1) #");
		println("# -tabl121 - converts from LGA, LGB, LGC Edits (Edit Guide 2)       #");
		println("# -tabl122 - converts from FIIG to INC cross-reference(Edit Guide 3)#");
		println("# -tabl124 - converts from Entire Master Requirement Directory (MRD)#");
		println("# -tabl125 - converts from ISAC Table Names, codes and replies      #");
		println("# -tabl126 - converts from Master Requirement Codes(MRC)+reply table#");
		println("# -tabl127 - converts from MRD Decode tables | Assigned mode codes  #");
		println("# -tabl128 - converts from Reply Tables and Codes to selected format#");
		println("# -tabl131 - converts from Styles and Titles Reply Table            #");
		println("# -tabl316 - converts from FSG_NOTE_DAT_GROUP with all active FSGs  #");
		println("# -tabl347 - converts from MRC Requirement Definitions              #");
		println("# -tabl390 - converts from Reply Format for Each Mode Code          #");
		println("# -tabl391 - converts from Key Group Code | 19-basic categories     #");
		println("# -tabl462 - converts from Table 462 Physical Drawing categories    #");
		println(SEPARADORA);
		println("# -mrd06p1 - converts from traditional MRD file 06p1                #");
		println("# -mrd06p2 - converts from traditional MRD file 06p2                #");
		println("# -mrd076 - converts from traditional MRD file 076H2                #");
		println("# -mrd098 - converts from traditional MRD file 098H6                #");
		println("# -mrd099 - converts from traditional MRD file 099                  #");
		println("# -mrd107 - converts from traditional MRD file 107                  #");
		println("# -mrd120 - converts from traditional MRD file 120                  #");
		println("# -mrd300 - converts from traditional MRD file 300                  #");
		println("# -mrd500 - converts from traditional MRD file 500                  #");
		println("# -produto - converts from CTNRJ/'Produto' Model                    #");
		println("# -descricao - converts from CTNRJ/'Descricao' Model                #");
		println(SEPARADORA);
		println("# -contacts - converts from Segment8 to Native 'List of Contacts'   #");
		println(SEPARADORA);
		println("# -moe - from CodSP-5 list of local MOE codes used in each nation   #");
		println(SEPARADORA);
		println("# -ncssXml - converts from NCSSXML (to json only)                   #");
		println(SEPARADORA);
		println("# -script - connects to NCSDatabase and runs SQL commands           #");
		println(SEPARADORA);
		println("# -mongodb<-option> -converts according option. Insert into MongoDB.#");
		println(SEPARADORA);
		println("# -params - shows its default parameters from mrd.properties file.  #");
		footer();

	}

	private static void header() {
		println("\n");
		println(BARRA);
		println("#              NCS Tools version 0.0.1 (April 07, 2020)             #");
		println(BARRA);
		println(SEPARADORA);
	}

	private static void footer() {
		println(SEPARADORA);
		println("# Use: NCSTools.jar -option <source-file> [xml|json|sql|ddl] or     #");
		println("#      NCSTools.jar -mongodb<-option>  <source-file>                #");
		println(BARRA);

		println("\n");
	}
}

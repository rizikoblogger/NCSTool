/*********************************************/
/* Nato Codification System Support Records  */
/* based on AcodP1/JAN/2020 from NSPA & FLIS */
/*                                           */
/* Developed by Rogerio Fersan as RIZIKO Inc */
/*        rogerio.fersan@riziko.com.br       */
/*********************************************/
/* You can use it under GNU-Restricted Lic.  */
/*********************************************/

const listNiinSC2670 = {[{
  "code": 0,
  "definition": "Item is active",
  "inRespectOf": "Submitted NSN",
  "secondaryOutputALLCodes": "KFD",
  "secondaryOutputLTICode": "None primary output code KIR is applicable",
  "instructions": "If the file data represents your item of supply submit, if applicable, a LAU transaction. Otherwise use the NSN in your supply system."
},{
  "code": 1,
  "definition": "Item identification is active but the item is nonprocurable within the Service organisations of the country of origin, i.e. the record is maintained only for use by other NATO Nations",
  "inRespectOf": "Submitted NSN",
  "secondaryOutputALLCodes": "KFD",
  "secondaryOutputLTICode": "None primary output code KIR is applicable",
  "instructions": "If the file data represents an item of supply required by your country, submit a LAU transaction. Otherwise use the NSN in your supply system."
},{
  "code": 3,
  "definition": "Item is 'Cancelled with Replacement'?.",
  "inRespectOf": "'Replacement NSNs'?.",
  "secondaryOutputALLCodes": "KFD (1)",
  "secondaryOutputLTICode": "KFE (1)",
  "instructions": "If the file data represents your item of supply submit, if applicable, a LAU transaction. If the original input is applicable to one of the 'Replacement NSNs'? resubmit using the appropriate 'Replacement NSN'?"
},{
  "code": 4,
  "definition": "Item is 'Cancelled without Replacement'?.",
  "inRespectOf": "None",
  "secondaryOutputALLCodes": "-",
  "secondaryOutputLTICode": "-",
  "instructions": "For reinstatement submit, if applicable, a manual request via E-mail / NATO Form AC/135-No 34 or via NSN Online Maintenance Tool (via E-CAT for USA)."
},{
  "code": 5,
  "definition": "Item is 'Cancelled-Use'?.",
  "inRespectOf": "'Use NSN'?",
  "secondaryOutputALLCodes": "KFD",
  "secondaryOutputLTICode": "KFE",
  "instructions": "If the file data represents your item of supply submit, if applicable, a LAU transaction. If the original input is applicable to the 'Use NSN'? resubmit the 'Replacement NSN'?."
},{
  "code": 6,
  "definition": "Item is inactive, i.e. no recorded MOE Rule Number.",
  "inRespectOf": "Submitted NSN",
  "secondaryOutputALLCodes": "KFD (2)",
  "secondaryOutputLTICode": "None",
  "instructions": "If the file data represents your item of supply, submit a LAU transaction."
},{
  "code": 7,
  "definition": "Item is 'Cancelled Duplicate'?.",
  "inRespectOf": "'Duplicate NSN'?",
  "secondaryOutputALLCodes": "KFD (1)",
  "secondaryOutputLTICode": "KFE (1)",
  "instructions": "If original input is applicable to duplicate item, resubmit using the 'Duplicate NSN'?."
},{
  "code": 8,
  "definition": "Item is 'Cancelled Inactive'?.",
  "inRespectOf": "None",
  "secondaryOutputALLCodes": "-",
  "secondaryOutputLTICode": "-",
  "instructions": "For reinstatement submit, if applicable, a manual request via E-mail / NATO Form AC/135-No 34 or via NSN Online Maintenance Tool (via E-CAT for USA)."
},{
  "code": 9,
  "definition": "Item identification is temporarily maintained in the TIR and will be cancelled with the withdrawal of the last user.",
  "inRespectOf": "Submitted NSN",
  "secondaryOutputALLCodes": "None",
  "secondaryOutputLTICode": "KFD",
  "instructions": "Submit, if necessary, a LAU transaction for the replacement NSN."
}]};

const listRetCode9480 = {[{
  "code": "AB",
  "definition": "More than three Reference Numbers, Logistics have been submitted under the same Document Control Number when searching another country's Reference Numbers. This output is returned under DIC KRE, Segment P."
},{
  "code": "AE",
  "definition": "Your transaction LAR, LDR or LCR is returned because the NCAGE Code and the NSN represent the same country. A Segment P record is returned. Submit your request manually using NATO Form AC/135-No 34 or NSN Online Maintenance Tool (E-CAT for USA)."
},{
  "code": "AU",
  "definition": "Your submittal either contained or matched a NIIN assigned by another NATO or Tier 2 sponsored country. No data (except the NSN) is authorized to be released except by the country that assigned the NSN. Verify the NSN and if correct, mail your submittal directly to the NCB of the responsible country. This output is returned under DIC KRE, Segment Q."
},{
  "code": "BZ",
  "definition": "Invalid combination of RNCC-DAC submitted."
},{
  "code": "CM",
  "definition": "Addition of a reference for this NSN requires manual review and therefore your request has to be resubmitted manually using NATO Form AC/135-No 34 or NSN Online Maintenance Tool (E-CAT for USA). Your country is not authorized to submit this transaction directly."
},{
  "code": "CR",
  "definition": "The RNCC applied against the submitted Reference Number conflicts with the RNCC allowed for the cited NCAGE Code. A Segment Q record is returned containing the submitted RNCC."
},{
  "code": "DN",
  "definition": "Submittal to change or delete a data element/segment cannot be processed because the data element/segment is not recorded against the item (NSN) which is recorded in the TIR. A Segment P record is returned. Note: If you receive this Return Code and it should have been NR, forward a problem report to codifying country with copy to other NCBs."
},{
  "code": "EC",
  "definition": "Submittal reflects a data element(s) (other than the data element(s) being added, changed or deleted) which is different than the data element(s) recorded against the item in the TIR. A Segment Q record containing the DRN and the DRN value of the TIR data which is different from the submitted data is returned."
},{
  "code": "EQ",
  "definition": "Your submittal contains an NCAGE Code which reflects a NATO Commercial and Government Entity Status Designator Code -NCAGESD Code- of C, E, F, H, U or W and the RNCC/RNVC combination is other than 2-9, 3-9, 5-9, 7-9 or C-1."
},{
  "code": "EV",
  "definition": "The reflected data element(s) is (are) invalid due to validation checks made against appropriate SSR Look-Up Table(s)."
},{
  "code": "FN",
  "definition": "Submitted NIIN has not been assigned to an Item Identification. Verify submitted NIIN. If in error, correct and resubmit. If correct, submit the transaction to the NCB by manual request via E-mail / NATO Form AC/135-No 34 or via NSN Online Maintenance Tool (via E-CAT for USA) and include all applicable input data."
},{
  "code": "GW",
  "definition": "Your submittal was already recorded in our Suspense File under the same Document Control Number -DCN-."
},{
  "code": "HN",
  "definition": "Item is in \"Lock-out\" status. Submit interrogation request LTI. Interrogation results will indicate status (effective date of cancellation, replacement NSN, if any etc.) of \"lockedout\" NSN in Segment Z. To reinstate an item identification that was cancelled erroneously, cancelled-invalid, or cancelled-inactive, forward to the codifying country a manual request via E-mail / NATO Form AC/135-No 34 or via NSN Online Maintenance Tool (via E-CAT for USA) stating the reason for reinstatement. Also provide the NSN, related Reference Number(s), applicable NCAGE Codes and supporting technical data, if any, of the item identification to be reinstated."
},{
  "code": "HV",
  "definition": "Transaction contained a submitter code which is not compatible with the routing identifier in the telecommunication header. Rejected transactions will be returned to the submitter under KRE, Segment P. IC Submittal contained invalid combination of input DICs under one Document Control Number. See input DIC LMD for acceptable combination of input DICs."
},{
  "code": "IV",
  "definition": "The submitted data element(s) has invalid format or does not appear on the appropriate validation tables. A Segment P or Q is returned as applicable, depending upon the DRNs involved."
},{
  "code": "JR",
  "definition": "The Reference Number with a Reference Number Justification Code did not match a Reference Number in the TIR ; therefore, the Reference Number Justification Code is not applicable. Verify the Reference Number. If correct, resubmit without the Reference Number Justification Code."
},{
  "code": "KP",
  "definition": "The Reference Number with a Reference Number Justification Code created an actual duplicate of an item in the TIR. Segment P is returned with KFD file data for the matched item. Review the KFD file data. If the existing item represents your item of supply, submit a LAU transaction if not recorded as a user."
},{
  "code": "LV",
  "definition": "Your item was returned for the following reasons(s) : (a) Your country is not an authorized submitter for this DIC,. Segment P is returned. (b) Your country cannot submit this transaction directly because the item is subject to stringent control and the release of data to the NATO countries must be taken under consideration. Segment Q is returned. Processing may be accomplished by submitting the transaction and the Segment Q output record to the NCB concerned by manual request via E-mail / NATO Form AC/135-No 34 or via NSN Online Maintenance Tool (via E-CAT for USA)."
},{
  "code": "MI",
  "definition": "A mandatory data element is missing in the input transaction. A Segment P record reflecting the DRN of the missing data element is returned."
},{
  "code": "NR",
  "definition": "A proposed change to an existing item identification cannot be processed because your activity proposing the change is not authorized data submitter as represented by the recorded MOE RULE NUMBER on the item. Correct and resubmit. Note: If you receive this Return Code and it should have been DN, forward a problem report to codifying country with copy to other NCBs."
},{
  "code": "NS",
  "definition": "The status of this NIIN is not appropriate for the submitted transaction."
},{
  "code": "OP",
  "definition": "Submitted data for the DRN(s) reflected in this Segment P output record contained unauthorized symbol(s), letter(s), numeral(s), or blank positions."
},{
  "code": "RS",
  "definition": "Your country is not the authorized data submitter as represented by : (1) the MOE RULE NUMBER submitted or (2) the RNAAC recorded against the Reference in the TIR or (3) the Submitter Code versus the RNAAC in the input transaction."
},{
  "code": "SC",
  "definition": "Submitted NIIN has been assigned to a Security Classified Item Identification. Verify submitted NIIN. If in error, correct and resubmit proposal. If correct, submit the transaction to the NCB by manual request via E-mail / NATO Form AC/135-No 34 or via NSN Online Maintenance Tool (via E-CAT for USA). The NCB will forward to the originator of the classified item."
},{
  "code": "SM",
  "definition": "Proposed action to add or change data element(s)/segment(s) for this NSN is already recorded in the TIR, or the proposed maintenance action contained identical data elements repeated in this input under the same DIC and Document Control Serial Number/Package. Review for possible input error. If in error, correct and resubmit. If correct, no further action required. TIR data coded KFD will be included as secondary output only when the input DIC is LAU or LSA."
},{
  "code": "TC",
  "definition": "Submitted NCAGE Code cancelled without replacement."
},{
  "code": "TD",
  "definition": "Invalid combination of RNVC-RNCC submitted."
},{
  "code": "TP",
  "definition": "A system error was encountered during the processing of your input transaction. DO NOT resubmit that transaction. Query the responsible NCB for information concerning status of error resolution/resubmission of your transaction. Your inquiry must include the DIC, DCN and NIIN (if available) of the transaction initially submitted."
},{
  "code": "UG",
  "definition": "Submittal cannot be processed. When the Extra Long Reference Number Indicator Code is present in the 32nd position of the Reference Number to signify an Extra Long Reference Number, the RNVC must be \"1\". Segment P is returned."
},{
  "code": "UJ",
  "definition": "Submitted LAR, or LCR or LDR transaction cannot be processed because the RNCC is other than 5, or 6 or 8. Segment P is returned."
},{
  "code": "UV",
  "definition": "Conflict between DIC and DRN Value. The value of this DRN is not authorized for this Document Identifier Code. Review the transaction and resubmit with corrected value."
},{
  "code": "XA",
  "definition": "Your submittal for interrogation/search is returned as it matched a nuclear ordnance item. Verify your submittal and, if correct, return it by manual request via E-mail / NATO Form AC/135-No 34 or via NSN Online Maintenance Tool (via E-CAT for USA) together with the related DIC KRE return to the codifying NCB. Action will be taken by the NCB, through the nuclear ordnance manager, to complete the processing of your submittal. (Code for United States use only)."
},{
  "code": "ZH",
  "definition": "The number of Output Data Request Code DRNs and/or data elements submitted for interrogation under the same DCSN exceed the maximum admitted."
},{
  "code": "5N",
  "definition": "Two or more records were contained in the submittal of a DIC with the same DCN. Positions which must contain the same identical information differ."
}]};

const listOdrc4690 = {[{
  "code": 118,
  "requestSegment": "A",
  "use": "LTI"
},{
  "code": 118,
  "requestSegment": "B",
  "use": "LTI"
},{
  "code": 118,
  "requestSegment": "C",
  "use": "LTI"
},{
  "code": 118,
  "requestSegment": "E",
  "use": "LTI"
},{
  "code": 118,
  "requestSegment": "H",
  "use": "LTI"
},{
  "code": 118,
  "requestSegment": "M",
  "use": "LTI"
},{
  "code": 118,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 119,
  "requestSegment": "A",
  "use": "LTI"
},{
  "code": 119,
  "requestSegment": "B",
  "use": "LTI"
},{
  "code": 119,
  "requestSegment": "C",
  "use": "LTI"
},{
  "code": 119,
  "requestSegment": "E",
  "use": "LTI"
},{
  "code": 119,
  "requestSegment": "H",
  "use": "LTI"
},{
  "code": 119,
  "requestSegment": "V",
  "use": "LTI"
},{
  "code": 119,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 120,
  "requestSegment": "A",
  "use": "LTI"
},{
  "code": 120,
  "requestSegment": "B",
  "use": "LTI"
},{
  "code": 120,
  "requestSegment": "C",
  "use": "LTI"
},{
  "code": 120,
  "requestSegment": "E",
  "use": "LTI"
},{
  "code": 120,
  "requestSegment": "H",
  "use": "LTI"
},{
  "code": 120,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 9801,
  "requestSegment": "W",
  "use": "NUL"
},{
  "code": 9901,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 9906,
  "requestSegment": "A",
  "use": "LTI"
},{
  "code": 9906,
  "requestSegment": "B",
  "use": "LTI"
},{
  "code": 9906,
  "requestSegment": "C",
  "use": "LTI"
},{
  "code": 9906,
  "requestSegment": "E",
  "use": "LTI"
},{
  "code": 9906,
  "requestSegment": "M",
  "use": "LTI"
},{
  "code": 9906,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 9907,
  "requestSegment": "A",
  "use": "LTI"
},{
  "code": 9907,
  "requestSegment": "B",
  "use": "LTI"
},{
  "code": 9907,
  "requestSegment": "C",
  "use": "LTI"
},{
  "code": 9907,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 9909,
  "requestSegment": "A",
  "use": "LTI"
},{
  "code": 9909,
  "requestSegment": "B",
  "use": "LTI"
},{
  "code": 9909,
  "requestSegment": "C",
  "use": "LTI"
},{
  "code": 9909,
  "requestSegment": "H",
  "use": "LTI"
},{
  "code": 9909,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 9914,
  "requestSegment": "A",
  "use": "LTI"
},{
  "code": 9914,
  "requestSegment": "B",
  "use": "LTI"
},{
  "code": 9914,
  "requestSegment": "C",
  "use": "LTI"
},{
  "code": 9914,
  "requestSegment": "E",
  "use": "LTI"
},{
  "code": 9914,
  "requestSegment": "V",
  "use": "LTI"
},{
  "code": 9914,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 9915,
  "requestSegment": "A",
  "use": "LTI"
},{
  "code": 9915,
  "requestSegment": "B",
  "use": "LTI"
},{
  "code": 9915,
  "requestSegment": "C",
  "use": "LTI"
},{
  "code": 9915,
  "requestSegment": "E",
  "use": "LTI"
},{
  "code": 9915,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 9936,
  "requestSegment": "H",
  "use": "LTI"
},{
  "code": 9936,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 9939,
  "requestSegment": "B",
  "use": "LTI"
},{
  "code": 9939,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 9940,
  "requestSegment": "A",
  "use": "LTI"
},{
  "code": 9940,
  "requestSegment": "C",
  "use": "LTI"
},{
  "code": 9940,
  "requestSegment": "V",
  "use": "LTI"
},{
  "code": 9940,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 9942,
  "requestSegment": "A",
  "use": "LTI"
},{
  "code": 9942,
  "requestSegment": "M",
  "use": "LTI"
},{
  "code": 9942,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 9948,
  "requestSegment": "C",
  "use": "LTI"
},{
  "code": 9948,
  "requestSegment": "Z",
  "use": "LTI"
},{
  "code": 9949,
  "requestSegment": "E",
  "use": "LTI"
},{
  "code": 9949,
  "requestSegment": "Z",
  "use": "LTI"
}]};

const listDac2640 = {[{
  "code": "1",
  "explanation": "The Reference Number is represented by a drawing and the drawing was available to the RNAAC at the time of submission of the Reference Number. The RNAAC will furnish the drawing upon request."
},{
  "code": "2",
  "explanation": "The Reference Number is represented by a drawing and the drawing was available to the RNAAC at the time of submission of the Reference Number ; however, the RNAAC cannot furnish the drawing."
},{
  "code": "3",
  "explanation": "The Reference Number is represented by technical documentation other than a drawing and the documentation was available to the RNAAC at the time of submission of the Reference Number. The RNAAC will furnish the technical documentation upon request."
},{
  "code": "4",
  "explanation": "The Reference Number is represented by technical documentation other than a drawing and the documentation was available to the RNAAC at the time of submission of the Reference Number ; the RNAAC cannot furnish the technical documentation."
},{
  "code": "5",
  "explanation": "The Reference Number is represented by a drawing, but the drawing was not available to the RNAAC at the time of submission of the Reference Number."
},{
  "code": "6",
  "explanation": "The Reference Number is represented by technical documentation other than a drawing but the documentation was not available to the RNAAC at the time of submission of the Reference Number."
},{
  "code": "9",
  "explanation": "The Reference Number is of the type for which an indication of document availability is not required or the Reference Number has not been verified by the manufacturer. A The reference number is represented by an engineering drawing and the drawing is available for unlimited use. The drawing will be furnished by the activity identified by the RNAAC upon request."
},{
  "code": "B",
  "explanation": "The reference number is represented by an engineering drawing. The drawing is available for limited use under the terms of the rights-in-data clause of the contract by which the data was obtained and will be furnished by the activity identified by the RNAAC upon request. Descriptive data based on Limited Rights information will not be released to the general public through publications or other media."
},{
  "code": "C",
  "explanation": "The reference number is represented by an engineering drawing. The drawing is available for unlimited use but under the security measures specified for the level of security classification assigned. The drawing will be furnished only to qualified requesters by the activity identified by the RNAAC."
},{
  "code": "D",
  "explanation": "The reference number is represented by an engineering drawing. The drawing is available for limited use under the terms of the rights-in-data clause of the contract by which the data was obtained, and under the security measures specified for the level of security classification assigned. The drawing will be furnished only to qualified requesters by the activity identified by the RNAAC. Descriptive data based on Limited Rights information will not be released to the general public through publications or other media."
},{
  "code": "E",
  "explanation": "The reference number is represented by engineering data other than an engineering drawing. The data is available for unlimited use and will be furnished by the activity identified by the RNAAC upon request."
},{
  "code": "F",
  "explanation": "The reference number is represented by engineering data other than an engineering drawing. The data is available for limited use under the terms of the rights-in-data clause of the contract by which the data was obtained and will be furnished by the activity identified by the RNAAC upon request. Descriptive data based on Limited Rights information will not be released to the general public through publications or other media."
},{
  "code": "G",
  "explanation": "The reference number is represented by engineering data other than an engineering drawing. The data is available for unlimited use but under the security measures specified for the level of security classification assigned. The data will be furnished only to qualified requesters by the activity identified by the RNAAC."
},{
  "code": "H",
  "explanation": "The reference number is represented by engineering data other than an engineering drawing. The data is available for limited use under the terms of the rights-in-data clause of the contract by which the data was obtained, and under the security measures specified for the level of security classification assigned. The data will be furnished only to qualified requesters by the activity identified by the RNAAC. Descriptive data based on Limited Rights information will not be released to the general public through publications or other media."
},{
  "code": "U",
  "explanation": "A reference number represented by a bar code structure in accordance with an organization such as theGS1. The technical documentation may or may not be available to the RNAAC."
},{
  "code": "X",
  "explanation": "Filler code found on NSNs that were assigned before DACs were created."
}]};

const listRnjc2750 = {[{
  "code": "1",
  "explanation": "Technical data on the possible duplicated item identification have been reviewed and the additional items of production (Reference Numbers) are not acceptable for the item of supply."
},{
  "code": "2",
  "explanation": "The additional items of production associated with the proposal have been reviewed and are correctly proposed as primary numbers to identify the item of supply. Collaborating activities have not agreed to the additional items of production."
},{
  "code": "3",
  "explanation": "The additional items of production associated with the proposal have been reviewed and are correctly proposed as primary numbers to identify the item of supply. Time does not permit collaboration of these additional items of production."
},{
  "code": "4",
  "explanation": "Data on the additional items of production is not available and acceptability of the additional items of production cannot be determined."
},{
  "code": "5",
  "explanation": "Match of Reference Number(s) by an association code is not valid for this reference."
},{
  "code": "6",
  "explanation": "The item of supply represented by the possible duplicate NSN is not a technically acceptable replacement in the application requiring the item of production identified by the submitted reference. Reference Number Justification Code 6 shall be used only for those Reference Numbers which are coded Reference Number Category Code -RNCCC and Reference Number Variation Code -RNVC- 1."
},{
  "code": "7",
  "explanation": "The Reference Number represents an obsolete or discontinued item which has \"rolled back\" into stock and it would not be appropriate to mix stock with the current item. Reference Number Justification Code \"7\" shall be used only when it is necessary to acquire an NSN for a cancelled, superseded, or obsolete Reference Number which matches a Reference Number coded RNCC 5 and RNVC 9."
}]};

const listPic2867 = {[{
  "code": "0",
  "explanation": "Immediate processing. Generated on output from the US that results from an on-line TIR update. Only output resulting from an on-line transaction will contain this value."
},{
  "code": "4",
  "explanation": "Routine. For LSA transactions, the processing time agreed upon should not exceed 60 days."
},{
  "code": "A",
  "explanation": "Accelerated and NATO or Common project LSA transactions. The processing time agreed upon should not exceed 45 days."
},{
  "code": "E",
  "explanation": "Emergency LSA transactions. The processing time should be kept to the minimum, but should not exceed 7 days."
}]};

const listRncc2910 = {[{
  "code": "1",
  "userDescription": "User Description: A Reference with RNCC \"1\" allocated means that the Item of Supply in question has been subjected to special testing or sampling by the Design Activity thus ensuring that the Item of Supply is fit for a specific purpose. RNCC \"1\" is usually allocated at the request of the Design Activity to restrict the possibility, on re-acquisition, of the wrong Item of Supply being acquired and avoid the possibility of degrading the performance of the equipment by the use of sub-standard spares.",
  "codificationDescription": "Codification Description:Source Control Reference. The number assigned by a design activity to a drawing that depicts existing commercial or vendor items which exclusively provide performance, installation and interchangeable characteristics required for one or more specific critical applications. Restrictions are imposed by the design activity to ensure procurement of the only item(s) known, as a results of test or evaluation, to qualify for the stated critical application. Includes only those drawings which meet the definition of \"Source Control Drawing\" in the national specification. (Applicable only to type 1, 1B, 2, 4 and 4B item identifications)."
},{
  "code": "2",
  "userDescription": "User Description: A Reference with RNCC \"2\" allocated means that the Item of Supply in question is manufactured to a Government/Civilian Standard or Specification. This RNCC should be allocated when the Standard or Specification identifying number is fully definitive and identifies the Item of Supply without any additional information.",
  "codificationDescription": "Codification Description: Definitive Government Specification or Standard Designator Reference. A part number, style number, or type designator included in or developed in accordance with a government specification or standard which has the effect of fully identifying an item of supply. This code shall also be used for a government specification or standard which, although not including part numbers, style numbers, or type designators, covers a single item of supply. These Reference Numbers may be coded with a variation code of 1, but only in the rare circumstance where a specification has an uncoordinated revision or amendment, and the type number has not changed. As an example, Military Specification MIL-E-1/515 Type 6247 (an uncoordinated specification with the same type as the original) would be coded as: RNCC RNVC MIL-E-1/515 4 1 6 247 2 1 In this example neither reference number is item identifying; however, the two references together are. (Non-definitive government specifications or standard designator references shall be coded 4 ; specification control drawings as defined in the appropriate national specification shall be coded 7). Examples of standards attracting RNCC 2 are, ANSI, Def Stan, Mil Specs, CECC, DIN, ISO etc."
},{
  "code": "3",
  "userDescription": "User Description: A Reference with RNCC 3 allocated means that the Item of Supply in question is fully and definitively identified by the Design Control Reference, subject to the RNVC allocated in conjunction with RNCC 3. RNCC 3 should not be allocated to Item of Supply manufactured in accordance with a Government/Civilian Standard or Specification. Where the RNCC is 3 and the RNVC is 9, then the Reference has been declared obsolete by the Design Authority.",
  "codificationDescription": "Codification Description: Design Control Reference. The primary number used to identify an item of production or a range of items of production, by the manufacturer (individual, company, firm, corporation, or government activity) which controls the design, characteristics, and production of the item by means of its engineering drawings, specifications and inspection requirements. When used to identify a drawing where the Original Design Activity (ODA) was transferred to a Current Design Activity (CDA), the reference number will be coded with Reference Number Variation Code (RNVC) 9. This RNCC is allocated to references in accordance with a company's internal standard."
},{
  "code": "4",
  "userDescription": "User Description: A Reference with RNCC \"4\" allocated means that the Item of Supply in question is Manufactured to a Government/Civilian Standard/Specification but the Reference recorded with this RNCC is not fully definitive and therefore does not fully identify the Item of Supply without the addition of further identifying information. A Reference with this RNCC will always have a RNVC of \"1\".",
  "codificationDescription": "Codification Description: Non-definitive Government Specification or Standard Reference. Any government specification or standard reference other than those indicated in code 2 as definitive references. This code shall be used for non-definitive government specifications and standard references and non-definitive part numbers, type designators, and style numbers included therein which are coded with a variation code of 1. (Includes the specification number of those specifications for which type designation is used as code 2). Examples of standards attracting RNCC 4 are, ANSI, Def Stan, Mil Specs, CECC, DIN, ISO etc."
},{
  "code": "5",
  "userDescription": "User Description: A Reference with RNCC \"5\" allocated means that the Item of Supply in question, depending on the RNVC allocated, has either, a secondary source of supply (Supplier/Vendor) (RNCC 5, RNVC 2), is obsolete (RNCC 5, RNVC 9) or has a non definitive Secondary Reference (RNCC 5, RNVC 1).",
  "codificationDescription": "Codification Description: Secondary Reference. Any reference related to the NSN which does not fall into any other category and assigned to an item of production or supply by a commercial or government organization, which represents the same item of production or supply. Includes : - References to secondary sources of supply (Supplier/Vendor); - Additional numbers used primarily for preliminary screening. NOTE: An RNCC 5 reference with a Reference Number Variation code (RNVC) of 2 shall not be added to an NSN with a Standard Military Drawing (SMD) or Military Specification coded RNCC-RNVC 2-2 unless the reference is registered on the Qualified Products List (QPL) for the SMD or Mil Spec."
},{
  "code": "6",
  "userDescription": "User Description: A Reference with RNCC \"6\" allocated means that the Item of Supply in question, has got an additional informative reference. This data may be used by purchasing services or by acquisition organisations for cross reference purposes.",
  "codificationDescription": "Codification Description: Informative Reference. Reference to another system of classification / nomenclature or interchangeability indication between NSN from different countries (See Chapter 2, Sub-Section 233)."
},{
  "code": "7",
  "userDescription": "User Description: A Reference with RNCC \"7\" allocated means that the Reference in question fully meets the stated requirements of the design control authority and may be acquired from any approved vendor. The user may find more than one Item of Supply with this Reference recorded, where this is the case, the user may assume that all of the NSNs found meet the original outline requirement statement.",
  "codificationDescription": "Codification Description: Vendor Item Drawing Reference (Formerly, Specification Control Reference). The number assigned by a design activity to a drawing that is not item identifying, but which delineates existing commercial or vendor developed items meeting all engineering and test requirements specified, without imposing additional test/engineering requirements not normally provided by the vendor(s). Includes only those drawings which meet the definition Vendor Item Drawing in MIL-STD100."
},{
  "code": "8",
  "userDescription": "User Description: This RNCC is allocated to Items of Production that are being manufactured under license.",
  "codificationDescription": "Codification Description: NATO Reproduced Item Identification Number. A number representing a reproduction of an item of production by another NATO or Tier 2 sponsored country for which authorization to use the NATO Stock Number has been granted by the originating country. The reproduced item represents the same item of production as the original item."
},{
  "code": "A",
  "userDescription": "User Description: -",
  "codificationDescription": "Codification Description:Design Category Packaging and Related Logistics Data Reference Number. The number of a document representing packaging and related logistics data requirements."
},{
  "code": "C",
  "userDescription": "User Description: -",
  "codificationDescription": "Codification Description:A Reference Number assigned to an item of production not included in the item of supply concept to which the NATO Stock Number -NSN- has been assigned. Use of this Reference Number Category Code -RNCC- is restricted to conditions where crossreference is required to establish identification to an item of supply. Additionally, there is no direct relationship of the Reference Number to the NSN other than a service/agency individual decision."
},{
  "code": "D",
  "userDescription": "User Description: -",
  "codificationDescription": "Codification Description: Drawing Number Reference. A number assigned by a design activity to a drawing or other technical documentation which identifies a drawing/document that is related to an item of supply or production but does not qualify for assignment of codes 1, 3, 5, 7 or C. Code D Reference Numbers will not be used in item of supply determinations."
},{
  "code": "E",
  "userDescription": "User Description: This reference requires revision due to the fact that the reference has been automatically transferred from a cancelled NSN to an active NSN.",
  "codificationDescription": "Codification Description: Replaced Reference. A manufacturer's part number, government specification/standard or other design control reference number that is superseded, discontinued or replaced, resulting in a cancel-use action. Used to identify the original item of supply/replaced item. Do not use for codification purposes."
}]};

const listRnfc2920 = {[{
  "code": "1",
  "explanation": "Number is formatted as configured on the originating document with the exception of the modification shown in Chapter IV, Annex A, paragraph 2.2."
},{
  "code": "3",
  "explanation": "Number format is unknown since the reference number has been recorded before the implementation of the current code –RNFC-."
},{
  "code": "4",
  "explanation": "Number is totally \"in-the-clear\" (without modification) as originally configured by the manufacturer indicated by the NCAGE Code."
},{
  "code": "5",
  "explanation": "The reference number results from a change of the part number (PN) by conversion of non-Latin national characters to Latin characters included in the table of Character Subset for the Exchange of NATO Codification Data (see Table 21). This conversion is in accordance with the national conversion table such as it is defined by the NCB of the country where the manufacturer/distributor is located ; this conversion method usually is in accordance with the ISO standard (see ISO/TC46/SC2 \"Conversion of written languages\")."
}]};

const listRpdmrc4765 = {[{
  "code": "1",
  "explanation": "An Approved Item Name does not exist. Use this code when submitting a type 2, 4, 4A or 4B item identification with a Non-approved Item Name having Item Name Code 77777."
},{
  "code": "2",
  "explanation": "The Approved Item Name applied to this item exists for use exclusively with the partial descriptive method of item identification - Miscellaneous Items IIGs A238 and A239."
},{
  "code": "3",
  "explanation": "An Approved Item Name and IIG exist but the item involved is so unique in design that it cannot be fully described in accordance with the IIG."
},{
  "code": "4",
  "explanation": "An Approved Item Name and IIG may exist but technical data sufficient for preparation of a full descriptive method item identification could not be acquired after several follow-up actions during a 150 days suspense period. Includes such reasons as : industry refuses to provide the technical data based on policy, restricted or proprietary rights, nonexistence of technical data, etc."
},{
  "code": "5",
  "explanation": "An Approved Item Name and IIG may exist but lack of technical data and/or the press of time force temporary use of the partial descriptive or reference method."
},{
  "code": "6",
  "explanation": "An Approved Item Name and IIG may exist but it has previously been established and documented that industry refuses to provide the technical data sufficient for preparation of a descriptive item identification based on policy, restricted or proprietary data rights, non-existence of technical data, etc."
},{
  "code": "9",
  "explanation": "A NCB generated code for items lacking but requiring a RPDMRC or for items losing the meaning of the previous code as the result of corrections of file inconsistencies."
},{
  "code": " ",
  "explanation": "A NCB generated code to be used in case the item identification is transferred from type 2, 4, 4A or 4B to type 1, 1A or 1B."
}]};

const listRnvc4780 = {[{
  "code": "1",
  "explanation": "A Design Control Reference or other Reference Number that does not identify an item of production without the use of additional information."
},{
  "code": "2",
  "explanation": "A Design Control Reference or other Reference Number that is an item-identifying number for an item of production."
},{
  "code": "3",
  "explanation": "A vendor's Reference Number on a source control item which is reparable through the removal, exchange, and reinstallation of component parts. The related Source Control Document Number will also reflect the code 3. This code is limited to a type 1B or 4B item identification."
},{
  "code": "8",
  "explanation": "A non-item-identifying reference number that is added to a replacement NSN as a result of a cancel-use action. Used to identify the original item of supply/replaced item. Do not use for codification purposes."
},{
  "code": "9",
  "explanation": "A specification, standard, or other Reference Number which has been superseded, cancelled, is obsolete, or discontinued and has RNCC 4, 5 or 7; the Reference Number is for information only and has RNCC 6; a drawing which is the Controlling Reference Number coded RNCC 2 or 3; or a drawing number reference coded RNCC D."
}]};

const listNcbCodes4130 = {[{
  "countryCode": "ALB",
  "moeCode2833": "YH",
  "ncbCode4130": "59",
  "ncageCode4140": "A***H",
  "type": "NATO",
  "nation": "ALBANIA",
  "currency": "Lek",
  "currencyCode": "ALL"
},{
  "countryCode": "BEL",
  "moeCode2833": "ZB",
  "ncbCode4130": "13",
  "ncageCode4140": "B***#",
  "type": "NATO",
  "nation": "BELGIUM",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "BGR",
  "moeCode2833": "WU",
  "ncbCode4130": "50",
  "ncageCode4140": "#***U",
  "type": "NATO",
  "nation": "BULGARIA",
  "currency": "Lev",
  "currencyCode": "BGN"
},{
  "countryCode": "CAN",
  "moeCode2833": "ZC",
  "ncbCode4130": "20",
  "ncageCode4140": "L***#",
  "type": "NATO",
  "nation": "CANADA",
  "currency": "Canadian Dollar",
  "currencyCode": "CAD"
},{
  "countryCode": "CAN",
  "moeCode2833": "ZC",
  "ncbCode4130": "21",
  "ncageCode4140": "#***#",
  "type": "NATO",
  "nation": "CANADA",
  "currency": "Canadian Dollar",
  "currencyCode": "CAD"
},{
  "countryCode": "HRV",
  "moeCode2833": "WD",
  "ncbCode4130": "53",
  "ncageCode4140": "A***B",
  "type": "NATO",
  "nation": "CROATIA",
  "currency": "Croatian Kuna",
  "currencyCode": "HRK"
},{
  "countryCode": "CZE",
  "moeCode2833": "WZ",
  "ncbCode4130": "16",
  "ncageCode4140": "#***G",
  "type": "NATO",
  "nation": "CZECH REPUBLIC",
  "currency": "Czech Koruna",
  "currencyCode": "CZK"
},{
  "countryCode": "DNK",
  "moeCode2833": "ZS",
  "ncbCode4130": "22",
  "ncageCode4140": "R***#",
  "type": "NATO",
  "nation": "DENMARK",
  "currency": "Danish Krone",
  "currencyCode": "DKK"
},{
  "countryCode": "EST",
  "moeCode2833": "WE",
  "ncbCode4130": "38",
  "ncageCode4140": "#***J",
  "type": "NATO",
  "nation": "ESTONIA",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "FRA",
  "moeCode2833": "ZF",
  "ncbCode4130": "14",
  "ncageCode4140": "F***#",
  "type": "NATO",
  "nation": "FRANCE",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "FRA",
  "moeCode2833": "ZF",
  "ncbCode4130": "14",
  "ncageCode4140": "M***#",
  "type": "NATO",
  "nation": "FRANCE",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "DEU",
  "moeCode2833": "ZG",
  "ncbCode4130": "12",
  "ncageCode4140": "D***#",
  "type": "NATO",
  "nation": "GERMANY",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "DEU",
  "moeCode2833": "ZG",
  "ncbCode4130": "12",
  "ncageCode4140": "C***#",
  "type": "NATO",
  "nation": "GERMANY",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "GRC",
  "moeCode2833": "ZU",
  "ncbCode4130": "23",
  "ncageCode4140": "G***#",
  "type": "NATO",
  "nation": "GREECE",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "HUN",
  "moeCode2833": "WH",
  "ncbCode4130": "51",
  "ncageCode4140": "#***V",
  "type": "NATO",
  "nation": "HUNGARY",
  "currency": "Forint",
  "currencyCode": "HUF"
},{
  "countryCode": "ISL",
  "moeCode2833": "ZV",
  "ncbCode4130": "24",
  "ncageCode4140": "S***H",
  "type": "NATO",
  "nation": "ICELAND",
  "currency": "Iceland Krona",
  "currencyCode": "ISK"
},{
  "countryCode": "ITA",
  "moeCode2833": "ZR",
  "ncbCode4130": "15",
  "ncageCode4140": "A***#",
  "type": "NATO",
  "nation": "ITALY",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "LVA",
  "moeCode2833": "VD",
  "ncbCode4130": "55",
  "ncageCode4140": "A***D",
  "type": "NATO",
  "nation": "LATVIA",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "LTU",
  "moeCode2833": "WI",
  "ncbCode4130": "47",
  "ncageCode4140": "#***R",
  "type": "NATO",
  "nation": "LITHUANIA",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "LUX",
  "moeCode2833": "ZL",
  "ncbCode4130": "28",
  "ncageCode4140": "B***H",
  "type": "NATO",
  "nation": "LUXEMBOURG",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "MNE",
  "moeCode2833": "VH",
  "ncbCode4130": "77",
  "ncageCode4140": "A***W",
  "type": "NATO",
  "nation": "MONTENEGRO",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "NLD",
  "moeCode2833": "ZN",
  "ncbCode4130": "17",
  "ncageCode4140": "H***#",
  "type": "NATO",
  "nation": "NETHERLANDS",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "NOR",
  "moeCode2833": "ZT",
  "ncbCode4130": "25",
  "ncageCode4140": "N***#",
  "type": "NATO",
  "nation": "NORWAY",
  "currency": "Norwegian Krone",
  "currencyCode": "NOK"
},{
  "countryCode": "POL",
  "moeCode2833": "WP",
  "ncbCode4130": "43",
  "ncageCode4140": "#***H",
  "type": "NATO",
  "nation": "POLAND",
  "currency": "Zloty",
  "currencyCode": "PLN"
},{
  "countryCode": "PRT",
  "moeCode2833": "ZP",
  "ncbCode4130": "26",
  "ncageCode4140": "P***#",
  "type": "NATO",
  "nation": "PORTUGAL",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "ROU",
  "moeCode2833": "WR",
  "ncbCode4130": "39",
  "ncageCode4140": "#***L",
  "type": "NATO",
  "nation": "ROMANIA",
  "currency": "New Leu",
  "currencyCode": "RON"
},{
  "countryCode": "SVK",
  "moeCode2833": "WS",
  "ncbCode4130": "40",
  "ncageCode4140": "#***M",
  "type": "NATO",
  "nation": "SLOVAKIA",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "SVN",
  "moeCode2833": "WL",
  "ncbCode4130": "42",
  "ncageCode4140": "#***Q",
  "type": "NATO",
  "nation": "SLOVENIA",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "ESP",
  "moeCode2833": "YB",
  "ncbCode4130": "33",
  "ncageCode4140": "#***B",
  "type": "NATO",
  "nation": "SPAIN",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "TUR",
  "moeCode2833": "ZW",
  "ncbCode4130": "27",
  "ncageCode4140": "T***#",
  "type": "NATO",
  "nation": "TURKEY",
  "currency": "New Turkish Lira",
  "currencyCode": "YTL"
},{
  "countryCode": "GBR",
  "moeCode2833": "ZK",
  "ncbCode4130": "99",
  "ncageCode4140": "U***#",
  "type": "NATO",
  "nation": "UNITED KINGDOM",
  "currency": "Pound Sterling",
  "currencyCode": "GBP"
},{
  "countryCode": "GBR",
  "moeCode2833": "ZK",
  "ncbCode4130": "99",
  "ncageCode4140": "K***#",
  "type": "NATO",
  "nation": "UNITED KINGDOM",
  "currency": "Pound Sterling",
  "currencyCode": "GBP"
},{
  "countryCode": "USA",
  "moeCode2833": "ZZ",
  "ncbCode4130": "00",
  "ncageCode4140": "#***#",
  "type": "NATO",
  "nation": "UNITED STATES",
  "currency": "US Dollar",
  "currencyCode": "USD"
},{
  "countryCode": "USA",
  "moeCode2833": "ZZ",
  "ncbCode4130": "01",
  "ncageCode4140": "#***#",
  "type": "NATO",
  "nation": "UNITED STATES",
  "currency": "US Dollar",
  "currencyCode": "USD"
},{
  "countryCode": "USA",
  "moeCode2833": "ZZ",
  "ncbCode4130": "02",
  "ncageCode4140": "#***#",
  "type": "NATO",
  "nation": "UNITED STATES",
  "currency": "US Dollar",
  "currencyCode": "USD"
},{
  "countryCode": "USA",
  "moeCode2833": "ZZ",
  "ncbCode4130": "03",
  "ncageCode4140": "#***#",
  "type": "NATO",
  "nation": "UNITED STATES",
  "currency": "US Dollar",
  "currencyCode": "USD"
},{
  "countryCode": "USA",
  "moeCode2833": "ZZ",
  "ncbCode4130": "04",
  "ncageCode4140": "#***#",
  "type": "NATO",
  "nation": "UNITED STATES",
  "currency": "US Dollar",
  "currencyCode": "USD"
},{
  "countryCode": "USA",
  "moeCode2833": "ZZ",
  "ncbCode4130": "05",
  "ncageCode4140": "#***#",
  "type": "NATO",
  "nation": "UNITED STATES",
  "currency": "US Dollar",
  "currencyCode": "USD"
},{
  "countryCode": "USA",
  "moeCode2833": "ZZ",
  "ncbCode4130": "06",
  "ncageCode4140": "#***#",
  "type": "NATO",
  "nation": "UNITED STATES",
  "currency": "US Dollar",
  "currencyCode": "USD"
},{
  "countryCode": "USA",
  "moeCode2833": "ZZ",
  "ncbCode4130": "07",
  "ncageCode4140": "#***#",
  "type": "NATO",
  "nation": "UNITED STATES",
  "currency": "US Dollar",
  "currencyCode": "USD"
},{
  "countryCode": "USA",
  "moeCode2833": "ZZ",
  "ncbCode4130": "08",
  "ncageCode4140": "#***#",
  "type": "NATO",
  "nation": "UNITED STATES",
  "currency": "US Dollar",
  "currencyCode": "USD"
},{
  "countryCode": "USA",
  "moeCode2833": "ZZ",
  "ncbCode4130": "09",
  "ncageCode4140": "#***#",
  "type": "NATO",
  "nation": "UNITED STATES",
  "currency": "US Dollar",
  "currencyCode": "USD"
},{
  "countryCode": "ARG",
  "moeCode2833": "YF",
  "ncbCode4130": "29",
  "ncageCode4140": "W***H",
  "type": "TIER-2",
  "nation": "ARGENTINA",
  "currency": "Argentine Peso",
  "currencyCode": "ARS"
},{
  "countryCode": "AUS",
  "moeCode2833": "ZA",
  "ncbCode4130": "66",
  "ncageCode4140": "Z***H",
  "type": "TIER-2",
  "nation": "AUSTRALIA",
  "currency": "Australian Dollar",
  "currencyCode": "AUD"
},{
  "countryCode": "AUT",
  "moeCode2833": "WB",
  "ncbCode4130": "41",
  "ncageCode4140": "#***N",
  "type": "TIER-2",
  "nation": "AUSTRIA",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "BRA",
  "moeCode2833": "YA",
  "ncbCode4130": "19",
  "ncageCode4140": "#***K",
  "type": "TIER-2",
  "nation": "BRAZIL",
  "currency": "Brazilian Real",
  "currencyCode": "BRL"
},{
  "countryCode": "FIN",
  "moeCode2833": "WF",
  "ncbCode4130": "58",
  "ncageCode4140": "A***G",
  "type": "TIER-2",
  "nation": "FINLAND",
  "currency": "Euro",
  "currencyCode": "EUR"
},{
  "countryCode": "ISR",
  "moeCode2833": "YD",
  "ncbCode4130": "31",
  "ncageCode4140": "#***A",
  "type": "TIER-2",
  "nation": "ISRAEL",
  "currency": "New Israeli Sheqel",
  "currencyCode": "ILS"
},{
  "countryCode": "KOR",
  "moeCode2833": "ZH",
  "ncbCode4130": "37",
  "ncageCode4140": "#***F",
  "type": "TIER-2",
  "nation": "KOREA, REP. OF",
  "currency": "Won",
  "currencyCode": "KRW"
},{
  "countryCode": "MYS",
  "moeCode2833": "YW",
  "ncbCode4130": "34",
  "ncageCode4140": "Y***#",
  "type": "TIER-2",
  "nation": "MALAYSIA",
  "currency": "Malaysian Ringgit",
  "currencyCode": "MYR"
},{
  "countryCode": "MAR",
  "moeCode2833": "YP",
  "ncbCode4130": "63",
  "ncageCode4140": "A***M",
  "type": "TIER-2",
  "nation": "MOROCCO",
  "currency": "Moroccan Dirham",
  "currencyCode": "MAD"
},{
  "countryCode": "NZL",
  "moeCode2833": "ZE",
  "ncbCode4130": "98",
  "ncageCode4140": "E***#",
  "type": "TIER-2",
  "nation": "NEW ZEALAND",
  "currency": "New Zealand Dollar",
  "currencyCode": "NZD"
},{
  "countryCode": "SRB",
  "moeCode2833": "VS",
  "ncbCode4130": "73",
  "ncageCode4140": "A***S",
  "type": "TIER-2",
  "nation": "SERBIA",
  "currency": "Serbian Dinar",
  "currencyCode": "RSD"
},{
  "countryCode": "SGP",
  "moeCode2833": "YJ",
  "ncbCode4130": "32",
  "ncageCode4140": "Q***#",
  "type": "TIER-2",
  "nation": "SINGAPORE",
  "currency": "Singapore Dollar",
  "currencyCode": "SGD"
},{
  "countryCode": "SWE",
  "moeCode2833": "VK",
  "ncbCode4130": "64",
  "ncageCode4140": "A***N",
  "type": "TIER-2",
  "nation": "SWEDEN",
  "currency": "Swedish Krona",
  "currencyCode": "SEK"
},{
  "countryCode": "ZAF",
  "moeCode2833": "ZD",
  "ncbCode4130": "18",
  "ncageCode4140": "V***#",
  "type": "TIER-1",
  "nation": "SOUTH AFRICA",
  "currency": "Rand",
  "currencyCode": "ZAR"
},{
  "countryCode": "IND",
  "moeCode2833": "ZI",
  "ncbCode4130": "72",
  "ncageCode4140": "#***Y",
  "type": "TIER-1",
  "nation": "INDIA",
  "currency": "Indian Rupee",
  "currencyCode": "INR"
},{
  "countryCode": "IDN",
  "moeCode2833": "YT",
  "ncbCode4130": "45",
  "ncageCode4140": "#***Z",
  "type": "TIER-1",
  "nation": "INDONESIA",
  "currency": "Indonesian Rupiah",
  "currencyCode": "IDR"
},{
  "countryCode": "BLR",
  "moeCode2833": "VL",
  "ncbCode4130": "62",
  "ncageCode4140": "A***L",
  "type": "TIER-1",
  "nation": "BELARUS",
  "currency": "Belarusian Ruble",
  "currencyCode": "BYR"
},{
  "countryCode": "BIH",
  "moeCode2833": "VB",
  "ncbCode4130": "75",
  "ncageCode4140": "A***U",
  "type": "TIER-1",
  "nation": "BOSNIA AND HERZEGOVINA",
  "currency": "Bosnia and Herzegovina konvertibilna marka",
  "currencyCode": "BAM"
},{
  "countryCode": "EGY",
  "moeCode2833": "YQ",
  "ncbCode4130": "36",
  "ncageCode4140": "#***D",
  "type": "TIER-1",
  "nation": "EGYPT",
  "currency": "Egyptian pound",
  "currencyCode": "EGP"
},{
  "countryCode": "GEO",
  "moeCode2833": "VG",
  "ncbCode4130": "68",
  "ncageCode4140": "A***R",
  "type": "TIER-1",
  "nation": "GEORGIA",
  "currency": "Georgian Lari",
  "currencyCode": "GEL"
},{
  "countryCode": "PER",
  "moeCode2833": "VP",
  "ncbCode4130": "79",
  "ncageCode4140": "A***Y",
  "type": "TIER-1",
  "nation": "PERU",
  "currency": "Peruvian Nuevo Sol",
  "currencyCode": "PEN"
},{
  "countryCode": "AFG",
  "moeCode2833": "VF",
  "ncbCode4130": "67",
  "ncageCode4140": "A***Q",
  "type": "TIER-1",
  "nation": "AFGHANISTAN",
  "currency": "Afghan afghani",
  "currencyCode": "AFN"
},{
  "countryCode": "OMN",
  "moeCode2833": "VE",
  "ncbCode4130": "56",
  "ncageCode4140": "A***E",
  "type": "TIER-1",
  "nation": "OMAN",
  "currency": "Omani rial",
  "currencyCode": "OMR"
},{
  "countryCode": "SAU",
  "moeCode2833": "YS",
  "ncbCode4130": "70",
  "ncageCode4140": "#***E",
  "type": "TIER-1",
  "nation": "SAUDI ARABIA",
  "currency": "Saudi riyal",
  "currencyCode": "SAR"
},{
  "countryCode": "ARE",
  "moeCode2833": "WG",
  "ncbCode4130": "71",
  "ncageCode4140": "#***W",
  "type": "TIER-1",
  "nation": "UNITED ARAB EMIRATES",
  "currency": "UAE dirham",
  "currencyCode": "AED"
},{
  "countryCode": "FYR",
  "moeCode2833": "WM",
  "ncbCode4130": "54",
  "ncageCode4140": "A***C",
  "type": "TIER-1",
  "nation": "THE FORMER YUGOSLAV REPUBLIC OF MACEDONIA*",
  "currency": "Macedonian denar",
  "currencyCode": "MKD"
},{
  "countryCode": "THA",
  "moeCode2833": "YY",
  "ncbCode4130": "35",
  "ncageCode4140": "#***C",
  "type": "TIER-1",
  "nation": "THAILAND",
  "currency": "Thai baht",
  "currencyCode": "THB"
},{
  "countryCode": "BRN",
  "moeCode2833": "VC",
  "ncbCode4130": "76",
  "ncageCode4140": "A***V",
  "type": "TIER-1",
  "nation": "BRUNEI DARUSSALAM",
  "currency": "Brunei dollar",
  "currencyCode": "BND"
},{
  "countryCode": "JOR",
  "moeCode2833": "VJ",
  "ncbCode4130": "78",
  "ncageCode4140": "A***X",
  "type": "TIER-1",
  "nation": "JORDAN",
  "currency": "Jordanian dinar",
  "currencyCode": "JOD"
},{
  "countryCode": "UKR",
  "moeCode2833": "YR",
  "ncbCode4130": "61",
  "ncageCode4140": "A***J",
  "type": "TIER-1",
  "nation": "UKRAINE",
  "currency": "Ukrainian hryvnia",
  "currencyCode": "UAH"
},{
  "countryCode": "COL",
  "moeCode2833": "YC",
  "ncbCode4130": "80",
  "ncageCode4140": "A***Z",
  "type": "TIER-1",
  "nation": "COLOMBIA",
  "currency": "Colombian peso",
  "currencyCode": "COP"
},{
  "countryCode": "CHL",
  "moeCode2833": "YN",
  "ncbCode4130": "52",
  "ncageCode4140": "A***A",
  "type": "TIER-1",
  "nation": "CHILE",
  "currency": "Chilean peso",
  "currencyCode": "CLP"
},{
  "countryCode": "JPN",
  "moeCode2833": "ZJ",
  "ncbCode4130": "30",
  "ncageCode4140": "J***#",
  "type": "TIER-1",
  "nation": "JAPAN",
  "currency": "Japanese yen",
  "currencyCode": "JPY"
},{
  "countryCode": "RUS",
  "moeCode2833": "YU",
  "ncbCode4130": "57",
  "ncageCode4140": "A***F",
  "type": "OTHER",
  "nation": "RUSSIAN FEDERATION",
  "currency": "Russian ruble",
  "currencyCode": "RUB"
},{
  "countryCode": "-",
  "moeCode2833": "WA",
  "ncbCode4130": "44",
  "ncageCode4140": "-",
  "type": "OTHER",
  "nation": "UNITED NATIONS",
  "currency": "-",
  "currencyCode": "-"
},{
  "countryCode": "FJI",
  "moeCode2833": "WJ",
  "ncbCode4130": "48",
  "ncageCode4140": "#***S",
  "type": "OTHER",
  "nation": "FIJI",
  "currency": "Fijian dollar",
  "currencyCode": "FJD"
},{
  "countryCode": "PNG",
  "moeCode2833": "YG",
  "ncbCode4130": "65",
  "ncageCode4140": "A***P",
  "type": "OTHER",
  "nation": "PAPUA NEW GUINEA",
  "currency": "Papua New Guinean kina",
  "currencyCode": "PGK"
},{
  "countryCode": "PHL",
  "moeCode2833": "ZM",
  "ncbCode4130": "46",
  "ncageCode4140": "#***P",
  "type": "OTHER",
  "nation": "PHILIPPINES",
  "currency": "Philippine peso",
  "currencyCode": "PHP"
},{
  "countryCode": "PAK",
  "moeCode2833": "ZO",
  "ncbCode4130": "74",
  "ncageCode4140": "A***T",
  "type": "OTHER",
  "nation": "PAKISTAN",
  "currency": "Pakistani rupee",
  "currencyCode": "PKR"
},{
  "countryCode": "KWT",
  "moeCode2833": "YK",
  "ncbCode4130": "60",
  "ncageCode4140": "A***K",
  "type": "OTHER",
  "nation": "KUWAIT",
  "currency": "Kuwaiti dinar",
  "currencyCode": "KWD"
},{
  "countryCode": "TON",
  "moeCode2833": "WT",
  "ncbCode4130": "49",
  "ncageCode4140": "#***T",
  "type": "OTHER",
  "nation": "TONGA",
  "currency": "Pa'anga",
  "currencyCode": "TOP"
}]};

const listRnsc2923 = {[{
  "code": "A",
  "explanation": "Manufacturer and Reference Number are authorized for procurement. Under this Reference Number items can be procured only from the manufacturer identified by the NCAGE Code. Note: This code is only used for Reference Numbers originating from manufacturer's standards or catalogs or for copyrighted drawing numbers."
},{
  "code": "B",
  "explanation": "Manufacturer and/or Reference Number are not authorized for procurement. Note: This code is only used for obsolete or informative Reference Numbers, as well as the Standard Reference."
},{
  "code": "C",
  "explanation": "The Reference Number originates from a descriptive technical document of the product, which may be used as a procurement document without restrictions. The NCAGE Code specified for this Reference Number identifies the originating organization or agency of the document but not the supply source of the item. Note: This code is being allocated to Reference Numbers originating from generally available specifications/standards or to drawing numbers for which the Government has separate property rights or for which the author does not claim any property rights."
},{
  "code": "D",
  "explanation": "Procurement authority of the manufacturer and Reference Number have not yet been checked. Note: This code is being allocated to Reference Numbers still requiring checks on procurement authority."
},{
  "code": "E",
  "explanation": "The Reference Number originates from a descriptive technical document of the product, which, owing to contractual agreements, may only be used with restrictions as a procurement document. The NCAGE Code specified for this Reference Number identifies a government agency as originator or holder of user rights of the technical document but not the supply source of the item. Note: This code is being allocated to Reference Numbers related to a technical document for which the procuring agency has the user rights owing to contractual arrangements. These user rights authorize the procuring agency to use the technical document for procurement purposes within the framework of the user rights contract."
},{
  "code": "F",
  "explanation": "The Reference Number denotes a technical document for a product which is subject to qualification. Any such product can only be procured from qualified manufacturers. Note: This code is being related to Reference Numbers of items requiring safety or quality criteria, determined subject to special authorization. The latter also applies to related supply sources."
},{
  "code": "G",
  "explanation": "Manufacturer and Reference Number are not authorized for procurement. Note: This code is being allocated to Reference Numbers of manufacturers which use other organisations to market/distribute their products."
},{
  "code": "H",
  "explanation": "The Reference Number originates from a technical document describing the product ; this document may, owing to special conditions, only be used as a procurement document for one manufacturer. The NCAGE Code given with the Reference Number identifies an agency as publisher or as a user of the technical documentation, not, however, the source of the item. Note: This code identifies Reference Numbers of specifications/technical data packages consisting mainly of copyrighted technical data, e.g. drawings, and therefore authorized for procurement from one manufacturer only."
}]};

const listIsc2650 = {[{
  "code": "0",
  "explanation": "Special Item",
  "meaning": "Items under the specification control of the Defense Treat Reduction Agency (DTRA) or National Security Agency (NSA)"
},{
  "code": "1",
  "explanation": "Standard item authorized for procurement",
  "meaning": "Item designated as preferred item and accepted as replacement for one or more non standard item (Code 3)"
},{
  "code": "2",
  "explanation": "Standard item authorized for procurement",
  "meaning": "Item designated as preferred item but which does not replace any other item"
},{
  "code": "3",
  "explanation": "Non standard item no longer authorized for procurement",
  "meaning": "Item designated to be replaced by a standard item (code 1)"
},{
  "code": "5",
  "explanation": "Item authorized for procurement",
  "meaning": "No standardization decision available. Item has not yet been subject to item standardization"
},{
  "code": "6",
  "explanation": "Unique item authorized for procurement",
  "meaning": "Item that due to its singular occurrence (\"one-of-a-kind\") or other reasons is not subject to standardization from item reduction studies"
},{
  "code": "7",
  "explanation": "Uncertified standard item authorized for procurement",
  "meaning": "Item provisionally designated as standard item (Code 1), however a final decision pending, e.g. due to lack of technical data"
},{
  "code": "8",
  "explanation": "Former standard item no longer authorized for procurement",
  "meaning": "Previous standard item (Code 1 or 2) which has been replaced by another standard item (Code 1). Item as contained or required in a new or revised superseding specification or standard"
},{
  "code": "B",
  "explanation": "New item authorized for procurement",
  "meaning": "A new item authorized for procurement, contained in a new or revised superseding specification or standard, that replaces prior items. This item will be assigned a Permanent System Control Number (PSCN) or, if a requirement exists, a National Stock Number (NSN)."
},{
  "code": "C",
  "explanation": "Item authorized for procurement",
  "meaning": "An item authorized for procurement that has been included in an item reduction study but an intelligent decision could not be made due to lack of sufficient technical data."
},{
  "code": "E",
  "explanation": "Item no longer authorized for procurement",
  "meaning": "An item no longer authorized for procurement which has been replaced by an item contained in a new or revised superseding specification or standard. The replacement item will be either a PSCN or, if a requirement exists an NSN."
}]};

const listNcageSD2694 = {[{
  "code": "A",
  "explanation": "ACTIVE RECORD : The entity is currently active."
},{
  "code": "C",
  "explanation": "ACTIVE SPEZIALIZED USE RECORD : Do not use for codification purposes. Use the NCAGE Code as indicated. Used by the procurement officials in cases where the design control entity is different from the manufacturer. Note : For UK and US use only"
},{
  "code": "E",
  "explanation": "ACTIVE RECORD BUT DEBARRED IN USA : The entity shown is debarred, suspended or proposed for debarment in the U.S. Note : After the entity’s eligibility has been reinstated, the status code will be changed to Y to indicate that the entity is active. Debarred NCAGEs may be considered active records for all countries except the U.S. and the U.S. will assign NSNs to debarred NCAGEs at the request of other countries"
},{
  "code": "F",
  "explanation": "OBSOLETE RECORD : Entity/record is no longer current or in use under the NCAGE designated 'Obsolete'?. Location of entity unknown. Reference Numbers may still be recorded in the TIR."
},{
  "code": "H",
  "explanation": "OBSOLETE RECORD : Entity/record is no longer current or in use under the NCAGE designated 'Obsolete'?. Entity has been discontinued and/or NCAGE Code no longer required. Reference Numbers with the same NCAGE Code may still be recorded in the TIR. Differs from Status Designator F in that information about the entity is known."
},{
  "code": "M",
  "explanation": "ACTIVE SPECIALIZED USE RECORD : NCAGE Code is referenced to a special numbering system, developed by the Government, used in conjunction with the identification of codification data in the NCS. This code is used only by Canada, Denmark and the United States. Note : For US use only"
},{
  "code": "N",
  "explanation": "CANCELLED WITHOUT REPLACEMENT RECORD : Entity is defunct and/or NCAGE Code is no longer required. No Reference Numbers recorded in the NCS."
},{
  "code": "P",
  "explanation": "CANCELLED WITHOUT REPLACEMENT RECORD : Location of entity unknown. No Reference Numbers recorded in the NCS. Differs from Status Designator \"N\" in that information about the entity is not known."
},{
  "code": "R",
  "explanation": "REPLACED OR CONVERTED RECORD, WITH REPLACEMENT : Entity discontinued and replaced by one or more successor firm(s) or the NCAGE has been converted from a generic code with an \"S\" prefix to a national NCAGE assigned by the nation where the entity is located. Refer to replacement NCAGE Code(s)."
},{
  "code": "T",
  "explanation": "ACTIVE SPECIALIZED USE RECORD : Entity is a Joint Venture Company. Note : For SPAIN’s use only"
},{
  "code": "U",
  "explanation": "ACTIVE SPECIALIZED USE RECORD : Code is assigned to an entity that represents other companies for various reasons. The company being represented will usually have their own specific NCAGE Code assigned. (Do not use for cataloging purposes). Note : For US use only"
},{
  "code": "W",
  "explanation": "ACTIVE SPECIALIZED USE RECORD : NCAGE Code assigned to an individual employed by a company where that individual performs contracted work in his own name separate from the company location. Address on this record may be different than the address of the company itself. (Do not use for cataloging purposes). Note : For US use only"
},{
  "code": "Y",
  "explanation": "ACTIVE SPECIALIZED USE RECORD : NCAGE Code assigned to an entity still actively engaged in business operations; however, the entity no longer wishes to be considered for contracting or sells its products only through distributors. (Do not use for procurement purposes)."
}]};

const listUsfddc4235 = {[{
  "code": "1",
  "explanation": "U.S. NCAGE (#***#) with location of the entity within the USA (includes Alaska, Hawaii, and U.S. possessions)"
},{
  "code": "2",
  "explanation": "U.S. NCAGE (#***#) with location of the entity outside the USA"
},{
  "code": "3",
  "explanation": "Canadian NCAGE (#***#)"
}]};

const listTsc5156 = {[{
  "code": "NA",
  "definitions": "Submittal is not reflected on NCB transaction history file data",
  "instructions": "Review file data, except for follow-up of LSA, and take appropriate action"
},{
  "code": "NB",
  "definitions": "Submittal is in process",
  "instructions": "Normal output data will follow upon completion of processing"
},{
  "code": "NC",
  "definitions": "Submittal has been processed",
  "instructions": "Review file data and take appropriate action"
},{
  "code": "ND",
  "definitions": "Request for Codification (LSA) was returned under DIC K27",
  "instructions": "Reason for reject is given under DIC K27: study mentioned reasons."
},{
  "code": "NF",
  "definitions": "Submittal matchedNuclear Ordnance item and is in process",
  "instructions": "Normal output data will follow upon completion of processing"
},{
  "code": "NG",
  "definitions": "Request for codification (LSA) was returned under DIC KSR/KMR/KMP",
  "instructions": "LSA has to be re-transmitted under a new DCN."
}]};

const listUsiServCode0745 = {[{
  "code": "A",
  "explanation": "Army"
},{
  "code": "B",
  "explanation": "Federal Aviation Administration"
},{
  "code": "C",
  "explanation": "Coast Guard"
},{
  "code": "D",
  "explanation": "Lead Service (Military Service Activity) - 06 (Consumable)"
},{
  "code": "F",
  "explanation": "Air Force"
},{
  "code": "G",
  "explanation": "General Services Administration (Civil Agencies)"
},{
  "code": "I",
  "explanation": "Integrated Materiel Manager"
},{
  "code": "L",
  "explanation": "Lead Service"
},{
  "code": "M",
  "explanation": "Marine Corps"
},{
  "code": "N",
  "explanation": "Navy"
},{
  "code": "V",
  "explanation": "Veterans Administration (Civil Agencies)"
},{
  "code": "W",
  "explanation": "National Weather Service"
},{
  "code": "X",
  "explanation": "Abbreviated Segment H"
}]};

const listShelfLifeCode2493 = {[{
  "codeTypeI": "0",
  "codeTypeII": "0",
  "storeTimePeriod": "Non-deteriorative"
},{
  "codeTypeI": "A",
  "codeTypeII": "",
  "storeTimePeriod": "1 Month"
},{
  "codeTypeI": "B",
  "codeTypeII": "",
  "storeTimePeriod": "2 Months"
},{
  "codeTypeI": "C",
  "codeTypeII": "1",
  "storeTimePeriod": "3 Months"
},{
  "codeTypeI": "D",
  "codeTypeII": "",
  "storeTimePeriod": "4 Months"
},{
  "codeTypeI": "E",
  "codeTypeII": "",
  "storeTimePeriod": "5 Months"
},{
  "codeTypeI": "F",
  "codeTypeII": "2",
  "storeTimePeriod": "6 Months"
},{
  "codeTypeI": "G",
  "codeTypeII": "3",
  "storeTimePeriod": "9 Months"
},{
  "codeTypeI": "H",
  "codeTypeII": "4",
  "storeTimePeriod": "12 Months"
},{
  "codeTypeI": "I",
  "codeTypeII": "",
  "storeTimePeriod": "72 Months"
},{
  "codeTypeI": "J",
  "codeTypeII": "",
  "storeTimePeriod": "15 Months"
},{
  "codeTypeI": "K",
  "codeTypeII": "5",
  "storeTimePeriod": "18 Months"
},{
  "codeTypeI": "L",
  "codeTypeII": "",
  "storeTimePeriod": "21 Months"
},{
  "codeTypeI": "M",
  "codeTypeII": "6",
  "storeTimePeriod": "24 Months"
},{
  "codeTypeI": "N",
  "codeTypeII": "",
  "storeTimePeriod": "27 Months"
},{
  "codeTypeI": "P",
  "codeTypeII": "",
  "storeTimePeriod": "30 Months"
},{
  "codeTypeI": "Q",
  "codeTypeII": "7",
  "storeTimePeriod": "36 Months"
},{
  "codeTypeI": "R",
  "codeTypeII": "8",
  "storeTimePeriod": "48 Months"
},{
  "codeTypeI": "S",
  "codeTypeII": "9",
  "storeTimePeriod": "60 Months"
},{
  "codeTypeI": "T",
  "codeTypeII": "",
  "storeTimePeriod": "84 Months"
},{
  "codeTypeI": "U",
  "codeTypeII": "",
  "storeTimePeriod": "96 Months"
},{
  "codeTypeI": "V",
  "codeTypeII": "",
  "storeTimePeriod": "Variables such as: 90, 132, 216, 228 etc. Months or any other number of months not specifically assigned"
},{
  "codeTypeI": "W",
  "codeTypeII": "",
  "storeTimePeriod": "120 Months"
},{
  "codeTypeI": "Y",
  "codeTypeII": "",
  "storeTimePeriod": "180 Months"
},{
  "codeTypeI": "Z",
  "codeTypeII": "",
  "storeTimePeriod": "240 Months"
},{
  "codeTypeI": "",
  "codeTypeII": "X",
  "storeTimePeriod": "Shelf-Life Period Greater than 60 Months for Type II Extendible Items."
}]};

const listPhrase2862 = {[{
  "code": "A",
  "phrase": "Consolidated with (NSN)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is to be consolidated with the item represented by the NSN in Segment H. The items of supply are identical or completely interchangeable and will be issued under the NSN in Segment H. Note :the NIIN must always change. The NSC may or may not change.Note for USA : This phrase is responsive to action either by DLA Logistics Information Service, in accordance with the Volume 4, Chapter 4.10 of the FLIS Procedures Manual, or by an inventory manager reflecting a stock number preference for the NSN in Segment H.",
  "userActions": "Stocks are immediately consolidated under the NSN quoted as related NSN."
},{
  "code": "B",
  "phrase": "Interchangeable with and managed under (NSN)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header and the item represented by the NSN in Segment H are completely interchangeable. However, the NSN in Segment H is preferred for management. (NATO use except USA).",
  "userActions": "Use stocks under this NSN until exhausted and use there after the NSN quoted as related NSN."
},{
  "code": "C",
  "phrase": "Cancelled Replaced by (NSNs)",
  "explanation": "Indicates that the NSN in the Input / Output Header was assigned to more than one item of supply in error. All holders of stocks must physically re-identify stocks on hand to the appropriate NSNs reflected in the Segment H as replacement item(s). Special instructions to stock holder may be furnished by a Service-generated or Agency-generated Phrase Code R.",
  "userActions": "Physical review of stocks on hand in order to segregate the items for stockage on the correct NSNs quoted as Related NSNs. Dispose of stocks no longer valid for usage after segregation in accordance with eventual instructions given."
},{
  "code": "D",
  "phrase": "Change to (NSC)",
  "explanation": "Indicates that the NSC for the item in the Input / Output Header has to be changed to the NSC for the item in Segment H.",
  "userActions": "Change the class for this NSN to the class quoted in the related NSN and re-label stocks accordingly. Make consolidation, if stocks of both former and new NSNs are held."
},{
  "code": "E",
  "phrase": "Replaced by (NSN)",
  "explanation": "Indicates the item represented by the NSN in the Input / Output Header has been replaced by the interchangeable preferred item represented by NSN in the Segment H (stocks will be used until exhausted). Must be used in combination with Phrase Code G addressed to NSN in the Segment H.",
  "userActions": "Use stocks under this NSN until exhausted and use thereafter the NSN quoted as related NSN."
},{
  "code": "F",
  "phrase": "When exhausted use (NSN)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is replaced by the preferred item represented by the NSN in Segment H. This code indicates one-way substitution. Note for USA : must be used in combination with Phrase Code 7 where PICA LOA is 01, 02, 06, 22 or 23.",
  "userActions": "Use stocks under this NSN until exhausted and use thereafter the NSN quoted as related NSN."
},{
  "code": "G",
  "phrase": "Use (NSN) until exhausted",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is the replacement for and is interchangeable with the item in Segment H. The replacement item will not be issued until the supply of the replaced item is exhausted. Must be used in combination with Phrase Code E.",
  "userActions": "Use eventual stocks of the NSN quoted as related NSN before using the stocks under this NSN. Requisition on the related NSN."
},{
  "code": "H",
  "phrase": "Suitable substitute (NSN)",
  "explanation": "Indicates that the item represented by the NSN in Segment H is an authorized substitute for the item represented by the NSN in the Input / OutputHeader.",
  "userActions": "Record the relationship and review the related NSN for usage in case of shortage of the item under this NSN. Requisition on relevant NSN in accordance with consumption."
},{
  "code": "I",
  "phrase": "Limited interchangea-bility with (NSN)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header and the item represented by the NSN in Segment H are interchangeable within limitations, for example, colour difference. (NATO use except USA).",
  "userActions": "Record the relationship and review the related NSN for usage in case of shortage of the item under this NSN. Requisition on relevant NSN in accordance with consumption."
},{
  "code": "J",
  "phrase": "Interchangeable with (NSN)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header and the item represented by the NSN in Segment H are completely interchangeable. Preferred item relationship is not implied, and stocks under the NSNs will not be consolidated.",
  "userActions": "Record the relationship and review the related NSN technically for usage in case of shortage of the item under this NSN. Requisition on relevant NSN in accordance with consumption."
},{
  "code": "K",
  "phrase": "U/I contains (quantity and unit of measure [U/M])",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is assigned a nondefinitive Unit of Issue. Data reflected in Segment H specifies the content of the nondefinitive unit of issue.",
  "userActions": "Verify that the management of stocks is performed on the correct Unit of Issue, quantity and Unit of Measure. Verify consumption data in case of changes in order to enable correct requisitioning."
},{
  "code": "L",
  "phrase": "Superseded by (NSN)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is to be discontinued and replaced by the item represented by the NSN in Segment H. Dispose of materiel on hand or subsequently received. Note for USA : AAC N, V or Y must be submitted/recorded with this Phrase Code.",
  "userActions": "Stop usage of this NSN. Dispose of materiel in stock in accordance with disposition instructions received. Requisition replacement on NSN indicated as related NSN, if necessary."
},{
  "code": "M",
  "phrase": "Breakdown into (NSNs)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is no longer stocked as an assembly. This phrase will be applied to an item when it is desired to break down assemblies into sub-assemblies and attaching parts, groups of items into single items, or any two or more items that should not be binned together under one stock number. Support will be provided by the NSNs represented in Segment H. Multiple entries will be required for NSNs and may be required for document entries. See DoD 4100.39-M, Volume 6, Paragraph 6.2.1.k(3) (a&b) before using.",
  "userActions": "Record the information on this NSN. Break down the materiel held in stock in accordance with instructions, if needed, and store individually under NSNs given as related NSNs. Requisition individual items in assembly/kit in future."
},{
  "code": "N",
  "phrase": "Disposal",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is no longer a required item of supply. Dispose of stock in accordance with current instructions. Note for USA : AAC N, V or Y must be submitted/recorded with this Phrase Code.",
  "userActions": "Dispose of stocks in accordance with current instructions. If item is still needed requisition with justification."
},{
  "code": "O",
  "phrase": "Replaced by, subject to modification of (NSN)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header can be replaced by the NSN in Segment H subject to specific modification/amendment of the replacement item. (NATO use except USA)",
  "userActions": "Record the information and use it in case of shortage of this NSN. Remember, that modification of related NSN is required prior to usage. Requisition on this NSN in accordance with consumption."
},{
  "code": "P",
  "phrase": "Use Assembly Assortment or Kit (NSN)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is not, or will no longer be, stocked as an individual item of supply. Requisition the next higher assembly assortment, or kit represented by the NSN in Segment H. See DoD 4100.39-M, Volume 6, Paragraph 6.2.1.k(3) (a&b) before using.",
  "userActions": "Use this NSN until exhausted and use thereafter the NSN quoted as related NSN."
},{
  "code": "Q",
  "phrase": "Fabricate or Assemble",
  "explanation": "Indicates that the item represented by the NSN in the Input / OutputHeader is not, or will no longer be, centrally stocked. Fabricate or assemble from components listed in the technical document reflected in Segment H or represented by the NSNs in Segment H.",
  "userActions": "Use this NSN until exhausted, then fabricate/assemble from components listed in the technical documentation quote as documentation. Can only be reordered, if local manufacture is impossible. Special justification must be given."
},{
  "code": "R",
  "phrase": "Refer to (Technical Document)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header required special handling as specified in the technical document listed in Segment H.",
  "userActions": "Record the information for usage when handling the item under this NSN."
},{
  "code": "S",
  "phrase": "Stocks as (NSNs)",
  "explanation": "Indicates that the item represented by the NSN in the Input / OutputHeader is applicable to the item catalogued for authorization and procurement purpose. When manufacturer's name and identification become known for each new procurement source, the additional NSN(s) is reflected in Segment H.",
  "userActions": "This NSN is used for temporary recording for management purposes only. Record final information on NSN/NSNs quoted as related NSN/NSNs."
},{
  "code": "T",
  "phrase": "Condemned",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header has been condemned and its use is prohibited. Disposal will be in accordance with Service/Agency directives. The replacement NSN, if applicable, is represented by the NSN in Segment H. Note for USA : AAC T must be submitted/recorded with this Phrase code. See DoD 4100.39-M, Volume 6, Paragraph 6.2.1.k(3) (a&b) before using.",
  "userActions": "Stop usage of this NSN immediately. Dispose of materiel on hand in accordance with established directives. Requisition replacement on NSN indicated as related NSN, if necessary."
},{
  "code": "U",
  "phrase": "Associated with (Master NSN, I&S Family)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is in an I&S family, that is managed by a Primary Inventory Control Activity (in USA with LOA 06, 22 or 23), which has no user/retail interest in the item but management interest only (the master NSN appears in Segment H).",
  "userActions": "Use stocks under this NSN until exhausted and use thereafter the NSN/NSNs quoted in the I&S family, in which the NSN indicated as related NSN is the master."
},{
  "code": "U",
  "phrase": "Conditionally replaced by NSNs",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header can be replaced by the items represented by the NSNs in Segment H subject to packaging constraints of the supplier (applies mainly to French Navy items). (NATO use except USA).",
  "userActions": "Record the relationship and use it in case of shortage of the described NSN. Remember, that the relationship is conditional and therefore needs to be carefully evaluated prior to any usage."
},{
  "code": "V",
  "phrase": "Discontinued without Replacement",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is to be discontinued without replacement. Stocks on hand will be issued and used until exhausted. Note for USA : AAC N, V or Y must be submitted/recorded with this Phrase Code.",
  "userActions": "Use of the item continues. Review the future requirements and order the item until final information of non-availability is received."
},{
  "code": "W",
  "phrase": "Replacement except for aeronautical use",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header may be replaced by the item represented by the NSN in Segment H, except for aeronautical use (NATO use except USA).",
  "userActions": "Record the relationship and use it in case of shortage of the described NSN. Remember, that the relationship is not valid for aeronautical use."
},{
  "code": "X",
  "phrase": "Formerly (NSC)",
  "explanation": "Indicates that a NSC number change has occurred to the NIIN and the former NSC reflected in the related data field of the Segment H record.",
  "userActions": "Verify that all stocks on the NSN given as related NSN have been transferred to this NSN"
},{
  "code": "Y",
  "phrase": "Equivalent to (NSN)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header has physical and performance characteristics identical to the item represented by the NSN in Segment H. The items of supply differ only in the unit quantity and/or Unit of Issue. Multiple records may be required.",
  "userActions": "Record the relationship and use it in case of shortage of the described NSN. Remember that the items of supply differ in unit quantity and/or Unit of Issue."
},{
  "code": "Z",
  "phrase": "Discontinued use (NSN)",
  "explanation": "Indicates that the item represented by the NSN in the Input / OutputHeader is to be discontinued and replaced by the NSN in Segment H. Stock will be issued until exhausted. Note for USA : AAC N, V or Y must be submitted/recorded with this Phrase Code.",
  "userActions": "Use stocks under the described NSN until exhausted and use thereafter the NSN quoted as related NSN."
},{
  "code": "0",
  "phrase": "Reversal of Phrase Code Z",
  "explanation": "USA explanation :  Marine Corps use only. Explanation for NATO except USA as no explanation is contained in the FLIS Procedure Manual : indicates that the item represented by the NSN in the Input / OutputHeader is the replacement for the discontinued item quoted in Segment H.",
  "userActions": "Verify that the item under the NSN quoted as related NSN is used prior to use of the described NSN."
},{
  "code": "1",
  "phrase": "Changed to (NSN) after NAMWO",
  "explanation": "Indicates that the NSN for the item in the described NSN column is changed to the NSN in the Related NSN column after the application of the NSPA Modification Works Order -NAMWO- represented in the reference document column of the Weapon System Interchangeable and Substitute List, or similar. Notes : (1) This phrase applies, in principle, to assemblies only. (2) This phrase is used by the NATO HAWK Weapon System outside US usage only. (NATO use except USA).",
  "userActions": "Verify if there is a need for the described NSN after application of the NAMWO given in the Weapon System Interchangeable and Substitute List or similar as this changes the item to the NSN given as Related NSN."
},{
  "code": "2",
  "phrase": "When exhausted use NSN with Phrase Code 4.",
  "explanation": "USA explanation : Army use only. Explanation for NATO except USA as no detailed explanation is contained in the FLIS Procedures Manual : Indicates that the Item represented by the NSN in the Input / Outputheader has been replaced by the preferred item represented by the NSN in Segment H. This code indicates one-way substitution. Note : Must be used in combination with Phrase Code 4.",
  "userActions": "Use stocks under this NSN until exhausted and use thereafter the NSN quoted as related NSN."
},{
  "code": "2",
  "phrase": "Reversal of Phrase Code H",
  "explanation": "USA explanation :  Marine Corps use only. Explanation for NATO except USA as no explanation is contained in the FLIS Procedure Manual : indicates that the item represented by the NSN in the Input / OutputHeader a suitable substitute for the item quoted in Segment H. Note : Preferred relationship has not been established.",
  "userActions": "Record the relationship for eventual usage in case of shortage of the NSN given as Related NSN."
},{
  "code": "2",
  "phrase": "Limited Usage",
  "explanation": "Indicates that the related NSN/PN (when used exceptionally as stock number) has been replaced by the described NSN/PN for improvement purposes. The related NSN/PN shall not be used in lieu of the described NSN/PN. Notes :  (1) This phrase applies to component part only. (2) This phrase is used by the NATO HAWK Weapon System outside US usage only. (NATO use except USA)",
  "userActions": "Review, if stocks of Related NSN are available and can be used. Otherwise requisition replacement on the described NSN."
},{
  "code": "3",
  "phrase": "Reversal of Phrase Code S",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is the (physical) item of production in an I&S generic relationship (the generic master NSN appears in Segment H). Must be used in combination with Phrase Code S.",
  "userActions": "Review, if stocks are held on the Related NSN, in which case they should be transferred to the described NSN or to other NSNs in accordance with Phrase Code S information against the NSN quoted as Related NSN."
},{
  "code": "3",
  "phrase": "Changed from after NAMWO (Reversal of Phrase Code 1)",
  "explanation": "Indicates that the NSN for the item in the described NSN column has been established after application of the NSPA Modification Work Order  NAMWO- represented in the Reference Document Column of the Weapon System Interchangeable and Substitute List or similar to the item represented by the NSN in the Related NSN column. Notes :  (1) This phrase applies, in principle, to assemblies only. (2) This phrase is used by the NATO HAWK Weapon System outside US usage only. (NATO use except USA)",
  "userActions": "Review, if stocks under the related NSN need to be modified with subsequent storage under the described NSN."
},{
  "code": "4",
  "phrase": "Reversal of Phrase Code 2",
  "explanation": "USA explanation : Army use only. Explanation for NATO except USA as no detailed explanation is contained in the FLIS Procedures Manual : Indicates that the item represented by the NSN in the Input / Outputheader is the preferred replacement for the item in segment H. The replacement item will be issued when the supply of the replaced item is exhausted. Note : Must be used in combination with Phrase Code 2.",
  "userActions": "Use stocks on NSN quoted as related NSN before using stocks-under the described NSN."
},{
  "code": "4",
  "phrase": "Reversal of Phrase Code A",
  "explanation": "USA explanation :  Marine Corps use only. Explanation for NATO except USA as no explanation is contained in the FLIS Procedures Manual : indicates that the NSN in the Input / OutputHeader represents the current NSN for an item, which has been consolidated with the NSN given in Segment H. Note : The items are identical or are completely interchangeable, and must be managed under one NSN.",
  "userActions": "Verify that stocks on the related NSN have been consolidated with the described NSN."
},{
  "code": "4",
  "phrase": "GFE (Government Furnished Equipment)",
  "explanation": "Indicates that the item represented by the NSN in the described NSN column is a Government Furnished Equipment -GFE-  The supply of this item is a national responsibility. Note : This phrase is used by the NATO HAWK Weapon System outside US usage. (NATO use except USA).",
  "userActions": "Record the information in order to ensure that item is always issued from national stocks. Requisition externally only in case of un-availability and give exception data."
},{
  "code": "5",
  "phrase": "Reversal of Phrase Code L",
  "explanation": "USA explanation :  Marine Corps use only. Explanation for NATO except USA as no explanation is contained in the FLIS Procedures Manual : indicates that the item under the NSN in the Input / OutputHeader represents a valid substitute for the discontinued NSN given in Segment H.",
  "userActions": "Verify that stocks of the NSN quoted as related NSN have been disposed of in accordance with Phrase Code L."
},{
  "code": "5",
  "phrase": "Matched components, do not stock separately",
  "explanation": "USA explanation :  Marine Corps use only. Explanation for NATO except USA as no explanation is contained in the FLIS Procedures Manual : indicates that the NSN in the Input / OutputHeader covers matched components, which may not be separated for usage/stockage.",
  "userActions": "Record this Phrase Code and verify stocks to ensure that stocks are not separated as the items are matched."
},{
  "code": "5",
  "phrase": "When exhausted use NSN with Phrase Code 6",
  "explanation": "USA explanation : Army use only. Explanation for NATO except USA as no detailed explanation is contained in the FLIS Procedures Manual : Indicates that the item represented by the NSN in the Input / Outputheader has been replaced by the preferred item represented by the NSN in segment H. This code indicates one-way substitution. Note : Must be used in combination with Phrase Code 6.",
  "userActions": "Use stocks under this NSN until exhausted and use thereafter the NSN quoted as related NSN."
},{
  "code": "5",
  "phrase": "Use for",
  "explanation": "Indicates that the NSN in the Input / OutputHeader is not stocked as a spare part and that the related item given in Segment H is to be used and requisitioned in lieu of that item. Notes :  (1) This phrase applies to component parts only. (2) This phrase is used by the NATO HAWK Weapon System outside US usage only. (NATO use except USA)",
  "userActions": "Record the relationship for use in case of requisitions for this NSN. Issue the NSN quoted as related NSN as replacement for the described NSN."
},{
  "code": "5",
  "phrase": "Spanish Navy specific data",
  "explanation": "Invoicing unit Estimated Quantity of invoicing unit per unit of issue INE Subclass Applicable VAT Applicable IGIC",
  "userActions": ""
},{
  "code": "6",
  "phrase": "Reversal of Phrase Code T",
  "explanation": "USA explanation : Marine Corps use only.  explanation for NATO except USA as no explanation is contained in the FLIS Procedure Manual : indicates that the NSN in the Input / Output Header is the replacement for a condemned item identified under the NSN in Segment H.",
  "userActions": "Verify that stocks of the NSN quoted as related NSN have been disposed of in accordance with Phrase Code T."
},{
  "code": "6",
  "phrase": "For initial installation or initial issue only",
  "explanation": "USA explanation :  Air Force use only. Explanation for NATO except USA as no explanation is contained in the FLIS Procedures Manual : indicates that the item represented by the NSN in the Input / Output Header is for initial installation/issue only.",
  "userActions": "Record the information as only initial issue should be made."
},{
  "code": "6",
  "phrase": "Reversal of Phrase Code 5",
  "explanation": "USA explanation : Army use only. Explanation for NATO except USA as no detailed explanation is contained in the FLIS Procedures Manual : Indicates that the item represented by the NSN in the Input / Outputheader is the preferred replacement for the item in segment H. The replacement item will be issued when the supply of the replaced item is exhausted. Note : Must be used in combination with Phrase Code 5.",
  "userActions": "Use stocks on NSN quoted as related NSN before using stocks under the described NSN."
},{
  "code": "6",
  "phrase": "Deleted after NAMWO",
  "explanation": "Indicates that after application of the NSPA Modification Work Order  NAMWO- represented in the Reference Document/Remarks column of the Weapon System Interchangeability and Substitutability List or similar the item represented by the NSN in the Input / OutputHeader is no longer used in the system. Note : This phrase is presently used by the NATO HAWK Weapon System outside US usage only. (NATO use except USA).",
  "userActions": "Verify, if the item is still required after execution of the modification contained in the NAMWO quoted in the Weapon System Interchangeability and Substitutability List or similar."
},{
  "code": "6",
  "phrase": "Vendor data",
  "explanation": "Indicates the vendors [ legal person (company) or natural person, that is the source of supply of an item, and where to address orders thereof ] associated to the item represented by the Input / Output Header, and the acquisition and distribution price associated therewith.",
  "userActions": ""
},{
  "code": "7",
  "phrase": "Use (NSN) until exhausted",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is the preferred replacement item Master NSN in the I&S family and is substitutable for the item(s) in Segment H. Use the item represented by the NSN in Segment H if technically acceptable for your specific application. The replacement item, master NSN in the I&S family, will be issued when the supply of the replaced item(s) is exhausted. Must be used in combination with Phrase Code F.",
  "userActions": "Use stocks on NSN quoted as related NSN before using stocks under the described NSN."
},{
  "code": "8",
  "phrase": "Reversal of Phrase Code Q",
  "explanation": "USA explanation :  Marine Corps use only. Explanation for NATO except USA as no explanation is contained in the FLIS Procedures Manual : indicates that the item represented by the NSN in the Input / Output Header is used to fabricate or assemble the item/items represented by the NSN/NSNs in Segment H or as listed in a technical document.",
  "userActions": "Verify that the NSN/NSNs quoted as related NSN/NSNs is/are marked as being fabricated or assembled from the described NSN"
},{
  "code": "8",
  "phrase": "Specific data",
  "explanation": "Indicates that for the item represented by the NSN in the segment H additional data are shown in columns 43-58 of the third record. (NATO use except USA)",
  "userActions": "-"
},{
  "code": "9",
  "phrase": "Reversal of Phrase Code P",
  "explanation": "USA explanation :  Marine Corps use only. Explanation for NATO except USA as no explanation is contained in the FLIS Procedures Manual : indicates that the NSN in the Input / Output Header represents a next higher assembly, assortment, or kit, which has replaced items identified by the NSN/NSNs quoted in Segment H.",
  "userActions": "Verify that the NSN/NSNs quoted as  related NSN/NSNs is/are marked that it/they will be replaced by the next higher assembly, assortment or kit identified by the described NSN"
},{
  "code": "9",
  "phrase": "When exhausted, use NSN and NSN",
  "explanation": "USA explanation :  Air Force use only. Explanation for NATO except USA as no explanation is contained in the FLIS Procedures Manual : indicates that the item represented by the NSN in the Input / Output Header is replaced by the 2 NSNs given in Segment H.",
  "userActions": "Use the described NSN until exhausted and use  thereafter the two NSNs quoted as related NSNs."
},{
  "code": "&",
  "phrase": "Repair with (NSN)",
  "explanation": "Indicates that the item represented by the NSN in the Input / Output Header is used to repair the item represented by the NSN in Segment H",
  "userActions": "Use this NSN to repair the item"
},{
  "code": ".",
  "phrase": "Interchangeable with preference",
  "explanation": "The described NSN and the Related NSN are completely interchangeable. The described NSN, however, is the preferred NSN. (This is a Phrase Code J relationship with indication of preferred item. The only user, the NATO HAWK Programme, will later replace this Phrase Code with Phrase Code B).(NATO use except USA).",
  "userActions": "Use stocks under the related NSN until exhausted and use thereafter the NSN quoted as the described NSN."
},{
  "code": " ",
  "phrase": "Dod I&S family master NSN",
  "explanation": "Indicates the item represented by the NSN in the Input / Output Header is a master NSN in a DoD I&S family. This blank Phrase Code must be accompanied by one of the following conditions : a. Be the first occurrence in an I&S family and reflect a blank related NSN field, having a valid I&S master order of use, and have at least one additional occurrence of phrase data with either Phrase Code G, S or 7, or b. Have a loaded related NSN field in combination with an OOU of ZZZ. (USA use only).",
  "userActions": "Record the information in order to have full I&S information available at any time. Use stocks in accordance with the order of use established in the family."
}]};

const listQupc6106 = {[{
  "code": "0",
  "quantity": "No QUP"
},{
  "code": "1",
  "quantity": "1"
},{
  "code": "2",
  "quantity": "2"
},{
  "code": "3",
  "quantity": "3"
},{
  "code": "4",
  "quantity": "4"
},{
  "code": "5",
  "quantity": "5"
},{
  "code": "6",
  "quantity": "6"
},{
  "code": "7",
  "quantity": "7"
},{
  "code": "8",
  "quantity": "8"
},{
  "code": "9",
  "quantity": "9"
},{
  "code": "A",
  "quantity": "10"
},{
  "code": "B",
  "quantity": "12"
},{
  "code": "C",
  "quantity": "15"
},{
  "code": "D",
  "quantity": "16"
},{
  "code": "E",
  "quantity": "18"
},{
  "code": "F",
  "quantity": "20"
},{
  "code": "G",
  "quantity": "24"
},{
  "code": "H",
  "quantity": "25"
},{
  "code": "J",
  "quantity": "32"
},{
  "code": "K",
  "quantity": "36"
},{
  "code": "L",
  "quantity": "48"
},{
  "code": "M",
  "quantity": "50"
},{
  "code": "N",
  "quantity": "72"
},{
  "code": "P",
  "quantity": "75"
},{
  "code": "Q",
  "quantity": "100"
},{
  "code": "R",
  "quantity": "120"
},{
  "code": "S",
  "quantity": "144"
},{
  "code": "T",
  "quantity": "200"
},{
  "code": "U",
  "quantity": "250"
},{
  "code": "V",
  "quantity": "500"
},{
  "code": "W",
  "quantity": "1000"
},{
  "code": "#X",
  "quantity": "BLK"
},{
  "code": "#Y",
  "quantity": "Packager's option so long as all other contractual requirements are met."
},{
  "code": "*Z",
  "quantity": "Special requirement. Refer to special instructions or drawings provided."
}]};

const listAac2507 = {[{
  "code": "A",
  "explanation": "SERVICE/AGENCY-REGULATED (Service/Agency use only)*Issue, transfer, or shipment is controlled by authorities above the Inventory Control Point -ICP- level to assure proper and equitable distribution. The use or stockage of the item requires release authority based on prior or concurrent justification. Requisitions will be submitted in accordance with Agency/Service requisitioning procedures."
},{
  "code": "B",
  "explanation": "ICP-REGULATED (Service/Agency use only)* Issue, transfer, or shipment is controlled by the Inventory Control Point. 1. The use or stockage of the item requires release authority based on prior or concurrent justification. 2. Requisitions will be submitted in accordance with Agency/Service requisitioning procedures."
},{
  "code": "C",
  "explanation": "SERVICE/AGENCY-MANAGED (Service/Agency use only)* Issue, transfer, or shipment is not subject to specialized controls other than those imposed by individual service supply policy. 1. The item is centrally managed, stocked and issued. 2. Requisitions will be submitted in accordance with Service requisitioning procedures."
},{
  "code": "D",
  "explanation": "DoD INTEGRATED MATERIEL-MANAGED, STOCKED, AND ISSUED* Issue, transfer, or shipment is not subject to specialized controls other than those imposed by Integrated Material Manager/Service supply policy. 1. The item is centrally managed, stocked and issued. 2. Requisitions must contain the fund citation required to acquire the item. Requisitions will be submitted in accordance with Integrated Materiel Manager/Service requisitioning procedures"
},{
  "code": "E",
  "explanation": "OTHER SERVICE-MANAGED, STOCKED AND ISSUED (For Service use only if Secondary Inventory Control Activity Level of Authority -SICA LOA- is 8D and Nonconsumable Item Materiel Support Code -NIMSC- is 6). Issue, transfer, or shipment is not subject to specialized controls other than those imposed by the Service requisitioning policy. 1. The item is centrally managed, stocked and issued. 2. Requisitions may require a fund citation and will be submitted in accordance with the Service requisitioning procedures."
},{
  "code": "F",
  "explanation": "FABRICATE OR ASSEMBLE (NON-STOCKED ITEMS)* NATO Stock Numbered items fabricated or assembled from raw materials and finished products as the normal method of support. Procurement and stockage of the items are not justified because of low usage or peculiar installation factors. Distinctions between local or centralized fabricate/assemble capability are identified by the source of supply modifier in the source of supply column of the Service management data lists."
},{
  "code": "G",
  "explanation": "GENERAL SERVICES ADMINISTRATION -GSA- / CIVIL AGENCY INTEGRATED MATERIEL MANAGED, STOCKED AND ISSUED Identifies GSA-/Civil Agency managed items available from GSA/Civil Agency supply distribution facilities. Requisitions and fund citations will be submitted in accordance with GSA/Civil Agency requisitioning procedures."
},{
  "code": "H",
  "explanation": "DIRECT DELIVERY UNDER A CENTRAL CONTRACT (VENDOR STOCKED)* Issue, transfer or shipment is not subject to specialized controls other than those imposed by Integrated Material Manager/Service/Agency supply policy. 1. The item is centrally procured but not stocked. 2. Normal issue is by direct shipment from the vendor to the user at the order of the ICP or IMM. However, orders may be shipped from stock by ICP or IMM distribution facilities when the vendor’s minimum order quantity is not met, or when stocks are being drawn down. 3. Requisitions and fund citations will be submitted in accordance with Integrated Materiel Manager/Service/Agency requisitioning procedures. 4. General delivery will be made within applicable Service/Agency guidelines addressing customer required timeframe."
},{
  "code": "I",
  "explanation": "DIRECT ORDERING FROM A CENTRAL CONTRACT/SCHEDULE (NON-STOCKED ITEMS)* Issue, transfer or shipment is not subject to specialized controls other than those imposed by Integrated Material Manager/Service supply policy. The item is covered by a centrally issued contractual document, or by multiple-award US Federal supply schedule, which permits using activities to place orders directly on vendors for direct delivery to the user."
},{
  "code": "J",
  "explanation": "NOT STOCKED, CENTRALLY PROCURED (NON-STOCKED ITEMS)* IMM/Service centrally managed but not stocked item. Procurement will be initiated only after receipt of a requisition."
},{
  "code": "K",
  "explanation": "CENTRALLY STOCKED FOR OVERSEAS ONLY* Main means of supply is local purchase or direct ordering from a central contract/schedule when the Federal Supply Schedule Number is shown in the CMD record. Item is stocked in domestic supply system for those overseas activities unable to procure locally due to non-availability of procurement sources or where local purchase is prohibited (e.g., US Armed Services Procurement Regulation - ASPR-flow of gold ; or by internal Military Service/Agency restraints). Requisitions will be submitted by overseas activities in accordance with Service/Agency requisitioning procedures. Note: Continental United States -CONUS- activities will obtain supply support through local procurement procedures."
},{
  "code": "L",
  "explanation": "LOCAL PURCHASE (NON-STOCKED ITEMS)* DLA/GSA/Service/Agency-managed items authorized for local purchase as normal means of support at base, post, camp or station level. Item not stocked in wholesale distribution system of Integrated Materiel Manager/Service/Agency Inventory Control Point."
},{
  "code": "M",
  "explanation": "RESTRICTED REQUISTIONS-MAJOR OVERHAUL (Service/Agency use only)* Items (assemblies and/or component parts) which for lack of specialized tools, test equipment etc., can be used only by major overhaul activities. Base, post, camp or station activities will not requisition unless authorized to perform major overhaul function."
},{
  "code": "N",
  "explanation": "RESTRICTED REQUISITIONING-DISPOSAL (Service/Agency use only)* Discontinued items no longer authorized for issue except on the specific approval of the Service inventory manager. Requisitions may be submitted in accordance with Service requisitioning procedures in instances where valid requirements exist and replacing item data has not been furnished."
},{
  "code": "O",
  "explanation": "PACKAGED FUELS (NON-STOCKED ITEMS) DLA-managed and Service-regulated. 1. Item will be centrally procured in accordance with US DoD 4140.25M, Procedures for the Management of Petroleum Products, but not stocked by IMM. Long lead time required. 2. Requirements will be satisfied by direct shipment to the user either from a vendor or from Service assets at the order of the ICP or IMM. 3. Requirements and/or requisitions will be submitted in accordance with Service procedures."
},{
  "code": "P",
  "explanation": "RESTRICTED REQUISITION-SECURITY ASSITANCE PROGRAM -SAP- 1. Indicates item is stocked or acquired only for SAP (replaces Military Assistance Program -MAP-) requirements, or 2. Indicates item is nonstocked and materiel is ordered from the contractor for shipment directly to the foreign government. 3. Base, post, camp or station will not requisition."
},{
  "code": "Q",
  "explanation": "BULK PETROLEUM PRODUCTS DLA-managed. 1. Item may be either centrally stocked  or available by direct delivery under a central contract. 2. Requirements will be submitted by Military Service in accordance with IMM procedures; 3. Item will be supplied in accordance with US DoD 4140.25M."
},{
  "code": "R",
  "explanation": "RESTRICTED REQUISITION-GOVERNMENT FURNISHED MATERIEL -GFM- Indicates item is centrally procured and stocked as GFM in connection with the manufacture of military items. Base, post, camp or station will not requisition."
},{
  "code": "S",
  "explanation": "RESTRICTED REQUISITIONING-OTHER SERVICE FUNDED (Service use only) For Service-managed items whereby the issue, transfer, or shipment is subject to specialized controls of the funding Military Service; 1. Item is procured by a Military Service for the funding Military Service and is centrally managed by the funding Service. 2. The procuring Military Service has no requirement in its logistic system for the item."
},{
  "code": "T",
  "explanation": "CONDEMNED (NON-STOCKED ITEMS) Item is no longer authorized for procurement, issue, use or requisitioning."
},{
  "code": "U",
  "explanation": "LEAD SERVICE-MANAGED As a minimum provides procurement, disposal and single submitter functions. Wholesale logistics responsibilities which are to be performed by the Primary Inventory Control Activity -PICA- in support of the SICA are defined by the SICA NIMSC Code."
},{
  "code": "V",
  "explanation": "TERMINAL ITEM* Identifies items in stock, but future procurement is not authorized. Requisitions may continue to be submitted until stocks are exhausted. Preferred item NSN is normally provided by application of the phrase : When Exhausted Use (NSN). Requisitions will be submitted in accordance with IMM/service requisitioning procedures as applicable."
},{
  "code": "W",
  "explanation": "RESTRICTED REQUISITIONING-SPECIAL INSTRUCTIONS APPLY (NON-STOCKED ITEMS) Indicates stock number has been assigned to a generic item for use in bid invitations, allowance lists, etc., against which no stocks are ever recorded. Requisitions will be submitted only in accordance with IMM/Service requisitioning procedures (this code will be used, when applicable, in conjunction with Phrase Code S (stock as NSN(s)). It is considered applicable for use when a procurement source(s) becomes available. The Phrase Code S and the applicable \"stock as\" NSN(s) will then be applied for use in stock, store, and issue actions)."
},{
  "code": "X",
  "explanation": "SEMIACTIVE ITEM-NO REPLACEMENT (NON-STOCKED ITEMS) A potentially inactive NSN which must be retained in the supply system as an item of supply because (1) stocks of the item are on hand or in use below the wholesale level and (2) the NSN is cited in equipment authorization documents TO &  E, TA, TM,  tc. or in-use assets are being reported. 1. Items are authorized for central procurement but not authorized for stockage at wholesale level. 2. Requisitions for in-use replacement will be authorized in accordance with individual Military Service directives. 3. Requisitions may be submitted as requirements generate. Repetitive demands may dictate an AAC change to permit wholesale stockage."
},{
  "code": "Y",
  "explanation": "TERMINAL ITEM (NON-STOCKED ITEMS)* Further identifies AAC V items on which wholesale stocks have been exhausted. Future procurement not authorized. No wholesale stock is available for issue. 1. Requisitions will not be processed to the wholesale suppliers. 2. Internal service/agency requisitioning may be continued in accordance with the service/agency requisitioning policies."
},{
  "code": "Z",
  "explanation": "INSURANCE/NUMERIC STOCKAGE OBJECTIVE ITEM* Items which may be required occasionally or intermittently, and prudence requires that a nominal quantity of materiel be stocked due to the essentiality or the lead time of the item. 1. The items is centrally managed, stocked, and issued. 2. Requisitions will be submitted in accordance with IMM/service requisitioning procedures."
}]};

const listCiic2863 = {[{
  "code": "A",
  "explanation": "Confidential - Formerly Restricted Data"
},{
  "code": "B",
  "explanation": "Confidential - Restricted Data"
},{
  "code": "C",
  "explanation": "Confidential"
},{
  "code": "D",
  "explanation": "Confidential - Cryptologic"
},{
  "code": "E",
  "explanation": "Secret - Cryptologic"
},{
  "code": "F",
  "explanation": "Top Secret - Cryptologic"
},{
  "code": "G",
  "explanation": "Secret -Formerly Restricted Data"
},{
  "code": "H",
  "explanation": "Secret - Restricted Data"
},{
  "code": "K",
  "explanation": "Top Secret - Formerly Restricted Data"
},{
  "code": "L",
  "explanation": "Top Secret - Restricted Data"
},{
  "code": "O",
  "explanation": "Item contains naval nuclear propulsion information; disposal and access limitations are identified in NAVSEAINST C5511.32. Store and handle in a manner which will preclude unauthorized access to this material."
},{
  "code": "S",
  "explanation": "Secret"
},{
  "code": "T",
  "explanation": "Top Secret"
},{
  "code": "U",
  "explanation": "Unclassified"
},{
  "code": "7",
  "explanation": "Item assigned a Demilitarization Code other than A, B or Q for which another CIIC is inappropriate. The loss, theft, unlawful disposition, and/or recovery of an item in this category will be investigated in accordance with DoD 4000.25-2-M and DoD 7200.10-M."
},{
  "code": "9",
  "explanation": "Identifies an item as a Controlled Cryptographic Item -CCI-. CCI is described as secure telecommunications or information handling equipment, associated cryptographic component, or other hardware item which performs a critical Communications Security  COMSEC- function. Items so designated are unclassified but controlled, and will bear the designation “Controlled Cryptographic Item\" or \"CCI\"."
},{
  "code": "1",
  "explanation": "Highest Sensitivity (Category I) - Nonnuclear missiles and rockets in a ready-to-fire configuration (e.g., Hamlet, Redeye, Stinger, Dragon, LAW, Viper) and explosive rounds for nonnuclear missiles and rockets. This category also applies in situations where the launcher (tube) and the explosive rounds, though not in a ready-to-fire configuration, are jointly stored or transported."
},{
  "code": "2",
  "explanation": "High Sensitivity (Category II) - Arms, Ammunition, and Explosives."
},{
  "code": "3",
  "explanation": "Moderate Sensitivity (Category III) - Arms, Ammunition, and Explosives."
},{
  "code": "4",
  "explanation": "Low Sensitivity (Category IV) - Arms, Ammunition, and Explosives."
},{
  "code": "5",
  "explanation": "Highest Sensitivity (Category I) - Arms, Ammunition, and Explosives with a physical security classification of Secret."
},{
  "code": "6",
  "explanation": "Highest Sensitivity (Category I) - Arms, Ammunition, and Explosives with a physical security classification of Confidential."
},{
  "code": "8",
  "explanation": "Highest Sensitivity (Category II) - Arms, Ammunition, and Explosives with a physical security classification of Confidential."
},{
  "code": "Q",
  "explanation": "A drug or other controlled substance designed as a Schedule III, IV or V item, in accordance with the US Controlled Substance Act of 1970. Other sensitive items requiring limited access storage."
},{
  "code": "R",
  "explanation": "Precious Metals, a drug or other controlled substance designated as a Schedule I or II item, in accordance with the US Controlled Substance Act of 1970. Other selected sensitive items requiring storage in a vault or safe."
},{
  "code": "$",
  "explanation": "This code identifies Nuclear Weapons Use Control (UC) Ground Equipment which is CIIC unclassified by may require special controls. Use Control Ground Equipment is described as recoders, verifiers, adapters, power supplies, cables, programmers, monitors, controllers, code processors, power converters, computers and data modules which perform a Nuclear Weapon Use Control Function."
},{
  "code": "J",
  "explanation": "Pilferage - Pilferage controls may be designated by the coding activity to items coded U (Unclassified) by recording the item to J."
},{
  "code": "I",
  "explanation": "Aircraft engine equipment and parts"
},{
  "code": "M",
  "explanation": "Handtools and shop equipment"
},{
  "code": "N",
  "explanation": "Firearms Piece Parts and Non-lethal Firearms"
},{
  "code": "P",
  "explanation": "Ammunition and explosives"
},{
  "code": "V",
  "explanation": "Individual clothing and equipment"
},{
  "code": "W",
  "explanation": "Office machines"
},{
  "code": "X",
  "explanation": "Photographic equipment and supplies"
},{
  "code": "Y",
  "explanation": "Communication/electronic equipment and parts"
},{
  "code": "Z",
  "explanation": "Vehicular equipment and parts"
}]};

const listUom0107 = {[{
  "code": "BF",
  "term": "Board Foot"
},{
  "code": "BQ",
  "term": "Briquet"
},{
  "code": "CC",
  "term": "Cubic Centimeter"
},{
  "code": "CD",
  "term": "Cubic Yard"
},{
  "code": "CF",
  "term": "Cubic Foot"
},{
  "code": "CG",
  "term": "Centigram"
},{
  "code": "CI",
  "term": "Cubic Inch"
},{
  "code": "CL",
  "term": "Centiliter"
},{
  "code": "CM",
  "term": "Centimeter"
},{
  "code": "CU",
  "term": "Curie"
},{
  "code": "CV",
  "term": "Cubic Decimeter"
},{
  "code": "CZ",
  "term": "Cubic Meter"
},{
  "code": "DC",
  "term": "Decagram"
},{
  "code": "DE",
  "term": "Decimeter"
},{
  "code": "DG",
  "term": "Decigram"
},{
  "code": "DL",
  "term": "Deciliter"
},{
  "code": "DM",
  "term": "Dram"
},{
  "code": "DW",
  "term": "Pennyweight"
},{
  "code": "DZ",
  "term": "Dozen"
},{
  "code": "EA",
  "term": "Each"
},{
  "code": "EX",
  "term": "Exposure"
},{
  "code": "FD",
  "term": "Fold"
},{
  "code": "FR",
  "term": "Frame"
},{
  "code": "FT",
  "term": "Foot"
},{
  "code": "FZ",
  "term": "Fluid Ounce"
},{
  "code": "GB",
  "term": "Gallon (Imperial)"
},{
  "code": "GC",
  "term": "Gill (Imperial)"
},{
  "code": "GG",
  "term": "Great Gross"
},{
  "code": "GI",
  "term": "Gill (US)"
},{
  "code": "GL",
  "term": "Gallon (US)"
},{
  "code": "GM",
  "term": "Gram"
},{
  "code": "GN",
  "term": "Grain"
},{
  "code": "GR",
  "term": "Gross"
},{
  "code": "HD",
  "term": "Hundred"
},{
  "code": "HF",
  "term": "Hundred Feet"
},{
  "code": "HG",
  "term": "Hectogram"
},{
  "code": "HL",
  "term": "Hectoliter"
},{
  "code": "HM",
  "term": "Hectometer"
},{
  "code": "HP",
  "term": "Hundred Pounds"
},{
  "code": "HS",
  "term": "Hundred Square Feet"
},{
  "code": "HW",
  "term": "Hundred Weight"
},{
  "code": "HY",
  "term": "Hundred Yards"
},{
  "code": "IN",
  "term": "Inch"
},{
  "code": "KG",
  "term": "Kilogram"
},{
  "code": "KM",
  "term": "Kilometer"
},{
  "code": "KR",
  "term": "Carat"
},{
  "code": "LB",
  "term": "Pound"
},{
  "code": "LF",
  "term": "Linear Foot"
},{
  "code": "LI",
  "term": "Liter"
},{
  "code": "MC",
  "term": "Thousand Cubic Feet"
},{
  "code": "MF",
  "term": "Thousand Feet"
},{
  "code": "MG",
  "term": "Milligram"
},{
  "code": "MI",
  "term": "Mile"
},{
  "code": "ML",
  "term": "Milliliter"
},{
  "code": "MM",
  "term": "Millimeter"
},{
  "code": "MN",
  "term": "Square Millimeter"
},{
  "code": "MR",
  "term": "Meter"
},{
  "code": "MX",
  "term": "Thousand"
},{
  "code": "OZ",
  "term": "Ounce"
},{
  "code": "PB",
  "term": "Pint (Imperial)"
},{
  "code": "PT",
  "term": "Pint (US)"
},{
  "code": "QC",
  "term": "Square Centimeter"
},{
  "code": "QD",
  "term": "Square Decimeter"
},{
  "code": "QT",
  "term": "Quart (US)"
},{
  "code": "RA",
  "term": "Ration"
},{
  "code": "RD",
  "term": "Round"
},{
  "code": "RM",
  "term": "Ream"
},{
  "code": "RX",
  "term": "Thousand Rounds"
},{
  "code": "SF",
  "term": "Square Foot"
},{
  "code": "SH",
  "term": "Sheet"
},{
  "code": "SI",
  "term": "Square Inch"
},{
  "code": "SK",
  "term": "Skein"
},{
  "code": "SM",
  "term": "Square Meter"
},{
  "code": "SO",
  "term": "Shot"
},{
  "code": "SQ",
  "term": "Square"
},{
  "code": "SY",
  "term": "Square Yard"
},{
  "code": "TM",
  "term": "Metric Ton"
},{
  "code": "TN",
  "term": "Ton (2,000 lb)"
},{
  "code": "TO",
  "term": "Troy Ounce"
},{
  "code": "TT",
  "term": "Tablet"
},{
  "code": "US",
  "term": "U.S.P. Unit"
},{
  "code": "YD",
  "term": "Yard"
}]};

const listSosc3690 = {[{
  "routingIdentifierCode": "A12",
  "activityCode": "AJ",
  "serviceActivityAndLocation": "U.S. ARMY SOLDIER'S BIOLOGICAL & CHEMICAL COMMAND, NATICK, MA 01760"
},{
  "routingIdentifierCode": "A35",
  "activityCode": "CD",
  "serviceActivityAndLocation": "U.S. ARMY WAR RESERVE COMMAND, MATERIEL MANAGEMENT TEAM, NEW CUMBERLAND, PA 17070-5008"
},{
  "routingIdentifierCode": "AKZ",
  "activityCode": "AZ",
  "serviceActivityAndLocation": "US ARMY TANK-AUTOMOTIVE AND ARMAMENTS COMMAND WARREN, MI 48397-5000"
},{
  "routingIdentifierCode": "AP5",
  "activityCode": "CA",
  "serviceActivityAndLocation": "U.S. ARMY SOLDIER'S BIOLOGICAL & CHEMICAL COMMAND, U.S. ARMY SUPPORT ACTIVITY, PHALIDELPHIA,PA 19101-3460"
},{
  "routingIdentifierCode": "B14",
  "activityCode": "BF",
  "serviceActivityAndLocation": "U.S. ARMY ARMAMENT AND CHEMICAL ACQUISITION AND LOGISTICS ACTIVITY, ATTN: AMSTA-AC, ROCK ISLAND,IL 61299-6000"
},{
  "routingIdentifierCode": "B16",
  "activityCode": "CL",
  "serviceActivityAndLocation": "US ARMY COMMUNICATIONS-ELECTRONICS COMMAND AND FORT MONMOUTH  FORT MONMOUTH, NJ 07703-5016"
},{
  "routingIdentifierCode": "B17",
  "activityCode": "CT",
  "serviceActivityAndLocation": "U.S. ARMY AVIATION & MISSILE COMMAND (AIR), ATTN: AMSMI-LC-MM-C, REDSTONE ARSENAL,AL 35898-5230"
},{
  "routingIdentifierCode": "B56",
  "activityCode": "CM",
  "serviceActivityAndLocation": "US ARMY COMMUNICATIONS SECURITY LOGISTICS ACTIVITY  FORT HUACHUCA, AZ 85613-7090"
},{
  "routingIdentifierCode": "B63",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "USA BIOLOGICAL DEPOT, WASH, DC  MAIL - COMMANDING GENERAL, WALTER REED ARMY MEDICAL CENTER,  ATTN: CHIEF SUPPLY CONTROL BRANCH  WASH, DC 20012"
},{
  "routingIdentifierCode": "B64",
  "activityCode": "BD",
  "serviceActivityAndLocation": "U.S. ARMY AVIATION & MISSILE COMMAND, ATTN: AMSMI-LC-MM-C, REDSTONE ARSENAL,AL 35858-5230"
},{
  "routingIdentifierCode": "B69",
  "activityCode": "AM",
  "serviceActivityAndLocation": "US ARMY MEDICAL MATERIEL AGENCY FREDERICK, MD 21701-5001"
},{
  "routingIdentifierCode": "B69",
  "activityCode": "AS",
  "serviceActivityAndLocation": "US ARMY MEDICAL MATERIEL AGENCY FREDERICK, MD 21701-5001"
},{
  "routingIdentifierCode": "BAM",
  "activityCode": "AT",
  "serviceActivityAndLocation": "SIMULATION, TRAINING AND INSTRUMENTATION COMMAND ORLANDO, FL  32826-3276"
},{
  "routingIdentifierCode": "BAM",
  "activityCode": "BS",
  "serviceActivityAndLocation": "SIMULATION, TRAINING AND INSTRUMENTATION COMMAND ORLANDO, FL  32826-3276"
},{
  "routingIdentifierCode": "BS7",
  "activityCode": "AV",
  "serviceActivityAndLocation": "TELEVISION-AUDIO SUPPORT ACTIVITY SACRAMENTO, CA  95813-5019"
},{
  "routingIdentifierCode": "BS7",
  "activityCode": "BS",
  "serviceActivityAndLocation": "TELEVISION-AUDIO SUPPORT ACTIVITY SACRAMENTO, CA  95813-5019"
},{
  "routingIdentifierCode": "CAT",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "CATERPILLAR INC, DEFENSE AND FEDERAL PRODUCTS DIV 14009 OLD GALENA ROAD, MOOSVILLE, IL 61552"
},{
  "routingIdentifierCode": "CLC",
  "activityCode": "AU",
  "serviceActivityAndLocation": "THALES RAYTHEON SYSTEMS CO 2000 EAST EL SEGUNDO BLVD EL SEGUNDO, CA  90245-0902"
},{
  "routingIdentifierCode": "CLC",
  "activityCode": "BS",
  "serviceActivityAndLocation": "THALES RAYTHEON SYSTEMS CO 2000 EAST EL SEGUNDO BLVD EL SEGUNDO, CA  90245-0902"
},{
  "routingIdentifierCode": "F01",
  "activityCode": "TL",
  "serviceActivityAndLocation": "LOCKHEED MARTIN AERONAUTICAL SYSTEMS, EAGLE GLOBAL LOGISTICS FOR DEPOT STORAGE 15001 PETERSON CT FORT WORTH, TX 76177-2324"
},{
  "routingIdentifierCode": "F04",
  "activityCode": "TT",
  "serviceActivityAndLocation": "AIR FORCE MEDICAL LOGISTICS OFFICE/FOM-C 1423 SULTAN DR, STE 200 FORT FREDERICK, MD 21702-5006"
},{
  "routingIdentifierCode": "F06",
  "activityCode": "TL",
  "serviceActivityAndLocation": "LOCKHEED MARTIN AERONAUTICS FOR DEPOT STORAGE ONLY BLDG 4002 X ST DOCK 2 KEESLER AFB, MS 39534-5249"
},{
  "routingIdentifierCode": "F08",
  "activityCode": "TD",
  "serviceActivityAndLocation": "AEROSPACE INTEGRATION CORPORATION FOR DEPOT STORAGE ONLY 5555 JOHN GIVENS RD CRESTVIEW, FL 32539-7019"
},{
  "routingIdentifierCode": "F09",
  "activityCode": "TL",
  "serviceActivityAndLocation": "LOCKHEED MARTIN MISSION SYSTEMS FOR DEPOT STORAGE ONLY 111 W. BETTERAVIA RD SANTA MARIA CA  93455-1120"
},{
  "routingIdentifierCode": "F13",
  "activityCode": "TP",
  "serviceActivityAndLocation": "PRATT & WHITNEY FOR DEPOT STORAGE ONLY 400 MAIN ST. MS 605 04 EAST HARTFORD, CT 06108-0968"
},{
  "routingIdentifierCode": "F16",
  "activityCode": "SI",
  "serviceActivityAndLocation": "ROLLS ROYCE CORPORATION FOR DEPOT STORAGE ONLY 2001 S. TIBBS AVE INDIANAPOLIS, IN 42641-4812"
},{
  "routingIdentifierCode": "F20",
  "activityCode": "TB",
  "serviceActivityAndLocation": "BOEING INTEGRATED DEFENSE SYSTEM FOR DEPOT STORAGE ONLY  4615 S. OLIVER ST  WICHITA, KS 67210-1614"
},{
  "routingIdentifierCode": "F27",
  "activityCode": "TG",
  "serviceActivityAndLocation": "WARNER ROBINS AIR LOGISTICS CENTER 425 EASTMANT ST DR350 01 ROBINS AFB, GA 31098-1811"
},{
  "routingIdentifierCode": "F28",
  "activityCode": "TB",
  "serviceActivityAndLocation": "THE BOEING COMPANY FOR DEPOT STORAGE ONLY 626 ANCHORS ST NW FORT WALTON BEACH, FL 32548-7013"
},{
  "routingIdentifierCode": "F2U",
  "activityCode": "TG",
  "serviceActivityAndLocation": "WARNER-ROBINS AIR LOGISTICS CENTER 455 BYRON ST ROBINS AFB, GA 31098-1887"
},{
  "routingIdentifierCode": "F43",
  "activityCode": "TQ",
  "serviceActivityAndLocation": "HONEYWELL TECHNICAL SERVICES, INC 110 BAYFIELD DR COLORADO SPRINGS, CO 80906-4634"
},{
  "routingIdentifierCode": "F46",
  "activityCode": "TB",
  "serviceActivityAndLocation": "THE BOEING COMPANY 7755 E. MARGINAL WAY S. SEATTLE, WA 98108-4002"
},{
  "routingIdentifierCode": "F4U",
  "activityCode": "SU",
  "serviceActivityAndLocation": "OGDEN AIR LOGISTICS CENTER 5851 F AVE HILL AFB UT 84056-5713"
},{
  "routingIdentifierCode": "F50",
  "activityCode": "TB",
  "serviceActivityAndLocation": "THE BOEING COMPANY  C-130 AVIONICS MOD PROGRAM"
},{
  "routingIdentifierCode": "F52",
  "activityCode": "TV",
  "serviceActivityAndLocation": "INTERNATIONAL TELEPHONE & TELEGRAPH (ITT) FOR DEPOT STORAGE ONLY 4450 E. FOUNTAIN BLVD COLORADO SPRINGS, CO 80916-2153"
},{
  "routingIdentifierCode": "F56",
  "activityCode": "TO",
  "serviceActivityAndLocation": "FD9490 SOFSA EMB FOR DEPOT STORAGE ONLY 5749 BRIAR HILL RD LEXINGTON, KY  40516-9721"
},{
  "routingIdentifierCode": "F59",
  "activityCode": "TN",
  "serviceActivityAndLocation": "NORTHROP GRUMMAN IS ACS FOR DEPOT STORAGE ONLY 6401 S. AIR DEPOT BLVD OKLAHOMA CITY, OK 73135-5911"
},{
  "routingIdentifierCode": "F63",
  "activityCode": "TC",
  "serviceActivityAndLocation": "COMPOSITE ENGINEERING, INC FOR DEPOT STORAGE ONLY 5281 RALEY BLVD SACRAMENTO, CA 95838"
},{
  "routingIdentifierCode": "F74",
  "activityCode": "TN",
  "serviceActivityAndLocation": "NORTHROP GRUMMAN CORPORATION USAF DEPOT CO AAR DEF COR FOR DEPOT STORAGE ONLY 7977 NE INDUSTRIAL BLVD MACON, GA 31216-7742"
},{
  "routingIdentifierCode": "F77",
  "activityCode": "TB",
  "serviceActivityAndLocation": "BOEING LOGISTICS SPARES, INC FOR DEPOT STORAGE ONLY 5690 SOUTHFIELD CT STE 200 FOREST PART, GA 30297-2524"
},{
  "routingIdentifierCode": "F78",
  "activityCode": "TM",
  "serviceActivityAndLocation": "NORTHROP GRUMMAN GLOBAL HAWK REDISTRIBUTION DEPOT 16710 VIA DEL CAMPO CT SAN DIEGO, CA  92127-1712"
},{
  "routingIdentifierCode": "F7X",
  "activityCode": "SJ",
  "serviceActivityAndLocation": "AIR FORCE CRYPTOLOGIC SUPPORT GROUP 230 HALL BLVD, STE 158 SAN ANTONIO, TX 78243-7056"
},{
  "routingIdentifierCode": "F80",
  "activityCode": "TG",
  "serviceActivityAndLocation": "WARNER ROBINS AIR LOGISTICS CENTER  ROBINS AFB, GA  31098-5609"
},{
  "routingIdentifierCode": "F81",
  "activityCode": "TL",
  "serviceActivityAndLocation": "LOCKHEED MARTIN C5 FOR DEPOT STORAGE ONLY 244 TERMINAL RD GREENVILLE, SC 29605-5508"
},{
  "routingIdentifierCode": "F83",
  "activityCode": "TF",
  "serviceActivityAndLocation": "GENERAL ATOMICS ASI FOR DEPOT STORAGE ONLY 16761 VIA DEL CAMPO CT SAN DIEGO, CA  92127-1713"
},{
  "routingIdentifierCode": "F85",
  "activityCode": "TV",
  "serviceActivityAndLocation": "INTERNATIONAL TELEPHONE & TELEGRAPH (ITT) SPACELIFT RANGE SYSTEM CONTROL FOR DEPOT STORAGE ONLY PO BOX 325307 PATRICK AFB, FL 32925-4307"
},{
  "routingIdentifierCode": "F8U",
  "activityCode": "SX",
  "serviceActivityAndLocation": "OKLAHOMA AIR LOGISTICS CENTER DEPOT STORAGE FACILITY 3001 STAFF DR TINKER AFB, OK 73145-3303"
},{
  "routingIdentifierCode": "F92",
  "activityCode": "ST",
  "serviceActivityAndLocation": "AIR FORCE CLOTHING AND TEXTILE OFFICE  PHILADELPHIA, PENNSYLVANIA 19101-8419"
},{
  "routingIdentifierCode": "F97",
  "activityCode": "SR",
  "serviceActivityAndLocation": "HQ AIR FORCE ENGINEERING AND SERVICES CENTER/AFESC  TYNDALL AFB, FLORIDA 32403-6001"
},{
  "routingIdentifierCode": "FG5",
  "activityCode": "SU",
  "serviceActivityAndLocation": "OGDEN AIR LOGISTICS CENTER 6033 ELM LANE HILL AFB, UT 84056-5619"
},{
  "routingIdentifierCode": "FGL",
  "activityCode": "SK",
  "serviceActivityAndLocation": "AF NUCLEAR WEAPONS PRODUCT SUPPORT CENTER 1551 WYOMING BLVD SE KIRTLAND AFB, NM 87117-0001"
},{
  "routingIdentifierCode": "FGZ",
  "activityCode": "SU",
  "serviceActivityAndLocation": "OGDEN AIR LOGISTICS CENTER 5851 F AVE HILL AFB, UT 84056-5713"
},{
  "routingIdentifierCode": "FHZ",
  "activityCode": "SX",
  "serviceActivityAndLocation": "OKLAHOMA CITY AIR LOGISTICS CENTER 3001 STAFF DRIVE TINKER AFB, OK 73145-3303"
},{
  "routingIdentifierCode": "FL5",
  "activityCode": "TG",
  "serviceActivityAndLocation": "WARNER-ROBINS AIR LOGISTICS CENTER LETTERKENNY MUNITIONS 1 OVERCASH AVE CHAMBERSBURG, PA 17201-4150"
},{
  "routingIdentifierCode": "FLZ",
  "activityCode": "TG",
  "serviceActivityAndLocation": "WARNER-ROBINS AIR LOGISTICS CENTER 455 BYRON ST ROBINS AFB, GA 31098-1860"
},{
  "routingIdentifierCode": "FMS",
  "activityCode": "TD",
  "serviceActivityAndLocation": "AIR FORCE LOGISTICS COMMAND  INTERNATIONAL LOGISTICS CENTER/MI  WRIGHT PATTERSON AFB, OH 45433-5001"
},{
  "routingIdentifierCode": "FND",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "AFMPC/MPCCM  RANDOLPH AFB, TEXAS 78148"
},{
  "routingIdentifierCode": "FNF",
  "activityCode": "SA",
  "serviceActivityAndLocation": "AFLC COMMAND CHAPLAIN  HQ AFLC/HC  WRIGHT-PATTERSON AFB, OHIO 45433-5001"
},{
  "routingIdentifierCode": "FPD",
  "activityCode": "SJ",
  "serviceActivityAndLocation": "AIR FORCE CRYPTOLOGIC SUPPORT GROUP 230 HALL BLVD, BLDG 2028 SAN ANTONIO, TX 78243-7081"
},{
  "routingIdentifierCode": "FPH",
  "activityCode": "SP",
  "serviceActivityAndLocation": "AIR FORCE PETROLEUM AGENCY SCIENCE & TECHNOLOGY DIVISION;AFPA/PTPT; 2430 C ST, BLD 70, AREA B; WRIGHT-PATTERSON AFB, OH 45433-7632"
},{
  "routingIdentifierCode": "FPK",
  "activityCode": "SC",
  "serviceActivityAndLocation": "SAN ANTONIO AIR LOGISTICS CENTER KELLY AFB, TEXAS 78241-5000"
},{
  "routingIdentifierCode": "FPZ",
  "activityCode": "SP",
  "serviceActivityAndLocation": "SAN ANTONIO AIR LOGISTICS CENTER  KELLY AFB, TEXAS 78241-5000"
},{
  "routingIdentifierCode": "FZZ",
  "activityCode": "TG",
  "serviceActivityAndLocation": "WR-ALC/LX 235 BYRON ST, STE 19A ROBINS AFB,GA 31098-1670"
},{
  "routingIdentifierCode": "G13",
  "activityCode": "47",
  "serviceActivityAndLocation": "DEPARTMENT OF COMMERCE  NATIONAL OCEANIC AND ATMOSPHERIC ADMINISTRATION  NATIONAL WEATHER SERVICE - ENGINEERING DIVISION  1325 EAST-WEST HIGHWAY  W/OSO322, SSMC2  SILVER SPRING MD 20910"
},{
  "routingIdentifierCode": "G14",
  "activityCode": "47",
  "serviceActivityAndLocation": "NATIONAL WEATHER SERVICE  NATIONAL RECONDITIONING CENTER (NRC)  1520 E. BANNISTER  ROAD  KANSAS CITY, MO  64131"
},{
  "routingIdentifierCode": "G36",
  "activityCode": "54",
  "serviceActivityAndLocation": "VETERANS ADMINISTRATION  SUPPLY DEPOT (901E)  P.O. BOX 27  HINES, IL 60141"
},{
  "routingIdentifierCode": "G69",
  "activityCode": "48",
  "serviceActivityAndLocation": "DEPARTMENT OF TRANSPORTATION FEDERAL AVIATION ADMINISTRATION  ATTN:  COE AML-030 TSF BLDG 215 PO BOX 25082 OKLAHOMA CITY,  OK  73125-0082"
},{
  "routingIdentifierCode": "GF0",
  "activityCode": "75",
  "serviceActivityAndLocation": "GENERAL SERVICES ADMINISTRATION  GENERAL PRODUCTS COMMODITY CENTER  FORT WORTH, TX 76102"
},{
  "routingIdentifierCode": "GGE",
  "activityCode": "73",
  "serviceActivityAndLocation": "GENERAL SERVICES ADMINISTRATION  AUTOMATED DATA AND TELECOMMUNICATIONS SERVICES  ELECTRONIC SERVICE DIVISION (WCE)  7TH & D STREETS, SW  WASSHINGTON, D.C. 20407"
},{
  "routingIdentifierCode": "GK0",
  "activityCode": "75",
  "serviceActivityAndLocation": "GENERAL SERVICES ADMINISTRATION  TOOLS MATERIAL MANAGEMENT DIVISION  KANSAS CITY, MO 64131"
},{
  "routingIdentifierCode": "GN0",
  "activityCode": "75",
  "serviceActivityAndLocation": "GENERAL SERVICES ADMINISTRATION  OFFICE OF SUPPLIES AND PAPER PRODUCTS COMMODITY CENTER  NEW YORK, NY 10278"
},{
  "routingIdentifierCode": "GQ0",
  "activityCode": "75",
  "serviceActivityAndLocation": "GENERAL SERVICES ADMINISTRATION  OFFICE AND SCIENTIFIC EQUIPMENT COMMODITY CENTER  WASHINGTON, D.C. 20406"
},{
  "routingIdentifierCode": "GSA",
  "activityCode": "75",
  "serviceActivityAndLocation": "GENERAL SERVICES ADMINISTRATION  WASHINGTON, D.C. 20406"
},{
  "routingIdentifierCode": "GT0",
  "activityCode": "75",
  "serviceActivityAndLocation": "GENERAL SERVICES ADMINISTRATION  PRINTS AND CHEMICALS COMMODITY CENTER  AUBURN, WASHINGTON 98002"
},{
  "routingIdentifierCode": "GV0",
  "activityCode": "75",
  "serviceActivityAndLocation": "GENERAL SERVICES ADMINISTRATION  FURNITURE COMMODITY CENTER  WASHINGTON, D.C. 20406"
},{
  "routingIdentifierCode": "H9A",
  "activityCode": "XA",
  "serviceActivityAndLocation": "SPECIAL OPERATIONS FORCES SPT ACTY, BLDG 221 BLUE GRASS STATION, 5751 BRIAR HILL ROAD, LEXINGTON, KY 40512-4063"
},{
  "routingIdentifierCode": "H9D",
  "activityCode": "XJ",
  "serviceActivityAndLocation": "HQ USSOCOM/SOAL-LM 700 TAMPA POINT BLVD MACDILL AFB FL"
},{
  "routingIdentifierCode": "H9D",
  "activityCode": "SO",
  "serviceActivityAndLocation": "SPECIAL OPERATIONS FORCES SUPPORT AGENCY (SOFSA) ICP BLDG 220 5749 BRIAR HILL RD LEXINGTON KY 40516-9721"
},{
  "routingIdentifierCode": "HAD",
  "activityCode": "XB",
  "serviceActivityAndLocation": "FIELD COMMAND, DEFENSE SPECIAL WEAPONS AGENCY  KIRTLAND AFB, NEW MEXICO 87117-5669."
},{
  "routingIdentifierCode": "HGD",
  "activityCode": "XB",
  "serviceActivityAndLocation": "HONEYWELL FEDERAL MANUFACTURING AND TECHNOLOGIES, KANSAS CITY, MO"
},{
  "routingIdentifierCode": "HM8",
  "activityCode": "DH",
  "serviceActivityAndLocation": "DEFENSE SUPPLY CENTER RICHMOND (MAPPING) RICHMOND, VA 23297-5335"
},{
  "routingIdentifierCode": "L01",
  "activityCode": "PA",
  "serviceActivityAndLocation": "COASTAL SYSTEMS STATION DAHLGREN DIVISION NAVAL SURFACE WARFARE CENTER PANAMA CITY, FL 32407-7001"
},{
  "routingIdentifierCode": "L05",
  "activityCode": "PA",
  "serviceActivityAndLocation": "BAE SYSTEMS MARINE LTD, LANS BLDG C-08, BARROW-IN-FURNESS, CUMBRIA ENGLAND LA14 1AF"
},{
  "routingIdentifierCode": "L46",
  "activityCode": "PA",
  "serviceActivityAndLocation": "ZODIAC OF NORTH AMERICA INC., ATTN: JACKIE DOLCH TEL. 410 -643-4141, 540 THOMPSON CREEK ROAD, STEVENSVILLE, MD 21666"
},{
  "routingIdentifierCode": "LA1",
  "activityCode": "PA",
  "serviceActivityAndLocation": "FEDERAL PRISON INDUSTRIES  FC1 ESTILL  100 PRISON RD  ESTILL SC  29918-0699"
},{
  "routingIdentifierCode": "LA2",
  "activityCode": "PA",
  "serviceActivityAndLocation": "TRACK INTERNATIONAL  PRIME CONTRACTOR  369 W WESTERN AVE  PORT WASHINGTON WI  53074-0990"
},{
  "routingIdentifierCode": "LA3",
  "activityCode": "PA",
  "serviceActivityAndLocation": "TEREX CRANES INC  CONWAY OPERATION  PO BOX 260002  CONWAY SC 29528-6002"
},{
  "routingIdentifierCode": "LA4",
  "activityCode": "PA",
  "serviceActivityAndLocation": "LITTON ELECTRO OPTICS SYSTEMS DIV  ATTN US MARINE CORPS  12024 FORRESTGATE DRIVE  DALLAS TX  75243-5411"
},{
  "routingIdentifierCode": "LA5",
  "activityCode": "PA",
  "serviceActivityAndLocation": "HAYES DIVERSIFIED TECHNOLOGIES  10844 E AVE, SUITE A1  HESPERIA CA  92345-5000"
},{
  "routingIdentifierCode": "LA6",
  "activityCode": "PA",
  "serviceActivityAndLocation": "ADVANCED VEHICLE SYSTEMS INC  600 NEW HAMPSHIRE AVE NW  SUITE 1000  WASHINGTON DC  20037-2485"
},{
  "routingIdentifierCode": "LA9",
  "activityCode": "PA",
  "serviceActivityAndLocation": "OSHKOSH TRUCK CORPORATION  PO BOX 2566  2225 MINNESOTA ST  OSHKOSH WI  54902-7021"
},{
  "routingIdentifierCode": "LB2",
  "activityCode": "PA",
  "serviceActivityAndLocation": "LION-VALLEN INDUSTRIES  6450 POE AVE  STE 300  DAYTON, OH  45414-2646"
},{
  "routingIdentifierCode": "LB3",
  "activityCode": "PA",
  "serviceActivityAndLocation": "ISOMETRICS INC, 1266 N SCALES ST. PO BOX 660, ROCKINGHAM COUNTY, REIDSVILLE, NC 26320-8306"
},{
  "routingIdentifierCode": "LB4",
  "activityCode": "PA",
  "serviceActivityAndLocation": "NAVISTAR INTERNATIONAL CORPORATION TRUCK OHIO PLAN, 6125 URBANA RD. PO BOX 600, SPRINGFIELD, OH 45501-0600"
},{
  "routingIdentifierCode": "LB7",
  "activityCode": "PA",
  "serviceActivityAndLocation": "INGERSOLL RAND, MF M67854 01 L 3086, 501 SANDFORD AVE, MOCKSVILLE  NC  27028-2919"
},{
  "routingIdentifierCode": "LB8",
  "activityCode": "PA",
  "serviceActivityAndLocation": "ELGIN SWEEPER COMPANY  SUBSIDIARY OF FEDERAL SIGNAL CORPS  1300 WEST BARTLETT ROAD  ELGIN  IL  60120-7429"
},{
  "routingIdentifierCode": "LC1",
  "activityCode": "PA",
  "serviceActivityAndLocation": "XR RAYTHEON CO  HANGER FACILITY  BLDG 11005 BIGGS ARMY AIRFIELD  EL PASO  TX  79916-0001"
},{
  "routingIdentifierCode": "LC2",
  "activityCode": "PA",
  "serviceActivityAndLocation": "INGERSOLL-RAND EQUIPMENT AND SERVICES CO  12311 WEST SILVER SPRING DRIVE  MILWAUKEE, WI 53225"
},{
  "routingIdentifierCode": "LC3",
  "activityCode": "PA",
  "serviceActivityAndLocation": "KALYN SIEBERT, 1505 WEST MAIN STREET, P.O. BOX 1078, GATESVILLE, TX 76528-6078"
},{
  "routingIdentifierCode": "LC5",
  "activityCode": "PA",
  "serviceActivityAndLocation": "GENERAL DYNAMICS AMPHIBIOUS SYSTEMS FACILITY CODE 07LT9 14041 WORTH AVENUE WOODBRIDGE VA 22192-4123"
},{
  "routingIdentifierCode": "LC6",
  "activityCode": "PA",
  "serviceActivityAndLocation": "RAYTHEON COMPANY PO BOX 801 MCKINNEY, TX  75070-0801"
},{
  "routingIdentifierCode": "LC7",
  "activityCode": "PA",
  "serviceActivityAndLocation": "UNITED DEFENSE LP GROUND SYSTEM DIVISION P.O. BOX 15512 YORK, PA 17405-1512"
},{
  "routingIdentifierCode": "LC8",
  "activityCode": "PA",
  "serviceActivityAndLocation": "CATERPILLAR INC DEFENSE FEDERAL PRODUCTS TC A 14009 OLD GALENDA RD MOSSVILLE, IL  61552-0470"
},{
  "routingIdentifierCode": "LC9",
  "activityCode": "PA",
  "serviceActivityAndLocation": "AM GENERAL PO BOX 728 408 SOUTH BYRKIT ST MISHAWAKA, IN  46544-0728"
},{
  "routingIdentifierCode": "LD2",
  "activityCode": "PA",
  "serviceActivityAndLocation": "AEROVIRONMENT, 69 MORELAND RD, SIMI VALLEY, CA 93065-1662"
},{
  "routingIdentifierCode": "LD3",
  "activityCode": "PA",
  "serviceActivityAndLocation": "RO DEFENSE INC., 48 RAWLS SPRING LOOP RD, HATTIESBURG, MS 39402-7801"
},{
  "routingIdentifierCode": "LD4",
  "activityCode": "PA",
  "serviceActivityAndLocation": "NORDIC AIR, INC. 5455 ROUTE 307 WEST GENEVA, OH 44041"
},{
  "routingIdentifierCode": "LD6",
  "activityCode": "PA",
  "serviceActivityAndLocation": "HARRIS CORP GCSD, 2400 PALM BAY RD NE, PALM BAY FL 32905-3399"
},{
  "routingIdentifierCode": "LD9",
  "activityCode": "PA",
  "serviceActivityAndLocation": "GYROCAM SYSTEMS LLC, 8100 15TH STREET EAST, SARASOTA, FL 34243"
},{
  "routingIdentifierCode": "M00",
  "activityCode": "PA",
  "serviceActivityAndLocation": "RAYTHEON SYSTEMS COMPANY L00682, 2501 WEST UNIVERSITY DRIVE, P.O. BOX 801 M/S 8064, MCKINNEY TX 7570-0801"
},{
  "routingIdentifierCode": "M01",
  "activityCode": "PA",
  "serviceActivityAndLocation": "TRAK INTERNATIONAL PRIME CONTRACTOR 369 W WESTERN AVE PORT WASHINGTON WI  53074-0990"
},{
  "routingIdentifierCode": "M05",
  "activityCode": "PA",
  "serviceActivityAndLocation": "BAE SYSTEMS MARINE LTD, LANS BLDG M05C-08, BARROW-IN-FURNESS, CUMBRIA ENGLAND LA 141AF"
},{
  "routingIdentifierCode": "M20",
  "activityCode": "PA",
  "serviceActivityAndLocation": "UNITED DEFENSE LP GROUND SYSTEMS DIV  1100 BAIRS RD, P.O. BOX 15512 YORK, PA 17405-1512"
},{
  "routingIdentifierCode": "M31",
  "activityCode": "PA",
  "serviceActivityAndLocation": "CATERPILLAR INC, DEFENSE FEDERAL PRODUCTS TCA, 14009 OLD GALENA RD, MOSSVILLE, IL 61522-0407"
},{
  "routingIdentifierCode": "M32",
  "activityCode": "PA",
  "serviceActivityAndLocation": "LION-VALLEN INDUSTRIES  6450 POE AVE  STE 300  DAYTON, OH  45414-2646"
},{
  "routingIdentifierCode": "MA6",
  "activityCode": "PA",
  "serviceActivityAndLocation": "ADVANCED VEHICLE SYSTEMS INC, L00864 600 NW HAMPSHIRE AVE, NW, STE 1000, WASHINGTON, DC 20037"
},{
  "routingIdentifierCode": "MA7",
  "activityCode": "PA",
  "serviceActivityAndLocation": "HAYES DIVERSIFIED TECHNOLOGIES L00679, 10844 E AVE STE A1, HESPERIA, CA 92345"
},{
  "routingIdentifierCode": "MA8",
  "activityCode": "PA",
  "serviceActivityAndLocation": "AM GENERAL L00211, P.O. BOX 728, 420 SOUTH BYRKIT ST. MISHAWAKA, IN 46522-3012"
},{
  "routingIdentifierCode": "MA9",
  "activityCode": "PA",
  "serviceActivityAndLocation": "OSHKOSH TRUCK COMPANY, OSHKOSH, WI  54901"
},{
  "routingIdentifierCode": "MHQ",
  "activityCode": "PM",
  "serviceActivityAndLocation": "HEADQUARTERS MARINE CORPS  WASHINGTON, D.C. 20380"
},{
  "routingIdentifierCode": "MPB",
  "activityCode": "PA",
  "serviceActivityAndLocation": "COMMANDING GENERAL  MARINE CORPS LOGISTICS BASE  G647-1, BLDG. 3700  ALBANY, GEORGIA 31704-5000"
},{
  "routingIdentifierCode": "MTC",
  "activityCode": "PA",
  "serviceActivityAndLocation": "AMERICAN CRANE CORPORATION  DBA TEREX AMERICAN INC  202 RALEIGH ST  WILMINGTON, NC 28412-6363"
},{
  "routingIdentifierCode": "N17",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVY RESALE AND SERVICE  SUPPORT OFFICE  FORT WADSWORTH STATEN ISLAND, NY 10305"
},{
  "routingIdentifierCode": "N21",
  "activityCode": "KA",
  "serviceActivityAndLocation": "NAVAL AIR SYSTEM COMMAND  WASHINGTON, D.C. 20360"
},{
  "routingIdentifierCode": "N22",
  "activityCode": "HP",
  "serviceActivityAndLocation": "NAVAL SUPPLY SYSTEMS COMMAND  WASHINGTON, D.C. 20376"
},{
  "routingIdentifierCode": "N23",
  "activityCode": "HA",
  "serviceActivityAndLocation": "NAVAL SEA SYSTEMS COMMAND  WASHINGTON, D.C. 20362"
},{
  "routingIdentifierCode": "N23",
  "activityCode": "HB",
  "serviceActivityAndLocation": "NAVAL SEA SYSTEMS COMMAND  WASHINGTON, D.C. 20362"
},{
  "routingIdentifierCode": "N24",
  "activityCode": "JK",
  "serviceActivityAndLocation": "NAVAL SEA SYSTEMS COMMAND  WASHINGTON, D.C. 20362"
},{
  "routingIdentifierCode": "N24",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "PROGRAM EXECUTIVE OFFICER, EXPEDITIONARY WARFARE, ATTN: PMS 325J 2531 JEFFERSON DAVIS HIGHWAY, ARLINGTON, VA  22242-5171"
},{
  "routingIdentifierCode": "N25",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL FACILITIES ENGINEERING COMMAND  ALEXANDRIA, VIRGINIA 22332"
},{
  "routingIdentifierCode": "N26",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "BUREAU OF NAVAL PERSONNEL  WASHINGTON, D.C. 20370"
},{
  "routingIdentifierCode": "N32",
  "activityCode": "KE",
  "serviceActivityAndLocation": "NAVAL INVENTORY CONTROL POINT PHILADELPHIA, PENNSYLVANIA 19111-5098"
},{
  "routingIdentifierCode": "N35",
  "activityCode": "HD",
  "serviceActivityAndLocation": "NAVAL INVENTORY CONTROL POINT MECHANICSBURG, PENNSYLVANIA 17055-0788"
},{
  "routingIdentifierCode": "N35",
  "activityCode": "HX",
  "serviceActivityAndLocation": "NAVAL INVENTORY CONTROL POINT MECHANICSBURG, PENNSYLVANIA 17055-0788"
},{
  "routingIdentifierCode": "N35",
  "activityCode": "JF",
  "serviceActivityAndLocation": "NAVAL INVENTORY CONTROL POINT MECHANICSBURG, PENNSYLVANIA 17055-0788"
},{
  "routingIdentifierCode": "N39",
  "activityCode": "HW",
  "serviceActivityAndLocation": "MILITARY SEALIFT COMMAND  WASHINGTON, D.C. 20390"
},{
  "routingIdentifierCode": "N43",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVY FOOD SERVICE SYSTEMS OFFICE  WASHINGTON NAVY YARD  WASHINGTON, D.C. 20374"
},{
  "routingIdentifierCode": "N44",
  "activityCode": "JV",
  "serviceActivityAndLocation": "STRATEGIC SYSTEMS PROJECT OFFICE  WASHINGTON, D.C. 20376"
},{
  "routingIdentifierCode": "N45",
  "activityCode": "GR",
  "serviceActivityAndLocation": "NAVAL TRAINING SYSTEM CENTER  ORLANDO, FLORIDA 32813"
},{
  "routingIdentifierCode": "N47",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVY FLEET MATERIAL SUPPORT OFFICE  MECHANICSBURG, PA 17055"
},{
  "routingIdentifierCode": "N48",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL EDUCATION AND TRAINING PROGRAM DEVELOPMENT CENTER  PENSACOLA, FLORIDA 32509"
},{
  "routingIdentifierCode": "N56",
  "activityCode": "KN",
  "serviceActivityAndLocation": "BUREAU OF MEDICINE AND SURGERY  WASHINGTON, D.C. 20390"
},{
  "routingIdentifierCode": "N57",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "CHIEF OF NAVAL OPERATIONS  WASHINGTON, D.C. 20350"
},{
  "routingIdentifierCode": "N64",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "COMMANDER  NAVAL INTELLIGENCE COMMAND 4600 SILVER HILL ROAD  WASHINGTON, D.C. 20389"
},{
  "routingIdentifierCode": "N67",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL AIR TECHNICAL SERVICES FACILITY  PHILAEDELPHIA, PENNSYLVANIA 19111"
},{
  "routingIdentifierCode": "N68",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL UNDERWARTER SYSTEMS CENTER  NEWPORT, RI 02840"
},{
  "routingIdentifierCode": "N77",
  "activityCode": "HC",
  "serviceActivityAndLocation": "SPACE AND NAVAL WARFARE SYSTEMS COMMAND WASHINGTON, D.C. 20363"
},{
  "routingIdentifierCode": "N79",
  "activityCode": "GE",
  "serviceActivityAndLocation": "NAVAL MINE ENGINEERING FACILITY  YORKTOWN, VIRGINIA 23491"
},{
  "routingIdentifierCode": "N84",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL SHIP WEAPON SYSTEMS ENGINEERING STATION (CODE 5200)  PORT HUENEME, CALIFORNIA 93041"
},{
  "routingIdentifierCode": "NCB",
  "activityCode": "JG",
  "serviceActivityAndLocation": "NAVAL ORDNANCE CENTER P.O. BOX 2011 MECHANICSBURG, PENNSYLVANIA  17055-0788"
},{
  "routingIdentifierCode": "NDZ",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL SUPPLY CENTER  SAN DIEGO, CALIFORNIA 92131"
},{
  "routingIdentifierCode": "NFZ",
  "activityCode": "KE",
  "serviceActivityAndLocation": "NAVAL PUBLICATIONS AND FORMS DIRECTORATE  NAVAL INVENTORY CONTROL POINT  PHILADELPHIA, PENNSYLVANIA  19111-5098"
},{
  "routingIdentifierCode": "NMP",
  "activityCode": "HD",
  "serviceActivityAndLocation": "NAVAL INVENTORY CONTREOL POINT  P.O. BOX 2020  MECHANICSBURG, PA 17055-0788"
},{
  "routingIdentifierCode": "NMZ",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL INVENTORY CONTROL POINT   P.O. BOX 2020  MECHANICSBURG, PA 17055-0788"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "HD",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5098"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "HX",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5098"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "JF",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5098"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "KE",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5098"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "KA",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "HW",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "JS",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "JC",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "JN",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "HB",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "JK",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "JD",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "GR",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "HA",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "HC",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "JV",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NRP",
  "activityCode": "GE",
  "serviceActivityAndLocation": "NAVICP-ERP 700 ROBBINS AVENUE PHILADELPHIA, PA 19111-5099"
},{
  "routingIdentifierCode": "NWS",
  "activityCode": "TR",
  "serviceActivityAndLocation": "NATIONAL WEATHER SERVICE  1325 EAST WEST HIGHWAY  W/GOSO322  SILVER SPRING, MD  20910"
},{
  "routingIdentifierCode": "P64",
  "activityCode": "XA",
  "serviceActivityAndLocation": "CRANE DIVISION  NAVAL SURFACE WARFARE CENTER CODE 1121, BUILDING 41SE, 300 HIGHWAY 361 CRAVE, IN  47522-5010"
},{
  "routingIdentifierCode": "P73",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL UNDERSEA WARFARE  ENGINEERING STATION SUPPLY DEPARTMENT  KEYPORT, WA 98345"
},{
  "routingIdentifierCode": "P87",
  "activityCode": "XA",
  "serviceActivityAndLocation": "NAVAL SURFACE WARFARE CENTER  COASTAL SYSTEMS STATION  6703 W. HIGHWAY 98  CODE SP40, BUILDING 435  PANANA CITY, FL  32407-7001"
},{
  "routingIdentifierCode": "PPZ",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL AIR STATION  SUPPLY DEPARTMENT  PENSACOLA, FLORIDA 32508"
},{
  "routingIdentifierCode": "PRZ",
  "activityCode": "XA",
  "serviceActivityAndLocation": "NAVAL AIR WAREFARE CENTER, AIRCRAFT DIVISION SUPPLY DEPARTMENT PATUXENT RIVER, MD  20670-5588"
},{
  "routingIdentifierCode": "PSZ",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "PACIFIC MISSILE TEST CENTER  POIT MUGU, CALIFORNIA 93042"
},{
  "routingIdentifierCode": "Q1G",
  "activityCode": "KE",
  "serviceActivityAndLocation": "NAVAL ICP, PHILADELPHIA, PA 19111"
},{
  "routingIdentifierCode": "Q1J",
  "activityCode": "KE",
  "serviceActivityAndLocation": "NAVAL ICP, PHILADELPHIA, PA 19111"
},{
  "routingIdentifierCode": "Q6D",
  "activityCode": "JD",
  "serviceActivityAndLocation": "COMMUNICATIONS SECURITY MATERIAL SYSTEM  3801 NEBRASKA AVE N.W.  WASHINGTON, D.C. 20390"
},{
  "routingIdentifierCode": "Q81",
  "activityCode": "JC",
  "serviceActivityAndLocation": "JOINT CRUISE MISSILE PROJECT OFFICE  WASHINGTON, D.C. 20360"
},{
  "routingIdentifierCode": "R29",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "SSPO TECHNICAL REPRESENTATIVE (SSPOTR)  SPERRY RAND CORP.  SPERRY SYSTEMS MANAGEMENT DIVISION  GREAT NECK, NEW YORK 11020"
},{
  "routingIdentifierCode": "R31",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL PLANT REPRESENTATIVE (SPL(W))  P.O. BOX 504  SUNNYVALE, CALIFORNIA 94088"
},{
  "routingIdentifierCode": "R32",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL SHIP ENGINEERING CENTER  NAVAL STATION  NORFOLK, VIRGINIA 23511"
},{
  "routingIdentifierCode": "R33",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL PLANT TECHNICAL REPRESENTATIVE (SPA)  AUTONETICS DIVISION OF ROCKWELL INTERNATIONAL, INC.  ANAHEIM, CALIFORNIA 92803"
},{
  "routingIdentifierCode": "R41",
  "activityCode": "JN",
  "serviceActivityAndLocation": "COMMANDING OFFICER  NAVAL CONSTRUCTION BATTALION CENTER  CIVIL ENGINEER SUPPORT OFFICE  CODE 15324  PORT HUENEME, CALIFORNIA 93043-5000"
},{
  "routingIdentifierCode": "R48",
  "activityCode": "HP",
  "serviceActivityAndLocation": "NAVAL SUPPLY SYSTEMS COMMAND  ARLINGTON, VA  22241-5360"
},{
  "routingIdentifierCode": "R58",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVY RECRUITING COMMAND  ARLINGTON, VIRGINIA 22203"
},{
  "routingIdentifierCode": "RAZ",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL PLANT REPRESENTATIVE (SPL-60)  LOCKHEED MISSILE AND SPACE CO.  P.O. BOX 504  SUNNYVALE, CALIFORNIA 94088"
},{
  "routingIdentifierCode": "RCZ",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL PLANT REPRESENTATIVE (SPG)  GENERAL ELECTRIC ORDNANCE SYSTEMS  PITTSFIELD, MASSACHUSETTS 01201"
},{
  "routingIdentifierCode": "RKZ",
  "activityCode": "N/A",
  "serviceActivityAndLocation": "NAVAL PLANT TECHNICAL REPRESENTATIVE (SPI)  INTERSTATE ELECTRONICS CORP.  ANAHEIM, CALIFORNIA 92803"
},{
  "routingIdentifierCode": "RTF",
  "activityCode": "XA",
  "serviceActivityAndLocation": "SPAWAR SYSCEN, CHARLESTON  P.O. BOX 190022  NORTH CHARLESTON, SC 29419-9002"
},{
  "routingIdentifierCode": "S9C",
  "activityCode": "AX",
  "serviceActivityAndLocation": "DEFENSE SUPPLY CENTER COLUMBUS, OHIO 43215"
},{
  "routingIdentifierCode": "S9E",
  "activityCode": "TX",
  "serviceActivityAndLocation": "DEFENSE SUPPLY CENTER COLUMBUS, COLUMBUS, OH 43218"
},{
  "routingIdentifierCode": "S9F",
  "activityCode": "KY",
  "serviceActivityAndLocation": "DEFENSE FUEL SUPPLY CENTER  CAMERON STATION  ALEXANDRIA, VA 22314"
},{
  "routingIdentifierCode": "S9G",
  "activityCode": "CX",
  "serviceActivityAndLocation": "DEFENSE SUPPLY CENTER RICHMOND, VIRGINIA 23297"
},{
  "routingIdentifierCode": "S9I",
  "activityCode": "KZ",
  "serviceActivityAndLocation": "DEFENSE INDUSTRIAL SUPPLY CENTER  PHILADELPHIA, PENNSYLVANIA 19111"
},{
  "routingIdentifierCode": "S9M",
  "activityCode": "KX",
  "serviceActivityAndLocation": "DEFENSE SUPPLY CENTER PHILADELPHIA DIRECTORATE OF MEDICAL MATERIEL  PHILADELPHIA, PENNSYLVANIA  19111"
},{
  "routingIdentifierCode": "S9P",
  "activityCode": "CZ",
  "serviceActivityAndLocation": "DEFENSE SUPPLY CENTER PHILADELPHIA  PERISHABLE SUBSISTENCE  PHILADELPHIA, PENNSYLVANIA 19101"
},{
  "routingIdentifierCode": "S9R",
  "activityCode": "CR",
  "serviceActivityAndLocation": "DEFENSE SUPPLY CENTER RICHMOND, RICHMOND, VIRGINIA  23297"
},{
  "routingIdentifierCode": "S9S",
  "activityCode": "CZ",
  "serviceActivityAndLocation": "DEFENSE SUPPLY CENTER PHILADELPHIA  NONPERISHABLE SUBSISTENCE  PHILADELPHIA, PENNSYLVANIA 19101"
},{
  "routingIdentifierCode": "S9T",
  "activityCode": "CY",
  "serviceActivityAndLocation": "DEFENSE SUPPLY CENTER PHILADELPHIA  PHILADELPHIA, PENNSYLVANIA 19101"
},{
  "routingIdentifierCode": "SMS",
  "activityCode": "GX",
  "serviceActivityAndLocation": "DEFENSE LOGISTICS AGENCY, ENTERPRISE BUSINESS SYSTEMS"
},{
  "routingIdentifierCode": "ZNC",
  "activityCode": "XG",
  "serviceActivityAndLocation": "COMMANDING OFFICER, USCG SURFACE FORCE LOGISTICS CENTER, CODE 028, MIL STOP 25, 2401 HAWKINS POINT ROAD, BALTIMORE, MARYLAND 21226-5000"
},{
  "routingIdentifierCode": "ZQC",
  "activityCode": "XH",
  "serviceActivityAndLocation": "COMMANDING OFFICER, DEPARTMENT OF HOMELAND SECURITY, USCG AVIATION LOGISTICS CENTER, 1664 WEEKSVILLE ROAD, ELIZABETH CITY, NC 27909"
}]};

const listSosmc2948 = {[{
  "code": "JCA",
  "explanation": "Authorization and Procurement Purposes (Integrated Materiel Manager (IMM)/Service)"
},{
  "code": "JCD",
  "explanation": "Delete"
},{
  "code": "JCK",
  "explanation": "Condemned"
},{
  "code": "JCL",
  "explanation": "Local Manufacture - Fabricate or Assembly (DLA/Service)"
},{
  "code": "JCM",
  "explanation": "Depot Manufacture - Fabricate or Assembly (Service, except Air Force)"
},{
  "code": "JCR",
  "explanation": "Reference to Phrase (Service)"
},{
  "code": "JDC",
  "explanation": "Commercial (DLA)"
},{
  "code": "JDF",
  "explanation": "Defense Fuel Supply Center (DFSC) Distribution Plan/Contact Bulletin and Special Procurement Programs"
},{
  "code": "JDS",
  "explanation": "DLA Supply Schedule"
},{
  "code": "JSB",
  "explanation": "Schedule of Blind-Made Products (Service)"
},{
  "code": "JSC",
  "explanation": "Commercial (Service)"
},{
  "code": "JSP",
  "explanation": "Federal Prison Industries (Service)"
},{
  "code": "JSY",
  "explanation": "Local Purchase U3A, Appendix A, Aircraft spares only"
},{
  "code": "JVC",
  "explanation": "Commercial (VA)"
},{
  "code": "JVS",
  "explanation": "Federal Supply Schedule/Decentralized Schedule (VA)"
}]};

const listDemilCode0167 = {[{
  "code": "A",
  "exceptUSAAppication": "General",
  "forUSAApplication": "Non-MLI",
  "explanation": "Demilitarization not required."
},{
  "code": "B",
  "exceptUSAAppication": "Not used",
  "forUSAApplication": "MLI",
  "explanation": "Demilitarization not required. Trade Security Controls (TSC) required at disposition."
},{
  "code": "C",
  "exceptUSAAppication": "General",
  "forUSAApplication": "MLI",
  "explanation": "Remove and/or demilitarize installed key point(s) eventually as prescribed in national demilitarization manuals (see below), or lethal parts, components and accessories."
},{
  "code": "D",
  "exceptUSAAppication": "General",
  "forUSAApplication": "MLI",
  "explanation": "Demilitarize by mutilation (total destruction of item and components) by melting, cutting, tearing, scratching, crushing, breaking punching, neutralizing, etc. (as an alternate, burial and deep-water dumping may be used when authorized by the DoD or national Demilitarization Program Office)."
},{
  "code": "E",
  "exceptUSAAppication": "General",
  "forUSAApplication": "MLI",
  "explanation": "Demilitarization to be furnished by the DoD or national Demilitarization Program Office."
},{
  "code": "F",
  "exceptUSAAppication": "General",
  "forUSAApplication": "MLI",
  "explanation": "Demilitarization instructions to be furnished by item/technical manager."
},{
  "code": "G",
  "exceptUSAAppication": "General",
  "forUSAApplication": "MLI (AEDA)",
  "explanation": "Demilitarization, and if required, declassification and/or removal of sensitive marking or information, will be accomplished prior to physical transfer to a DLA Disposition Services site or national disposal office. This code will be used for all Atomic Energy Defense Activities (AEDA) items, including those which also require declassification and/or removal of sensitive markings or information."
},{
  "code": "P",
  "exceptUSAAppication": "Not used",
  "forUSAApplication": "MLI (Security Classified Item)",
  "explanation": "Security Classified Item - Declassification, and any other required demilitarization, and removal of any sensitive markings or information, will be accomplished prior to accountability or physical transfer to a DLA Disposition Services site or national disposal office. This code will not be assigned to ammunition, explosive and dangerous (AEDA) articles."
},{
  "code": "Q",
  "exceptUSAAppication": "Not used",
  "forUSAApplication": "Strategic List Item",
  "explanation": "Demilitarization not required. SLI are non-MLI and are identified and licensed by the U.S. Department of Commerce through the Export Administration Regulations (EAR), 15 CFR, and indicated on the Commerce Control List (CCL), Part 799.1. Each CCL entry is preceded by a 5-digit Export Control Classification Number (ECCN) and those ECCNs ending in the letter \"A\" or \"B\" are defined by DoD as SLI. These items are subject to Import Certification and Delivery Verification (IC/DV) control and other Trade Security Controls at disposition."
},{
  "code": "NULL",
  "exceptUSAAppication": "",
  "forUSAApplication": "",
  "explanation": "Demilitarization code is not used by the country logistics."
}]};

const listUsadpe0801 = {[{
  "code": "0",
  "definition": "Represents items with no ADP components. NOTE: Codes 1 through 6 are only to be used when the item is Automatic Data Processing Equipment (ADPE) in its entirety and is limited to the type meeting only one of the definitions for codes 1 through 6. (See code 9)"
},{
  "code": "1",
  "definition": "Analog CPUs, ADP Central Processing Units for Computers Analog. Represents only CPUs that accept as input the electrical equivalent of physical conditions such as flow, temperature, pressure, angular position, or voltage and perform computations by manipulating these electrical equivalents to produce results for further use. NOTE: An analog is a representation of one form of a physical condition existing in another form (e.g., the level of mercury in a tube represents temperature in a thermometer; the angular position of a needle represents speed on a speedometer). Excludes CPUs that have both analog and digital capability. (See code 3)"
},{
  "code": "2",
  "definition": "Digital CPUs, ADP Central Processing Units for Computers. Represents only CPUs that accept information represented by digital impulses. Specifically, a device capable of performing sequences of arithmetic and logic operations (a program) not only on data but also on the program which is contained in its internal memory (storage) without intervention of an operator. NOTE: Digital refers to the representation of discrete numbers, symbols, and alphabetic characters by a predetermined, coded combination of electrical impulses. Excludes CPUs that have both analog and digital capability. (See code 3)"
},{
  "code": "3",
  "definition": "Hybrid CPUs, ADP Central Processing Units for Computers. Represents only CPUs that have a combination of analog and digital capability as defined in codes 1 and 2 and which have conversion capability required for intercommunication."
},{
  "code": "4",
  "definition": "ADP Input/Output and Storage Devices Used to Control and Transfer Information to and from a CPU. The input device is used for transferring data and instructions into a CPU. The output device is used to transfer results of processing by the CPU onto printed forms, punched cards, and/or magnetic media. Input/output devices combine the above functions in the same device. This class also includes data transmission terminals, batch terminals, and display terminals which are specially designed or modified to be used in conjunction with digital, analog, or hybrid CPUs. It includes modems when they are integral to the terminal. It also includes storage devices in which data can be inserted, retained, and retrieved for later use."
},{
  "code": "5",
  "definition": "ADP Accessorial Equipment. Represents accessorial equipment which is considered to be a component, device, or unit that is related directly to and essential in the operation of ADPE. Included in this class are complete units and components of related general purpose accessorial equipment which are used as part of a system such as weapon system, control system, missile system, communication system, or navigational system. It also encompasses various units or devices and associated control units that are used in combination or conjunction with the ADPE configuration but are not part of the configuration itself."
},{
  "code": "6",
  "definition": "Punched Card Equipment. Represents collating machines, key punch machines; tabulating machines; verifier; reproducer; summary punch, sorter; interpreter. NOTE: Card-actuated machines when cable-connected to a central processing unit are excluded."
},{
  "code": "7",
  "definition": "ADP Supplies and Support Equipment. Represents consumable supplies such as paper, tabulating machine, continuous flat fold; paper, tabulating machine, sheet; seal bands, tape, ADP; empty reels and hubs, tape, ADP; canisters, tape, ADP; carrying cases, tape, ADP. Also included are support equipments such as magnetic tape testing, certifying and cleaning equipment; disk pack testing, certifying and cleaning equipment; tape equipment, winders, splicers, and card reconditioners."
},{
  "code": "8",
  "definition": "ADP Components. Represents ADP component assemblies that are parts of analog, digital, or hybrid data processing devices."
},{
  "code": "9",
  "definition": "To be assigned to an item containing embedded ADPE that meets one or more of the definitions for codes 1 through 6."
}]};

const listPmic0802 = {[{
  "code": "A",
  "definition": "Item does not contain Precious Metal."
},{
  "code": "C",
  "definition": "Item contains combination of two or more precious metals (silver, gold, platinum)."
},{
  "code": "G",
  "definition": "Item contains gold."
},{
  "code": "P",
  "definition": "Item contains platinum family metals."
},{
  "code": "R",
  "definition": "Item  contains rhenium."
},{
  "code": "S",
  "definition": "Item contains silver."
},{
  "code": "U",
  "definition": "Precious Metal Content is unknown."
},{
  "code": "V",
  "definition": "Precious Metal type varies between manufacturers."
}]};

const listTypeOECode4238 = {[{
  "code": "A",
  "explanation": "US/Canada manufacturers",
  "responsibleOrganization": "US NCB (DLA Logistics Information Service-SBB)"
},{
  "code": "C",
  "explanation": "Civilian Standards and Standards Organisations, including non-military government standards and standards organisations (example: ISO, DIN, BS, ANSI, etc.)",
  "responsibleOrganization": "By country"
},{
  "code": "D",
  "explanation": "Non-US manufacturers which allocate source control reference",
  "responsibleOrganization": "France only"
},{
  "code": "E",
  "explanation": "Non-US manufacturers",
  "responsibleOrganization": "By country"
},{
  "code": "F",
  "explanation": "Non-manufacturers - Entities of the following types which do not manufacture:  Vendors/distributors -Sales offices  -Retail establishments  - Wholesale or jobbing establishments",
  "responsibleOrganization": "By country"
},{
  "code": "G",
  "explanation": "Service providers - Organisational entities that provide intangible services rather than products, such as the following:  -Service organisations - Professional organisations, including engineering, construction and mining firms - Banks and universities - Providers of services, including consultation, training, research studies. These NCAGEs may be assigned to individuals.",
  "responsibleOrganization": "By country"
},{
  "code": "H",
  "explanation": "Government departments or units, including military organisations",
  "responsibleOrganization": "By country"
},{
  "code": "I",
  "explanation": "AC/135 allocated special codes (example: IREF0)",
  "responsibleOrganization": "By country"
},{
  "code": "M",
  "explanation": "Military Standards and Standards Organisations (example: STANAGS, MILSPECs, DEFSTANs, etc).",
  "responsibleOrganization": "By country"
}]};

const listReasonForRequest9975 = {[{
  "code": "500",
  "definition": "NCAGE Code and Reference Number. These data are mandatory on K27 Output if more than one Reference is submitted under the same DCN.",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "601",
  "definition": "Incomplete request; the request is part of a project exceeding the volume of LSAs identified in CodSP-71 by the codifying NCB, and the mandatory exchange of information was never received by the codifying NCB (See sub-paragraph 134.1.1 for instructions on completing NATO Form AC/135-No 1) or, minimum data is not provided (see sub-paragraph 434.10.1, Instructions for Completion of NATO Form AC/135-No 7, Note 2)",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "Yes",
  "definition": "No",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "602",
  "definition": "Invalid NCAGE Code or company no longer in operation. No information can be gathered",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "603",
  "definition": "The item of supply you have requested is part of an assembly and cannot be codified on its own. The Reference of the assembly follows. Review and resubmit your request if required",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "604",
  "definition": "Reference Number not known to manufacturer or is not provided for in the standard quoted as a reference number in the originating LSA",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "605",
  "definition": "Submitted Reference does not enable item to be identified",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "606",
  "definition": "The manufacturer will not verify the Reference or would not respond to inquiries",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "607",
  "definition": "The manufacturer refuses to confirm Reference(s) and/or Item Name(s) free of charge",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "608",
  "definition": "Item no longer manufactured ; identification documents can no longer be obtained from the manufacturer",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "609",
  "definition": "Item replaced by following item ; please check whether the new part will meet your requirements and, if so, submit a new request",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "610",
  "definition": "This country is not the country of origin of the item; if known, available information (NCAGE, Reference, country, NSN, etc.) follows",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "611",
  "definition": "This LSA is a duplicate of the LSA submitted under the following Document Control Number or the request has been cancelled by the originating country (fax, E-mail, telephone)",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "612",
  "definition": "Item already codified under the following NSN ; you are already registered as a user",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "613",
  "definition": "Any other reject reason",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "701",
  "definition": "Revised Reference Number ; your request will be processed under the following new Reference Number",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "702",
  "definition": "Revised NCAGE Code ; your request will be processed under the following new NCAGE Code",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "703",
  "definition": "Item already codified under the following NSN ; your country will be registered as a user",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "704",
  "definition": "Any other change(s); your request is processed with the value identified by the code of the data (DRN)",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "801",
  "definition": "Relevant correspondence or documents are being mailed with DIC K27.",
  "isExplanationRequired": false,
  "isOptional": false
},{
  "code": "803",
  "definition": "Miscellaneous comments",
  "isExplanationRequired": false,
  "isOptional": false
}]};

const listRfc0950 = {[{
  "code": "050",
  "definition": "Total quantity of DCNs",
  "format": "4N"
},{
  "code": "060",
  "definition": "NATO Form AC/135-No 1 Control Number (9 characters without the revision No) prior transmitted",
  "format": "9X"
},{
  "code": "070",
  "definition": "NATO Codification Project Code (DRN 1057)",
  "format": "3X"
},{
  "code": "081",
  "definition": "Name of equipment",
  "format": "255X"
},{
  "code": "082",
  "definition": "Type or model",
  "format": "255X"
},{
  "code": "083",
  "definition": "Assembly",
  "format": "255X"
},{
  "code": "084",
  "definition": "NCAGE Code of Manufacturer",
  "format": "5X"
},{
  "code": "085",
  "definition": "User service",
  "format": "75X"
},{
  "code": "086",
  "definition": "Other information",
  "format": "255X"
},{
  "code": "087",
  "definition": "LSA requests grouped by: the same type of equipment or assembly;  the  same constructor or contractor;  the same manufacturer;  the same family of items or class ; the same user",
  "format": "255X"
},{
  "code": "091",
  "definition": "NCAGE Code of Main contractor",
  "format": "5X"
},{
  "code": "092",
  "definition": "NCAGE Code, if available, or name and address of Sub-contractor",
  "format": "255X"
},{
  "code": "093",
  "definition": "Contract number and date",
  "format": "75X"
},{
  "code": "094",
  "definition": "Codification contract clause (Y or N)",
  "format": "1A"
},{
  "code": "095",
  "definition": "Documentation (Main Contractor = M ; Sub-Contractor = S ; Other Sources = O)",
  "format": "1A"
},{
  "code": "096",
  "definition": "Attachments (Y or N)",
  "format": "1A"
},{
  "code": "097",
  "definition": "Order Number",
  "format": "75X"
},{
  "code": "100",
  "definition": "Remarks",
  "format": "255X"
},{
  "code": "110",
  "definition": "Origin of Reference Numbers",
  "format": "75X"
},{
  "code": "120",
  "definition": "Signature",
  "format": "75X"
}]};

const listReasonCode6998 = {[{
  "code": "A",
  "explanation": "Change in item of supply concept"
},{
  "code": "B",
  "explanation": "Error in NSN reference"
},{
  "code": "C",
  "explanation": "Substitute item"
},{
  "code": "D",
  "explanation": "Non-standard item"
},{
  "code": "E",
  "explanation": "Item is no longer available from manufacturer"
},{
  "code": "F",
  "explanation": "Other reason"
},{
  "code": "G",
  "explanation": "Duplicate NSN"
},{
  "code": "Q",
  "explanation": "Concur:(earlier than 60 days)"
},{
  "code": "X",
  "explanation": "Concur:Item needs to be maintained in the TIR until exhaustion of stock."
},{
  "code": "Y",
  "explanation": "Concur:Item needs to be maintained in the TIR until the end item is withdrawn from circulation."
},{
  "code": "Z",
  "explanation": "Nonconcur:Reason for reject."
}]};

const listStandardMrc3445 = {[{
  "code": "Purchases",
  "explanation": "ZZZP"
},{
  "code": "Descriptive characteristics",
  "explanation": "CRTL"
},{
  "code": "Descriptive characteristics",
  "explanation": "ELCD"
},{
  "code": "Descriptive characteristics",
  "explanation": "FEAT"
},{
  "code": "Descriptive characteristics",
  "explanation": "PRPY"
},{
  "code": "Descriptive characteristics",
  "explanation": "TEXT"
},{
  "code": "Descriptive characteristics",
  "explanation": "ZZZW"
},{
  "code": "Descriptive characteristics",
  "explanation": "ZZZX"
},{
  "code": "Descriptive characteristics",
  "explanation": "ZZZY"
},{
  "code": "Classification",
  "explanation": "ZZZV"
},{
  "code": "Item Name",
  "explanation": "CLQL"
},{
  "code": "Item Name",
  "explanation": "CXCY"
},{
  "code": "Tests",
  "explanation": "SPCL"
},{
  "code": "Tests",
  "explanation": "TEST"
},{
  "code": "Specification/Standard data",
  "explanation": "ZZZK"
},{
  "code": "Specification/Standard data",
  "explanation": "ZZZT"
},{
  "code": "Specification/Standard data",
  "explanation": "ZZZW"
},{
  "code": "Specification/Standard data",
  "explanation": "ZZZX"
},{
  "code": "Reference number",
  "explanation": "ELRN"
}]};

const listUic3050 = {[{
  "code": "AA",
  "term": "Two hundred and fifty",
  "definition": "Two hundred and fifty (250) of an item."
},{
  "code": "AM",
  "term": "* Ampoule",
  "definition": "A small glass or plastic tube sealed by fusion after filling."
},{
  "code": "AT",
  "term": "Assortment",
  "definition": "A collection of a variety of items that fall into a category or class packaged as a small unit constituting a single item of supply."
},{
  "code": "",
  "term": "",
  "definition": "Use only when the term \"assortment\" is a part of the item name."
},{
  "code": "AX",
  "term": "Twenty",
  "definition": "Twenty (20) of an item."
},{
  "code": "AY",
  "term": "Assembly",
  "definition": "A collection of parts assembled to form a complete unit, constituting a single item of supply, e.g., hose assembly. Use only when the term \"assembly\" is a part of the item name."
},{
  "code": "BA",
  "term": "* Ball",
  "definition": "A spherical-shaped mass of material such as twine or thread."
},{
  "code": "BB",
  "term": "* Bobbin",
  "definition": "A cylinder shaped reel or spool containing thread, yarn, wire."
},{
  "code": "BC",
  "term": "* Block",
  "definition": "A piece of material such as wood, stone or metal usually with one or more plane faces."
},{
  "code": "BD",
  "term": "* Bundle",
  "definition": "A quantity of the same item tied together without compression."
},{
  "code": "BE",
  "term": "* Bale",
  "definition": "A shaped nit of compressible materials bound with cord or metal ties and usually wrapped, e.g., paper and cloth rags."
},{
  "code": "BF",
  "term": "Board Foot",
  "definition": "A unit of measure for lumber equal to the volume of a board 12\" x 12\" x 1\"."
},{
  "code": "BG",
  "term": "* Bag",
  "definition": "A flexible container of various sizes and shapes which is fabricated from such materials as paper, plastic or textiles. Includes \"sack\" and “pouch‿."
},{
  "code": "BK",
  "term": "* Book",
  "definition": "A booklike package, such as labels or tickets, fastened together along one edge, usually between protective covers."
},{
  "code": "BL",
  "term": "* Barrel",
  "definition": "A cylindrical container, metal or wood, with sides that bulge outward and flat ends or heads of equal diameter. Includes \"Keg\"."
},{
  "code": "BO",
  "term": "* Bolt",
  "definition": "A flat fold of fabric having a stiff paper board core."
},{
  "code": "BR",
  "term": "* Bar",
  "definition": "A solid piece or block of various materials, with its length greater than its other dimensions, e.g., solder. Not applicable to items such as soap, beeswax, buffing compound."
},{
  "code": "BT",
  "term": "* Bottle",
  "definition": "A glass, plastic, or earthenware container of various sizes, shapes, and finishes such as jugs but excluding jars, ampoules, vials, and carboys, with a closure for retention of contents."
},{
  "code": "BX",
  "term": "* Box",
  "definition": "A rigid, three dimensional container of various sizes and materials. Includes \"case\", \"carton\", \"tray\", and \"crate\"."
},{
  "code": "CA",
  "term": "* Cartridge",
  "definition": "Usually a tubular receptacle containing loose or pliable material and designed to permit ready insertion into an apparatus for dispensing the material. Usually associated with adhesives and sealing compounds."
},{
  "code": "CB",
  "term": "* Carboy",
  "definition": "A heavy duty, bottle-type container used for transportation and storage of liquids. Usually designed to be encased in a rigid protective outer container for shipment."
},{
  "code": "CC",
  "term": "Cubic Centimetre",
  "definition": "One millionth (1/1,000,000) of a cubic metre in the metric system."
},{
  "code": "CD",
  "term": "Cubic Yard",
  "definition": "A unit of cubic measure."
},{
  "code": "CE",
  "term": "* Cone",
  "definition": "A cone-shaped mass of material wound on itself such as twine or thread, wound on a conical core."
},{
  "code": "CF",
  "term": "Cubic Foot",
  "definition": "A unit of cubic measure."
},{
  "code": "CG",
  "term": "Centigram",
  "definition": "One hundredth (1/100) of a gram in the metric system."
},{
  "code": "CI",
  "term": "Cubic Inch",
  "definition": "A unit of cubic measure."
},{
  "code": "CK",
  "term": "* Cake",
  "definition": "A block of compacted or congealed matter. Applicable to such items as soap, buffing compound."
},{
  "code": "CL",
  "term": "* Coil",
  "definition": "An arrangement of material such as wire, rope, and tubing wound in a circular shape."
},{
  "code": "CM",
  "term": "Centimetre",
  "definition": "One hundredth (1/100) of a metre in the metric system."
},{
  "code": "CN",
  "term": "* Can",
  "definition": "A rigid receptacle made of fibre, metal, plastic, or a combination thereof. Cans may be cylindrical or any number of irregular shapes. Restricted to items which cannot be issued in less than container quantity. Includes \"pail\" and \"canister\". Do not use when the packaged quantity equates to a unit of measure, i.e., pint, quart, gallon, ounce, or pound."
},{
  "code": "CO",
  "term": "* Container",
  "definition": "A general term for use only when an item is permitted to be packaged for issue in optional containers, e.g., bottle or tube for a single NSN."
},{
  "code": "CP",
  "term": "* Capsule",
  "definition": "A metallic or plastic container for liquids."
},{
  "code": "CS",
  "term": "* Case",
  "definition": "A container designed to hold a specific item(s) in a fixed position by virtue of conforming dimensions and/or attachments."
},{
  "code": "CT",
  "term": "* Carton",
  "definition": "A container, usually of fibreboard or pasteboard, with fixed or collapsible joints and self-locking or tuck-in flaps."
},{
  "code": "CV",
  "term": "Cubic Decimetre",
  "definition": "one thousandth (1/1,000) of a cubic metre in the metric system."
},{
  "code": "CY",
  "term": "* Cylinder",
  "definition": "A rigid, cylindrical, metal container designed as a portable container for storage and transportation of compressed gasses, generally equipped with protected valve closure and pressure relief safety device."
},{
  "code": "CZ",
  "term": "Cubic Metre",
  "definition": "A unit of cubic measure expressed in the metric system of measurement. Limited in application to locally assigned stock numbers used in the local procurement of items such as ready-mix concrete and asphalt in areas where the metric system prevails."
},{
  "code": "DA",
  "term": "Decametre",
  "definition": "Ten (10) metres."
},{
  "code": "DB",
  "term": "Decalitre",
  "definition": "Ten (10) litres."
},{
  "code": "DC",
  "term": "Decagram",
  "definition": "Ten (10) grams."
},{
  "code": "DE",
  "term": "Decimetre",
  "definition": "One tenth (1/10) of a metre in the metric system (= 10 CM = 100 MM = 0.1 MR)."
},{
  "code": "DF",
  "term": "Dozen Feet",
  "definition": "A measure of twelve (12) feet."
},{
  "code": "DG",
  "term": "Decigram",
  "definition": "One tenth (1/10) of a gram in the metric system (= 10 CG = 100 MG = 0.1 GM)."
},{
  "code": "DK",
  "term": "* Card",
  "definition": "A flat piece of thick paper or pasteboard to which various items can be attached or displayed."
},{
  "code": "DL",
  "term": "Decilitre",
  "definition": "One tenth (1/10) of a litre in the metric system (= 10 CL = 100 ML = 0.1 LI)."
},{
  "code": "DM",
  "term": "Dram",
  "definition": "One sixteenth (1/16) of an ounce weight."
},{
  "code": "DP",
  "term": "Dozen Pairs",
  "definition": "Twelve (12) pairs of an Item of Supply."
},{
  "code": "DR",
  "term": "* Drum",
  "definition": "A cylindrical container designed as an exterior pack for storing and shipping bulk materials, e.g., fuels, chemicals, powders, etc. Drums may be made of metal, rubber, polyethylene or plywood, or fibre with wooden, metal, or fibre ends."
},{
  "code": "DY",
  "term": "Dozen Yards",
  "definition": "A measure of  twelve (12) yards."
},{
  "code": "DZ",
  "term": "Dozen",
  "definition": "Twelve (12) of an item of supply."
},{
  "code": "EA",
  "term": "Each",
  "definition": "A numeric quantity of one item of supply. Do not use if a more specific term applies, such as kit, set, assortment, assembly, group, sheet, plate, strip, or length."
},{
  "code": "FF",
  "term": "600 Feet",
  "definition": "A measure of six hundred feet (600) feet."
},{
  "code": "FH",
  "term": "400 Feet",
  "definition": "A measure of four hundred (400) feet."
},{
  "code": "FM",
  "term": "Fathom",
  "definition": "A measure of six feet or a six feet square section (for wood)."
},{
  "code": "FT",
  "term": "Foot",
  "definition": "Unit of linear measurement, sometimes expressed as \"linear foot\"."
},{
  "code": "FV",
  "term": "Five",
  "definition": "Five (5) of an item"
},{
  "code": "FY",
  "term": "Fifty",
  "definition": "Fifty (50) of an item. Code used in DoD 4100.39-M. See also code << LL >>."
},{
  "code": "FZ",
  "term": "Fluid Ounce (Imperial)",
  "definition": "One twentieth (1/20) of a pint (Imperial)."
},{
  "code": "GB",
  "term": "Gallon (Imperial)",
  "definition": "Unit of liquid measurement equal to 8 pints (Imperial) or 4.54 litres."
},{
  "code": "GC",
  "term": "Gill (Imperial)",
  "definition": "A measure of capacity equal to one fourth (1/4) of a pint (Imperial)."
},{
  "code": "GL",
  "term": "Gallon (US)",
  "definition": "Unit of liquid measurement equal to 3.78 litres (US Gallon)."
},{
  "code": "GM",
  "term": "Gram",
  "definition": "A small metric unit of weight equal to one thousandth (1/1,000) of a kilogram in the metric system."
},{
  "code": "GN",
  "term": "Grain",
  "definition": "A small unit of weight (1/480 ounce Troy)."
},{
  "code": "GP",
  "term": "Group",
  "definition": "A collection of related items issued as a single item of supply, e.g., test set group. Use only when the term \"group\" is a part of the item name."
},{
  "code": "GR",
  "term": "Gross",
  "definition": "One hundred forty-four (144) of an item."
},{
  "code": "GY",
  "term": "Gross Yards",
  "definition": "A measure of one hundred and forty four (144) yards."
},{
  "code": "HC",
  "term": "Hundred Cubic Metres",
  "definition": "A metric unit of cubic measure."
},{
  "code": "HD",
  "term": "Hundred",
  "definition": "One hundred (100) of an item."
},{
  "code": "HF",
  "term": "Hundred Feet",
  "definition": "A unit of linear measurement."
},{
  "code": "HG",
  "term": "Hectogram",
  "definition": "One hundred (100) grams weight (3.52 ounces)."
},{
  "code": "HK",
  "term": "* Hank",
  "definition": "A loop of yarn or roping, containing definite yardage, e.g., cotton, 840 yards ; worsted, 560 yards. See \"skein\" for comparison."
},{
  "code": "HL",
  "term": "Hectolitre",
  "definition": "One hundred (100) litres (3.531 cubic feet)."
},{
  "code": "HM",
  "term": "Hectometre",
  "definition": "One hundred (100) metres."
},{
  "code": "HS",
  "term": "Hundred Square Feet",
  "definition": "A unit of measure (area)."
},{
  "code": "HW",
  "term": "Hundredweight",
  "definition": "A weight equal to one hundred and twelve (112) pounds."
},{
  "code": "HY",
  "term": "Hundred Yards",
  "definition": "A unit of linear measurement."
},{
  "code": "IN",
  "term": "Inch",
  "definition": "One twelfth (1/12) of a foot (linear)."
},{
  "code": "IU",
  "term": "* Unit",
  "definition": "A standard or basic quantity into which an item of supply is divided."
},{
  "code": "JR",
  "term": "* Jar",
  "definition": "A rigid container having a wide mouth and often no neck, typically made of earthenware or glass. Excludes \"bottle\"."
},{
  "code": "KE",
  "term": "* Keg",
  "definition": "A small barrel shaped container - see Barrel."
},{
  "code": "KG",
  "term": "Kilogram",
  "definition": "A metric weight of one thousand (1,000) gram (2.205 lbs)."
},{
  "code": "KM",
  "term": "Kilometre",
  "definition": "A measure of one thousand (1,000) metres."
},{
  "code": "OY",
  "term": "* Drained weight",
  "definition": "The weight of food solids that remain after the liquids in which they have been prepared are removed."
},{
  "code": "KP",
  "term": "* Cop",
  "definition": "A conical shaped wind for thread, yarn, cable."
},{
  "code": "KT",
  "term": "Kit",
  "definition": "A collection of related items issued as a single item of supply, such as the tools, instruments, repair parts, instruction sheets and often supplies typically carried in a box or bag. Also includes selected collections of equipment components, tools, and/or materials for the repair, overhaul, or modification of equipment. Use only when the term \"kit\" is a part of the item name."
},{
  "code": "KW",
  "term": "Kilowatts",
  "definition": "One thousand (1,000) watts."
},{
  "code": "LB",
  "term": "Pound",
  "definition": "A unit of avoirdupois weight measure equivalent to 16 ounces."
},{
  "code": "LF",
  "term": "50 Feet",
  "definition": "A measure of fifty (50) feet."
},{
  "code": "LG",
  "term": "* Length",
  "definition": "Term applies to items issued in fixed or specific linear measurement, without deviation. This term no longer applies to random lengths which will be expressed in definitive units of linear measure such as foot or yard. Excludes \"strip\"."
},{
  "code": "LI",
  "term": "Litre",
  "definition": "A unit of liquid measure expressed in the metric system of measurement."
},{
  "code": "LL",
  "term": "Fifty",
  "definition": "Fifty (50) of an item of supply. Code used in ASD-S2000M. See also code << FY >>."
},{
  "code": "LM",
  "term": "Linear Metre",
  "definition": "A term used for measuring performed piping, insulation. Not the same as \"Metre\"."
},{
  "code": "LO",
  "term": "* Lot",
  "definition": "A quantity of an item or material supplied in specific sub-divisions. A collection of associated or miscellaneous articles sold as one unit. NOTE: Non-US use only in accordance with ASD-S2000M. Code “LT‿ (in accordance with ANSI Standard) to be used in USA."
},{
  "code": "LT",
  "term": "Long Ton",
  "definition": "A weight of 2,240 pounds. NOTE: Non-US use only in accordance with ASD-S2000M. Code “LO‿ (in accordance with ANSI Standard) to be used in USA."
},{
  "code": "MC",
  "term": "Thousand Cubic Feet",
  "definition": "A unit of cubic measure expressed in one thousand (1,000) increments."
},{
  "code": "ME",
  "term": "Meal",
  "definition": "The measure of food generally taken by an individual at one time."
},{
  "code": "MF",
  "term": "Thousand Feet",
  "definition": "A unit of linear measure."
},{
  "code": "MG",
  "term": "Milligram",
  "definition": "One thousandth (1/1,000) of a gram (0.0154 of a grain or 0.00003527 of an ounce)."
},{
  "code": "MI",
  "term": "Mile",
  "definition": "A measure of 1,610 metres."
},{
  "code": "ML",
  "term": "Millilitre",
  "definition": "One thousandth (1/1,000) of a litre (0.061 of a cubic inch)."
},{
  "code": "MM",
  "term": "Millimetre",
  "definition": "One thousandth (1/1,000) of a metre (0.0394 of an inch)."
},{
  "code": "MN",
  "term": "Square Millimetre",
  "definition": "A metric unit of square measure (area)."
},{
  "code": "MR",
  "term": "Metre",
  "definition": "A unit of linear measure expressed in the metric system of measurement, equivalent to 39.37 inches. Limited in application to locally assigned stock numbers used in the local procurement of items such as pipe, lumber, tubing and hose in overseas areas where the metric system prevails."
},{
  "code": "MX",
  "term": "Thousand",
  "definition": "One thousand (1,000) of an item."
},{
  "code": "OT",
  "term": "Outfit",
  "definition": "A collection of related items issued as a single item of supply, such as the tools, instruments, materials, equipment, and/or instruction manual(s) for the practice of a trade or profession or for the carrying out of a particular project or function. Use only when the term \"outfit\" is a part of the item name."
},{
  "code": "OZ",
  "term": "Ounce",
  "definition": "A unit of liquid or avoirdupois weight."
},{
  "code": "PB",
  "term": "Pint (Imperial)",
  "definition": "A measure of capacity equal to one eighth (1/8) of a gallon (Imperial)."
},{
  "code": "PC",
  "term": "* Piece",
  "definition": "A portion or quantity of an item, often of definite length."
},{
  "code": "PD",
  "term": "* Pad",
  "definition": "Multiple sheets of paper that are stacked together and fastened at one end by sealing."
},{
  "code": "PG",
  "term": "* Package",
  "definition": "A form of protective wrapping for two or more of the same item of supply. To be used only when a unit of measure or container type term is not applicable. Includes \"envelope\"."
},{
  "code": "PK",
  "term": "* Pack",
  "definition": "A parcel or quantity of the same item supplied wrapped or tied."
},{
  "code": "PM",
  "term": "Plate",
  "definition": "A flat piece of square or rectangular-shaped metal of uniform thickness, usually one fourth (1/4) of an inch or more. Use only when \"plate\" (NSCs 9515 and 9535) is used in an item name to denote shape."
},{
  "code": "PO",
  "term": "Pouch",
  "definition": "(1)"
},{
  "code": "PR",
  "term": "Pair",
  "definition": "Two similar corresponding items, e.g., gloves, shoes, bearings ; or items integrally fabricated of two corresponding parts, e.g., trousers, shears, goggles."
},{
  "code": "PT",
  "term": "Pint (US)",
  "definition": "A unit of liquid or dry measure (US Measure)."
},{
  "code": "PZ",
  "term": "* Packet",
  "definition": "A container used for subsistence items. Use only when \"food packet\" is part of the item name (Group 89)."
},{
  "code": "QB",
  "term": "Quart (Imperial)",
  "definition": "Imperial unit of liquid or dry measure."
},{
  "code": "QC",
  "term": "Square Centimetre",
  "definition": "A metric unit of square measure (area)."
},{
  "code": "QD",
  "term": "Square Decimetre",
  "definition": "A metric unit of square measure (area)."
},{
  "code": "QK",
  "term": "Quarter Kilogram",
  "definition": "A unit of weight in the metric system equal to two hundred and fifty (250) grams."
},{
  "code": "QN",
  "term": "Quintal",
  "definition": "One hundred (100) kilograms."
},{
  "code": "QR",
  "term": "Quire",
  "definition": "A measure of 24 sheets of paper."
},{
  "code": "QT",
  "term": "Quart (US Measure)",
  "definition": "A unit of liquid or dry measure."
},{
  "code": "RA",
  "term": "Ration",
  "definition": "The food allowance of one person for one day. Use only when \"ration\" (NSC 8970) is a part of the item name."
},{
  "code": "RL",
  "term": "* Reel",
  "definition": "A cylindrical core on which a flexible material, such as wire or cable, is wound. Usually has flanged ends."
},{
  "code": "RM",
  "term": "Ream",
  "definition": "A quantity of paper varying from 480 to 516 sheets, depending upon grade."
},{
  "code": "RO",
  "term": "* Roll",
  "definition": "A cylindrical configuration of flexible material which has been rolled on itself such as textiles, tape, abrasive paper, photosensitive paper and film, and may utilize a core with or without flanges."
},{
  "code": "SA",
  "term": "Sachet",
  "definition": "A small sealed packet usually made of paper or plastic, containing a liquid, cream or powder, usually for s single use."
},{
  "code": "SD",
  "term": "* Skid",
  "definition": "A pallet-like platform consisting of a load-bearing area fastened to and resting on runner type supports."
},{
  "code": "SE",
  "term": "Set",
  "definition": "A collection of matched or related items issued as a single item of supply, i.e., tool sets, instrument sets, and matched sets. Use only when the term \"set\" is a part of the item name."
},{
  "code": "SF",
  "term": "Square Foot",
  "definition": "A unit of square measure (area)."
},{
  "code": "SH",
  "term": "Sheet",
  "definition": "A flat piece of rectangular-shaped material of uniform thickness that is very thin in relation to its length and width, such as metal, plastic, paper, and plywood. Use of this term is not limited to any group of items or NSCs. However, it will always be applied when \"sheet\" is used in the item name to denote shape, e.g., aluminium alloy sheet, except items in NSC 7210."
},{
  "code": "SI",
  "term": "Square Inch",
  "definition": "A unit of square measure (area)."
},{
  "code": "SK",
  "term": "Skein",
  "definition": "A loop of yarn 120 yards in length, usually wound on a 54 inch circular core. See \"hank\" for comparison."
},{
  "code": "SL",
  "term": "* Spool",
  "definition": "A cylindrical form with an edge or rim at each end and an axial hole for a pin or spindle on which a flexible material such as thread or wire is wound."
},{
  "code": "SM",
  "term": "Square Metre",
  "definition": "A metric unit of square measure (area)."
},{
  "code": "SO",
  "term": "Shot",
  "definition": "A unit of linear measurement, usually applied to anchor chain ; equivalent to 15 fathoms (90 FT)."
},{
  "code": "SP",
  "term": "* Strip",
  "definition": "A relatively narrow, flat length of material, uniform in width, such as paper, wood, and metal. Use only when the term \"strip\" is a part of the item name."
},{
  "code": "SV",
  "term": "Service",
  "definition": "The purchase of employment, or defining of work to be done."
},{
  "code": "SX",
  "term": "* Stick",
  "definition": "Material in a relatively long and slender, often cylindrical form for ease of application or use, e.g., abrasives."
},{
  "code": "SY",
  "term": "Square Yard",
  "definition": "A unit of square measure (area)."
},{
  "code": "TD",
  "term": "Twenty-four",
  "definition": "Twenty-four (24) of an item"
},{
  "code": "TE",
  "term": "Ten",
  "definition": "Ten (10) of an item. Code used in DoD 4100.39-M. See also code << XX >>."
},{
  "code": "TF",
  "term": "Twenty-five",
  "definition": "Twenty-five (25) of an item"
},{
  "code": "TH",
  "term": "Therm",
  "definition": "A unit of measurement of heat."
},{
  "code": "TI",
  "term": "* Tin",
  "definition": "A box-like metal container with flap or lid cover."
},{
  "code": "TL",
  "term": "Thousand Litre",
  "definition": "One thousand (1,000) Litres."
},{
  "code": "TM",
  "term": "Metric Ton",
  "definition": "One thousand (1,000) kilograms."
},{
  "code": "TN",
  "term": "Ton",
  "definition": "The equivalent of 2,000 Lbs."
},{
  "code": "TO",
  "term": "Troy Ounce",
  "definition": "A unit of troy weight measure, based on 12 ounce pound, generally applied to weights of precious metals."
},{
  "code": "TR",
  "term": "Tray",
  "definition": "Sub level packaging, usually formed to approximate shape of item of supply."
},{
  "code": "TS",
  "term": "Thirty-six",
  "definition": "Thirty-six (36) of an item"
},{
  "code": "TT",
  "term": "* Tablet",
  "definition": "A flat sheet or piece of prepared substance."
},{
  "code": "TU",
  "term": "* Tube",
  "definition": "Normally a squeeze-type container, most commonly manufactured from a flexible type material and used in packaging toothpaste, shaving cream, and pharmaceutical products. Also applicable as form around which items are wound, such as thread. It is not applicable to mailing tube, pneumatic tube, or cylindrical containers of a similar type."
},{
  "code": "TZ",
  "term": "Two Ounces",
  "definition": "A measure equivalent to one eighth of an imperial pound"
},{
  "code": "VC",
  "term": "Five Hundred",
  "definition": "Five hundred (500) of an item."
},{
  "code": "VI",
  "term": "* Vial",
  "definition": "A small glass container, generally less than an inch in diameter. Vials are flat-bottomed and tubular in shape and have a variety of neck finishes."
},{
  "code": "XF",
  "term": "Ten Feet",
  "definition": "A measure of ten (10) feet."
},{
  "code": "XX",
  "term": "Ten",
  "definition": "Ten (10) of an Item of Supply. Code used in ASD-S2000M. See also code << TE >>."
},{
  "code": "YD",
  "term": "Yard",
  "definition": "A unit of linear measure, equivalent to 3 feet and sometimes expressed as \"linear yard\"."
},{
  "code": "ZC",
  "term": "Two hundred",
  "definition": "Two hundred (200) of an item"
},{
  "code": "ZD",
  "term": "Four hundred",
  "definition": "Four hundred (400) of an item"
},{
  "code": "ZE",
  "term": "Two thousand",
  "definition": "Two thousand (2000) of an item"
},{
  "code": "ZF",
  "term": "Two hundred feet",
  "definition": "A measure of two hundred (200) feet."
},{
  "code": "ZV",
  "term": "* Syphon",
  "definition": "An aerated container from which liquid is forced by pressure of gas."
}]};

/** No DRN Assigned */
const listTypeII = {[{
  "code": "1",
  "type": "1",
  "explanation": "Full Descriptive Item Identification"
},{
  "code": "K",
  "type": "1A",
  "explanation": "Full Descriptive - Reference Item Identification"
},{
  "code": "L",
  "type": "1B",
  "explanation": "Full Descriptive - Reference - Descriptive Item Identification"
},{
  "code": "2",
  "type": "2",
  "explanation": "Reference Item Identification"
},{
  "code": "4",
  "type": "4",
  "explanation": "Partial Descriptive Item Identification (Type 1 concept)"
},{
  "code": "M",
  "type": "4A",
  "explanation": "Partial Descriptive Item Identification (Type 1A concept)"
},{
  "code": "N",
  "type": "4B",
  "explanation": "Partial Descriptive Item Identification (Type 1B concept)"
}]};

/** No DRN Assigned */
const listRepCode = {[{
  "code": "A",
  "explanation": "Non reparable item, which requires special handling or condemnation procedures because of specific reasons. Refer to appropriate manual/directives for specific instructions."
},{
  "code": "B",
  "explanation": "Reparable item, which requires special handling or condemnation procedures because of specific reasons. Refer to appropriate manual/directives for specific instructions."
},{
  "code": "C",
  "explanation": "Reparable item. Repair under special conditions in accordance with national directives."
}]};

const listMrrc = 
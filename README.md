# NCSTool
It's a Nato Codification System Tool developed to perform usual task like import and convert Master Record Directory from NADEX Text format to SQL or JSON ones.

It is a Java Core Based software developed for help on managing data from Nato Codification System Model in order to provide risk identification, evaluation and forecasting about how risky is its supply management. It belongs to a suit of other softwares. they are: NATO Codification System Prospector (NCSProspector); NATO Codification System Service (NCSService); NATO Codification System Tools (NCSTools) and NATO Codification System Core (NCSCore) as a set of Java Components developed to support several tasks and the entire NCS java object modeling (POJO), according ACodP-1 - NATO Manual on Codification January 2017 - English version - Issued by the NATO Support and Procurement Agency (NSPA) on behalf of The Group of National Directors on Codification(AC/135).

 It was developed considering four main packages:
 a) model - contains objects for representing NCS real world split into datatable(s); digester(s); segment(s); table(s); transaction(s) and Total Item Record (tir).
 b) resources - contains additional files that can be used for testing or, after changing by administrator, can be used as source of information needed to set the new codification environment. Classes under digester, tool and model packages use these files.
 c) rules - contains rules from North Atlantic Treaty Organization Group of National Directors on Codification Allied Committee 135 (AC/135) - ACodP-1.
 d) tool - must have tools made by developers to support repeatable actions.
e) prospect - contains classes for persisting, processing and reporting forecasts from analysis.

Run $java -jar NCSTools.jar -h in shell console for more information.

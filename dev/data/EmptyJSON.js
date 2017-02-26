const EmptyJSON = {
   "title" :   "Titel Fallpauschale",
   "valid_from" :   "2015-01-01",
   "valid_to" :   "2015-12-31",
   "groups" :   [
      {
         "key" :   "grp_1_Gruppe_Level_1",
         "title" :   "Gruppe Level 1",
         "type" :   "group",
         "groups" :   [
            {
               "key" :   "grp_1.1_Gruppe_Level_2",
               "title" :   "Gruppe Level 2",
               "type" :   "group"
            }
         ]
      },
   ],
   "fields" :   [
      {
         "key" :   "fld_feld_titel",
         "title" :   "Feld Titel",
         "type" :   "code",
         "group" :   "grp_1_Gruppe_Level_1|grp_1.1_Gruppe_Level_2",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "",
            "js" :   ""
         }
      }
   ]
};

export default EmptyJSON;
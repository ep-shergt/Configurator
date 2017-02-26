{
   "title" :   "Karpaltunnel Befunde",
   "valid_from" :   "2015-01-01",
   "valid_to" :   "2015-12-31",
   "groups" :   [
      {
         "key" :   "grp_Befundbogen_1",
         "title" :   "Befundbogen 1",
         "type" :   "group",
         "groups" :   [
            {
               "key" :   "grp_Vorerkrankungen",
               "title" :   "Vorerkrankungen",
               "type" :   "group",
               "groups" :   []
            },
            {
               "key" :   "grp_Klinische_Untersuchung_Kategorie_1",
               "title" :   "Klinische Untersuchung (Indikationskriterien Kategorie 1)",
               "type" :   "group",
               "groups" :   []
            },
            {
               "key" :   "grp_Klinische_Untersuchung_Handfunktion",
               "title" :   "Klinische Untersuchung (Handfunktion)",
               "type" :   "group",
               "groups" :   []
            },
            {
               "key" :   "grp_Klinische_Untersuchung_Kategorie_2",
               "title" :   "Klinische Untersuchung (Indikationskriterien Kategorie 2)",
               "type" :   "group",
               "groups" :   []
            }
         ]
      },
      {
         "key" :   "grp_Befundbogen_2",
         "title" :   "Befundbogen 2",
         "type" :   "group",
         "groups" :   []
      },
      {
         "key" :   "grp_Befundbogen_3",
         "title" :   "Befundbogen 3",
         "type" :   "group",
         "groups" :   []
      }
   ],
   "fields" :   [
      {
         "key" :   "fld_Code_Vorerkrankungen",
         "title" :   "Code Vorerkrankungen",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Vorschaden/ Vorerkrankungen",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Allg_Erkrankungen",
         "title" :   "Allg. Erkrankungen",
         "type" :   "select",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   8,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "multiple" :   true,
            "options" :   [
               {
                  "title" :   "Diabetes mellitus",
                  "value" :   "Diabetes mellitus",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "Hypothyreose",
                  "value" :   "Hypothyreose",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "L\u00E4ngerfristige Kortisonbehandlung",
                  "value" :   "L\u00E4ngerfristige Kortisonbehandlung",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "Postmenop. \u00D6strogentherapie",
                  "value" :   "Postmenop. \u00D6strogentherapie",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "Allgemeine Osteoarthritis",
                  "value" :   "Allgemeine Osteoarthritis",
                  "type" :   "option",
                  "default" :   false
               }
            ],
            "container" :   {
               "source" :   "",
               "sort" :   "ID",
               "desc" :   false,
               "value" :   "ID",
               "title" :   "New_Container_0_5_2_100_200_5",
               "default" :   [],
               "placeholder" :   "",
               "filter" :   []
            }
         }
      },
      {
         "key" :   "fld_Code_Tendovaginitis_stenosans",
         "title" :   "Code_Tendovaginitis_stenosans",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Tendovaginitis stenosans",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Tendovaginitis_stenosans_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "D1",
                  "value" :   "D1",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "D2",
                  "value" :   "D2",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "D3",
                  "value" :   "D3",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "D4",
                  "value" :   "D4",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "D5",
                  "value" :   "D5",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Tendovaginitis_stenosans_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "D1",
                  "value" :   "D1",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "D2",
                  "value" :   "D2",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "D3",
                  "value" :   "D3",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "D4",
                  "value" :   "D4",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "D5",
                  "value" :   "D5",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Code_Rhizarthrose",
         "title" :   "Code_Rhizarthrose",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Rhizarthrose",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Rhizarthrose_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "-",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Rhizarthrose_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "-",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Code_Arthrose_kleine_Langfingergelenke",
         "title" :   "Code_Arthrose kleine Langfingergelenke",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Arthrose kleine Langfingergelenke",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Arthrose_kleine_Langfingergelenke_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "-",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Arthrose_kleine_Langfingergelenke_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "-",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Code_Z_n_distaler_Vorderarmfraktur",
         "title" :   "Code_Z_n_distaler_Vorderarmfraktur",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Z.n. distaler Vorderarmfraktur",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Z_n_distaler_Vorderarmfraktur_rechts",
         "title" :   "rechts",
         "type" :   "check",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Z_n_distaler_Vorderarmfraktur_links",
         "title" :   "links",
         "type" :   "check",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "x",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Code_Z_n__Handwurzel_Mittelhandfraktur",
         "title" :   "Code_Z.n. Handwurzel-/ Mittelhandfraktur",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Z.n. Handwurzel-/ Mittelhandfraktur",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Z_n__Handwurzel_Mittelhandfraktur_rechts",
         "title" :   "rechts",
         "type" :   "check",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "x",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Z_n__Handwurzel_Mittelhandfraktur_links",
         "title" :   "links",
         "type" :   "check",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "x",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Code_Cervicale-Degenerationen_C6_C7",
         "title" :   "Code_Cervicale  Degenerationen C6/C7",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Cervicale Degenerationen C6/C7",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Cervicale-Degenerationen_C6_C7_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Cervicale-Degenerationen_C6_C7_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Befundbogen_1_Vorerkrankungen_sonstige",
         "title" :   "Sonstige",
         "type" :   "textarea",
         "group" :   "grp_Befundbogen_1|grp_Vorerkrankungen",
         "cols" :   12,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "class" :   ""
         }
      },
      {
         "key" :   "fld_Schmerzhafte_Par\u00E4sthesie",
         "title" :   "Code Schmerzhafte Par\u00E4sthesie",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Schmerzhafte Par\u00E4sthesie",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Schmerzhafte_Par\u00E4sthesie_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Schmerzhafte_Par\u00E4sthesie_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_St\u00F6rung_Stero\u00E4sthesie",
         "title" :   "Code St\u00F6rung Stero\u00E4sthesie",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "St\u00F6rung Stero\u00E4sthesie",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_St\u00F6rung_Stero\u00E4sthesie_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_St\u00F6rung_Stero\u00E4sthesie_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_N\u00E4chtlicher_Handschmerz",
         "title" :   "Code N\u00E4chtlicher Handschmerz",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "N\u00E4chtlicher Handschmerz",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_N\u00E4chtlicher_Handschmerz_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_N\u00E4chtlicher_Handschmerz_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Schw\u00E4che_Daumenmuskulatur",
         "title" :   "Code Schw\u00E4che Daumenmuskulatur",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Schw\u00E4che Daumenmuskulatur (Abspreizen/ Opposition/ Thenaratrophie)",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Schw\u00E4che_Daumenmuskulatur_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Schw\u00E4che_Daumenmuskulatur_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Keine_Besserung_konservativ",
         "title" :   "Code Keine Besserung konservativ",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Keine Besserung unter konservativer Therapie",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Keine_Besserung_konservativ_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Keine_Besserung_konservativ_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Klinische_Untersuchung",
         "title" :   "Code Klinische Untersuchung",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "<b>Klinische Untersuchung </b>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Typische_Par\u00E4sthesie_Nervus_medianus",
         "title" :   "Code Typische Par\u00E4sthesie im autonomen Versorgungsgebiet des Nervus medianus",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Typische Par\u00E4sthesie im autonomen Versorgungsgebiet des Nervus medianus",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Typische_Par\u00E4sthesie_Nervus_medianus_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Typische_Par\u00E4sthesie_Nervus_medianus_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Stereo\u00E4sthesie_im_Nervus_medianus",
         "title" :   "Code Stereo\u00E4sthesie im Nervus medianus",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Hyp-/ u.-o. Stereo\u00E4sthesie im autonomen Versorgungsgebiet des Nervus medianus",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Stereo\u00E4sthesie_im_Nervus_medianus_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Stereo\u00E4sthesie_im_Nervus_medianus_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Thenaratrophie",
         "title" :   "Code Thenaratrophie",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Thenaratrophie",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Thenaratrophie_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Thenaratrophie_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Phalen_Test",
         "title" :   "Code Phalen-Test",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Phalen-Test",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Phalen_Test_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Phalen_Test_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Tinnel_Hoffmann_Test",
         "title" :   "Code Tinnel-Hoffmann-Test",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Tinnel-Hoffmann-Test",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Tinnel_Hoffmann_Test_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Tinnel_Hoffmann_Test_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_1",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Motorik",
         "title" :   "Code Motorik",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "<b>Motorik</b>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Faustschluss",
         "title" :   "Code Faustschluss",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Faustschluss<br><i>Finger-Hohlhand-Abstand [cm]</i>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Faustschluss_rechts",
         "title" :   "rechts",
         "type" :   "text",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   1,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "class" :   ""
         }
      },
      {
         "key" :   "fld_Faustschluss_Space_3",
         "title" :   "Code Faustschluss Space 3",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   3,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Faustschluss_links",
         "title" :   "links",
         "type" :   "text",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   1,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "class" :   ""
         }
      },
      {
         "key" :   "fld_Daumenopposition",
         "title" :   "Code Daumenopposition",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Daumenopposition<br><i>Daumen-Kleinfinger-Probe (Abstand in cm) </i>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Daumenopposition_rechts",
         "title" :   "rechts",
         "type" :   "text",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   1,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "class" :   ""
         }
      },
      {
         "key" :   "fld_Daumenopposition_Space_3",
         "title" :   "Code Daumenopposition Space 3",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   3,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Daumenopposition_links",
         "title" :   "links",
         "type" :   "text",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   1,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "class" :   ""
         }
      },
      {
         "key" :   "fld_Abspreizung_Daumen",
         "title" :   "Code Abspreizung Daumen in der Handebene",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Abspreizung Daumen in der Handebene<br><i>Neutral-0-Methode</i>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Abspreizung_Daumen_rechts_Wert_1",
         "title" :   "rechts Wert 1",
         "type" :   "text",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   1,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "class" :   ""
         }
      },
      {
         "key" :   "fld_Abspreizung_Daumen_rechts_Wert_2",
         "title" :   "Wert 2",
         "type" :   "text",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   1,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "class" :   ""
         }
      },
      {
         "key" :   "fld_Abspreizung_Daumen_rechts_Wert_3",
         "title" :   "Wert 3",
         "type" :   "text",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   1,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "class" :   ""
         }
      },
      {
         "key" :   "fld_Abspreizung_Daumen_Space_1",
         "title" :   "Code Abspreizung Daumen Space 1",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   1,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Abspreizung_Daumen_links_Wert_1",
         "title" :   "links Wert 1",
         "type" :   "text",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   1,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "class" :   ""
         }
      },
      {
         "key" :   "fld_Abspreizung_Daumen_links_Wert_2",
         "title" :   "Wert 2",
         "type" :   "text",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   1,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "class" :   ""
         }
      },
      {
         "key" :   "fld_Abspreizung_Daumen_links_Wert_3",
         "title" :   "Wert 3",
         "type" :   "text",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   1,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "class" :   ""
         }
      },
      {
         "key" :   "fld_Spitzgriff_intakt",
         "title" :   "Code Spitzgriff intakt",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Spitzgriff intakt",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Spitzgriff_intakt_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Spitzgriff_intakt_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Kraftentfaltung",
         "title" :   "Code Kraftentfaltung",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "<b>Kraftentfaltung</b>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Abduktion_des_Daumens",
         "title" :   "Code Abduktion des Daumens",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Abduktion des Daumens<br><i>Janda 1 - 5</i>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Abduktion_des_Daumens_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "J 1",
                  "value" :   "Janda 1",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 2",
                  "value" :   "Janda 2",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 3",
                  "value" :   "Janda 3",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 4",
                  "value" :   "Janda 4",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 5",
                  "value" :   "Janda 5",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Abduktion_des_Daumens_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "J 1",
                  "value" :   "Janda 1",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 2",
                  "value" :   "Janda 2",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 3",
                  "value" :   "Janda 3",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 4",
                  "value" :   "Janda 4",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 5",
                  "value" :   "Janda 5",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Opposition_des_Daumens",
         "title" :   "Code Opposition des Daumens",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Opposition des Daumens<br><i>Janda 1 - 5</i>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Opposition_des_Daumens_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "J 1",
                  "value" :   "Janda 1",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 2",
                  "value" :   "Janda 2",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 3",
                  "value" :   "Janda 3",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 4",
                  "value" :   "Janda 4",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 5",
                  "value" :   "Janda 5",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Opposition_des_Daumens_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "J 1",
                  "value" :   "Janda 1",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 2",
                  "value" :   "Janda 2",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 3",
                  "value" :   "Janda 3",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 4",
                  "value" :   "Janda 4",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 5",
                  "value" :   "Janda 5",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Grob_Kraftgriff",
         "title" :   "Code Grob-/ Kraftgriff",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Grob-/ Kraftgriff<br><i>Janda 1 - 5</i>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Grob_Kraftgriff_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "J 1",
                  "value" :   "Janda 1",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 2",
                  "value" :   "Janda 2",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 3",
                  "value" :   "Janda 3",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 4",
                  "value" :   "Janda 4",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 5",
                  "value" :   "Janda 5",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Grob_Kraftgriff_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "J 1",
                  "value" :   "Janda 1",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 2",
                  "value" :   "Janda 2",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 3",
                  "value" :   "Janda 3",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 4",
                  "value" :   "Janda 4",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 5",
                  "value" :   "Janda 5",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Spitzgriff",
         "title" :   "Code Spitzgriff",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Spitzgriff<br><i>Janda 1 - 5</i>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Spitzgriff_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "J 1",
                  "value" :   "Janda 1",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 2",
                  "value" :   "Janda 2",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 3",
                  "value" :   "Janda 3",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 4",
                  "value" :   "Janda 4",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 5",
                  "value" :   "Janda 5",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Spitzgriff_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Handfunktion",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "J 1",
                  "value" :   "Janda 1",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 2",
                  "value" :   "Janda 2",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 3",
                  "value" :   "Janda 3",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 4",
                  "value" :   "Janda 4",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "J 5",
                  "value" :   "Janda 5",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Klinische_Untersuchung_Kategorie_2_Info",
         "title" :   "Code Klinische_Untersuchung_Kategorie_2_Info",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   12,
         "clearBefore" :   false,
         "clearAfter" :   true,
         "parameters" :   {
            "css" :   "",
            "html" :   "<font color='#ff0000'><b>Indikation zur KTS-Operation  ist gegeben,  wenn  1 von 2 Zeichen der Kategorie 2 positiv ist.</b><br><i><ul>    <li>Elektrophysiologische Diagnostik: positiv        <ul>            <li>vorrangig: Motorische / Sensible Neurographie</li>        </ul>    </li>    <li>Bildgebung:        <ul>            <li>Neurosonographie: positiv</li>        </ul>    </li></ul></i></font>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Elektrophysiologie",
         "title" :   "Code Elektrophysiologie",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "<b>Elektrophysiologie</b>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Motorische_Neurographie",
         "title" :   "Code Motorische Neurographie",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Motorische Neurographie",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Motorische_Neurographie_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Motorische_Neurographie_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Sensible_Neurographie",
         "title" :   "Code Sensible Neurographie",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Sensible Neurographie",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Sensible_Neurographie_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Sensible_Neurographie_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Ggfs_Sonstige_Neurographie",
         "title" :   "Code Ggfs. Sonstige Neurographie",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Ggfs. Sonstige",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Ggfs_Sonstige_Neurographie_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Ggfs_Sonstige_Neurographie_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Bildgebung",
         "title" :   "Code Bildgebung",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "<b>Elektrophysiologie</b>",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Neurosonographie_N_medianus",
         "title" :   "Code Neurosonographie_N_medianus",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Neurosonographie N. medianus",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Neurosonographie_N_medianus_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Neurosonographie_N_medianus_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Bildgebung_Sonstige",
         "title" :   "Code Bildgebung_Sonstige",
         "type" :   "code",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   true,
         "clearAfter" :   false,
         "parameters" :   {
            "css" :   "",
            "html" :   "Sonstige",
            "js" :   ""
         }
      },
      {
         "key" :   "fld_Bildgebung_Sonstige_rechts",
         "title" :   "rechts",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      },
      {
         "key" :   "fld_Bildgebung_Sonstige_links",
         "title" :   "links",
         "type" :   "radio",
         "group" :   "grp_Befundbogen_1|grp_Klinische_Untersuchung_Kategorie_2",
         "cols" :   4,
         "clearBefore" :   false,
         "clearAfter" :   false,
         "parameters" :   {
            "inline" :   true,
            "inlineBreak" :   true,
            "options" :   [
               {
                  "title" :   "positiv",
                  "value" :   "+",
                  "type" :   "option",
                  "default" :   false
               },
               {
                  "title" :   "negativ",
                  "value" :   "0",
                  "type" :   "option",
                  "default" :   false
               }
            ]
         }
      }
   ]
}
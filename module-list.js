(function(){
    var modules={
        "panel-main":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child":              {url:"$H/m/panel-child.html"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"bod1-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child",
                                                questionnaire_setup:"online-questionnaire-setup-bod1",
                                                online_questionnaire:"online-questionnaire-app-bod1",                                                
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"bod1-participant"},

        "online-questionnaire-setup-bod1": {url:"$H/m/oq-setup.html",Table:"bod1-participant"},
        "online-questionnaire-app-bod1":   {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"bod1-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"bod1-notes"},

        "concom-medication-data":                  {url:"$H/m/library/concom-medication-data.html",Table:"concom-medication-bod1",form_module:"concom-medication-form",task_name:"Concomitant Medication"},
        "concom-medication-form":                  {url:"$H/m/library/concom-medication-form.html",Table:"concom-medication-bod1",task_name:"Concomitant Medication"},
        "adverse-event-data":                  {url:"$H/m/library/adverse-event-data.html",Table:"adverse-event-bod1",form_module:"adverse-event-form",task_name:"Adverse Event"},
        "adverse-event-form":                  {url:"$H/m/library/adverse-event-form.html",Table:"adverse-event-bod1",task_name:"Adverse Event"},
        "serious-adverse-event-data":                  {url:"$H/m/library/serious-adverse-event-data.html",Table:"serious-adverse-event-bod1",form_module:"serious-adverse-event-form",task_name:"Serious Adverse Event"},
        "serious-adverse-event-form":                  {url:"$H/m/library/serious-adverse-event-form.html",Table:"serious-adverse-event-bod1",task_name:"Serious Adverse Event"},
        "inclusion-exclusion-data":                  {url:"$H/m/library/inclusion-exclusion-data.html",Table:"inclusion-exclusion-bod1",form_module:"inclusion-exclusion-form",task_name:"Screening - Inclusion/Exclusion Criteria"},
        "inclusion-exclusion-form":                  {url:"$H/m/library/inclusion-exclusion-form.html",Table:"inclusion-exclusion-bod1",task_name:"Screening - Inclusion/Exclusion Criteria"},
        "medical-history-data":                  {url:"$H/m/library/medical-history-data.html",Table:"medical-history-bod1",form_module:"medical-history-form",task_name:"Baseline - Medical History"},
        "medical-history-form":                  {url:"$H/m/library/medical-history-form.html",Table:"medical-history-bod1",task_name:"Baseline - Medical History"},
        "c19-yrs-data":                  {url:"$H/m/library/c19-yrs-data.html",Table:"c19-yrs-bod1",form_module:"c19-yrs-form",task_name:"Screening - COVID-19 Yorkshire Rehabilitation Scale (C19-YRS)"},
        "c19-yrs-form":                  {url:"$H/m/library/c19-yrs-form.html",Table:"c19-yrs-bod1",task_name:"Screening - COVID-19 Yorkshire Rehabilitation Scale (C19-YRS)"},

        "visit-bl-data":                  {url:"$H/m/library/date-data.html",Table:"visit-bl-bod1",form_module:"visit-bl-form",task_name:"Baseline - Visit date"},
        "visit-bl-form":                  {url:"$H/m/library/date-form.html",Table:"visit-bl-bod1",task_name:"Baseline - Visit date"},
        "drug-dose-bl-data":                  {url:"$H/m/library/drug-dose-data.html",Table:"drug-dose-bl-bod1",form_module:"drug-dose-bl-form",task_name:"Baseline - Drug dose and details related to their treatment plan"},
        "drug-dose-bl-form":                  {url:"$H/m/library/drug-dose-form.html",Table:"drug-dose-bl-bod1",task_name:"Baseline - Drug dose and details related to their treatment plan"},
        "fss-bl-data":                  {url:"$H/m/library/fss-data.html",Table:"fss-bl-bod1",form_module:"fss-bl-form",task_name:"Baseline - Fatigue Severity Scale (FSS)"},
        "fss-bl-form":                  {url:"$H/m/library/fss-form.html",Table:"fss-bl-bod1",task_name:"Baseline - Fatigue Severity Scale (FSS)"},
        "eq-5d-bl-data":                  {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-bl-bod1",form_module:"eq-5d-bl-form",task_name:"Baseline - EuroQol 5 Dimensions"},
        "eq-5d-bl-form":                  {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-bl-bod1",task_name:"Baseline - EuroQol 5 Dimensions"},
        "bpi-sf-bl-data":                  {url:"$H/m/library/bpi-sf-data.html",Table:"bpi-sf-bl-bod1",form_module:"bpi-sf-bl-form",task_name:"Baseline - Brief Pain Inventory (Short Form)"},
        "bpi-sf-bl-form":                  {url:"$H/m/library/bpi-sf-form.html",Table:"bpi-sf-bl-bod1",task_name:"Baseline - Brief Pain Inventory (Short Form)"},
        "phq-bl-data":                  {url:"$H/m/library/phq-data.html",Table:"phq-bl-bod1",form_module:"phq-bl-form",task_name:"Baseline - Patient Health Questionnaire (PHQ-9)"},
        "phq-bl-form":                  {url:"$H/m/library/phq-form.html",Table:"phq-bl-bod1",task_name:"Baseline - Patient Health Questionnaire (PHQ-9)"},
        "psqi-bl-data":                  {url:"$H/m/library/psqi-data.html",Table:"psqi-bl-bod1",form_module:"psqi-bl-form",task_name:"Baseline - Pittsburgh Sleep Quality Index (PSQI)"},
        "psqi-bl-form":                  {url:"$H/m/library/psqi-form.html",Table:"psqi-bl-bod1",task_name:"Baseline - Pittsburgh Sleep Quality Index (PSQI)"},

        "visit-1-data":                  {url:"$H/m/library/date-data.html",Table:"visit-1-bod1",form_module:"visit-1-form",task_name:"Month 1 - Visit date"},
        "visit-1-form":                  {url:"$H/m/library/date-form.html",Table:"visit-1-bod1",task_name:"Month 1 - Visit date"},
        "drug-dose-1-data":                  {url:"$H/m/library/drug-dose-data.html",Table:"drug-dose-1-bod1",form_module:"drug-dose-1-form",task_name:"Month 1 - Drug dose and details related to their treatment plan"},
        "drug-dose-1-form":                  {url:"$H/m/library/drug-dose-form.html",Table:"drug-dose-1-bod1",task_name:"Month 1 - Drug dose and details related to their treatment plan"},
        "fss-1-data":                  {url:"$H/m/library/fss-data.html",Table:"fss-1-bod1",form_module:"fss-1-form",task_name:"Month 1 - Fatigue Severity Scale (FSS)"},
        "fss-1-form":                  {url:"$H/m/library/fss-form.html",Table:"fss-1-bod1",task_name:"Month 1 - Fatigue Severity Scale (FSS)"},
        "eq-5d-1-data":                  {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-1-bod1",form_module:"eq-5d-1-form",task_name:"Month 1 - EuroQol 5 Dimensions"},
        "eq-5d-1-form":                  {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-1-bod1",task_name:"Month 1 - EuroQol 5 Dimensions"},
        "bpi-sf-1-data":                  {url:"$H/m/library/bpi-sf-data.html",Table:"bpi-sf-1-bod1",form_module:"bpi-sf-1-form",task_name:"Month 1 - Brief Pain Inventory (Short Form)"},
        "bpi-sf-1-form":                  {url:"$H/m/library/bpi-sf-form.html",Table:"bpi-sf-1-bod1",task_name:"Month 1 - Brief Pain Inventory (Short Form)"},
        "phq-1-data":                  {url:"$H/m/library/phq-data.html",Table:"phq-1-bod1",form_module:"phq-1-form",task_name:"Month 1 - Patient Health Questionnaire (PHQ-9)"},
        "phq-1-form":                  {url:"$H/m/library/phq-form.html",Table:"phq-1-bod1",task_name:"Month 1 - Patient Health Questionnaire (PHQ-9)"},
        "psqi-1-data":                  {url:"$H/m/library/psqi-data.html",Table:"psqi-1-bod1",form_module:"psqi-1-form",task_name:"Month 1 - Pittsburgh Sleep Quality Index (PSQI)"},
        "psqi-1-form":                  {url:"$H/m/library/psqi-form.html",Table:"psqi-1-bod1",task_name:"Month 1 - Pittsburgh Sleep Quality Index (PSQI)"},

        "visit-2-data":                  {url:"$H/m/library/date-data.html",Table:"visit-2-bod1",form_module:"visit-2-form",task_name:"Month 2 - Visit date"},
        "visit-2-form":                  {url:"$H/m/library/date-form.html",Table:"visit-2-bod1",task_name:"Month 2 - Visit date"},
        "drug-dose-2-data":                  {url:"$H/m/library/drug-dose-data.html",Table:"drug-dose-2-bod1",form_module:"drug-dose-2-form",task_name:"Month 2 - Drug dose and details related to their treatment plan"},
        "drug-dose-2-form":                  {url:"$H/m/library/drug-dose-form.html",Table:"drug-dose-2-bod1",task_name:"Month 2 - Drug dose and details related to their treatment plan"},
        "fss-2-data":                  {url:"$H/m/library/fss-data.html",Table:"fss-2-bod1",form_module:"fss-2-form",task_name:"Month 2 - Fatigue Severity Scale (FSS)"},
        "fss-2-form":                  {url:"$H/m/library/fss-form.html",Table:"fss-2-bod1",task_name:"Month 2 - Fatigue Severity Scale (FSS)"},
        "eq-5d-2-data":                  {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-2-bod1",form_module:"eq-5d-2-form",task_name:"Month 2 - EuroQol 5 Dimensions"},
        "eq-5d-2-form":                  {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-2-bod1",task_name:"Month 2 - EuroQol 5 Dimensions"},
        "bpi-sf-2-data":                  {url:"$H/m/library/bpi-sf-data.html",Table:"bpi-sf-2-bod1",form_module:"bpi-sf-2-form",task_name:"Month 2 - Brief Pain Inventory (Short Form)"},
        "bpi-sf-2-form":                  {url:"$H/m/library/bpi-sf-form.html",Table:"bpi-sf-2-bod1",task_name:"Month 2 - Brief Pain Inventory (Short Form)"},
        "phq-2-data":                  {url:"$H/m/library/phq-data.html",Table:"phq-2-bod1",form_module:"phq-2-form",task_name:"Month 2 - Patient Health Questionnaire (PHQ-9)"},
        "phq-2-form":                  {url:"$H/m/library/phq-form.html",Table:"phq-2-bod1",task_name:"Month 2 - Patient Health Questionnaire (PHQ-9)"},
        "psqi-2-data":                  {url:"$H/m/library/psqi-data.html",Table:"psqi-2-bod1",form_module:"psqi-2-form",task_name:"Month 2 - Pittsburgh Sleep Quality Index (PSQI)"},
        "psqi-2-form":                  {url:"$H/m/library/psqi-form.html",Table:"psqi-2-bod1",task_name:"Month 2 - Pittsburgh Sleep Quality Index (PSQI)"},

        "visit-3-data":                  {url:"$H/m/library/date-data.html",Table:"visit-3-bod1",form_module:"visit-3-form",task_name:"Month 3 - Visit date"},
        "visit-3-form":                  {url:"$H/m/library/date-form.html",Table:"visit-3-bod1",task_name:"Month 3 - Visit date"},
        "drug-dose-3-data":                  {url:"$H/m/library/drug-dose-data.html",Table:"drug-dose-3-bod1",form_module:"drug-dose-3-form",task_name:"Month 3 - Drug dose and details related to their treatment plan"},
        "drug-dose-3-form":                  {url:"$H/m/library/drug-dose-form.html",Table:"drug-dose-3-bod1",task_name:"Month 3 - Drug dose and details related to their treatment plan"},
        "fss-3-data":                  {url:"$H/m/library/fss-data.html",Table:"fss-3-bod1",form_module:"fss-3-form",task_name:"Month 3 - Fatigue Severity Scale (FSS)"},
        "fss-3-form":                  {url:"$H/m/library/fss-form.html",Table:"fss-3-bod1",task_name:"Month 3 - Fatigue Severity Scale (FSS)"},
        "eq-5d-3-data":                  {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-3-bod1",form_module:"eq-5d-3-form",task_name:"Month 3 - EuroQol 5 Dimensions"},
        "eq-5d-3-form":                  {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-3-bod1",task_name:"Month 3 - EuroQol 5 Dimensions"},
        "bpi-sf-3-data":                  {url:"$H/m/library/bpi-sf-data.html",Table:"bpi-sf-3-bod1",form_module:"bpi-sf-3-form",task_name:"Month 3 - Brief Pain Inventory (Short Form)"},
        "bpi-sf-3-form":                  {url:"$H/m/library/bpi-sf-form.html",Table:"bpi-sf-3-bod1",task_name:"Month 3 - Brief Pain Inventory (Short Form)"},
        "phq-3-data":                  {url:"$H/m/library/phq-data.html",Table:"phq-3-bod1",form_module:"phq-3-form",task_name:"Month 3 - Patient Health Questionnaire (PHQ-9)"},
        "phq-3-form":                  {url:"$H/m/library/phq-form.html",Table:"phq-3-bod1",task_name:"Month 3 - Patient Health Questionnaire (PHQ-9)"},
        "psqi-3-data":                  {url:"$H/m/library/psqi-data.html",Table:"psqi-3-bod1",form_module:"psqi-3-form",task_name:"Month 3 - Pittsburgh Sleep Quality Index (PSQI)"},
        "psqi-3-form":                  {url:"$H/m/library/psqi-form.html",Table:"psqi-3-bod1",task_name:"Month 3 - Pittsburgh Sleep Quality Index (PSQI)"},

        "visit-4-data":                  {url:"$H/m/library/date-data.html",Table:"visit-4-bod1",form_module:"visit-4-form",task_name:"Month 4 - Visit date"},
        "visit-4-form":                  {url:"$H/m/library/date-form.html",Table:"visit-4-bod1",task_name:"Month 4 - Visit date"},
        "drug-dose-4-data":                  {url:"$H/m/library/drug-dose-data.html",Table:"drug-dose-4-bod1",form_module:"drug-dose-4-form",task_name:"Month 4 - Drug dose and details related to their treatment plan"},
        "drug-dose-4-form":                  {url:"$H/m/library/drug-dose-form.html",Table:"drug-dose-4-bod1",task_name:"Month 4 - Drug dose and details related to their treatment plan"},
        "fss-4-data":                  {url:"$H/m/library/fss-data.html",Table:"fss-4-bod1",form_module:"fss-4-form",task_name:"Month 4 - Fatigue Severity Scale (FSS)"},
        "fss-4-form":                  {url:"$H/m/library/fss-form.html",Table:"fss-4-bod1",task_name:"Month 4 - Fatigue Severity Scale (FSS)"},
        "eq-5d-4-data":                  {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-4-bod1",form_module:"eq-5d-4-form",task_name:"Month 4 - EuroQol 5 Dimensions"},
        "eq-5d-4-form":                  {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-4-bod1",task_name:"Month 4 - EuroQol 5 Dimensions"},
        "bpi-sf-4-data":                  {url:"$H/m/library/bpi-sf-data.html",Table:"bpi-sf-4-bod1",form_module:"bpi-sf-4-form",task_name:"Month 4 - Brief Pain Inventory (Short Form)"},
        "bpi-sf-4-form":                  {url:"$H/m/library/bpi-sf-form.html",Table:"bpi-sf-4-bod1",task_name:"Month 4 - Brief Pain Inventory (Short Form)"},
        "phq-4-data":                  {url:"$H/m/library/phq-data.html",Table:"phq-4-bod1",form_module:"phq-4-form",task_name:"Month 4 - Patient Health Questionnaire (PHQ-9)"},
        "phq-4-form":                  {url:"$H/m/library/phq-form.html",Table:"phq-4-bod1",task_name:"Month 4 - Patient Health Questionnaire (PHQ-9)"},
        "psqi-4-data":                  {url:"$H/m/library/psqi-data.html",Table:"psqi-4-bod1",form_module:"psqi-4-form",task_name:"Month 4 - Pittsburgh Sleep Quality Index (PSQI)"},
        "psqi-4-form":                  {url:"$H/m/library/psqi-form.html",Table:"psqi-4-bod1",task_name:"Month 4 - Pittsburgh Sleep Quality Index (PSQI)"},

        "visit-5-data":                  {url:"$H/m/library/date-data.html",Table:"visit-5-bod1",form_module:"visit-5-form",task_name:"Month 5 - Visit date"},
        "visit-5-form":                  {url:"$H/m/library/date-form.html",Table:"visit-5-bod1",task_name:"Month 5 - Visit date"},
        "drug-dose-5-data":                  {url:"$H/m/library/drug-dose-data.html",Table:"drug-dose-5-bod1",form_module:"drug-dose-5-form",task_name:"Month 5 - Drug dose and details related to their treatment plan"},
        "drug-dose-5-form":                  {url:"$H/m/library/drug-dose-form.html",Table:"drug-dose-5-bod1",task_name:"Month 5 - Drug dose and details related to their treatment plan"},
        "fss-5-data":                  {url:"$H/m/library/fss-data.html",Table:"fss-5-bod1",form_module:"fss-5-form",task_name:"Month 5 - Fatigue Severity Scale (FSS)"},
        "fss-5-form":                  {url:"$H/m/library/fss-form.html",Table:"fss-5-bod1",task_name:"Month 5 - Fatigue Severity Scale (FSS)"},
        "eq-5d-5-data":                  {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-5-bod1",form_module:"eq-5d-5-form",task_name:"Month 5 - EuroQol 5 Dimensions"},
        "eq-5d-5-form":                  {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-5-bod1",task_name:"Month 5 - EuroQol 5 Dimensions"},
        "bpi-sf-5-data":                  {url:"$H/m/library/bpi-sf-data.html",Table:"bpi-sf-5-bod1",form_module:"bpi-sf-5-form",task_name:"Month 5 - Brief Pain Inventory (Short Form)"},
        "bpi-sf-5-form":                  {url:"$H/m/library/bpi-sf-form.html",Table:"bpi-sf-5-bod1",task_name:"Month 5 - Brief Pain Inventory (Short Form)"},
        "phq-5-data":                  {url:"$H/m/library/phq-data.html",Table:"phq-5-bod1",form_module:"phq-5-form",task_name:"Month 5 - Patient Health Questionnaire (PHQ-9)"},
        "phq-5-form":                  {url:"$H/m/library/phq-form.html",Table:"phq-5-bod1",task_name:"Month 5 - Patient Health Questionnaire (PHQ-9)"},
        "psqi-5-data":                  {url:"$H/m/library/psqi-data.html",Table:"psqi-5-bod1",form_module:"psqi-5-form",task_name:"Month 5 - Pittsburgh Sleep Quality Index (PSQI)"},
        "psqi-5-form":                  {url:"$H/m/library/psqi-form.html",Table:"psqi-5-bod1",task_name:"Month 5 - Pittsburgh Sleep Quality Index (PSQI)"},

        "visit-6-data":                  {url:"$H/m/library/date-data.html",Table:"visit-6-bod1",form_module:"visit-6-form",task_name:"Month 6 - Visit date"},
        "visit-6-form":                  {url:"$H/m/library/date-form.html",Table:"visit-6-bod1",task_name:"Month 6 - Visit date"},
        "drug-dose-6-data":                  {url:"$H/m/library/drug-dose-data.html",Table:"drug-dose-6-bod1",form_module:"drug-dose-6-form",task_name:"Month 6 - Drug dose and details related to their treatment plan"},
        "drug-dose-6-form":                  {url:"$H/m/library/drug-dose-form.html",Table:"drug-dose-6-bod1",task_name:"Month 6 - Drug dose and details related to their treatment plan"},
        "fss-6-data":                  {url:"$H/m/library/fss-data.html",Table:"fss-6-bod1",form_module:"fss-6-form",task_name:"Month 6 - Fatigue Severity Scale (FSS)"},
        "fss-6-form":                  {url:"$H/m/library/fss-form.html",Table:"fss-6-bod1",task_name:"Month 6 - Fatigue Severity Scale (FSS)"},
        "eq-5d-6-data":                  {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-6-bod1",form_module:"eq-5d-6-form",task_name:"Month 6 - EuroQol 5 Dimensions"},
        "eq-5d-6-form":                  {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-6-bod1",task_name:"Month 6 - EuroQol 5 Dimensions"},
        "bpi-sf-6-data":                  {url:"$H/m/library/bpi-sf-data.html",Table:"bpi-sf-6-bod1",form_module:"bpi-sf-6-form",task_name:"Month 6 - Brief Pain Inventory (Short Form)"},
        "bpi-sf-6-form":                  {url:"$H/m/library/bpi-sf-form.html",Table:"bpi-sf-6-bod1",task_name:"Month 6 - Brief Pain Inventory (Short Form)"},
        "phq-6-data":                  {url:"$H/m/library/phq-data.html",Table:"phq-6-bod1",form_module:"phq-6-form",task_name:"Month 6 - Patient Health Questionnaire (PHQ-9)"},
        "phq-6-form":                  {url:"$H/m/library/phq-form.html",Table:"phq-6-bod1",task_name:"Month 6 - Patient Health Questionnaire (PHQ-9)"},
        "psqi-6-data":                  {url:"$H/m/library/psqi-data.html",Table:"psqi-6-bod1",form_module:"psqi-6-form",task_name:"Month 6 - Pittsburgh Sleep Quality Index (PSQI)"},
        "psqi-6-form":                  {url:"$H/m/library/psqi-form.html",Table:"psqi-6-bod1",task_name:"Month 6 - Pittsburgh Sleep Quality Index (PSQI)"},

        "visit-eos-data":                  {url:"$H/m/library/date-data.html",Table:"visit-eos-bod1",form_module:"visit-eos-form",task_name:"End of Study - Visit date"},
        "visit-eos-form":                  {url:"$H/m/library/date-form.html",Table:"visit-eos-bod1",task_name:"End of Study - Visit date"},
        "drug-dose-eos-data":                  {url:"$H/m/library/drug-dose-data.html",Table:"drug-dose-eos-bod1",form_module:"drug-dose-eos-form",task_name:"End of Study - Drug dose and details related to their treatment plan"},
        "drug-dose-eos-form":                  {url:"$H/m/library/drug-dose-form.html",Table:"drug-dose-eos-bod1",task_name:"End of Study - Drug dose and details related to their treatment plan"},
        "fss-eos-data":                  {url:"$H/m/library/fss-data.html",Table:"fss-eos-bod1",form_module:"fss-eos-form",task_name:"End of Study - Fatigue Severity Scale (FSS)"},
        "fss-eos-form":                  {url:"$H/m/library/fss-form.html",Table:"fss-eos-bod1",task_name:"End of Study - Fatigue Severity Scale (FSS)"},
        "eq-5d-eos-data":                  {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-eos-bod1",form_module:"eq-5d-eos-form",task_name:"End of Study - EuroQol 5 Dimensions"},
        "eq-5d-eos-form":                  {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-eos-bod1",task_name:"End of Study - EuroQol 5 Dimensions"},
        "bpi-sf-eos-data":                  {url:"$H/m/library/bpi-sf-data.html",Table:"bpi-sf-eos-bod1",form_module:"bpi-sf-eos-form",task_name:"End of Study - Brief Pain Inventory (Short Form)"},
        "bpi-sf-eos-form":                  {url:"$H/m/library/bpi-sf-form.html",Table:"bpi-sf-eos-bod1",task_name:"End of Study - Brief Pain Inventory (Short Form)"},
        "phq-eos-data":                  {url:"$H/m/library/phq-data.html",Table:"phq-eos-bod1",form_module:"phq-eos-form",task_name:"End of Study - Patient Health Questionnaire (PHQ-9)"},
        "phq-eos-form":                  {url:"$H/m/library/phq-form.html",Table:"phq-eos-bod1",task_name:"End of Study - Patient Health Questionnaire (PHQ-9)"},
        "psqi-eos-data":                  {url:"$H/m/library/psqi-data.html",Table:"psqi-eos-bod1",form_module:"psqi-eos-form",task_name:"End of Study - Pittsburgh Sleep Quality Index (PSQI)"},
        "psqi-eos-form":                  {url:"$H/m/library/psqi-form.html",Table:"psqi-eos-bod1",task_name:"End of Study - Pittsburgh Sleep Quality Index (PSQI)"},

    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}
})();

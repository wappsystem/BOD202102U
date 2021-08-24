(function(){
    var modules={
        "panel-main":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child":              {url:"$H/m/panel-child.html"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"cyrs-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child",
                                                questionnaire_setup:"online-questionnaire-setup-cyrs",
                                                online_questionnaire:"online-questionnaire-app-cyrs",
                                                participant_id:{field1:"Randomisation_number",field2:"Intervention_Group"}
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"cyrs-participant"},

        "online-questionnaire-setup-cyrs": {url:"$H/m/oq-setup.html",Table:"cyrs-participant"},
        "online-questionnaire-app-cyrs":   {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"cyrs-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"cyrs-notes"},

        "bod202102U-1-data-cyrs":                  {url:"$H/m/library/bod202102U-first-data.html",Table:"bod202102U-1-cyrs",form_module:"bod202102U-1-form-cyrs",task_name:"COVID-19 Yorkshire Rehabilitation Screening (bod202102U)"},
        "bod202102U-1-form-cyrs":                  {url:"$H/m/library/bod202102U-first-form.html",Table:"bod202102U-1-cyrs",task_name:"COVID-19 Yorkshire Rehabilitation Screening (bod202102U)"},
        "bod202102U-2-data-cyrs":                  {url:"$H/m/library/bod202102U-sub-data.html",Table:"bod202102U-2-cyrs",form_module:"bod202102U-2-form-cyrs",task_name:"bod202102U"},
        "bod202102U-2-form-cyrs":                  {url:"$H/m/library/bod202102U-sub-form.html",Table:"bod202102U-2-cyrs",task_name:"bod202102U"},
        "bod202102U-3-data-cyrs":                  {url:"$H/m/library/bod202102U-sub-data.html",Table:"bod202102U-3-cyrs",form_module:"bod202102U-3-form-cyrs",task_name:"bod202102U"},
        "bod202102U-3-form-cyrs":                  {url:"$H/m/library/bod202102U-sub-form.html",Table:"bod202102U-3-cyrs",task_name:"bod202102U"},
        "bod202102U-4-data-cyrs":                  {url:"$H/m/library/bod202102U-sub-data.html",Table:"bod202102U-4-cyrs",form_module:"bod202102U-4-form-cyrs",task_name:"bod202102U"},
        "bod202102U-4-form-cyrs":                  {url:"$H/m/library/bod202102U-sub-form.html",Table:"bod202102U-4-cyrs",task_name:"bod202102U"},
        "bpi-sf-data":                  {url:"$H/m/library/bpi-sf-data.html",Table:"bpi-sf-bod1",form_module:"bpi-sf-form",task_name:"Brief Pain Inventory (Short Form)"},
        "bpi-sf-form":                  {url:"$H/m/library/bpi-sf-form.html",Table:"bpi-sf-bod1",task_name:"Brief Pain Inventory (Short Form)", router:1},
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

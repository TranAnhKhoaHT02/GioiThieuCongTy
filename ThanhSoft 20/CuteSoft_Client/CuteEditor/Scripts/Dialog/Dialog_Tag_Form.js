var OxO126e=["inp_action","sel_Method","inp_name","inp_id","inp_encode","sel_target","Name","value","name","id","action","method","encoding","application/x-www-form-urlencoded","","target"];var inp_action=Window_GetElement(window,OxO126e[0],true);var sel_Method=Window_GetElement(window,OxO126e[1],true);var inp_name=Window_GetElement(window,OxO126e[2],true);var inp_id=Window_GetElement(window,OxO126e[3],true);var inp_encode=Window_GetElement(window,OxO126e[4],true);var sel_target=Window_GetElement(window,OxO126e[5],true);UpdateState=function UpdateState_Form(){} ;SyncToView=function SyncToView_Form(){if(element[OxO126e[6]]){inp_name[OxO126e[7]]=element[OxO126e[6]];} ;if(element[OxO126e[8]]){inp_name[OxO126e[7]]=element[OxO126e[8]];} ;inp_id[OxO126e[7]]=element[OxO126e[9]];if(element[OxO126e[10]]){inp_action[OxO126e[7]]=element[OxO126e[10]];} ;if(element[OxO126e[11]]){sel_Method[OxO126e[7]]=element[OxO126e[11]];} ;if(element[OxO126e[12]]==OxO126e[13]){inp_encode[OxO126e[7]]=OxO126e[14];} else {inp_encode[OxO126e[7]]=element[OxO126e[12]];} ;if(element[OxO126e[15]]){sel_target[OxO126e[7]]=element[OxO126e[15]];} ;} ;SyncTo=function SyncTo_Form(element){element[OxO126e[8]]=inp_name[OxO126e[7]];if(element[OxO126e[6]]){element[OxO126e[6]]=inp_name[OxO126e[7]];} else {if(element[OxO126e[8]]){element.removeAttribute(OxO126e[8],0);element[OxO126e[6]]=inp_name[OxO126e[7]];} else {element[OxO126e[6]]=inp_name[OxO126e[7]];} ;} ;element[OxO126e[9]]=inp_id[OxO126e[7]];element[OxO126e[10]]=inp_action[OxO126e[7]];element[OxO126e[11]]=sel_Method[OxO126e[7]];try{element[OxO126e[12]]=inp_encode[OxO126e[7]];} catch(e){} ;element[OxO126e[15]]=sel_target[OxO126e[7]];if(element[OxO126e[15]]==OxO126e[14]){element.removeAttribute(OxO126e[15]);} ;if(element[OxO126e[6]]==OxO126e[14]){element.removeAttribute(OxO126e[6]);} ;if(element[OxO126e[10]]==OxO126e[14]){element.removeAttribute(OxO126e[10]);} ;} ;
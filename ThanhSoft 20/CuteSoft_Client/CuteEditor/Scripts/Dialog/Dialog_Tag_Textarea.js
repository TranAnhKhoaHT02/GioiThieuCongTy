var OxOdee3=["inp_name","inp_cols","inp_rows","inp_value","sel_Wrap","inp_id","inp_access","inp_index","inp_Disabled","inp_Readonly","Name","value","name","id","cols","","rows","checked","disabled","readOnly","wrap","tabIndex","accessKey","textContent"];var inp_name=Window_GetElement(window,OxOdee3[0],true);var inp_cols=Window_GetElement(window,OxOdee3[1],true);var inp_rows=Window_GetElement(window,OxOdee3[2],true);var inp_value=Window_GetElement(window,OxOdee3[3],true);var sel_Wrap=Window_GetElement(window,OxOdee3[4],true);var inp_id=Window_GetElement(window,OxOdee3[5],true);var inp_access=Window_GetElement(window,OxOdee3[6],true);var inp_index=Window_GetElement(window,OxOdee3[7],true);var inp_Disabled=Window_GetElement(window,OxOdee3[8],true);var inp_Readonly=Window_GetElement(window,OxOdee3[9],true);UpdateState=function UpdateState_Textarea(){} ;SyncToView=function SyncToView_Textarea(){if(element[OxOdee3[10]]){inp_name[OxOdee3[11]]=element[OxOdee3[10]];} ;if(element[OxOdee3[12]]){inp_name[OxOdee3[11]]=element[OxOdee3[12]];} ;inp_id[OxOdee3[11]]=element[OxOdee3[13]];inp_value[OxOdee3[11]]=element[OxOdee3[11]];if(element[OxOdee3[14]]){if(element[OxOdee3[14]]==20){inp_cols[OxOdee3[11]]=OxOdee3[15];} else {inp_cols[OxOdee3[11]]=element[OxOdee3[14]];} ;} ;if(element[OxOdee3[16]]){if(element[OxOdee3[16]]==2){inp_rows[OxOdee3[11]]=OxOdee3[15];} else {inp_rows[OxOdee3[11]]=element[OxOdee3[16]];} ;} ;inp_Disabled[OxOdee3[17]]=element[OxOdee3[18]];inp_Readonly[OxOdee3[17]]=element[OxOdee3[19]];sel_Wrap[OxOdee3[11]]=element[OxOdee3[20]];if(element[OxOdee3[21]]==0){inp_index[OxOdee3[11]]=OxOdee3[15];} else {inp_index[OxOdee3[11]]=element[OxOdee3[21]];} ;if(element[OxOdee3[22]]){inp_access[OxOdee3[11]]=element[OxOdee3[22]];} ;} ;SyncTo=function SyncTo_Textarea(element){element[OxOdee3[12]]=inp_name[OxOdee3[11]];if(element[OxOdee3[10]]){element[OxOdee3[10]]=inp_name[OxOdee3[11]];} else {if(element[OxOdee3[12]]){element.removeAttribute(OxOdee3[12],0);element[OxOdee3[10]]=inp_name[OxOdee3[11]];} else {element[OxOdee3[10]]=inp_name[OxOdee3[11]];} ;} ;element[OxOdee3[13]]=inp_id[OxOdee3[11]];element[OxOdee3[11]]=inp_value[OxOdee3[11]];if(!Browser_IsWinIE()){try{element[OxOdee3[23]]=inp_value[OxOdee3[11]];} catch(x){} ;} ;element[OxOdee3[21]]=inp_index[OxOdee3[11]];element[OxOdee3[18]]=inp_Disabled[OxOdee3[17]];element[OxOdee3[19]]=inp_Readonly[OxOdee3[17]];element[OxOdee3[22]]=inp_access[OxOdee3[11]];if(inp_cols[OxOdee3[11]]==OxOdee3[15]){element[OxOdee3[14]]=20;} else {element[OxOdee3[14]]=inp_cols[OxOdee3[11]];} ;if(inp_rows[OxOdee3[11]]==OxOdee3[15]){element[OxOdee3[16]]=2;} else {element[OxOdee3[16]]=inp_rows[OxOdee3[11]];} ;try{element[OxOdee3[20]]=sel_Wrap[OxOdee3[11]];} catch(e){element.removeAttribute(OxOdee3[20]);} ;element[OxOdee3[21]]=inp_index[OxOdee3[11]];if(element[OxOdee3[21]]==OxOdee3[15]){element.removeAttribute(OxOdee3[21]);} ;if(element[OxOdee3[22]]==OxOdee3[15]){element.removeAttribute(OxOdee3[22]);} ;} ;
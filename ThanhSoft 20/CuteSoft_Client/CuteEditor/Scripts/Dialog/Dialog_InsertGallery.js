var OxO1c04=["Form1","FoldersAndFiles","Image1","FolderDescription","cbThumbSize","cbColumns","cbRows","cbTypes","cbSorts","ThumbList1_MyList","ThumbList1_hdnCurPage","ThumbList1_hdnPrevPath","hiddenAlert","lightyellow","0px","-3px","value","","onload","all","getElementById","\x3Cdiv id=\x22tooltipdiv\x22 style=\x22visibility:hidden;background-color:","\x22 \x3E\x3C/div\x3E","tooltipdiv","left","offsetLeft","offsetTop","offsetParent","style","top","visibility","compatMode","BackCompat","documentElement","body","rightedge","opera","scrollLeft","clientWidth","pageXOffset","innerWidth","contentmeasure","offsetWidth","x","scrollTop","clientHeight","pageYOffset","innerHeight","offsetHeight","y","innerHTML","visible","hidden","px","bottomedge","undefined","hidetip()","element","editor","editdoc","^[a-z]*:[/][/][^/]*","IMG","src","width","height","border","alt","product","Gecko","src_cetemp","Edit"];var Form1=Window_GetElement(window,OxO1c04[0],true);var FoldersAndFiles=Window_GetElement(window,OxO1c04[1],true);var Image1=Window_GetElement(window,OxO1c04[2],true);var FolderDescription=Window_GetElement(window,OxO1c04[3],true);var cbThumbSize=Window_GetElement(window,OxO1c04[4],true);var cbColumns=Window_GetElement(window,OxO1c04[5],true);var cbRows=Window_GetElement(window,OxO1c04[6],true);var cbTypes=Window_GetElement(window,OxO1c04[7],true);var cbSorts=Window_GetElement(window,OxO1c04[8],true);var ThumbList1_MyList=Window_GetElement(window,OxO1c04[9],true);var ThumbList1_hdnCurPage=Window_GetElement(window,OxO1c04[10],true);var ThumbList1_hdnPrevPath=Window_GetElement(window,OxO1c04[11],true);var hiddenAlert=Window_GetElement(window,OxO1c04[12],true);var tipbgcolor=OxO1c04[13];var disappeardelay=250;var vertical_offset=OxO1c04[14];var horizontal_offset=OxO1c04[15];var delayhidetimerid;function reset_hiddens(){if(hiddenAlert[OxO1c04[16]]){alert(hiddenAlert.value);} ;hiddenAlert[OxO1c04[16]]=OxO1c04[17];} ;Event_Attach(window,OxO1c04[18],reset_hiddens);var ie4=document[OxO1c04[19]];var ns6=document[OxO1c04[20]]&&!document[OxO1c04[19]];if(ie4||ns6){document.write(OxO1c04[21]+tipbgcolor+OxO1c04[22]);var dropmenuobj=Window_GetElement(window,OxO1c04[23],true);} ;function getposOffset(Ox405,Ox406){var Ox407=(Ox406==OxO1c04[24])?Ox405[OxO1c04[25]]:Ox405[OxO1c04[26]];var Ox408=Ox405[OxO1c04[27]];while(Ox408!=null){Ox407+=(Ox406==OxO1c04[24])?Ox408[OxO1c04[25]]:Ox408[OxO1c04[26]];Ox408=Ox408[OxO1c04[27]];} ;return Ox407;} ;function showhide(obj,Ox40a,Ox40b){if(ie4||ns6){dropmenuobj[OxO1c04[28]][OxO1c04[24]]=dropmenuobj[OxO1c04[28]][OxO1c04[29]]=-500;} ;obj[OxO1c04[30]]=Ox40a;} ;function iecompattest(){return (document[OxO1c04[31]]&&document[OxO1c04[31]]!=OxO1c04[32])?document[OxO1c04[33]]:document[OxO1c04[34]];} ;function clearbrowseredge(obj,Ox40e){var Ox40f=(Ox40e==OxO1c04[35])?parseInt(horizontal_offset)*-1:parseInt(vertical_offset)*-1;if(Ox40e==OxO1c04[35]){var Ox410=ie4&&!window[OxO1c04[36]]?iecompattest()[OxO1c04[37]]+iecompattest()[OxO1c04[38]]-15:window[OxO1c04[39]]+window[OxO1c04[40]]-15;dropmenuobj[OxO1c04[41]]=dropmenuobj[OxO1c04[42]];if(Ox410-dropmenuobj[OxO1c04[43]]<dropmenuobj[OxO1c04[41]]){Ox40f=dropmenuobj[OxO1c04[41]]-obj[OxO1c04[42]];} ;} else {var Ox410=ie4&&!window[OxO1c04[36]]?iecompattest()[OxO1c04[44]]+iecompattest()[OxO1c04[45]]-15:window[OxO1c04[46]]+window[OxO1c04[47]]-18;dropmenuobj[OxO1c04[41]]=dropmenuobj[OxO1c04[48]];if(Ox410-dropmenuobj[OxO1c04[49]]<dropmenuobj[OxO1c04[41]]){Ox40f=dropmenuobj[OxO1c04[41]]+obj[OxO1c04[48]];} ;} ;return Ox40f;} ;function showTooltip(Ox42,obj){Event_CancelEvent();clearhidetip();dropmenuobj[OxO1c04[50]]=Ox42;if(ie4||ns6){showhide(dropmenuobj.style,OxO1c04[51],OxO1c04[52]);dropmenuobj[OxO1c04[43]]=getposOffset(obj,OxO1c04[24]);dropmenuobj[OxO1c04[49]]=getposOffset(obj,OxO1c04[29]);dropmenuobj[OxO1c04[28]][OxO1c04[24]]=dropmenuobj[OxO1c04[43]]-clearbrowseredge(obj,OxO1c04[35])+OxO1c04[53];dropmenuobj[OxO1c04[28]][OxO1c04[29]]=dropmenuobj[OxO1c04[49]]-clearbrowseredge(obj,OxO1c04[54])+obj[OxO1c04[48]]*1.1+2+OxO1c04[53];} ;} ;function hidetip(){if( typeof dropmenuobj!=OxO1c04[55]){if(ie4||ns6){dropmenuobj[OxO1c04[28]][OxO1c04[30]]=OxO1c04[52];} ;} ;} ;function delayhidetip(){if(ie4||ns6){delayhidetimerid=setTimeout(OxO1c04[56],disappeardelay);} ;} ;function clearhidetip(){clearTimeout(delayhidetimerid);} ;function cancel(){Window_CloseDialog(window);} ;var obj=Window_GetDialogArguments(window);var element=obj[OxO1c04[57]];var editor=obj[OxO1c04[58]];var editdoc=obj[OxO1c04[59]];function insert(src){if(src){var Ox287=src.replace( new RegExp(OxO1c04[60],OxO1c04[17]),OxO1c04[17]);function Actualsize(){var Ox7d=document.createElement(OxO1c04[61]);Ox7d[OxO1c04[62]]=Ox287;if(Ox7d[OxO1c04[63]]>0&&Ox7d[OxO1c04[64]]>0){element[OxO1c04[63]]=Ox7d[OxO1c04[63]];element[OxO1c04[64]]=Ox7d[OxO1c04[64]];} else {setTimeout(Actualsize,400);} ;} ;if(element){element[OxO1c04[62]]=Ox287;} else {element=editdoc.createElement(OxO1c04[61]);element[OxO1c04[62]]=Ox287;element[OxO1c04[65]]=0;element[OxO1c04[66]]=OxO1c04[17];Actualsize();} ;if(navigator[OxO1c04[67]]==OxO1c04[68]){try{element.setAttribute(OxO1c04[69],Ox287);} catch(e){} ;} else {if(editor.GetActiveTab()==OxO1c04[70]){element.setAttribute(OxO1c04[69],Ox287);} ;} ;editor.InsertElement(element);Window_CloseDialog(window);} ;} ;
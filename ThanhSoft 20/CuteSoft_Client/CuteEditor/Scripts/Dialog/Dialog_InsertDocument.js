var OxOe347=["top","hiddenDirectory","hiddenFile","hiddenAlert","hiddenAction","hiddenActionData","This function is disabled in the demo mode.","disabled","[[Disabled]]","[[SpecifyNewFolderName]]","","value","createdir","[[CopyMoveto]]","/","move","copy","[[AreyouSureDelete]]","parentNode","text","isdir","true",".","[[SpecifyNewFileName]]","rename","True","False",":","path","FoldersAndFiles","TR","length","onmouseover","this.style.backgroundColor=\x27#eeeeee\x27;","onmouseout","this.style.backgroundColor=\x27\x27;","nodeName","INPUT","changedir","url","TargetUrl","htmlcode","onload","getElementsByTagName","table","sortable"," ","className","id","rows","cells","innerHTML","\x3Ca href=\x22#\x22 onclick=\x22ts_resortTable(this);return false;\x22\x3E","\x3Cspan class=\x22sortarrow\x22\x3E\x26nbsp;\x3C/span\x3E\x3C/a\x3E","string","undefined","innerText","childNodes","nodeValue","nodeType","span","cellIndex","TABLE","sortdir","down","\x26uarr;","up","\x26darr;","sortbottom","tBodies","sortarrow","\x26nbsp;","20","19","browse_Frame","Image1","FolderDescription","CreateDir","Copy","Move","Delete","DoRefresh","name_Cell","size_Cell","op_Cell","divpreview","sel_target","inp_color","inp_color_preview","inc_class","inp_id","inp_index","inp_access","Table8","inp_title","btn_zoom_in","btn_zoom_out","btn_Actualsize","a","editor","documentElement","documentMode","clientHeight","scrollHeight","width","style","255px","appName","Microsoft Internet Explorer","userAgent","MSIE ([0-9]{1,}[.0-9]{0,})","color","backgroundColor","class","title","target","tabIndex","accessKey","href","href_cetemp",".jpeg",".jpg",".gif",".png","\x3CIMG src=\x27","\x27\x3E",".bmp","\x26nbsp;\x3Cembed src=\x22","\x22 quality=\x22high\x22 width=\x22200\x22 height=\x22200\x22 type=\x22application/x-shockwave-flash\x22 pluginspage=\x22http://www.macromedia.com/go/getflashplayer\x22\x3E\x3C/embed\x3E\x0A",".swf",".avi",".mpg",".mp3","\x26nbsp;\x3Cembed name=\x22MediaPlayer1\x22 src=\x22","\x22 autostart=-1 showcontrols=-1  type=\x22application/x-mplayer2\x22 width=\x22240\x22 height=\x22200\x22 pluginspage=\x22http://www.microsoft.com/Windows/MediaPlayer\x22 \x3E\x3C/embed\x3E\x0A",".mpeg","\x3Cdiv\x3E\x3C/div\x3E","\x3Cdiv\x3E\x26nbsp;\x3C/div\x3E","\x3Cdiv\x3E\x26#160;\x3C/div\x3E","\x3Cp\x3E\x3C/p\x3E","\x3Cp\x3E\x26#160;\x3C/p\x3E","\x3Cp\x3E\x26nbsp;\x3C/p\x3E","name","zoom","onclick","display","none","align","absmiddle","wrapupPrompt","iepromptfield","body","div","IEPromptBox","promptBlackout","border","1px solid #b0bec7","#f0f0f0","position","absolute","330px","zIndex","100","\x3Cdiv style=\x22width: 100%; padding-top:3px;background-color: #DCE7EB; font-family: verdana; font-size: 10pt; font-weight: bold; height: 22px; text-align:center; background:url(Load.ashx?type=image\x26file=formbg2.gif) repeat-x left top;\x22\x3E[[InputRequired]]\x3C/div\x3E","\x3Cdiv style=\x22padding: 10px\x22\x3E","\x3CBR\x3E\x3CBR\x3E","\x3Cform action=\x22\x22 onsubmit=\x22return wrapupPrompt()\x22\x3E","\x3Cinput id=\x22iepromptfield\x22 name=\x22iepromptdata\x22 type=text size=46 value=\x22","\x22\x3E","\x3Cbr\x3E\x3Cbr\x3E\x3Ccenter\x3E","\x3Cinput type=\x22submit\x22 value=\x22\x26nbsp;\x26nbsp;\x26nbsp;[[OK]]\x26nbsp;\x26nbsp;\x26nbsp;\x22\x3E","\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;","\x3Cinput type=\x22button\x22 onclick=\x22wrapupPrompt(true)\x22 value=\x22\x26nbsp;[[Cancel]]\x26nbsp;\x22\x3E","\x3C/form\x3E\x3C/div\x3E","100px","left","offsetWidth","px","block","CuteEditor_ColorPicker_ButtonOver(this)"];function Window_GetDialogTop(Ox1a8){return Ox1a8[OxOe347[0]];} ;var hiddenDirectory=Window_GetElement(window,OxOe347[1],true);var hiddenFile=Window_GetElement(window,OxOe347[2],true);var hiddenAlert=Window_GetElement(window,OxOe347[3],true);var hiddenAction=Window_GetElement(window,OxOe347[4],true);var hiddenActionData=Window_GetElement(window,OxOe347[5],true);function CreateDir_click(){if(isDemoMode){alert(OxOe347[6]);return false;} ;if(Event_GetSrcElement()[OxOe347[7]]){alert(OxOe347[8]);return false;} ;if(Browser_IsIE7()){IEprompt(Ox21f,OxOe347[9],OxOe347[10]);function Ox21f(Ox381){if(Ox381){hiddenActionData[OxOe347[11]]=Ox381;hiddenAction[OxOe347[11]]=OxOe347[12];window.PostBackAction();return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox381=prompt(OxOe347[9],OxOe347[10]);if(Ox381){hiddenActionData[OxOe347[11]]=Ox381;return true;} else {return false;} ;return false;} ;} ;function Move_click(){if(isDemoMode){alert(OxOe347[6]);return false;} ;if(Event_GetSrcElement()[OxOe347[7]]){alert(OxOe347[8]);return false;} ;if(Browser_IsIE7()){IEprompt(Ox21f,OxOe347[13],OxOe347[14]);function Ox21f(Ox381){if(Ox381){hiddenActionData[OxOe347[11]]=Ox381;hiddenAction[OxOe347[11]]=OxOe347[15];window.PostBackAction();return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox381=prompt(OxOe347[13],OxOe347[14]);if(Ox381){hiddenActionData[OxOe347[11]]=Ox381;return true;} else {return false;} ;return false;} ;} ;function Copy_click(){if(isDemoMode){alert(OxOe347[6]);return false;} ;if(Event_GetSrcElement()[OxOe347[7]]){alert(OxOe347[8]);return false;} ;if(Browser_IsIE7()){IEprompt(Ox21f,OxOe347[13],OxOe347[14]);function Ox21f(Ox381){if(Ox381){hiddenActionData[OxOe347[11]]=Ox381;hiddenAction[OxOe347[11]]=OxOe347[16];window.PostBackAction();return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox381=prompt(OxOe347[13],OxOe347[14]);if(Ox381){hiddenActionData[OxOe347[11]]=Ox381;return true;} else {return false;} ;return false;} ;} ;function Delete_click(){if(isDemoMode){alert(OxOe347[6]);return false;} ;if(Event_GetSrcElement()[OxOe347[7]]){alert(OxOe347[8]);return false;} ;return confirm(OxOe347[17]);} ;function EditImg_click(img){if(isDemoMode){alert(OxOe347[6]);return false;} ;if(img[OxOe347[7]]){alert(OxOe347[8]);return false;} ;var Ox386=img[OxOe347[18]][OxOe347[18]];var Ox387=Ox386[OxOe347[19]];var name;var Ox388;Ox388=Ox386.getAttribute(OxOe347[20])==OxOe347[21];if(Browser_IsIE7()){var Oxca;if(Ox388){IEprompt(Ox21f,OxOe347[9],Ox387);} else {var i=Ox387.lastIndexOf(OxOe347[22]);Oxca=Ox387.substr(i);var Ox12=Ox387.substr(0,Ox387.lastIndexOf(OxOe347[22]));IEprompt(Ox21f,OxOe347[23],Ox12);} ;function Ox21f(Ox381){if(Ox381&&Ox381!=Ox386[OxOe347[19]]){if(!Ox388){Ox381=Ox381+Oxca;} ;hiddenAction[OxOe347[11]]=OxOe347[24];hiddenActionData[OxOe347[11]]=(Ox388?OxOe347[25]:OxOe347[26])+OxOe347[27]+Ox386[OxOe347[28]]+OxOe347[27]+Ox381;window.PostBackAction();} ;} ;} else {if(Ox388){name=prompt(OxOe347[9],Ox387);} else {var i=Ox387.lastIndexOf(OxOe347[22]);var Oxca=Ox387.substr(i);var Ox12=Ox387.substr(0,Ox387.lastIndexOf(OxOe347[22]));name=prompt(OxOe347[23],Ox12);if(name){name=name+Oxca;} ;} ;if(name&&name!=Ox386[OxOe347[19]]){hiddenAction[OxOe347[11]]=OxOe347[24];hiddenActionData[OxOe347[11]]=(Ox388?OxOe347[25]:OxOe347[26])+OxOe347[27]+Ox386[OxOe347[28]]+OxOe347[27]+name;window.PostBackAction();} ;} ;return Event_CancelEvent();} ;setMouseOver();function setMouseOver(){var FoldersAndFiles=Window_GetElement(window,OxOe347[29],true);var Ox38b=FoldersAndFiles.getElementsByTagName(OxOe347[30]);for(var i=1;i<Ox38b[OxOe347[31]];i++){var Ox386=Ox38b[i];Ox386[OxOe347[32]]= new Function(OxOe347[10],OxOe347[33]);Ox386[OxOe347[34]]= new Function(OxOe347[10],OxOe347[35]);} ;} ;function row_click(Ox386){var Ox388;Ox388=Ox386.getAttribute(OxOe347[20])==OxOe347[21];if(Ox388){if(Event_GetSrcElement()[OxOe347[36]]==OxOe347[37]){return ;} ;hiddenAction[OxOe347[11]]=OxOe347[38];hiddenActionData[OxOe347[11]]=Ox386.getAttribute(OxOe347[28]);window.PostBackAction();} else {var Ox109=Ox386.getAttribute(OxOe347[28]);hiddenFile[OxOe347[11]]=Ox109;var Ox287=Ox386.getAttribute(OxOe347[39]);Window_GetElement(window,OxOe347[40],true)[OxOe347[11]]=Ox287;var htmlcode=Ox386.getAttribute(OxOe347[41]);if(htmlcode!=OxOe347[10]&&htmlcode!=null){do_preview(htmlcode);} else {try{Actualsize();} catch(x){do_preview();} ;} ;} ;} ;function do_preview(){} ;function reset_hiddens(){if(hiddenAlert[OxOe347[11]]){alert(hiddenAlert.value);} ;if(TargetUrl[OxOe347[11]]!=OxOe347[10]&&TargetUrl[OxOe347[11]]!=null){do_preview();} ;hiddenAlert[OxOe347[11]]=OxOe347[10];hiddenAction[OxOe347[11]]=OxOe347[10];hiddenActionData[OxOe347[11]]=OxOe347[10];} ;Event_Attach(window,OxOe347[42],reset_hiddens);function RequireFileBrowseScript(){} ;Event_Attach(window,OxOe347[42],sortables_init);var SORT_COLUMN_INDEX;function sortables_init(){if(!document[OxOe347[43]]){return ;} ;var Ox390=document.getElementsByTagName(OxOe347[44]);for(var Ox391=0;Ox391<Ox390[OxOe347[31]];Ox391++){var Ox392=Ox390[Ox391];if(((OxOe347[46]+Ox392[OxOe347[47]]+OxOe347[46]).indexOf(OxOe347[45])!=-1)&&(Ox392[OxOe347[48]])){ts_makeSortable(Ox392);} ;} ;} ;function ts_makeSortable(Ox394){if(Ox394[OxOe347[49]]&&Ox394[OxOe347[49]][OxOe347[31]]>0){var Ox395=Ox394[OxOe347[49]][0];} ;if(!Ox395){return ;} ;for(var i=2;i<4;i++){var Ox396=Ox395[OxOe347[50]][i];var Ox282=ts_getInnerText(Ox396);Ox396[OxOe347[51]]=OxOe347[52]+Ox282+OxOe347[53];} ;} ;function ts_getInnerText(Ox29){if( typeof Ox29==OxOe347[54]){return Ox29;} ;if( typeof Ox29==OxOe347[55]){return Ox29;} ;if(Ox29[OxOe347[56]]){return Ox29[OxOe347[56]];} ;var Ox24=OxOe347[10];var Ox342=Ox29[OxOe347[57]];var Ox11=Ox342[OxOe347[31]];for(var i=0;i<Ox11;i++){switch(Ox342[i][OxOe347[59]]){case 1:Ox24+=ts_getInnerText(Ox342[i]);break ;;case 3:Ox24+=Ox342[i][OxOe347[58]];break ;;} ;} ;return Ox24;} ;function ts_resortTable(Ox399){var Ox2a5;for(var Ox39a=0;Ox39a<Ox399[OxOe347[57]][OxOe347[31]];Ox39a++){if(Ox399[OxOe347[57]][Ox39a][OxOe347[36]]&&Ox399[OxOe347[57]][Ox39a][OxOe347[36]].toLowerCase()==OxOe347[60]){Ox2a5=Ox399[OxOe347[57]][Ox39a];} ;} ;var Ox39b=ts_getInnerText(Ox2a5);var Ox1e4=Ox399[OxOe347[18]];var Ox39c=Ox1e4[OxOe347[61]];var Ox394=getParent(Ox1e4,OxOe347[62]);if(Ox394[OxOe347[49]][OxOe347[31]]<=1){return ;} ;var Ox39d=ts_getInnerText(Ox394[OxOe347[49]][1][OxOe347[50]][Ox39c]);var Ox39e=ts_sort_caseinsensitive;if(Ox39d.match(/^\d\d[\/-]\d\d[\/-]\d\d\d\d$/)){Ox39e=ts_sort_date;} ;if(Ox39d.match(/^\d\d[\/-]\d\d[\/-]\d\d$/)){Ox39e=ts_sort_date;} ;if(Ox39d.match(/^[?]/)){Ox39e=ts_sort_currency;} ;if(Ox39d.match(/^[\d\.]+$/)){Ox39e=ts_sort_numeric;} ;SORT_COLUMN_INDEX=Ox39c;var Ox395= new Array();var Ox39f= new Array();for(var i=0;i<Ox394[OxOe347[49]][0][OxOe347[31]];i++){Ox395[i]=Ox394[OxOe347[49]][0][i];} ;for(var Ox25=1;Ox25<Ox394[OxOe347[49]][OxOe347[31]];Ox25++){Ox39f[Ox25-1]=Ox394[OxOe347[49]][Ox25];} ;Ox39f.sort(Ox39e);if(Ox2a5.getAttribute(OxOe347[63])==OxOe347[64]){var Ox3a0=OxOe347[65];Ox39f.reverse();Ox2a5.setAttribute(OxOe347[63],OxOe347[66]);} else {Ox3a0=OxOe347[67];Ox2a5.setAttribute(OxOe347[63],OxOe347[64]);} ;for(i=0;i<Ox39f[OxOe347[31]];i++){if(!Ox39f[i][OxOe347[47]]||(Ox39f[i][OxOe347[47]]&&(Ox39f[i][OxOe347[47]].indexOf(OxOe347[68])==-1))){Ox394[OxOe347[69]][0].appendChild(Ox39f[i]);} ;} ;for(i=0;i<Ox39f[OxOe347[31]];i++){if(Ox39f[i][OxOe347[47]]&&(Ox39f[i][OxOe347[47]].indexOf(OxOe347[68])!=-1)){Ox394[OxOe347[69]][0].appendChild(Ox39f[i]);} ;} ;var Ox3a1=document.getElementsByTagName(OxOe347[60]);for(var Ox39a=0;Ox39a<Ox3a1[OxOe347[31]];Ox39a++){if(Ox3a1[Ox39a][OxOe347[47]]==OxOe347[70]){if(getParent(Ox3a1[Ox39a],OxOe347[44])==getParent(Ox399,OxOe347[44])){Ox3a1[Ox39a][OxOe347[51]]=OxOe347[71];} ;} ;} ;Ox2a5[OxOe347[51]]=Ox3a0;} ;function getParent(Ox29,Ox3a3){if(Ox29==null){return null;} else {if(Ox29[OxOe347[59]]==1&&Ox29[OxOe347[36]].toLowerCase()==Ox3a3.toLowerCase()){return Ox29;} else {return getParent(Ox29.parentNode,Ox3a3);} ;} ;} ;function ts_sort_date(Oxee,b){var Ox3a5=ts_getInnerText(Oxee[OxOe347[50]][SORT_COLUMN_INDEX]);var Ox3a6=ts_getInnerText(b[OxOe347[50]][SORT_COLUMN_INDEX]);if(Ox3a5[OxOe347[31]]==10){var Ox3a7=Ox3a5.substr(6,4)+Ox3a5.substr(3,2)+Ox3a5.substr(0,2);} else {var Ox3a8=Ox3a5.substr(6,2);if(parseInt(Ox3a8)<50){Ox3a8=OxOe347[72]+Ox3a8;} else {Ox3a8=OxOe347[73]+Ox3a8;} ;var Ox3a7=Ox3a8+Ox3a5.substr(3,2)+Ox3a5.substr(0,2);} ;if(Ox3a6[OxOe347[31]]==10){var Ox3a9=Ox3a6.substr(6,4)+Ox3a6.substr(3,2)+Ox3a6.substr(0,2);} else {Ox3a8=Ox3a6.substr(6,2);if(parseInt(Ox3a8)<50){Ox3a8=OxOe347[72]+Ox3a8;} else {Ox3a8=OxOe347[73]+Ox3a8;} ;var Ox3a9=Ox3a8+Ox3a6.substr(3,2)+Ox3a6.substr(0,2);} ;if(Ox3a7==Ox3a9){return 0;} ;if(Ox3a7<Ox3a9){return -1;} ;return 1;} ;function ts_sort_currency(Oxee,b){var Ox3a5=ts_getInnerText(Oxee[OxOe347[50]][SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,OxOe347[10]);var Ox3a6=ts_getInnerText(b[OxOe347[50]][SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,OxOe347[10]);return parseFloat(Ox3a5)-parseFloat(Ox3a6);} ;function ts_sort_numeric(Oxee,b){var Ox3a5=parseFloat(ts_getInnerText(Oxee[OxOe347[50]][SORT_COLUMN_INDEX]));if(isNaN(Ox3a5)){Ox3a5=0;} ;var Ox3a6=parseFloat(ts_getInnerText(b[OxOe347[50]][SORT_COLUMN_INDEX]));if(isNaN(Ox3a6)){Ox3a6=0;} ;return Ox3a5-Ox3a6;} ;function ts_sort_caseinsensitive(Oxee,b){var Ox3a5=ts_getInnerText(Oxee[OxOe347[50]][SORT_COLUMN_INDEX]).toLowerCase();var Ox3a6=ts_getInnerText(b[OxOe347[50]][SORT_COLUMN_INDEX]).toLowerCase();if(Ox3a5==Ox3a6){return 0;} ;if(Ox3a5<Ox3a6){return -1;} ;return 1;} ;function ts_sort_default(Oxee,b){var Ox3a5=ts_getInnerText(Oxee[OxOe347[50]][SORT_COLUMN_INDEX]);var Ox3a6=ts_getInnerText(b[OxOe347[50]][SORT_COLUMN_INDEX]);if(Ox3a5==Ox3a6){return 0;} ;if(Ox3a5<Ox3a6){return -1;} ;return 1;} [sortables_init];RequireFileBrowseScript();var browse_Frame=Window_GetElement(window,OxOe347[74],true);var hiddenDirectory=Window_GetElement(window,OxOe347[1],true);var hiddenFile=Window_GetElement(window,OxOe347[2],true);var hiddenAlert=Window_GetElement(window,OxOe347[3],true);var hiddenAction=Window_GetElement(window,OxOe347[4],true);var hiddenActionData=Window_GetElement(window,OxOe347[5],true);var Image1=Window_GetElement(window,OxOe347[75],true);var FolderDescription=Window_GetElement(window,OxOe347[76],true);var CreateDir=Window_GetElement(window,OxOe347[77],true);var Copy=Window_GetElement(window,OxOe347[78],true);var Move=Window_GetElement(window,OxOe347[79],true);var FoldersAndFiles=Window_GetElement(window,OxOe347[29],true);var Delete=Window_GetElement(window,OxOe347[80],true);var DoRefresh=Window_GetElement(window,OxOe347[81],true);var name_Cell=Window_GetElement(window,OxOe347[82],true);var size_Cell=Window_GetElement(window,OxOe347[83],true);var op_Cell=Window_GetElement(window,OxOe347[84],true);var divpreview=Window_GetElement(window,OxOe347[85],true);var sel_target=Window_GetElement(window,OxOe347[86],true);var inp_color=Window_GetElement(window,OxOe347[87],true);var inp_color_preview=Window_GetElement(window,OxOe347[88],true);var inc_class=Window_GetElement(window,OxOe347[89],true);var inp_id=Window_GetElement(window,OxOe347[90],true);var inp_index=Window_GetElement(window,OxOe347[91],true);var inp_access=Window_GetElement(window,OxOe347[92],true);var Table8=Window_GetElement(window,OxOe347[93],true);var TargetUrl=Window_GetElement(window,OxOe347[40],true);var inp_title=Window_GetElement(window,OxOe347[94],true);var btn_zoom_in=Window_GetElement(window,OxOe347[95],true);var btn_zoom_out=Window_GetElement(window,OxOe347[96],true);var btn_Actualsize=Window_GetElement(window,OxOe347[97],true);var obj=Window_GetDialogArguments(window);var element=null;if(obj){element=obj[OxOe347[98]];} ;var editor=obj[OxOe347[99]];var ver=getInternetExplorerVersion();if(ver>-1&&ver<=9.0){var needAdjust=true;if(ver>=8.0&&document[OxOe347[100]]){if(document[OxOe347[101]]>7){needAdjust=false;} ;} ;if(needAdjust&&(browse_Frame[OxOe347[102]]<browse_Frame[OxOe347[103]])){FoldersAndFiles[OxOe347[105]][OxOe347[104]]=OxOe347[106];} ;} ;function getInternetExplorerVersion(){var Ox3c9=-1;if(navigator[OxOe347[107]]==OxOe347[108]){var Ox3ca=navigator[OxOe347[109]];var Ox295= new RegExp(OxOe347[110]);if(Ox295.exec(Ox3ca)!=null){Ox3c9=parseFloat(RegExp.$1);} ;} ;return Ox3c9;} ;var htmlcode=OxOe347[10];if(element[OxOe347[105]][OxOe347[111]]){inp_color[OxOe347[11]]=revertColor(element[OxOe347[105]].color);inp_color[OxOe347[105]][OxOe347[112]]=inp_color[OxOe347[11]];inp_color_preview[OxOe347[105]][OxOe347[112]]=inp_color[OxOe347[11]];} ;if(element[OxOe347[47]]==OxOe347[10]){element.removeAttribute(OxOe347[47]);} ;if(element[OxOe347[47]]==OxOe347[10]){element.removeAttribute(OxOe347[113]);} ;if(element[OxOe347[114]]){inp_title[OxOe347[11]]=element[OxOe347[114]];} ;if(element[OxOe347[115]]){sel_target[OxOe347[11]]=element[OxOe347[115]];} ;if(element[OxOe347[116]]){inp_index[OxOe347[11]]=element[OxOe347[116]];} ;if(element[OxOe347[117]]){inp_access[OxOe347[11]]=element[OxOe347[117]];} ;var src=OxOe347[10];if(element.getAttribute(OxOe347[118])){src=element.getAttribute(OxOe347[118]);} ;if(element.getAttribute(OxOe347[119])){src=element.getAttribute(OxOe347[119]);} ;if(TargetUrl[OxOe347[11]]){Actualsize();} else {if(element&&src){TargetUrl[OxOe347[11]]=src;} ;} ;inp_id[OxOe347[11]]=element[OxOe347[48]];var divpreview=Window_GetElement(window,OxOe347[85],true);do_preview();function do_preview(Ox281){if(Ox281!=OxOe347[10]&&Ox281!=null){htmlcode=Ox281;divpreview[OxOe347[51]]=Ox281;return ;} ;divpreview[OxOe347[51]]=OxOe347[10];var Ox287=TargetUrl[OxOe347[11]];if(Ox287==OxOe347[10]){return ;} ;var Oxca=Ox287.substring(Ox287.lastIndexOf(OxOe347[22])).toLowerCase();switch(Oxca){case OxOe347[120]:;case OxOe347[121]:;case OxOe347[122]:;case OxOe347[123]:;case OxOe347[126]:divpreview[OxOe347[51]]=OxOe347[124]+Ox287+OxOe347[125];break ;;case OxOe347[129]:var Ox3cb=OxOe347[127]+Ox287+OxOe347[128];divpreview[OxOe347[51]]=Ox3cb+OxOe347[71];break ;;case OxOe347[130]:;case OxOe347[131]:;case OxOe347[132]:;case OxOe347[135]:var Ox3cc=OxOe347[133]+Ox287+OxOe347[134];divpreview[OxOe347[51]]=Ox3cc+OxOe347[71];break ;;} ;} ;function do_insert(){element[OxOe347[47]]=inc_class[OxOe347[11]];element[OxOe347[115]]=sel_target[OxOe347[11]];element[OxOe347[114]]=inp_title[OxOe347[11]];if(TargetUrl[OxOe347[11]]){element[OxOe347[118]]=TargetUrl[OxOe347[11]];element.setAttribute(OxOe347[119],TargetUrl.value);} ;element[OxOe347[116]]=inp_index[OxOe347[11]];element[OxOe347[117]]=inp_access[OxOe347[11]];element[OxOe347[48]]=inp_id[OxOe347[11]];if(element[OxOe347[114]]==OxOe347[10]){element.removeAttribute(OxOe347[114]);} ;if(element[OxOe347[115]]==OxOe347[10]){element.removeAttribute(OxOe347[115]);} ;if(element[OxOe347[47]]==OxOe347[10]){element.removeAttribute(OxOe347[47]);} ;if(element[OxOe347[47]]==OxOe347[10]){element.removeAttribute(OxOe347[113]);} ;if(element[OxOe347[116]]==OxOe347[10]){element.removeAttribute(OxOe347[116]);} ;if(element[OxOe347[117]]==OxOe347[10]){element.removeAttribute(OxOe347[117]);} ;if(element[OxOe347[48]]==OxOe347[10]){element.removeAttribute(OxOe347[48]);} ;try{element[OxOe347[105]][OxOe347[111]]=inp_color[OxOe347[11]];} catch(er){element[OxOe347[105]][OxOe347[111]]=OxOe347[10];} ;var Ox281=element[OxOe347[51]];switch(Ox281.toLowerCase()){case OxOe347[136]:;case OxOe347[137]:;case OxOe347[138]:;case OxOe347[139]:;case OxOe347[140]:;case OxOe347[141]:element[OxOe347[51]]=OxOe347[10];break ;;default:break ;;} ;if(element[OxOe347[51]]==OxOe347[10]){element[OxOe347[51]]=element[OxOe347[114]]||TargetUrl[OxOe347[11]]||element[OxOe347[142]]||OxOe347[10];} ;Window_SetDialogReturnValue(window,element);Window_CloseDialog(window);} ;function do_Close(){Window_SetDialogReturnValue(window,null);Window_CloseDialog(window);} ;function Zoom_In(){if(divpreview[OxOe347[105]][OxOe347[143]]!=0){divpreview[OxOe347[105]][OxOe347[143]]*=1.2;} else {divpreview[OxOe347[105]][OxOe347[143]]=1.2;} ;} ;function Zoom_Out(){if(divpreview[OxOe347[105]][OxOe347[143]]!=0){divpreview[OxOe347[105]][OxOe347[143]]*=0.8;} else {divpreview[OxOe347[105]][OxOe347[143]]=0.8;} ;} ;function Actualsize(){divpreview[OxOe347[105]][OxOe347[143]]=1;do_preview();} ;inp_color[OxOe347[144]]=inp_color_preview[OxOe347[144]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_preview);} ;if(!Browser_IsWinIE()){btn_zoom_in[OxOe347[105]][OxOe347[145]]=btn_zoom_out[OxOe347[105]][OxOe347[145]]=btn_Actualsize[OxOe347[105]][OxOe347[145]]=OxOe347[146];inp_color_preview.setAttribute(OxOe347[147],OxOe347[148]);} ;if(Browser_IsIE7()){var _dialogPromptID=null;function IEprompt(Ox21f,Ox220,Ox221){that=this;this[OxOe347[149]]=function (Ox222){val=document.getElementById(OxOe347[150])[OxOe347[11]];_dialogPromptID[OxOe347[105]][OxOe347[145]]=OxOe347[146];document.getElementById(OxOe347[150])[OxOe347[11]]=OxOe347[10];if(Ox222){val=OxOe347[10];} ;Ox21f(val);return false;} ;if(Ox221==undefined){Ox221=OxOe347[10];} ;if(_dialogPromptID==null){var Ox223=document.getElementsByTagName(OxOe347[151])[0];tnode=document.createElement(OxOe347[152]);tnode[OxOe347[48]]=OxOe347[153];Ox223.appendChild(tnode);_dialogPromptID=document.getElementById(OxOe347[153]);tnode=document.createElement(OxOe347[152]);tnode[OxOe347[48]]=OxOe347[154];Ox223.appendChild(tnode);_dialogPromptID[OxOe347[105]][OxOe347[155]]=OxOe347[156];_dialogPromptID[OxOe347[105]][OxOe347[112]]=OxOe347[157];_dialogPromptID[OxOe347[105]][OxOe347[158]]=OxOe347[159];_dialogPromptID[OxOe347[105]][OxOe347[104]]=OxOe347[160];_dialogPromptID[OxOe347[105]][OxOe347[161]]=OxOe347[162];} ;var Ox224=OxOe347[163];Ox224+=OxOe347[164]+Ox220+OxOe347[165];Ox224+=OxOe347[166];Ox224+=OxOe347[167]+Ox221+OxOe347[168];Ox224+=OxOe347[169];Ox224+=OxOe347[170];Ox224+=OxOe347[171];Ox224+=OxOe347[172];Ox224+=OxOe347[173];_dialogPromptID[OxOe347[51]]=Ox224;_dialogPromptID[OxOe347[105]][OxOe347[0]]=OxOe347[174];_dialogPromptID[OxOe347[105]][OxOe347[175]]=parseInt((document[OxOe347[151]][OxOe347[176]]-315)/2)+OxOe347[177];_dialogPromptID[OxOe347[105]][OxOe347[145]]=OxOe347[178];var Ox225=document.getElementById(OxOe347[150]);try{var Ox226=Ox225.createTextRange();Ox226.collapse(false);Ox226.select();} catch(x){Ox225.focus();} ;} ;} ;if(CreateDir){CreateDir[OxOe347[32]]= new Function(OxOe347[179]);} ;if(Copy){Copy[OxOe347[32]]= new Function(OxOe347[179]);} ;if(Move){Move[OxOe347[32]]= new Function(OxOe347[179]);} ;if(Delete){Delete[OxOe347[32]]= new Function(OxOe347[179]);} ;if(DoRefresh){DoRefresh[OxOe347[32]]= new Function(OxOe347[179]);} ;if(btn_zoom_in){btn_zoom_in[OxOe347[32]]= new Function(OxOe347[179]);} ;if(btn_zoom_out){btn_zoom_out[OxOe347[32]]= new Function(OxOe347[179]);} ;if(btn_Actualsize){btn_Actualsize[OxOe347[32]]= new Function(OxOe347[179]);} ;
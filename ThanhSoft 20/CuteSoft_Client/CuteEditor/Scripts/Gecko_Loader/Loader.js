var OxOe292=["ua","userAgent","isOpera","opera","isSafari","safari","isGecko","gecko","isWinIE","msie","compatMode","document","CSS1Compat","undefined","Microsoft.XMLHTTP","readyState","onreadystatechange","","length","all","childNodes","nodeType","\x0D\x0A","caller","onchange","oninitialized","command","commandui","commandvalue","returnValue","oncommand","string","_fireEventFunction","event","parentNode","_IsCuteEditor","True","value","arguments","target","nodeName","SELECT","OPTION","readOnly","_IsRichDropDown","null","selectedIndex","TR","cells","display","style","nextSibling","innerHTML","\x3Cimg src=\x22","/Load.ashx?type=image\x26file=t-minus.gif\x22\x3E","onclick","CuteEditor_CollapseTreeDropDownItem(this,\x22","\x22)","none","/Load.ashx?type=image\x26file=t-plus.gif\x22\x3E","CuteEditor_ExpandTreeDropDownItem(this,\x22","contains","UNSELECTABLE","on","tabIndex","-1","//TODO: event not found? throw error ?","contentWindow","contentDocument","parentWindow","id","frames","frameElement","//TODO:frame contentWindow not found?","preventDefault","parent","top","opener","head","script","language","javascript","type","text/javascript","src","srcElement","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","cancelBubble","stopPropagation","CuteEditor_GetEditor(this).ExecImageCommand(this.getAttribute(\x27Command\x27),this.getAttribute(\x27CommandUI\x27),this.getAttribute(\x27CommandArgument\x27),this)","CuteEditor_GetEditor(this).PostBack(this.getAttribute(\x27Command\x27))","this.onmouseout();CuteEditor_GetEditor(this).DropMenu(this.getAttribute(\x27Group\x27),this)","ResourceDir","Theme","/Load.ashx?type=theme\x26theme=","\x26file=all.png","/Images/blank2020.gif","IMG","alt","title","Command","Group","ThemeIndex","width","20px","height","backgroundImage","url(",")","backgroundPosition","0 -","px","onload","className","separator","CuteEditorButton","onmouseover","CuteEditor_ButtonCommandOver(this)","onmouseout","CuteEditor_ButtonCommandOut(this)","onmousedown","CuteEditor_ButtonCommandDown(this)","onmouseup","CuteEditor_ButtonCommandUp(this)","oncontextmenu","ondragstart","PostBack","ondblclick","_ToolBarID","_CodeViewToolBarID","_FrameID"," CuteEditorFrame"," CuteEditorToolbar","cursor","no-drop","ActiveTab","Edit","Code","View","buttonInitialized","isover","CuteEditorButtonOver","CuteEditorButtonDown","CuteEditorDown","border","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","cmd_fromfullpage","(","href","location",",DanaInfo=",",","+","scriptProperties","initfuncbecalled","GetScriptProperty","/Load.ashx?type=scripts\x26file=Gecko_Implementation\x26culture=","Culture","CuteEditorImplementation","function","POST","\x26getModified=1\x26_temp=","status","responseText","GET","\x26modified=","body","block","contentEditable","InitializeCode","CuteEditorInitialize"];var _Browser_TypeInfo=null;function Browser__InitType(){if(_Browser_TypeInfo!=null){return ;} ;var Ox4={};Ox4[OxOe292[0]]=navigator[OxOe292[1]].toLowerCase();Ox4[OxOe292[2]]=(Ox4[OxOe292[0]].indexOf(OxOe292[3])>-1);Ox4[OxOe292[4]]=(Ox4[OxOe292[0]].indexOf(OxOe292[5])>-1);Ox4[OxOe292[6]]=(!Ox4[OxOe292[2]]&&Ox4[OxOe292[0]].indexOf(OxOe292[7])>-1);Ox4[OxOe292[8]]=(!Ox4[OxOe292[2]]&&Ox4[OxOe292[0]].indexOf(OxOe292[9])>-1);_Browser_TypeInfo=Ox4;} ;Browser__InitType();function Browser_IsWinIE(){return _Browser_TypeInfo[OxOe292[8]];} ;function Browser_IsGecko(){return _Browser_TypeInfo[OxOe292[6]];} ;function Browser_IsOpera(){return _Browser_TypeInfo[OxOe292[2]];} ;function Browser_IsSafari(){return _Browser_TypeInfo[OxOe292[4]];} ;function Browser_UseIESelection(){return _Browser_TypeInfo[OxOe292[8]];} ;function Browser_IsCSS1Compat(){return window[OxOe292[11]][OxOe292[10]]==OxOe292[12];} ;function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxOe292[13]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxOe292[13]){return  new ActiveXObject(OxOe292[14]);} ;} catch(x){return null;} ;} ;function LoadXMLAsync(Oxa2b,Ox287,Ox232,Oxa2c){var Oxe7=CreateXMLHttpRequest();function Oxa2d(){if(Oxe7[OxOe292[15]]!=4){return ;} ;Oxe7[OxOe292[16]]= new Function();var Ox28f=Oxe7;Oxe7=null;if(Ox232){Ox232(Ox28f);} ;} ;Oxe7[OxOe292[16]]=Oxa2d;Oxe7.open(Oxa2b,Ox287,true);Oxe7.send(Oxa2c||OxOe292[17]);} ;function Element_GetAllElements(p){var arr=[];if(Browser_IsWinIE()){for(var i=0;i<p[OxOe292[19]][OxOe292[18]];i++){arr.push(p[OxOe292[19]].item(i));} ;return arr;} ;Ox23f(p);function Ox23f(Ox29){var Ox240=Ox29[OxOe292[20]];var Ox11=Ox240[OxOe292[18]];for(var i=0;i<Ox11;i++){var Ox27=Ox240.item(i);if(Ox27[OxOe292[21]]!=1){continue ;} ;arr.push(Ox27);Ox23f(Ox27);} ;} ;return arr;} ;var __ISDEBUG=false;function Debug_Todo(msg){if(!__ISDEBUG){return ;} ;throw ( new Error(msg+OxOe292[22]+Debug_Todo[OxOe292[23]]));} ;function Window_GetElement(Ox1a8,Ox9a,Ox23d){var Ox29=Ox1a8[OxOe292[11]].getElementById(Ox9a);if(Ox29){return Ox29;} ;var Ox31=Ox1a8[OxOe292[11]].getElementsByName(Ox9a);if(Ox31[OxOe292[18]]>0){return Ox31.item(0);} ;return null;} ;function CuteEditor_AddMainMenuItems(Ox667){} ;function CuteEditor_AddDropMenuItems(Ox667,Ox66e){} ;function CuteEditor_AddTagMenuItems(Ox667,Ox670){} ;function CuteEditor_AddVerbMenuItems(Ox667,Ox670){} ;function CuteEditor_OnInitialized(editor){} ;function CuteEditor_OnCommand(editor,Ox4d,Ox4e,Ox4f){} ;function CuteEditor_OnChange(editor){} ;function CuteEditor_FilterCode(editor,Ox269){return Ox269;} ;function CuteEditor_FilterHTML(editor,Ox281){return Ox281;} ;function CuteEditor_FireChange(editor){window.CuteEditor_OnChange(editor);CuteEditor_FireEvent(editor,OxOe292[24],null);} ;function CuteEditor_FireInitialized(editor){window.CuteEditor_OnInitialized(editor);CuteEditor_FireEvent(editor,OxOe292[25],null);} ;function CuteEditor_FireCommand(editor,Ox4d,Ox4e,Ox4f){var Ox13e=window.CuteEditor_OnCommand(editor,Ox4d,Ox4e,Ox4f);if(Ox13e==true){return true;} ;var Ox679={};Ox679[OxOe292[26]]=Ox4d;Ox679[OxOe292[27]]=Ox4e;Ox679[OxOe292[28]]=Ox4f;Ox679[OxOe292[29]]=true;CuteEditor_FireEvent(editor,OxOe292[30],Ox679);if(Ox679[OxOe292[29]]==false){return true;} ;} ;function CuteEditor_FireEvent(editor,Ox67b,Ox67c){if(Ox67c==null){Ox67c={};} ;var Ox67d=editor.getAttribute(Ox67b);if(Ox67d){if( typeof (Ox67d)==OxOe292[31]){editor[OxOe292[32]]= new Function(OxOe292[33],Ox67d);} else {editor[OxOe292[32]]=Ox67d;} ;editor._fireEventFunction(Ox67c);} ;} ;function CuteEditor_GetEditor(element){for(var Ox43=element;Ox43!=null;Ox43=Ox43[OxOe292[34]]){if(Ox43.getAttribute(OxOe292[35])==OxOe292[36]){return Ox43;} ;} ;return null;} ;function CuteEditor_DropDownCommand(element,Oxa2f){var Ox142=element[OxOe292[37]];if(CuteEditor_DropDownCommand[OxOe292[23]]){var Ox43=CuteEditor_DropDownCommand[OxOe292[23]][OxOe292[38]][0];if(Ox43&&Ox43[OxOe292[39]]){if(Ox43[OxOe292[39]][OxOe292[40]]==OxOe292[41]){return ;} ;if(Ox43[OxOe292[39]][OxOe292[40]]==OxOe292[42]){Ox142=Ox43[OxOe292[39]][OxOe292[37]];} ;} ;} ;var editor=CuteEditor_GetEditor(element);if(editor[OxOe292[43]]){return ;} ;if(element.getAttribute(OxOe292[44])==OxOe292[36]){var Ox142=element.GetValue();if(Ox142==OxOe292[45]){Ox142=OxOe292[17];} ;var Ox201=element.GetText();if(Ox201==OxOe292[45]){Ox201=OxOe292[17];} ;element.SetSelectedIndex(0);editor.ExecCommand(Oxa2f,false,Ox142,Ox201);} else {if(Ox142){if(Ox142==OxOe292[45]){Ox142=OxOe292[17];} ;element[OxOe292[46]]=0;editor.ExecCommand(Oxa2f,false,Ox142,Ox201);} else {element[OxOe292[46]]=0;} ;} ;editor.FocusDocument();} ;function CuteEditor_ExpandTreeDropDownItem(src,Ox73d){var Oxba=null;while(src!=null){if(src[OxOe292[40]]==OxOe292[47]){Oxba=src;break ;} ;src=src[OxOe292[34]];} ;var Ox1e4=Oxba[OxOe292[48]].item(0);Oxba[OxOe292[51]][OxOe292[50]][OxOe292[49]]=OxOe292[17];Ox1e4[OxOe292[52]]=OxOe292[53]+Ox73d+OxOe292[54];Oxba[OxOe292[55]]= new Function(OxOe292[56]+Ox73d+OxOe292[57]);} ;function CuteEditor_CollapseTreeDropDownItem(src,Ox73d){var Oxba=null;while(src!=null){if(src[OxOe292[40]]==OxOe292[47]){Oxba=src;break ;} ;src=src[OxOe292[34]];} ;var Ox1e4=Oxba[OxOe292[48]].item(0);Oxba[OxOe292[51]][OxOe292[50]][OxOe292[49]]=OxOe292[58];Ox1e4[OxOe292[52]]=OxOe292[53]+Ox73d+OxOe292[59];Oxba[OxOe292[55]]= new Function(OxOe292[60]+Ox73d+OxOe292[57]);} ;function Element_Contains(element,Ox183){if(!Browser_IsOpera()){if(element[OxOe292[61]]){return element.contains(Ox183);} ;} ;for(;Ox183!=null;Ox183=Ox183[OxOe292[34]]){if(element==Ox183){return true;} ;} ;return false;} ;function Element_SetUnselectable(element){element.setAttribute(OxOe292[62],OxOe292[63]);element.setAttribute(OxOe292[64],OxOe292[65]);var arr=Element_GetAllElements(element);var len=arr[OxOe292[18]];if(!len){return ;} ;for(var i=0;i<len;i++){arr[i].setAttribute(OxOe292[62],OxOe292[63]);arr[i].setAttribute(OxOe292[64],OxOe292[65]);} ;} ;function Event_GetEvent(Ox243){Ox243=Event_FindEvent(Ox243);if(Ox243==null){Debug_Todo(OxOe292[66]);} ;return Ox243;} ;function Frame_GetContentWindow(Ox348){if(Ox348[OxOe292[67]]){return Ox348[OxOe292[67]];} ;if(Ox348[OxOe292[68]]){if(Ox348[OxOe292[68]][OxOe292[69]]){return Ox348[OxOe292[68]][OxOe292[69]];} ;} ;var Ox1a8;if(Ox348[OxOe292[70]]){Ox1a8=window[OxOe292[71]][Ox348[OxOe292[70]]];if(Ox1a8){return Ox1a8;} ;} ;var len=window[OxOe292[71]][OxOe292[18]];for(var i=0;i<len;i++){Ox1a8=window[OxOe292[71]][i];if(Ox1a8[OxOe292[72]]==Ox348){return Ox1a8;} ;if(Ox1a8[OxOe292[11]]==Ox348[OxOe292[68]]){return Ox1a8;} ;} ;Debug_Todo(OxOe292[73]);} ;function Array_IndexOf(arr,Ox245){for(var i=0;i<arr[OxOe292[18]];i++){if(arr[i]==Ox245){return i;} ;} ;return -1;} ;function Array_Contains(arr,Ox245){return Array_IndexOf(arr,Ox245)!=-1;} ;function Event_FindEvent(Ox243){if(Ox243&&Ox243[OxOe292[74]]){return Ox243;} ;if(Browser_IsGecko()){return Event_FindEvent_FindEventFromCallers();} else {if(window[OxOe292[33]]){return window[OxOe292[33]];} ;return Event_FindEvent_FindEventFromWindows();} ;return null;} ;function Event_FindEvent_FindEventFromCallers(){var Ox18f=Event_GetEvent[OxOe292[23]];for(var i=0;i<100;i++){if(!Ox18f){break ;} ;var Ox243=Ox18f[OxOe292[38]][0];if(Ox243&&Ox243[OxOe292[74]]){return Ox243;} ;Ox18f=Ox18f[OxOe292[23]];} ;} ;function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox24c(window);function Ox24c(Ox1a8){if(Ox1a8==null){return null;} ;if(Ox1a8[OxOe292[33]]){return Ox1a8[OxOe292[33]];} ;if(Array_Contains(arr,Ox1a8)){return null;} ;arr.push(Ox1a8);var Ox24d=[];if(Ox1a8[OxOe292[75]]!=Ox1a8){Ox24d.push(Ox1a8.parent);} ;if(Ox1a8[OxOe292[76]]!=Ox1a8[OxOe292[75]]){Ox24d.push(Ox1a8.top);} ;if(Ox1a8[OxOe292[77]]){Ox24d.push(Ox1a8.opener);} ;for(var i=0;i<Ox1a8[OxOe292[71]][OxOe292[18]];i++){Ox24d.push(Ox1a8[OxOe292[71]][i]);} ;for(var i=0;i<Ox24d[OxOe292[18]];i++){try{var Ox243=Ox24c(Ox24d[i]);if(Ox243){return Ox243;} ;} catch(x){} ;} ;return null;} ;} ;function include(Oxc9,Ox287){var Ox288=document.getElementsByTagName(OxOe292[78]).item(0);var Ox289=document.getElementById(Oxc9);if(Ox289){Ox288.removeChild(Ox289);} ;var Ox28a=document.createElement(OxOe292[79]);Ox28a.setAttribute(OxOe292[80],OxOe292[81]);Ox28a.setAttribute(OxOe292[82],OxOe292[83]);Ox28a.setAttribute(OxOe292[84],Ox287);Ox28a.setAttribute(OxOe292[70],Oxc9);Ox288.appendChild(Ox28a);} ;function Event_GetSrcElement(Ox243){Ox243=Event_GetEvent(Ox243);if(Ox243[OxOe292[85]]){return Ox243[OxOe292[85]];} ;if(Ox243[OxOe292[39]]){return Ox243[OxOe292[39]];} ;Debug_Todo(OxOe292[86]);return null;} ;function Event_GetFromElement(Ox243){Ox243=Event_GetEvent(Ox243);if(Ox243[OxOe292[87]]){return Ox243[OxOe292[87]];} ;if(Ox243[OxOe292[88]]){return Ox243[OxOe292[88]];} ;return null;} ;function Event_GetToElement(Ox243){Ox243=Event_GetEvent(Ox243);if(Ox243[OxOe292[89]]){return Ox243[OxOe292[89]];} ;if(Ox243[OxOe292[88]]){return Ox243[OxOe292[88]];} ;return null;} ;function Event_GetKeyCode(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxOe292[90]];} ;function Event_GetClientX(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxOe292[91]];} ;function Event_GetClientY(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxOe292[92]];} ;function Event_GetOffsetX(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxOe292[93]];} ;function Event_GetOffsetY(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxOe292[94]];} ;function Event_IsLeftButton(Ox243){Ox243=Event_GetEvent(Ox243);if(Browser_IsWinIE()){return Ox243[OxOe292[95]]==1;} ;if(Browser_IsGecko()){return Ox243[OxOe292[95]]==0;} ;return Ox243[OxOe292[95]]==0;} ;function Event_IsCtrlKey(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxOe292[96]];} ;function Event_IsAltKey(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxOe292[97]];} ;function Event_IsShiftKey(Ox243){Ox243=Event_GetEvent(Ox243);return Ox243[OxOe292[98]];} ;function Event_PreventDefault(Ox243){Ox243=Event_GetEvent(Ox243);Ox243[OxOe292[29]]=false;if(Ox243[OxOe292[74]]){Ox243.preventDefault();} ;} ;function Event_CancelBubble(Ox243){Ox243=Event_GetEvent(Ox243);Ox243[OxOe292[99]]=true;if(Ox243[OxOe292[100]]){Ox243.stopPropagation();} ;return false;} ;function Event_CancelEvent(Ox243){Ox243=Event_GetEvent(Ox243);Event_PreventDefault(Ox243);return Event_CancelBubble(Ox243);} ;function CuteEditor_BasicInitialize(editor){var Ox158=Browser_IsOpera();var Ox706= new Function(OxOe292[101]);var Oxa33= new Function(OxOe292[102]);var Oxa34= new Function(OxOe292[103]);var Oxa35=editor.GetScriptProperty(OxOe292[104]);var Oxa36=editor.GetScriptProperty(OxOe292[105]);var Oxa37=Oxa35+OxOe292[106]+Oxa36+OxOe292[107];var Oxa38=Oxa35+OxOe292[108];var images=editor.getElementsByTagName(OxOe292[109]);var len=images[OxOe292[18]];for(var i=0;i<len;i++){var img=images[i];if(img.getAttribute(OxOe292[110])&&!img.getAttribute(OxOe292[111])){img.setAttribute(OxOe292[111],img.getAttribute(OxOe292[110]));} ;var Ox135=img.getAttribute(OxOe292[112]);var Ox66e=img.getAttribute(OxOe292[113]);if(!(Ox135||Ox66e)){continue ;} ;var Oxa39=img.getAttribute(OxOe292[114]);if(parseInt(Oxa39)>=0){img[OxOe292[50]][OxOe292[115]]=OxOe292[116];img[OxOe292[50]][OxOe292[117]]=OxOe292[116];img[OxOe292[84]]=Oxa38;img[OxOe292[50]][OxOe292[118]]=OxOe292[119]+Oxa37+OxOe292[120];img[OxOe292[50]][OxOe292[121]]=OxOe292[122]+(Oxa39*20)+OxOe292[123];img[OxOe292[50]][OxOe292[49]]=OxOe292[17];} ;if(!Ox135&&!Ox66e){if(Ox158){img[OxOe292[124]]=CuteEditor_OperaHandleImageLoaded;} ;continue ;} ;if(img[OxOe292[125]]!=OxOe292[126]){img[OxOe292[125]]=OxOe292[127];img[OxOe292[128]]= new Function(OxOe292[129]);img[OxOe292[130]]= new Function(OxOe292[131]);img[OxOe292[132]]= new Function(OxOe292[133]);img[OxOe292[134]]= new Function(OxOe292[135]);} ;if(!img[OxOe292[136]]){img[OxOe292[136]]=Event_CancelEvent;} ;if(!img[OxOe292[137]]){img[OxOe292[137]]=Event_CancelEvent;} ;if(Ox135){var Ox18f=img.getAttribute(OxOe292[138])==OxOe292[36]?Oxa33:Ox706;if(img[OxOe292[55]]==null){img[OxOe292[55]]=Ox18f;} ;if(img[OxOe292[139]]==null){img[OxOe292[139]]=Ox18f;} ;} else {if(Ox66e){if(img[OxOe292[55]]==null){img[OxOe292[55]]=Oxa34;} ;} ;} ;} ;var Ox773=Window_GetElement(window,editor.GetScriptProperty(OxOe292[140]),true);var Ox774=Window_GetElement(window,editor.GetScriptProperty(OxOe292[141]),true);var Ox76f=Window_GetElement(window,editor.GetScriptProperty(OxOe292[142]),true);Ox76f[OxOe292[125]]+=OxOe292[143];Ox773[OxOe292[125]]+=OxOe292[144];Ox774[OxOe292[125]]+=OxOe292[144];Element_SetUnselectable(Ox773);Element_SetUnselectable(Ox774);try{editor[OxOe292[50]][OxOe292[145]]=OxOe292[146];} catch(x){} ;var Ox7f6=editor.GetScriptProperty(OxOe292[147]);switch(Ox7f6){case OxOe292[148]:Ox773[OxOe292[50]][OxOe292[49]]=OxOe292[17];break ;;case OxOe292[149]:Ox774[OxOe292[50]][OxOe292[49]]=OxOe292[17];break ;;case OxOe292[150]:break ;;} ;} ;function CuteEditor_OperaHandleImageLoaded(){var img=this;if(img[OxOe292[50]][OxOe292[49]]){img[OxOe292[50]][OxOe292[49]]=OxOe292[58];setTimeout(function Oxa3b(){img[OxOe292[50]][OxOe292[49]]=OxOe292[17];} ,1);} ;} ;function CuteEditor_ButtonOver(element){if(!element[OxOe292[151]]){element[OxOe292[136]]=Event_CancelEvent;element[OxOe292[130]]=CuteEditor_ButtonOut;element[OxOe292[132]]=CuteEditor_ButtonDown;element[OxOe292[134]]=CuteEditor_ButtonUp;Element_SetUnselectable(element);element[OxOe292[151]]=true;} ;element[OxOe292[152]]=true;element[OxOe292[125]]=OxOe292[153];} ;function CuteEditor_ButtonOut(){var element=this;element[OxOe292[125]]=OxOe292[127];element[OxOe292[152]]=false;} ;function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this;element[OxOe292[125]]=OxOe292[154];} ;function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxOe292[152]]){element[OxOe292[125]]=OxOe292[153];} else {element[OxOe292[125]]=OxOe292[155];} ;} ;function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxOe292[151]]){element[OxOe292[136]]=Event_CancelEvent;element[OxOe292[130]]=CuteEditor_ColorPicker_ButtonOut;element[OxOe292[132]]=CuteEditor_ColorPicker_ButtonDown;Element_SetUnselectable(element);element[OxOe292[151]]=true;} ;element[OxOe292[152]]=true;element[OxOe292[50]][OxOe292[156]]=OxOe292[157];element[OxOe292[50]][OxOe292[158]]=OxOe292[159];element[OxOe292[50]][OxOe292[160]]=OxOe292[161];} ;function CuteEditor_ColorPicker_ButtonOut(){var element=this;element[OxOe292[152]]=false;element[OxOe292[50]][OxOe292[156]]=OxOe292[162];element[OxOe292[50]][OxOe292[158]]=OxOe292[17];element[OxOe292[50]][OxOe292[160]]=OxOe292[161];} ;function CuteEditor_ColorPicker_ButtonDown(){var element=this;element[OxOe292[50]][OxOe292[156]]=OxOe292[163];element[OxOe292[50]][OxOe292[158]]=OxOe292[17];element[OxOe292[50]][OxOe292[160]]=OxOe292[161];} ;function CuteEditor_ButtonCommandOver(element){element[OxOe292[152]]=true;if(element[OxOe292[164]]){element[OxOe292[125]]=OxOe292[165];} else {element[OxOe292[125]]=OxOe292[153];} ;} ;function CuteEditor_ButtonCommandOut(element){element[OxOe292[152]]=false;if(element[OxOe292[166]]){element[OxOe292[125]]=OxOe292[167];} else {if(element[OxOe292[164]]){element[OxOe292[125]]=OxOe292[165];} else {if(element[OxOe292[70]]!=OxOe292[168]){element[OxOe292[125]]=OxOe292[127];} ;} ;} ;} ;function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ;element[OxOe292[125]]=OxOe292[154];} ;function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxOe292[164]]){element[OxOe292[125]]=OxOe292[165];return ;} ;if(element[OxOe292[152]]){element[OxOe292[125]]=OxOe292[153];} else {if(element[OxOe292[166]]){element[OxOe292[125]]=OxOe292[167];} else {element[OxOe292[125]]=OxOe292[127];} ;} ;} ;var CuteEditorGlobalFunctions=[CuteEditor_GetEditor,CuteEditor_ButtonOver,CuteEditor_ButtonOut,CuteEditor_ButtonDown,CuteEditor_ButtonUp,CuteEditor_ColorPicker_ButtonOver,CuteEditor_ColorPicker_ButtonOut,CuteEditor_ColorPicker_ButtonDown,CuteEditor_ButtonCommandOver,CuteEditor_ButtonCommandOut,CuteEditor_ButtonCommandDown,CuteEditor_ButtonCommandUp,CuteEditor_DropDownCommand,CuteEditor_ExpandTreeDropDownItem,CuteEditor_CollapseTreeDropDownItem,CuteEditor_OnInitialized,CuteEditor_OnCommand,CuteEditor_OnChange,CuteEditor_AddVerbMenuItems,CuteEditor_AddTagMenuItems,CuteEditor_AddMainMenuItems,CuteEditor_AddDropMenuItems,CuteEditor_FilterCode,CuteEditor_FilterHTML];function SetupCuteEditorGlobalFunctions(){for(var i=0;i<CuteEditorGlobalFunctions[OxOe292[18]];i++){var Ox18f=CuteEditorGlobalFunctions[i];var name=Ox18f+OxOe292[17];name=name.substr(8,name.indexOf(OxOe292[169])-8).replace(/\s/g,OxOe292[17]);if(!window[name]){window[name]=Ox18f;} ;} ;} ;SetupCuteEditorGlobalFunctions();var __danainfo=null;var danaurl=window[OxOe292[171]][OxOe292[170]];var danapos=danaurl.indexOf(OxOe292[172]);if(danapos!=-1){var pluspos1=danaurl.indexOf(OxOe292[173],danapos+10);var pluspos2=danaurl.indexOf(OxOe292[174],danapos+10);if(pluspos1!=-1&&pluspos1<pluspos2){pluspos2=pluspos1;} ;__danainfo=danaurl.substring(danapos,pluspos2)+OxOe292[174];} ;function CuteEditor_GetScriptProperty(name){var Ox142=this[OxOe292[175]][name];if(Ox142&&__danainfo){if(name==OxOe292[104]){return Ox142+__danainfo;} ;var Ox381=this[OxOe292[175]][OxOe292[104]];if(Ox142.substr(0,Ox381.length)==Ox381){return Ox381+__danainfo+Ox142.substring(Ox381.length);} ;} ;return Ox142;} ;function CuteEditor_SetScriptProperty(name,Ox142){if(Ox142==null){this[OxOe292[175]][name]=null;} else {this[OxOe292[175]][name]=String(Ox142);} ;} ;function CuteEditorInitialize(Oxa46,Oxa47){var editor=Window_GetElement(window,Oxa46,true);if(editor[OxOe292[176]]){return ;} ;editor[OxOe292[176]]=1;editor[OxOe292[175]]=Oxa47;editor[OxOe292[177]]=CuteEditor_GetScriptProperty;var Ox76f=Window_GetElement(window,editor.GetScriptProperty(OxOe292[142]),true);var editwin,editdoc;try{editwin=Frame_GetContentWindow(Ox76f);editdoc=editwin[OxOe292[11]];} catch(x){} ;var Oxa48=false;var Oxa49;var Oxa4a=false;var Oxa4b=editor.GetScriptProperty(OxOe292[104])+OxOe292[178]+editor.GetScriptProperty(OxOe292[179]);function Oxa4c(){if( typeof (window[OxOe292[180]])==OxOe292[181]){return ;} ;LoadXMLAsync(OxOe292[182],Oxa4b+OxOe292[183]+ new Date().getTime(),Oxa4d);} ;function Oxa4d(Ox28f){var Ox880= new Date().getTime();if(Ox28f[OxOe292[184]]!=200){} else {Ox880=Ox28f[OxOe292[185]];} ;LoadXMLAsync(OxOe292[186],Oxa4b+OxOe292[187]+Ox880,Oxa4e);} ;function Oxa4e(Ox28f){if(Ox28f[OxOe292[184]]!=200){return ;} ;CuteEditorInstallScriptCode(Ox28f.responseText,OxOe292[180]);if(Oxa48){Oxa4f();} ;} ;function Oxa4f(){if(Oxa4a){return ;} ;Oxa4a=true;try{editor[OxOe292[50]][OxOe292[145]]=OxOe292[17];} catch(x){} ;try{editdoc[OxOe292[188]][OxOe292[50]][OxOe292[145]]=OxOe292[17];} catch(x){} ;Ox76f[OxOe292[50]][OxOe292[49]]=OxOe292[189];if(Browser_IsOpera()){editdoc[OxOe292[188]][OxOe292[190]]=true;} else {} ;window.CuteEditorImplementation(editor);var Oxa50=editor.GetScriptProperty(OxOe292[191]);if(Oxa50){editor.Eval(Oxa50);} ;} ;function Oxa51(){if(!Element_Contains(window[OxOe292[11]].body,editor)){return ;} ;try{Ox76f=Window_GetElement(window,editor.GetScriptProperty(OxOe292[142]),true);editwin=Frame_GetContentWindow(Ox76f);editdoc=editwin[OxOe292[11]];var y=editdoc[OxOe292[188]];} catch(x){setTimeout(Oxa51,100);return ;} ;if(!editdoc[OxOe292[188]]){setTimeout(Oxa51,100);return ;} ;if(!Oxa48){Oxa48=true;setTimeout(Oxa51,50);return ;} ;if( typeof (window[OxOe292[180]])==OxOe292[181]){Oxa4f();} else {try{editdoc[OxOe292[188]][OxOe292[50]][OxOe292[145]]=OxOe292[146];} catch(x){} ;} ;} ;var Oxa52=0;var Ox43=CuteEditor_Find_DisplayNone(editor);if(Ox43){function Oxa53(){if(Ox43[OxOe292[50]][OxOe292[49]]!=OxOe292[58]){window.clearInterval(Oxa52);Oxa52=OxOe292[17];editor[OxOe292[176]]=false;CuteEditorInitialize(Oxa46,Oxa47);} ;} ;Oxa52=setInterval(Oxa53,1000);} else {CuteEditor_BasicInitialize(editor);Oxa4c();Oxa51();} ;function CuteEditor_Find_DisplayNone(element){var Oxa55;for(var Ox43=element;Ox43!=null;Ox43=Ox43[OxOe292[34]]){if(Ox43[OxOe292[50]]&&Ox43[OxOe292[50]][OxOe292[49]]==OxOe292[58]){Oxa55=Ox43;break ;} ;} ;return Oxa55;} ;} ;function CuteEditorInstallScriptCode(Ox9ab,Ox9ac){eval(Ox9ab);window[Ox9ac]=eval(Ox9ac);} ;window[OxOe292[192]]=CuteEditorInitialize;
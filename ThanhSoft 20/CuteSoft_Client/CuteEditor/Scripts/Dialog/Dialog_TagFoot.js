var OxO60c2=["btn_editinwin","btnok","btncc","controlparent","display","style","none","onclick","nocancel","length","nodeName","SELECT","INPUT","TEXTAREA","isnotinput","1","skipAutoFireChanged","onpropertychange","","OnPropertyChange()","onchange","if(!syncingtoview)FireUIChanged()","onkeypress","onkeyup"];var btn_editinwin=Window_GetElement(window,OxO60c2[0],true);var btnok=Window_GetElement(window,OxO60c2[1],true);var btncc=Window_GetElement(window,OxO60c2[2],true);var controlparent=Window_GetElement(window,OxO60c2[3],true);btn_editinwin[OxO60c2[5]][OxO60c2[4]]=OxO60c2[6];btn_editinwin[OxO60c2[7]]=function btn_editinwin_onclick(){} ;if(Window_GetDialogTop(window)[OxO60c2[8]]){btncc[OxO60c2[5]][OxO60c2[4]]=OxO60c2[6];} ;btnok[OxO60c2[7]]=function btnok_onclick(){Window_SetDialogReturnValue(window,true);Window_CloseDialog(window);} ;btncc[OxO60c2[7]]=function btncc_onclick(){Window_SetDialogReturnValue(window,false);Window_CloseDialog(window);} ;function HookChangeEvents(){var Ox31=Element_GetAllElements(controlparent);for(var i=0;i<Ox31[OxO60c2[9]];i++){var Ox43=Ox31[i];if(Ox43[OxO60c2[10]]==OxO60c2[11]||Ox43[OxO60c2[10]]==OxO60c2[12]||Ox43[OxO60c2[10]]==OxO60c2[13]){if(Ox43.getAttribute(OxO60c2[14])==OxO60c2[15]||Ox43.getAttribute(OxO60c2[16])==OxO60c2[15]){continue ;} ;Event_Attach(Ox43,OxO60c2[17], new Function(OxO60c2[18],OxO60c2[19]));Event_Attach(Ox43,OxO60c2[20], new Function(OxO60c2[18],OxO60c2[21]));Event_Attach(Ox43,OxO60c2[22], new Function(OxO60c2[18],OxO60c2[21]));Event_Attach(Ox43,OxO60c2[23], new Function(OxO60c2[18],OxO60c2[21]));} ;} ;} ;HookChangeEvents();SyncToViewInternal();setInterval(UpdateState,300);
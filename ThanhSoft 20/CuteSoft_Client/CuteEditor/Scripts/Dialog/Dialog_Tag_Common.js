var OxOcba6=["inp_class","inp_width","inp_height","sel_align","sel_textalign","sel_float","inp_forecolor","img_forecolor","inp_backcolor","img_backcolor","inp_tooltip","value","className","width","style","height","align","styleFloat","cssFloat","textAlign","title","backgroundColor","color","","class","onclick"];var inp_class=Window_GetElement(window,OxOcba6[0],true);var inp_width=Window_GetElement(window,OxOcba6[1],true);var inp_height=Window_GetElement(window,OxOcba6[2],true);var sel_align=Window_GetElement(window,OxOcba6[3],true);var sel_textalign=Window_GetElement(window,OxOcba6[4],true);var sel_float=Window_GetElement(window,OxOcba6[5],true);var inp_forecolor=Window_GetElement(window,OxOcba6[6],true);var img_forecolor=Window_GetElement(window,OxOcba6[7],true);var inp_backcolor=Window_GetElement(window,OxOcba6[8],true);var img_backcolor=Window_GetElement(window,OxOcba6[9],true);var inp_tooltip=Window_GetElement(window,OxOcba6[10],true);UpdateState=function UpdateState_Common(){} ;SyncToView=function SyncToView_Common(){inp_class[OxOcba6[11]]=element[OxOcba6[12]];inp_width[OxOcba6[11]]=element[OxOcba6[14]][OxOcba6[13]];inp_height[OxOcba6[11]]=element[OxOcba6[14]][OxOcba6[15]];sel_align[OxOcba6[11]]=element[OxOcba6[16]];if(Browser_IsWinIE()){sel_float[OxOcba6[11]]=element[OxOcba6[14]][OxOcba6[17]];} else {sel_float[OxOcba6[11]]=element[OxOcba6[14]][OxOcba6[18]];} ;sel_textalign[OxOcba6[11]]=element[OxOcba6[14]][OxOcba6[19]];inp_tooltip[OxOcba6[11]]=element[OxOcba6[20]];inp_forecolor[OxOcba6[11]]=revertColor(element[OxOcba6[14]].color);inp_forecolor[OxOcba6[14]][OxOcba6[21]]=inp_forecolor[OxOcba6[11]];img_forecolor[OxOcba6[14]][OxOcba6[21]]=inp_forecolor[OxOcba6[11]];inp_backcolor[OxOcba6[11]]=revertColor(element[OxOcba6[14]].backgroundColor);inp_backcolor[OxOcba6[14]][OxOcba6[21]]=inp_backcolor[OxOcba6[11]];img_backcolor[OxOcba6[14]][OxOcba6[21]]=inp_backcolor[OxOcba6[11]];} ;SyncTo=function SyncTo_Common(element){element[OxOcba6[12]]=inp_class[OxOcba6[11]];try{element[OxOcba6[14]][OxOcba6[13]]=inp_width[OxOcba6[11]];element[OxOcba6[14]][OxOcba6[15]]=inp_height[OxOcba6[11]];} catch(x){} ;element[OxOcba6[16]]=sel_align[OxOcba6[11]];if(Browser_IsWinIE()){element[OxOcba6[14]][OxOcba6[17]]=sel_float[OxOcba6[11]];} else {element[OxOcba6[14]][OxOcba6[18]]=sel_float[OxOcba6[11]];} ;element[OxOcba6[14]][OxOcba6[19]]=sel_textalign[OxOcba6[11]];element[OxOcba6[20]]=inp_tooltip[OxOcba6[11]];element[OxOcba6[14]][OxOcba6[22]]=inp_forecolor[OxOcba6[11]];element[OxOcba6[14]][OxOcba6[21]]=inp_backcolor[OxOcba6[11]];if(element[OxOcba6[12]]==OxOcba6[23]){element.removeAttribute(OxOcba6[12]);} ;if(element[OxOcba6[12]]==OxOcba6[23]){element.removeAttribute(OxOcba6[24]);} ;if(element[OxOcba6[20]]==OxOcba6[23]){element.removeAttribute(OxOcba6[20]);} ;if(element[OxOcba6[16]]==OxOcba6[23]){element.removeAttribute(OxOcba6[16]);} ;} ;img_forecolor[OxOcba6[25]]=inp_forecolor[OxOcba6[25]]=function inp_forecolor_onclick(){SelectColor(inp_forecolor,img_forecolor);} ;img_backcolor[OxOcba6[25]]=inp_backcolor[OxOcba6[25]]=function inp_backcolor_onclick(){SelectColor(inp_backcolor,img_backcolor);} ;
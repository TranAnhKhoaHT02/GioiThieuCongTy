var OxO7719=["inp_src","box1","box2","box3","box4","box5","box6","box7","box8","box9","inp_start","CustomBullet","nodeName","LI","parentNode","none","decimal","upper-roman","upper-alpha","lower-alpha","lower-roman","disc","circle","square","listStyleType","style","border","solid 2px #708090","listStyleImage","","value","visibility","hidden","length","start","url(\x27","\x27)","visible","UL","OL","document","firstChild","element","solid 2px #ffffff","solid 2px #ECECF6","onclick"];var inp_src=Window_GetElement(window,OxO7719[0],true);var box1=Window_GetElement(window,OxO7719[1],true);var box2=Window_GetElement(window,OxO7719[2],true);var box3=Window_GetElement(window,OxO7719[3],true);var box4=Window_GetElement(window,OxO7719[4],true);var box5=Window_GetElement(window,OxO7719[5],true);var box6=Window_GetElement(window,OxO7719[6],true);var box7=Window_GetElement(window,OxO7719[7],true);var box8=Window_GetElement(window,OxO7719[8],true);var box9=Window_GetElement(window,OxO7719[9],true);var inp_start=Window_GetElement(window,OxO7719[10],true);var CustomBullet=Window_GetElement(window,OxO7719[11],true);OriginalnodeName=element[OxO7719[12]];if(element[OxO7719[12]]&&element[OxO7719[12]]==OxO7719[13]){OriginalnodeName=(element[OxO7719[14]])[OxO7719[12]];} ;var OriginalnodeName,CurrentnodeName,selectedObject;SyncToView=function SyncToView_LI(){if(element[OxO7719[12]]==OxO7719[13]){element=element[OxO7719[14]];} ;switch((element[OxO7719[25]][OxO7719[24]]).toLowerCase()){case OxO7719[15]:selectedObject=box1;break ;;case OxO7719[16]:selectedObject=box2;break ;;case OxO7719[17]:selectedObject=box3;break ;;case OxO7719[18]:selectedObject=box4;break ;;case OxO7719[19]:selectedObject=box5;break ;;case OxO7719[20]:selectedObject=box6;break ;;case OxO7719[21]:selectedObject=box7;break ;;case OxO7719[22]:selectedObject=box8;break ;;case OxO7719[23]:selectedObject=box9;break ;;default:selectedObject=box1;break ;;} ;selectedObject[OxO7719[25]][OxO7719[26]]=OxO7719[27];if(element[OxO7719[25]][OxO7719[28]]==OxO7719[29]){inp_src[OxO7719[30]]=OxO7719[29];CustomBullet[OxO7719[25]][OxO7719[31]]=OxO7719[32];} else {var Ox120;Ox120=element[OxO7719[25]][OxO7719[28]];Ox120=Ox120.substring(4,Ox120[OxO7719[33]]-1);inp_src[OxO7719[30]]=Ox120;} ;} ;SyncTo=function SyncTo_LI(element){switch(selectedObject){case box1:;case box2:;case box3:;case box4:;case box5:;case box6:try{element.setAttribute(OxO7719[34],inp_start.value);} catch(er){} ;break ;;case box7:;case box8:;case box9:break ;;} ;if(inp_src[OxO7719[30]]){element[OxO7719[25]][OxO7719[28]]=OxO7719[35]+inp_src[OxO7719[30]]+OxO7719[36];} ;} ;function ToggleCustomBullet(){if(CustomBullet[OxO7719[25]][OxO7719[31]]==OxO7719[32]){CustomBullet[OxO7719[25]][OxO7719[31]]=OxO7719[37];} else {CustomBullet[OxO7719[25]][OxO7719[31]]=OxO7719[32];} ;} ;function doClick1(Ox36e){if(element[OxO7719[12]]==OxO7719[13]){element=element[OxO7719[14]];} ;selectedObject=Ox36e;switch(selectedObject){case box1:element[OxO7719[25]][OxO7719[24]]=OxO7719[15];break ;;case box2:element[OxO7719[25]][OxO7719[24]]=OxO7719[16];break ;;case box3:element[OxO7719[25]][OxO7719[24]]=OxO7719[17];break ;;case box4:element[OxO7719[25]][OxO7719[24]]=OxO7719[18];break ;;case box5:element[OxO7719[25]][OxO7719[24]]=OxO7719[19];break ;;case box6:element[OxO7719[25]][OxO7719[24]]=OxO7719[20];break ;;case box7:element[OxO7719[25]][OxO7719[24]]=OxO7719[21];break ;;case box8:element[OxO7719[25]][OxO7719[24]]=OxO7719[22];break ;;case box9:element[OxO7719[25]][OxO7719[24]]=OxO7719[23];break ;;} ;var Ox7a=false;switch(selectedObject){case box1:;case box2:;case box3:;case box4:;case box5:;case box6:if(OriginalnodeName==OxO7719[38]){OriginalnodeName=OxO7719[39];Ox7a=true;} ;break ;;case box7:;case box8:;case box9:if(OriginalnodeName==OxO7719[39]){OriginalnodeName=OxO7719[38];Ox7a=true;} ;break ;;} ;if(Ox7a){var Ox585=editwin[OxO7719[40]].createElement(OriginalnodeName);while(element[OxO7719[41]]){Ox585.appendChild(element.firstChild);} ;element[OxO7719[14]].insertBefore(Ox585,element);element[OxO7719[14]].removeChild(element);var arg=Window_FindDialogArguments(window);arg[OxO7719[42]]=element=Ox585;} ;box1[OxO7719[25]][OxO7719[26]]=OxO7719[43];box2[OxO7719[25]][OxO7719[26]]=OxO7719[43];box3[OxO7719[25]][OxO7719[26]]=OxO7719[43];box4[OxO7719[25]][OxO7719[26]]=OxO7719[43];box5[OxO7719[25]][OxO7719[26]]=OxO7719[43];box6[OxO7719[25]][OxO7719[26]]=OxO7719[43];box7[OxO7719[25]][OxO7719[26]]=OxO7719[43];box8[OxO7719[25]][OxO7719[26]]=OxO7719[43];box9[OxO7719[25]][OxO7719[26]]=OxO7719[43];selectedObject[OxO7719[25]][OxO7719[26]]=OxO7719[27];inp_src[OxO7719[30]]=OxO7719[29];SyncTo();} ;function doMouseOut(Ox36e){if(Ox36e==selectedObject){Ox36e[OxO7719[25]][OxO7719[26]]=OxO7719[27];} else {Ox36e[OxO7719[25]][OxO7719[26]]=OxO7719[43];} ;} ;function doMouseOver(Ox36e){Ox36e[OxO7719[25]][OxO7719[26]]=OxO7719[44];} ;btnbrowse[OxO7719[45]]=function btnbrowse_onclick(){function Ox35c(Ox13e){if(Ox13e){inp_src[OxO7719[30]]=Ox13e;SyncTo(element);} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox35c,inp_src.value,inp_src);} else {editor.ShowSelectImageDialog(Ox35c,inp_src.value);} ;} ;
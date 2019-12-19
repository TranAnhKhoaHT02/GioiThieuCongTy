var OxOf702=["onerror","onload","onclick","btnCancel","btnOK","onkeyup","txtHSB_Hue","onkeypress","txtHSB_Saturation","txtHSB_Brightness","txtRGB_Red","txtRGB_Green","txtRGB_Blue","txtHex","btnWebSafeColor","rdoHSB_Hue","rdoHSB_Saturation","rdoHSB_Brightness","rdoRGB_Red","rdoRGB_Green","rdoRGB_Blue","onmousemove","onmousedown","onmouseup","{format}","length","\x5C{","\x5C}","BadNumber","A number between {0} and {1} is required. Closest value inserted.","Title","Color Picker","SelectAColor","Select a color:","OKButton","OK","CancelButton","Cancel","AboutButton","About","Recent","WebSafeWarning","Warning: not a web safe color","WebSafeClick","Click to select web safe color","HsbHue","H:","HsbHueTooltip","Hue","HsbHueUnit","%","HsbSaturation","S:","HsbSaturationTooltip","Saturation","HsbSaturationUnit","HsbBrightness","B:","HsbBrightnessTooltip","Brightness","HsbBrightnessUnit","RgbRed","R:","RgbRedTooltip","Red","RgbGreen","G:","RgbGreenTooltip","Green","RgbBlue","RgbBlueTooltip","Blue","Hex","#","RecentTooltip","Recent:","\x0D\x0ALewies Color Pickerversion 1.1\x0D\x0A\x0D\x0AThis form was created by Lewis Moten in May of 2004.\x0D\x0AIt simulates the color picker in a popular graphics application.\x0D\x0AIt gives users a visual way to choose colors from a large and dynamic palette.\x0D\x0A\x0D\x0AVisit the authors web page?\x0D\x0Awww.lewismoten.com\x0D\x0A","UNDEFINED","FFFFFF","value","checked","ColorMode","ColorType","RecentColors","","pnlRecent","all","border","style","0px","backgroundColor","srcElement","display","none","title","innerHTML","backgroundPosition","px ","px","000000","zIndex","01234567879","keyCode","abcdef","01234567879ABCDEF","closeeditordialog","close","returnValue","0123456789ABCDEFabcdef","0","id","pnlGradient_Top","pnlVertical_Top","top","opacity","filters","backgroundImage","url(Load.ashx?type=image\x26file=cpie_GradientPositionDark.gif)","url(Load.ashx?type=image\x26file=cpie_GradientPositionLight.gif)","cancelBubble","clientX","clientY","className","GradientNormal","button","GradientFullScreen","=","; path=/;"," expires=",";","cookie","00336699CCFF","0x","do_select","frm","__cphex"];var POSITIONADJUSTX=21;var POSITIONADJUSTY=46;var POSITIONADJUSTZ=43;var msg= new Object();window[OxOf702[0]]=alert;var ColorMode=1;var GradientPositionDark= new Boolean(false);var frm= new Object();window[OxOf702[1]]=window_load;function initialize(){frm[OxOf702[3]][OxOf702[2]]=btnCancel_Click;frm[OxOf702[4]][OxOf702[2]]=btnOK_Click;frm[OxOf702[6]][OxOf702[5]]=Hsb_Changed;frm[OxOf702[6]][OxOf702[7]]=validateNumber;frm[OxOf702[8]][OxOf702[5]]=Hsb_Changed;frm[OxOf702[8]][OxOf702[7]]=validateNumber;frm[OxOf702[9]][OxOf702[5]]=Hsb_Changed;frm[OxOf702[9]][OxOf702[7]]=validateNumber;frm[OxOf702[10]][OxOf702[5]]=Rgb_Changed;frm[OxOf702[10]][OxOf702[7]]=validateNumber;frm[OxOf702[11]][OxOf702[5]]=Rgb_Changed;frm[OxOf702[11]][OxOf702[7]]=validateNumber;frm[OxOf702[12]][OxOf702[5]]=Rgb_Changed;frm[OxOf702[12]][OxOf702[7]]=validateNumber;frm[OxOf702[13]][OxOf702[5]]=Hex_Changed;frm[OxOf702[13]][OxOf702[7]]=validateHex;frm[OxOf702[14]][OxOf702[2]]=btnWebSafeColor_Click;frm[OxOf702[15]][OxOf702[2]]=rdoHsb_Hue_Click;frm[OxOf702[16]][OxOf702[2]]=rdoHsb_Saturation_Click;frm[OxOf702[17]][OxOf702[2]]=rdoHsb_Brightness_Click;frm[OxOf702[18]][OxOf702[2]]=rdoRgb_Red_Click;frm[OxOf702[19]][OxOf702[2]]=rdoRgb_Green_Click;frm[OxOf702[20]][OxOf702[2]]=rdoRgb_Blue_Click;pnlGradient_Top[OxOf702[2]]=pnlGradient_Top_Click;pnlGradient_Top[OxOf702[21]]=pnlGradient_Top_MouseMove;pnlGradient_Top[OxOf702[22]]=pnlGradient_Top_MouseDown;pnlGradient_Top[OxOf702[23]]=pnlGradient_Top_MouseUp;pnlVertical_Top[OxOf702[2]]=pnlVertical_Top_Click;pnlVertical_Top[OxOf702[21]]=pnlVertical_Top_MouseMove;pnlVertical_Top[OxOf702[22]]=pnlVertical_Top_MouseDown;pnlVertical_Top[OxOf702[23]]=pnlVertical_Top_MouseUp;pnlWebSafeColor[OxOf702[2]]=btnWebSafeColor_Click;pnlWebSafeColorBorder[OxOf702[2]]=btnWebSafeColor_Click;pnlOldColor[OxOf702[2]]=pnlOldClick_Click;lblHSB_Hue[OxOf702[2]]=rdoHsb_Hue_Click;lblHSB_Saturation[OxOf702[2]]=rdoHsb_Saturation_Click;lblHSB_Brightness[OxOf702[2]]=rdoHsb_Brightness_Click;lblRGB_Red[OxOf702[2]]=rdoRgb_Red_Click;lblRGB_Green[OxOf702[2]]=rdoRgb_Green_Click;lblRGB_Blue[OxOf702[2]]=rdoRgb_Blue_Click;pnlGradient_Top.focus();} ;function formatString(Ox2b1){if(!Ox2b1){return OxOf702[24];} ;for(var i=1;i<arguments[OxOf702[25]];i++){Ox2b1=Ox2b1.replace( new RegExp(OxOf702[26]+(i-1)+OxOf702[27]),arguments[i]);} ;return Ox2b1;} ;function AddValue(Ox11a,Ox4f){Ox4f=Ox4f.toLowerCase();for(var i=0;i<Ox11a[OxOf702[25]];i++){if(Ox11a[i]==Ox4f){return ;} ;} ;Ox11a[Ox11a[OxOf702[25]]]=Ox4f;} ;function SniffLanguage(Ox11){} ;function LoadLanguage(){msg[OxOf702[28]]=OxOf702[29];msg[OxOf702[30]]=OxOf702[31];msg[OxOf702[32]]=OxOf702[33];msg[OxOf702[34]]=OxOf702[35];msg[OxOf702[36]]=OxOf702[37];msg[OxOf702[38]]=OxOf702[39];msg[OxOf702[40]]=OxOf702[40];msg[OxOf702[41]]=OxOf702[42];msg[OxOf702[43]]=OxOf702[44];msg[OxOf702[45]]=OxOf702[46];msg[OxOf702[47]]=OxOf702[48];msg[OxOf702[49]]=OxOf702[50];msg[OxOf702[51]]=OxOf702[52];msg[OxOf702[53]]=OxOf702[54];msg[OxOf702[55]]=OxOf702[50];msg[OxOf702[56]]=OxOf702[57];msg[OxOf702[58]]=OxOf702[59];msg[OxOf702[60]]=OxOf702[50];msg[OxOf702[61]]=OxOf702[62];msg[OxOf702[63]]=OxOf702[64];msg[OxOf702[65]]=OxOf702[66];msg[OxOf702[67]]=OxOf702[68];msg[OxOf702[69]]=OxOf702[57];msg[OxOf702[70]]=OxOf702[71];msg[OxOf702[72]]=OxOf702[73];msg[OxOf702[74]]=OxOf702[75];msg[OxOf702[39]]=OxOf702[76];} ;function localize(){} ;function window_load(){frm=frmColorPicker;LoadLanguage();localize();initialize();var hex=OxOf702[77];if(hex==OxOf702[77]){hex=OxOf702[78];} ;if(hex[OxOf702[25]]==7){hex=hex.substr(1,6);} ;frm[OxOf702[13]][OxOf702[79]]=hex;Hex_Changed();hex=Form_Get_Hex();SetBg(pnlOldColor,hex);frm[OxOf702[82]][ new Number(GetCookie(OxOf702[81])||0)][OxOf702[80]]=true;ColorMode_Changed();var Ox2a7=GetCookie(OxOf702[83])||OxOf702[84];var Ox2b7=msg[OxOf702[74]];for(var i=1;i<33;i++){if(Ox2a7[OxOf702[25]]/6>=i){hex=Ox2a7.substr((i-1)*6,6);var Ox2b8=HexToRgb(hex);var title=formatString(msg.RecentTooltip,hex,Ox2b8[0],Ox2b8[1],Ox2b8[2]);SetBg(document[OxOf702[86]][OxOf702[85]+i],hex);SetTitle(document[OxOf702[86]][OxOf702[85]+i],title);document[OxOf702[86]][OxOf702[85]+i][OxOf702[2]]=pnlRecent_Click;} else {document[OxOf702[86]][OxOf702[85]+i][OxOf702[88]][OxOf702[87]]=OxOf702[89];} ;} ;} ;function pnlRecent_Click(){frm[OxOf702[13]][OxOf702[79]]=event[OxOf702[91]][OxOf702[88]][OxOf702[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function pnlOldClick_Click(){frm[OxOf702[13]][OxOf702[79]]=pnlOldColor[OxOf702[88]][OxOf702[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function rdoHsb_Hue_Click(){frm[OxOf702[15]][OxOf702[80]]=true;ColorMode_Changed();} ;function rdoHsb_Saturation_Click(){frm[OxOf702[16]][OxOf702[80]]=true;ColorMode_Changed();} ;function rdoHsb_Brightness_Click(){frm[OxOf702[17]][OxOf702[80]]=true;ColorMode_Changed();} ;function rdoRgb_Red_Click(){frm[OxOf702[18]][OxOf702[80]]=true;ColorMode_Changed();} ;function rdoRgb_Green_Click(){frm[OxOf702[19]][OxOf702[80]]=true;ColorMode_Changed();} ;function rdoRgb_Blue_Click(){frm[OxOf702[20]][OxOf702[80]]=true;ColorMode_Changed();} ;function Hide(){for(var i=0;i<arguments[OxOf702[25]];i++){arguments[i][OxOf702[88]][OxOf702[92]]=OxOf702[93];} ;} ;function Show(){for(var i=0;i<arguments[OxOf702[25]];i++){arguments[i][OxOf702[88]][OxOf702[92]]=OxOf702[84];} ;} ;function SetValue(){for(var i=0;i<arguments[OxOf702[25]];i+=2){arguments[i][OxOf702[79]]=arguments[i+1];} ;} ;function SetTitle(){for(var i=0;i<arguments[OxOf702[25]];i+=2){arguments[i][OxOf702[94]]=arguments[i+1];} ;} ;function SetHTML(){for(var i=0;i<arguments[OxOf702[25]];i+=2){arguments[i][OxOf702[95]]=arguments[i+1];} ;} ;function SetBg(){for(var i=0;i<arguments[OxOf702[25]];i+=2){arguments[i][OxOf702[88]][OxOf702[90]]=OxOf702[73]+arguments[i+1];} ;} ;function SetBgPosition(){for(var i=0;i<arguments[OxOf702[25]];i+=3){arguments[i][OxOf702[88]][OxOf702[96]]=arguments[i+1]+OxOf702[97]+arguments[i+2]+OxOf702[98];} ;} ;function ColorMode_Changed(){for(var i=0;i<6;i++){if(frm[OxOf702[82]][i][OxOf702[80]]){ColorMode=i;} ;} ;SetCookie(OxOf702[81],ColorMode,60*60*24*365);Hide(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background,pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);switch(ColorMode){case 0:Show(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background);Hsb_Changed();break ;;case 1:Show(pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxOf702[78],pnlGradientRgb_Overlay2,OxOf702[99]);pnlGradientRgb_Overlay1[OxOf702[88]][OxOf702[100]]=5;pnlGradientRgb_Overlay2[OxOf702[88]][OxOf702[100]]=6;Hsb_Changed();break ;;case 2:Show(pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxOf702[99],pnlGradientRgb_Overlay2,OxOf702[78]);pnlGradientRgb_Overlay1[OxOf702[88]][OxOf702[100]]=6;pnlGradientRgb_Overlay2[OxOf702[88]][OxOf702[100]]=5;Hsb_Changed();break ;;case 3:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,0,pnlGradientRgb_Invert,256,0);Rgb_Changed();break ;;case 4:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,0,256,pnlGradientRgb_Invert,0,256);Rgb_Changed();break ;;case 5:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,256,pnlGradientRgb_Invert,256,256);Rgb_Changed();break ;;default:break ;;} ;} ;function btnWebSafeColor_Click(){var Ox2b8=HexToRgb(frm[OxOf702[13]].value);Ox2b8=RgbToWebSafeRgb(Ox2b8);frm[OxOf702[13]][OxOf702[79]]=RgbToHex(Ox2b8);Hex_Changed();} ;function checkWebSafe(){var Ox2b8=Form_Get_Rgb();if(RgbIsWebSafe(Ox2b8)){Hide(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} else {Ox2b8=RgbToWebSafeRgb(Ox2b8);SetBg(pnlWebSafeColor,RgbToHex(Ox2b8));Show(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} ;} ;function validateNumber(){var Ox2cd=String.fromCharCode(event.keyCode);if(IgnoreKey()){return ;} ;if(OxOf702[101].indexOf(Ox2cd)!=-1){return ;} ;event[OxOf702[102]]=0;} ;function validateHex(){if(IgnoreKey()){return ;} ;var Ox2cd=String.fromCharCode(event.keyCode);if(OxOf702[103].indexOf(Ox2cd)!=-1){event[OxOf702[102]]=Ox2cd.toUpperCase().charCodeAt(0);return ;} ;if(OxOf702[104].indexOf(Ox2cd)!=-1){return ;} ;event[OxOf702[102]]=0;} ;function IgnoreKey(){var Ox2cd=String.fromCharCode(event.keyCode);var Ox2d0= new Array(0,8,9,13,27);if(Ox2cd==null){return true;} ;for(var i=0;i<5;i++){if(event[OxOf702[102]]==Ox2d0[i]){return true;} ;} ;return false;} ;function btnCancel_Click(){(top[OxOf702[105]]||top[OxOf702[106]])();} ;function btnOK_Click(){var hex= new String(frm[OxOf702[13]].value);try{window[OxOf702[107]]=hex;} catch(e){} ;recent=GetCookie(OxOf702[83])||OxOf702[84];for(var i=0;i<recent[OxOf702[25]];i+=6){if(recent.substr(i,6)==hex){recent=recent.substr(0,i)+recent.substr(i+6);i-=6;} ;} ;if(recent[OxOf702[25]]>31*6){recent=recent.substr(0,31*6);} ;recent=frm[OxOf702[13]][OxOf702[79]]+recent;SetCookie(OxOf702[83],recent,60*60*24*365);(top[OxOf702[105]]||top[OxOf702[106]])();} ;function SetGradientPosition(x,y){x=x-POSITIONADJUSTX+5;y=y-POSITIONADJUSTY+5;x-=7;y-=27;x=x<0?0:x>255?255:x;y=y<0?0:y>255?255:y;SetBgPosition(pnlGradientPosition,x-5,y-5);switch(ColorMode){case 0:var Ox2d4= new Array(0,0,0);Ox2d4[1]=x/255;Ox2d4[2]=1-(y/255);frm[OxOf702[8]][OxOf702[79]]=Math.round(Ox2d4[1]*100);frm[OxOf702[9]][OxOf702[79]]=Math.round(Ox2d4[2]*100);Hsb_Changed();break ;;case 1:var Ox2d4= new Array(0,0,0);Ox2d4[0]=x/255;Ox2d4[2]=1-(y/255);frm[OxOf702[6]][OxOf702[79]]=Ox2d4[0]==1?0:Math.round(Ox2d4[0]*360);frm[OxOf702[9]][OxOf702[79]]=Math.round(Ox2d4[2]*100);Hsb_Changed();break ;;case 2:var Ox2d4= new Array(0,0,0);Ox2d4[0]=x/255;Ox2d4[1]=1-(y/255);frm[OxOf702[6]][OxOf702[79]]=Ox2d4[0]==1?0:Math.round(Ox2d4[0]*360);frm[OxOf702[8]][OxOf702[79]]=Math.round(Ox2d4[1]*100);Hsb_Changed();break ;;case 3:var Ox2b8= new Array(0,0,0);Ox2b8[1]=255-y;Ox2b8[2]=x;frm[OxOf702[11]][OxOf702[79]]=Ox2b8[1];frm[OxOf702[12]][OxOf702[79]]=Ox2b8[2];Rgb_Changed();break ;;case 4:var Ox2b8= new Array(0,0,0);Ox2b8[0]=255-y;Ox2b8[2]=x;frm[OxOf702[10]][OxOf702[79]]=Ox2b8[0];frm[OxOf702[12]][OxOf702[79]]=Ox2b8[2];Rgb_Changed();break ;;case 5:var Ox2b8= new Array(0,0,0);Ox2b8[0]=x;Ox2b8[1]=255-y;frm[OxOf702[10]][OxOf702[79]]=Ox2b8[0];frm[OxOf702[11]][OxOf702[79]]=Ox2b8[1];Rgb_Changed();break ;;} ;} ;function Hex_Changed(){var hex=Form_Get_Hex();var Ox2b8=HexToRgb(hex);var Ox2d4=RgbToHsb(Ox2b8);Form_Set_Rgb(Ox2b8);Form_Set_Hsb(Ox2d4);SetBg(pnlNewColor,hex);SetupCursors();SetupGradients();checkWebSafe();} ;function Rgb_Changed(){var Ox2b8=Form_Get_Rgb();var Ox2d4=RgbToHsb(Ox2b8);var hex=RgbToHex(Ox2b8);Form_Set_Hsb(Ox2d4);Form_Set_Hex(hex);SetBg(pnlNewColor,hex);SetupCursors();SetupGradients();checkWebSafe();} ;function Hsb_Changed(){var Ox2d4=Form_Get_Hsb();var Ox2b8=HsbToRgb(Ox2d4);var hex=RgbToHex(Ox2b8);Form_Set_Rgb(Ox2b8);Form_Set_Hex(hex);SetBg(pnlNewColor,hex);SetupCursors();SetupGradients();checkWebSafe();} ;function Form_Set_Hex(hex){frm[OxOf702[13]][OxOf702[79]]=hex;} ;function Form_Get_Hex(){var hex= new String(frm[OxOf702[13]].value);for(var i=0;i<hex[OxOf702[25]];i++){if(OxOf702[108].indexOf(hex.substr(i,1))==-1){hex=OxOf702[99];frm[OxOf702[13]][OxOf702[79]]=hex;alert(formatString(msg.BadNumber,OxOf702[99],OxOf702[78]));break ;} ;} ;while(hex[OxOf702[25]]<6){hex=OxOf702[109]+hex;} ;return hex;} ;function Form_Get_Hsb(){var Ox2d4= new Array(0,0,0);Ox2d4[0]= new Number(frm[OxOf702[6]].value)/360;Ox2d4[1]= new Number(frm[OxOf702[8]].value)/100;Ox2d4[2]= new Number(frm[OxOf702[9]].value)/100;if(Ox2d4[0]>1||isNaN(Ox2d4[0])){Ox2d4[0]=1;frm[OxOf702[6]][OxOf702[79]]=360;alert(formatString(msg.BadNumber,0,360));} ;if(Ox2d4[1]>1||isNaN(Ox2d4[1])){Ox2d4[1]=1;frm[OxOf702[8]][OxOf702[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;if(Ox2d4[2]>1||isNaN(Ox2d4[2])){Ox2d4[2]=1;frm[OxOf702[9]][OxOf702[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;return Ox2d4;} ;function Form_Set_Hsb(Ox2d4){SetValue(frm.txtHSB_Hue,Math.round(Ox2d4[0]*360),frm.txtHSB_Saturation,Math.round(Ox2d4[1]*100),frm.txtHSB_Brightness,Math.round(Ox2d4[2]*100));} ;function Form_Get_Rgb(){var Ox2b8= new Array(0,0,0);Ox2b8[0]= new Number(frm[OxOf702[10]].value);Ox2b8[1]= new Number(frm[OxOf702[11]].value);Ox2b8[2]= new Number(frm[OxOf702[12]].value);if(Ox2b8[0]>255||isNaN(Ox2b8[0])||Ox2b8[0]!=Math.round(Ox2b8[0])){Ox2b8[0]=255;frm[OxOf702[10]][OxOf702[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox2b8[1]>255||isNaN(Ox2b8[1])||Ox2b8[1]!=Math.round(Ox2b8[1])){Ox2b8[1]=255;frm[OxOf702[11]][OxOf702[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox2b8[2]>255||isNaN(Ox2b8[2])||Ox2b8[2]!=Math.round(Ox2b8[2])){Ox2b8[2]=255;frm[OxOf702[12]][OxOf702[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;return Ox2b8;} ;function Form_Set_Rgb(Ox2b8){frm[OxOf702[10]][OxOf702[79]]=Ox2b8[0];frm[OxOf702[11]][OxOf702[79]]=Ox2b8[1];frm[OxOf702[12]][OxOf702[79]]=Ox2b8[2];} ;function SetupCursors(){var Ox2d4=Form_Get_Hsb();var Ox2b8=Form_Get_Rgb();if(RgbToYuv(Ox2b8)[0]>=0.5){SetGradientPositionDark();} else {SetGradientPositionLight();} ;if(event[OxOf702[91]]!=null){if(event[OxOf702[91]][OxOf702[110]]==OxOf702[111]){return ;} ;if(event[OxOf702[91]][OxOf702[110]]==OxOf702[112]){return ;} ;} ;var x;var y;var z;if(ColorMode>=0&&ColorMode<=2){for(var i=0;i<3;i++){Ox2d4[i]*=255;} ;} ;switch(ColorMode){case 0:x=Ox2d4[1];y=Ox2d4[2];z=Ox2d4[0]==0?1:Ox2d4[0];break ;;case 1:x=Ox2d4[0]==0?1:Ox2d4[0];y=Ox2d4[2];z=Ox2d4[1];break ;;case 2:x=Ox2d4[0]==0?1:Ox2d4[0];y=Ox2d4[1];z=Ox2d4[2];break ;;case 3:x=Ox2b8[2];y=Ox2b8[1];z=Ox2b8[0];break ;;case 4:x=Ox2b8[2];y=Ox2b8[0];z=Ox2b8[1];break ;;case 5:x=Ox2b8[0];y=Ox2b8[1];z=Ox2b8[2];break ;;} ;y=255-y;z=255-z;SetBgPosition(pnlGradientPosition,x-5,y-5);pnlVerticalPosition[OxOf702[88]][OxOf702[113]]=(z+27)+OxOf702[98];} ;function SetupGradients(){var Ox2d4=Form_Get_Hsb();var Ox2b8=Form_Get_Rgb();switch(ColorMode){case 0:SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox2d4[0])));break ;;case 1:var b= new Array();for(var i=0;i<3;i++){b[i]=Math.round(Ox2d4[2]*255);} ;SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox2d4[0])),pnlVerticalHsbSaturation_Hue,RgbToHex(HsbToRgb( new Array(Ox2d4[0],1,Ox2d4[2]))),pnlVerticalHsbSaturation_White,RgbToHex(b));pnlGradientRgb_Overlay1[OxOf702[115]][0][OxOf702[114]]=(100-Math.round(Ox2d4[1]*100));break ;;case 2:SetBg(pnlVerticalHsbBrightness_Hue,RgbToHex(HsbToRgb( new Array(Ox2d4[0],Ox2d4[1],1))));pnlGradientRgb_Overlay1[OxOf702[115]][0][OxOf702[114]]=(100-Math.round(Ox2d4[2]*100));break ;;case 3:pnlGradientRgb_Invert[OxOf702[115]][3][OxOf702[114]]=100-Math.round((Ox2b8[0]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(0xFF,Ox2b8[1],Ox2b8[2])),pnlVerticalRgb_End,RgbToHex( new Array(0x00,Ox2b8[1],Ox2b8[2])));break ;;case 4:pnlGradientRgb_Invert[OxOf702[115]][3][OxOf702[114]]=100-Math.round((Ox2b8[1]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox2b8[0],0xFF,Ox2b8[2])),pnlVerticalRgb_End,RgbToHex( new Array(Ox2b8[0],0x00,Ox2b8[2])));break ;;case 5:pnlGradientRgb_Invert[OxOf702[115]][3][OxOf702[114]]=100-Math.round((Ox2b8[2]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox2b8[0],Ox2b8[1],0xFF)),pnlVerticalRgb_End,RgbToHex( new Array(Ox2b8[0],Ox2b8[1],0x00)));break ;;default:;} ;} ;function SetGradientPositionDark(){if(GradientPositionDark){return ;} ;GradientPositionDark=true;pnlGradientPosition[OxOf702[88]][OxOf702[116]]=OxOf702[117];} ;function SetGradientPositionLight(){if(!GradientPositionDark){return ;} ;GradientPositionDark=false;pnlGradientPosition[OxOf702[88]][OxOf702[116]]=OxOf702[118];} ;function pnlGradient_Top_Click(){event[OxOf702[119]]=true;SetGradientPosition(event[OxOf702[120]]-5,event[OxOf702[121]]-5);pnlGradient_Top[OxOf702[122]]=OxOf702[123];} ;function pnlGradient_Top_MouseMove(){event[OxOf702[119]]=true;if(event[OxOf702[124]]!=1){return ;} ;SetGradientPosition(event[OxOf702[120]]-5,event[OxOf702[121]]-5);} ;function pnlGradient_Top_MouseDown(){event[OxOf702[119]]=true;SetGradientPosition(event[OxOf702[120]]-5,event[OxOf702[121]]-5);pnlGradient_Top[OxOf702[122]]=OxOf702[125];} ;function pnlGradient_Top_MouseUp(){event[OxOf702[119]]=true;SetGradientPosition(event[OxOf702[120]]-5,event[OxOf702[121]]-5);pnlGradient_Top[OxOf702[122]]=OxOf702[123];} ;function Document_MouseUp(){event[OxOf702[119]]=true;pnlGradient_Top[OxOf702[122]]=OxOf702[123];} ;function SetVerticalPosition(z){var z=z-POSITIONADJUSTZ;if(z<27){z=27;} ;if(z>282){z=282;} ;pnlVerticalPosition[OxOf702[88]][OxOf702[113]]=z+OxOf702[98];z=1-((z-27)/255);switch(ColorMode){case 0:if(z==1){z=0;} ;frm[OxOf702[6]][OxOf702[79]]=Math.round(z*360);Hsb_Changed();break ;;case 1:frm[OxOf702[8]][OxOf702[79]]=Math.round(z*100);Hsb_Changed();break ;;case 2:frm[OxOf702[9]][OxOf702[79]]=Math.round(z*100);Hsb_Changed();break ;;case 3:frm[OxOf702[10]][OxOf702[79]]=Math.round(z*255);Rgb_Changed();break ;;case 4:frm[OxOf702[11]][OxOf702[79]]=Math.round(z*255);Rgb_Changed();break ;;case 5:frm[OxOf702[12]][OxOf702[79]]=Math.round(z*255);Rgb_Changed();break ;;} ;} ;function pnlVertical_Top_Click(){SetVerticalPosition(event[OxOf702[121]]-5);event[OxOf702[119]]=true;} ;function pnlVertical_Top_MouseMove(){if(event[OxOf702[124]]!=1){return ;} ;SetVerticalPosition(event[OxOf702[121]]-5);event[OxOf702[119]]=true;} ;function pnlVertical_Top_MouseDown(){SetVerticalPosition(event[OxOf702[121]]-5);event[OxOf702[119]]=true;} ;function pnlVertical_Top_MouseUp(){SetVerticalPosition(event[OxOf702[121]]-5);event[OxOf702[119]]=true;} ;function SetCookie(name,Ox4f,Ox56){var Ox57=name+OxOf702[126]+escape(Ox4f)+OxOf702[127];if(Ox56){var Ox58= new Date();Ox58.setSeconds(Ox58.getSeconds()+Ox56);Ox57+=OxOf702[128]+Ox58.toUTCString()+OxOf702[129];} ;document[OxOf702[130]]=Ox57;} ;function GetCookie(name){var Ox5a=document[OxOf702[130]].split(OxOf702[129]);for(var i=0;i<Ox5a[OxOf702[25]];i++){var Ox5b=Ox5a[i].split(OxOf702[126]);if(name==Ox5b[0].replace(/\s/g,OxOf702[84])){return unescape(Ox5b[1]);} ;} ;} ;function GetCookieDictionary(){var Ox12b={};var Ox5a=document[OxOf702[130]].split(OxOf702[129]);for(var i=0;i<Ox5a[OxOf702[25]];i++){var Ox5b=Ox5a[i].split(OxOf702[126]);Ox12b[Ox5b[0].replace(/\s/g,OxOf702[84])]=unescape(Ox5b[1]);} ;return Ox12b;} ;function RgbIsWebSafe(Ox2b8){var hex=RgbToHex(Ox2b8);for(var i=0;i<3;i++){if(OxOf702[131].indexOf(hex.substr(i*2,2))==-1){return false;} ;} ;return true;} ;function RgbToWebSafeRgb(Ox2b8){var Ox2ee= new Array(Ox2b8[0],Ox2b8[1],Ox2b8[2]);if(RgbIsWebSafe(Ox2b8)){return Ox2ee;} ;var Ox2ef= new Array(0x00,0x33,0x66,0x99,0xCC,0xFF);for(var i=0;i<3;i++){for(var Ox25=1;Ox25<6;Ox25++){if(Ox2ee[i]>Ox2ef[Ox25-1]&&Ox2ee[i]<Ox2ef[Ox25]){if(Ox2ee[i]-Ox2ef[Ox25-1]>Ox2ef[Ox25]-Ox2ee[i]){Ox2ee[i]=Ox2ef[Ox25];} else {Ox2ee[i]=Ox2ef[Ox25-1];} ;break ;} ;} ;} ;return Ox2ee;} ;function RgbToYuv(Ox2b8){var Ox2f1= new Array();Ox2f1[0]=(Ox2b8[0]*0.299+Ox2b8[1]*0.587+Ox2b8[2]*0.114)/255;Ox2f1[1]=(Ox2b8[0]*-0.169+Ox2b8[1]*-0.332+Ox2b8[2]*0.500+128)/255;Ox2f1[2]=(Ox2b8[0]*0.500+Ox2b8[1]*-0.419+Ox2b8[2]*-0.0813+128)/255;return Ox2f1;} ;function RgbToHsb(Ox2b8){var Ox2f3= new Array(Ox2b8[0],Ox2b8[1],Ox2b8[2]);var Ox2f4= new Number(1);var Ox2f5= new Number(0);var Ox2f6= new Number(1);var Ox2d4= new Array(0,0,0);var Ox2f7= new Array();for(var i=0;i<3;i++){Ox2f3[i]=Ox2b8[i]/255;if(Ox2f3[i]<Ox2f4){Ox2f4=Ox2f3[i];} ;if(Ox2f3[i]>Ox2f5){Ox2f5=Ox2f3[i];} ;} ;Ox2f6=Ox2f5-Ox2f4;Ox2d4[2]=Ox2f5;if(Ox2f6==0){return Ox2d4;} ;Ox2d4[1]=Ox2f6/Ox2f5;for(var i=0;i<3;i++){Ox2f7[i]=(((Ox2f5-Ox2f3[i])/6)+(Ox2f6/2))/Ox2f6;} ;if(Ox2f3[0]==Ox2f5){Ox2d4[0]=Ox2f7[2]-Ox2f7[1];} else {if(Ox2f3[1]==Ox2f5){Ox2d4[0]=(1/3)+Ox2f7[0]-Ox2f7[2];} else {if(Ox2f3[2]==Ox2f5){Ox2d4[0]=(2/3)+Ox2f7[1]-Ox2f7[0];} ;} ;} ;if(Ox2d4[0]<0){Ox2d4[0]+=1;} else {if(Ox2d4[0]>1){Ox2d4[0]-=1;} ;} ;return Ox2d4;} ;function HsbToRgb(Ox2d4){var Ox2b8=HueToRgb(Ox2d4[0]);var Ox120=Ox2d4[2]*255;for(var i=0;i<3;i++){Ox2b8[i]=Ox2b8[i]*Ox2d4[2];Ox2b8[i]=((Ox2b8[i]-Ox120)*Ox2d4[1])+Ox120;Ox2b8[i]=Math.round(Ox2b8[i]);} ;return Ox2b8;} ;function RgbToHex(Ox2b8){var hex= new String();for(var i=0;i<3;i++){Ox2b8[2-i]=Math.round(Ox2b8[2-i]);hex=Ox2b8[2-i].toString(16)+hex;if(hex[OxOf702[25]]%2==1){hex=OxOf702[109]+hex;} ;} ;return hex.toUpperCase();} ;function HexToRgb(hex){var Ox2b8= new Array();for(var i=0;i<3;i++){Ox2b8[i]= new Number(OxOf702[132]+hex.substr(i*2,2));} ;return Ox2b8;} ;function HueToRgb(Ox2fc){var Ox2fd=Ox2fc*360;var Ox2b8= new Array(0,0,0);var Ox2fe=(Ox2fd%60)/60;if(Ox2fd<60){Ox2b8[0]=255;Ox2b8[1]=Ox2fe*255;} else {if(Ox2fd<120){Ox2b8[1]=255;Ox2b8[0]=(1-Ox2fe)*255;} else {if(Ox2fd<180){Ox2b8[1]=255;Ox2b8[2]=Ox2fe*255;} else {if(Ox2fd<240){Ox2b8[2]=255;Ox2b8[1]=(1-Ox2fe)*255;} else {if(Ox2fd<300){Ox2b8[2]=255;Ox2b8[0]=Ox2fe*255;} else {if(Ox2fd<360){Ox2b8[0]=255;Ox2b8[2]=(1-Ox2fe)*255;} ;} ;} ;} ;} ;} ;return Ox2b8;} ;function CheckHexSelect(){if(window[OxOf702[133]]&&window[OxOf702[134]]&&frm[OxOf702[13]]){var Oxdc=OxOf702[73]+frm[OxOf702[13]][OxOf702[79]];if(Oxdc[OxOf702[25]]==7){if(window[OxOf702[135]]!=Oxdc){window[OxOf702[135]]=Oxdc;window.do_select(Oxdc);} ;} ;} ;} ;setInterval(CheckHexSelect,10);
var OxOc274=["is_spring_image","1","gid","zIndex","style","srcImg","documentElement","body","getBoundingClientRect","left","top","getBoxObjectFor","x","y","offsetWidth","offsetHeight","offsetLeft","offsetTop","offsetParent","R","width","px","height","M","spring_expand(\x27","id","\x27)","lastActiveElement","spring_collapse(\x27","display","none","parentNode","block","hidetip","src","url","className","spring_image_popup","void(0)","expand","collapse","onmouseout","onmouseover","onclick","tooltip","click","prototype","MouseEvents","ownerDocument","addEventListener","scroll","attachEvent","onscroll"];function hidetip(){} ;function render_spring_image(Ox29){var Ox323;if(Ox29.getAttribute(OxOc274[0])==OxOc274[1]){return ;} ;Ox29.setAttribute(OxOc274[0],OxOc274[1]);render_spring_image[OxOc274[2]]=render_spring_image[OxOc274[2]]||1;render_spring_image[OxOc274[2]]++;function Ox324(){clearTimeout(this.M);render_spring_image[OxOc274[2]]++;this[OxOc274[4]][OxOc274[3]]=1000000+render_spring_image[OxOc274[2]];var Ox325=this[OxOc274[5]];var Ox326,Ox327,Ox328,Ox329;Ox328=Math.max(document[OxOc274[6]].scrollTop,document[OxOc274[7]].scrollTop);Ox329=Math.max(document[OxOc274[6]].scrollLeft,document[OxOc274[7]].scrollLeft);if(Ox325[OxOc274[8]]){Ox326=Ox325.getBoundingClientRect()[OxOc274[9]];Ox327=Ox325.getBoundingClientRect()[OxOc274[10]];} else {if(document[OxOc274[11]]){Ox326=document.getBoxObjectFor(Ox325)[OxOc274[12]]-Ox329;Ox327=document.getBoxObjectFor(Ox325)[OxOc274[13]]-Ox328;} else {var Ox32a=Ox32b(Ox325);Ox326=Ox32a[OxOc274[12]]-Ox329;Ox327=Ox32a[OxOc274[13]]-Ox328;} ;} ;function Ox32b(element){var Ox32a={x:0,y:0,width:element[OxOc274[14]],height:element[OxOc274[15]]};while(element){Ox32a[OxOc274[12]]+=element[OxOc274[16]];Ox32a[OxOc274[13]]+=element[OxOc274[17]];element=element[OxOc274[18]];} ;return Ox32a;} ;if(this[OxOc274[19]]<1.35){this[OxOc274[19]]+=0.1;this[OxOc274[4]][OxOc274[20]]=Math.floor(Ox325[OxOc274[14]]*this[OxOc274[19]])+OxOc274[21];this[OxOc274[4]][OxOc274[22]]=Math.floor(Ox325[OxOc274[15]]*this[OxOc274[19]])+OxOc274[21];Ox327=Math.floor(Ox327+Ox328-(this[OxOc274[14]]-Ox325[OxOc274[14]])/2)+OxOc274[21];;;Ox326=Math.floor(Ox326+Ox329-(this[OxOc274[15]]-Ox325[OxOc274[15]])/2)+OxOc274[21];this[OxOc274[4]][OxOc274[10]]=Ox327;this[OxOc274[4]][OxOc274[9]]=Ox326;this[OxOc274[23]]=setTimeout(OxOc274[24]+this[OxOc274[25]]+OxOc274[26],20);} else {if(render_spring_image[OxOc274[27]]!=this){this[OxOc274[23]]=setTimeout(OxOc274[28]+this[OxOc274[25]]+OxOc274[26],20);} ;} ;} ;function Ox32c(){clearTimeout(this.M);var Ox325=this[OxOc274[5]];var Ox326,Ox327,Ox328,Ox329;Ox328=Math.max(document[OxOc274[6]].scrollTop,document[OxOc274[7]].scrollTop);Ox329=Math.max(document[OxOc274[6]].scrollLeft,document[OxOc274[7]].scrollLeft);if(Ox325[OxOc274[8]]){Ox326=Ox325.getBoundingClientRect()[OxOc274[9]];Ox327=Ox325.getBoundingClientRect()[OxOc274[10]];} else {if(document[OxOc274[11]]){Ox326=document.getBoxObjectFor(Ox325)[OxOc274[12]]-Ox329;Ox327=document.getBoxObjectFor(Ox325)[OxOc274[13]]-Ox328;} ;} ;if(this[OxOc274[19]]>1){this[OxOc274[19]]-=0.1;this[OxOc274[4]][OxOc274[20]]=Math.ceil(Ox325[OxOc274[14]]*this[OxOc274[19]])+OxOc274[21];this[OxOc274[4]][OxOc274[22]]=Math.ceil(Ox325[OxOc274[15]]*this[OxOc274[19]])+OxOc274[21];Ox327=Math.ceil(Ox327+Ox328-(this[OxOc274[14]]-Ox325[OxOc274[14]])/2)+OxOc274[21];;;Ox326=Math.ceil(Ox326+Ox329-(this[OxOc274[15]]-Ox325[OxOc274[15]])/2)+OxOc274[21];this[OxOc274[4]][OxOc274[10]]=Ox327;this[OxOc274[4]][OxOc274[9]]=Ox326;this[OxOc274[23]]=setTimeout(OxOc274[28]+this[OxOc274[25]]+OxOc274[26],0);} else {this[OxOc274[4]][OxOc274[29]]=OxOc274[30];} ;} ;function Ox32d(){var Ox32e=Ox323;if(Ox32e[OxOc274[31]]==null){document[OxOc274[7]].appendChild(Ox32e);} ;if((render_spring_image[OxOc274[27]]!=null)&&(render_spring_image[OxOc274[27]]!=this)){render_spring_image[OxOc274[27]][OxOc274[23]]=setTimeout(OxOc274[28]+render_spring_image[OxOc274[27]][OxOc274[25]]+OxOc274[26],0);} ;render_spring_image[OxOc274[27]]=Ox32e;Ox32e[OxOc274[4]][OxOc274[29]]=OxOc274[32];Ox32e.expand();} ;function Ox32f(){try{if(window[OxOc274[33]]){hidetip();} ;this.collapse();} catch(x){} ;} ;Ox323= new Image();Ox323[OxOc274[34]]=Ox29.getAttribute(OxOc274[35])||Ox29[OxOc274[34]];Ox323[OxOc274[36]]=OxOc274[37];Ox323[OxOc274[25]]=OxOc274[37]+render_spring_image[OxOc274[2]];Ox323[OxOc274[23]]=setTimeout(OxOc274[38],0);Ox323[OxOc274[19]]=1;Ox323[OxOc274[5]]=Ox29;Ox323[OxOc274[39]]=Ox324;Ox323[OxOc274[40]]=Ox32c;Ox323[OxOc274[41]]=Ox32f;Ox323[OxOc274[42]]=Ox330;Ox323[OxOc274[43]]=function (){insert(Ox29.getAttribute(OxOc274[35]));} ;function Ox330(){var Ox331=Ox29.getAttribute(OxOc274[44]);showTooltip(Ox331,this);} ;try{Ox29[OxOc274[42]]=Ox32d;} catch(x){} ;} ;if(document[OxOc274[11]]!=null){HTMLElement[OxOc274[46]][OxOc274[45]]=function (){var Ox332=this[OxOc274[48]].createEvent(OxOc274[47]);Ox332.initMouseEvent(OxOc274[45],true,true,this[OxOc274[48]].defaultView,1,0,0,0,0,false,false,false,false,0,null);this.dispatchEvent(Ox332);} ;} ;function spring_image_scrcoll(){render_spring_image[OxOc274[27]]=null;} ;if(window[OxOc274[49]]){window.addEventListener(OxOc274[50],spring_image_scrcoll,true);} else {if(window[OxOc274[51]]){window.attachEvent(OxOc274[52],spring_image_scrcoll);} ;} ;function spring_expand(Ox9a){var Ox29=document.getElementById(Ox9a);if(Ox29){Ox29.expand();} ;} ;function spring_collapse(Ox9a){var Ox29=document.getElementById(Ox9a);if(Ox29){Ox29.collapse();} ;} ;
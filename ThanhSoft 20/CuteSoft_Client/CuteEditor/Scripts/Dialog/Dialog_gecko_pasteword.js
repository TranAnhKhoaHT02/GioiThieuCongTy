var OxO8545=["onload","contentWindow","idSource","innerHTML","body","document","","designMode","on","contentEditable","fontFamily","style","Tahoma","fontSize","11px","color","black","background","white","length","\x22","\x3C$1$3"," ","\x26nbsp;","$1","\x3Ch$1\x3E","\x3C$1\x3E$2\x3C/$1\x3E"];var editor=Window_GetDialogArguments(window);function cancel(){Window_CloseDialog(window);} ;window[OxO8545[0]]=function (){var iframe=document.getElementById(OxO8545[2])[OxO8545[1]];iframe[OxO8545[5]][OxO8545[4]][OxO8545[3]]=OxO8545[6];iframe[OxO8545[5]][OxO8545[7]]=OxO8545[8];iframe[OxO8545[5]][OxO8545[4]][OxO8545[9]]=true;iframe[OxO8545[5]][OxO8545[4]][OxO8545[11]][OxO8545[10]]=OxO8545[12];iframe[OxO8545[5]][OxO8545[4]][OxO8545[11]][OxO8545[13]]=OxO8545[14];iframe[OxO8545[5]][OxO8545[4]][OxO8545[11]][OxO8545[15]]=OxO8545[16];iframe[OxO8545[5]][OxO8545[4]][OxO8545[11]][OxO8545[17]]=OxO8545[18];iframe.focus();} ;function insertContent(){var iframe=document.getElementById(OxO8545[2])[OxO8545[1]];var Oxce=iframe[OxO8545[5]][OxO8545[4]][OxO8545[3]];if(Oxce&&Oxce[OxO8545[19]]>0){editor.PasteHTML(_RemoveWord(Oxce));Window_CloseDialog(window);} ;} ;function _RemoveWord(Ox2d){Ox2d=Ox2d.replace(/<[\/]?(base|meta|link|style|font|st1|shape|path|lock|imagedata|stroke|formulas|xml|del|ins|[ovwxp]:\w+)[^>]*?>/gi,OxO8545[6]);Ox2d=Ox2d.replace(/\s*mso-[^:]+:[^;"]+;?/gi,OxO8545[6]);Ox2d=Ox2d.replace(/<!--[\s\S]*?-->/gi,OxO8545[6]);Ox2d=Ox2d.replace(/\s*MARGIN: 0cm 0cm 0pt\s*;/gi,OxO8545[6]);Ox2d=Ox2d.replace(/\s*MARGIN: 0cm 0cm 0pt\s*"/gi,OxO8545[20]);Ox2d=Ox2d.replace(/\s*TEXT-INDENT: 0cm\s*;/gi,OxO8545[6]);Ox2d=Ox2d.replace(/\s*TEXT-INDENT: 0cm\s*"/gi,OxO8545[20]);Ox2d=Ox2d.replace(/\s*TEXT-ALIGN: [^\s;]+;?"/gi,OxO8545[20]);Ox2d=Ox2d.replace(/\s*PAGE-BREAK-BEFORE: [^\s;]+;?"/gi,OxO8545[20]);Ox2d=Ox2d.replace(/\s*FONT-VARIANT: [^\s;]+;?"/gi,OxO8545[20]);Ox2d=Ox2d.replace(/\s*tab-stops:[^;"]*;?/gi,OxO8545[6]);Ox2d=Ox2d.replace(/\s*tab-stops:[^"]*/gi,OxO8545[6]);Ox2d=Ox2d.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi,OxO8545[21]);Ox2d=Ox2d.replace(/\s*style="\s*"/gi,OxO8545[6]);Ox2d=Ox2d.replace(/<SPAN\s*[^>]*>\s* \s*<\/SPAN>/gi,OxO8545[22]);Ox2d=Ox2d.replace(/<(\w+)[^>]*\sstyle="[^"]*DISPLAY\s?:\s?none(.*?)<\/\1>/ig,OxO8545[6]);Ox2d=Ox2d.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/gi,OxO8545[23]);Ox2d=Ox2d.replace(/<SPAN\s*[^>]*><\/SPAN>/gi,OxO8545[6]);Ox2d=Ox2d.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi,OxO8545[21]);Ox2d=Ox2d.replace(/<SPAN\s*>(.*?)<\/SPAN>/gi,OxO8545[24]);Ox2d=Ox2d.replace(/<\/?\w+:[^>]*>/gi,OxO8545[6]);Ox2d=Ox2d.replace(/<\!--.*?-->/g,OxO8545[6]);Ox2d=Ox2d.replace(/<H\d>\s*<\/H\d>/gi,OxO8545[6]);Ox2d=Ox2d.replace(/<(\w[^>]*) language=([^ |>]*)([^>]*)/gi,OxO8545[21]);Ox2d=Ox2d.replace(/<(\w[^>]*) onmouseover="([^\"]*)"([^>]*)/gi,OxO8545[21]);Ox2d=Ox2d.replace(/<(\w[^>]*) onmouseout="([^\"]*)"([^>]*)/gi,OxO8545[21]);Ox2d=Ox2d.replace(/<H(\d)([^>]*)>/gi,OxO8545[25]);Ox2d=Ox2d.replace(/<(H\d)><FONT[^>]*>(.*?)<\/FONT><\/\1>/gi,OxO8545[26]);Ox2d=Ox2d.replace(/<(H\d)><EM>(.*?)<\/EM><\/\1>/gi,OxO8545[26]);Ox2d=Ox2d.replace(/<a name="?OLE_LINK\d+"?>((.|[\r\n])*?)<\/a>/gi,OxO8545[24]);Ox2d=Ox2d.replace(/<a name="?_Hlt\d+"?>((.|[\r\n])*?)<\/a>/gi,OxO8545[24]);Ox2d=Ox2d.replace(/<a name="?_Toc\d+"?>((.|[\r\n])*?)<\/a>/gi,OxO8545[24]);return Ox2d;} ;
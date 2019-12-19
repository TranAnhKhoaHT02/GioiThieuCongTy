<%@ Page Language="C#" Inherits="CuteEditor.EditorUtilityPage" %>
<script runat="server">
string GetDialogQueryString;
override protected void OnInit(EventArgs args)
{
	if(Context.Request.QueryString["Dialog"]=="Standard")
	{	
	if(Context.Request.QueryString["IsFrame"]==null)
	{
		string FrameSrc="colorpicker_basic.aspx?IsFrame=1&"+Request.ServerVariables["QUERY_STRING"];
		CuteEditor.CEU.WriteDialogOuterFrame(Context,"[[MoreColors]]",FrameSrc);
		Context.Response.End();
	}
	}
	string s="";
	if(Context.Request.QueryString["Dialog"]=="Standard")	
		s="&Dialog=Standard";
	
	GetDialogQueryString="Theme="+Context.Request.QueryString["Theme"]+s;	
	base.OnInit(args);
}
</script>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head runat="server">
		<meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
		<meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
		<script type="text/javascript" src="Load.ashx?type=dialogscript&verfix=1004&file=DialogHead.js"></script>
		<script type="text/javascript" src="Load.ashx?type=dialogscript&verfix=1004&file=Dialog_ColorPicker.js"></script>
		<link href='Load.ashx?type=themecss&file=dialog.css&theme=[[_Theme_]]' type="text/css"
			rel="stylesheet" />
		<style type="text/css">
			.colorcell
			{
				width:16px;
				height:17px;
				cursor:hand;
			}
			.colordiv,.customdiv
			{
				border:solid 1px #808080;
				width:16px;
				height:17px;
				font-size:1px;
			}
			#ajaxdiv{padding:10px;margin:0;text-align:center; background:#eeeeee;}
		</style>
		<title>[[NamedColors]]</title>
		<script>
								
		var OxO1309=["Green","#008000","Lime","#00FF00","Teal","#008080","Aqua","#00FFFF","Navy","#000080","Blue","#0000FF","Purple","#800080","Fuchsia","#FF00FF","Maroon","#800000","Red","#FF0000","Olive","#808000","Yellow","#FFFF00","White","#FFFFFF","Silver","#C0C0C0","Gray","#808080","Black","#000000","DarkOliveGreen","#556B2F","DarkGreen","#006400","DarkSlateGray","#2F4F4F","SlateGray","#708090","DarkBlue","#00008B","MidnightBlue","#191970","Indigo","#4B0082","DarkMagenta","#8B008B","Brown","#A52A2A","DarkRed","#8B0000","Sienna","#A0522D","SaddleBrown","#8B4513","DarkGoldenrod","#B8860B","Beige","#F5F5DC","HoneyDew","#F0FFF0","DimGray","#696969","OliveDrab","#6B8E23","ForestGreen","#228B22","DarkCyan","#008B8B","LightSlateGray","#778899","MediumBlue","#0000CD","DarkSlateBlue","#483D8B","DarkViolet","#9400D3","MediumVioletRed","#C71585","IndianRed","#CD5C5C","Firebrick","#B22222","Chocolate","#D2691E","Peru","#CD853F","Goldenrod","#DAA520","LightGoldenrodYellow","#FAFAD2","MintCream","#F5FFFA","DarkGray","#A9A9A9","YellowGreen","#9ACD32","SeaGreen","#2E8B57","CadetBlue","#5F9EA0","SteelBlue","#4682B4","RoyalBlue","#4169E1","BlueViolet","#8A2BE2","DarkOrchid","#9932CC","DeepPink","#FF1493","RosyBrown","#BC8F8F","Crimson","#DC143C","DarkOrange","#FF8C00","BurlyWood","#DEB887","DarkKhaki","#BDB76B","LightYellow","#FFFFE0","Azure","#F0FFFF","LightGray","#D3D3D3","LawnGreen","#7CFC00","MediumSeaGreen","#3CB371","LightSeaGreen","#20B2AA","DeepSkyBlue","#00BFFF","DodgerBlue","#1E90FF","SlateBlue","#6A5ACD","MediumOrchid","#BA55D3","PaleVioletRed","#DB7093","Salmon","#FA8072","OrangeRed","#FF4500","SandyBrown","#F4A460","Tan","#D2B48C","Gold","#FFD700","Ivory","#FFFFF0","GhostWhite","#F8F8FF","Gainsboro","#DCDCDC","Chartreuse","#7FFF00","LimeGreen","#32CD32","MediumAquamarine","#66CDAA","DarkTurquoise","#00CED1","CornflowerBlue","#6495ED","MediumSlateBlue","#7B68EE","Orchid","#DA70D6","HotPink","#FF69B4","LightCoral","#F08080","Tomato","#FF6347","Orange","#FFA500","Bisque","#FFE4C4","Khaki","#F0E68C","Cornsilk","#FFF8DC","Linen","#FAF0E6","WhiteSmoke","#F5F5F5","GreenYellow","#ADFF2F","DarkSeaGreen","#8FBC8B","Turquoise","#40E0D0","MediumTurquoise","#48D1CC","SkyBlue","#87CEEB","MediumPurple","#9370DB","Violet","#EE82EE","LightPink","#FFB6C1","DarkSalmon","#E9967A","Coral","#FF7F50","NavajoWhite","#FFDEAD","BlanchedAlmond","#FFEBCD","PaleGoldenrod","#EEE8AA","Oldlace","#FDF5E6","Seashell","#FFF5EE","PaleGreen","#98FB98","SpringGreen","#00FF7F","Aquamarine","#7FFFD4","PowderBlue","#B0E0E6","LightSkyBlue","#87CEFA","LightSteelBlue","#B0C4DE","Plum","#DDA0DD","Pink","#FFC0CB","LightSalmon","#FFA07A","Wheat","#F5DEB3","Moccasin","#FFE4B5","AntiqueWhite","#FAEBD7","LemonChiffon","#FFFACD","FloralWhite","#FFFAF0","Snow","#FFFAFA","AliceBlue","#F0F8FF","LightGreen","#90EE90","MediumSpringGreen","#00FA9A","PaleTurquoise","#AFEEEE","LightCyan","#E0FFFF","LightBlue","#ADD8E6","Lavender","#E6E6FA","Thistle","#D8BFD8","MistyRose","#FFE4E1","Peachpuff","#FFDAB9","PapayaWhip","#FFEFD5"];var colorlist=[{n:OxO1309[0],h:OxO1309[1]},{n:OxO1309[2],h:OxO1309[3]},{n:OxO1309[4],h:OxO1309[5]},{n:OxO1309[6],h:OxO1309[7]},{n:OxO1309[8],h:OxO1309[9]},{n:OxO1309[10],h:OxO1309[11]},{n:OxO1309[12],h:OxO1309[13]},{n:OxO1309[14],h:OxO1309[15]},{n:OxO1309[16],h:OxO1309[17]},{n:OxO1309[18],h:OxO1309[19]},{n:OxO1309[20],h:OxO1309[21]},{n:OxO1309[22],h:OxO1309[23]},{n:OxO1309[24],h:OxO1309[25]},{n:OxO1309[26],h:OxO1309[27]},{n:OxO1309[28],h:OxO1309[29]},{n:OxO1309[30],h:OxO1309[31]}];var colormore=[{n:OxO1309[32],h:OxO1309[33]},{n:OxO1309[34],h:OxO1309[35]},{n:OxO1309[36],h:OxO1309[37]},{n:OxO1309[38],h:OxO1309[39]},{n:OxO1309[40],h:OxO1309[41]},{n:OxO1309[42],h:OxO1309[43]},{n:OxO1309[44],h:OxO1309[45]},{n:OxO1309[46],h:OxO1309[47]},{n:OxO1309[48],h:OxO1309[49]},{n:OxO1309[50],h:OxO1309[51]},{n:OxO1309[52],h:OxO1309[53]},{n:OxO1309[54],h:OxO1309[55]},{n:OxO1309[56],h:OxO1309[57]},{n:OxO1309[58],h:OxO1309[59]},{n:OxO1309[60],h:OxO1309[61]},{n:OxO1309[62],h:OxO1309[63]},{n:OxO1309[64],h:OxO1309[65]},{n:OxO1309[66],h:OxO1309[67]},{n:OxO1309[68],h:OxO1309[69]},{n:OxO1309[70],h:OxO1309[71]},{n:OxO1309[72],h:OxO1309[73]},{n:OxO1309[74],h:OxO1309[75]},{n:OxO1309[76],h:OxO1309[77]},{n:OxO1309[78],h:OxO1309[79]},{n:OxO1309[80],h:OxO1309[81]},{n:OxO1309[82],h:OxO1309[83]},{n:OxO1309[84],h:OxO1309[85]},{n:OxO1309[86],h:OxO1309[87]},{n:OxO1309[88],h:OxO1309[89]},{n:OxO1309[90],h:OxO1309[91]},{n:OxO1309[92],h:OxO1309[93]},{n:OxO1309[94],h:OxO1309[95]},{n:OxO1309[96],h:OxO1309[97]},{n:OxO1309[98],h:OxO1309[99]},{n:OxO1309[100],h:OxO1309[101]},{n:OxO1309[102],h:OxO1309[103]},{n:OxO1309[104],h:OxO1309[105]},{n:OxO1309[106],h:OxO1309[107]},{n:OxO1309[108],h:OxO1309[109]},{n:OxO1309[110],h:OxO1309[111]},{n:OxO1309[112],h:OxO1309[113]},{n:OxO1309[114],h:OxO1309[115]},{n:OxO1309[116],h:OxO1309[117]},{n:OxO1309[118],h:OxO1309[119]},{n:OxO1309[120],h:OxO1309[121]},{n:OxO1309[122],h:OxO1309[123]},{n:OxO1309[124],h:OxO1309[125]},{n:OxO1309[126],h:OxO1309[127]},{n:OxO1309[128],h:OxO1309[129]},{n:OxO1309[130],h:OxO1309[131]},{n:OxO1309[132],h:OxO1309[133]},{n:OxO1309[134],h:OxO1309[135]},{n:OxO1309[136],h:OxO1309[137]},{n:OxO1309[138],h:OxO1309[139]},{n:OxO1309[140],h:OxO1309[141]},{n:OxO1309[142],h:OxO1309[143]},{n:OxO1309[144],h:OxO1309[145]},{n:OxO1309[146],h:OxO1309[147]},{n:OxO1309[148],h:OxO1309[149]},{n:OxO1309[150],h:OxO1309[151]},{n:OxO1309[152],h:OxO1309[153]},{n:OxO1309[154],h:OxO1309[155]},{n:OxO1309[156],h:OxO1309[157]},{n:OxO1309[158],h:OxO1309[159]},{n:OxO1309[160],h:OxO1309[161]},{n:OxO1309[162],h:OxO1309[163]},{n:OxO1309[164],h:OxO1309[165]},{n:OxO1309[166],h:OxO1309[167]},{n:OxO1309[168],h:OxO1309[169]},{n:OxO1309[170],h:OxO1309[171]},{n:OxO1309[172],h:OxO1309[173]},{n:OxO1309[174],h:OxO1309[175]},{n:OxO1309[176],h:OxO1309[177]},{n:OxO1309[178],h:OxO1309[179]},{n:OxO1309[180],h:OxO1309[181]},{n:OxO1309[182],h:OxO1309[183]},{n:OxO1309[184],h:OxO1309[185]},{n:OxO1309[186],h:OxO1309[187]},{n:OxO1309[188],h:OxO1309[189]},{n:OxO1309[190],h:OxO1309[191]},{n:OxO1309[192],h:OxO1309[193]},{n:OxO1309[194],h:OxO1309[195]},{n:OxO1309[196],h:OxO1309[197]},{n:OxO1309[198],h:OxO1309[199]},{n:OxO1309[200],h:OxO1309[201]},{n:OxO1309[202],h:OxO1309[203]},{n:OxO1309[204],h:OxO1309[205]},{n:OxO1309[206],h:OxO1309[207]},{n:OxO1309[208],h:OxO1309[209]},{n:OxO1309[210],h:OxO1309[211]},{n:OxO1309[212],h:OxO1309[213]},{n:OxO1309[214],h:OxO1309[215]},{n:OxO1309[216],h:OxO1309[217]},{n:OxO1309[218],h:OxO1309[219]},{n:OxO1309[220],h:OxO1309[221]},{n:OxO1309[156],h:OxO1309[157]},{n:OxO1309[222],h:OxO1309[223]},{n:OxO1309[224],h:OxO1309[225]},{n:OxO1309[226],h:OxO1309[227]},{n:OxO1309[228],h:OxO1309[229]},{n:OxO1309[230],h:OxO1309[231]},{n:OxO1309[232],h:OxO1309[233]},{n:OxO1309[234],h:OxO1309[235]},{n:OxO1309[236],h:OxO1309[237]},{n:OxO1309[238],h:OxO1309[239]},{n:OxO1309[240],h:OxO1309[241]},{n:OxO1309[242],h:OxO1309[243]},{n:OxO1309[244],h:OxO1309[245]},{n:OxO1309[246],h:OxO1309[247]},{n:OxO1309[248],h:OxO1309[249]},{n:OxO1309[250],h:OxO1309[251]},{n:OxO1309[252],h:OxO1309[253]},{n:OxO1309[254],h:OxO1309[255]},{n:OxO1309[256],h:OxO1309[257]},{n:OxO1309[258],h:OxO1309[259]},{n:OxO1309[260],h:OxO1309[261]},{n:OxO1309[262],h:OxO1309[263]},{n:OxO1309[264],h:OxO1309[265]},{n:OxO1309[266],h:OxO1309[267]},{n:OxO1309[268],h:OxO1309[269]},{n:OxO1309[270],h:OxO1309[271]},{n:OxO1309[272],h:OxO1309[273]}];
		
		</script>
	</head>
	<body>
		<div id="ajaxdiv">
			<div class="tab-pane-control tab-pane" id="tabPane1">
				<div class="tab-row">
					<h2 class="tab">
						<a tabindex="-1" href='colorpicker.aspx?<%=GetDialogQueryString%>'>
							<span style="white-space:nowrap;">
								[[WebPalette]]
							</span>
						</a>
					</h2>
					<h2 class="tab selected">
							<a tabindex="-1" href='colorpicker_basic.aspx?<%=GetDialogQueryString%>'>
								<span style="white-space:nowrap;">
									[[NamedColors]]
								</span>
							</a>
					</h2>
					<h2 class="tab">
							<a tabindex="-1" href='colorpicker_more.aspx?<%=GetDialogQueryString%>'>
								<span style="white-space:nowrap;">
									[[CustomColor]]
								</span>
							</a>
					</h2>
				</div>
				<div class="tab-page">			
					<table class="colortable" align="center">
						<tr>
							<td colspan="16" height="16"><p align="left">Basic:
								</p>
							</td>
						</tr>
						<tr>
							<script>
								var OxO5b78=["length","\x3Ctd class=\x27colorcell\x27\x3E\x3Cdiv class=\x27colordiv\x27 style=\x27background-color:","\x27 title=\x27"," ","\x27 cname=\x27","\x27 cvalue=\x27","\x27\x3E\x3C/div\x3E\x3C/td\x3E",""];var arr=[];for(var i=0;i<colorlist[OxO5b78[0]];i++){arr.push(OxO5b78[1]);arr.push(colorlist[i].n);arr.push(OxO5b78[2]);arr.push(colorlist[i].n);arr.push(OxO5b78[3]);arr.push(colorlist[i].h);arr.push(OxO5b78[4]);arr.push(colorlist[i].n);arr.push(OxO5b78[5]);arr.push(colorlist[i].h);arr.push(OxO5b78[6]);} ;document.write(arr.join(OxO5b78[7]));
							</script>
						</tr>
						<tr>
							<td colspan="16" height="12"><p align="left"></p>
							</td>
						</tr>
						<tr>
							<td colspan="16"><p align="left">Additional:
								</p>
							</td>
						</tr>
						<script>
							var OxO16f0=["length","\x3Ctr\x3E","\x3Ctd class=\x27colorcell\x27\x3E\x3Cdiv class=\x27colordiv\x27 style=\x27background-color:","\x27 title=\x27"," ","\x27 cname=\x27","\x27 cvalue=\x27","\x27\x3E\x3C/div\x3E\x3C/td\x3E","\x3C/tr\x3E",""];var arr=[];for(var i=0;i<colormore[OxO16f0[0]];i++){if(i%16==0){arr.push(OxO16f0[1]);} ;arr.push(OxO16f0[2]);arr.push(colormore[i].n);arr.push(OxO16f0[3]);arr.push(colormore[i].n);arr.push(OxO16f0[4]);arr.push(colormore[i].h);arr.push(OxO16f0[5]);arr.push(colormore[i].n);arr.push(OxO16f0[6]);arr.push(colormore[i].h);arr.push(OxO16f0[7]);if(i%16==15){arr.push(OxO16f0[8]);} ;} ;if(colormore%16>0){arr.push(OxO16f0[8]);} ;document.write(arr.join(OxO16f0[9]));
						</script>
						<tr>
							<td colspan="16" height="8">
							</td>
						</tr>
						<tr>
							<td colspan="16" height="12">
								<input checked id="CheckboxColorNames" style="width: 16px; height: 20px" type="checkbox">
								<span style="width: 118px;">Use color names</span>
							</td>
						</tr>
						<tr>
							<td colspan="16" height="12">
							</td>
						</tr>
						<tr>
							<td colspan="16" valign="middle" height="24">
							<span style="height:24px;width:50px;vertical-align:middle;">Color : </span>&nbsp;
							<input type="text" id="divpreview" size="7" maxlength="7" style="width:180px;height:24px;border:#a0a0a0 1px solid; Padding:4;"/>
					
							</td>
						</tr>
				</table>
			</div>
		</div>
		<div id="container-bottom">
			<input type="button" id="buttonok" value="[[OK]]" class="formbutton" style="width:70px"	onclick="do_insert();" /> 
			&nbsp;&nbsp;&nbsp;&nbsp; 
			<input type="button" id="buttoncancel" value="[[Cancel]]" class="formbutton" style="width:70px"	onclick="do_Close();" />	
		</div>
	</div>
	</body>
</html>


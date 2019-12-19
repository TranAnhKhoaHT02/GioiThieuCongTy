<!-- Begin-->
//Hàm tìm một ID gần đúng
function getElementbyClass(rootObj, id)
{
	var rootLength = rootObj.length
	for(var i=0; i<rootLength; i++)
		if (rootObj[i].id.indexOf(id) >= 0)
			return rootObj[i].id;
	return "";
}

function FormatNumber(str)
{
	var strTemp = GetNumber(str);
		
	if(strTemp.length <= 3)
		return strTemp;

	strResult = "";
	for(var i =0; i< strTemp.length; i++)
		strTemp = strTemp.replace(",", "");
	
	for(var i = strTemp.length; i>=0; i--)
	{
		if(strResult.length >0 && (strTemp.length - i -1) % 3 == 0)
			strResult = "," + strResult;
					
		strResult = strTemp.substring(i, i + 1) + strResult;
	}	
	return strResult;	
}
//  End -->

function IsNumber(str)
{
	for(var i = 0; i < str.length; i++)
	{	
		var temp = str.substring(i, i + 1);
		
		if(!(temp == "." || temp == "," || (temp >= 0 && temp <=9)))
			return false;
	}
	return true;
}

function GetNumber(str)
{
	for(var i = 0; i < str.length; i++)
	{	
		var temp = str.substring(i, i + 1);		
		if(!(temp == "." || temp == "," || (temp >= 0 && temp <=9)))
		{
			alert("Không phải là số!");
			return str.substring(0, i);
		}
		
	}
	return str;
}

//Hàm đếm số ký tự còn lại trả về format cho span display
function DeCount(intMax, strText, strSpanName, strIDCtlText, strMess)
{
	var intResult = intMax - strText.length;
	if(intResult < 0)
	{	alert("Bạn đã nhập vượt quá giới hạn cho phép!");
		document.getElementById(strIDCtlText).value = strText.substring(0, intMax);
		document.getElementById(strIDCtlText).focus();
		intResult = 0;
	}	
	document.getElementById(strSpanName).innerHTML = strMess + ":" + intResult;	
}


DecimalDelim=".";
ThousandDelim=",";
NumGroupNumber=3;
function isThousandDelim(c)
{
	var test=""+c;
	if(test==DecimalDelim||test==ThousandDelim)
		return true;
	return false;
}
function isDigit(c)
{
	var test = "" + c;
	if (test == "0" || test == "1" || test == "2" || test == "3" || test == "4" 
	|| test == "5" || test == "6" || test == "7" || test == "8" || test == "9")
		return true;
	return false;
}

function Validate_Number(element)
{
	metDecimalDelim=false;
	metThousandDelim=0;
	digitCount=0;
	done=false;
	tvalue=element.value;
	value="";
	decimalPart="";
	while(true)
	{
		value=tvalue.replace(ThousandDelim,"");
		if(tvalue==value)break;	
		tvalue=value;
	}
	pos=value.indexOf(DecimalDelim);
	if(pos!=-1)
	{
		decimalPart=value.substring(pos,value.length);
		value=value.substring(0,pos);
		if(decimalPart.indexOf(DecimalDelim,1)!=-1) return false;
	}
	for(i=value.length;i>0;i--)
	{
		if(!isDigit(value.substring(i-1,i)) && !isThousandDelim(value.substring(i-1,i))) return false;
		if(isDigit(value.substring(i-1,i))) digitCount++;
		if((digitCount % NumGroupNumber)==1 && parseInt(digitCount / NumGroupNumber)!=metThousandDelim)
		{
			value=value.substring(0,i)+ThousandDelim+value.substring(i,element.value.length);
		}
		if(value.substring(i-1,i)==ThousandDelim)
		{
			metThousandDelim++;
			if((digitCount % NumGroupNumber)!=0)return false;
		}
	}	
	element.value=value+decimalPart;
	return true;
}

function Input_Number_OnKeyUp(element)
{
	var tvalue='';
	for(i=0; i<element.value.length; i++)if((element.value.substring(i,i+1)>='0' && element.value.substring(i,i+1)<='9') || element.value.substring(i,i+1)=='.' || element.value.substring(i,i+1)==',')tvalue+=element.value.substring(i,i+1);
	element.value=tvalue;
	
	val=parseFloat(element.value);
	if(isNaN(val) && element.value.length>0)
	{
		element.value="";
		return;
	}
	Validate_Number(element);
}

function Input_Number_Only(element)
{
	var tvalue='';
	for(i=0; i<element.value.length; i++)if(element.value.substring(i,i+1)>='0' && element.value.substring(i,i+1)<='9')tvalue+=element.value.substring(i,i+1);
	element.value=tvalue;
}

function Input_Number_And_DecimalDelim(element)
{
	var tvalue='';
	for(i=0; i<element.value.length; i++)if((element.value.substring(i,i+1)>='0' && element.value.substring(i,i+1)<='9') || element.value.substring(i,i+1)=='.')tvalue+=element.value.substring(i,i+1);
	element.value=tvalue;
	
	val=parseFloat(element.value);
	if(isNaN(val) && element.value.length>0)
	{
		element.value="";
		return;
	}
	Validate_Number(element);
	
	while(true)
	{
		value=element.value.replace(ThousandDelim,"");
		if(element.value==value)break;	
		element.value=value;
	}	
}

function FormatANumber(value)
{
	tvalue=value;
	rvalue="";
	while(true)
	{
		rvalue=tvalue.replace(ThousandDelim,"");
		if(tvalue==rvalue)break;	
		tvalue=rvalue;
	}
	return parseFloat(rvalue);
}

function FormatNumber()
{
	document.Input.Number.value=FormatANumber(document.Input.Number.value);
}

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
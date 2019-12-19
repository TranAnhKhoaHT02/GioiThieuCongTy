function cfMoveCar()
{
    return confirm("Bạn có chắc chắn muốn chuyển các xe này không?");
}
function cfMoveEmployee()
{
    return confirm("Bạn có chắc chắn muốn chuyển các nhân viên này không?");
}
function RadioChecked(param)
{
    
    var frm = document.forms[0];
    // Take all elements of the form

    for (i=0; i < frm.length; i++)
    {
      // itinerate the elements searching "RadioButtons"

      if (frm.elements[i].type == "radio")
      {
        // Unchecked if the RadioButton is != param

        if (param != frm.elements[i].id )
        {
          frm.elements[i].checked = false;
        }
      }
    }
 
}

function SelectAllCheckboxes(spanChk, rpt)
{
    // Added as ASPX uses SPAN for checkbox
    var oItem = spanChk.children;
    var theBox= (spanChk.type=="checkbox") ? spanChk : spanChk.children.item[0];
    xState=theBox.checked;
    elm=theBox.form.elements;

    for(i=0;i<elm.length;i++)
      if((elm[i].type=="checkbox") && (elm[i].name.indexOf(rpt)> -1) && elm[i].id!=theBox.id)
      {
        if(elm[i].checked!=xState)
          elm[i].click();
      }
}
function cfAdd()
{
    return confirm('Bạn có chắc chắn là muốn thêm vào không?');
}
function cfSave()
{
    return confirm('Bạn có chắc chắn là muốn lưu thay đổi không?');
}
function cfDelete()
{
    return confirm('Bạn có chắc chắn là muốn xóa không?');
}
function cfDeleteAll()
{
    return confirm('Bạn có chắc chắn là muốn xóa tất cả không?');
}

function HideContent(d) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
document.getElementById(d).style.display = "";
}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = ""; }
else { document.getElementById(d).style.display = "none"; }
}
function ReverseColor(d) {
if(document.getElementById(d).style.color == "#333333") { document.getElementById(d).style.color = "#000000"; }
else { document.getElementById(d).style.color = "#333333"; }
}
function btnBack()
{
    return window.history.go(-1);
}
//2009-08-09
//Minh reference on http://www.codedigest.com/Articles/ASPNET/132_GridView_with_CheckBox_%E2%80%93_Select_All_and_Highlight_Selected_Row.aspx
function HighlightRow(chkB)
{
    var IsChecked = chkB.checked;           

    if(IsChecked)
      {
            chkB.parentNode.parentNode.style.backgroundColor='black'; 

            chkB.parentNode.parentNode.style.color='white';

      }else
      {
            chkB.parentNode.parentNode.style.backgroundColor='white';

            chkB.parentNode.parentNode.style.color='black';

      }

}

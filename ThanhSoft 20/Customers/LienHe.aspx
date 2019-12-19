<%@ Page Language="C#" MasterPageFile="~/Customers/MasterPage.master" AutoEventWireup="true" CodeFile="LienHe.aspx.cs" Inherits="Customers_Default2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
   
    <style>
        #FormLienKe {border:1px solid #dedede;}
        #FormLienKe h1{ border-bottom:1px solid #dedede; font-size:20px;}
        .style1
        {
            color: #FF3300;
        }
    </style>

   <table cellpadding="10" cellspacing="10" id="FormLienKe" align="center">
        <tr>
            <td colspan="2" align="center">
                <h1>Liên hệ</h1>
            </td>
        </tr>
        <tr>
            <td style="width: 30%" colspan="2">
            Nếu bạn có bất cứ thắc mắc, ý kiến đóng góp hoặc câu hỏi gì liên quan đến thanhsoft, 
            hãy liên lạc với chúng tôi . Chúng tôi sẽ hồi âm bạn sớm nhất có thể. 
            Chúng tôi luôn cố gắng trả lời tất cả những email gửi tới.
               </td>
        </tr>
        <tr>
            <td style="width: 30%">
                Họ và tên:<span class="style1">*</span></td>
            <td style="width: 70%">
                <asp:TextBox ID="txtHoTen" runat="server" Width="300px"  />&nbsp;
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                    ControlToValidate="txtHoTen" ErrorMessage="Vui lòng điền tên bạn" 
                    Display="Dynamic" />
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                Địa chỉ&nbsp;</td>
            <td style="width: 70%">
                <asp:TextBox ID="txtDiaChi" runat="server" Width="300px"   />
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                Điện Thoại:</td>
            <td style="width: 70%">
                <asp:TextBox ID="txtDienThoai" runat="server" Width="300px"   />
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                Email:<span class="style1"> *</span></td>
            <td style="width: 70%">
                <asp:TextBox ID="txtEmail" runat="server" Width="300px"   />
                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                    ControlToValidate="txtEmail" ErrorMessage="Vui lòng nhập Email" 
                    Display="Dynamic" />
                     <asp:RegularExpressionValidator ID="RegularExpressionValidator1" 
                    ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"  runat="server" 
                    ErrorMessage="Email không hợp lệ" ControlToValidate="txtEmail" 
                    Display="Dynamic"></asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 30%" valign="top">
                Thông điệp:<span class="style1"> *</span></td>
            <td >
                <asp:TextBox ID="txtNoiDung" style="background-color:#FAFAFA; padding:5px;" 
                TextMode="MultiLine" Rows="6" runat="server" Width="500px" />
                <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                    ControlToValidate="txtNoiDung" ErrorMessage="*" 
                    Display="Dynamic" />
            </td>
        </tr>
        <tr>
            <td valign="top" colspan="2" align="center" id="LinkOfList">
                <asp:Button ID="btnSend" runat="server" Text="Gửi liên hệ" 
                    onclick="btnSend_Click" />
                </td>
        </tr>
        <tr>
            <td valign="top" colspan="2" align="center" id="LinkOfList">
                <asp:Label ID="Label1" runat="server"></asp:Label>
                </td>
        </tr>
        </table>
          <br />
           <center> <span style="color: #FF0000">*<span style="font-size: 11px"> - Không để trống</span></center>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =============================================================
        <br /><br />
        <span style="color:rgb(250,0,0)";>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u><strong> Phòng phát triển phần mềm, thiết kế website</strong></u>
        </span>
    <br /><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>- Địa chỉ: </strong>1/15B Lê Đức Thọ, P15,Q.Gò Vấp, TP.HCM<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>- Điện thoại: </strong>(+84)8.6.678.5.456<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>- Phụ trách thiết kế: </strong>(+84):908.450.457 (Mr Thanh)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>- Website: </strong>
    <a href="http://thanhsoft.net">http://thanhsoft,net</a><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>- E-mail:</strong>
       <a href="mailto:hoatk61@gmail.com">hoatk61@gmail.com</a>
      &nbsp; -
     <a href="mailto:thanhsoft2009@yahoo.com">thanhsoft2009@yahoo.com</a>
</asp:Content>



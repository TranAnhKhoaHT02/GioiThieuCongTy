<%@ Page Language="C#" MasterPageFile="~/Admin/MasterPageqtri.master" AutoEventWireup="true" CodeFile="changepassword.aspx.cs" Inherits="Admin_changepassword" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div align="center">
    <br />
    &nbsp;</div>
    <div align="center">
        <table border="0" style="border:solix 1px beige;line-height:25px" width="500">
            <tr>
                <th colspan="3" style="color:Teal;background-color:Beige; font-size:20px" >Thay Đổi Mật Khẩu<asp:Label ID="lblUserName" runat="server" Visible="false"></asp:Label></th>
            </tr>
            <tr>
                <td align="right" width="250">
                    Mật khẩu cũ:
                </td>
                <td>
                    <asp:TextBox ID="txtPassWord" runat="server" Width="150" TabIndex="1" TextMode="Password"></asp:TextBox><asp:RequiredFieldValidator ID="rfv" runat="server"  ErrorMessage="*" ControlToValidate="txtPassWord" SetFocusOnError="True"></asp:RequiredFieldValidator></td>
            </tr>
            <tr>
                <td align="right">
                    Mật khẩu mới:
                </td>
                <td>
                    <asp:TextBox ID="txtPassWordNew" runat="server" Width="150" TabIndex="2" TextMode="Password"></asp:TextBox><asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtPassWordNew" ErrorMessage="*" SetFocusOnError="True"></asp:RequiredFieldValidator></td>
            </tr>
            <tr>
                <td align="right">
                    Xác nhận mật khẩu mới:
                </td>
                <td>
                    <asp:TextBox ID="txtPassWordReNew" runat="server" Width="150" TabIndex="3" TextMode="Password"></asp:TextBox><asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtPassWordReNew" ErrorMessage="*" SetFocusOnError="True"></asp:RequiredFieldValidator></td>
            </tr>            
            <tr>
                <td colspan="2" align="center">
                    <asp:Button ID="btnSave" runat="server" Text="Thay Đổi" OnClientClick="return cdSave();" OnClick="btnSave_Click" TabIndex="4" />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <asp:Button ID="btnBack" runat="server" Text="Hủy Bỏ" TabIndex="5" CausesValidation="False" OnClick="btnBack_Click" /></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <asp:Label ID="lblMsg" ForeColor="Red" Font-Bold="False" runat="server"></asp:Label></td>
            </tr>
        </table>
    </div>    
</asp:Content>


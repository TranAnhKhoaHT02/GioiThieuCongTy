<%@ Page Language="C#" MasterPageFile="~/Customers/MasterPage.master" AutoEventWireup="true" CodeFile="ThietKePhanMem.aspx.cs" Inherits="Customers_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div>
        <div style="background-image: url(../Images/home.png); background-repeat: no-repeat;
            text-indent: 27px; font-weight: bold; color: #a43803; font-size: 13pt; border-bottom: solid 2px #636060;
            margin-left: 5px; ">
            <span style="color:#a43803">
                 <a href="TrangChu.aspx" style="text-decoration:none; color:#a43803">Trang chủ</a>&nbsp; »&nbsp;
                <b>
                    <a href="ThietKePhanMem.aspx" style="text-decoration:none; color:#a43803">Thiết kế phần mềm</a>
                </b> 
              </span>
        </div>
        <div style="width: 93%; margin: 20px 20px 20px 20px;">
            <asp:DataList ID="dtlWeb" runat="server" RepeatColumns="3" RepeatDirection="Horizontal" Width="100%">
                <ItemTemplate>
                    <table cellpadding="3" cellspacing="4" width="100%">
                        <tr>
                            <td style="float:left; padding-left:30px;width:100px; color:Silver;" align="center">                                                   
                               <a href='chitietphanmem.aspx?id=<%# Eval("tintuc_id") %>'>
                                  <img  src='../mauphanmem/<%# Eval("img") %>'  height="200px" width="140px" />
                               </a>   
                               <br />
                               
                                    <h4> 
                                     <a href='chitietphanmem.aspx?id=<%# Eval("tintuc_id") %>'>Mẫu phần mềm:<%# Eval("tintuc_id") %></a>
                                    </h4>
                                   </td>                        
                        </tr>
                    </table>
                </ItemTemplate>
            </asp:DataList>
        </div>
        <div class="top" style="margin-top: 2px; margin-left: 5px;">
            <center>
                <b style="margin-left: 100px; font-size: small;">&nbsp; &nbsp;<asp:LinkButton ID="lblpreview"
                    runat="server" OnClick="lblpreview_Click">Preview</asp:LinkButton>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    <asp:Label ID="lblpage" runat="server" Text="1"></asp:Label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<asp:LinkButton ID="lblnext" runat="server"
                        OnClick="lblnext_Click">Next</asp:LinkButton>
                    &nbsp; </b>
            </center>
        </div>
    </div>
</asp:Content>


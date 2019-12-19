<%@ Page Language="C#" MasterPageFile="~/Customers/MasterPage.master" AutoEventWireup="true" CodeFile="ChiTietPhanMem.aspx.cs" Inherits="Customers_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div style="height:20px";></div>
<div id="content"> 
      
      <div class="col60" >             
            <p >
                 <h2 style="background-color:#fff;font-size:20px; color:#F48800;font-family:time new Roman; padding-left:10px; padding-bottom:10px;">
                   &nbsp;&nbsp;&nbsp;&nbsp;Thông tin chi tiết sản phẩm
                </h2>
            </p>
            <p style="height:8px;"></p>
           <center>
          <asp:Image ID="Image1"  runat="server" Width="500px" Height="700px"  />
         </center>
        </div>
        <br /><br />
          <div class=col30">
          
            <fieldset style="color:black; font-family:time new Roman; font-size:15px; width:94%; margin-left:10px;">
                <legend style="color:#a43803">Thông tin sản phẩm</legend>
                <table>
                    <tr>
                        <td></td>
                        <td>
                            <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
                        </td>
                        
                    </tr>
                   <br />
                     <tr>
                        <td></td>
                        <td> <asp:Label ID="Label2" runat="server" Text="Label"></asp:Label></td>
                    </tr>
                    
                     <tr>
                        <td></td>
                        <td> <asp:Label ID="Label3" runat="server" Text="Label"></asp:Label></td>
                    </tr>
                  
                </table>
                </fieldset>
            
          </div> 
   </div>
   <div style="height:20px"></div>
</asp:Content>


<%@ Page Language="C#" MasterPageFile="~/Customers/MasterPage.master" AutoEventWireup="true" CodeFile="chitiettin.aspx.cs" Inherits="Customers_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div style="height:15px"></div>
<asp:DataList ID="datalistnew" runat="server" DataKeyField="TinTuc_ID" Width="610px" DataSourceID="SqlDataSource1">
<ItemTemplate>
<div>
<div style="margin:0px 5px 0px 10px">
<asp:Label ID="label1" runat="server" ForeColor="#336699" Font-Bold="true" Font-Size="X-Large" Text='<%# Eval("TieuDe") %>'></asp:Label><br />
<asp:Label ID="label2" runat="server" ForeColor="#333333" Font-Size="Medium" Font-Bold="true" Text='<%# Eval("DienGiai") %>'></asp:Label><br /></div>
<%--<div style="text-align:center"><asp:Image ID="image1" runat="server" ImageUrl='<%# "~/Images/tintuc/" +Eval("Img") %>' Width="300px" Height="185px" /></div>--%><br />
<div style="margin-left:10px; text-align:justify"><asp:Label ID="label3" runat="server" Text='<%# Eval("NoiDung") %>'></asp:Label></div><br />
<div style="float:right; color:Black; font-family:Tahoma Sans-Serif"><asp:Label ID="label4" runat="server" Text='<%# Eval("NguonTrichDan") %>' ></asp:Label></div>
</div>
</ItemTemplate>
</asp:DataList>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ConnectionString %>"
            SelectCommand="lay" SelectCommandType="StoredProcedure">
           <SelectParameters>
                <asp:QueryStringParameter Name="TinTuc_ID" QueryStringField="TinTuc_ID" Type="Int32" />
            </SelectParameters>
            </asp:SqlDataSource>
</asp:Content>


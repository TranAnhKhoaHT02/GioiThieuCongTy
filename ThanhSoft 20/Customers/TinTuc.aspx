<%@ Page Language="C#" MasterPageFile="~/Customers/MasterPage.master" AutoEventWireup="true" CodeFile="TinTuc.aspx.cs" Inherits="Customers_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div style="background-image: url(../Images/home.png); background-repeat: no-repeat;
            text-indent: 27px; font-weight: bold; color: #a43803; font-size: 13pt; border-bottom: solid 2px #636060;
            margin-left: 5px; ">
            <span style="color:#a43803">
                 <a href="TrangChu.aspx" style="text-decoration:none; color:#a43803">Trang chủ</a>&nbsp; »&nbsp;
                <b>
                    <a href="TinTuc.aspx" style="text-decoration:none; color:#a43803">Tin tức</a>
                </b> 
              </span>
        </div>
<div style="height:10px"></div>
<div style="margin:0px 7px 0px 7px">
<asp:DataList ID="dListItems" DataKeyField="TinTuc_ID" runat="server" CellSpacing="5" Width="100%" DataSourceID="sqldatasource2">
<ItemTemplate>
<div style="font-weight:bold; font-size:12.5pt"><asp:Label ID="label" runat="server" Text='<%# Eval("TieuDe") %>'></asp:Label></div><br />

<table width="100%" cellspacing="5">
<tr>
<td style="width:120px"><asp:Image ID="Image1" runat="server" ImageUrl='<%# "~/uploads/tintuc/" +Eval("Img") %>' Width="119px" Height="90px" /></td>
<td rowspan="1" width="5px"></td>
<td align="char" valign="top"><asp:Label ID="Label1" runat="server" Text='<%# Eval("DienGiai") %>'></asp:Label></td><br />
</tr>
</table><div style="height:7px"></div>
<div style="float:right"><asp:HyperLink BorderStyle="None" ID="hpchitiet"  runat="server" NavigateUrl='<% #"chitiettin.aspx?TinTuc_ID="+Eval("TinTuc_ID")%>'> xem chi tiết <img style="border:0" alt="" src="../Images/node.GIF" /></asp:HyperLink></div>
</ItemTemplate>
</asp:DataList>
<asp:SqlDataSource ID="sqldatasource2" runat="server" ConnectionString="<%$ ConnectionStrings: ConnectionString %>" SelectCommand="sp_tintuc_list" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
</div>
<div style="height:5px"></div>
</asp:Content>


<%@ Page Language="C#" MasterPageFile="~/Customers/MasterPage.master" AutoEventWireup="true"
    CodeFile="BangGia.aspx.cs" Inherits="Customers_BangGia"  %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">

<div style="margin-top:20px; color:Fuchsia; text-align:center">
<h3>** BẢNG BÁO GIÁ **</h3>
</div>
<div style="height:10px;"></div>
   <div>
    <asp:Repeater ID="Repeater1" runat="server">
        <HeaderTemplate>
           <table cellspacing="1" style="width: 100%;">
                <thead>
                    <tr style="color: Blue; height: 25px; text-align: center; font-size: 15px; font-family: Times New Roman;  width:100%">
                        <th style="border: solid 1px black; width: 10%">
                            Tên gói
                        </th>
                        <th style="border: solid 1px black; width: 40%">
                            Module
                        </th>
                        <th style="border: solid 1px black; width: 25%">
                            Chí phí năm đầu
                        </th>
                        <th style="border: solid 1px black; width: 25%">
                            Duy trì hằng năm
                        </th>
                    </tr>
                </thead>
                </table>
        </HeaderTemplate>
        <ItemTemplate>
            <table cellspacing="1" style="width: 100%;">
                <tbody>
                    <tr style="color: Black; height: 25px; text-align: center; font-size: 15px; font-family: Times New Roman; width:100%">
                        <td style="border: solid 1px black; width: 10%">
                            <%#Eval("tengoi")%>
                        </td>
                        <td style="border: solid 1px black; width: 40%">
                            <%#Eval("module")%>
                        </td>
                        <td style="border: solid 1px black; width: 25%">
                            <%#Eval("chiphinamdau")%>
                        </td>
                        <td style="border: solid 1px black; width: 25%">
                            <%#Eval("duytri")%>
                        </td>
                    </tr>
                </tbody>
            </table>
        </ItemTemplate>
    </asp:Repeater>
    </div>
    <div style="height:5px"></div>
    
</asp:Content>

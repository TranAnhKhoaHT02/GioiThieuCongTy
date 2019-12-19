<%@ Page Language="C#" MasterPageFile="~/Admin/MasterPageqtri.master" AutoEventWireup="true" CodeFile="sys_authority.aspx.cs" Inherits="Admin_authority"  %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<script src="../js/script.js" language="javascript" type="text/javascript"></script>
	<div id="content-box">
		<div class="border">
			<div class="padding">
				<div id="toolbar-box" >
   			        <div class="t">
				        <div class="t">
					        <div class="t"></div>
				        </div>
			        </div>
			        <div class="m">
				        <div class="toolbar" id="toolbar">
                            <table class="toolbar">
                                <tr>
                                    <td class="button" id="toolbar-print">
                                    </td>
                                    <td class="button" id="Td1">
                                    </td>
                                </tr>
                            </table>
                        </div>
				        <div class="header icon-48-authority">Phân quyền hệ thống</div>
				        <div class="clr"></div>
			        </div>
			        <div class="b">
				        <div class="b">
					        <div class="b"></div>
				        </div>
			        </div>
  		        </div>
   		        <div class="clr"></div>
                <asp:Label ID="lblMessageStatus" runat="server" Text="Label" Visible = "false"></asp:Label>
		        <div id="element-box" >
			        <div class="t">
		 		        <div class="t">
					        <div class="t"></div>
		 		        </div>
			        </div>
			        <div class="m">
                        

                        <table  border="0" width="100%" cellpadding="0" cellspacing="0">
                            <tr bgcolor="#CCCCFF" height="25px">
                                <th scope="col" style="height: 25px">&nbsp;</th>
                                <th colspan="2" scope="col" style="height: 25px">Thêm Quyền</th>
                            </tr>
                            <tr height="25px">
                                <td style="height: 25px">&nbsp;</td>
                                <td style="height: 25px; width: 665px;">
                                   
                                            <table border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="width: 83px" height="25">Quyền:</td>
                                                        <td style="width: 174px">&nbsp;<asp:TextBox id="txtquyen_ten" runat="server" Width="151px"></asp:TextBox></td>
                                                        <td colspan="2">&nbsp;<asp:Label id="lblMsg" runat="server" Font-Bold="True" BackColor="Yellow"></asp:Label></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                       
                                </td>
                            </tr>
                            <tr height="25px">
                                <td width="12" style="height: 25px">&nbsp;</td>
                                <td colspan="2" style="height: 25px">
                                    <asp:Button ID="btnAdd" runat="server" Text="Thêm" Width="70px" OnClick="btnAdd_Click" OnClientClick="return cfAdd();" />
                                    <asp:Button ID="btnSave" runat="server" Text="Lưu" Width="70px" OnClick="btnSave_Click" Visible="False" OnClientClick="return cfSave();" />
                                    <asp:Button ID="btnNotSave" runat="server" Text="Quay Lại" Width="70px" OnClick="btnNotSave_Click" />
                                    <asp:Button ID="btnDel" runat="server" Text="Xóa" Width="70px" OnClick="btnDel_Click" Visible="False" OnClientClick="return cfDelete();" />
                                </td>
                            </tr>
                        </table>
                        <table  border="0" width="100%" cellpadding="0" cellspacing="0">
                            <tr bgcolor="#CCCCFF" height="25px">
                                <th scope="col" style="height: 25px">&nbsp;</th>
                                <th scope="col" style="height: 25px">Danh Sách Các Quyền</th>
                            </tr>
                            <tr height="25px">
                                <td style="height: 25px">&nbsp;</td>
                                <td style="height: 25px"><asp:Button ID="btnDelAll" runat="server" Text="Xóa Tất Cả" Width="100px" OnClick="btnDelAll_Click" OnClientClick="return cfDeleteAll();" /></td>
                            </tr>
                            <tr height="25px">
                                <td width="10">&nbsp;</td>
                                <td width="780">
                                    
                                        <asp:DataGrid id="gridauthority" runat="server" Width="300px" GridLines="Horizontal" AutoGenerateColumns="False">
                                            <HeaderStyle BackColor="Linen" ForeColor="#0033FF" HorizontalAlign="Center" Font-Italic="False" Font-Strikeout="False" Font-Underline="False" Font-Overline="False" Font-Bold="True"></HeaderStyle>
                                            <Columns>
                                                <asp:TemplateColumn HeaderText="STT">
                                                    <ItemStyle Font-Italic="False" Font-Strikeout="False" Font-Underline="False" Font-Overline="False" Font-Bold="True"></ItemStyle>
                                                    <ItemTemplate><div><%# Container.ItemIndex + 1%></div></ItemTemplate>
                                                    <HeaderStyle Width="30px"></HeaderStyle>
                                                </asp:TemplateColumn>
                                                <asp:TemplateColumn HeaderText="T&#234;n Quyền">
                                                    <ItemStyle Width="250px" Height="25px" HorizontalAlign="Left"></ItemStyle>
                                                    <ItemTemplate>
                                                        <asp:HyperLink ID="HyperLink2" runat="server" Font-Bold="true" NavigateUrl='<% # "sys_authority.aspx?quyen_ma=" + DataBinder.Eval(Container.DataItem, "quyen_ma") %>'
                                                            Text='<% # DataBinder.Eval(Container.DataItem, "quyen") %> '>
                                                        </asp:HyperLink>
                                                    </ItemTemplate>
                                                </asp:TemplateColumn>
                                                <asp:TemplateColumn>
                                                    <ItemStyle Width="40px" Height="25px" HorizontalAlign="Center"></ItemStyle>
                                                    <HeaderTemplate>
                                                        <input id="chkDelAll" onclick="javascript:SelectAllCheckboxes(this,'gridauthority');" runat="server" type="checkbox"  />
                                                    </HeaderTemplate>
                                                    <ItemTemplate>
                                                        <asp:CheckBox ID="chkDel" runat="server"  onclick="HighlightRow(this);"/>
                                                        <asp:Label ID="lblID" runat="server" Text='<%# DataBinder.Eval(Container.DataItem,"quyen_ma")%>' Visible="false"></asp:Label>
                                                    </ItemTemplate>
                                                </asp:TemplateColumn>
                                            </Columns>
                                        </asp:DataGrid> 
                                    
                                </td>
                            </tr>
                        </table>
                        <div runat="server" id="divmenu">
                            <table  border="0" width="800px" cellpadding="0" cellspacing="0">
                                <tr bgcolor="LightGoldenrodYellow" style="height:25px">
                                    <th scope="col" style="height: 25px">&nbsp;</th>
                                    <th scope="col" style="height: 25px">Thêm Chi Tiết Cho Quyền :
                                        <asp:Label ID="lblquyen" runat="server" ForeColor="Red"></asp:Label>
                                    </th>
                                </tr>
                                <tr style="height:25px" >
                                    <td> </td>
                                    <td>                                         
                                            <table cellspacing="0" cellpadding="0" width="900" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td width="2%" height="27">&nbsp;</td>
                                                        <td width="37%">&nbsp;Chọn&nbsp;menu :</td>
                                                        <td width="4%">&nbsp;</td>
                                                        <td width="57%">&nbsp;</td>
                                                    </tr>
                                                    <tr valign="top">
                                                        <td>&nbsp;</td>
                                                        <td>
                                                            <asp:Panel id="Panel1" runat="server" Height="1500px" Width="350px" ScrollBars="Auto">
                                                                <asp:TreeView id="tremenu" runat="server" Height="200px" ImageSet="BulletedList3" Target="_self" ShowCheckBoxes="All">
                                                                    <SelectedNodeStyle Font-Bold="True" Font-Size="10pt" ForeColor="#C00000"></SelectedNodeStyle>
                                                                </asp:TreeView>
                                                            </asp:Panel>
                                                        </td>
                                                        <td>&nbsp;</td>
                                                        <td>
                                                            <table style="height:44px" cellspacing="0" cellpadding="0" width="100%" border="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="height: 23px" colspan="2">
                                                                            <asp:Button id="btnAddmenu" onclick="btnAddmenu_Click" runat="server" OnClientClick="return cfAdd();" Width="87px" Text="Thêm Menu"></asp:Button>
                                                                            <asp:Button id="btnDelAllmenu" onclick="btnDelAllmenu_Click" runat="server" OnClientClick="return cfDeleteAll();" Width="100px" Text="Xóa Menu"></asp:Button>
                                                                            <asp:Button id="btnSavemenu" runat="server" Text="Lưu Quyền" OnClientClick="return cfSave();" Visible="false" onclick="btnSavemenu_Click" ></asp:Button>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <asp:Label id="lblMsgmenu" runat="server" Font-Bold="True" BackColor="Yellow"></asp:Label><br />
                                                            <asp:Repeater id="rptquyenDetail" runat="server">
                                                                <HeaderTemplate>
                                                                <table cellspacing="1" class="adminlist">
                                                                    <thead>
                                                                    <tr>
                                                                        <th width="5"> STT </th>
                                                                        <th class="title" nowrap>Tên menu</th>
                                                                       <%-- <th class="title" nowrap>Quyền</th>--%>
                                                                        <th valign="top" width="5px" align="right">
                                                                            <input id="chkAll" onclick="javascript:SelectAllCheckboxes(this,'chkSelect');" runat="server" type="checkbox" />
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                </HeaderTemplate>
                                                                <ItemTemplate>
                                                                    <tbody>
                                                                    <tr class='<%# (Container.ItemIndex % 2 == 0) ? "row0" : "row1"%>'>
                                                                        <td><%# (Container.ItemIndex) + 1%></td>
                                                                        <td align="left" width="200">
                                                                            <%# DataBinder.Eval(Container.DataItem,"menu_title")%>
                                                                        </td>
                                                                       <%-- <td>
                                                                            <asp:CheckBox ID="chkView" runat="server" checked='<%# Convert.ToBoolean(DataBinder.Eval(Container.DataItem, "quyen_xem")) %>' Text="Xem" /> &nbsp;
                                                                            <asp:CheckBox ID="chkAdd" runat="server" checked='<%# Convert.ToBoolean(DataBinder.Eval(Container.DataItem, "quyen_them")) %>' Text="Thêm" /> &nbsp;
                                                                            <asp:CheckBox ID="chkEdit" runat="server" checked='<%# Convert.ToBoolean(DataBinder.Eval(Container.DataItem, "quyen_sua")) %>' Text="Sửa" /> &nbsp;
                                                                            <asp:CheckBox ID="chkDelete" runat="server" checked='<%# Convert.ToBoolean(DataBinder.Eval(Container.DataItem, "quyen_xoa")) %>' Text="Xoá" />
                                                                        </td>--%>
                                                                        <td valign="top" align="center" width="5px">
                                                                            <asp:CheckBox ID="chkSelect" runat="server" onclick="HighlightRow(this);"/>
                                                                            <asp:Label ID="lblMenuID" runat="server" Text='<%# DataBinder.Eval(Container.DataItem,"menu_id")%>' Visible="false" ></asp:Label>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </ItemTemplate>
                                                                <FooterTemplate>        
                                                                </table>
                                                                </FooterTemplate>
                                                            </asp:Repeater>                                                            
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                       
                                    </td>
                                </tr>
                        </table>
                        </div>
				        <div class="clr"></div>
			        </div> 
			        <div class="b">
				        <div class="b">
					        <div class="b"></div>
				        </div>
			        </div>
   		        </div>
	        </div>
	        <div class="clr"></div>
        </div>
    </div>
	<div id="border-bottom"><div><div></div></div></div>
</asp:Content>


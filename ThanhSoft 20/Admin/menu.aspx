<%@ Page Language="C#" MasterPageFile="~/Admin/MasterPageqtri.master" AutoEventWireup="true" CodeFile="menu.aspx.cs" Inherits="Admin_Default2"  %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
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
                                    <td class="button" id="toolbar-delete">
                                        <asp:LinkButton ID="btnDelete" runat="server" CssClass="toolbar"  OnClientClick="return cfDelete();" OnClick="btnDelete_Click" TabIndex="17">
                                            <span class="icon-32-trash" title="Xóa"></span>Xóa
                                        </asp:LinkButton>
                                    </td>
                                </tr>
                            </table>
                        </div>
				        <div class="header icon-48-menu">Quản lý menu hệ thống phần mềm</div>
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
                        <TABLE style="HEIGHT: 814px" cellSpacing=0 cellPadding=0 border=0>
                            <TBODY>
                                <TR>
                                    <TD style="HEIGHT: 20px" width="2%">&nbsp;</TD>
                                    <TD style="HEIGHT: 20px" width="25%">&nbsp; &nbsp; 
                                        <INPUT id="chkAll" onclick="javascript:SelectAllCheckboxes(this,'tremenu');" type=checkbox runat="server" /> <A href="menu.aspx">Chọn menu cha</A>: </TD>
                                            <TD style="WIDTH: 4px; HEIGHT: 20px">&nbsp;</TD><TD style="HEIGHT: 20px" width="70%">&nbsp;</TD>
                                </TR>
                                <TR vAlign=top>
                                    <TD>&nbsp;</TD>
                                    <TD><asp:Panel id="Panel1" runat="server" Height="1500px" ScrollBars="Auto" Width="300">
                                        <asp:TreeView id="tremenu" runat="server" Height="100px" ShowCheckBoxes="Leaf" Target="_self" ImageSet="BulletedList3">
                                            <SelectedNodeStyle ForeColor="#C00000" Font-Size="10pt" Font-Bold="True"></SelectedNodeStyle>                                    
                                         </asp:TreeView>
                                      </asp:Panel> </TD><TD style="WIDTH: 4px">&nbsp;</TD><TD>
                                <TABLE border=0>
                                    <TBODY>
                                        <TR>
                                            <TD colSpan=2>
                                                <asp:RadioButtonList id="rdbMenu" runat="server" RepeatDirection="Horizontal" OnSelectedIndexChanged="rdbMenu_SelectedIndexChanged" AutoPostBack="True">
                                                     <asp:ListItem Value="0" Selected="True">Thêm menu con</asp:ListItem>
                                                     <asp:ListItem Value="1">Chỉnh sửa menu</asp:ListItem>
                                                </asp:RadioButtonList> 
                                            </TD>
                                        </TR>
                                        <TR>
                                            <TD height=25>Menu cha:</TD>
                                            <TD><asp:Label id="lblmenu" runat="server" Font-Bold="True" Text="Chọn danh mục..."></asp:Label> </TD>
                                        </TR>
                                        <TR><TD height=25>Tên menu con:</TD><TD>&nbsp;<asp:TextBox id="txtmenu_name" runat="server" width="200px"></asp:TextBox> </TD>
                                        </TR>
                                        <TR><TD>Mô tả menu:</TD><TD>&nbsp;<asp:TextBox id="txtmenu_description" runat="server" width="200px" TextMode="MultiLine" Rows="2"></asp:TextBox> </TD>
                                        </TR>
                                        <TR><TD height=25>Trang menu chuyển đến:</TD><TD>&nbsp;<asp:TextBox id="txtmenu_url" runat="server" width="200px"></asp:TextBox> </TD>
                                        </TR>
                                        <TR><TD height=25>Vị trí:</TD><TD><asp:TextBox id="txtMenuOrder" runat="server" width="51px"></asp:TextBox></TD>
                                        </TR>
                                        <TR><TD colSpan=2>&nbsp;<asp:Label id="lblMsg" runat="server" BackColor="Yellow" Font-Bold="True"></asp:Label> </TD>
                                        </TR>
                                        <TR><TD colSpan=2 height=25><asp:Button id="btnAdd" onclick="btnAdd_Click" runat="server" OnClientClick="return cfAdd();" Text="Thêm"></asp:Button> <asp:Button id="btnSave" onclick="btnSave_Click" runat="server" OnClientClick="return cfSave();" Visible="False" Text="Lưu"></asp:Button>
                                             <asp:Button id="btnNotSave" onclick="btnNotSave_Click" runat="server" Visible="False" Text="Quay Lại"></asp:Button>
                                             <asp:Button id="btnDel" onclick="btnDel_Click" runat="server" OnClientClick="return cfDelete();" Visible="False" Text="Xóa"></asp:Button>
                                            </TD>
                                        </TR>
                                      </TBODY>
                               </TABLE></TD>
                               </TR>
                             </TBODY>
                          </TABLE>
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


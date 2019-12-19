<%@ Page Language="C#" MasterPageFile="~/Admin/MasterPageqtri.master" AutoEventWireup="true" CodeFile="sys_sercurity.aspx.cs" Inherits="Admin_Default2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div id="content-box" style="width:99%; margin: 1px auto;">
		<div class="border">
			<div class="padding" style="width:100%; margin:1px auto;">
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
                                        <asp:LinkButton ID="btnDeleteAll" runat="server" OnClick="btnDeleteAll_Click"  CssClass="toolbar" OnClientClick="return cfDeleteAll();">
                                            <span class="icon-32-delete" title="Xóa"></span>Xóa
                                        </asp:LinkButton>
                                    </td>
                                </tr>
                            </table>
                        </div>
				        <div class="header icon-48-cpanel">Phân quyền hệ thống phần mềm</div>
				        <div class="clr"></div>
			        </div>
			        <div class="b">
				        <div class="b">
					        <div class="b"></div>
				        </div>
			        </div>
  		        </div>
   		        <div class="clr"></div>
   		        <asp:Label ID="lblMessageStatus" runat="server" Visible="false"></asp:Label>
		        <div id="element-box" >
			        <div class="t">
		 		        <div class="t">
					        <div class="t"></div>
		 		        </div>
			        </div>
			        <div class="m">
			            
		                    <div class="col50">
			                    <fieldset class="adminform" >			                    
				                    <legend>Nhập thông tin</legend>
				                    <table class="admintable" cellspacing="1">
					                    <tr>
						                    <td class="key">Tên tài khoản:</td>
                                            <td >
                                                <asp:TextBox ID="txtTen" runat="server" Width="150px"></asp:TextBox></td>
					                    </tr>
                                        <tr>
                                            <td class="key">Mật khẩu:</td>
                                            <td>
                                                <asp:TextBox ID="txtMatKhau" runat="server" Width="150px"></asp:TextBox>
                                            </td>                                            
                                        </tr>
                                         <tr>
                                            <td class="key">Nhân viên:</td>
                                            <td>
                                                <asp:DropDownList ID="ddlNhanVien" runat="server" Width="150px" DataValueField="nhanvien_ma" DataTextField="nhanvien_ten"></asp:DropDownList>
                                            </td> 
                                            <td>
                                                <asp:Button ID="btnAddNhanVien" runat="server" Text="..." ForeColor="Maroon"  Font-Bold="True" />
                                            </td>                                           
                                        </tr> 
                                         <tr>
                                            <td class="key">Chọn quyền:</td>
                                            <td>
                                                <asp:DropDownList ID="ddlQuyen" runat="server" Width="150px" DataValueField="quyen_ma" DataTextField="quyen"></asp:DropDownList>
                                            </td> 
                                             <td>
                                                <asp:Button ID="btnAddQuyen" runat="server" Text="..." ForeColor="Maroon" Font-Bold="True"/>
                                            </td>                                             
                                        </tr>
                                        <tr>
                                            <td class="key">Từ đơn vị:</td>
                                            <td>
                                                <asp:TextBox ID="txtFrom" runat="server" Width="150px"></asp:TextBox>
                                            </td> 
                                        </tr>
                                        <tr>
                                            <td class="key">Đến đơn vị</td>
                                            <td>
                                                <asp:TextBox ID="txtTo" runat="server" Width="150px"></asp:TextBox>
                                            </td>                                          
                                        </tr>                                              
					                    <tr>
						                    <td></td>
						                    <td>
                                                <asp:Button ID="btnInsert" runat="server" Text="Thêm" OnClick="btnInsert_Click" Visible="true" OnClientClick="return cfAdd();"/>
                                                <asp:Button ID="btnUpdate" runat="server" Text="Cập Nhật" Visible="false" OnClick="btnUpdate_Click" OnClientClick="return cfSave();"/>
                                                <asp:Button ID="btnDelete" runat="server" Text="Xóa" OnClick="btnDelete_Click" Visible="false" OnClientClick="return cfDelete();"/>
                                                <asp:Button ID="btnCancel" runat="server" Text="Đóng" OnClick="btnCancel_Click" Visible="false" />
						                    </td>
					                    </tr>
					                    
                                    </table>
                                </fieldset>
                            </div>
		                    <div class="col50"  style="float:right;">		                     
			                    <fieldset class="adminform">
				                    <legend>Danh sách loại hàng</legend>
                                    <asp:Repeater id="rptQuyen" runat="server">
                                        <HeaderTemplate>
                                        <table cellspacing="1" class="adminlist">
                                            <thead>
                                            <tr>
                                                <th valign="top" style="width:10px;">
                                                    <input id="chkAll" onclick="javascript:SelectAllCheckboxes(this,'rptQuyen');" runat="server" type="checkbox" />
                                                </th>
                                                <th width="5"> STT </th>
                                                <th class="title">Tài khoản</th> 
                                                <th class="title">Mật khẩu</th> 
                                                <th class="title">Nhân viên</th> 
                                                <th class="title">Quyền hạn</th> 
                                                <th class="title">Từ đơn vị</th> 
                                                <th class="title">Đến đơn vị</th> 
                                            </tr>
                                            </thead>
                                        </HeaderTemplate>
                                        <ItemTemplate>
                                            <tbody>
                                            <tr class='<%# (Container.ItemIndex % 2 == 0) ? "row0" : "row1"%>'>
                                                <td valign="top" align="center" style="width:10px;">
                                                    <asp:CheckBox ID="chkSelect" runat="server" onclick="HighlightRow(this);"/>
                                                </td>
                                                <td align="right"><%# (Container.ItemIndex) + 1%></td>
                                                <td align="left" nowrap>
                                                    <asp:Label ID="lblID" runat="server" Text='<%# DataBinder.Eval(Container.DataItem,"id")%>' Visible="false"></asp:Label>
                                                <a href="sys_security.aspx?id=<%# DataBinder.Eval(Container.DataItem,"id")%>"><%# DataBinder.Eval(Container.DataItem, "username")%></a></td>
                                                 <td align="center">
                                                    <%# DataBinder.Eval(Container.DataItem,"password") %>
                                                 </td>
                                                 <td>
                                                    <%# DataBinder.Eval(Container.DataItem,"nhanvien_ten") %>
                                                 </td>
                                                 <td align="center">
                                                    <%# DataBinder.Eval(Container.DataItem,"quyen") %>
                                                 </td> 
                                                 <td align="center" style="color:Red;">
                                                    <%# DataBinder.Eval(Container.DataItem,"tu_donvi") %>
                                                 </td> 
                                                 <td align="center" style="color:Gray">
                                                    <%# DataBinder.Eval(Container.DataItem,"den_donvi") %>
                                                 </td>                                             
                                            </tr>
                                            </tbody>
                                        </ItemTemplate>
                                        <FooterTemplate>        
                                        </table>
                                        </FooterTemplate>
                                    </asp:Repeater>
                                </fieldset>
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


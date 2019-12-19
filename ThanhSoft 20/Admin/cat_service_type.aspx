<%@ Page Language="C#" MasterPageFile="~/Admin/MasterPageqtri.master" AutoEventWireup="true" CodeFile="cat_service_type.aspx.cs" Inherits="Admin_cat_service_type"  %>

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
				        <div class="header icon-48-cpanel">Danh mục loại dịch vụ</div>
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
			            
		                    <div class="col30">
			                    <fieldset class="adminform" >			                    
				                    <legend>Nhập thông tin</legend>
				                    <table class="admintable" cellspacing="1">
					                    <tr>
						                    <td class="key">Tên loại dịch vụ:</td>
                                            <td >
                                                <asp:TextBox ID="txtTen" runat="server" Width="200px"></asp:TextBox></td>
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
		                    <div class="col70"  style="float:right;">		                     
			                    <fieldset class="adminform">
				                    <legend>Danh sách loại dịch vụ</legend>
                                    <asp:Repeater id="rptProduct" runat="server">
                                        <HeaderTemplate>
                                        <table cellspacing="1" class="adminlist">
                                            <thead>
                                            <tr>
                                                <th valign="top" style="width:10px;">
                                                    <input id="chkAll" onclick="javascript:SelectAllCheckboxes(this,'rptProduct');" runat="server" type="checkbox" />
                                                </th>
                                                <th width="5"> STT </th>
                                                <th class="title" nowrap>Tên loại dịch vụ</th> 
                                            </tr>
                                            </thead>
                                        </HeaderTemplate>
                                        <ItemTemplate>
                                            <tbody>
                                            <tr class='<%# (Container.ItemIndex % 2 == 0) ? "row0" : "row1"%>'>
                                                <td valign="top" align="center" style="width:10px;">
                                                    <asp:CheckBox ID="chkSelect" runat="server" onclick="HighlightRow(this);"/>
                                                </td>
                                                <td><%# (Container.ItemIndex) + 1%></td>
                                                <td align="left" nowrap>
                                                    <asp:Label ID="lblHangHoaID" runat="server" Text='<%# DataBinder.Eval(Container.DataItem,"service_type_id")%>' Visible="false"></asp:Label>
                                                <a href="cat_service_type.aspx?service_type_id=<%# DataBinder.Eval(Container.DataItem,"service_type_id")%>"><%# DataBinder.Eval(Container.DataItem, "service_type_name")%></a></td>
                                                
                                               
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


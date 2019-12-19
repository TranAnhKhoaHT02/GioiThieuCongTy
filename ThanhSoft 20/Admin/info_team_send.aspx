<%@ Page Language="C#" MasterPageFile="~/Admin/MasterPageqtri.master" AutoEventWireup="true" CodeFile="info_team_send.aspx.cs" Inherits="Admin_info_team_send"  %>

<%@ Register TagPrefix="thanhsoft" Namespace="CuteEditor" Assembly="CuteEditor" %>   

<%@ Register assembly="AjaxControlToolkit" namespace="AjaxControlToolkit" tagprefix="cc1" %>
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
			        <asp:ScriptManager ID="srcip1" runat="server"></asp:ScriptManager>
			        <div class="m">
				        <div class="toolbar" id="toolbar">
                            <table class="toolbar">
                                <tr>
                                    <td class="button" id="Td1">
                                        <asp:LinkButton ID="btnSave" runat="server"  CssClass="toolbar" 
                                            OnClientClick="return cfAdd();" onclick="btnSave_Click">
                                            <span class="icon-32-save" title="Xóa"></span>Thêm
                                        </asp:LinkButton>
                                    </td>
                                    <td class="button" id="Td2">
                                        <asp:LinkButton ID="btnUpdate" Visible="false" runat="server" 
                                            CssClass="toolbar" OnClientClick="return cfSave();" onclick="btnUpdate_Click1">
                                            <span class="icon-32-adduser" title="Cập nhật"></span>Cập nhật
                                        </asp:LinkButton>
                                    </td>                                    
                                    <td class="button" id="toolbar-delete">
                                        <asp:LinkButton ID="btnDeleteAll" Visible="false" runat="server"  CssClass="toolbar" OnClientClick="return cfDeleteAll();">
                                            <span class="icon-32-delete" title="Xóa"></span>Xóa
                                        </asp:LinkButton>
                                    </td>
                                    <td class="button" id="Td3">
                                        <asp:LinkButton ID="btnCancel" Visible="false" runat="server"  
                                            CssClass="toolbar"
                                            onclick="btnCancel_Click1">
                                            <span class="icon-32-cancel" title="Bo qua"></span>Đóng
                                        </asp:LinkButton>
                                    </td>
                                </tr>
                            </table>
                        </div>
				        <div class="header icon-48-cpanel">Đăng bài viết</div>
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
			            
		                    <div class="col00">
			                    <fieldset class="adminform" >			                    
				                    <legend></legend>
				                    <table class="admintable" cellspacing="1" width="100%">				                       
				                        <tr>
						                    <td class="key">Tên dịch vụ:</td>
                                            <td >
                                                <asp:DropDownList ID="ddlDichvu" runat="server" 
                                                    DataValueField="loaidv_id" DataTextField="tendv" 
                                                    Width="150px"></asp:DropDownList>
                                            </td>	
					                    </tr>
					                     <tr>
						                    <td class="key">Tiêu đề:</td>
                                            <td colspan="3">
                                                <asp:TextBox ID="txtTitle" runat="server" Width="100%" Height="25px" 
                                                    TextMode="MultiLine" MaxLength="500"></asp:TextBox>
                                            </td>	
					                    </tr>                                                                               
					                    <tr>
						                    <td class="key" style="vertical-align:top">Diễn giải</td>
						                    <td colspan="10">						                                                                      
						                        <asp:TextBox ID="lblHeadingText" Width="100%" Height="159px"  runat="server" 
                                                    TextMode="MultiLine"></asp:TextBox>
						                                                                      
						                    </td>
					                    </tr> 
					                    <tr>
					                         <td class="key" style="vertical-align:top">Nội dung bài viết</td>
					                         <td colspan="3">
					                         <thanhsoft:Editor ID="editor" AllowPasteHtml="true" ThemeType="Office2007" ShowHtmlMode="true" runat="server"></thanhsoft:Editor>
					                         </td>
					                    </tr>  
					                    <tr>
					                        <td class="key">Nguồn bài viết</td>
					                        <td colspan="2">
					                            <asp:TextBox ID="txtSource" runat="server" Width="100%"></asp:TextBox>
					                        </td>
					                    </tr>  
					                    <tr>
					                       <td class="key">Ảnh bài viết</td>
					                       <td colspan="3">
					                          <asp:FileUpload ID="FileUpLoad1" ToolTip="Click chuột để đưa hình lên website" runat="server" Width="100%" />
					                       </td>					                       
					                    </tr> 
					                    
                                    </table>
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


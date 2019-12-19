<%@ Page Language="C#" MasterPageFile="~/Admin/MasterPageqtri.master" Debug="true"  ValidateRequest="false" AutoEventWireup="true" CodeFile="web_send.aspx.cs" Inherits="Admin_web_send"  %>

<%@ Register Assembly="FredCK.FCKeditorV2" Namespace="FredCK.FCKeditorV2" TagPrefix="FCKeditorV2" %>

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
                                            <span class="icon-32-update" title="Xóa"></span>Cập nhật
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
				                    <table class="admintable" cellspacing="1">
				                        <tr style="height:50px">
				                            <td align="right">Chọn loại tin cần đăng</td>
				                            <td>
				                                <asp:RadioButtonList ID="rbtChoise" runat="server" AutoPostBack="true" RepeatDirection="Horizontal">
				                                    <asp:ListItem Text="Giới thiệu công ty" Value="0" Selected="True"></asp:ListItem>
				                                    <asp:ListItem Text="Tin tức" Value="1"></asp:ListItem>
				                                    <asp:ListItem Text="Tin tức âm nhạc" Value="2"></asp:ListItem>
				                                </asp:RadioButtonList>
				                            </td>
				                        </tr>
				                        <tr>
						                    <td class="key">Tên loại chuyên mục:</td>
                                            <td >
                                                <asp:DropDownList ID="ddlServiceType" runat="server" 
                                                    DataValueField="service_type_id" DataTextField="service_type_name" 
                                                    Width="150px" onselectedindexchanged="ddlServiceType_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                            </td>					                    
						                    <td class="key">Tên chuyên mục:</td>
                                            <td >
                                                <asp:DropDownList ID="ddlService" runat="server" DataValueField="service_id" DataTextField="service_name" Width="150px"></asp:DropDownList>
                                            </td>  
					                    </tr> 
					                    <tr>
					                         <td class="key">Môn học ( nếu tin đăng là danh sách giáo viên theo môn:</td>
					                         <td>
					                          <asp:DropDownList ID="ddlMon" runat="server" Height="22px" Width="154px" >
					                            <asp:ListItem Text="Chọn tất cả" Value="0"></asp:ListItem>
					                            <asp:ListItem Text="Guitar Modern" Value="1"></asp:ListItem>
					                            <asp:ListItem Text="Guitar đệm hát" Value="2"></asp:ListItem>
					                            <asp:ListItem Text="Guitar Classic" Value="3"></asp:ListItem>
					                            <asp:ListItem Text="Guitar cổ nhạc" Value="4"></asp:ListItem>
					                            <asp:ListItem Text="Organ" Value="5"></asp:ListItem>
					                            <asp:ListItem Text="Piano" Value="6"></asp:ListItem>
					                            <asp:ListItem Text="Violon" Value="7"></asp:ListItem>
					                            <asp:ListItem Text="trống" Value="8"></asp:ListItem>
					                            <asp:ListItem Text="thanh nhạc" Value="9"></asp:ListItem>
					                            <asp:ListItem Text="sáng tác ca khúc" Value="10"></asp:ListItem>
					                             <asp:ListItem Text="soạn nhạc" Value="11"></asp:ListItem>
					                          </asp:DropDownList>
					                          
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
					                             
					                            <textarea name="textarea" runat="server" id="txtContent" class="ckeditor" style="width:100%; height:250px;"  cols="20" rows="7"></textarea>
                                                 
					                         </td>
					                    </tr>  
					                    <tr>
					                        <td class="key">Nguồn bài viết</td>
					                        <td colspan="2">
					                            <asp:TextBox ID="txtSource" runat="server" Width="100%"></asp:TextBox>
					                        </td>
					                    </tr>  
					                    <tr>
					                       <td class="key">Đính kèm tập tin</td>
					                       <td colspan="3">
					                          <asp:FileUpload ID="FileUpLoad1" ToolTip="click chuot de dua tai lieu len web" runat="server" Width="100%" />
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


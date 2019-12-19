<%@ Page Language="C#" MasterPageFile="~/Admin/MasterPageqtri.master" AutoEventWireup="true" CodeFile="info_team_list.aspx.cs" Inherits="Admin_info_team_list" %>

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
                                               
                                    <td class="button" id="toolbar-delete">
                                        <asp:LinkButton ID="btnDeleteAll" Visible="true" runat="server"  CssClass="toolbar" OnClientClick="return cfDeleteAll();">
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
				        <div class="header icon-48-cpanel">Danh sách các dịch vụ ThanhSoft</div>
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
				                             <td align="right">
				                                <asp:TextBox ID="txtSearch" runat="server" Width="150px"></asp:TextBox>				                            
                                                <asp:DropDownList ID="ddlDichvu" runat="server" 
                                                    DataValueField="loaidv_id" DataTextField="tendv"
                                                    Width="150px"></asp:DropDownList>
                                                    <asp:Button ID="btnSearch" runat="server" Text="Xem kết quả" 
                                                     onclick="btnSearch_Click" />
                                            </td>	
					                    </tr>
                                    </table>
                                </fieldset>
                            </div> 
                            <div class="col00">
                                  <fieldset class="adminform">
				                    <legend>Danh sách tiêu đề bài viết giới thiệu Thanhsoft</legend>
                                    <asp:Repeater id="rptTieuDe" runat="server">
                                        <HeaderTemplate>
                                        <table cellspacing="1" class="adminlist">
                                            <thead>
                                            <tr>
                                                <th valign="top" style="width:10px;">
                                                    <input id="chkAll" onclick="javascript:SelectAllCheckboxes(this,'rptTieuDe');" runat="server" type="checkbox" />
                                                </th>
                                                <th width="5"> STT </th>
                                                <th class="title">Tiêu đề</th>                                                 
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
                                                    <asp:Label ID="lblID" runat="server" Text='<%# DataBinder.Eval(Container.DataItem,"tintuc_id")%>' Visible="false"></asp:Label>
                                                <a href="info_team_send.aspx?info_id=<%# DataBinder.Eval(Container.DataItem,"tintuc_id")%>"><%# DataBinder.Eval(Container.DataItem, "tieude")%></a></td>
                                                                                  
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


<%@ Page Language="C#" MasterPageFile="~/Admin/MasterPageqtri.master" ValidateRequest="false" AutoEventWireup="true" CodeFile="web_list.aspx.cs" Inherits="Admin_web_list" %>

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
                                    <td class="button" id="Td1">
                                        <asp:LinkButton ID="btnNew" runat="server"  CssClass="toolbar" 
                                            onclick="btnNew_Click" >                                           
                                            <span class="icon-32-new" title="Thêm bài mới"></span>Thêm bài mới
                                        </asp:LinkButton>
                                    </td>
                                    <td class="button" id="toolbar-delete">
                                        <asp:LinkButton ID="btnDeleteAll" runat="server" OnClick="btnDeleteAll_Click"  CssClass="toolbar" OnClientClick="return cfDeleteAll();">
                                            <span class="icon-32-delete" title="Xóa"></span>Xóa
                                        </asp:LinkButton>
                                    </td>
                                </tr>
                            </table>
                        </div>
				        <div class="header icon-48-cpanel">Danh sách bài viết</div>
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
				                    <table class="admintable" cellspacing="1" style="text-align:right;">
				                        <tr align="right">						                   
						                    <td align="left">Tiêu đề:</td>
                                            <td >                                      
                                                <asp:DropDownList ID="ddlTitle" runat="server" DataValueField="information_id" DataTextField="title" Width="400px"></asp:DropDownList>
                                                <asp:Button ID="btnFitter" runat="server" Text="Lọc" Width="50px" 
                                                    CssClass="button" onclick="btnFitter_Click" />
                                                <asp:Button ID="btnCancel" runat="server" Text="Đóng" />
                                            </td>
					                    </tr>                                                                               
					                  </table>
                                </fieldset>
                            </div>
		                    <div class="col00"  style="float:right;">	
		                         <table width="100%" style="float:right;">
				                <tr>
				                    <td align="left">
				                        <asp:Label ID="lblFirstTop" runat="server" ></asp:Label>
                                        <asp:Label ID="lblPrevTop" runat="server" ></asp:Label>
                                        <asp:Label ID="lblCurrpageTop" runat="server" ForeColor="red" Font-Bold="true" ></asp:Label>
                                        <asp:Label ID="lblNextTop" runat="server" ></asp:Label>
                                        <asp:Label ID="lblLastTop" runat="server" ></asp:Label>
				                    </td>
				                    <td align="right">
				                        <asp:Label ID="lblTotalItemsTop" runat="server" Text="" ForeColor="White" Font-Size="13px" Font-Bold="true" style="height:25px; background-image:url(../images/tool/test_menu2.png); font-weight:bold; "></asp:Label>
				                    </td>
				                </tr>
				            </table>	                     
			                    <fieldset class="adminform">
				                    <legend>Danh sách chuyên mục</legend>
                                    <asp:Repeater id="rptQuyen" runat="server">
                                        <HeaderTemplate>
                                        <table cellspacing="1" class="adminlist">
                                            <thead>
                                            <tr>
                                                <th valign="top" style="width:10px;">
                                                    <input id="chkAll" onclick="javascript:SelectAllCheckboxes(this,'rptQuyen');" runat="server" type="checkbox" />
                                                </th>
                                                <th width="5"> STT </th>
                                                <th class="title">Tiêu đề bài viết</th>   
                                                <th class="title">Người đăng tin</th>                                                
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
                                                <a href="web_send.aspx?content_id=<%# DataBinder.Eval(Container.DataItem,"tintuc_id")%>"><%# DataBinder.Eval(Container.DataItem, "title")%></a></td>
                                                 <td align="center" nowrap>
                                                    <%# DataBinder.Eval(Container.DataItem,"human_post")%>
                                                 </td>                                 
                                            </tr>
                                            </tbody>
                                        </ItemTemplate>
                                        <FooterTemplate>        
                                        </table>
                                        </FooterTemplate>
                                    </asp:Repeater>
                                </fieldset>
                                  <table width="100%">
				                    <tr>
				                        <td align="left">
				                            <asp:Label ID="lblFirstBottom" runat="server" ></asp:Label>
                                            <asp:Label ID="lblPrevBottom" runat="server" ></asp:Label>
                                            <asp:Label ID="lblCurrpageBottom" runat="server" ForeColor="red" Font-Bold="true" ></asp:Label>
                                            <asp:Label ID="lblNextBottom" runat="server" ></asp:Label>
                                            <asp:Label ID="lblLastBottom" runat="server" ></asp:Label>
				                        </td>
				                        <td align="right">
				                            <asp:Label ID="lblTotalItemsBottom" runat="server" Text="" ForeColor="White" Font-Size="13px" Font-Bold="true" style="height:25px; background-image:url(../images/tool/test_menu2.png); font-weight:bold; "></asp:Label>
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



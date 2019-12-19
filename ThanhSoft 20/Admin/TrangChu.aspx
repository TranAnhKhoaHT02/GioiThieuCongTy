<%@ Page Language="C#" MasterPageFile="~/Admin/MasterPageqtri.master" AutoEventWireup="true" CodeFile="TrangChu.aspx.cs" Inherits="Admin_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div id="content-box" style="width:99%; margin: 0 auto;">
		<div class="border">
			<div class="padding" style="width:100%; margin:0 auto;">
				<div id="toolbar-box" >
   			        <div class="t">
				        <div class="t">
					        <div class="t"></div>
				        </div>
			        </div>
			        <div class="m">				        
				        <div class="header icon-48-systeminfo">
                           Trang quản trị Administrator<br />
                            &nbsp;</div>
				        <div class="clr"></div>
			        </div>
			        <div class="b">
				        <div class="b">
					        <div class="b" style="height: 16px"></div>
				        </div>
			        </div>
  		        </div>
   		        <%--<div class="clr"></div>--%>
                <asp:Label ID="lblMessageStatus" runat="server" Text="Label" Visible = "false"></asp:Label>
		        
	        </div>
	        <%--<div class="clr"></div>--%>
        </div>
    </div>
	<div id="border-bottom"><div><div></div></div></div>
		
</asp:Content>



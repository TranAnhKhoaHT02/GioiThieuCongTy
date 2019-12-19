<%@ Page Language="C#" Debug="true" AutoEventWireup="true" CodeFile="login.aspx.cs" Inherits="Admin_login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <title>Thanhsoft - Administrator</title>
    <script type="text/javascript" src="../js/mootools.js"></script>
   
    <link type="text/css" rel="Stylesheet" href="../css_software/login_thanhsoft.css" />
    <link type="text/css" rel="Stylesheet" href="../css_software/rounded.css" />
    <link type="text/css" rel="Stylesheet" href="../css_software/icon.css" />
   <!--<link href="../images/flag_vn.gif" rel="shortcut icon"/> -->
    <link rel="Stylesheet" href="../css_software/general.css" type="text/css" />
    <link href="../css_software/general_rtl.css" rel="stylesheet" type="text/css" />
    
</head>
<body style="margin:0 auto;">
    <form id="form1" runat="server" style="margin:0 auto;">
	    <div id="border-top" class="h_green">
	        <div>
	            <div>
	                <center class="title"><asp:Label ID="labetieude" runat="server">TRANG QUẢN TRỊ THANHSOFT.NET </asp:Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </center>
	            </div>
	        </div>		

	    </div>
	    <div id="content-box">
		    <div class="padding">
			    <div id="element-box" class="login">
				    <div class="t">
					    <div class="t">
						    <div class="t"></div>
					    </div>
				    </div>
				    <div class="m">
					    <h1>Đăng Nhập</h1>
						<div id="section-box">						    
			                <div class="t">
				                <div class="t">
					                <div class="t"></div>
		 		                </div>
	 		                </div>	 		               
			                <div class="m tooltip" style="text-align:center">
	                            <div id="form-login" style="background-color:White;"> 
	                                <table width="100%">
	                                    <tr></tr>
	                                </table>                      
	                                <div style="width:100%; height:auto; clear:right;">	                                
	                                        <div>Tên đăng nhập</div>
	                                        <div><asp:TextBox ID="txtUsername" runat="server" CssClass="inputbox" Width="126px"></asp:TextBox></div>
    	                                
	                                </div>	                                                           
	                                <div style="width:100%; height:auto;">	                                
	                                        <div> Mật khẩu</div>
	                                        <div><asp:TextBox ID="txtPassword"  runat="server" CssClass="inputbox" TextMode="Password" Width="126px"></asp:TextBox></div>
    	                                
	                                </div>	                                
	                           </div>
	                            <p><asp:Label ID="lblMessageFalse" runat="server" Visible="False"></asp:Label></p>
	                            <div style="padding-left: 180px;">
				                    <div class="toolbar" id="toolbar">
                                        <table class="toolbar">
                                            <tr>
                                                <td class="button" id="toolbar-login">
                                                    <asp:ImageButton ID="btnLogin" runat="server" ImageUrl="~/images/login-thanhsoft.png" OnClick="btnLogin_Click" Height="25px"/>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
	                            <div class="button1-left">
	                                <div class="next">
	                                </div>
	                            </div>
	                            </div>

	                            <div class="clr"></div>
				            <div class="clr"></div>
			            </div>
			                <div class="b">
				                <div class="b">
		 			                <div class="b"></div>
				                </div>
			                </div>
		                </div>
					    <p>
					        Dùng một tên đăng nhập và Mật mã hợp lý để đăng nhập vào khu vực quản trị
                         </p>
					    <div id="lock"></div>                       
					    <div class="clr"></div>
				        </div>
				    <div class="b">
					    <div class="b">
					        <div class="b"></div>
					    </div>
				    </div>
			    </div>
			    <div class="clr"></div>
		    </div>
	    </div>	    
	    <div id="border-bottom"><div><div></div> 
	       <!-- thong tin ban quyen-->
	       <center>
	        <p>
	          Copyright &copy 2010  <a href="http://www.thanhsoft.net"> WwW.Thanhsoft.net</a> 
	        </p>
	       </center>
	    </div>
    </div>
    </form>
</body>
</html>

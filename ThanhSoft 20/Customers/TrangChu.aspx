<%@ Page Language="C#" MasterPageFile="~/Customers/MasterPage.master" AutoEventWireup="true"
    CodeFile="TrangChu.aspx.cs" Inherits="Customers_Default2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div style="background-image: url(../Images/home.png); background-repeat: no-repeat;
        text-indent: 27px; font-weight: bold; color: #a43803; font-size: 14.5pt; border-bottom: solid 2px #636060;
        margin-left: 5px; text-decoration:none">
        Trang chủ</div>
    <table class="chungbogoc" cellpadding="0" cellspacing="0">
        <tr>
            <td style="height: 140px; background-repeat: no-repeat; width: 172px">
                <img alt="" src="../Images/gioithieu.gif" style="margin-bottom: 95px; width: 170px" />
            </td>
            <td style="width: 10px;">
            </td>
            <td style="text-align: center">
                <p style="margin: 5px 7px 0px auto; width: 410px; height: auto; text-align: justify;
                    float: left">
                    <span style="color: #CC3300; margin-top: 0px">Chào mừng quí khách đến với THANHSOFT.NET
                        , trước tiên Công Ty THANHSOFT xin gửi đến quý khách hàng lời chào trân trọng và
                        kính chúc quý khách gặt hái được nhiều thành công trong tương lai.</span><br />
                    <span style="color: #666666; font: Arial 24pt">Website ngày càng mang đến lợi ích cho
                        doanh nghiệp, cung cấp thông tin nhanh chóng và không bị hạn chế, tiết kiệm chi
                        phí quảng cáo, khai thác được nhiều khách hàng tiềm năng ở cả trong nước và nước
                        ngoài.<br />
                        Chúng tôi đặt mình vào vị trí khách hàng và xác định <a href="#" style="text-decoration: none;
                            color: #666666"><b>thiết kế website</b></a> không phải là một hoạt động tiêu
                        tiền mà là một khoản đầu tư. Chúng tôi lấy tiêu chí<b> hiệu quả</b> là đầu tiên
                        trước khi bắt đầu thiết kế Website. </span>
                </p>
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td style="width: 10px">
            </td>
            <td>
                <div style="float: right; margin-right: 3px">
                    <asp:ImageButton ID="imgbt1" runat="server" ImageUrl="~/Images/tintuc/t_news_next.jpg"
                        PostBackUrl="~/Customers/gioithieu.aspx" />
                </div>
            </td>
        </tr>
    </table>
    <div style="border: solid 1px #C0C0C0; -moz-border-radius: 7px 7px 7px 7px; font-weight: bold;
        height: auto; background-color: white; margin: 8px 6px 5px 9.5px">
        <div style="height: 45px; color: #a43803; font-size: 15pt; text-indent: 10px">
            <img alt="" src="../Images/dichvu.png" width="35px" height="32px" style="margin-top: 5px" />Các
            dịch vụ cung cấp</div>
        <%--&nbsp--%><div style="height: 10px">
        </div>
        <table width="100%">
            <tr>
                <td style="width: 140px">
                    <img alt="" src="../Images/arrow-right-icon.png" height="27px" width="30px" style="float: right" />
                </td>
                <td style="font-size: 12.5pt; text-indent: 10px">
                    <span style="font-weight: normal">Lập trình, thiết kế website</span>
                </td>
            </tr>
            <tr>
                <td style="width: 140px">
                    <img alt="" src="../Images/arrow-right-icon.png" height="27px" width="30px" style="float: right" />
                </td>
                <td style="font-size: 12.5pt; text-indent: 10px">
                    <span style="font-weight: normal">Quản trị website</span>
                </td>
            </tr>
            <tr>
                <td style="width: 140px">
                    <img alt="" src="../Images/arrow-right-icon.png" height="27px" width="30px" style="float: right" />
                </td>
                <td style="font-size: 12.5pt; text-indent: 10px">
                    <span style="font-weight: normal">Lập trình phần mềm</span>
                </td>
            </tr>
        </table>
    </div>
    <div style="border: solid 1px #C0C0C0; -moz-border-radius: 7px 7px 7px 7px; height: auto;
        background-color: white; margin: 13px 6px 5px 9.5px">
        <div style="height: 45px; color: #a43803; font-size: 15pt; text-indent: 10px; font-weight: bold">
            <img alt="" src="../Images/boxkienthuc.png" width="35px" height="32px" style="margin-top: 5px" />Những câu hỏi thường gặp (FQA)</div>
        <%--&nbsp--%><div style="height: 10px">
        </div>
        <table width="100%">
            <tr>
                <td style="width: 140px">
                    <img alt="" src="../Images/checkgreen.gif" style="float: right" />
                </td>
                <td style="text-indent: 10px">
                    <a href="websitelagi.aspx" style="text-decoration: none; color: black">Website là gì
                        ?</a>
                </td>
            </tr>
            <tr>
                <td style="width: 140px">
                    <img alt="" src="../Images/checkgreen.gif" style="float: right" />
                </td>
                <td style="text-indent: 10px">
                    <a href="quitrinhweb.aspx" style="text-decoration: none; color: black">Quy trình làm
                        một website.</a>
                </td>
            </tr>
            <tr>
                <td style="width: 140px">
                    <img alt="" src="../Images/checkgreen.gif" style="float: right" />
                </td>
                <td style="text-indent: 10px">
                    <a href="host.aspx" style="text-decoration: none; color: black">Hosting là gì ?</a>
                </td>
            </tr>
            <tr>
                <td style="width: 140px">
                    <img alt="" src="../Images/checkgreen.gif" style="float: right" />
                </td>
                <td style="text-indent: 10px">
                    <a href="domain.aspx" style="text-decoration: none; color: black">Tên miền là gì ?</a>
                </td>
            </tr>
            <tr>
                <td style="width: 140px">
                    <img alt="" src="../Images/checkgreen.gif" style="float: right" />
                </td>
                <td style="text-indent: 10px">
                    <a href="taisaophaicodomain.aspx" style="text-decoration: none; color: black">Taị sao
                        phải đăng ký tên miền ?</a>
                </td>
            </tr>
            <tr>
                <td style="width: 140px">
                    <img alt="" src="../Images/checkgreen.gif" style="float: right" />
                </td>
                <td style="text-indent: 10px">
                    <a href="lam gi de bao ve ten mien.aspx" style="text-decoration: none; color: black">
                        Làm gì để bảo vệ tên miền của bạn ?</a>
                </td>
            </tr>
        </table>
    </div>
    <div style="height: 15px">
    </div>
</asp:Content>

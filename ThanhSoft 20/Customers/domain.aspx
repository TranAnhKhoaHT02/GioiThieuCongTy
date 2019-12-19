<%@ Page Language="C#" MasterPageFile="~/Customers/MasterPage.master" AutoEventWireup="true" CodeFile="domain.aspx.cs" Inherits="Customers_Default2" Title="tên miền là gì?" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div style="height:12px"></div>
<p style="margin-left:15px; font-size:13.5pt; font-weight:bold; font-family:Times New Roman">1. Tên miền là gì ?</p><br />
<p class="web">Theo định nghĩa (RFC 1034, được cập nhật bằng RFC 1123), tên miền - domain được tạo thành từ các nhãn không rỗng phân cách nhau bằng dấu chấm (.); những nhãn này giới hạn ở các chữ cái ASCII từ a đến z (không phân biệt hoa thường), chữ số từ 0 đến 9, và dấu gạch ngang (-), kèm theo những giới hạn về chiều dài tên và vị trí dấu gạch ngang. Đó là dấu gạch ngang không được xuất hiện ở đầu hoặc cuối của nhãnh, và chiều dài của nhãn nên trong khoảng từ 1 đến 63 và tổng chiều dài của một tên miền không được vượt quá 255 (đây là hạn chế của DNS, xem RFC 2181, tiết đoạn 11). Vì định nghĩa này không cho phép sử dụng nhiều ký tự thường thấy trong các ngôn ngữ không phải tiếng Anh, và không có các ký tự nhiều byte trong đa số ngôn ngữ châu Á, hệ thống Tên miền quốc tế hóa (IDN) đã được phát triển và hiện đang ở giai đoạn thử nghiệm với một tập tên miền cấp cao nhất được tạo ra vì mục đích này.</p><br />
<p class="web">Ký tự gạch dưới thường được sử dụng để đảm bảo bằng một tên miền - domain không bị nhận lầm là một hostname, ví dụ như trong cách dùng bản ghi SRV, mặc dù một số hệ thống cũ hơn như NetBIOS cho phép điều này. Để tránh nhầm lẫn và vì các lý do khác, tên miền có ký tự gạch dưới đôi khi được dùng vào những khi bắt buộc phải có hostname.</p><br />
<p class="web">Người đăng ký tên miền thường được gọi là chủ tên miền - domain , mặc dù việc một người đăng ký một tên miền không phải là người sở hữu hợp pháp cái tên đó, mà chỉ là độc quyền sử dụng nó mà thôi.</p><br />
<p style="margin-left:15px; font-size:13.5pt; font-weight:bold; font-family:Times New Roman">3.Ví dụ</p><br />
<p class="web">Ví dụ nhau minh họa cho sư khác nhau giữa một địa chỉ URL (Uniform Resource Locator) và một tên miền:

URL: http://www.vidu.net/index.html<br />
Tên miền: www.vidu.net<br />
Tên miền đã đăng ký: vidu.net</p><br /><p style="margin-left:15px; font-size:13.5pt; font-weight:bold; font-family:Times New Roman">4.  Ý nghĩa các đuôi tên miền</p>
<br /><p style="margin-left:60px; width:450px">     .com (Communication - Dành cho mọi đối tượng, cá nhân, doanh nghiệp)<br />

      .net (Network - Dành cho các nhà cung cấp dịch vụ web, net)<br />

      .org (Organization - Các tổ chức phi chính phủ hoặc phi lợi nhuận)<br />

      .edu (Education - Dành cho các tổ chức giáo dục đào tạo)<br />

      .info (Information - Website về lĩnh vực thông tin)<br />

      .name (Name - Sử dụng cho trang cá nhân, blog, website cá nhân)<br />

     .biz (Business - Dùng cho các trang thương mại)<br />

     .gov (Government - Dành cho các tổ chức chính phủ)<br />

     .ws (Website - Sử dụng cho các tổ chức thương mại hoặc cá nhân)<br />

     .us (US - Dành cho cá nhân hay công ty Mỹ)<br />

</p>
<div style="height:10px"></div>
<div style="border-top: solid 1px #C0C0C0; height: auto;
        background-color: white; margin: 8px 0px 5px 0px">
        <div style="height: 45px; color: black; font-size: 13pt; text-indent: 10px; font-weight: bold">
            <img alt="" src="../Images/boxkienthuc.png" width="35px" height="32px" style="margin-top: 5px" />Bài viết liên quan</div>
        <%--&nbsp--%><div style="height: 10px">
        </div>
        <table width="100%">
            <tr>
                <td style="width: 60px">
                    <img alt="" src="../Images/checkgreen.gif" style="float: right" />
                </td>
                <td style="text-indent: 10px"><a href="quitrinhweb.aspx" style="text-decoration:none; color:black">
                    Quy trình làm một website.</a>
                </td>
            </tr>
            <tr>
                <td style="width: 60px">
                    <img alt="" src="../Images/checkgreen.gif" style="float: right" />
                </td>
                <td style="text-indent: 10px"><a href="websitelagi.aspx" style="text-decoration:none; color:black">
                    Website là gì ?</a>
                </td>
            </tr>
            <tr>
                <td style="width: 60px">
                    <img alt="" src="../Images/checkgreen.gif" style="float: right" />
                </td>
                <td style="text-indent: 10px"><a href="host.aspx" style="text-decoration:none; color:black">
                    Hosting là gì ?</a>
                </td>
            </tr>
            <tr>
                <td style="width: 60px">
                    <img alt="" src="../Images/checkgreen.gif" style="float: right" />
                </td>
                <td style="text-indent: 10px"><a href="taisaophaicodomain.aspx" style="text-decoration:none; color:black">
                    Taị sao phải có tên miền ?</a>
                </td>
            </tr>
            <tr>
                <td style="width: 60px">
                    <img alt="" src="../Images/checkgreen.gif" style="float: right" />
                </td>
                <td style="text-indent: 10px"><a href="lam gi de bao ve ten mien.aspx" style="text-decoration:none; color:black">
                    Làm gì để bảo vệ tên miền của bạn ?</a>
                </td>
            </tr>
        </table>
    </div>
</asp:Content>


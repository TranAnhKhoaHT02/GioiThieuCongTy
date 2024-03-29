﻿using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Net.Mail;

public partial class Customers_Default2 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void btnSend_Click(object sender, EventArgs e)
    {
        SmtpClient SmtpServer = new SmtpClient();
        SmtpServer.Credentials = new System.Net.NetworkCredential("hoatk61@gmail.com", "hoanguyenthi");
        SmtpServer.Port = 587;
        SmtpServer.Host = "smtp.gmail.com";
        SmtpServer.EnableSsl = true;
        MailMessage mail = new MailMessage();

        try
        {
            mail.From = new MailAddress(txtEmail.Text, txtHoTen.Text + " gửi từ form liên hệ", System.Text.Encoding.UTF8);
            mail.To.Add("hoatk61@gmail.com");
            mail.Subject = "Mail từ Form liên hệ hmweb.com.vn";
            mail.Body = MailBody();
            mail.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;
            mail.ReplyTo = new MailAddress("hoatk61@gmail.com");
            mail.Priority = MailPriority.High;
            mail.IsBodyHtml = true;
            SmtpServer.Send(mail);
            Label1.Text = "Cảm ơn bạn đã gửi thông điệp đến hmweb!";
            ResetFrom();
        }
        catch (Exception ex) { Label1.Text = ex.Message.ToString(); }
    }
    private void ResetFrom()
    {
        txtHoTen.Text = "";
        txtDiaChi.Text = "";
        txtDienThoai.Text = "";
        txtEmail.Text = "";
        txtNoiDung.Text = "";
    }

    private string MailBody()
    {
        string strHTML = "";
        strHTML += "Họ và tên: " + txtHoTen.Text + "<br>";
        strHTML += "Địa chỉ: " + txtDiaChi.Text + "<br>";
        strHTML += "Điện thoại: " + txtDienThoai.Text + "<br>";
        strHTML += "Email: " + txtEmail.Text + "<br>";
        strHTML += "Đã gửi qua Form liên hệ với thông điệp:<br><b>";
        strHTML += txtNoiDung.Text + "</b>";
        return strHTML;
    }
}

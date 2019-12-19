using System;
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

public partial class Admin_changepassword : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Page.SetFocus(txtPassWord);
    }
    private bool SearchPassword()
    {
        clsConnect cn = new clsConnect();
        string sql = "";
        int parameter = 5;
        string[] name = new string[parameter];
        object[] value = new object[parameter];
        if (txtPassWordReNew.Text.Trim().ToUpper() != txtPassWordNew.Text.Trim().ToUpper())
        {
            lblMsg.Text = "Mật khẩu mới không hợp lệ.";
            lblMsg.ForeColor = System.Drawing.Color.Red;
            return false;
        }
        else
        {
            sql = "SELECT * FROM taikhoan WHERE nhanvien_ma=@nhanvien_ma";
            parameter = 1;
            name[0] = "@nhanvien_ma";
            value[0] = Session["nhanvien_ma"].ToString();
            DataTable dt = cn.LoadData(sql, name, value, parameter);
            if (dt.Rows.Count == 0)
            {
                cn.close();
                return false;
            }
            lblUserName.Text = dt.Rows[0]["username"].ToString();
            sql = "SELECT * FROM taikhoan WHERE username=@username AND password=@password";
            parameter = 2;
            name[0] = "@username";
            name[1] = "@password";
            value[0] = lblUserName.Text.Trim();
            value[1] = txtPassWord.Text.Trim();
            dt = cn.LoadData(sql, name, value, parameter);
            if (dt.Rows.Count > 0)
            {
                cn.close();
                return true;
            }
            lblMsg.Text = "Mật khẩu không đúng.";
            lblMsg.ForeColor = System.Drawing.Color.Red;
            cn.close();
            return false;

        }
    }
    protected void btnBack_Click(object sender, EventArgs e)
    {
        Response.Redirect("TrangChu.aspx");
    }

    protected void btnSave_Click(object sender, EventArgs e)
    {
        if (!SearchPassword())
            return;
        clsConnect cn = new clsConnect();
        string sql = "UPDATE taikhoan SET password=@password WHERE nhanvien_ma=@nhanvien_ma";
        int parameter = 2;
        string[] name = new string[parameter];
        object[] value = new object[parameter];
        name[0] = "@password";
        name[1] = "@nhanvien_ma";
        value[0] = txtPassWordNew.Text.Trim();
        value[1] = Session["nhanvien_ma"].ToString();
        cn.UpdateData(sql, name, value, parameter);
        cn.close();
        lblMsg.Text = "Bạn đã đổi mật khẩu thành công!";
        lblMsg.ForeColor = System.Drawing.Color.Blue;
        txtPassWord.Text = "";
        txtPassWordNew.Text = "";
        txtPassWordReNew.Text = "";
    }
}

using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Text;

public partial class Admin_login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack) return;

        Page.SetFocus(txtUsername);

    }

    protected void btnLogin_Click(object sender, ImageClickEventArgs e)
    {

        //chon server la quan tri
        clsConnect cn = new clsConnect();
        int parameter = 2;
        string[] name = new string[parameter];
        object[] value = new object[parameter];
        //
        #region dau tien
        if (txtUsername.Text == "")
        {
            lblMessageFalse.Visible = true;
            lblMessageFalse.Text = "Tên đăng nhập không được rỗng";
        }
        else
        {
            try
            {
                //Neu username ko rong thi kiem tra tiep
                string sql = "select * from TaiKhoan where username = @user_name";
                parameter = 1;
                name[0] = "@user_name";
                value[0] = txtUsername.Text.Trim();
                #region user
                DataTable dt_user = cn.LoadData(sql, name, value, parameter);
                if (dt_user.Rows.Count > 0)
                {
                    //neu co du lieu la username, tiep tuc kiem tra password
                    #region kiemtra pass
                    if (txtPassword.Text == "")
                    {
                        lblMessageFalse.Visible = true;
                        lblMessageFalse.Text = "Mật khẩu không được rỗng";
                    }
                    else
                    {
                        //Neu mat khau khong rong
                        sql = "select * from TaiKhoan where username = @user_name AND password=@pass_word";
                        parameter = 2;
                        name[0] = "@user_name";
                        name[1] = "@pass_word";
                        value[0] = dt_user.Rows[0]["username"].ToString();
                        value[1] = txtPassword.Text.Trim();
                        DataTable dt_full = cn.LoadData(sql, name, value, parameter);
                        #region sesson
                        if (dt_full.Rows.Count > 0)
                        {
                            //Neu co du lieu trung khop voi username va password thi lien qua trang chu
                            Session["nhanvien_ma"] = Convert.ToInt16(dt_full.Rows[0]["nhanvien_ma"]);
                            Session["quyen_ma"] = Convert.ToInt32("0" + dt_full.Rows[0]["quyen_ma"]);
                            Session["username"] = dt_full.Rows[0]["username"].ToString();
                            Response.Redirect("TrangChu.aspx");
                        }
                        else
                        {
                            lblMessageFalse.Visible = true;
                            lblMessageFalse.Text = "Mật khẩu không chính xác";
                            txtPassword.Text = "";
                            txtPassword.Focus();
                        }

                        #endregion

                    }

                    #endregion


                }
                else
                {
                    lblMessageFalse.Visible = true;
                    lblMessageFalse.Text = "Tên đăng nhập không chính xác";
                    txtPassword.Text = "";
                    txtUsername.Focus();
                }

                #endregion

            }
            catch (Exception)
            {
            }



        }

        #endregion


    }

}

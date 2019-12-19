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

public partial class Admin_Default2 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack) return;

        if (Request.QueryString["add"] != null && !Request.QueryString["add"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>1 tài khoản [" + Request.QueryString["add"].ToString() + "] đã được thêm thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        if (Request.QueryString["save"] != null && !Request.QueryString["save"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>Thông tin tài khoản [" + Request.QueryString["save"].ToString() + "] đã được cập nhật thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        if (Request.QueryString["delete"] != null && !Request.QueryString["delete"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>1(nhiều) tài khoản đã được xóa thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        clsConnect cn = new clsConnect();
        int Nparameter = 10;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        string sqlText = "SELECT * FROM TaiKhoan DN " +
            "LEFT JOIN Quyen Q ON DN.quyen_ma=Q.quyen_ma " +
            "LEFT JOIN nhanvien NV ON DN.nhanvien_ma=NV.nhanvien_ma WHERE id!=0";

        Nparameter = 0;
        if (Request.QueryString["id"] != null && !Request.QueryString["id"].Equals(""))
        {
            string sqlText1 = "SELECT * FROM TaiKhoan DN " +
           "LEFT JOIN quyen Q ON DN.quyen_ma=Q.quyen_ma " +
           "LEFT JOIN nhanvien NV ON DN.nhanvien_ma=NV.nhanvien_ma WHERE id!=0 AND  id = @id;";
            Nparameter = 1;
            name[0] = "@id";
            value[0] = Request.QueryString["id"];
            DataTable dt = cn.LoadData(sqlText1, name, value, Nparameter);
            if (dt.Rows.Count > 0)
            {
                DataRow row = dt.Rows[0];
                txtTen.Text = row["username"].ToString();
                txtMatKhau.Text = row["password"].ToString();
                txtFrom.Text = row["tu_donvi"].ToString();
                txtTo.Text = row["den_donvi"].ToString();
                if (row["nhanvien_ma"].ToString() != "")
                {
                    ddlNhanVien.Text = row["nhanvien_ma"].ToString();
                }
                if (row["quyen_ma"].ToString() != "")
                {
                    ddlQuyen.Text = row["quyen_ma"].ToString();
                }
                btnInsert.Visible = false;
                btnUpdate.Visible = true;
                btnDelete.Visible = false;
                btnCancel.Visible = true;
            }
        }
        else
        {
            btnInsert.Visible = true;
        }

        rptQuyen.DataSource = cn.LoadData(sqlText, name, value, Nparameter);
        rptQuyen.DataBind();
        //Nhan vien
        sqlText = "SELECT * FROM nhanvien";
        ddlNhanVien.DataSource = cn.LoadData(sqlText);
        ddlNhanVien.DataBind();
        //quyen
        sqlText = "SELECT * FROM quyen";
        ddlQuyen.DataSource = cn.LoadData(sqlText);
        ddlQuyen.DataBind();

        #region phan quyen trang
        try
        {
            sqlText = "select * from chitietquyen CT JOIN menu M ON CT.menu_id=M.menu_id " +
                   "WHERE quyen_ma=@quyen_ma AND menu_url=@menu";
            Nparameter = 2;
            name[0] = "@quyen_ma";
            name[1] = "@menu";
            value[0] = Session["quyen_ma"];
            value[1] = Request.Url.Segments[Request.Url.Segments.Length - 1].ToString();
            DataTable dt3 = cn.LoadData(sqlText, name, value, Nparameter);
            //kiem tra xem url nhap vao co chinh xac khong
            if (dt3.Rows.Count == 0)
            {
                Response.Redirect("access_denied.aspx");
            }
        }
        catch (Exception)
        {
            Response.Redirect("login.aspx");
        }

        #endregion
        cn.close();
        Page.SetFocus(txtTen);
    }
    private bool IsNumeric(string numberString)
    {
        if (numberString == "")
            return false;
        foreach (char c in numberString)
        {
            if (!char.IsNumber(c) && c != '.')
                return false;
        }
        return true;
    }
    private bool Validate(int id)
    {
        clsConnect cn = new clsConnect();
        string sqlText = "";
        int Nparameter = 10;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        if (txtTen.Text == "")
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Nhập tên tài khoản</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
            return false;
        }

        else
        {
            Nparameter = 2;
            name[0] = "@username";
            name[1] = "@id";
            value[0] = txtTen.Text.Trim();
            value[1] = id;
            if (id == 0)
            {
                Nparameter = 1;
                sqlText = "select * from TaiKhoan where username = @username ";
            }
            else
            {
                sqlText = "select * from TaiKhoan where username = @username and id != @id";
            }
            if (cn.LoadData(sqlText, name, value, Nparameter).Rows.Count > 0)
            {
                lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Tên tài khoản này đã có.</li></ul></dd></dl>";
                lblMessageStatus.Visible = true;
                return false;
            }
        }

        return true;
    }
    protected void btnInsert_Click(object sender, EventArgs e)
    {
        if (Validate(0))
        {
            String sqlText =
            "INSERT INTO TaiKhoan(username,password,quyen_ma,nhanvien_ma,tu_donvi,den_donvi) VALUES( " +
            "@user,@password,@quyen_ma,@nhanvien_ma,@tu_donvi,@den_donvi);";
            clsConnect cn = new clsConnect();
            int Nparameter = 6;
            string[] name = new string[Nparameter];
            object[] value = new object[Nparameter];
            name[0] = "@user";
            name[1] = "@password";
            name[2] = "@quyen_ma";
            name[3] = "@nhanvien_ma";
            name[4] = "@tu_donvi";
            name[5] = "@den_donvi";
            value[0] = txtTen.Text.Trim();
            value[1] = txtMatKhau.Text.Trim();
            value[2] = ddlQuyen.Text;
            value[3] = ddlNhanVien.Text;
            value[4] = txtFrom.Text.Trim();
            value[5] = txtTo.Text.Trim();
            cn.UpdateData(sqlText, name, value, Nparameter);
            cn.close();
            String strURL = "sys_sercurity.aspx?add=1";
            Response.Redirect(strURL);
        }
    }

    protected void btnUpdate_Click(object sender, EventArgs e)
    {
        int id = 0;
        try
        {
            id = Convert.ToInt32(Request.QueryString["id"]);
        }
        catch (Exception ex) { }
        if (Validate(id))
        {
            String sqlText =
            "UPDATE TaiKhoan SET username = @username,password=@password,nhanvien_ma=@nhanvien_ma, " +
            " quyen_ma=@quyen_ma,tu_donvi=@tu_donvi,den_donvi=@den_donvi " +
            "WHERE id = @id";
            clsConnect cn = new clsConnect();
            int Nparameter = 7;
            string[] name = new string[Nparameter];
            object[] value = new object[Nparameter];
            name[0] = "@username";
            name[1] = "@password";
            name[2] = "@quyen_ma";
            name[3] = "@nhanvien_ma";
            name[4] = "@tu_donvi";
            name[5] = "@den_donvi";
            name[6] = "@id";
            value[0] = txtTen.Text.Trim();
            value[1] = txtMatKhau.Text.Trim();
            value[2] = ddlQuyen.Text;
            value[3] = ddlNhanVien.Text;
            value[4] = txtFrom.Text.Trim();
            value[5] = txtTo.Text.Trim();
            value[6] = id;
            cn.UpdateData(sqlText, name, value, Nparameter);
            cn.close();
            String strURL = "sys_sercurity.aspx?save=1";
            Response.Redirect(strURL);
        }
    }

    protected void btnDelete_Click(object sender, EventArgs e)
    {
        DeleteIDList(Request.QueryString["id"].ToString());
        String strURL = "sys_sercurity.aspx?delete=1";
        Response.Redirect(strURL);
    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("sys_sercurity.aspx");
    }

    protected void btnDeleteAll_Click(object sender, EventArgs e)
    {
        foreach (RepeaterItem rptItem in rptQuyen.Items)
        {
            if (((CheckBox)rptItem.FindControl("chkSelect")).Checked)
                DeleteIDList(((Label)rptItem.FindControl("lblID")).Text);
        }
        String strURL = "sys_sercurity.aspx?delete=1";
        Response.Redirect(strURL);
    }

    protected void DeleteIDList(String id)
    {
        //room_type table
        String sqlText = "DELETE FROM TaiKhoan WHERE id = @id";
        clsConnect cn = new clsConnect();
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@id";
        value[0] = id;
        cn.UpdateData(sqlText, name, value, Nparameter);
        cn.close();
    }
}

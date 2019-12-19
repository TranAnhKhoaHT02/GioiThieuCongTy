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

public partial class Admin_sys_employee : System.Web.UI.Page
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
        string sqlText = "SELECT * FROM NhanVien ";
        Nparameter = 0;
        if (Request.QueryString["NhanVien_Ma"] != null && !Request.QueryString["NhanVien_Ma"].Equals(""))
        {
            string sqlText1 = "SELECT * FROM NhanVien " +
                   "WHERE NhanVien_Ma = @NhanVien_Ma;";
            Nparameter = 1;
            name[0] = "@NhanVien_Ma";
            value[0] = Request.QueryString["NhanVien_Ma"];
            DataTable dt = cn.LoadData(sqlText1, name, value, Nparameter);
            if (dt.Rows.Count > 0)
            {
                DataRow row = dt.Rows[0];
                txtTen.Text = row["NhanVien_Ten"].ToString();
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
        #region phan quyen trang
        try
        {
            sqlText = "select * from ChiTietQuyen CT JOIN menu M ON CT.menu_id=M.menu_id " +
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
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Nhập tên nhân viên</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
            return false;
        }

        else
        {
            Nparameter = 2;
            name[0] = "@nhanvien_ten";
            name[1] = "@nhanvien_ma";
            value[0] = txtTen.Text.Trim();
            value[1] = id;
            if (id == 0)
            {
                Nparameter = 1;
                sqlText = "select * from nhanvien where nhanvien_ten = @nhanvien_ten ";
            }
            else
            {
                sqlText = "select * from nhanvien where nhanvien_ten = @nhanvien_ten and nhanvien_ma != @nhanvien_ma";
            }
            if (cn.LoadData(sqlText, name, value, Nparameter).Rows.Count > 0)
            {
                lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Tên nhân viên này đã có.</li></ul></dd></dl>";
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
            "INSERT INTO nhanvien(nhanvien_ten) VALUES( " +
            "@nhanvien_ten);";
            clsConnect cn = new clsConnect();
            int Nparameter = 1;
            string[] name = new string[Nparameter];
            object[] value = new object[Nparameter];
            name[0] = "@nhanvien_ten";
            value[0] = txtTen.Text.Trim();
            cn.UpdateData(sqlText, name, value, Nparameter);
            cn.close();
            String strURL = "sys_employee.aspx?add=1";
            Response.Redirect(strURL);
        }
    }

    protected void btnUpdate_Click(object sender, EventArgs e)
    {
        int id = 0;
        try
        {
            id = Convert.ToInt32(Request.QueryString["nhanvien_ma"]);
        }
        catch (Exception ex) { }
        if (Validate(id))
        {
            String sqlText =
            "UPDATE nhanvien SET nhanvien_ten = @nhanvien_ten " +
            "WHERE nhanvien_ma = @nhanvien_ma";
            clsConnect cn = new clsConnect();
            int Nparameter = 2;
            string[] name = new string[Nparameter];
            object[] value = new object[Nparameter];
            name[0] = "@nhanvien_ten";
            name[1] = "@nhanvien_ma";
            value[0] = txtTen.Text.Trim();
            value[1] = id;
            cn.UpdateData(sqlText, name, value, Nparameter);
            cn.close();
            String strURL = "sys_employee.aspx?save=1";
            Response.Redirect(strURL);
        }
    }

    protected void btnDelete_Click(object sender, EventArgs e)
    {
        DeleteIDList(Request.QueryString["id"].ToString());
        String strURL = "sys_employee.aspx?delete=1";
        Response.Redirect(strURL);
    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("sys_employee.aspx");
    }

    protected void btnDeleteAll_Click(object sender, EventArgs e)
    {
        foreach (RepeaterItem rptItem in rptQuyen.Items)
        {
            if (((CheckBox)rptItem.FindControl("chkSelect")).Checked)
                DeleteIDList(((Label)rptItem.FindControl("lblID")).Text);
        }
        String strURL = "sys_employee.aspx?delete=1";
        Response.Redirect(strURL);
    }

    protected void DeleteIDList(String id)
    {
        //room_type table
        String sqlText = "DELETE FROM nhanvien WHERE nhanvien_ma = @nhanvien_ma";
        clsConnect cn = new clsConnect();
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@nhanvien_ma";
        value[0] = id;
        cn.UpdateData(sqlText, name, value, Nparameter);
        cn.close();
    }
}

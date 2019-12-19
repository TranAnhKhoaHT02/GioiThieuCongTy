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

public partial class Admin_cat_service_type : System.Web.UI.Page
{
    private static string quyen = "";
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack) return;

        if (Request.QueryString["add"] != null && !Request.QueryString["add"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>1 loại dịch vụ [" + Request.QueryString["add"].ToString() + "] đã được thêm thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        if (Request.QueryString["save"] != null && !Request.QueryString["save"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>Thông tin loại dịch vụ [" + Request.QueryString["save"].ToString() + "] đã được cập nhật thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        if (Request.QueryString["delete"] != null && !Request.QueryString["delete"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>1(nhiều) loại dịch vụ đã được xóa thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        clsConnect cn = new clsConnect();
        int Nparameter = 10;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];

        string sqlText = "SELECT * FROM service_type ";
        rptProduct.DataSource = cn.LoadData(sqlText);
        rptProduct.DataBind();
        if (Request.QueryString["service_type_id"] != null && !Request.QueryString["service_type_id"].Equals(""))
        {
            sqlText = "SELECT * FROM service_type WHERE service_type_id = @service_type_id;";
            Nparameter = 1;
            name[0] = "@service_type_id";
            value[0] = Request.QueryString["service_type_id"];
            DataTable dt = cn.LoadData(sqlText, name, value, Nparameter);
            if (dt.Rows.Count > 0)
            {
                DataRow row = dt.Rows[0];
                txtTen.Text = row["service_type_name"].ToString();
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
        // lay thong tin dang nhap
        sqlText = "SELECT * FROM taikhoan WHERE username=@username";
        Nparameter = 1;
        name[0] = "@username";
        value[0] = Session["username"].ToString();
        DataTable dt_login = cn.LoadData(sqlText, name, value, Nparameter);
        if (dt_login.Rows.Count > 0)
        {
            DataRow row = dt_login.Rows[0];
            quyen = row["quyen_ma"].ToString();
        }
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
    private bool Validate(int hanghoa_ma)
    {
        if (txtTen.Text == "")
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Nhập tên loại dịch vụ</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
            return false;
        }

        else
        {
            clsConnect cn = new clsConnect();
            string sqlText = "";
            int Nparameter = 2;
            string[] name = new string[2];
            object[] value = new object[2];
            name[0] = "@service_type_name";
            name[1] = "@service_type_id";
            value[0] = txtTen.Text.ToUpper();
            value[1] = hanghoa_ma;
            if (hanghoa_ma == 0)
            {
                Nparameter = 1;
                sqlText = "select * from service_type where service_type_name = @service_type_name ";
            }
            else
            {
                sqlText = "select * from service_type where service_type_name = @service_type_name and service_type_id != @service_type_id";
            }
            if (cn.LoadData(sqlText, name, value, Nparameter).Rows.Count > 0)
            {
                lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Tên loại dịch vụ này đã có.</li></ul></dd></dl>";
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
            "INSERT INTO service_type(service_type_name) VALUES(@service_type_name);";
            clsConnect cn = new clsConnect();
            int Nparameter = 1;
            string[] name = new string[Nparameter];
            object[] value = new object[Nparameter];
            name[0] = "@service_type_name";
            value[0] = txtTen.Text.ToUpper();
            cn.UpdateData(sqlText, name, value, Nparameter);
            cn.close();
            String strURL = "cat_service_type.aspx?add=" + txtTen.Text;
            Response.Redirect(strURL);
        }
    }

    protected void btnUpdate_Click(object sender, EventArgs e)
    {
        int hanghoa_ma = 0;
        try
        {
            hanghoa_ma = Convert.ToInt32(Request.QueryString["service_type_id"]);
        }
        catch (Exception ex) { }
        if (Validate(hanghoa_ma))
        {
            String sqlText =
            "UPDATE service_type SET service_type_name = @service_type_name " +
            "WHERE service_type_id = @service_type_id";
            clsConnect cn = new clsConnect();
            int Nparameter = 2;
            string[] name = new string[Nparameter];
            object[] value = new object[Nparameter];
            name[0] = "@service_type_name ";
            value[0] = txtTen.Text.ToUpper();
            name[1] = "@service_type_id";
            value[1] = hanghoa_ma;
            cn.UpdateData(sqlText, name, value, Nparameter);
            cn.close();
            String strURL = "cat_service_type.aspx?save=1";
            Response.Redirect(strURL);
        }
    }

    protected void btnDelete_Click(object sender, EventArgs e)
    {
        DeleteCarBranchList(Request.QueryString["service_type_id"].ToString());
        String strURL = "cat_service_type.aspx?add=" + txtTen.Text;
        Response.Redirect(strURL);
    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("cat_service_type.aspx");
    }

    protected void btnDeleteAll_Click(object sender, EventArgs e)
    {
        foreach (RepeaterItem rptItem in rptProduct.Items)
        {
            if (((CheckBox)rptItem.FindControl("chkSelect")).Checked)
                DeleteCarBranchList(((Label)rptItem.FindControl("lblHangHoaID")).Text);
        }
        String strURL = "cat_service_type.aspx?delete=1";
        Response.Redirect(strURL);
    }

    protected void DeleteCarBranchList(String sCarBranchID)
    {
        //room_type table
        String sqlText = "DELETE FROM service_type WHERE service_type_id = @service_type_id";
        clsConnect cn = new clsConnect();
        string[] name = new string[1];
        object[] value = new object[1];
        int Nparameter = 1;
        name[0] = "@service_type_id";
        value[0] = sCarBranchID;
        cn.UpdateData(sqlText, name, value, Nparameter);
        cn.close();
    }
}

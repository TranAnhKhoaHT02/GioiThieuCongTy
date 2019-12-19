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

public partial class Admin_cat_service : System.Web.UI.Page
{
    private static string quyen = "";
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack) return;

        if (Request.QueryString["add"] != null && !Request.QueryString["add"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>1  dịch vụ [" + Request.QueryString["add"].ToString() + "] đã được thêm thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        if (Request.QueryString["save"] != null && !Request.QueryString["save"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>Thông tin  dịch vụ [" + Request.QueryString["save"].ToString() + "] đã được cập nhật thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        if (Request.QueryString["delete"] != null && !Request.QueryString["delete"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>1(nhiều)  dịch vụ đã được xóa thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        clsConnect cn = new clsConnect();
        int Nparameter = 10;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];

        string sqlText = "SELECT * FROM loaidv ";
        rptProduct.DataSource = cn.LoadData(sqlText);
        rptProduct.DataBind();
        if (Request.QueryString["loaidv_id"] != null && !Request.QueryString["loaidv_id"].Equals(""))
        {
            sqlText = "SELECT * FROM loaidv WHERE loaidv_id = @loaidv_id;";
            Nparameter = 1;
            name[0] = "@loaidv_id";
            value[0] = Request.QueryString["loaidv_id"];
            DataTable dt = cn.LoadData(sqlText, name, value, Nparameter);
            if (dt.Rows.Count > 0)
            {
                DataRow row = dt.Rows[0];
                txtTen.Text = row["tendv"].ToString();
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
        try
        {
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
        }
        catch (Exception)
        {
            Response.Redirect("login.aspx");
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
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Nhập tên  dịch vụ</li></ul></dd></dl>";
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
            name[0] = "@tendv";
            name[1] = "@loaidv_id";
            value[0] = txtTen.Text;
            value[1] = hanghoa_ma;
            if (hanghoa_ma == 0)
            {
                Nparameter = 1;
                sqlText = "select * from loaidv where tendv = @tendv ";
            }
            else
            {
                sqlText = "select * from loaidv where tendv = @tendv and loaidv_id != @loaidv_id";
            }
            if (cn.LoadData(sqlText, name, value, Nparameter).Rows.Count > 0)
            {
                lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Tên  hàng này đã có.</li></ul></dd></dl>";
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
            "INSERT INTO loaidv(tendv) VALUES(@tendv);";
            clsConnect cn = new clsConnect();
            int Nparameter = 1;
            string[] name = new string[Nparameter];
            object[] value = new object[Nparameter];
            name[0] = "@tendv";
            value[0] = txtTen.Text;
            cn.UpdateData(sqlText, name, value, Nparameter);
            cn.close();
            String strURL = "cat_service.aspx?add=" + txtTen.Text;
            Response.Redirect(strURL);
        }
    }

    protected void btnUpdate_Click(object sender, EventArgs e)
    {
        int dichvu_ma = 0;
        try
        {
            dichvu_ma = Convert.ToInt32(Request.QueryString["loaidv_id"]);
        }
        catch (Exception ex) { }
        if (Validate(dichvu_ma))
        {
            String sqlText =
            "UPDATE loaidv SET tendv = @tendv " +
            "WHERE loaidv_id = @loaidv_id";
            clsConnect cn = new clsConnect();
            int Nparameter = 2;
            string[] name = new string[Nparameter];
            object[] value = new object[Nparameter];
            name[0] = "@tendv ";
            value[0] = txtTen.Text;
            name[1] = "@loaidv_id";
            value[1] = dichvu_ma;
            cn.UpdateData(sqlText, name, value, Nparameter);
            cn.close();
            String strURL = "cat_service.aspx?save=" + txtTen.Text;
            Response.Redirect(strURL);
        }
    }

    protected void btnDelete_Click(object sender, EventArgs e)
    {
        DeleteCarBranchList(Request.QueryString["loaidv_id"].ToString());
        String strURL = "cat_service.aspx?delete=1";
        Response.Redirect(strURL);
    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("cat_service.aspx");
    }

    protected void btnDeleteAll_Click(object sender, EventArgs e)
    {
        foreach (RepeaterItem rptItem in rptProduct.Items)
        {
            if (((CheckBox)rptItem.FindControl("chkSelect")).Checked)
                DeleteCarBranchList(((Label)rptItem.FindControl("lblHangHoaID")).Text);
        }
        String strURL = "cat_service.aspx?delete=1";
        Response.Redirect(strURL);
    }

    protected void DeleteCarBranchList(String sCarBranchID)
    {
        //room table
        String sqlText = "DELETE FROM loaidv WHERE loaidv_id = @loaidv_id";
        clsConnect cn = new clsConnect();
        string[] name = new string[1];
        object[] value = new object[1];
        int Nparameter = 1;
        name[0] = "@loaidv_id";
        value[0] = sCarBranchID;
        cn.UpdateData(sqlText, name, value, Nparameter);
        cn.close();
    }
}

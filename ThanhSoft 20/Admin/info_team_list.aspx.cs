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

public partial class Admin_info_team_list : System.Web.UI.Page
{
    clsInfoTeam info = new clsInfoTeam();
    clsEmployee emp = new clsEmployee();
    public static DataTable dt_transport = new DataTable();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack) return;

        if (Request.QueryString["add"] != null && !Request.QueryString["add"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>1 thông tin [" + Request.QueryString["add"].ToString() + "] đã được thêm thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        if (Request.QueryString["save"] != null && !Request.QueryString["update"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>Thông tin thông tin [" + Request.QueryString["save"].ToString() + "] đã được cập nhật thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        if (Request.QueryString["delete"] != null && !Request.QueryString["delete"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>1(nhiều) thông tin đã được xóa thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        clsConnect cn = new clsConnect();
        DataTable dt = new DataTable();
        int Nparameter = 10;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        string sqlText = "";
        if (Request.QueryString["info_id"] != null && !Request.QueryString["info_id"].Equals(""))
        {


        }
        else
        {

            btnCancel.Visible = true;
        }

        HienThiDS_Tieude();
        //loai chuyen muc
        ddlDichvu.DataSource = cn.LoadData("SELECT * FROM loaidv");
        ddlDichvu.DataBind();
        ddlDichvu.Items.Insert(0, new ListItem("Chọn loại dich vụ", "0"));

        #region phan quyen trang
        try
        {
            sqlText = "select * from chitietquyen CT JOIN menu M ON CT.menu_id=M.menu_id " +
                   "WHERE quyen_ma=?quyen_ma AND menu_url=?menu";
            Nparameter = 2;
            name[0] = "?quyen_ma";
            name[1] = "?menu";
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
        Page.SetFocus(ddlDichvu);

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
    protected void btnDelete_Click(object sender, EventArgs e)
    {
        //DeleteIDList(Request.QueryString["id"].ToString());
        //String strURL = "info_team_send.aspx?delete=1";
        //Response.Redirect(strURL);

    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("info_team_send.aspx");
    }
    protected void btnSave_Click(object sender, EventArgs e)
    {

    }

    protected void btnCancel_Click1(object sender, EventArgs e)
    {
        Response.Redirect("info_team_list.aspx");
    }
    protected void btnUpdate_Click1(object sender, EventArgs e)
    {

    }
    private void HienThiDS_Tieude()
    {
        rptTieuDe.DataSource = info.TieuDe_List();
        rptTieuDe.DataBind();
        dt_transport = info.TieuDe_List();
    }
    private string NhanVien()
    {
        string TenNV = "";
        try
        {
            emp.MaNhanvien = int.Parse(Session["nhanvien_ma"].ToString());
            TenNV = emp.NhanVien_Theo_Id().Rows[0]["nhanvien_ten"].ToString();

        }
        catch (Exception)
        {
            return TenNV;
        }
        return TenNV;
    }


    protected void btnSearch_Click(object sender, EventArgs e)
    {
        //try

        //{
        string tieude = txtSearch.Text;
        string MaDV = ddlDichvu.Text;
        lblMessageStatus.Visible = false;
        DataView view = dt_transport.DefaultView;
        //fiter or search in web
        if (txtSearch.Text != "" && ddlDichvu.SelectedIndex == 0)
        {
            view.RowFilter = " tieude LIKE " + "'%" + tieude + "%'";
        }
        if (ddlDichvu.SelectedIndex != 0)
        {
            view.RowFilter = "loaidv_id=" + "'" + MaDV + "'";
        }
        // view.RowFilter = " title LIKE % " + tieude + "% " + "'";
        if (view.ToTable().Rows.Count == 0)
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Không có thông tin nào</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        else
        {
            rptTieuDe.DataSource = view.ToTable();
            rptTieuDe.DataBind();
        }
        //}
        //catch (Exception)
        //{
        //}
    }
}

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

public partial class Customers_Default2 : System.Web.UI.Page
{
    clsConnect cn = new clsConnect();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack) return;
        if (Request.QueryString["id"] != null && !Request.QueryString["id"].Equals(""))
        {
            DataView view = DSSanPham().DefaultView;
            view.RowFilter = "tintuc_id=" + "'" + Request.QueryString["id"].ToString() + "'";
            DataTable dt = view.ToTable();
            if (dt.Rows.Count > 0)
            {
                DataRow row = dt.Rows[0];
                Image1.ImageUrl = "../MauWeb/" + row["Img"].ToString();
                Label1.Text = row["tieude"].ToString();
                Label2.Text = row["DienGiai"].ToString();
                Label3.Text = row["noidung"].ToString();
                lblNguoiDang.Text = row["NguoiDang"].ToString();
                lblNguonViet.Text = row["nguontrichdan"].ToString();
                lblThoigian.Text = Convert.ToDateTime(row["ngaydang"]).ToString("dd-MM-yyyy");

            }
            else
            {
                Label1.Text = "Đang cập nhật";
            }
        }
        cn.close();
    }
    private DataTable DSSanPham()
    {
        return cn.GetData("sp_gioithieu_list");
    }
    private DataTable DSLoaiSanPham()
    {
        return cn.GetData("sp_gioithieu_list_id");
    }   
}

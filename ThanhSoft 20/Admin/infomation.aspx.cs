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

public partial class Admin_infomation : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack) return;
        cls_TinTuc tintuc = new cls_TinTuc();
        if (Request.QueryString["add"] != null && !Request.QueryString["add"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>1 chuyên mục [" + Request.QueryString["add"].ToString() + "] đã được thêm thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        if (Request.QueryString["save"] != null && !Request.QueryString["save"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>Thông tin chuyên mục [" + Request.QueryString["save"].ToString() + "] đã được cập nhật thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        if (Request.QueryString["delete"] != null && !Request.QueryString["delete"].Equals(""))
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message fade\"><ul><li>1(nhiều) chuyên mục đã được xóa thành công</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        DataTable dt = new DataTable();
        if (Request.QueryString["tieude"] != null && !Request.QueryString["tieude"].Equals(""))
        {
            tintuc.MaTinTuc = Convert.ToInt32(Request.QueryString["tieude"]);
            dt = tintuc.TinTucListGetID();
        }
        else
        {
            //sqlText += "ORDER BY intuc_id desc";
            dt = tintuc.TinTucList();
        }
        string keyword = Request.QueryString["tieude"];
        string sqlText = "";
        int Nparameter = 10;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        PagedDataSource objPage = displayResult(dt, keyword);
        rptQuyen.DataSource = dt;
        rptQuyen.DataBind();
        TitleList();
        clsConnect cn = new clsConnect();
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

        Page.SetFocus(ddlTitle);

    }
    private PagedDataSource displayResult(DataTable dt, string keyword)
    {
        PagedDataSource objPage = new PagedDataSource();
        objPage.AllowPaging = true;
        objPage.DataSource = dt.DefaultView;
        objPage.PageSize = 100;
        int curpage = 0;

        if (Request.QueryString["Page"] != null)
            curpage = Convert.ToInt32(Request.QueryString["Page"]);
        else
            curpage = 1;

        objPage.CurrentPageIndex = curpage - 1;
        int iTotalPage = dt.Rows.Count / objPage.PageSize + 1;
        int iStartPage = (objPage.CurrentPageIndex / 10) * 10 + 1;
        int iEndPage = Math.Min(iTotalPage, iStartPage + 10);

        StringBuilder strLinkList = new StringBuilder();
        for (int i = iStartPage; i <= iEndPage; i++)
        {
            if (i != curpage)
            {
                strLinkList.Append("&nbsp;&nbsp;");
                strLinkList.Append("<a href='");
                strLinkList.Append(Request.CurrentExecutionFilePath);
                strLinkList.Append("?Page=");
                strLinkList.Append(i);
                strLinkList.Append("" + keyword);
                strLinkList.Append("'>");
            }
            strLinkList.Append(i);
            if (i != curpage)
            {
                strLinkList.Append("</a>");
                strLinkList.Append("&nbsp;&nbsp;");
            }
        }

        lblCurrpageTop.Text = strLinkList.ToString();
        lblCurrpageBottom.Text = strLinkList.ToString();
        if (curpage != 1)
        {
            lblFirstTop.Text = "&nbsp;&nbsp;<a href='" + Request.CurrentExecutionFilePath + "?Page=1" + keyword + "'>Trang Đầu</a>";
            lblFirstBottom.Text = "&nbsp;&nbsp;<a href='" + Request.CurrentExecutionFilePath + "?Page=1" + keyword + "'>Trang Đầu</a>";
        }
        if (curpage != iTotalPage)
        {
            lblLastTop.Text = "&nbsp;&nbsp;<a href='" + Request.CurrentExecutionFilePath + "?Page=" + iTotalPage.ToString() + "" + keyword + "'>Trang Cuối</a>";
            lblLastBottom.Text = "&nbsp;&nbsp;<a href='" + Request.CurrentExecutionFilePath + "?Page=" + iTotalPage.ToString() + "" + keyword + "'>Trang Cuối</a>";
        }
        if (!objPage.IsFirstPage)
        {
            lblPrevTop.Text = "&nbsp;&nbsp;<a href='" + Request.CurrentExecutionFilePath + "?Page=" +
            Convert.ToString(curpage - 1) + "" + keyword + "'>Trang Trước</a>";
            lblPrevBottom.Text = "&nbsp;&nbsp;<a href='" + Request.CurrentExecutionFilePath + "?Page=" +
            Convert.ToString(curpage - 1) + "" + keyword + "'>Trang Trước</a>";
        }
        if (!objPage.IsLastPage)
        {
            lblNextTop.Text = "&nbsp;&nbsp;<a href='" + Request.CurrentExecutionFilePath + "?Page=" +
            Convert.ToString(curpage + 1) + "" + keyword + "'>Trang Sau</a>";
            lblNextBottom.Text = "&nbsp;&nbsp;<a href='" + Request.CurrentExecutionFilePath + "?Page=" +
            Convert.ToString(curpage + 1) + "" + keyword + "'>Trang Sau</a>";
        }
        lblTotalItemsTop.Text = "Trang " + curpage.ToString() + " trong " + iTotalPage.ToString() + " trang (" + dt.Rows.Count.ToString() + "  chủ đề)";
        lblTotalItemsBottom.Text = "Trang " + curpage.ToString() + " trong " + iTotalPage.ToString() + " trang (" + dt.Rows.Count.ToString() + " chủ đề)";
        return objPage;
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
    private void TitleList()
    {
        cls_TinTuc tintuc = new cls_TinTuc();
        ddlTitle.DataSource = tintuc.TinTucList();
        ddlTitle.DataBind();
        ddlTitle.Items.Insert(0, new ListItem("Chọn tiêu đề bài viết", "0"));
    }
    protected void btnCancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("web_list.aspx");
    }
    protected void btnFitter_Click(object sender, EventArgs e)
    {
        string url = "web_list.aspx?title=" + ddlTitle.Text;
        Response.Redirect(url);
    }
    protected void btnDeleteAll_Click(object sender, EventArgs e)
    {
        foreach (RepeaterItem rptItem in rptQuyen.Items)
        {
            if (((CheckBox)rptItem.FindControl("chkSelect")).Checked)
                DeleteIDList(((Label)rptItem.FindControl("lblID")).Text);
        }
        String strURL = "web_list.aspx?delete=1";
        Response.Redirect(strURL);
    }
    protected void DeleteIDList(String id)
    {
        //room_type table
        cls_TinTuc tintuc = new cls_TinTuc();
        tintuc.MaTinTuc = Convert.ToInt32(id);
        tintuc.TinTuc_Delete();
    }
    protected void btnNew_Click(object sender, EventArgs e)
    {
        Response.Redirect("web_send.aspx");
    }
}

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

public partial class Admin_web_send : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack) return;

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
        clsConnect cn = new clsConnect();
        DataTable dt = new DataTable();
        int Nparameter = 10;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        if (Request.QueryString["content_id"] != null && !Request.QueryString["content_id"].Equals(""))
        {
            string sqlText = "SELECT * FROM information A, service B, service_type C WHERE " +
                    "A.service_id=B.service_id AND B.service_type_id=C.service_type_id AND information_id=?information_id";
            Nparameter = 1;
            name[0] = "?information_id";
            value[0] = Request.QueryString["content_id"].ToString();
            dt = cn.LoadData(sqlText, name, value, Nparameter);
            if (dt.Rows.Count > 0)
            {
                DataRow row = dt.Rows[0];

                //ddlService.SelectedValue = row["service_id"].ToString();
                ddlServiceType.Text = row["service_type_id"].ToString();
                //ddlServiceType_SelectedIndexChanged(sender, e);
                txtTitle.Text = row["tieude"].ToString();
                txtSource.Text = row["nguontrichdan"].ToString();
                txtContent.Value = row["noidung"].ToString();
                lblHeadingText.Text = row["diengiai"].ToString();
                //FileUpLoad1.FileName =row["file"].ToString();
                btnSave.Visible = false;
                btnUpdate.Visible = true;
                btnDeleteAll.Visible = false;
                btnCancel.Visible = true;

            }
        }
        else
        {
            btnSave.Visible = true;
            btnCancel.Visible = true;
        }


        //loai chuyen muc
        ddlServiceType.DataSource = cn.LoadData("SELECT * FROM service_type");
        ddlServiceType.DataBind();
        ddlServiceType.Items.Insert(0, new ListItem("Chọn loại chuyên mục", "0"));
        /*
        #region phan quyen trang
        try
        {
            sqlText = "select * from ctquyen CT JOIN menu M ON CT.menu_id=M.menu_id " +
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

        #endregion*/
        cn.close();
        Page.SetFocus(ddlServiceType);

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
        //    clsConnect cn = new clsConnect();
        //    string sqlText = "";
        //    int Nparameter = 10;
        //    string[] name = new string[Nparameter];
        //    object[] value = new object[Nparameter];
        //    if (ddlServiceType.Text == "")
        //    {
        //        lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Nhập tên loại chuyên mục</li></ul></dd></dl>";
        //        lblMessageStatus.Visible = true;
        //        return false;
        //    }
        //   else if (ddlService.Text == "")
        //    {
        //        lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Nhập tên chuyên mục</li></ul></dd></dl>";
        //        lblMessageStatus.Visible = true;
        //        return false;
        //    }

        //    else
        //    {
        //        Nparameter = 2;
        //        name[0] = "?service_name";
        //        name[1] = "?service_id";
        //        value[0] = ddlService.Text.Trim();
        //        value[1] = id;
        //        if (id == 0)
        //        {
        //            Nparameter = 1;
        //            sqlText = "select * from service where service_name = ?service_name ";
        //        }
        //        else
        //        {
        //            sqlText = "select * from service where service_name = ?service_name and service_id != ?service_id";
        //        }
        //        if (cn.LoadData(sqlText, name, value, Nparameter).Rows.Count > 0)
        //        {
        //            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Tên chuyên mục này đã có.</li></ul></dd></dl>";
        //            lblMessageStatus.Visible = true;
        //            return false;
        //        }
        //    }

        return true;
    }
    protected void btnInsert_Click(object sender, EventArgs e)
    {

        //if (Validate(0))
        //{
        //    String sqlText =
        //    "INSERT INTO service(service_name) VALUES( "+
        //    "?service_name);";
        //    clsConnect cn = new clsConnect();
        //    int Nparameter = 1;
        //    string[] name = new string[Nparameter];
        //    object[] value = new object[Nparameter];
        //    name[0] = "?service_name";            
        //    value[0] = txtTen.Text.Trim();           
        //    cn.UpdateData(sqlText, name, value, Nparameter);
        //    cn.close();
        //    String strURL = "cat_service.aspx?add=1";
        //    Response.Redirect(strURL);
        //}
    }

    protected void btnUpdate_Click(object sender, EventArgs e)
    {
        //int id = 0;
        //try
        //{
        //    id = Convert.ToInt32(Request.QueryString["service_id"]);
        //}
        //catch (Exception ex) { }
        //if (Validate(id))
        //{
        //    String sqlText =
        //    "UPDATE service SET service_name = ?service_name " +
        //    "WHERE service_id = ?service_id";
        //    clsConnect cn = new clsConnect();
        //    int Nparameter = 2;
        //    string[] name = new string[Nparameter];
        //    object[] value = new object[Nparameter];
        //    name[0] = "?service_name";
        //    name[1] = "?service_id";           
        //    value[0] = txtTen.Text.Trim();
        //    value[1] = id;           
        //    cn.UpdateData(sqlText, name, value, Nparameter);
        //    cn.close();
        //    String strURL = "cat_service.aspx?save=1";
        //    Response.Redirect(strURL);
        //}
    }

    protected void btnDelete_Click(object sender, EventArgs e)
    {
        DeleteIDList(Request.QueryString["id"].ToString());
        String strURL = "cat_service.aspx?delete=1";
        Response.Redirect(strURL);
    }

    protected void btnCancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("cat_service.aspx");
    }

    protected void btnDeleteAll_Click(object sender, EventArgs e)
    {
        //    foreach (RepeaterItem rptItem in rptQuyen.Items)
        //    {
        //        if (((CheckBox)rptItem.FindControl("chkSelect")).Checked)
        //            DeleteIDList(((Label)rptItem.FindControl("lblID")).Text);
        //    }
        //    String strURL = "cat_service.aspx?delete=1";
        //    Response.Redirect(strURL);
    }

    protected void DeleteIDList(String id)
    {
        //room_type table
        String sqlText = "DELETE FROM service WHERE service_id = ?service_id";
        clsConnect cn = new clsConnect();
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "?service_id";
        value[0] = id;
        cn.UpdateData(sqlText, name, value, Nparameter);
        cn.close();
    }
    protected void ddlServiceType_SelectedIndexChanged(object sender, EventArgs e)
    {
        try
        {
            clsConnect cn = new clsConnect();
            int Nparameter = 1;
            string[] name = new string[Nparameter];
            object[] value = new object[Nparameter];
            string sql = "";
            DataTable dt = new DataTable();
            if (ddlServiceType.Text != "0")
            {
                sql = "SELECT * FROM service WHERE service_type_id=?service_type_id";
                Nparameter = 1;
                name[0] = "?service_type_id";
                value[0] = ddlServiceType.Text;
                dt = cn.LoadData(sql, name, value, Nparameter);
                if (dt.Rows.Count > 0)
                {
                    ddlService.DataSource = dt;
                    ddlService.DataBind();
                }
            }

        }
        catch (Exception)
        {
        }
    }
    protected void btnSave_Click(object sender, EventArgs e)
    {
        if (ddlService.Text == "0")
        {
            lblMessageStatus.Text = "<dl id=\"system-message\"><dd class=\"message message error\"><ul><li>Chưa chọn chuyên mục</li></ul></dd></dl>";
            lblMessageStatus.Visible = true;
        }
        else
        {
            //neu chon la loai tin gioi thieu cong ty            
            UploadTinGioithieu();
            Response.Redirect("web_send.aspx");

            //}
            //catch (Exception)
            //{
            //    Response.Redirect("login.aspx");
            //}

        }
    }
    void UploadTinGioithieu()
    {
        clsConnect cn = new clsConnect();
        int Nparameter = 10;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        string sql = "";
        //upload file vao thu muc thuvien/taptin
        //try
        //{
        if (FileUpLoad1.FileName != "")
        {
            string path = Server.MapPath("~/thuvien/taptin/") + FileUpLoad1.FileName;
            FileUpLoad1.SaveAs(path);
            Nparameter = 10;
            sql = "INSERT INTO information(service_id,title,date_post,human_post,source_link,content,heading_text,file,status_id,id)VALUES( " +
                "?service_id,?title,?date_post,?human_post,?source_link,?content,?heading_text,?file,?status_id,?id)";

            name[0] = "?service_id";
            name[1] = "?title";
            name[2] = "?date_post";
            name[3] = "?human_post";
            name[4] = "?source_link";
            name[5] = "?content";
            name[6] = "?heading_text";
            name[7] = "?file";
            name[8] = "?status_id";
            name[9] = "?id";
            value[0] = ddlService.Text;
            value[1] = txtTitle.Text.Trim();
            value[2] = DateTime.Now;
            value[3] = cn.LoadData("select nhanvien_ten FROM nhanvien WHERE nhanvien_ma=" + Session["nhanvien_ma"].ToString()).Rows[0][0].ToString();
            value[4] = txtSource.Text.Trim();
            value[5] = txtContent.Value;
            value[6] = lblHeadingText.Text.Trim();
            value[7] = FileUpLoad1.FileName;
            //lay id chuyen muc, gan cho trang thai
            if (rbtChoise.SelectedValue == "0")
                value[8] = "0";
            if (rbtChoise.SelectedValue == "1")
                value[8] = "1";
            if (rbtChoise.SelectedValue == "2")
            {
                value[8] = "2";
            }
            value[9] = ddlMon.SelectedIndex.ToString();
            cn.UpdateData(sql, name, value, Nparameter);


        }
        else
        {
            Nparameter = 9;
            sql = "INSERT INTO information(service_id,title,date_post,human_post,source_link,content,heading_text,status_id,id)VALUES( " +
                "?service_id,?title,?date_post,?human_post,?source_link,?content,?heading_text,?status_id,?id)";

            name[0] = "?service_id";
            name[1] = "?title";
            name[2] = "?date_post";
            name[3] = "?human_post";
            name[4] = "?source_link";
            name[5] = "?content";
            name[6] = "?heading_text";
            name[7] = "?status_id";
            name[8] = "?id";
            value[0] = ddlService.Text;
            value[1] = txtTitle.Text.Trim();
            value[2] = DateTime.Now;
            value[3] = cn.LoadData("select nhanvien_ten FROM nhanvien WHERE nhanvien_ma=" + Session["nhanvien_ma"].ToString()).Rows[0][0].ToString();
            value[4] = txtSource.Text.Trim();
            value[5] = txtContent.Value;
            value[6] = lblHeadingText.Text.Trim();
            if (rbtChoise.SelectedValue == "0")
                value[7] = "0";
            if (rbtChoise.SelectedValue == "1")
                value[7] = "1";
            if (rbtChoise.SelectedValue == "2")
            {
                value[7] = "2";
            }
            value[8] = ddlMon.SelectedIndex.ToString();
            cn.UpdateData(sql, name, value, Nparameter);
        }
        cn.close();
    }
    protected void btnCancel_Click1(object sender, EventArgs e)
    {
        Response.Redirect("web_list.aspx");
    }
    protected void btnUpdate_Click1(object sender, EventArgs e)
    {
        if (ddlServiceType.Text != "")
        {
            clsConnect cn = new clsConnect();
            int Nparameter = 11;
            string[] name = new string[Nparameter];
            object[] value = new object[Nparameter];
            string sql = "";
            //upload file vao thu muc thuvien/taptin
            //try
            //{
            if (FileUpLoad1.FileName != "")
            {
                string path = Server.MapPath("~/thuvien/taptin/") + FileUpLoad1.FileName;
                FileUpLoad1.SaveAs(path);
                Nparameter = 11;
                sql = "UPDATE information SET service_id=?service_id,title=?title,date_post=?date_post,human_post=?human_post,source_link=?source_link, " +
                    "content=?content,heading_text=?heading_text,file=?file,status_id=?status_id , id=?id " +
                    "WHERE information_id=?information_id";

                name[0] = "?service_id";
                name[1] = "?title";
                name[2] = "?date_post";
                name[3] = "?human_post";
                name[4] = "?source_link";
                name[5] = "?content";
                name[6] = "?heading_text";
                name[7] = "?file";
                name[8] = "?status_id";
                name[9] = "?information_id";
                name[10] = "?id";
                value[0] = ddlService.Text;
                value[1] = txtTitle.Text.Trim();
                value[2] = DateTime.Now;
                value[3] = cn.LoadData("select nhanvien_ten FROM nhanvien WHERE nhanvien_ma=" + Session["nhanvien_ma"].ToString()).Rows[0][0].ToString();
                value[4] = txtSource.Text.Trim();
                value[5] = txtContent.Value;
                value[6] = lblHeadingText.Text.Trim();
                value[7] = FileUpLoad1.FileName;
                //lay id chuyen muc, gan cho trang thai
                if (rbtChoise.SelectedValue == "0")
                    value[8] = "0";
                if (rbtChoise.SelectedValue == "1")
                    value[8] = "1";
                if (rbtChoise.SelectedValue == "2")
                {
                    value[8] = "2";
                }
                value[9] = Request.QueryString["content_id"];
                value[10] = ddlMon.SelectedIndex.ToString();
                cn.UpdateData(sql, name, value, Nparameter);


            }
            else
            {
                Nparameter = 9;
                sql = "UPDATE information SET service_id=?service_id,title=?title,date_post=?date_post,human_post=?human_post,source_link=?source_link, " +
                    "content=?content,heading_text=?heading_text,status_id=?status_id " +
                    "WHERE information_id=?information_id";

                name[0] = "?service_id";
                name[1] = "?title";
                name[2] = "?date_post";
                name[3] = "?human_post";
                name[4] = "?source_link";
                name[5] = "?content";
                name[6] = "?heading_text";
                name[7] = "?status_id";
                name[8] = "?information_id";
                value[0] = ddlService.Text;
                value[1] = txtTitle.Text.Trim();
                value[2] = DateTime.Now;
                value[3] = cn.LoadData("select nhanvien_ten FROM nhanvien WHERE nhanvien_ma=" + Session["nhanvien_ma"].ToString()).Rows[0][0].ToString();
                value[4] = txtSource.Text.Trim();
                value[5] = txtContent.Value;
                value[6] = lblHeadingText.Text.Trim();
                //lay id chuyen muc, gan cho trang thai
                if (rbtChoise.SelectedValue == "0")
                    value[7] = "0";
                if (rbtChoise.SelectedValue == "1")
                    value[7] = "1";
                if (rbtChoise.SelectedValue == "2")
                {
                    value[7] = "2";
                }
                value[8] = Request.QueryString["content_id"];
                cn.UpdateData(sql, name, value, Nparameter);
            }
            cn.close();
            Response.Redirect("web_send.aspx");

        }
    }
}

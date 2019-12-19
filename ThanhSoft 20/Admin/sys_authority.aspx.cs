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

public partial class Admin_authority : System.Web.UI.Page//
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Page.IsPostBack) return;
        {
            clsConnect cn = new clsConnect();
            string quyen_ma = Convert.ToString(Request.QueryString["quyen_ma"]);
            if (quyen_ma == null)
            {
                setButton(true);
            }
            else
            {
                setButton(false);
                LoadData(quyen_ma);

            }
            dislayGrid_quyen();
            #region phan quyen trang
            try
            {
                string sqlText = "select * from chitietquyen CT JOIN menu M ON CT.menu_id=M.menu_id " +
                          "WHERE quyen_ma=@quyen_ma AND menu_url=@menu";
                int Nparameter = 2;
                string[] name = new string[Nparameter];
                object[] value = new object[Nparameter];
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
        }
    }
    private void LoadData(string quyen_ma)
    {
        clsConnect cn = new clsConnect();
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        name[0] = "@quyen_ma";
        object[] value = new object[Nparameter];
        value[0] = quyen_ma;
        DataTable dt = cn.LoadData("select * from quyen where quyen_ma = @quyen_ma ", name, value, Nparameter);
        DataRow row = dt.Rows[0];
        txtquyen_ten.Text = row["quyen"].ToString();
        cn.close();
        divmenu.Visible = true;
        lblquyen.Text = row["quyen"].ToString();
        dislaytremenu(row["quyen_ma"].ToString());
        dislayGrid_quyen_detail(row["quyen_ma"].ToString());
    }
    private void setButton(bool name)
    {
        btnAdd.Visible = name;
        btnNotSave.Visible = !name;
        btnSave.Visible = !name;
        btnDel.Visible = !name;
        divmenu.Visible = !name;
    }
    private void clear()
    {
        txtquyen_ten.Text = "";
        Page.SetFocus(txtquyen_ten);
        lblMsg.Text = "";

    }
    private void setButtonmenu(bool name)
    {
        btnAddmenu.Visible = name;
        btnDelAllmenu.Visible = !name;
    }
    private bool Check_Error(int _IDSave)
    {
        lblMsg.BackColor = System.Drawing.Color.Yellow;
        if (txtquyen_ten.Text == "")
        {
            lblMsg.Text = "Vui lòng điền vào tên quyền.";
            return false;
        }
        else
        {
            clsConnect cn = new clsConnect();
            string sql = "select * from quyen where quyen = @quyen_ten and quyen_ma != @quyen_ma";
            int Nparameter = 2;
            string[] name = new string[Nparameter];
            name[0] = "@quyen_ten";
            name[1] = "@quyen_ma";
            object[] value = new object[Nparameter];
            value[0] = txtquyen_ten.Text;
            value[1] = _IDSave;
            if (cn.LoadData(sql, name, value, Nparameter).Rows.Count > 0)
            {
                lblMsg.Text = "Tên quyền đã có rồi.Vui lòng nhập lại.";
                return false;
            }
        }
        return true;
    }
    private void dislayGrid_quyen()
    {
        clsConnect cn = new clsConnect();
        string sql = "select * from quyen";
        gridauthority.DataSource = cn.LoadData(sql);
        gridauthority.DataBind();
        cn.close();
    }
    private void dislaytremenu(string quyen_ma)
    {
        clsConnect cn = new clsConnect();
        string sql = "select * from menu where menu_parent_id = 0";
        foreach (DataRow row_root in cn.LoadData(sql).Rows)
        {
            TreeNode root = new TreeNode(row_root["menu_title"].ToString(), row_root["menu_id"].ToString());
            tremenu.Nodes.Add(root);
            sql =
            "select * from menu, chitietquyen where menu.menu_id = chitietquyen.menu_id and " +
            "menu.menu_id = @menu_id and quyen_ma = @quyen_ma ORDER BY menu_parent_id, menu_order, menu.menu_id";
            int Nparameter = 2;
            string[] name = new string[Nparameter];
            object[] value = new object[Nparameter];
            name[0] = "@menu_id"; value[0] = root.Value;
            name[1] = "@quyen_ma"; value[1] = quyen_ma;
            if (cn.LoadData(sql, name, value, Nparameter).Rows.Count > 0)
                root.Checked = true;
            CreateNodeChild(root, quyen_ma, cn);
        }
        cn.close();
    }
    private void CreateNodeChild(TreeNode Nparent, string quyen_ma, clsConnect cn)
    {
        string sql = "select * from menu where menu_parent_id = @menu_parent_id ORDER BY menu_order, menu.menu_id";
        int Nparameter = 1;
        string[] name = new string[2];
        object[] value = new object[2];
        name[0] = "@menu_parent_id";
        value[0] = Nparent.Value;
        foreach (DataRow row in cn.LoadData(sql, name, value, Nparameter).Rows)
        {
            TreeNode node_parent = new TreeNode(row["menu_title"].ToString(), row["menu_id"].ToString());
            Nparent.ChildNodes.Add(node_parent);
            //checked menu
            sql =
            "select * from menu, chitietquyen where menu.menu_id = chitietquyen.menu_id and " +
            "menu.menu_id = @menu_id and quyen_ma = @quyen_ma ORDER BY menu_parent_id, menu_order, menu.menu_id";
            Nparameter = 2;
            name[0] = "@menu_id"; value[0] = node_parent.Value;
            name[1] = "@quyen_ma"; value[1] = quyen_ma;
            if (cn.LoadData(sql, name, value, Nparameter).Rows.Count > 0)
                node_parent.Checked = true;
            CreateNodeChild(node_parent, quyen_ma, cn);
        }
    }

    protected void btnAdd_Click(object sender, EventArgs e)
    {
        if (Check_Error(0))
        {
            clsConnect cn = new clsConnect();
            string sql = "insert into quyen(quyen) values(@quyen)";
            int Nparameter = 1;
            string[] name = new string[Nparameter];
            name[0] = "@quyen";
            object[] value = new object[Nparameter];
            value[0] = txtquyen_ten.Text;
            cn.UpdateData(sql, name, value, Nparameter);
            string quyen_ma = cn.LoadData("select * from quyen WHERE quyen_ma IN(SELECT TOP 1(quyen_ma) FROM quyen ORDER BY quyen_ma DESC)").Rows[0][0].ToString();
            cn.close();
            Response.Redirect("sys_authority.aspx");//?quyen_ma=" + quyen_ma);
        }
    }
    protected void btnSave_Click(object sender, EventArgs e)
    {
        if (Check_Error(Convert.ToInt32(Request.QueryString["quyen_ma"])))
        {
            clsConnect cn = new clsConnect();
            string sql = "update quyen set quyen = @quyen_ten where quyen_ma=@quyen_ma";
            int Nparameter = 2;
            string[] name = new string[Nparameter];
            name[0] = "@quyen_ten";
            name[1] = "@quyen_ma";
            object[] value = new object[Nparameter];
            value[0] = txtquyen_ten.Text;
            value[1] = Request.QueryString["quyen_ma"];
            cn.UpdateData(sql, name, value, Nparameter);
            cn.close();
            Response.Redirect("sys_authority.aspx");
        }
    }
    protected void btnDel_Click(object sender, EventArgs e)
    {
        clsConnect cn = new clsConnect();
        string sql = "delete from quyen where quyen_ma=@quyen_ma";
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        name[0] = "@quyen_ma";
        object[] value = new object[Nparameter];
        value[0] = Request.QueryString["quyen_ma"];
        cn.UpdateData(sql, name, value, Nparameter);
        cn.close();
        Response.Redirect("sys_authority.aspx");
    }
    protected void btnNotSave_Click(object sender, EventArgs e)
    {
        Response.Redirect("sys_authority.aspx");
    }
    protected void btnDelAll_Click(object sender, EventArgs e)
    {
        clsConnect cn = new clsConnect();
        string sql = "delete from quyen where quyen_ma=@quyen_ma";
        for (int i = 0; i < gridauthority.Items.Count; i++)
        {
            bool check = ((CheckBox)gridauthority.Items[i].FindControl("chkDel")).Checked;
            if (check)
            {
                int Nparameter = 1;
                string[] name = new string[Nparameter];
                name[0] = "@quyen_ma";
                object[] value = new object[Nparameter];
                value[0] = ((Label)gridauthority.Items[i].FindControl("lblID")).Text;
                cn.UpdateData(sql, name, value, Nparameter);
            }
        }
        cn.close();
        Response.Redirect("sys_authority.aspx");
    }

    private void dislayGrid_quyen_detail(string quyen_ma)
    {
        clsConnect cn = new clsConnect();
        string sql = "select * from chitietquyen,menu where chitietquyen.menu_id=menu.menu_id and quyen_ma=@quyen_ma ";
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        name[0] = "@quyen_ma";
        object[] value = new object[Nparameter];
        value[0] = quyen_ma;
        rptquyenDetail.DataSource = cn.LoadData(sql, name, value, Nparameter);
        rptquyenDetail.DataBind();
        cn.close();
    }
    protected void btnAddmenu_Click(object sender, EventArgs e)
    {
        clsConnect cn = new clsConnect();
        foreach (TreeNode node in tremenu.Nodes)
            insertmenu(node, cn);
        cn.close();
        dislayGrid_quyen_detail(Request.QueryString["quyen_ma"]);
        Response.Redirect("sys_authority.aspx?quyen_ma=" + Request.QueryString["quyen_ma"]);
    }
    private void insertmenu(TreeNode node, clsConnect cn)
    {
        if (node.ChildNodes.Count == 0)
        {
            if (node.Checked)
            {
                string sql =
                "select * from chitietquyen,menu where chitietquyen.menu_id=menu.menu_id " +
                "and quyen_ma=@quyen_ma and menu.menu_id=@menu_id";
                int Nparameter = 2;
                string[] name = new string[Nparameter];
                name[0] = "@quyen_ma";
                name[1] = "@menu_id";
                object[] value = new object[Nparameter];
                value[0] = Request.QueryString["quyen_ma"];
                value[1] = node.Value;
                if (cn.LoadData(sql, name, value, Nparameter).Rows.Count == 0)
                {
                    sql = "insert into chitietquyen(quyen_ma,menu_id) values(@quyen_ma,@menu_id)";
                    cn.UpdateData(sql, name, value, Nparameter);
                }
            }
        }
        else
        {
            if (node.Checked)
            {
                string sql =
                "select * from chitietquyen,menu where chitietquyen.menu_id=menu.menu_id " +
                "and quyen_ma=@quyen_ma and menu.menu_id=@menu_id";
                int Nparameter = 2;
                string[] name = new string[Nparameter];
                name[0] = "@quyen_ma";
                name[1] = "@menu_id";
                object[] value = new object[Nparameter];
                value[0] = Request.QueryString["quyen_ma"];
                value[1] = node.Value;
                if (cn.LoadData(sql, name, value, Nparameter).Rows.Count == 0)
                {
                    sql = "insert into chitietquyen(quyen_ma,menu_id) values(@quyen_ma,@menu_id)";
                    cn.UpdateData(sql, name, value, Nparameter);
                }
            }
            foreach (TreeNode nodechild in node.ChildNodes)
            {
                if (nodechild.ChildNodes.Count == 0)
                {
                    if (nodechild.Checked)
                    {
                        string sql = "select * from chitietquyen,menu where chitietquyen.menu_id=menu.menu_id " +
                        "and quyen_ma=@quyen_ma and menu.menu_id=@menu_id";
                        int Nparameter = 2;
                        string[] name = new string[Nparameter];
                        name[0] = "@quyen_ma";
                        name[1] = "@menu_id";
                        object[] value = new object[Nparameter];
                        value[0] = Request.QueryString["quyen_ma"];
                        value[1] = nodechild.Value;
                        if (cn.LoadData(sql, name, value, Nparameter).Rows.Count == 0)
                        {
                            sql = "insert into chitietquyen(quyen_ma,menu_id) values(@quyen_ma,@menu_id)";
                            cn.UpdateData(sql, name, value, Nparameter);
                        }
                    }
                }
                else
                    insertmenu(nodechild, cn);
            }
        }


    }
    protected void btnNotSavemenu_Click(object sender, EventArgs e)
    {
        Response.Redirect("sys_authority.aspx?quyen_ma=" + Request.QueryString["quyen_ma"]);
    }
    protected void btnDelAllmenu_Click(object sender, EventArgs e)
    {
        clsConnect cn = new clsConnect();
        string sql = "delete from chitietquyen where quyen_ma=@quyen_ma and menu_id=@menu_id";
        for (int i = 0; i < rptquyenDetail.Items.Count; i++)
        {
            bool check = ((CheckBox)rptquyenDetail.Items[i].FindControl("chkSelect")).Checked;
            if (check)
            {
                int Nparameter = 2;
                string[] name = new string[Nparameter];
                name[0] = "@quyen_ma";
                name[1] = "@menu_id";
                object[] value = new object[Nparameter];
                value[0] = Request.QueryString["quyen_ma"];
                value[1] = ((Label)rptquyenDetail.Items[i].FindControl("lblMenuID")).Text;
                cn.UpdateData(sql, name, value, Nparameter);
            }
        }
        cn.close();
        Response.Redirect("sys_authority.aspx?quyen_ma=" + Request.QueryString["quyen_ma"]);
    }

    protected void btnSavemenu_Click(object sender, EventArgs e)
    {
        clsConnect cn = new clsConnect();
        string sql =
            "update chitietquyen set " +
            "quyen_xem = @quyen_xem, " +
            "quyen_sua = @quyen_sua, " +
            "quyen_them = @quyen_them, " +
            "quyen_xoa = @quyen_xoa " +
            "where quyen_ma=@quyen_ma and menu_id=@menu_id";
        int Nparameter = 6;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@quyen_ma";
        name[1] = "@menu_id";
        name[2] = "@quyen_xem";
        name[3] = "@quyen_them";
        name[4] = "@quyen_sua";
        name[5] = "@quyen_xoa";
        value[0] = Request.QueryString["quyen_ma"];
        for (int i = 0; i < rptquyenDetail.Items.Count; i++)
        {
            value[1] = ((Label)rptquyenDetail.Items[i].FindControl("lblMenuID")).Text;
            value[2] = ((CheckBox)rptquyenDetail.Items[i].FindControl("chkView")).Checked;
            value[3] = ((CheckBox)rptquyenDetail.Items[i].FindControl("chkAdd")).Checked;
            value[4] = ((CheckBox)rptquyenDetail.Items[i].FindControl("chkEdit")).Checked;
            value[5] = ((CheckBox)rptquyenDetail.Items[i].FindControl("chkDelete")).Checked;
            cn.UpdateData(sql, name, value, Nparameter);
        }
        cn.close();
        Response.Redirect("sys_authority.aspx?quyen_ma=" + Request.QueryString["quyen_ma"]);
    }
}

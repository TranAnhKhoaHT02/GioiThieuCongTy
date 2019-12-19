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
        if (!Page.IsPostBack)
        {
            clsConnect cn = new clsConnect();
            int Nparameter = 10;
            string[] name = new string[Nparameter];
            object[] value = new object[Nparameter];
            Page.SetFocus(txtmenu_name);
            dislayTremenu();
            if (Request.QueryString["Menu_ID"] != null)
            {
                string menu_id = Request.QueryString["Menu_ID"].ToString();

                string valuepath = cn.LoadData("SELECT * FROM Menu where Menu_ID=" + menu_id + " ORDER BY menu_order").Rows[0]["menu_valuepath"].ToString();

                tremenu.FindNode(valuepath).Selected = true;
                lblmenu.Text = tremenu.SelectedNode.Text;
                if (Request.QueryString["sub_menu"] == null)
                {
                    rdbMenu.SelectedIndex = 1;
                }
                rdbMenu_SelectedIndexChanged(sender, e);
            }

            #region phan quyen trang
            try
            {
                string sqlText = "select * from ChiTietQuyen CT JOIN Menu M ON CT.Menu_id=M.Menu_id " +
                         "WHERE Quyen_ma=@quyen_ma AND menu_url=@menu";
                Nparameter = 2;
                name[0] = "@quyen_ma";
                name[1] = "@menu";
                value[0] = Session["Quyen_ma"];
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
        }
    }
    private void dislayTremenu()
    {
        clsConnect cn = new clsConnect();
        try
        {
            string sql = "SELECT * FROM Menu where menu_parent_id = 0 ORDER BY menu_parent_id, menu_order, menu_id";
            foreach (DataRow row in cn.LoadData(sql).Rows)
            {
                TreeNode root = new TreeNode(row["Menu_title"].ToString() + " (" + row["menu_order"].ToString() + ")", row["Menu_ID"].ToString());
                root.NavigateUrl = "menu.aspx?menu_id=" + row["Menu_ID"].ToString();
                root.ToolTip = row["menu_description"].ToString();
                tremenu.Nodes.Add(root);
                CreateNodeChild(root, cn);
            }
        }
        catch (Exception)
        {
        }

        cn.close();
    }
    private void CreateNodeChild(TreeNode Nparent, clsConnect cn)
    {
        string sql = "SELECT * FROM Menu where menu_parent_id = @menu_parent_id ORDER BY menu_parent_id, menu_order, Menu_ID";
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        name[0] = "@menu_parent_id";
        object[] value = new object[Nparameter];
        value[0] = Nparent.Value;
        try
        {
            foreach (DataRow row in cn.LoadData(sql, name, value, Nparameter).Rows)
            {
                TreeNode node_parent = new TreeNode(row["Menu_title"].ToString() + " (" + row["menu_order"].ToString() + ")", row["Menu_ID"].ToString());
                node_parent.NavigateUrl = "menu.aspx?Menu_ID=" + row["Menu_ID"].ToString();
                node_parent.ToolTip = row["menu_description"].ToString();
                Nparent.ChildNodes.Add(node_parent);
                CreateNodeChild(node_parent, cn);
            }

        }
        catch (Exception)
        {

        }

    }
    private bool CheckError()
    {
        if (txtmenu_name.Text == "")
        {
            lblMsg.Text = "Vui lòng điền vào tên menu."; return false;
        }
        if (txtMenuOrder.Text == "" || !IsNumeric(txtMenuOrder.Text))
        {
            lblMsg.Text = "Vui lòng điền số vị trí(phải là số)."; return false;
        }
        return true;
    }
    private bool IsNumeric(string numberString)
    {
        if (numberString == "")
            return false;
        foreach (char c in numberString)
        {
            if (!char.IsNumber(c))
                return false;
        }
        return true;
    }

    protected void btnAdd_Click(object sender, EventArgs e)
    {
        if (CheckError())
        {
            clsConnect cn = new clsConnect();
            string sql = "INSERT INTO menu(menu_title,menu_description,menu_url,menu_valuepath,menu_parent_id, menu_order) " +
            "VALUES(@menu_title,@menu_description,@menu_url,@menu_valuepath,@menu_parent_id, @menu_order)";


            int Nparameter = 6;
            string[] name = new string[Nparameter];
            name[0] = "@menu_valuepath";
            name[1] = "@menu_description";
            name[2] = "@menu_url";
            name[3] = "@menu_title";
            name[4] = "@menu_parent_id";
            name[5] = "@menu_order";
            object[] value = new object[Nparameter];
            value[0] = "";
            if (tremenu.SelectedNode != null)
                value[0] = tremenu.SelectedNode.ValuePath;
            value[1] = txtmenu_description.Text;
            value[2] = txtmenu_url.Text;
            value[3] = txtmenu_name.Text;
            if (Request.QueryString["menu_id"] == null)
                value[4] = 0;
            else
                value[4] = tremenu.SelectedValue;
            value[5] = txtMenuOrder.Text;
            cn.UpdateData(sql, name, value, Nparameter);
            string menu_id = cn.LoadData("SELECT * FROM menu WHERE menu_id IN(SELECT TOP 1(menu_id) FROM menu ORDER BY menu_id desc)").Rows[0][0].ToString();
            value[0] = value[0].ToString() + "/" + menu_id;
            if (Request.QueryString["menu_id"] == null)
                value[0] = menu_id;
            cn.UpdateData("UPDATE menu SET menu_valuepath=@menu_valuepath WHERE menu_id=" + menu_id, name, value, 1);
            cn.close();
            String strURL = "menu.aspx?menu_id=" + menu_id + "&sub_menu=1";
            if (Request.QueryString["menu_id"] != null)
            {
                strURL = "menu.aspx?menu_id=" + Request.QueryString["menu_id"].ToString() + "&sub_menu=1";
            }
            Response.Redirect(strURL);
        }
    }
    protected void btnSave_Click(object sender, EventArgs e)
    {
        if (CheckError())
        {
            clsConnect cn = new clsConnect();
            string sql =
            "UPDATE menu SET menu_title = @menu_title, menu_description = @menu_description, " +
            "menu_url= @menu_url, menu_order = @menu_order where menu_id=@menu_id ";
            int Nparameter = 5;
            string[] name = new string[Nparameter];
            name[0] = "@menu_title";
            name[1] = "@menu_description";
            name[2] = "@menu_url";
            name[3] = "@menu_id";
            name[4] = "@menu_order";
            object[] value = new object[Nparameter];
            value[0] = txtmenu_name.Text;
            value[1] = txtmenu_description.Text;
            value[2] = txtmenu_url.Text;
            value[3] = Request.QueryString["menu_id"];
            value[4] = txtMenuOrder.Text;
            cn.UpdateData(sql, name, value, Nparameter);
            cn.close();
            Response.Redirect("menu.aspx");
        }
    }
    protected void btnNotSave_Click(object sender, EventArgs e)
    {
        Response.Redirect("menu.aspx");
    }
    protected void btnDel_Click(object sender, EventArgs e)
    {
        string menu_id = Request.QueryString["menu_id"];
        deletemenu(menu_id);
        Response.Redirect("menu.aspx");
    }
    private void deletemenu(string menu_id)
    {
        clsConnect cn = new clsConnect();
        string sql = "DELETE FROM menu WHERE menu_id = @menu_id";
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        name[0] = "@menu_id";
        object[] value = new object[Nparameter];
        value[0] = menu_id;
        cn.UpdateData(sql, name, value, Nparameter);
        sql = "SELECT menu_id FROM menu where menu_parent_id = @menu_id";
        DataTable dt = cn.LoadData(sql, name, value, Nparameter);
        if (dt.Rows.Count > 0)
        {
            foreach (DataRow row in dt.Rows)
                deletemenu(row[0].ToString());
        }
        cn.close();
    }
    protected void rdbMenu_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (tremenu.SelectedNode != null)
        {
            if (rdbMenu.SelectedIndex == 0)
            {
                clear();
                setButton(true);
            }
            else
            {
                setButton(false);
                LoadData(tremenu.SelectedValue);
            }
        }
    }
    private void LoadData(string menu_id)
    {
        clsConnect cn = new clsConnect();
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        name[0] = "@menu_id";
        object[] value = new object[Nparameter];
        value[0] = menu_id;
        DataRow row = cn.LoadData("SELECT * FROM menu where menu_id=@menu_id", name, value, Nparameter).Rows[0];
        cn.close();
        txtmenu_name.Text = row["menu_title"].ToString();
        txtmenu_description.Text = row["menu_description"].ToString();
        txtmenu_url.Text = row["menu_url"].ToString();
        txtMenuOrder.Text = row["menu_order"].ToString();
    }
    private void setButton(bool _flag)
    {
        btnAdd.Visible = _flag;
        btnNotSave.Visible = !_flag;
        btnSave.Visible = !_flag;
        btnDel.Visible = !_flag;
    }
    private void clear()
    {
        txtmenu_name.Text = "";
        Page.SetFocus(txtmenu_name);
        lblMsg.Text = "";
        txtmenu_description.Text = "";
        txtmenu_url.Text = "";
        txtMenuOrder.Text = "";
    }
    protected void btnDelete_Click(object sender, EventArgs e)
    {
        foreach (TreeNode node in tremenu.Nodes)
        {
            if (node.ChildNodes.Count != 0)
                deleteNode(node);
            else
            {
                if (node.Checked)
                    Delete_Menu(node.Value);
            }
        }
        Response.Redirect("menu.aspx");
    }
    private void deleteNode(TreeNode node)
    {
        foreach (TreeNode node_child in node.ChildNodes)
        {
            if (node_child.ChildNodes.Count != 0)
                deleteNode(node_child);
            else
            {
                if (node_child.Checked)
                    Delete_Menu(node_child.Value);
            }
        }
    }

    private void Delete_Menu(string smenu_ID)
    {
        clsConnect cn = new clsConnect();
        string sqlText = "DELETE FROM menu WHERE menu_id = @menu_id ";
        string[] name = new string[1];
        object[] value = new object[1];
        int Nparameter = 1;
        name[0] = "@menu_id";
        value[0] = smenu_ID;
        cn.UpdateData(sqlText, name, value, Nparameter);
        cn.close();
    }
}

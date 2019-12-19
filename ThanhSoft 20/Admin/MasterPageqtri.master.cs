using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Xml.Linq;

public partial class Admin_MasterPage : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
       
        if (!Page.IsPostBack)
        {
            if (Convert.ToInt16(Session["Quyen_ma"]) == 0)
                Response.Redirect("Default.aspx");
            //createMenu(1);
            createMenu(Convert.ToInt16((Session["Quyen_ma"])));

            divUser.InnerHtml = "Xin chào, " + Session["username"].ToString();
            String sqlText = "SELECT * FROM NhanVien WHERE NhanVien_ma = @nhanvien_ma;";
            clsConnect cn = new clsConnect();
            int Nparameter = 1;
            string[] name = new string[Nparameter];
            name[0] = "@nhanvien_ma";
            object[] value = new object[Nparameter];
            value[0] = Session["NhanVien_ma"];
            DataTable dt = cn.LoadData(sqlText, name, value, Nparameter);
            if (dt.Rows.Count > 0)
            {
                DataRow row = dt.Rows[0];
               
                divUser.InnerHtml = "Xin chào, " + row["NhanVien_ten"].ToString();
            }
            cn.close();

        }
        
    }
    private void createMenu(int quyen_ma)
    {
        clsConnect cn = new clsConnect();
        DataTable dt = cn.LoadData("select * from Menu, ChiTietQuyen where Menu.Menu_ID=ChiTietQuyen.Menu_ID and Quyen_ma=" + quyen_ma + " ORDER BY menu_parent_id, menu_order, Menu.Menu_ID");
        if (dt.Rows.Count == 0)
            mnuTools.Visible = false;
        else
        {
            createMenuItem(dt);
        }
        cn.close();
    }
    private void createMenuItem(DataTable table)
    {
        clsConnect cn = new clsConnect();
        foreach (DataRow row in table.Rows)
        {
            string[] strValuepath = row["menu_valuepath"].ToString().Split('/');
            string valuepathParent = "";
            for (int i = 0; i < strValuepath.Length; i++)
            {
                DataRow temp = cn.LoadData("select * from Menu where Menu_ID=" + strValuepath[i]).Rows[0];
                MenuItem item = new MenuItem();
                if (i == 0 || i == 1)
                    valuepathParent = strValuepath[0];
                else
                    valuepathParent += "/" + strValuepath[i - 1];
                item = mnuTools.FindItem(temp["menu_valuepath"].ToString());
                if (item == null)
                {
                    MenuItem itemtemp = new MenuItem();
                    itemtemp.Text = temp["Menu_title"].ToString();
                    itemtemp.Value = temp["Menu_ID"].ToString();
                    itemtemp.NavigateUrl = temp["menu_url"].ToString();
                    itemtemp.ToolTip = temp["menu_description"].ToString();
                    if (i == 0)
                        mnuTools.Items.Add(itemtemp);
                    else
                    {
                        //itemtemp.Text = "<img src='../images/menu/icon-16-menu.png'/>" + temp["menu_title"].ToString();
                        mnuTools.FindItem(valuepathParent).ChildItems.Add(itemtemp);
                    }
                }
            }
        }
        cn.close();
    }
}

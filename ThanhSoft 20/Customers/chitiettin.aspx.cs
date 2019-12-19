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
using System.Data.SqlClient;

public partial class Customers_Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //string ID = Request.QueryString["ID"];
        //SqlConnection sqlCon = new SqlConnection(ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString);
        //SqlDataAdapter da = new SqlDataAdapter("select * from TinTuc where TinTuc_ID='" + ID + "'", sqlCon);
        //DataTable dt = new DataTable();
        //da.Fill(dt);
        //datalistnew.DataSource = dt;
        //datalistnew.DataBind();
    }
}

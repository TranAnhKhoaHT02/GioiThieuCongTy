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

public partial class Customers_MasterPage : System.Web.UI.MasterPage
{
    clsConnect cls = new clsConnect();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            dtlWeb.DataSource = cls.LoadData("select top 2 (tieude), * from dichvu where loaidv_id=1 order by tintuc_id desc");
            dtlWeb.DataBind();
            //dtlTinTuc.DataSource = cls.LoadData("SELECT TOP 5 (tieude),* FROM TinTuc where loaitin_ma=1 ORDER BY TinTuc_ID DESC  ");
            //dtlTinTuc.DataBind();
            lbl.Text = DateTime.Now.ToString("dd/MM/yyyy");
        }
    }
}

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

public partial class Customers_BangGia : System.Web.UI.Page
{
    clsConnect db = new clsConnect();
    protected void Page_Load(object sender, EventArgs e)
    {

        Repeater1.DataSource = db.LoadData("select * from BangGia where loaidv_id=1");
        Repeater1.DataBind();
    }
}

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

public partial class Customers_Default : System.Web.UI.Page
{
    clsConnect cls = new clsConnect();
    protected void Page_Load(object sender, EventArgs e)
    {
        if(!IsPostBack)
        {
            dtlWeb.DataSource = cls.LoadData("Select * from dichvu where loaidv_id=1");
            dtlWeb.DataBind();
            if (Session["trang"] == null)
                Session["trang"] = 1;
            lblpreview.Visible = false;
            lblnext.Visible = false;
            lblpage.Visible = false;
            if (Session["sotrang"] == null)
                Session["sotrang"] = 1;
        }
    }
    void loaddtlWeb()
    {
    }
    protected void lblnext_Click(object sender, EventArgs e)
    {
        Session["trang"] = (int.Parse(Session["trang"].ToString()) + 1).ToString();
        lblpage.Text = Session["trang"].ToString();
       // loaddtltheotrang(int.Parse(Session["trang"].ToString()), int.Parse(drdlsoluong.SelectedValue));
        if (Session["trang"].ToString() != "1") lblpreview.Visible = true;
        if (Session["trang"].ToString() == Session["sotrang"].ToString()) lblnext.Visible = false;

    }

    protected void lblpreview_Click(object sender, EventArgs e)
    {
        if (Session["trang"].ToString() != "1")
            Session["trang"] = (int.Parse(Session["trang"].ToString()) - 1).ToString();
        lblpage.Text = Session["trang"].ToString();
        //loaddtltheotrang(int.Parse(Session["trang"].ToString()), int.Parse(drdlsoluong.SelectedValue));
        if (Session["trang"].ToString() != "1") lblpreview.Visible = true;
        if (Session["trang"].ToString() == Session["sotrang"].ToString()) lblnext.Visible = false;
        else lblnext.Visible = true;
    }
}

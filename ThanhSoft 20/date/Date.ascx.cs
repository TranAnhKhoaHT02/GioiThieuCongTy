using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.ComponentModel;

[ValidationPropertyAttribute("DateValueString")]
public partial class Calendar_Date : System.Web.UI.UserControl
{
    // date format used by the calendar control
    private const string DateFormat = "dd/MM/yyyy";

    protected void Page_Load(object sender, EventArgs e)
    {
        // links to CSS and JS files in "cal" subdirectory
        //litCSS.Text = "<link href='" + ResolveUrl("cal/popcalendar.css") + "' type=\"text/css\" rel=\"stylesheet\" />";
        //litJS.Text = "<script language=\"javascript\" src='" + ResolveUrl("cal/popcalendar.js") + "' type=\"text/javascript\"></script>";

        string scriptStr = "javascript:return popUpCalendar(this, '" + ResolveUrl("cal") + "/', document.getElementById('" + getClientID() + @"'), '" + DateFormat + "')";
        imgCalendar.Attributes.Add("onclick", scriptStr);
        //DateValue = DateTime.Now;
    }

    // Get the id of the control rendered on client side
    // Very essential for Javascript Calendar scripts to locate the textbox
    public string getClientID()
    {
        return txt_Date.ClientID;
    }

    [Category("Appearance")]
    [Description("CSS class name applied to the text box.")]
    [Browsable(true)]
    public string TextCssClass
    {
        get { return txt_Date.CssClass; }
        set { txt_Date.CssClass = value; }
    }

    /// <summary>
    /// Gets or sets the content of the textbox which represents a date.
    /// </summary>
    [Bindable(true, BindingDirection.TwoWay)]
    [Browsable(true)]
    public string DateValueString
    {
        get
        {
            return txt_Date.Text;
        }
        set
        {
            txt_Date.Text = value;
            DateTime date;
            if (DateTime.TryParseExact(value, DateFormat, null, System.Globalization.DateTimeStyles.None, out date))
            {
                if (date.Date == DateTime.MinValue.Date)
                {
                    txt_Date.Text = "";
                }
            }
        }
    }

    public enum Valid {Emty , NotFormat, OK }

    public Valid Validate()
    {
        if (DateValue.Year != 9999)
            return Valid.OK;
        else if (DateValueString == "")
            return Valid.Emty;
        else
            return Valid.NotFormat;
    }

    /// <summary>
    /// Gets or sets a DateTime representation of the currently selected date.
    /// </summary>
    [Bindable(true, BindingDirection.TwoWay)]
    [Browsable(true)]
    public DateTime DateValue
    {
        get
        {
            DateTime date;
            if (DateTime.TryParseExact(txt_Date.Text, DateFormat, null, System.Globalization.DateTimeStyles.None, out date))
            {
                return date;
            }
            return DateTime.MinValue;
        }
        set
        {
            txt_Date.Text = value.ToString(DateFormat);
        }
    }
}

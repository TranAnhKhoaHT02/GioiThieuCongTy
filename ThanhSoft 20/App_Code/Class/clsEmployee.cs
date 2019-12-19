using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

/// <summary>
/// Summary description for clsEmployee
/// </summary>
public class clsEmployee
{
    clsConnect cn;
	public clsEmployee()
	{
        cn = new clsConnect();
	}
    private int _MaNhanvien;
    public int MaNhanvien
    {
        set { _MaNhanvien = value; }
        get { return _MaNhanvien; }
    }
    public DataTable NhanVien_Theo_Id()
    {
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@nhanvien_ma"; value[0] = MaNhanvien;
        return cn.GetData("sp_NhanVien", name, value,Nparameter);
    }
}

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
/// Summary description for clsPrice
/// </summary>
public class clsPrice
{
	clsConnect cn;
    public clsPrice()
	{
        cn = new clsConnect();
	}
    private int _ID;

    public int ID
    {
        get { return _ID; }
        set { _ID = value; }
    }
    private string _TenGoi;

    public string TenGoi
    {
        get { return _TenGoi; }
        set { _TenGoi = value; }
    }
    private string _Module;

    public string Module
    {
        get { return _Module; }
        set { _Module = value; }
    }
    private string _ChiPhi;

    public string ChiPhi
    {
        get { return _ChiPhi; }
        set { _ChiPhi = value; }
    }
    private string _DuyTri;

    public string DuyTri
    {
        get { return _DuyTri; }
        set { _DuyTri = value; }
    }
    private string _NguoiViet;

    public string NguoiViet
    {
        get { return _NguoiViet; }
        set { _NguoiViet = value; }
    } 
    private int _MaDV;

    public int MaDV
    {
        get { return _MaDV; }
        set { _MaDV = value; }
    } 
   
    public DataTable TieuDe_List()
    {
        return cn.GetData("sp_banggia_tengoi");
    }
    public DataTable BangGia_DS()
    {
        return cn.GetData("sp_banggia_list");
    }
    public DataTable BangGia_theoID()
    {
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@id"; value[0] = ID;
        return cn.GetData("sp_banggia_list_id",name,value,Nparameter);
    }
    public int BangGia_luu()
    {
        int Nparameter = 5;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@tengoi"; value[0] = TenGoi;
        name[1] = "@module"; value[1] = Module;
        name[2] = "@chiphi"; value[2] = ChiPhi;
        name[3] = "@duytri"; value[3] = DuyTri;
        name[4] = "@nguoiviet"; value[4] = NguoiViet;
        return cn.Update("sp_banggia_save", name, value, Nparameter);
    }
    public int BangGia_capnhat()
    {
        int Nparameter = 5;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@tengoi"; value[0] = TenGoi;
        name[1] = "@module"; value[1] = Module;
        name[2] = "@chiphi"; value[2] = ChiPhi;
        name[3] = "@duytri"; value[3] = DuyTri;
        name[4] = "@nguoiviet"; value[4] = NguoiViet;
        name[5] = "@id"; value[5] = ID;
        return cn.Update("sp_banggia_update", name, value, Nparameter);
    }
    public int BangGia_xoa()
    {
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@id"; value[0] = ID;
        return cn.Update("sp_banggia_delete", name, value, Nparameter);
    }
}

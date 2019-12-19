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
/// Summary description for cls_TinTuc
/// </summary>
public class cls_TinTuc
{
    clsConnect cn;
	public cls_TinTuc()
	{
        cn = new clsConnect();
	}
    //properties
    private int _MaTinTuc;

    public int MaTinTuc
    {
        get { return _MaTinTuc; }
        set { _MaTinTuc = value; }
    }
    private string _TieuDe;

    public string TieuDe
    {
        get { return _TieuDe; }
        set { _TieuDe = value; }
    }
    private string _Heading;

    public string DienGiai
    {
        get { return _Heading; }
        set { _Heading = value; }
    }
    private string _Body_Text;

    public string NoiDung
    {
        get { return _Body_Text; }
        set { _Body_Text = value; }
    }
    private string _NguoiViet;

    public string NguoiViet
    {
        get { return _NguoiViet; }
        set { _NguoiViet = value; }
    }
    private DateTime _NgayViet;

    public DateTime NgayViet
    {
        get { return _NgayViet; }
        set { _NgayViet = value; }
    }
    private string _Nguon;

    public string Nguon
    {
        get { return _Nguon; }
        set { _Nguon = value; }
    }
    private string _LinkImage;

    public string LinkImage
    {
        get { return _LinkImage; }
        set { _LinkImage = value; }
    }
   //load tieu de
    public DataTable TitleList()
    {
       
        return cn.GetData("sp_Tintuc_TitleTop5");
    }
    public DataTable TinTucList()
    {
        return cn.GetData("sp_TinTuc_Get");
    }
    public DataTable TinTucListFromTitle()
    {
        int Nparameter=1;
        string[]name=new string[Nparameter];
        object[]value=new object[Nparameter];
        name[0] = "@tieude";
        value[0]=TieuDe;
        return cn.GetData("sp_TinTuc_GetTitle", name, value, Nparameter);
    }
    public DataTable TinTucListGetID()
    {
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@tintuc_id";
        value[0] = MaTinTuc;
        return cn.GetData("sp_TinTuc_GetID", name, value, Nparameter);
    }
    public int TinTuc_Delete()
    {
        int Nparameter=1;
        string[]name=new string[Nparameter];
        object[]value=new object[Nparameter];
        name[0]="@tintuc_id";
        value[0]=MaTinTuc;
        return cn.Update("tintuc_delete", name, value, Nparameter);
    }
    public int TinTuc_Insert()
    {
        //may truyen sai tham so roi, ko thay ca
        int Nparameter =7;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];       
        name[0] = "@tieude"; value[0] = TieuDe;
        name[1] = "@DienGiai"; value[1] = DienGiai;
        name[2] = "@NoiDung"; value[2] = NoiDung;
        name[3] = "@Img"; value[3] = LinkImage;
        name[4] = "@NgayDang"; value[4] = NgayViet;
        name[5] = "@NguoiDang"; value[5] = NguoiViet;
        name[6] = "@NguonTrichDan"; value[6] = Nguon;
        return cn.Update("sp_TinTuc_Insert", name, value, Nparameter);
       
    }
    public int TinTuc_Update()
    {

        int Nparameter = 8;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@tieude"; value[0] = TieuDe;
        name[1] = "@DienGiai"; value[1] = DienGiai;
        name[2] = "@NoiDung"; value[2] = NoiDung;
        name[3] = "@Img"; value[3] = LinkImage;
        name[4] = "@NgayDang"; value[4] = NgayViet;
        name[5] = "@NguoiDang"; value[5] = NguoiViet;
        name[6] = "@NguonTrichDan"; value[6] = Nguon;
        name[7] = "@tintuc_id"; value[7] = MaTinTuc;
        return cn.Update("sp_TinTuc_Insert", name, value, Nparameter);
    }
}

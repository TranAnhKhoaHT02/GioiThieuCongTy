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
/// Summary description for clsInfoTeam
/// </summary>
public class clsInfoTeam
{
    clsConnect cn;
	public clsInfoTeam()
	{
        cn = new clsConnect();
	}
    private int _MaGioiThieu;

    public int MaGioiThieu
    {
        get { return _MaGioiThieu; }
        set { _MaGioiThieu = value; }
    }
    private string _TieuDe;

    public string TieuDe
    {
        get { return _TieuDe; }
        set { _TieuDe = value; }
    }
    private string _Noidung;

    public string Noidung
    {
        get { return _Noidung; }
        set { _Noidung = value; }
    }
    private string _Gioithieu;

    public string Gioithieu
    {
        get { return _Gioithieu; }
        set { _Gioithieu = value; }
    }
    private string _NguonBaiViet;

    public string NguonBaiViet
    {
        get { return _NguonBaiViet; }
        set { _NguonBaiViet = value; }
    }
    private DateTime _Ngayviet;

    public DateTime Ngayviet
    {
        get { return _Ngayviet; }
        set { _Ngayviet = value; }
    }
    private string _Nguoiviet;

    public string Nguoiviet
    {
        get { return _Nguoiviet; }
        set { _Nguoiviet = value; }
    }
    private string _LinkAnh;

    public string LinkAnh
    {
        get { return _LinkAnh; }
        set { _LinkAnh = value; }
    }
    private int _MaDV;

    public int MaDV
    {
        get { return _MaDV; }
        set { _MaDV = value; }
    }
    private int _TrangThai;

    public int TrangThai
    {
        get { return _TrangThai; }
        set { _TrangThai = value; }
    }
    //tieu de bai viet
    public DataTable TieuDe_List()
    {
        return cn.GetData("sp_gioithieu_tieude");
    }
    public DataTable GioiThieu_DS()
    {
        return cn.GetData("sp_gioithieu_list");
    }
    public DataTable Gioithieu_theoID()
    {
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@tintuc_id"; value[0] = MaGioiThieu;
        return cn.GetData("sp_gioithieu_list_id",name,value,Nparameter);
    }
    public int Gioithieu_luu()
    {
        int Nparameter = 9;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@tieude"; value[0] = TieuDe;
        name[1] = "@diengiai"; value[1] = Gioithieu;
        name[2] = "@noidung"; value[2] = Noidung;
        name[3] = "@img"; value[3] = LinkAnh;
        name[4] = "@TrangThai"; value[4] = TrangThai;
        name[5] = "@loaidv_id"; value[5] = MaDV;
        name[6] = "@NgayDang"; value[6] = Ngayviet;
        name[7] = "@NguoiDang"; value[7] = Nguoiviet;
        name[8] = "@NguonTrichDan"; value[8] = NguonBaiViet;
        return cn.Update("sp_gioithieu_save", name, value, Nparameter);
    }
    public int Gioithieu_capnhat()
    {
        int Nparameter = 10;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@tieude"; value[0] = TieuDe;
        name[1] = "@diengiai"; value[1] = Gioithieu;
        name[2] = "@noidung"; value[2] = Noidung;
        name[3] = "@img"; value[3] = LinkAnh;
        name[4] = "@TrangThai"; value[4] = TrangThai;
        name[5] = "@loaidv_id"; value[5] = MaDV;
        name[6] = "@NgayDang"; value[6] = Ngayviet;
        name[7] = "@NguoiDang"; value[7] = Nguoiviet;
        name[8] = "@NguonTrichDan"; value[8] = NguonBaiViet;
        name[9] = "@tintuc_id"; value[9] = MaGioiThieu;
        return cn.Update("sp_gioithieu_update", name, value, Nparameter);
    }
    public int Gioithieu_xoa()
    {
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@tintuc_id"; value[0] = MaGioiThieu;
        return cn.Update("sp_gioithieu_delete", name, value, Nparameter);
    }
}

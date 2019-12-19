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
public class clsInfo
{
    clsConnect cn;
    public clsInfo()
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
    private string _DienGiai;

    public string DienGiai
    {
        get { return _DienGiai; }
        set { _DienGiai = value; }
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
    private string _Img;

    public string Img
    {
        get { return _Img; }
        set { _Img = value; }
    }
    private int _MaLoaiTin;

    public int MaLoaiTin
    {
        get { return _MaLoaiTin; }
        set { _MaLoaiTin = value; }
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
        return cn.GetData("sp_tintuc_tieude");
    }
    public DataTable GioiThieu_DS()
    {
        return cn.GetData("sp_tintuc_list");
    }
    public DataTable Gioithieu_theoID()
    {
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@tintuc_id"; value[0] = MaGioiThieu;
        return cn.GetData("sp_tintuc_list_id", name, value, Nparameter);
    }
    public int Gioithieu_luu()
    {
        int Nparameter = 9;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@tieude"; value[0] = TieuDe;
        name[1] = "@diengiai"; value[1] = DienGiai;
        name[2] = "@noidung"; value[2] = Noidung;
        name[3] = "@img"; value[3] = Img;
        name[4] = "@TrangThai"; value[4] = TrangThai;
        name[5] = "@NgayDang"; value[5] = Ngayviet;
        name[6] = "@NguoiDang"; value[6] = Nguoiviet;
        name[7] = "@NguonTrichDan"; value[7] = NguonBaiViet;
        name[8] = "@loaitin_ma"; value[8] =MaLoaiTin;
        return cn.Update("sp_tintuc_save", name, value, Nparameter);
    }
    public int Gioithieu_capnhat()
    {
        int Nparameter = 10;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@tieude"; value[0] = TieuDe;
        name[1] = "@diengiai"; value[1] = DienGiai;
        name[2] = "@noidung"; value[2] = Noidung;
        name[3] = "@img"; value[3] = Img;
        name[4] = "@TrangThai"; value[4] = TrangThai;
        name[5] = "@NgayDang"; value[5] = Ngayviet;
        name[6] = "@NguoiDang"; value[6] = Nguoiviet;
        name[7] = "@NguonTrichDan"; value[7] = NguonBaiViet;
        name[8] = "@loaitin_ma"; value[8] = MaLoaiTin;
        name[9] = "@tintuc_id"; value[9] = MaGioiThieu;
        return cn.Update("sp_tintuc_update", name, value, Nparameter);
    }
    public int Gioithieu_xoa()
    {
        int Nparameter = 1;
        string[] name = new string[Nparameter];
        object[] value = new object[Nparameter];
        name[0] = "@tintuc_id"; value[0] = MaGioiThieu;
        return cn.Update("sp_tintuc_delete", name, value, Nparameter);
    }
}

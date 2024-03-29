using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Data.SqlClient;
public class clsConnect
{
   
    private SqlConnection con;
    private SqlCommand cm;
    private SqlDataAdapter da;
    private DataTable dt;
    string strKetnoi = "";
    
	public clsConnect()
    {       
        con = new SqlConnection();
        con.ConnectionString = strKetnoi;
        open();
	}
    public void open()
    {
        strKetnoi = System.Configuration.ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;
        if (con.State != ConnectionState.Open)
        {
            con = new SqlConnection(strKetnoi); 
            con.Open();
            
        }
    }
    public void close() 
    {
        con.Close();
        con.Dispose();
    }
    public DataTable LoadData(String sql)
    {
        open();
        cm = new SqlCommand(sql, con);
        cm.CommandTimeout = 9999999;           
        dt = new DataTable();
        da = new SqlDataAdapter(cm);
        da.Fill(dt);
        da.Dispose();
        close();
        return dt;
    }
    //store
    public DataTable GetData(String sql)
    {
        open();
        cm = new SqlCommand(sql, con);
        cm.CommandTimeout = 9999999;
        cm.CommandType = CommandType.StoredProcedure;       
        dt = new DataTable();
        da = new SqlDataAdapter(cm);
        da.Fill(dt);
        da.Dispose();
        close();
        return dt;
    }
    public DataTable LoadData(String sql, String[] parameterName, Object[] parameterValue, int Nparameter)
    {
        open();
        SqlCommand cm = new SqlCommand(sql, con);
        for (int i = 0; i < Nparameter; i++)
        {
            cm.Parameters.AddWithValue(parameterName[i], parameterValue[i]);
        }
        cm.CommandTimeout = 9999999;         
        dt = new DataTable();
        da = new SqlDataAdapter(cm);
        da.Fill(dt);
        da.Dispose();
        close();
        return dt;
    } 
    //store
    public DataTable GetData(String sql, String[] parameterName, Object[] parameterValue, int Nparameter)
    {
        open();
        SqlCommand cm = new SqlCommand(sql, con);
        for (int i = 0; i < Nparameter; i++)
        {
            cm.Parameters.AddWithValue(parameterName[i], parameterValue[i]);
        }
        cm.CommandTimeout = 9999999;
        cm.CommandType = CommandType.StoredProcedure;       
        dt = new DataTable();
        da = new SqlDataAdapter(cm);
        da.Fill(dt);
        da.Dispose();
        close();
        return dt;
    }    
    public int UpdateData(String sql, String[] parameterName, Object[] parameterValue, int Nparameter)
    {
        open();
        int exe = 0;
        cm = new SqlCommand(sql, con);
        for (int i = 0; i < Nparameter; i++)
        {
            cm.Parameters.AddWithValue(parameterName[i], parameterValue[i]);
        }
        cm.CommandTimeout = 9999999;       
        exe = cm.ExecuteNonQuery();
        cm.Dispose();
        close();
        return exe; 

    }
    //store
    public int Update(String sql, String[] parameterName, Object[] parameterValue, int Nparameter)
    {
        open();
        int exe = 0;
        cm = new SqlCommand(sql, con);
        for (int i = 0; i < Nparameter; i++)
        {
            cm.Parameters.AddWithValue(parameterName[i], parameterValue[i]);
        }
        cm.CommandTimeout = 9999999;
        cm.CommandType = CommandType.StoredProcedure;
        exe = cm.ExecuteNonQuery();
        cm.Dispose();
        close();
        return exe;

    }
    public int UpdateData(String sql)
    {
        open();
        int exe = 0;
        cm = new SqlCommand(sql, con);       
        exe = cm.ExecuteNonQuery();
        cm.Dispose();
        close();
        return exe;
    }
    //store
    public int Update(String sql)
    {
        open();
        int exe = 0;
        cm = new SqlCommand(sql, con);
        cm.CommandType = CommandType.StoredProcedure;
        exe = cm.ExecuteNonQuery();
        cm.Dispose();
        close();
        return exe;
    }
    //Hàm thực thi và trả về DataTable
    public DataTable TableThongKe()
    {
        DataTable dtb = new DataTable();
        con = new SqlConnection(strKetnoi);
        try
        {
            // Mở kết nối
            con.Open();
            DataSet ds = new DataSet();
            cm = new SqlCommand("spThongKe_Edit", con);
            cm.CommandType = CommandType.StoredProcedure;
            da = new SqlDataAdapter(cm);
            // Đổ dữ liệu vào DataSet
            da.Fill(ds);
            dtb = ds.Tables[0];
        }
        catch { }
        finally
        {
            if (con.State == ConnectionState.Open)
                con.Close();
            con.Dispose();
        }
        return dtb;
    }
  
}

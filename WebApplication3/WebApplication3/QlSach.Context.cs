﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApplication3
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class QLBanSachEntities : DbContext
    {
        public QLBanSachEntities()
            : base("name=QLBanSachEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<tChiTietHDB> tChiTietHDBs { get; set; }
        public virtual DbSet<tChiTietHDN> tChiTietHDNs { get; set; }
        public virtual DbSet<tHoaDonBan> tHoaDonBans { get; set; }
        public virtual DbSet<tHoaDonNhap> tHoaDonNhaps { get; set; }
        public virtual DbSet<tKhachHang> tKhachHangs { get; set; }
        public virtual DbSet<tNhaCungCap> tNhaCungCaps { get; set; }
        public virtual DbSet<tNhanVien> tNhanViens { get; set; }
        public virtual DbSet<tNhaXuatBan> tNhaXuatBans { get; set; }
        public virtual DbSet<tSach> tSaches { get; set; }
        public virtual DbSet<tTheLoai> tTheLoais { get; set; }
    
        [DbFunction("QLBanSachEntities", "cau4Ktra")]
        public virtual IQueryable<cau4Ktra_Result> cau4Ktra(string thang, string nam)
        {
            var thangParameter = thang != null ?
                new ObjectParameter("thang", thang) :
                new ObjectParameter("thang", typeof(string));
    
            var namParameter = nam != null ?
                new ObjectParameter("nam", nam) :
                new ObjectParameter("nam", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.CreateQuery<cau4Ktra_Result>("[QLBanSachEntities].[cau4Ktra](@thang, @nam)", thangParameter, namParameter);
        }
    
        public virtual int cau1Ktra(string tenNV, string nam, ObjectParameter soTien, ObjectParameter slHDB)
        {
            var tenNVParameter = tenNV != null ?
                new ObjectParameter("tenNV", tenNV) :
                new ObjectParameter("tenNV", typeof(string));
    
            var namParameter = nam != null ?
                new ObjectParameter("nam", nam) :
                new ObjectParameter("nam", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("cau1Ktra", tenNVParameter, namParameter, soTien, slHDB);
        }
    
        public virtual int cau2(string thang, ObjectParameter sotien, ObjectParameter slHoaDon)
        {
            var thangParameter = thang != null ?
                new ObjectParameter("thang", thang) :
                new ObjectParameter("thang", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("cau2", thangParameter, sotien, slHoaDon);
        }
    
        public virtual int cau2thi(string nam, ObjectParameter slNhap, ObjectParameter slBan)
        {
            var namParameter = nam != null ?
                new ObjectParameter("nam", nam) :
                new ObjectParameter("nam", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("cau2thi", namParameter, slNhap, slBan);
        }
    
        public virtual int sp_alterdiagram(string diagramname, Nullable<int> owner_id, Nullable<int> version, byte[] definition)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            var versionParameter = version.HasValue ?
                new ObjectParameter("version", version) :
                new ObjectParameter("version", typeof(int));
    
            var definitionParameter = definition != null ?
                new ObjectParameter("definition", definition) :
                new ObjectParameter("definition", typeof(byte[]));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_alterdiagram", diagramnameParameter, owner_idParameter, versionParameter, definitionParameter);
        }
    
        public virtual int sp_creatediagram(string diagramname, Nullable<int> owner_id, Nullable<int> version, byte[] definition)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            var versionParameter = version.HasValue ?
                new ObjectParameter("version", version) :
                new ObjectParameter("version", typeof(int));
    
            var definitionParameter = definition != null ?
                new ObjectParameter("definition", definition) :
                new ObjectParameter("definition", typeof(byte[]));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_creatediagram", diagramnameParameter, owner_idParameter, versionParameter, definitionParameter);
        }
    
        public virtual int sp_dropdiagram(string diagramname, Nullable<int> owner_id)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_dropdiagram", diagramnameParameter, owner_idParameter);
        }
    
        public virtual ObjectResult<sp_helpdiagramdefinition_Result> sp_helpdiagramdefinition(string diagramname, Nullable<int> owner_id)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_helpdiagramdefinition_Result>("sp_helpdiagramdefinition", diagramnameParameter, owner_idParameter);
        }
    
        public virtual ObjectResult<sp_helpdiagrams_Result> sp_helpdiagrams(string diagramname, Nullable<int> owner_id)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_helpdiagrams_Result>("sp_helpdiagrams", diagramnameParameter, owner_idParameter);
        }
    
        public virtual int sp_renamediagram(string diagramname, Nullable<int> owner_id, string new_diagramname)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            var new_diagramnameParameter = new_diagramname != null ?
                new ObjectParameter("new_diagramname", new_diagramname) :
                new ObjectParameter("new_diagramname", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_renamediagram", diagramnameParameter, owner_idParameter, new_diagramnameParameter);
        }
    
        public virtual int sp_upgraddiagrams()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_upgraddiagrams");
        }
    }
}

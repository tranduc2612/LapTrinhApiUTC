//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class tSach
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tSach()
        {
            this.tChiTietHDBs = new HashSet<tChiTietHDB>();
            this.tChiTietHDNs = new HashSet<tChiTietHDN>();
        }
    
        public string MaSach { get; set; }
        public string TenSach { get; set; }
        public string TacGia { get; set; }
        public string MaTheLoai { get; set; }
        public string MaNXB { get; set; }
        public Nullable<decimal> DonGiaNhap { get; set; }
        public Nullable<decimal> DonGiaBan { get; set; }
        public Nullable<int> SoLuong { get; set; }
        public Nullable<int> SoTrang { get; set; }
        public string TrongLuong { get; set; }
        public byte[] Anh { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tChiTietHDB> tChiTietHDBs { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tChiTietHDN> tChiTietHDNs { get; set; }
        public virtual tNhaXuatBan tNhaXuatBan { get; set; }
        public virtual tTheLoai tTheLoai { get; set; }
    }
}

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
    
    public partial class tHoaDonNhap
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tHoaDonNhap()
        {
            this.tChiTietHDNs = new HashSet<tChiTietHDN>();
        }
    
        public string SoHDN { get; set; }
        public string MaNV { get; set; }
        public Nullable<System.DateTime> NgayNhap { get; set; }
        public string MaNCC { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tChiTietHDN> tChiTietHDNs { get; set; }
        public virtual tNhaCungCap tNhaCungCap { get; set; }
        public virtual tNhanVien tNhanVien { get; set; }
    }
}

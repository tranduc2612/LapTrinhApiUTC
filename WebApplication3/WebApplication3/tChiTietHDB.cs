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
    
    public partial class tChiTietHDB
    {
        public string SoHDB { get; set; }
        public string MaSach { get; set; }
        public Nullable<int> SLBan { get; set; }
        public string KhuyenMai { get; set; }
    
        public virtual tHoaDonBan tHoaDonBan { get; set; }
        public virtual tSach tSach { get; set; }
    }
}
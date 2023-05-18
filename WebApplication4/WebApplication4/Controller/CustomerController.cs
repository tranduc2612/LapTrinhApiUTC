using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication4.Controller
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CustomerController : ApiController
    {
        DataClasses1DataContext dbCustomer = new DataClasses1DataContext();
        [HttpGet]
        public List<tNhanVien> GetCustomerLists()
        {
            return dbCustomer.tNhanViens.ToList();
        }
    


        [HttpPost]
        public bool InsertNewCustomer(string id, string Ho,string Ten,bool phai)
        {
            try
            {
                tNhanVien customer = new tNhanVien();
                customer.MaNV = id;
                customer.HO = Ho;
                customer.TEN = Ten;
                customer.PHAI = phai;

                customer.NTNS = DateTime.Now;
                customer.NgayBD= DateTime.Now;  

                dbCustomer.tNhanViens.InsertOnSubmit(customer);
                dbCustomer.SubmitChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpPut]
        public bool UpdateCustomer(string id, string Ho, string Ten, bool phai)
        {
            tNhanVien nhanvien = dbCustomer.tNhanViens.Where(x=>x.MaNV==id).FirstOrDefault();
            if (nhanvien!=null)
            {
                nhanvien.HO = Ho;
                nhanvien.TEN= Ten;
                nhanvien.PHAI = phai;
				dbCustomer.SubmitChanges();
				return true;
            }

            return false;
        }

        [HttpDelete]
        public bool DeleteCustomer(string id)
        {
            try
            {
                tNhanVien customer = dbCustomer.tNhanViens.FirstOrDefault(x => x.MaNV == id);
                
                if (customer == null) return false;
                dbCustomer.tNhanViens.DeleteOnSubmit(customer); 
                dbCustomer.SubmitChanges();
               
                return true;
            }
            catch
            {
                return false;
            }
        }
        [Route("Search/{name}")]
		[HttpGet]
		public List<tNhanVien> GetCustomerLike(string name)
        {

			List<tNhanVien> customer = dbCustomer.tNhanViens.Where(x => x.TEN.Contains(name)).ToList();
            return customer;
		}
    }
}

    
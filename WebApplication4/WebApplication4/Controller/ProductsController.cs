using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication4.Controller
{

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProductsController : ApiController
	{
        DataClasses1DataContext dbCustomer = new DataClasses1DataContext();
		[HttpGet]
		public List<tHangHoa> GetTonKho()
		{
			return dbCustomer.tHangHoas.Where(x=>x.SoLuong> 0).ToList();
		} 
	}
}
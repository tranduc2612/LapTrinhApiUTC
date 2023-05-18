using BaiWebApi1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BaiWebApi1.Controllers
{
    public class HomeController : Controller
    {
        QLBanSachEntities1 db = new QLBanSachEntities1();
        public List<> Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataAccess.Entities;

namespace SoftwareDream.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            using (var obj = new SoftwareDreamEntities())
            {
                return View(obj.Mains.ToList());
            }
           
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
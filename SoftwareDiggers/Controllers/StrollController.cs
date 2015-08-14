using System.Collections.Generic;
using System.Web.Mvc;

namespace SoftwareDiggers.Controllers
{
    public class StrollController : Controller
    {
        public ActionResult Index()
        {
            return PartialView();
        }
        public ActionResult Projects(int after=1)
        {
            after++;//nekist angularui tu paciu id
            List<object> a = new List<object>();
            for (int i = after; i <= after + 100; i++)
            {
                a.Add(new {id=i, kind = "qqqq"+i, data = "sdsd56554sd"+i});
            }

            return Json(a,JsonRequestBehavior.AllowGet);
        }
         
    }
}
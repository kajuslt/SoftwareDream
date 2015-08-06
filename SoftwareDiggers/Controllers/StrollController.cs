using System.Web.Mvc;

namespace SoftwareDiggers.Controllers
{
    public class StrollController : Controller
    {
        public ActionResult Index()
        {
            return PartialView();
        }
        public ActionResult Projects(int? after, string jsonp)
        {
            object[] asdasd = new object[]
            {
                new {kind = "qqqq", data = "sdsd56554sd"},
                new {kind = "qqqq", data = "sdsČĘČĘdsd"},
                new {kind = "qqqq", data = "sdsdsd"},
                new {kind = "qqqq", data = "sdsdsWEd"},
                new {kind = "qqqq", data = "sdsdsWEd"},
                new {kind = "qqqq", data = "sdsdWEsd"},
                new {kind = "qqqq", data = "54654ED"},
                new {kind = "qqqq", data = "sdsdsWEd"},
                new {kind = "qqqq", data = "54454"},
                new {kind = "qqqq", data = "sdsdWEsd"}

            };
            return Json(asdasd,JsonRequestBehavior.AllowGet);
        }
         
    }
}
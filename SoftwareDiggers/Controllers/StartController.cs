using System.Web.Mvc;

namespace SoftwareDiggers.Controllers
{
    public class StartController : Controller
    {
        public ActionResult Index()
        {
            return PartialView();
        }
         
    }
}
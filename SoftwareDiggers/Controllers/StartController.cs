using System.IO.Pipes;
using System.Web.Mvc;

namespace SoftwareDiggers.Controllers
{
    public class StartController : Controller
    {
        public ActionResult Index()
        {
            return PartialView();
        }

        public ActionResult _comonData()
        {
            return PartialView();
        }

        public ActionResult _platforms()
        {
            return PartialView();
        }

        public ActionResult _shortDescription()
        {
            return PartialView();
        }
         
    }
}
using System.Collections.Generic;
using System.Web.Mvc;
using SoftwareDiggers.Models;
using SoftwareDiggers.Recourses;

namespace SoftwareDiggers.Controllers
{
    public class ProjectsController : Controller
    {
        public ActionResult Index()
        {
            return PartialView();
        }
        public ActionResult List(int after=1)
        {
            after++;//nekist angularui tu paciu id
            List<ProjectShortDescriptionVM> a = new List<ProjectShortDescriptionVM>();
            for (int i = after; i <= after + 100; i++)
            {
                a.Add(new ProjectShortDescriptionVM() { Id = i+1, ProjectName = "Name" + i, ShortPtojectDescription = "ShortPtojectDescription"+i, AmountGathered = i+5,
                                                        AmountTotal = i + 1,
                                                        ProjectTypeIconId = i
                });
            }

            return Json(a,JsonRequestBehavior.AllowGet);
        }
        public ActionResult Search(string phrase)
        {
            return PartialView("Search",phrase);
        }
        public ActionResult SearchList(string phrase, int after = 1)
        {
            //pasirupinti paieskos frazes saugumu
            after++;
            List<ProjectShortDescriptionVM> a = new List<ProjectShortDescriptionVM>();
            for (int i = after; i <= after + 100; i++)
            {
                a.Add(new ProjectShortDescriptionVM()
                {
                    Id = i + 1,
                    ProjectName = "Name" + i + phrase,
                    ShortPtojectDescription = "ShortPtojectDescription" + i,
                    AmountGathered = i + 5,
                    AmountTotal = i + 1,
                    ProjectTypeIconId = i
                });
            }

            return Json(a, JsonRequestBehavior.AllowGet);
        }
         
    }
}
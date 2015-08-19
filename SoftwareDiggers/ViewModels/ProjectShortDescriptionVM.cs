using SoftwareDiggers.Recourses;

namespace SoftwareDiggers.Models
{
    public class ProjectShortDescriptionVM
    {
        public int Id { get; set; }
        public string ProjectName { get; set; }
        public string ShortPtojectDescription { get; set; }
        public decimal AmountGathered { get; set; }
        public decimal AmountTotal { get; set; }
        //public ProjectTypeIcon ProjectTypeIconId { get; set; }
        public int ProjectTypeIconId { get; set; }
    }
}
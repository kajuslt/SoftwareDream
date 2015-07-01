using System.Collections.Generic;

namespace SoftwareDiggers.Models
{
    public class Main
    {
        public int Id { get; set; }
        public int CreatedByUserId { get; set; }
        public int ProjectStateId { get; set; }
        //TODO: SITO NEREIKES GREICIAUSIAI, NES VIENAM PROJEKTUI GALI BUTI BEGALINIS SKAICIUS AUKU
        public int DonationsId { get; set; }
        public decimal DonationsRequiredInTotal { get; set; }
        public int IconId { get; set; }

        public virtual Users UserName { get; set; }
        public virtual ProjectState ProjectState { get; set; }
        public virtual ICollection<Donations> DonationAmountGathered { get; set; }
        public virtual Icon Icon { get; set; }

    }
}
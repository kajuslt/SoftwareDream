using System;

namespace SoftwareDiggers.Models
{
    public class Donations
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ProjectId { get; set; }
        public DateTime Date { get; set; }
        public decimal AmmountOfDonation { get; set; }
    }
}
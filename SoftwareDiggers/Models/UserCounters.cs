using System;

namespace SoftwareDiggers.Models
{
    public class UserCounters
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string UserIp { get; set; }
        public DateTime DateTime { get; set; }
        public int ProjectId { get; set; }

        public virtual Main MainName { get; set; }
    }
}
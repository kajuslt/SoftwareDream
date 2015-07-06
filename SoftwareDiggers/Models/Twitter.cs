namespace SoftwareDiggers.Models
{
    public class Twitter
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int TwitterUserId { get; set; }
        public string TwitterAccessToken { get; set; }
        public string TwitterDisplayName { get; set; }
    }
}
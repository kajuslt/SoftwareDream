using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using SoftwareDiggers.Models;

namespace SoftwareDiggers.DAL
{
    public class ProjectContext : DbContext
    {
        public ProjectContext() : base("ProjectContext")
        {
        }

        public DbSet<Main> Projects { get; set; }
        public DbSet<ProjectState> ProjectStates { get; set; }
        public DbSet<Donations> Donations { get; set; }
        //TODO:Aprasyti kitus modelius

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
         
    }
}
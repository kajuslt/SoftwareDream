using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SoftwareDream.Startup))]
namespace SoftwareDream
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

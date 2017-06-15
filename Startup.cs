using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angular2Demo_SeparateFolder.Startup))]
namespace Angular2Demo_SeparateFolder
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

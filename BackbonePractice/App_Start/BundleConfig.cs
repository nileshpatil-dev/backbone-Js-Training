using System.Web;
using System.Web.Optimization;

namespace BackbonePractice
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //backbone
            bundles.Add(new ScriptBundle("~/bundle/vendor").Include(
                "~/Scripts/vendor/underscore-1.6.0.js",
                "~/Scripts/vendor/backbone-1.0.0.min.js",
                "~/Scripts/vendor/backbone.marionette.min.js"));
            // user Admin
            bundles.Add(new ScriptBundle("~/bundle/user-admin").IncludeDirectory(
                "~/Scripts/apps/user-admin", "*.js", true));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}

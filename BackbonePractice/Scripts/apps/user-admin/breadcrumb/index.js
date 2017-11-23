var BreadCrumbModule = function (settings) {

    var initialData = settings.initialData || [];
    var module = {};
    var collection = new BreadCrumbCollection(initialData);
    var region = settings.region;
    var view = new BreadCrumbList({ collection: collection });

    module.app = settings.app || {};
    module.setCrumbs = function (data) {
        collection.reset(data);
    };

    // events
    collection.on("breadcrumb:selected", function (crumb) {
        module.app.trigger(crumb.get("trigger"));
    });

    module.show = function () {
        if (region) {
            region.show(view);
        } else {
            throw "Cant show the breadcrumbs without a region specified";
        }
    }

    //module.load = function (region, initialData) {
    //    initialData || (initialData = {})
    //    collection = new BreadCrumbCollection();

        

    //    var view = new BreadCrumbList({ collection: collection });
    //    region.show(view);
    //};
    return module;
}
var UserAdmin = new Marionette.Application();
UserAdmin.addRegions({
    mainRegion: "#app",
    navRegion: "#breadcrumbs"
});

// Module Loader

UserAdmin.addInitializer(function () {
    UserAdmin.breadCrumbs = new BreadCrumbModule({
        app: UserAdmin,
        region: UserAdmin.navRegion,
        initialData: { title: "Home" }
    });

    UserAdmin.userModule = new UserModule({ app: UserAdmin });
    UserAdmin.homeModule = new HomeModule({ app: UserAdmin });
});
// Breadcrumb Events
UserAdmin.addInitializer(function () {
    var crumbs = {
        home: {
            title: "Home", trigger: "index:requested"
        },
        list: {
            title: "User listing", trigger: "user:listing:requested"
        }
    }

    UserAdmin.breadCrumbs.show();

    UserAdmin.on("user:selected", function (user) {
        UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list, { title: user.get("email") }]);
    });

    UserAdmin.on("user:editing", function (user) {
        UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list, { title: "Editing " + user.get("email") }]);
    });

    UserAdmin.on("user:listing:requested", function () {
        UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list]);
    });

    UserAdmin.on("index:requested", function () {
        UserAdmin.breadCrumbs.setCrumbs(crumbs.home);
    });
});

// User Events
UserAdmin.addInitializer(function () {
    UserAdmin.on("user:selected", function (user) {
        UserAdmin.userModule.controller.showUserDetail(user);
    });

    UserAdmin.on("user:editing", function (user) {
        UserAdmin.userModule.controller.editUserDetail(user);
    });

    UserAdmin.on("user:listing:requested", function () {
        UserAdmin.userModule.controller.showUserList();
    });

});

UserAdmin.addInitializer(function () {
    UserAdmin.on("index:requested", function () {
        UserAdmin.homeModule.controller.showIndex();
    });

    Backbone.history.start();
});

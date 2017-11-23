﻿var UserController = Marionette.Controller.extend({
    initialize: function (options) {
        this.module = options.module;
    },
    showUserList: function () {
        var userListView = new UserListView({ collection: this.module.collection })
        this.module.app.mainRegion.show(userListView);
        this.module.router.navigate("users")
        this.module.collection.fetch();
    },
    showUserDetail: function (user) {
        var layout = new UserLayoutView({ model: user });
        this.module.app.mainRegion.show(layout);
        layout.summary.show(new UserSummaryView({ model: user }));
        layout.detail.show(new UserDetailView({ model: user }));
        this.module.router.navigate("users/" + user.id);
    },
    editUserDetail: function (user) {
        var layout = new UserLayoutView({ model: user });
        this.module.app.mainRegion.show(layout);
        layout.summary.show(new UserSummaryView({ model: user }));
        layout.detail.show(new UserEditView({ model: user }));
        this.module.router.navigate("users/" + user.id + "/edit");
    }
});
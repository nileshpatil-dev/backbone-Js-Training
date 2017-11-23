
var UserRouter = Backbone.Router.extend({
    initialize: function (options) {
        this.module = options.module;
    },
    routes: {
        "users": "showUserList",
        "users/:id": "showUserDetail",
        "users/:id/edit": "editUserDetail"
    },
    showUserList: function () {
        this.module.app.trigger("user:listing:requested");
    },
    showUserDetail: function (id) {
        var user = new UserModel({ id: id });
        user.fetch().then(function () {
            user.select();
        });
    },
    editUserDetail: function (id) {
        var user = new UserModel({ id: id });
        user.fetch().then(function () {
            user.edit();
        });
    }
});
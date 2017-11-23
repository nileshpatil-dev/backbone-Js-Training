var IndexView = Marionette.ItemView.extend({
    template: "#index-template",
    events: {
        "click #nav-user-list": "showUserList"
    },
    showUserList: function (ev) {
        ev.preventDefault();
        UserAdmin.trigger("user:listing:requested");
    }
});
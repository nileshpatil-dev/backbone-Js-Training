
var UserLayoutView = Marionette.Layout.extend({
    template: "#user-detail-layout-template",
    regions: {
        summary: "#summary-template",
        detail: "#detail-template"
    }
});

var UserSummaryView = Marionette.ItemView.extend({
    template: "#user-summary-template"
});

var UserDetailView = Marionette.ItemView.extend({
    template: "#user-detail-template",
    events: {
        "click #edit-user": "editUserDetail"
    },
    editUserDetail: function (ev) {
        ev.preventDefault();
        this.model.edit();
    }
});

var UserEditView = Marionette.ItemView.extend({
    template: "#user-edit-template",
    events: {
        "click #btnSaveUser": "saveUserDetail"
    },
    saveUserDetail: function () {
        var model = this.model;
        this.$el.find("input[name]").each(function () {
            model.set(this.name, this.value);
        });
        model.save(model.attributes, {
            success: function (model, res, opt) {
                alert("Saved");
            },
            error: function (model, res, opt) {
                console.log();
                alert("Something went wrong - " + res.message);
            }
        });
    }
});

var UserItemView = Marionette.ItemView.extend({
    tagName: "tr",
    template: _.template("<td><a href='#'><%=email%></a></td>"),
    events: {
        "click a": "showUserDetail"
    },
    showUserDetail: function (ev) {
        ev.preventDefault();
        this.model.select();
    }
})

var UserListView = Marionette.CollectionView.extend({
    tagName: "table",
    className: "table table-stripped",
    itemView: UserItemView,
    onBeforeRender: function () {
        this.$el.append("<h1>User List</h1>")
    }
})

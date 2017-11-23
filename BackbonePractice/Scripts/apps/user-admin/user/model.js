var UserModel = Backbone.Model.extend({
    urlRoot: "/api/users",
    validate: function (atts, opts) {
        if (!(atts.email && atts.first)) {
            return "Need an email and a fist name";
        }
    },
    initialize: function () {
        this.on("invalid", function (m) {
            alert(m.validationError);
        })
    },
    select: function () {
        UserAdmin.trigger("user:selected", this);
    },
    edit: function () {
        UserAdmin.trigger("user:editing", this);
    }
})

var UsersCollection = Backbone.Collection.extend({
    url: "api/users",
    model: UserModel
});
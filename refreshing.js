(function () {
    var RefreshingModel = Backbone.Model.extend({
        text: new Date().toString()
    });

    var RefreshingView = Backbone.View.extend({
        tagName: 'p',
        initialize: function () {
            this.model.on('change', function () {
                this.render();
            }, this);
        },
        render: function () {
            this.$el.html(this.model.get('text'));
            return this;
        }
    });

    var refreshingModel = new RefreshingModel({
        text: new Date().toString()
    })
    var refreshingView = new RefreshingView({
        model: refreshingModel
    });

    $('div#canvas').append(refreshingView.render().el);

    setInterval(() => {
        refreshingModel.set({ text: new Date().toString() })
    }, 1000);

})();
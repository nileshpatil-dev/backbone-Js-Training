(function () {
    var rectangle = Backbone.Model.extend({});
    var rectangleView = Backbone.View.extend({
        tagName: 'div',
        className: 'rectangle',
        events: {
            'click': 'move'
        },
        render: function () {
            this.setDimension();
            this.setPosition();
            this.setColor();
            return this;
        },
        setDimension: function () {
            this.$el.css({
                width: this.model.get('width') + 'px',
                height: this.model.get('height') + 'px'
            });
        },
        setPosition: function () {
            var position = this.model.get('position');
            this.$el.css({
                left: position.x,
                top: position.y
            })
        },

        setColor: function () {
            this.$el.css({
                'background-color': this.model.get('color')
            });
        },
        move: function () {
            this.$el.css({
                left: this.$el.position().left + 10
            })
        }

    });

    var rectangles = [
        new rectangle({
            width: 200,
            height: 100,
            position: {
                x: 300,
                y: 250
            },
            color: 'red'
        }),
        new rectangle({
            width: 50,
            height: 300,
            position: {
                x: 200,
                y: 150
            },
            color: 'green'
        }), new rectangle({
            width: 420,
            height: 200,
            position: {
                x: 120,
                y: 450
            },
            color: 'yellow'
        })];

    _(rectangles).each(function (rectangle) {
        var myView = new rectangleView({
            model: rectangle
        });
        $('div#canvas').append(myView.render().el);
    })

})();
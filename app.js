var template = document.getElementById("user-detail-template").innerHTML;
var compiled = Handlebars.compile(template);
var arr = [1, 2, 3]

var locations = [{
    id: 1,
    name: 'loc 1'
}, {
    id: 2,
    name: 'loc 2'
}, {
    id: 3,
    name: 'loc 3'
}]


var partialView = "<h2> I am Partial view </h2>";
Handlebars.registerPartial("partialView", partialView);

function upperCaseHelper(arg1) {
    return arg1.toUpperCase();
}


Handlebars.registerHelper("upperCaseHelper", upperCaseHelper);

var rendered = compiled({ name: 'nilesh', arr: arr, locations: locations, showLoc: true });

document.getElementById('app').innerHTML = rendered;
app.config(['$routeProvider', function ($routeProvider) {
$routeProvider
// Home
.when("/", {templateUrl: "app/components/home/home.html", controller: "homeCtrl"})
.when("/me", {templateUrl: "app/components/home/home.html", controller: "homeCtrl"})
.when("/", {templateUrl: "app/components/home/home.html", controller: "homeCtrl"})
.otherwise("/404", {templateUrl: "components/partials/404.html"});
}]);
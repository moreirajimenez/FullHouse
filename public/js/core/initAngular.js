var app = angular.module('voucherGenerator', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'js/core/partials/voucher.html'
        })
                .otherwise({
                    redirectTo: '/'
                });
}]);


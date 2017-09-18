/**
 * Created by brance on 2016/6/7.
 */

'use strict';

var profileApp = angular.module('Profile_Web',[
    'ngRoute',
]);
profileApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}]);

$(document).ready(function(){

    $("#toPageMap").attr("href","index.html?data=pageMap");
});
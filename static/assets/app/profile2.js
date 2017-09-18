/**
 * Created by brance on 2016/9/22.
 */

'use strict';

var profile2App = angular.module('Profile2_Web',[
    'ngResource',
    'ngRoute',
    'profile2Services',
    'ui.bootstrap',
    'ConstantModule'
]);



profile2App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}]);
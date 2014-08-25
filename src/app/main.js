var angular = require('angular-bsfy');

angular.module('app', [])
    .factory('greeterService', require('lib').greeterService)
    .run(function ($rootScope, greeterService) {
        $rootScope.message = greeterService.greet('Bundle POC');
    });

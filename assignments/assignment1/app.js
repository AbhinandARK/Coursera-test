(function () {
    'use strict';

    angular.module('DIApp', [])
        .controller('DIController', DIController);

    DIController.$inject = ['$scope', '$filter'];
    function DIController($scope, $filter) {
        $scope.name = "Abhinand K";
        $scope.imageBeing = "abhi"

        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }
        $scope.satMessage = function () {
            return "I am Going to sleep"
        }

        $scope.feedButton = function () {
            $scope.imageBeing = "abhik"
        }

    }
})();
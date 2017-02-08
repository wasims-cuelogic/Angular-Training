'use strict';

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $timeout) {

        var promise = $timeout(function () {
            $scope.timeName = "Time out message"
        }, 3000);

        $scope.cancel = function () {
            $timeout.cancel(promise);
        }

        $scope.appendDivToElement = function (markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }
    }
);
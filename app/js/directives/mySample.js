'use strict';

eventsApp.directive('mySample', function ($compile) {
    return {
        restrict: 'E',
        template: "<input type='' name='' value='' ng-model='sampleData' /> {{sampleData}} <br>",
        // link: function (scope, element, attrs, controller) {
        //     console.log("Innn")
        //     var markup = "<input type='' name='' value='' ng-model='sampleData'> {{sampleData}} <br>";
        //     angular.element(element).html($compile(markup)(scope));
        // }
    }
});

'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $log, $anchorScroll, $routeParams, $route) {
    $scope.snippet = '<span style="color:red">Hey there</span>';
    $scope.disabled = false;

    $scope.event = $route.current.locals.event; 
    //eventData.getEvent($routeParams.eventId);
    
    // .$promise
    // .then(function (event) { $scope.event = event; console.log(event); })
    // .catch(function (response) { console.log(response) }
    // );

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    }
    $scope.downVoteSession = function (session) {
        if (session.upVoteCount == 0)
            return;
        session.upVoteCount--;
    }
    $scope.scrollToSession = function () {
        $anchorScroll();
    }
})
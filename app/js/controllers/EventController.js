'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData) {
    $scope.snippet = '<span style="color:red">Hey there</span>';
    $scope.disabled = false;
    $scope.event = eventData.event;

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    }
    $scope.downVoteSession = function (session) {
        if (session.upVoteCount == 0)
            return;
        session.upVoteCount--;
    }
})
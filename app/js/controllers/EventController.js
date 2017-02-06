'use strict';

eventsApp.controller('EventController', function EventController($scope) {
    $scope.snippet = '<span style="color:red">Hey there</span>';
    $scope.disabled = false;
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '10:30 am',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA'
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
            {
                name: 'Directives Masterclass',
                creatorName: 'Bob Smith',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'In this session u will learn ins and outs of directives',
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun',
                creatorName: 'John Doe',
                duration: '30 mins',
                level: 'Introductory',
                abstract: 'In this session you will have a closer look at Angular scopes',
                upVoteCount: 0
            }
        ]
    }

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    }
    $scope.downVoteSession = function (session) {
        if (session.upVoteCount == 0)
            return;
        session.upVoteCount--;
    }
})
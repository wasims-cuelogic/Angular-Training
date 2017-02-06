eventsApp.factory('eventData', function () {
    return {
        event: {
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
                    duration: 2,
                    level: 'Advanced',
                    abstract: 'In this session u will learn ins and outs of directives',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun',
                    creatorName: 'John Doe',
                    duration: 4,
                    level: 'Introductory',
                    abstract: 'In this session you will have a closer look at Angular scopes',
                    upVoteCount: 0
                }
            ]
        }

    }
})
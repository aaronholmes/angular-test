'use strict'

eventsApp.controller('EventController', 
		function EventsController($scope){
			$scope.event = {
				name: "Aaron's Great Event",
				date: "1/31/2014",
				time: "1:00 am",
				location: {
					address: "11 Bell Ave.",
					city: "Ottawa",
					province: "Ontario"
				},
				imageUrl: "http://devpnt.com/wp-content/uploads/2013/08/angularjs-logo.png.pagespeed.ce_.2SfPGmgT_b.png",
				sessions: [
					{
						name: "Welcoming Speech",
						creatorName: "Aaron Holmes",
						duration: "2 hours",
						abstract:	"I will be giving a great welcoming speech.",
						upVoteCount: 0
					},
					{
						name: "Dinner",
						creatorName: "Ashy",
						duration:	"5 Minutes",
						abstract: "We will be dining on poo and kibbles. We will eat as fast as we can and then beg for more!",
						upVoteCount: 0
					},
					{	
						name: "Dancing",
						creatorName: "Jaxon",
						duration: "3 hours",
						abstract: "There is something wrong with me.",
						upVoteCount: 0
					}
				]
			}
			
		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		}	

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		}

		}
);

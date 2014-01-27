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
				imageUrl: "http://devpnt.com/wp-content/uploads/2013/08/angularjs-logo.png.pagespeed.ce_.2SfPGmgT_b.png"
			}	
		}
);

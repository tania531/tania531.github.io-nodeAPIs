'use strict';

angular.module('maps', [])
.controller('MapCtrl', function($scope){
	// $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
	var map;
	var infowindow;

	function initialize(pos) {
	  // var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

	  map = new google.maps.Map(document.getElementById('map-canvas'), {
	    center: pos,
	    zoom: 15
	  });

	  var request = {
	    location: pos,
	    radius: 50000,
	    types: ['park']
	  };
	  infowindow = new google.maps.InfoWindow();
	  var service = new google.maps.places.PlacesService(map);
	  service.nearbySearch(request, callback);
	  console.log('request', request);
	}

	function callback(results, status) {
	  if (status == google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      createMarker(results[i]);
	    }
	  }
	  console.log(results);
	}

	function createMarker(place) {
	  var placeLoc = place.geometry.location;
	  var marker = new google.maps.Marker({
	    map: map,
	    position: place.geometry.location
	  });

	  google.maps.event.addListener(marker, 'click', function() {
	    infowindow.setContent(place.name);
	    infowindow.open(map, this);
	  });
	}
	
     
	  if(navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	      var pos = new google.maps.LatLng(position.coords.latitude,
	                                       position.coords.longitude);

	
		initialize(pos);

		});
	}
});


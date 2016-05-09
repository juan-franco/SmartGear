var map_loc; //Map for location functionality
var map_mon; //Map for monitoring functionality
var youPos;
var oldYouPos;
var infowindow_loc;
var infowindow_mon;
var carPos;
var car_loc;
var car_mon;
var stepsArray = [];
var distance;
var locDirectionsDisplay;
var monDirectionsDisplay;
var directionsService = new google.maps.DirectionsService();
var bounds_loc = new google.maps.LatLngBounds();
var bounds_mon = new google.maps.LatLngBounds();

function refresh(map){	// Refresh map to adapt to screen resolution  	
	console.info('Refreshing map '+map);	
	google.maps.event.trigger(map, 'resize');	
	map_loc.fitBounds(bounds_loc);	
	map_mon.fitBounds(bounds_mon);	
};

function setCarPos(lat,lng){	// Draw a marker to view car position on maps
	carPos = new google.maps.LatLng(lat,lng);
	console.info('Setting car in map '+map_loc+' at '+lat+'/'+lng);
	if (car_loc == null) {
		car_loc = new google.maps.Marker({
			position: carPos,
			map: map_loc,
			animation: google.maps.Animation.DROP,
			title: 'CAR'
		});
		console.debug('Creating new marker for car in location map');
		bounds_loc.extend(carPos);
		map_loc.fitBounds(bounds_loc);
	} else {
		car_loc.setPosition(carPos);
	}
	console.info('Setting car in map '+map_mon+' at '+lat+'/'+lng);
	if (car_mon == null) {
		car_mon = new google.maps.Marker({
			position: carPos,
			map: map_mon,
			animation: google.maps.Animation.DROP,
			title: 'CAR'
		});
		console.debug('Creating new marker for car in monitoring map');
		bounds_mon.extend(carPos);
		map_mon.fitBounds(bounds_mon);
	} else {
		car_mon.setPosition(carPos);
	};	
};

function setStepPos(lat,lng,id){	// Draw a step monitoring point marker 
	stepPos = new google.maps.LatLng(lat,lng);
	console.info('Setting step in map '+map_mon+' at '+lat+'/'+lng);
	step = new google.maps.Marker({
		position: stepPos,
		icon:'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+id+'|FF0000|000000',                 
		map: map_mon,
		title: 'STEP'
	});
	bounds_mon.extend(stepPos);
	map_mon.fitBounds(bounds_mon);
	stepsArray.push(step);
};

function initialize() {	// Initialize maps
	var mapOptions = {zoom: 10};
	map_loc = new google.maps.Map(document.getElementById('map-canvas-loc'),mapOptions);
	locDirectionsDisplay = new google.maps.DirectionsRenderer();
	locDirectionsDisplay.setMap(map_loc);
	map_mon = new google.maps.Map(document.getElementById('map-canvas-mon'),mapOptions);
	monDirectionsDisplay = new google.maps.DirectionsRenderer();
	monDirectionsDisplay.setMap(map_mon);
	console.info('Maps initialized');
	// Try HTML5 geolocation
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			youPos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
			console.info('Setting your position in maps at '+youPos);	
			map_loc.setCenter(youPos);
			map_mon.setCenter(youPos);			
		}, function() {
			handleNoGeolocation(true);
		});
	} else {
		// Browser doesn't support Geolocation
		handleNoGeolocation(false);
	};
	distanceTimer = setInterval(function(){ updateDistance()},5000);	 	
};

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }
  var options = {
    map: map_loc,
    position: new google.maps.LatLng(43,-8),
    content: content,
	icon:'smartphone/images/10_Location/you.png'
  };
  infowindow_loc = new google.maps.Marker(options);
  var options = {
    map: map_mon,
    position: new google.maps.LatLng(43,-8),
    content: content,
	icon:'smartphone/images/10_Location/you.png'
  };
  infowindow_mon = new google.maps.Marker(options);
  console.info('Setting your position in maps at '+options.position);	  
  map_loc.setCenter(options.position);
  map_mon.setCenter(options.position);
};

function clearMap(map) {	// Clear steps markers on monitoring map
	console.info('Clearing map '+map_mon);
	clearStepPos();
	//TODO: Clear bounds
};

function clearStepPos() {
	for (var i = 0; i < stepsArray.length; i++) {
		stepsArray[i].setMap(null);
	};
	stepsArray=[];
	google.maps.event.trigger(map_mon, 'resize');
	map_mon.setCenter(youPos);
	console.debug('Steps cleared on map and centering at '+youPos);
};

function distanceToCar(){	// Refresh your position and recalculate distance to your car
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			drawYouPos(position);
			console.info('Updating your position in maps at '+youPos);	  
		}, function() {
			handleNoGeolocation(true);
		});
	};
	return calculateDistance(youPos,carPos);
};

function drawYouPos(position) {	// Draw your position on map
	oldYouPos = youPos;
	youPos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);	
	if (oldYouPos != youPos) {
		if (infowindow_loc == null) {		
			infowindow_loc = new google.maps.Marker({map: map_loc,position: youPos,content: 'YOU',icon:'smartphone/images/10_Location/you.png'});
		} else {
			infowindow_loc.setPosition(youPos);
		};
		if (infowindow_mon == null) {
			infowindow_mon = new google.maps.Marker({map: map_mon,position: youPos,content: 'YOU',icon:'smartphone/images/10_Location/you.png'});
		} else {
			infowindow_mon.setPosition(youPos);
		};		
		bounds_loc.extend(youPos);
		map_loc.fitBounds(bounds_loc);	
		bounds_mon.extend(youPos);
		map_mon.fitBounds(bounds_mon);	
	};
};

function calcMonRoute() {	// Calculate estimated driving route between steps of tracking car mode
//TODO: THROUGH INTERMEDIATE POINTS
  var request = {
      origin:youPos,
      destination:carPos,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      monDirectionsDisplay.setDirections(response);
    };
  });
};

function calcLocRoute() {	// Calculate walking route between you and your car
  if (youPos!=null & carPos!=null) {
	var request = {
		origin:youPos,
		destination:carPos,
		travelMode: google.maps.TravelMode.WALKING
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			locDirectionsDisplay.setDirections(response);
		}
	});
	};
};

function calculateDistance(origin,destination) {	// Calculate distance between to points
	console.info('Calculating distance from '+origin+' to '+destination);
	if (origin!=null & destination!=null) {
		distance = google.maps.geometry.spherical.computeDistanceBetween(origin, destination);
		distance = Math.round(distance);
	} else {
		distance = "unavailable";
	};
	return distance;
};

google.maps.event.addDomListener(window, 'load', initialize);
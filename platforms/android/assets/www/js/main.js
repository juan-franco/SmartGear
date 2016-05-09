// Reference to the car simulator
var ceasimulator = cordova.require('cordova/plugin/ceasimulator');

// ------------------------------------------------------------------------------
// Getting signal functions -----------------------------------------------------
// ------------------------------------------------------------------------------
function getSimulatorValue(signal) {	// Get one signal value
	if (signal == null) { signal = $(".get").attr("id"); }
    console.info('Getting signal(s) '+signal);
	var attributeIDList = [];	
    attributeIDList.push(signal);
	var car = new Car(ceasimulator);
    car.getValue(attributeIDList, getResultMethod, errorFunction);	
};

function getGPSValue(signal) {	// Get GPS signal value
	if (signal == null) { signal = $(".get").attr("id"); }
    console.info('Getting GPS signal(s) '+signal);
	var attributeIDList = [];	
    attributeIDList.push(signal);
	var car = new Car(ceasimulator);	
    car.getValue(attributeIDList, getGPSResultMethod, errorFunction);	
};

// Getting Callbacks
function getResultMethod(data) {	// getSimulatorValue callback
    var result = JSON.stringify(data).split('"');	
	console.info('GET OK: '+result);	
	if(result != null) {
		var signal = result[1];				
		var value = result[3];				
		if (result[4] != "}]") {
			value += ","+result[4];
		};
		console.info('VALUE: '+value);
		element = document.getElementById(signal);
		(element.tagName == 'INPUT') ? element.value = value : element.innerHTML = value;		
	};
};

function getGPSResultMethod(data) {	// getGPSValue callback
    var result = JSON.stringify(data).split('"');		
	console.info('GET GPS OK: '+result);	
	if(result != null) {
		var signal = result[1];				
		result = result[3].split(',');	// GPS signal has two values
		var lat = result[0];
		var lng = result[1];
		element = document.getElementById(signal);
		element.value = lat+','+lng;	
		console.info('VALUE: '+lat+'/'+lng);
		setCarPos(lat,lng);	// Place a marker on map		
	};		
};

// Emulating signals for debugging
function emulateSimulatorValue(signal,type,limit1,limit2) {	// For debugging in browser
	if (signal == null) { signal = $(".get").attr("id"); }
    console.info('Simulating signal(s) '+signal+" Type: "+type+" Limit1: "+limit1+" Limit2: "+limit2);
	var value = 0;
	if (type == "boolean") {	// Emulate a boolean
		value = Math.random();
		(value > 0.5) ? value = 1 : value = 0;
	} else {	// Emulate a enum or a range (depends on the limits)
		value = Math.floor((Math.random() * limit2) + limit1);
	};	
	element = document.getElementById(signal);
	element.innerHTML = value;
	console.info('VALUE: '+value);
};

function emulateGPSValue(signal) {	// For debugging in browser
	if (signal == null) { signal = $(".get").attr("id"); }
    console.info('Simulating GPS signal(s) '+signal);
	var lat=42.1609172+(Math.random()/10);
	var lng=-8.692558700000063+(Math.random()/10);		
	element = document.getElementById(signal);
	element.value = lat+','+lng;
	setCarPos(lat,lng);		
	console.info('VALUE: '+lat+'/'+lng);
};

// ------------------------------------------------------------------------------
// Setting signal functions -----------------------------------------------------
// ------------------------------------------------------------------------------
function setSimulatorValue(signal,value) {	// Setting signal with value
	if (signal == null) { signal=$(".set").attr("id"); }
    if (value == null) { value=$(".set").val(); }
	console.info('Settings signal(s) '+signal+' value to '+value);
    var attributeIDList = [];
    attributeIDList.push(signal);	
	var car = new Car(ceasimulator);	
    car.setValue(attributeIDList, value, setResultMethod, errorFunction);
};

// Setting Callbacks
function setResultMethod(data) {    
    console.info('SET OK');	
};

// ------------------------------------------------------------------------------
// Toggle boolean signal functions ----------------------------------------------
// ------------------------------------------------------------------------------
function toggleSimulatorValue(signal) {	// Get signal value and change to the other value 
	if (signal == null) { signal = $(".toggle").attr("id"); }
	console.info('Getting signal(s) '+signal);
	var attributeIDList = [];	
    attributeIDList.push(signal);
	var car = new Car(ceasimulator);
    car.getValue(attributeIDList, toggleGetResultMethod, errorFunction);		
};

// Toggling Callbacks
function toggleGetResultMethod(data) {
    result=JSON.stringify(data).split('"');	
	console.info('GET OK: '+result);	
	if(result != null) {
		var signal = result[1];				
		var value = parseInt(result[3]);
		value == 0 ? value = 1 : value = 0;	// Toggle value
		var attributeIDList = [];
		attributeIDList.push(signal);	
		var car = new Car(ceasimulator);	
		car.setValue(signal, value, toggleSetResultMethod, errorFunction);	// Set new value
	};
};

function toggleSetResultMethod(data) {	
    console.info('TOGGLE OK');	
};

// ------------------------------------------------------------------------------
// Subscribe signal functions ---------------------------------------------------
// ------------------------------------------------------------------------------
function subscribeSignals(signals) {	// Subscribe to one or more signals
	console.info('Subscribing signals '+signals);
	var car = new Car(ceasimulator);
	car.subscribeArray(signals,subscribeResult,subscribeError);
};

function unSubscribeSignals(signals) {	// Unsubscribe to one or more signals
	console.info('Unsubscribing signals '+signals);
	var car = new Car(ceasimulator);
	car.unsubscribeArray(signals,unSubscribeResult,unSubscribeError);
};

// Subscribing Callbacks
function subscribeResult(data) {
    var result = JSON.stringify(data).split('"');	
	console.debug('Subscribed signals update: '+result);	
	var signal;
	var value;		
	if (data != "") {
		for (var i in result) {	// Process signals and values
			token = result[i];		
			if (token == "[{" | token == "}]" | token == ":" | token == "},{") {	// Separators
			} else {		
				if (token.substr(0,3) == "CEA") {	// Signal
					signal = token;				
				} else {	// Value
					value = token;				
					var oldValue;
					signal = signal.split(".").join("\\.");
					oldValue = $("#"+signal).val();
					console.debug('SIGNAL: '+signal+' VALUE: '+value+' OLD: '+oldValue);
					if (oldValue != value) {	// Value has changed						
						$("#"+signal).val(value);						
						$("#"+signal).trigger("onchange"); 						
					}; 
				};
			};
		};	
	};
};

function subscribeError(data) {
	console.error("Error subscribing: "+JSON.stringify(data));
	alert("Error subscribing signal(s): "+data+"\nPlease retry...");
};

// Unsubscribing Callbacks
function unSubscribeResult(data) {
    console.info('Unsubscribed signals OK: '+JSON.stringify(data));		
};

function unSubscribeError(data) {	
	console.error("Error unsubscribing: "+JSON.stringify(data));
	alert("Error unsubscribing signal(s): "+data+"\nPlease retry...");
};

// NOTIFICATION FUNCTIONS
function notify(title,message) {
	window.plugin.notification.local.add({ 
		title: title,
		message: message,
		led: 'FFFFFF',
	});
};

// ------------------------------------------------------------------------------
// Common functions -------------------------------------------------------------
// ------------------------------------------------------------------------------
function errorFunction(data) {	// Process error value getting signal
    var currentdate = new Date();
    console.debug("Error getting signal: "+data);  
	alert("Error getting signal: "+data+"\nPlease retry...");
};

// ------------------------------------------------------------------------------
// Common functions -------------------------------------------------------------
// ------------------------------------------------------------------------------
function blink() {	// Turn on and off emergency lights
	setSimulatorValue('CEA.VehicleData.Driving.LampsTurnIndicatorLeftActivated', "1");
	setSimulatorValue('CEA.VehicleData.Driving.LampsTurnIndicatorRightActivated', "1");
	$("#blink").val("Blinking");
	setTimeout(function() {
		setSimulatorValue('CEA.VehicleData.Driving.LampsTurnIndicatorLeftActivated', "0");
		setSimulatorValue('CEA.VehicleData.Driving.LampsTurnIndicatorRightActivated', "0");
		$("#blink").val("Blink");
	}, 5000);
};

function updateDistance() {	// Update your distance to your car	
	distance = distanceToCar();	
	if (distance != null & distance != "unavailable") {
		$(".distance").html(distance);
		$("#location_summary").val(distance+"m");	
	};
};
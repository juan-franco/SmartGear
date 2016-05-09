// ------------------------------------------------------------------------------
// Variables definition
// ------------------------------------------------------------------------------
var storage = window.localStorage;
var tracking;
var parking;
var steps;
var miles;
var FL,FR,RL,RR,FM,RM;	// Initial value far
var FRDO,FLDO,RRDO,RLDO,TO,HO;	// Initial value closed
var distanceTimer;

// ------------------------------------------------------------------------------
// Functions for Monitoring section ---------------------------------------------
// ------------------------------------------------------------------------------
function checkTracking() {	// Checking the current status of the tracking
    tracking = storage.getItem("isTracking");
    if (tracking == "true") {
        continueTracking();
    }
    if (tracking == "false") {
        stopTracking();
    }
    if (tracking == null) {
        stopTracking();
    }
};

function startTracking() {	// Start car tracking session
    console.debug("Start tracking");
	$("#monitoring_summary").val("Tracking");
    clearTracking();	// Erasing previous session steps recorded
    tracking = "true";
    storage.setItem("isTracking", "true");       
    setTimeout("getInfo()", 5000);	// Each 5 seconds a step is recorded
	$("#startTracking").hide();
    $("#stopTracking").show();    
	$("#clearTracking").show();	    
};

function continueTracking() {	// Continue an interrupted tracking
    console.debug("Continue tracking");
	$("#monitoring_summary").val("Tracking");    
    steps = storage.getItem("trackingSteps");
    if (steps!= null & steps>=0) {	// Check if there are previously recorded steps
		getStepsInfo(steps);	
	};
    setTimeout("getInfo()", 5000);	// Each 5 seconds a step is recorded
	$("#startTracking").hide();
    $("#stopTracking").show();    
	$("#clearTracking").show();	 
};

function stopTracking() {	// Finishing car tracking session 
    console.debug("Stop tracking");
	$("#monitoring_summary").val("Not tracking");
    tracking = "false";
    storage.setItem("isTracking", "false");
	steps = storage.getItem("trackingSteps");  
	if (steps!= null & steps>=0) { 	// Check if there are previously recorded step		
		getStepsInfo(steps); 
		$("#clearTracking").show();	
	} else {
		$("#clearTracking").hide();	
	};
	$("#startTracking").show();
	$("#stopTracking").hide();    	 	
};

function getCurrentInfo() {	// Getting currrent data from car
    console.debug("Getting current info");
	var now = new Date();
	now = now.getDate()+"/"+parseInt(now.getMonth()+1)+" "+now.toLocaleTimeString();
	$("#date").html(now);
    getSimulatorValue('CEA.VehicleData.Maintenance.Mileage');
    getSimulatorValue('CEA.VehicleData.Speed.InstantSpeed');
    getSimulatorValue('CEA.VehicleData.Engine.FuelLevel');
	getGPSValue('CEA.VehicleData.Navigation.GPS.Current');
    //emulateSimulatorValue('CEA.VehicleData.Maintenance.Mileage');
	//emulateSimulatorValue('CEA.VehicleData.Speed.InstantSpeed');
	//emulateSimulatorValue('CEA.VehicleData.Engine.FuelLevel');
	//emulateGPSValue('CEA.VehicleData.Navigation.GPS.Current');
};

function getInfo() {	// Getting data for a new step
    if (steps < 10) {
		if (tracking == "true") {	
			getCurrentInfo();
			setStepInfo();
			storage.setItem("trackingSteps", steps);
			steps++;
			setTimeout("getInfo()", 5000);
		}
    } else {
		stopTracking();
	};
};

function setStepInfo() {	// Storing data for a new step
	var date = new Date();
	date = date.getDate()+"/"+parseInt(date.getMonth()+1)+" "+date.toLocaleTimeString();
	$("#date"+steps).html(date);
	var miles = document.getElementById("CEA.VehicleData.Maintenance.Mileage").innerHTML;
    $("#miles"+steps).html(miles);
    var speed = document.getElementById("CEA.VehicleData.Speed.InstantSpeed").innerHTML;
    $("#speed").html(miles);
    var fuel = document.getElementById("CEA.VehicleData.Engine.FuelLevel").innerHTML;
    $("#fuel"+steps).html(fuel);
    var location = document.getElementById("CEA.VehicleData.Navigation.GPS.Current").value;
    $("#location"+steps).html(location);	
    var step = date+","+miles+","+speed+","+fuel+","+location;
    storage.setItem("tracking" + steps, step);
    console.debug("Setting " + steps + " info " + step);
    getStepInfo(steps);
};

function getStepsInfo(steps) {	// Recovering data from stored steps
    var i;
    console.debug("Getting " + steps + " steps");
    $("#trip_list_mon").html("");
	$("#trip_list_mon").append("<div class='table' id='trip_table'></div>");
    for (i = 0; i <= steps; i++) {
		getStepInfo(i);
    };	
};

function getStepInfo(i) {	// Recovering data from a step
	var step = storage.getItem("tracking" + i);	
	if (step != null) {
		step=step.split(",");
		if (i==0) { miles=step[1] };
		console.debug("Getting " + i + " info: " + step);
		$("#trip_table").append("<div class='table'><li><a href='#'>"+	// Creating HTML table with the step
		"<div class='row'>"+
		"<div class='cell' id='units'>" + i + ":</div>"+
		"<div class='cell' style='font-size:x-small;'><label class='fuel' id='date" + i + "'>" + step[0] + "</label></div><div class='cell' id='units'>h&nbsp;</div>"+
		"<div class='cell'><label class='fuel' id='miles" + i + "'>" + (Math.round(step[1]-miles)) + "</label></div><div class='cell' id='units'>km&nbsp;</div>"+
		"<div class='cell'><label class='fuel' id='speed" + i + "'>" + step[2] + "</label></div><div class='cell' id='units'>km/h&nbsp;</div>"+
		"<div class='cell'><label class='fuel' id='fuel" + i + "'>" + step[3] + "</label></div><div class='cell' id='units'>"+
		"<label class='fuel'>%<i><img style='vertical-align: middle;' src='smartphone/images/icons/fuel_icon.png' style='vertical-align: bottom;' alt='Fuel'></i></label></div>"+
		"<div style='display:none' id='location" + i + "'>" + step[4] + "," + step[5] + "</div>"+
		"</div></a></li></div>");
		setStepPos(step[4],step[5],i);	
	} else {
		console.error("Step " + i + " not found");
	};
};

function clearTracking() {	// Delete stored steps
    $("#trip_list_mon").html("");
	$("#trip_list_mon").append("<div class='table' id='trip_table'></div>");
    clearMap(map_mon);
	refresh(map_mon);
    var i;
    for (i = 0; i <= steps; i++) {
        storage.removeItem("tracking" + i);
    };
    steps = 0;
    storage.setItem("trackingSteps", steps);	
	$("#clearTracking").hide();
};

// ------------------------------------------------------------------------------
// Functions for Anti-theft section----------------------------------------------
// ------------------------------------------------------------------------------
function checkAntitheft() {	// Checking the current status of the anti-theft
	antitheft = storage.getItem("isAntiTheft");	
	if (antitheft == "true") {
        continueAntiTheft();
    }
    if (antitheft == "false") {
        stopAntiTheft();
    }
    if (antitheft == null) {
        stopAntiTheft();
    }
}

function startAntiTheft() {	// Start car anti-theft session
	console.debug("Start anti-theft");
	$("#antiTheft_summary").val("Guarding");
	$("#antiTheft_summary").css("background-color","#61428d");					
    antitheft = "true";
    storage.setItem("isAntiTheft", "true");
    subscribeAntitheft(true);		
    $("#startAntiTheft").hide();
    $("#stopAntiTheft").show();    
};

function continueAntiTheft() {	// Start car anti-theft session
	console.debug("Continue anti-theft");
	$("#antiTheft_summary").val("Guarding");
	$("#antiTheft_summary").css("background-color","#61428d");					    
    antitheft = "true"; 
	subscribeAntitheft(true);			
    $("#startAntiTheft").hide();
    $("#stopAntiTheft").show();    
};

function stopAntiTheft() {	//	Finishing car anti-theft session
	console.debug("Stop anti-theft");
	$("#antiTheft_summary").val("Not Guarding"); 
	$("#antiTheft_summary").css("background-color","#61428d");					
    antitheft = "false";
    storage.setItem("isAntiTheft", "false");
    subscribeAntitheft(false);
	$("#FRDO,#FLDO,#HO,#RRDO,#RLDO,#TO,#ES").css("background-color","white");
    $("#FRDO,#FLDO,#HO,#RRDO,#RLDO,#TO,#ES").val(0);
	$("#FRDO,#FLDO,#HO,#RRDO,#RLDO,#TO,#ES").children().val("");
    $("#stopAntiTheft").hide();
    $("#startAntiTheft").show();    
};

function subscribeAntitheft(subscribe) {	// Subcribing/unsubscribing related car signals
	var signals=[];
	signals.push('CEA.VehicleData.Bodywork.FrontRightDoorOpen');
	signals.push('CEA.VehicleData.Bodywork.RearRightDoorOpen');
	signals.push('CEA.VehicleData.Bodywork.TrunkOpen');
	signals.push('CEA.VehicleData.Bodywork.HoodOpen');
	signals.push('CEA.VehicleData.Bodywork.FrontLeftDoorOpen');
	signals.push('CEA.VehicleData.Bodywork.RearLeftDoorOpen');
	signals.push('CEA.VehicleData.Engine.EngineStatus');
	subscribe ? subscribeSignals(signals) : unSubscribeSignals(signals);
};

// ------------------------------------------------------------------------------
// Functions for Location section -----------------------------------------------
// ------------------------------------------------------------------------------
function checkLocation() {	// Checking the current status of the location
	if (distance!=null & distance!="unavailable") {
		$("#location_summary").val(distance+"m");
	};
};

// ------------------------------------------------------------------------------
// Functions for Parking section ------------------------------------------------
// ------------------------------------------------------------------------------
function checkParking() {	// Checking the current status of the location
    parking = storage.getItem("isParking");
    if (parking == "true") {
        continueParking();
    }
    if (parking == "false") {
        stopParking();
    }
    if (parking == null) {
        stopParking();
    }
};

function startParking() {	// Start car parking session
	console.debug("Start parking");
	$("#parking_summary").val("Parking");
	$("#parking_summary").css("background-color","#61428d");				
    parking = "true";
    storage.setItem("isParking", "true");
    subscribeParking(true);
    $("#startParking").hide();
    $("#stopParking").show();    
};

function continueParking() {	// Continue car parking session
	console.debug("Continue parking");
	$("#parking_summary").val("Parking"); 
	$("#parking_summary").css("background-color","#61428d");					
    parking = "true";
	subscribeParking(true);
    $("#startParking").hide();
    $("#stopParking").show();    
};

function stopParking() {	// Finishing car parking session
	console.debug("Stop parking");
	$("#parking_summary").val("Not Parking"); 
	$("#parking_summary").css("background-color","#61428d");					
    parking = "false";
    storage.setItem("isParking", "false");
    subscribeParking(false);
	$("#FR,#FM,#FL,#RR,#RM,#RL,#LPO").css("background-color","white");
	$("#FR,#FM,#FL,#RR,#RM,#RL,#LPO").val("");
	$("#FR,#FM,#FL,#RR,#RM,#RL,#LPO").children().val("")
    $("#stopParking").hide();
    $("#startParking").show();    
};

function subscribeParking(subscribe) {	
	var signals=[];
	signals.push('CEA.VehicleData.ADAS.ParkingSensorsFrontRightDistance');
	signals.push('CEA.VehicleData.ADAS.ParkingSensorsFrontMiddleDistance');
	signals.push('CEA.VehicleData.ADAS.ParkingSensorsFrontLeftDistance');
	signals.push('CEA.VehicleData.ADAS.ParkingSensorsRearRightDistance');
	signals.push('CEA.VehicleData.ADAS.ParkingSensorsRearMiddleDistance');
	signals.push('CEA.VehicleData.ADAS.ParkingSensorsRearLeftDistance');
	signals.push('CEA.VehicleData.Driving.LampsPositionOn');
	subscribe ? subscribeSignals(signals) : unSubscribeSignals(signals);
};

// ------------------------------------------------------------------------------
// Common functions -------------------------------------------------------------
// ------------------------------------------------------------------------------
function updateColor(block) {	// Update color of parking blocks as signal changes
	var value=$("#"+block).children().val();
	var oldValue = eval(block);
	var color;
	switch (value) {
	case "0":
	case "1":
		color = "red";
		break;
	case "2":
	case "3":
		color = "orange";		
		break
	case "4":
	case "5":
		color = "yellow";
		break;
	case "6":
	case "7":
		color = "green";
		break;
	default:
		color = "white";
	};
	if (oldValue > value & color=="red") {	// Object getting to close to car
		blink();
		var bumper=(block.substr(0,1)=='F') ? "front" : "rear";
		bumper+=(block.substr(1,1)=='R') ? " right" : (block.substr(1,1)=='L') ? " left" : " middle";
		notify("Parking Alert","Another car is too close to "+bumper+" bumper");
		console.debug("Flashing light due to "+oldValue+" to "+value+" at "+block);
		$("#parking_summary").val("Alert");
		$("#parking_summary").css("background-color","red");
	}
	console.debug("Changing color of "+block+" to "+color+" due to "+oldValue+"->"+value);
	$("#"+block).css("background-color",color);	// Update block color with new value
	eval(block+"="+value);
	console.debug("New value: "+value+" asigned-> "+eval(block));
};

function updateBooleanColor(block,zero,one) {	// Update color of blocks for boolean signal change
	var value = $("#"+block).children().val();
	var oldValue = eval(block);
	var color;
	switch (value) {
	case "0":
		color = zero;
		break;
	case "1":
		color = one;
		break;
	default:
		color = "white";
	};	
	if (oldValue < value & color == one) {	// Signal changed to alert value
		updateDistance();
		if (block == "LPO") {			
			if (distance>100) {	// You leave lights turned on and your are far from your car
				notify("Parking Alert","Position lights are turned on");
				console.debug("Position lights are turned on");
				$("#parking_summary").val("Alert"); 
				$("#parking_summary").css("background-color","red");
			};
		} else {
			if (distance>100) {	// A door is opened and you are far from your car
				blink();
				var door = (block.substr(0,1) == 'F') ? "Front" : "Rear";
				door += (block.substr(1,1) == 'R') ? " right door" : " left door";
				if (block.substr(0,1) == 'T') { door="Trunk"; };
				if (block.substr(0,1) == 'H') { door="Hood"; };
				notify("Anti-theft Alert",door+" has been opened");
				console.debug("Flashing light due to "+oldValue+" to "+value+" at "+block);
				$("#antiTheft_summary").val("Alert");
				$("#antiTheft_summary").css("background-color","red");
			} else {
			};
		};
	};			
	console.debug("updateBooleanColor of "+block+" to "+color+" due to "+oldValue+"->"+value);
	$("#"+block).css("background-color",color);	// Update block color with new value
	eval(block+"="+value);
};

function updateEngineColor(block,zero,one) {	// Update color of engine block as signal changes
	var value=$("#"+block).children().val();
	var oldValue = eval(block);
	var color;
	switch (value) {
	case "0":
		color = zero;
		break;
	case "1":
	case "2":
	case "3":
		color = one;
		break;
	default:
		color = "white";
	};
	if (oldValue != value & color == one) {
		updateDistance();
		if (distance>100) {	// The engine is on and you are far from your car
			blink();
			notify("Anti-theft Alert","Engine has been turned on");						
			console.debug("Flashing light due to engine turned on");
			$("#antiTheft_summary").val("Alert");
			$("#antiTheft_summary").css("background-color","red");
		};
	};			
	console.debug("Changing color of "+block+" to "+color);
	$("#"+block).css("background-color",color);	// Update engine block color with new value
	eval(block) = value;
};

function unLoad(){
	console.info("Unloading Security");
	subscribeAntitheft(false);
	subscribeParking(false);
	clearInterval(distanceTimer);
}
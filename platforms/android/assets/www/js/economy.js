var storage = window.localStorage;
var players;

// Check the storage info
if(storage.getItem("e_init") == "true"){
}else{
	// Game values storage (VALUES OF EXAMPLE)
	storage.setItem("e_welcome", "true");
	storage.setItem("e_firstdate", "16/7 00:00:00");
	storage.setItem("e_isGaming", "false");
	storage.setItem("e_sp_total", "281");
	storage.setItem("e_sp_actual", "0");
	storage.setItem("e_nerrors_actual", "0");	// Actual Number for error comitted 
	storage.setItem("e_perrors_actual", "0");	// Actual Points of error comitted
	storage.setItem("e_mileage_total", "100");	// Total kilometers traveled
	storage.setItem("e_array_errors", "1,0,0,1,1,0,0,0,0,0,1,0,0,0,0");
	
	storage.setItem("e_ntips", "4");
	storage.setItem("e_array_tips", "1,0,0,1,1,0,0,0,0,0,1,0,0,0,0");
	storage.setItem("e_nbadges", "0");
	storage.setItem("e_sc_points", "32,6,4.4,34,8,20.5,61,10,100.6,154,14,301.6,");
	storage.setItem("e_sc_rows1", "30/5 10:50:24,5,2,1.1,30/5 12:00:01,11,1,1.2,29/5 10:42:24,6,2,1.1,29/5 12:15:03,10,1,1.2");
	storage.setItem("e_sc_rows2", "2/6 13:00:02,22,2,10.2,2/6 16:00:02,12,6,10.3");
	storage.setItem("e_sc_rows3", "8/6 14:00:03,33,3,50.3,8/6 16:02:12,28,7,50.3");
	storage.setItem("e_sc_rows4", "4/5 15:00:04,22,8,100.4,8/5 16:00:04,88,2,100.8,21/5 17:30:22,44,4,100.4");
	storage.setItem("e_lb_position", "1,3,3,5");
	players=[	{name:"Jennifer Lawrence",	points:32,	errors:6},
				{name:"Charles Babbage",points:10,	errors:2},
				{name:"Roger Bacon",	points:8,	errors:2},
				{name:"Hans Berger",	points:5,	errors:3},
				{name:"André Avant",	points:3,	errors:2}];
	storage.setItem("e_lb_rows1", JSON.stringify(players));
	players=[	{name:"Jennifer Lawrence",	points:34,	errors:8},
				{name:"Charles Babbage",points:50,	errors:4},
				{name:"Roger Bacon",	points:45,	errors:6},
				{name:"Hans Berger",	points:30,	errors:1},
				{name:"André Avant",	points:20,	errors:5}];
	storage.setItem("e_lb_rows2", JSON.stringify(players));
	players=[	{name:"Jennifer Lawrence",	points:61,	errors:10},
				{name:"Charles Babbage",points:30,	errors:5},
				{name:"Roger Bacon",	points:91,	errors:6},
				{name:"Hans Berger",	points:20,	errors:21},
				{name:"André Avant",	points:100,	errors:5}];
	storage.setItem("e_lb_rows3", JSON.stringify(players));
	players=[	{name:"Jennifer Lawrence",	points:154,	errors:14},
				{name:"Charles Babbage",points:160,	errors:10},
				{name:"Roger Bacon",	points:180,	errors:10},
				{name:"Hans Berger",	points:189,	errors:8},
				{name:"André Avant",	points:308,	errors:10}];
	storage.setItem("e_lb_rows4", JSON.stringify(players));
	storage.setItem("e_array_badges", "0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0");
	storage.setItem("e_times_r1","0");
	storage.setItem("e_times_r2","0");
	storage.setItem("e_times_r3","0");
	
	storage.setItem("e_init","true");
}

// Current Date
var now = new Date();
now = now.getDate()+"/"+parseInt(now.getMonth()+1)+" "+now.toLocaleTimeString();

// ************* ECONOMY VARIABLES *************
// -- SIGNALS variables for Ecocar Game
var gaming;
var currentTime;
var EngineStatus;
var FuelLowAlertOn;
var InstantSpeed;
var Revolutions;
var TIVTime;
var CurrentGear;
var RecommendedGearArrow;
var Night;
var WiperSpeed;
var MaintenanceExceed;
var DriverBeltFastened;
var ThrottlePedalLevel;
var HornActivated;
var SteeringWheelPosition, SteeringWheelRotationSpeed;
var LampsTurnIndicatorLeftActivated, LampsTurnIndicatorRightActivated;
var BreakPedal, BrakePedalPressure;
var LeftHandCrossing, RightHandCrossing;
var FrontLeftWindowPosition, FrontRightWindowPosition, RearLeftWindowPosition, RearRightWindowPosition;

var route, distancep, distance, distanceFinal = 0;
var mileage_total,mileage_actual;

// POINTS & ERRORS variables
var sp_total, sp_actual, sp_final;
var nerrors_actual;
var perrors_actual;

// Initialize
sp_total = storage.getItem("e_sp_total");

// ERROR POINTS - subtracted from total punctuation
var er_reserve 			= 1;	// Driving with low fuel (per Km)
var er_speed 			= 2;	// Excessive speed (per Km)
var er_windows 			= 2;	// Driving fast with the windows down (per Km)
var er_braking 			= 5;	// Abrupt braking
var er_tivtime 			= 5;	// TIVtime despised when the value is less than 3 seconds
var er_acceleration 	= 2;	// Abrupt acceleration
var er_lamps 			= 2;	// The intermittent lamps is not used
var er_rpm1 			= 2;	// Exceed 2,000 rev. cold (<2 min)
var er_rpm2 			= 2; 	// Excessive revolutions (>3.000 rpm)
var er_gear 			= 2;	// Incorrect current gear (<1.000 rpm and >2nd gear)
var er_maneuver 		= 10;	// Dangerous maneuver (with rain ...)
var er_abnormal 		= 10;	// Abnormal right-hand/left-hand crossing
var er_maintenance 		= 20;	// No maintenance
var er_belts 			= 30;	// Without Seat Belts
var er_horn 			= 2;	// Horn on

// ******************************************************
// -- Variables for Tips
var ntips;

// -- Variables for Leaderboard
var ld_now="bleaderboard0";
var divrow0;

// -- Variables for Score
var sc_now="bscore0";
var divrow;

// Variables for Achievements
var divWidth = "0%";
var divbadge;
var badg_achieved = "Achieved";
var badg_earned = 0;
var numBadEarned = 0;
var badg_opacity = [];
var total_badges;

// Arrays tips, scores, leaderboards, achievements
var array_errors = [];		array_errors = storage.getItem("e_array_errors").split(",");
var array_tips = [];		array_tips = storage.getItem("e_array_tips").split(",");
var array_positions = []; 	array_positions = storage.getItem("e_lb_position").split(",");
var array_lbps = [];		array_lbps = storage.getItem("e_lb_rows1");
var array_points = [];		array_points = storage.getItem("e_sc_points").split(",");
var array_rows = [];		array_rows = storage.getItem("e_sc_rows1").split(",");
var array_badges = [];		array_badges = storage.getItem("e_array_badges").split(",");

var button_back = "smartphone/images/icons/icons_menubar/back_icon.png";

//Advices text
var advices =	[	"Do not drive with the deposit on low fuel. Prevent the engine will spoil"											+"</br>"+"<span style='font-weight:bold;'>"+"(-1 sp/km)"+"</span>",
					"Drive at reasonable speeds and above all, do it gently"															+"</br>"+"<span style='font-weight:bold;'>"+"(-2 sp/km)"+"</span>",
					"Close windows, especially when driving at high speed and remove the trunk when carrying empty"						+"</br>"+"<span style='font-weight:bold;'>"+"(-2 sp/km)"+"</span>",
					"Try to anticipate traffic, this will prevent the abrupt braking"													+"</br>"+"<span style='font-weight:bold;'>"+"(-5 sp)"+"</span>",
					"Keep a safe distance from the car ahead of you because the braking distance increases with speed"					+"</br>"+"<span style='font-weight:bold;'>"+"(-5 sp)"+"</span>",
					"Should be driven without strong accelerations. Thus, increasing the friction and the mechanical wear is avoided"	+"</br>"+"<span style='font-weight:bold;'>"+"(-2 sp)"+"</span>",
					"Use turn the indicator lamps when changing lanes or joins an output"												+"</br>"+"<span style='font-weight:bold;'>"+"(-2 sp)"+"</span>",
					"Start driving without overly revolutionize the engine in the first kilometers"										+"</br>"+"<span style='font-weight:bold;'>"+"(-2 sp)"+"</span>",
					"Use either the clutch to avoid high revolutions"																	+"</br>"+"<span style='font-weight:bold;'>"+"(-2 sp)"+"</span>",
					"Change gears sooner the better. The long gears (4th, 5th and 6th) are the least fuel consumed"						+"</br>"+"<span style='font-weight:bold;'>"+"(-2 sp)"+"</span>",
					"When it rains or at night, drive slowly. The best way to avoid skidding is to slow"								+"</br>"+"<span style='font-weight:bold;'>"+"(-10 sp)"+"</span>",
					"Always drive on the lines marking the lane"																		+"</br>"+"<span style='font-weight:bold;'>"+"(-10 sp)"+"</span>",
					"Follow the instructions for maintenance of your car and periodically check the oil level"							+"</br>"+"<span style='font-weight:bold;'>"+"(-20 sp)"+"</span>",
					"Put the seat belt at the time of starting the engine"																+"</br>"+"<span style='font-weight:bold;'>"+"(-30 sp)"+"</span>",
					"Do not honk if not needed"																							+"</br>"+"<span style='font-weight:bold;'>"+"(-2 sp)"+"</span>",
				];

// Badges texts
var texts = [	"Welcome to SmartGear application", "Buy a Peugeot car", "Buy a Citroën car", "First car maintenance done",
				"Finish first in the leaderboard one week", "Finish first in the leaderboard for four non-consecutive weeks", "Finish first in the leaderboard for four consecutive weeks", "Finish second in the leaderboard one week",
				"Finish third in the leaderboard one week", "The driver of the year", "The driver of the year", "The driver of the year",
				"The driver of the year", "The driver of the year", "Finish with 60 points or more", "Finish with 60 points or more, 3 times",
				"Finish with 60 points or more, 5 times", "Finish with 120 points or more", "Finish with 120 points or more, 3 times", "Finish with 60 points or more, 5 times",
				"Finish with 240 points or more", "Finish with 240 points or more, 3 times", "Finish with 240 points or more, 5 times", "Earned a total of 250 points or more",
				"Earned a total of 500 points or more", "Earned a total of 1.000 points or more", "Earned a total of 10.000 points or more", "Your first 10 km",
				"Your first 100 km", "Your first 500 km", "Your first 1.000 km", "Novice driver. Not committed, 5 errors for 8km",
				"Novice driver. Not committed, 10 errors for 35km", "Novice driver. Not committed, 20 errors for 95km", "Novice driver. Not committed, 25 errors for 150km", "Promise driver. Not committed, 3 errors for 8km",
				"Promise driver. Not committed, 8 errors for 35km", "Promise driver. Not committed, 15 errors for 95km", "Promise driver. Not committed, 20 errors for 150km", "Advanced driver. Not committed, 1 errors for 8km",
				"Advanced driver. Not committed, 3 errors for 35km", "Advanced driver. Not committed, 5 errors for 95km", "Advanced driver. Not committed, 10 errors for 150km", "Expert driver. No committed any error for 8km",
				"Expert driver. No committed any error for for 35km", "Expert driver. No committed any error for 95km", "Expert driver. No committed any error for 150km"							
			];
			
// Badges images
var urlim = [	"smartphone/images/badges/0_Generic/welcome_xl.png", "smartphone/images/badges/0_Generic/buypeugeot_xl.png", "smartphone/images/badges/0_Generic/buycitroen_xl.png", "smartphone/images/badges/0_Generic/maintenance_xl.png",
				"smartphone/images/badges/1_ Position LeaderBoard/first_xl.png", "smartphone/images/badges/1_ Position LeaderBoard/first4x1_xl.png", "smartphone/images/badges/1_ Position LeaderBoard/first4x2_xl.png", "smartphone/images/badges/1_ Position LeaderBoard/second_xl.png",
				"smartphone/images/badges/1_ Position LeaderBoard/third_xl.png", "smartphone/images/badges/2_Driver Year/year_xl.png", "smartphone/images/badges/2_Driver Year/year_r1_xl.png", "smartphone/images/badges/2_Driver Year/year_r2_xl.png",
				"smartphone/images/badges/2_Driver Year/year_r3_xl.png", "smartphone/images/badges/2_Driver Year/year_r4_xl.png", "smartphone/images/badges/3_Points Route/Route1_60_xl.png", "smartphone/images/badges/3_Points Route/Route1_60x3_xl.png",
				"smartphone/images/badges/3_Points Route/Route1_60x5_xl.png", "smartphone/images/badges/3_Points Route/Route2_120_xl.png", "smartphone/images/badges/3_Points Route/Route2_120x3_xl.png", "smartphone/images/badges/3_Points Route/Route2_120x5_xl.png",
				"smartphone/images/badges/3_Points Route/Route3_240_xl.png", "smartphone/images/badges/3_Points Route/Route3_240x3_xl.png", "smartphone/images/badges/3_Points Route/Route3_240x5_xl.png", "smartphone/images/badges/4_Points/250sp_xl.png",
				"smartphone/images/badges/4_Points/500sp_xl.png", "smartphone/images/badges/4_Points/1000sp_xl.png", "smartphone/images/badges/4_Points/10000sp_xl.png", "smartphone/images/badges/5_KM/10km_xl.png",
				"smartphone/images/badges/5_KM/100km_xl.png", "smartphone/images/badges/5_KM/500km_xl.png", "smartphone/images/badges/5_KM/1000km_xl.png", "smartphone/images/badges/6_Trophy Beginner/begginer1_xl.png",
				"smartphone/images/badges/6_Trophy Beginner/begginer2_xl.png", "smartphone/images/badges/6_Trophy Beginner/begginer3_xl.png", "smartphone/images/badges/6_Trophy Beginner/begginer4_xl.png", "smartphone/images/badges/7_Trophy Promise/promise1_xl.png",
				"smartphone/images/badges/7_Trophy Promise/promise2_xl.png", "smartphone/images/badges/7_Trophy Promise/promise3_xl.png", "smartphone/images/badges/7_Trophy Promise/promise4_xl.png", "smartphone/images/badges/8_Trophy Experienced/experienced1_xl.png",
				"smartphone/images/badges/8_Trophy Experienced/experienced2_xl.png", "smartphone/images/badges/8_Trophy Experienced/experienced3_xl.png", "smartphone/images/badges/8_Trophy Experienced/experienced4_xl.png", "smartphone/images/badges/9_Trophy Expert/expert1_xl.png",
				"smartphone/images/badges/9_Trophy Expert/expert2_xl.png", "smartphone/images/badges/9_Trophy Expert/expert3_xl.png", "smartphone/images/badges/9_Trophy Expert/expert4_xl.png"						
			];
			
// Badges routes
var routes = [	"All routes", 	"All routes", 	"All routes", 	"All routes",
				"Any route", 	"Any route", 	"Any route", 	"Any route",
				"Any route", 	"Any route", 	"Route 1", 		"Route 2",
				"Route 3",		"Route 4", 		"Route 1", 		"Route 1",
				"Route 1", 		"Route 2", 		"Route 2", 		"Route 2",
				"Route 3", 		"Route 3", 		"Route 3", 		"Route 4",
				"Route 4", 		"Route 4", 		"Route 4", 		"All routes",
				"All routes", 	"All routes", 	"All routes", 	"All routes",
				"All routes", 	"All routes", 	"All routes", 	"Route 1",
				"Route 2", 		"Route 3", 		"Route 4", 		"Route 1",
				"Route 2", 		"Route 3", 		"Route 4", 		"Route 1",
				"Route 2", 		"Route 3", 		"Route 4"	
			];

// ********************************************
// **************** FIRST TIME ****************			
function firstTime(){
	var first = storage.getItem("e_welcome");
	if(first == "true"){
		var dateNow = new Date();
		dateNow = dateNow.getDate()+"/"+parseInt(dateNow.getMonth()+1)+" "+dateNow.toLocaleTimeString();
		
		storage.setItem("e_welcome", "false");
		storage.setItem("e_firstdate", dateNow);
		
		// Notify with the Welcome badge
		array_badges[0] = 1;
		storage.setItem("e_array_badges", array_badges);
		notify("Your first badge earned","Welcome to SmartGear application");
	}
};

// *******************************************************
// **************** TIPS screen functions ****************
// Update de tips value in summary screen
function initTips(){
	ntips = storage.getItem("e_ntips");
	$("#tips_value").html(ntips + " pending tips");
	$("#ptips").html(ntips);
	
	for (var i=0; i < array_tips.length; i++) {
		var btp = "btip"+i;
		var tp = "tip"+i;
		
		// Put the number of times that this error was made
		document.getElementById(tp).innerHTML = array_errors[i];
	
		// Change the background tip
		if(array_tips[i] == 0){
		}else{
			document.getElementById(btp).style.background = "#61428d";
		}				
	}
};

function showTip(tip){
	
	console.info("Changing the tip: "+tip);
	var number_tip = tip.split("btip");
	number_tip = parseInt(number_tip[1]);
	
	// Change the background tip read
	if(array_tips[number_tip] == 0){
	}else{
		if (ntips > 0){ntips -= 1;}
		
		document.getElementById(tip).style.background = "#9888b6";
		$("#tips_value").html((ntips) + " pending tips");
		$("#ptips").html(ntips);
		array_tips[number_tip] = 0;
		storage.setItem("e_array_tips",array_tips);
		storage.setItem("e_ntips",ntips);
		
		//Show the tip
		document.getElementById("textTip").innerHTML = advices[number_tip];
		document.getElementById("noticeTip").style.zIndex="1"
	}	
};

// **************************************************************
// **************** LEADERBOARD screen functions ****************
function initLeaderboard(){
// Init summary table
	$("#lb1").html("#"+array_positions[0]);
	$("#lb2").html("#"+array_positions[1]);
	$("#lb3").html("#"+array_positions[2]);
	$("#lb4").html("#"+array_positions[3]);
	
	document.getElementById(ld_now).style.background = "#9888b6";
	
	array_lbps = JSON.parse(storage.getItem("e_lb_rows1"));
	
	// Order the array by points
	array_lbps.sort(compare);

	$(".table_lb").html("<div class='row' style='background:#321c65;'>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Position</div>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Name</div>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Points</div>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Errors</div>" +
								"</div>");
	
	for (i = 0; i < array_lbps.length; i++) {
		// Create the new row 
		creaNewRow2(i);
	};
	
	// Change the background color
	document.getElementById("new_rowlb"+0).style.background = "#fcb400";
	document.getElementById("new_rowlb"+1).style.background = "#959595";
	document.getElementById("new_rowlb"+2).style.background = "#de0000";
};

function compare(a,b) {
	if (a.points > b.points)
		return -1;
	if (a.points < b.points)
	return 1;
return 0;
};

function showLeaderboard(route){
	document.getElementById(ld_now).style.background = "#321c65";
	document.getElementById(route).style.background = "#9888b6";
	ld_now = route;

	switch (route) {
	case "bleaderboard0":
		array_lbps = JSON.parse(storage.getItem("e_lb_rows1"));
		break;
	case "bleaderboard1":
		array_lbps = JSON.parse(storage.getItem("e_lb_rows2"));
		break;
	case "bleaderboard2":
		array_lbps = JSON.parse(storage.getItem("e_lb_rows3"));
		break;
	case "bleaderboard3":
		array_lbps = JSON.parse(storage.getItem("e_lb_rows4"));
		break;
	default:
		array_lbps = JSON.parse(storage.getItem("e_lb_rows1"));
		break;
	};
	
	// Order the array by points
	array_lbps.sort(compare);

	$(".table_lb").html("<div class='row' style='background:#321c65;'>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Position</div>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Name</div>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Points</div>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Errors</div>" +
								"</div>");
	
	for (i = 0; i < array_lbps.length; i++) {
		// Create the new row
		creaNewRow2(i);
	};
	
	// Change the background color
	document.getElementById("new_rowlb"+0).style.background = "#fcb400";
	document.getElementById("new_rowlb"+1).style.background = "#959595";
	document.getElementById("new_rowlb"+2).style.background = "#de0000";
};

function creaNewRow2(i){
	$(".table_lb").append("<div class='row' id='new_rowlb" + i + "'></div>");
	
	divrow0 =	"<div class=\"cell_sc\" id=\"position_row"+i+"\">"+"</div>" +
				"<div class=\"cell_sc\" id=\"name_row"+i+"\">"+"</div>" +
				"<div class=\"cell_sc\" id=\"points_row"+i+"\">"+"</div>" +
				"<div class=\"cell_sc\" id=\"error_row"+i+"\">"+"</div>";

	$("#new_rowlb" + i + "").html(divrow0);
	
	console.info(array_lbps[i].name +" : "+array_lbps[i].points+" : "+array_lbps[i].errors);
	
	// Update the info in the row
	$("#position_row"+i).html("#"+(i+1));
	$("#name_row"+i).html(array_lbps[i].name);
	$("#points_row"+i).html(array_lbps[i].points);
	$("#error_row"+i).html(array_lbps[i].errors);
}

// **************************************************************			
// *************** ACHIEVEMENTS screen functions ****************	
// Check the percentage in the progress bar and the opacity badges
function initAchievement(array_bd){
	total_badges = array_bd.length;
	badg_earned = 0;
	for (var i=0; i < array_bd.length; i++) {
		badg_earned = badg_earned + parseInt(array_bd[i]);
		
		var bd = "badge"+i;
		if(array_bd[i] == 1){
			document.getElementById(bd).style.opacity = 1;
		}else{
			document.getElementById(bd).style.opacity = 0.2;
		}				
	}
	
	console.log("Número de badges: "+badg_earned);
	
	// Calculate the Progress Bar width
	divWidth = (badg_earned*100)/total_badges + "%";
	storage.setItem("e_nbadges", badg_earned);
	document.getElementById("nbadges").innerHTML = badg_earned + " / " + total_badges;
	document.getElementById("achv_value").innerHTML = badg_earned + " badges earned";
	document.getElementById("barprogress").style.width = divWidth;
};

function showPanel(badg){

	$("#layout").animate({
		left: "-=100%",		
	}, 500, function() {
	// Animation complete.
	$("#layout2").show();
	});
	
	var idt = badg.substr(5);
	
	divbadge = "<div style=\"width: 100%;padding-top:10px\">" +
					"<img style=\"";
	
	// Badge achieved?
	if (array_badges[idt] == 0) { 
		badg_achieved = "Not achieved";
		divbadge = divbadge + "opacity: 0.2";
	}else{
		badg_achieved = "Achieved";
		divbadge = divbadge + "opacity: 1";
	}
	
	divbadge = divbadge + "\"; src=\""+ urlim[idt] +"\"/>" + 
					"<p style=\"font-size: 13px;\">"+ texts[idt] +"</p>" + 
					"<p style=\"font-size: 12px; padding-bottom:2px;\">"+"<span>"+"Applies to: "+"</span>"+"<span style=\"color:#dc002e; font-weight:bold;\">"+routes[idt]+"</span>"+"</p>" +
					"<span style=\"font-size: 12px; background: #61428d; -webkit-border-radius: 5px; padding: 3px;\">"+badg_achieved+"</span><br>" +
					"<img style=\"float: right; margin-right: 5px;\" src=\""+ button_back +"\"/>" + 
				"</div>";
	
	$("#panelbadge").html(divbadge);
};

function hidePanel(){
	$("#layout2").hide();
	$("#layout").animate({
		left: "+=100%",		
	}, 500, function() {
	// Animation complete.
	});
};

// ********************************************************
// **************** SCORE screen functions ****************
function initScores(){
	// Init summary table
	$("#sc1").html(array_points[0] + " sp");
	$("#sc2").html(array_points[3] + " sp");
	$("#sc3").html(array_points[6] + " sp");
	$("#sc4").html(array_points[9] + " sp");
	
	document.getElementById(sc_now).style.background = "#9888b6";
	document.getElementById("points_sc").innerHTML = array_points[0];
	document.getElementById("errors_sc").innerHTML = array_points[1];
	document.getElementById("roads_sc").innerHTML = array_points[2];
	
	array_rows = storage.getItem("e_sc_rows1").split(",");
	var steps = array_rows.length / 4;
	$(".table_sc2").html("<div class='row' style='background:#321c65;'>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Date</div>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Points</div>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Errors</div>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Distance traveled</div>" +
								"</div>");
	
	for (i = 0; i < steps; i++) {
		// Create the new row 
		creaNewRow(i);
	};
}

function showScore(route){
	document.getElementById(sc_now).style.background = "#321c65";
	document.getElementById(route).style.background = "#9888b6";
	sc_now = route;

	var sc = [];
	sc = route.split("bscore");
	
	// Access to storage to search de info of the selected route
	document.getElementById("points_sc").innerHTML = array_points[sc[1]];
	document.getElementById("errors_sc").innerHTML = array_points[parseInt(sc[1])+1];
	document.getElementById("roads_sc").innerHTML = array_points[parseInt(sc[1])+2];
	switch (route) {
	case "bscore0":
		array_rows = storage.getItem("e_sc_rows1").split(",");
		break;
	case "bscore3":
		array_rows = storage.getItem("e_sc_rows2").split(",");
		break;
	case "bscore6":
		array_rows = storage.getItem("e_sc_rows3").split(",");
		break;
	case "bscore9":
		array_rows = storage.getItem("e_sc_rows4").split(",");
		break;
	default:
		array_rows = storage.getItem("e_sc_rows1").split(",");
		break;
	};
	
	var steps = array_rows.length / 4;
	$(".table_sc2").html("<div class='row' style='background:#321c65;'>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Date</div>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Points</div>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Errors</div>" +
									"<div class='cell_sc' style='border: solid 1px #9888b6;'>Distance traveled</div>" +
								"</div>");
	
	for (i = 0; i < steps; i++) {
		// Create the new row 
		creaNewRow(i)
	};
};

function creaNewRow(i){
	$(".table_sc2").append("<div class='row' id='new_rowsc" + i + "'></div>");
			
	divrow =	"<div class=\"cell_sc\" id=\"date_row"+i+"\">"+"</div>" +
				"<div class=\"cell_sc\" style=\"background:#00e209\" id=\"point_row"+i+"\">"+"</div>" +
				"<div class=\"cell_sc\" style=\"background:#dc002e\" id=\"errors_row"+i+"\">"+"</div>" +
				"<div class=\"cell_sc\" style=\"background:#c620be\" id=\"km_row"+i+"\">"+"</div>";
			
	$("#new_rowsc" + i + "").html(divrow);

	// Update the info in the row
	$("#date_row"+i).html(array_rows[i*4]);
	$("#point_row"+i).html(array_rows[i*4+1]);
	$("#errors_row"+i).html(array_rows[i*4+2]);
	$("#km_row"+i).html(array_rows[i*4+3]+" km");

};

// ********************************************************
// **************** GAMING functions ****************
function startGaming() {
	// Save the current time
	var nowtime = new Date();
	firstTime = nowtime.getMinutes();

	if(gaming == true){
		console.info("Function - CONTINUING THE GAME...");
	}else{
		console.info("Function - STARTING THE GAME...");
		
		getSimulatorValue("CEA.VehicleData.Engine.EngineStatus");
		getSimulatorValue("CEA.VehicleData.Maintenance.Mileage");
		EngineStatus = $("#CEA\\.VehicleData\\.Engine\\.EngineStatus").val();
		
		//EngineStatus = 1;
		
		if(EngineStatus == 0 | EngineStatus == null){
			notify("SmartGear","To start the game, the car must be on");
		}else{
			storage.setItem("e_isGaming", "true");
			gaming = true;
			document.getElementById("lamp").className  = "circleBlink"; 
			document.getElementById("lamp").value  = "On";
			
			initAllVariables();
			
			// Check the errors that can commit without start the route (mileage_actual == 0)
			errorReserve();
			errorMaintenance();
			
			subscriptionGaming(true);
		}
	}
};

function stopGaming() {
   
	if(gaming == true){
		console.info("Function - STOPPING THE GAME...");
		gaming = false;
		document.getElementById("lamp").className  = "circleNoBlink";
		document.getElementById("lamp").value  = "Off";
		
		// Save and check all value game
		engineStatusOff();
		subscriptionGaming(false);
	}else{
		notify("SmartGear","The Ecocar Game is off");
	}
};

function checkErrors(signalchanged){

	console.info("Function - CHECKING THE ERRORS...");
	
	if(EngineStatus == 0 | EngineStatus == null){
		engineStatusOff();
	}else{
		
		mileage_actual = $("#CEA\\.VehicleData\\.Maintenance\\.Mileage").val();
		//mileage_actual = mileage_actual.toFixed(1);	// Rounded to one decimal
		distancep = distance;
		distance = Math.floor(mileage_total - mileage_actual);
		
		console.info("CHECK from "+mileage_total+" to "+mileage_actual);
		
		// CHECKING EACH POSSIBLE ERROR
		// Each signal will be involved in a number of possible errors. It will call the appropriate function to evaluate the possible error.
		switch (signalchanged) {
			case "EngineStatus": if(EngineStatus == 0){engineStatusOff();} 
				break;
			case "Revolutions": 				errorAcceleration();
												errorRpm1(); 
												errorRpm2(); 
												errorGear();			break;
			case "FuelLowAlertOn": 				errorReserve(); 		break;
			case "InstantSpeed": 				errorSpeed(); 
												errorWindows(); 
												errorBraking(); 
												rrorTIVtime(); 
												errorAcceleration(); 
												errorManeuver();		break;
			case "ThrottlePedalLevel": 			errorAcceleration(); 	break;
			case "BreakPedal": 					errorBraking(); 		break;
			case "BrakePedalPressure": 			errorBraking(); 		break;
			case "SteeringWheelPosition": 		errorManeuver();		break;
			case "SteeringWheelRotationSpeed": 	errorManeuver(); 		break;
			case "CurrentGear":					errorGear(); 			break;
			case "HornActivated": 				errorHorn();			break;
			case "Night": 						errorManeuver(); 		break;
			case "WiperSpeed": 					errorManeuver();		break;
			case "FrontLeftWindowPosition": 	errorWindows(); 		break;
			case "FrontRightWindowPosition": 	errorWindows(); 		break;
			case "RearLeftWindowPosition": 		errorWindows(); 		break;
			case "RearRightWindowPosition": 	errorWindows(); 		break;
			case "MaintenanceExceed": 			errorMaintenance(); 	break;
			case "Mileage":						errorReserve();
												errorSpeed();
												errorBelts();
												errorWindows();			break;
			case "DriverBeltFastened": 			errorBelts(); 			break;
			case "LeftHandCrossing":			errorAbnormal(); 		
												errorLamps();			break;
			case "RightHandCrossing": 			errorAbnormal(); 		
												errorLamps();			break;			
			case "TIVTime":						errorTIVtime(); 		break;					
			default: console.info("Switch - Signal unknown..."); 		break;
		};		
	}
};

// ***** FUNCTIONS TO EVALUATE THE ERRORS ******************************
// 1  ** Driving with low fuel (per Km)
function errorReserve(){
	console.info("Function - errorReserve()");

	FuelLowAlertOn = $("#CEA\\.VehicleData\\.Engine\\.FuelLowAlertOn").val();
	if(FuelLowAlertOn == 1 & (distance > distancep | mileage_actual == 0)){
		perrors_actual += er_reserve;
		nerrors_actual += 1;
		array_errors[0] = parseInt(array_errors[0]) + 1;
		array_tips[0] = 1;
	}
};

// 2  ** Excessive speed (per Km)
function errorSpeed(){
	console.info("Function - errorSpeed()");
	// Comprobar el id de la señal
	// Si se recorrió 1 km && velocidad > 125km/h =>

	InstantSpeed = $("#CEA\\.VehicleData\\.Speed\\.InstantSpeed").val();
	if(InstantSpeed > 125 & distance > distancep){
		perrors_actual += er_speed;
		nerrors_actual += 1;
		array_errors[1] = parseInt(array_errors[1]) + 1;
		array_tips[1] = 1;
	}
};

// 3  ** Driving fast with the windows down (per Km)
function errorWindows(){
	console.info("Function - errorWindows()");

	InstantSpeed 				= $("#CEA\\.VehicleData\\.Speed\\.InstantSpeed").val();
	FrontLeftWindowPosition 	= $("#CEA\\.VehicleData\\.Bodywork\\.FrontLeftWindowPosition").val();
	FrontRightWindowPosition 	= $("#CEA\\.VehicleData\\.Bodywork\\.FrontRightWindowPosition").val();
	RearLeftWindowPosition 		= $("#CEA\\.VehicleData\\.Bodywork\\.RearLeftWindowPosition").val();
	RearRightWindowPosition 	= $("#CEA\\.VehicleData\\.Bodywork\\.RearRightWindowPosition").val();
	if((InstantSpeed > 100 & distance > distancep) & (FrontLeftWindowPosition > 0 | FrontRightWindowPosition > 0 | RearLeftWindowPosition > 0 | RearRightWindowPosition > 0)){
		perrors_actual += er_windows;
		nerrors_actual += 1;
		array_errors[2] = parseInt(array_errors[2]) + 1;
		array_tips[2] = 1;
	}
};

// 4  ** Abrupt braking
function errorBraking(){
	console.info("Function - errorBraking()");
	
	var InstantSpeedBraking = InstantSpeed;
	InstantSpeed = $("#CEA\\.VehicleData\\.Speed\\.InstantSpeed").val();
	var difBraking = InstantSpeedBraking - InstantSpeed;
	
	BreakPedal 			= $("#CEA\\.VehicleData\\.Driving\\.BreakPedal").val();
	BrakePedalPressure 	= $("#CEA\\.VehicleData\\.Driving\\.BrakePedalPressure").val();
	
	if(BreakPedal == 1 & (InstantSpeed == 0 | difBraking > 20 | BrakePedalPressure > 0)){
		perrors_actual += er_braking;
		nerrors_actual += 1;
		array_errors[3] = parseInt(array_errors[3]) + 1;
		array_tips[3] = 1;
	}
};

// 5  ** TIVtime despised when the value is less than 3 seconds
function errorTIVtime(){
	console.info("Function - errorTIVtime()");
	
	var InstantSpeedTIV = InstantSpeed;
	InstantSpeed = $("#CEA\\.VehicleData\\.Speed\\.InstantSpeed").val();
	
	TIVtime = $("#CEA\\.VehicleData\\.ADAS\\.TIVTime").val();
	if(TIVTime > 3 && InstantSpeedTIV < InstantSpeed){
		perrors_actual += er_tivtime;
		nerrors_actual += 1;
		array_errors[4] = parseInt(array_errors[4]) + 1;
		array_tips[4] = 1;
	}
};

// 6  ** Abrupt acceleration
function errorAcceleration(){
	console.info("Function - errorAcceleration()");
	
	var InstantSpeedAcceleration = InstantSpeed;
	InstantSpeed = $("#CEA\\.VehicleData\\.Speed\\.InstantSpeed").val();
	var difAcceleration = InstantSpeedAcceleration - InstantSpeed;
	
	ThrottlePedalLevel 	= $("#CEA\\.VehicleData\\.Driving\\.ThrottlePedalLevel").val();
	Revolutions 		= $("#CEA\\.VehicleData\\.Engine\\.Revolutions").val();
	
	if(difBraking > 20 & Revolutions > 2500 & ThrottlePedalLevel > 50){
		perrors_actual += er_acceleration;
		nerrors_actual += 1;
		array_errors[5] = parseInt(array_errors[5]) + 1;
		array_tips[5] = 1;
	}
};

// 7  ** The intermittent lamps is not used
function errorLamps(){
	console.info("Function - errorLamps()");
	
	LampsTurnIndicatorLeftActivated  = $("#CEA\\.VehicleData\\.Driving\\.LampsTurnIndicatorLeftActivated").val();
	LampsTurnIndicatorRightActivated = $("#CEA\\.VehicleData\\.Driving\\.LampsTurnIndicatorRightActivated").val();
	
	if((LeftHandCrossing == 1 & LampsTurnIndicatorLeftActivated == 0)|(RightHandCrossing == 1 & LampsTurnIndicatorRightActivated == 0)){
		perrors_actual += er_lamps;
		nerrors_actual += 1;
		array_errors[6] = parseInt(array_errors[6]) + 1;
		array_tips[6] = 1;
	}
};

// 8  ** Exceed 2,000 rev. cold (<2 min)
function errorRpm1(){ 
	console.info("Function - errorRpm1()");
	
	var nowtime2 = new Date();
	secondTime = nowtime2.getMinutes();
	var difTime = Math.abs(secondTime - firstTime);
	
	Revolutions = $("#CEA\\.VehicleData\\.Engine\\.Revolutions").val();
	
	if(Revolutions > 2000 & difTime < 2){
		perrors_actual += er_rpm1;
		nerrors_actual += 1;
		array_errors[7] = parseInt(array_errors[7]) + 1;
		array_tips[7] = 1;
	}
};

// 9  ** Excessive revolutions (>3.000 rpm)
function errorRpm2(){
	console.info("Function - errorRpm2()");
	
	Revolutions = $("#CEA\\.VehicleData\\.Engine\\.Revolutions").val();
	
	if(Revolutions > 3000){
		perrors_actual += er_rpm2;
		nerrors_actual += 1;
		array_errors[8] = parseInt(array_errors[8]) + 1;
		array_tips[8] = 1;
	}
};

// 10 ** Incorrect current gear
function errorGear(){
	console.info("Function - errorGear()");
	// if RPM < 1.000 & > gears != P,N,R,D & Recommended > 0
	
	Revolutions = $("#CEA\\.VehicleData\\.Engine\\.Revolutions").val();
	CurrentGear = $("#CEA\\.VehicleData\\.Driving\\.CurrentGear").val();
	RecommendedGearArrow = $("#CEA\\.VehicleData\\.Driving\\.RecommendedGearArrow").val();
	
	if(Revolutions < 1000 & CurrentGear > 3 & RecommendedGearArrow > 0){
		perrors_actual += er_gear;
		nerrors_actual += 1;
		array_errors[9] = parseInt(array_errors[8]) + 1;
		array_tips[9] = 1;
	}
};

// 11 ** Dangerous maneuver (with rain ...)
function errorManeuver(){
	console.info("Function - errorManeuver()");
	
	InstantSpeed 				= $("#CEA\\.VehicleData\\.Speed\\.InstantSpeed").val();
	Night 						= $("#CEA\\.VehicleData\\.ExtEnvironment\\.Night").val();
	WiperSpeed 					= $("#CEA\\.VehicleData\\.Bodywork\\.WiperSpeed").val();
	SteeringWheelPosition 		= $("#CEA\\.VehicleData\\.Driving\\.SteeringWheelPosition").val();
	SteeringWheelRotationSpeed 	= $("#CEA\\.VehicleData\\.Driving\\.SteeringWheelRotationSpeed").val();
	
	if((InstantSpeed > 90) & (WiperSpeed > 0 | Night == 1) & SteeringWheelPosition > 0 & SteeringWheelRotationSpeed > 800){
		perrors_actual += er_maneuver;
		nerrors_actual += 1;
		array_errors[10] = parseInt(array_errors[10]) + 1;
		array_tips[10] = 1;
	}
};

// 12 ** Abnormal right-hand/left-hand crossing
function errorAbnormal(){
	console.info("Function - errorAbnormal()");
	
	LeftHandCrossing	= $("#CEA\\.VehicleData\\.ADAS\\.LeftHandCrossing").val();
	RightHandCrossing 	= $("#CEA\\.VehicleData\\.ADAS\\.RightHandCrossing").val();
	
	if(LeftHandCrossing > 0 | RightHandCrossing > 0){
		perrors_actual += er_abnormal;
		nerrors_actual += 1;
		array_errors[11] = parseInt(array_errors[11]) + 1;
		array_tips[11] = 1;
	}
};

// 13 ** No maintenance
function errorMaintenance(){
	console.info("Function - errorMaintenance()");
	
	MaintenanceExceed = $("#CEA\\.VehicleData\\.Maintenance\\.MaintenanceExceed").val();
	
	if(MaintenanceExceed > 0){
		perrors_actual += er_maintenance;
		nerrors_actual += 1;
		array_errors[12] = parseInt(array_errors[12]) + 1;
		array_tips[12] = 1;
	}
};

// 14 ** Without Seat Belts (per km)
function errorBelts(){
	console.info("Function - errorBelts()");
	
	DriverBeltFastened = $("#CEA\\.VehicleData\\.Security\\.DriverBeltFastened").val();
	
	if(DriverBeltFastened == 0 & distance > 1){
		perrors_actual += er_belts;
		nerrors_actual += 1;
		array_errors[13] = parseInt(array_errors[13]) + 1;
		array_tips[13] = 1;
	}
};

// 15 ** Horn on
function errorHorn(){
	console.info("Function - errorHorn()");
	
	HornActivated = $("#CEA\\.VehicleData\\.Driving\\.HornActivated").val();
	
	if(HornActivated > 0){
		perrors_actual += er_horn;
		nerrors_actual += 1;
		array_errors[14] = parseInt(array_errors[14]) + 1;
		array_tips[14] = 1;
	}
};

// END errors *****************************************************************

// If the car engine is turned off
function engineStatusOff(){

	console.info("THE ENGINE IS OFF...");
	
	if (mileage_actual == 0){
		console.info("The car didn't move...");
		notify("SmartGear","The car didn't move");
	} else {

		// ** 1. The type of route you took (depends of the 'distance')
		distanceFinal = mileage_actual - mileage_total;
		distanceFinal = distanceFinal.toFixed(1);	// Rounded to one decimal
		console.info("THE ENGINE IS OFF... Checking the route: distance "+distanceFinal+"km / from "+mileage_actual+" to "+mileage_total);
		
		route = distanceFinal;
		calculeRoute(route);
		console.info("THE ENGINE IS OFF... the route is: "+route);

		//** 2. Count Score and upgrade scores tables.
		sp_actual = 50 + Math.floor(distanceFinal)*2;	// With each trip 50 points added. Each kilometer adds 2 points.
		if(perrors_actual > sp_actual){
			console.info("THE ENGINE IS OFF... the final score is 0. Too many driving errors committed");
			sp_final = 0;
		}else{
			sp_final = sp_actual - perrors_actual;
			console.info("THE ENGINE IS OFF... the final score is: "+sp_final);
		}
		sp_total = parseInt(sp_total) + sp_final;

		//The scoreboard of the particular route is updated
		var points = array_points[(route-1)*3];
		var errors = array_points[((route-1)*3)+1];
		var roads  = array_points[((route-1)*3)+2];
		array_points[(route-1)*3] = points + sp_final;				//Update sp points
		array_points[((route-1)*3)+1] = errors + nerrors_actual;	//Update errors
		array_points[((route-1)*3)+2] = roads + distanceFinal;		//Update km
		
		var now = new Date();
		now = now.getDate()+"/"+parseInt(now.getMonth()+1)+" "+now.toLocaleTimeString();
		
		// UPDATE THE ARRAY
		switch (route) {
			case 1:
				array_rows = storage.getItem("e_sc_rows1").split(",");
				array_lbps = JSON.parse(storage.getItem("e_lb_rows1"));
				break;
			case 2:
				array_rows = storage.getItem("e_sc_rows2").split(",");
				array_lbps = JSON.parse(storage.getItem("e_lb_rows2"));
				break;
			case 3:
				array_rows = storage.getItem("e_sc_rows3").split(",");
				array_lbps = JSON.parse(storage.getItem("e_lb_rows3"));
				break;
			case 4:
				array_rows = storage.getItem("e_sc_rows4").split(",");
				array_lbps = JSON.parse(storage.getItem("e_lb_rows4"));
				break;
			default:
				array_rows = storage.getItem("e_sc_rows1").split(",");
				array_lbps = JSON.parse(storage.getItem("e_lb_rows1"));
				break;
		};
		array_rows.push(now+","+String(points)+","+String(errors)+","+String(distanceFinal));
		console.info("Route type "+route+", The final score is: "+sp_final+" sp and you made "+errors+"errors in the "+distanceFinal+" km traveled");
		notify("Route type "+route,"The final score is: "+sp_final+" sp, you had "+errors+" errors in "+distanceFinal+" km trip");
		
		//** 3. Updates the LEADERBOARD (Simulated because this should be stored in the cloud)
			// Search the name of the player
			var name = storage.getItem("p_name");
			var index = -1;
			for(var i = 0, len = array_lbps.length; i < len; i++) {
				if (array_lbps[i].name == name) {
					index = i;
					break;
				}
			}			
			array_lbps[index].points = array_lbps[index].points + points;
			array_lbps[index].errors = array_lbps[index].errors + errors;
			
			// Order the array by points
			array_lbps.sort(compare);
			
			// Check the final position in the table
			index = -1;
			for(var i = 0, len = array_lbps.length; i < len; i++) {
				if (array_lbps[i].name == name) {
					index = i;
					break;
				}
			};
			
			// Update the position value in the sumary table
			array_positions[route-1] = index+1;
		
		//** 4. Create a TIP for each ERROR has been committed
		//		It was made in each evaluation error
		
		//** 5. Ratings ACHIEVEMENTS
			mileage_total = mileage_total + distanceFinal;
		
			checkAchievement();
		
		// *************************
		// ** SAVING ALL THE INFO **
		saveInfo();
	}
};

// Calculate the type of route
function calculeRoute(rut){
	if(rut <= 10){						// Route 1: <10km
	route = 1;
	}else{
		if(rut > 10 & rut <= 40){		// Route 2: >10km and <40km
			route = 2;
		}else{
			if(rut > 40 & rut <= 100){	// Route 3: >40km and <100km
				route = 3;
			}else{
				if(rut > 100){			// Route 4: >100km
					route = 4;
				}
			}
		}
	}
};

function checkAchievement(){

	// 1. Welcome to SmartGear application
	// DONE the first time that open the application

	// Car Brand
		var Brand = $("#CEA\\.VehicleData\\.Configuration\\.Brand").val();
		
		if (array_badges[1] == 0 & Brand == "Peugeot") {
			// 2. Buy a Peugeot car
			numBadEarned += 1;
			array_badges[1] = 1;
		} else {
			if (array_badges[1] == 0 & Brand == "Citroën") {
				// 3. Buy a Citroën car
				numBadEarned += 1;
				array_badges[2] = 1;
			};
		};
		
	// 4. First car maintenance done
	// No type checking is done
	if(array_badges[2] == 0){
		numBadEarned += 1; 
		array_badges[3] = 1;
	}

	// 5. Finish first in the leaderboard one week
	// Impossible to rate because missing information from other drivers (CLOUD)
	// numBadEarned += 1; array_badges[4] = 1;

	// 6. Finish first in the leaderboard for four non-consecutive weeks
	// Impossible to rate because missing information from other drivers (CLOUD)
	// numBadEarned += 1; array_badges[5] = 1;

	// 7. Finish first in the leaderboard for four consecutive weeks
	// Impossible to rate because missing information from other drivers (CLOUD)
	// numBadEarned += 1; array_badges[6] = 1;

	// 8. Finish second in the leaderboard one week
	// Impossible to rate because missing information from other drivers (CLOUD)
	// numBadEarned += 1; array_badges[7] = 1;

	// 9. Finish third in the leaderboard one week
	// Impossible to rate because missing information from other drivers (CLOUD)
	// numBadEarned += 1; array_badges[8] = 1;
	
	// 10. The driver of the year. Any route.
	// Impossible to rate because missing information from other drivers (CLOUD)
	// numBadEarned += 1; array_badges[9] = 1;

	// 11. The driver of the year. Route 1.
	// Impossible to rate because missing information from other drivers (CLOUD)
	// numBadEarned += 1; array_badges[10] = 1;

	// 12. The driver of the year. Route 2.
	// Impossible to rate because missing information from other drivers (CLOUD)
	// numBadEarned += 1; array_badges[11] = 1;

	// 13. The driver of the year. Route 3.
	// Impossible to rate because missing information from other drivers (CLOUD)
	// numBadEarned += 1; array_badges[12] = 1;

	// 14. The driver of the year. Route 4.
	// Impossible to rate because missing information from other drivers (CLOUD)
	// numBadEarned += 1; array_badges[13] = 1;

	// Route 1. Finish with 60 points or more.
	if (route == 1 & sp_final >= 60) {
		var times = storage.getItem("e_times_r1");
		times = parseInt(times);
		// 15. Finish with 60 points, 1 time. Route 1.
		if (array_badges[14] == 0 | times >= 1) {
			numBadEarned += 1; 
			array_badges[14] = 1;
			// 16. Finish with 60 points or more, 3 times. Route 1.
			if (array_badges[15] == 0 | times >= 3) {
				numBadEarned += 1; 
				array_badges[15] = 1;
				// 17. Finish with 60 points or more, 5 times. Route 1.
				if(array_badges[16] == 0 | times >= 5){
					numBadEarned += 1; 
					array_badges[16] = 1;
				}
			}
		}else{
			times += 1;
			times = String(times);
			storage.setItem("e_times_r1",times);
		}
	};

	// Route 2. Finish with 120 points or more. 
	if(route == 2 & sp_final >= 120){
		var times = storage.getItem("e_times_r2");
		times = parseInt(times);
		// 18. Finish with 120 points, 1 time. Route 2.
		if(array_badges[17] == 0 & times >= 1){
			numBadEarned += 1; 
			array_badges[17] = 1;
			// 19. Finish with 120 points or more, 3 times. Route 2.
			if(array_badges[18] == 0 & times >= 3){
				numBadEarned += 1; 
				array_badges[18] = 1;
				// 20. Finish with 120 points or more, 5 times. Route 2.
				if(array_badges[19] == 0 & times >= 5){
					numBadEarned += 1; 
					array_badges[19] = 1;
				}
			}
		}else{
			times += 1;
			times = String(times);
			storage.setItem("e_times_r2",times);
		}
	};
	
	// Route 3. Finish with 240 points or more. 
	if(route == 3 & sp_final >= 240){
		var times = storage.getItem("e_times_r2");
		times = parseInt(times);
		// 21. Finish with 240 points, 1 time. Route 3.
		if(array_badges[20] == 0 & times >= 1){
			numBadEarned += 1; 
			array_badges[20] = 1;
			// 22. Finish with 240 points or more, 3 times. Route 3.
			if(array_badges[21] == 0 & times >= 3){
				numBadEarned += 1; 
				array_badges[21] = 1;
				// 23. Finish with 240 points or more, 5 times. Route 3.
				if(array_badges[22] == 0 & times >= 5){
					numBadEarned += 1; 
					array_badges[22] = 1;
				}
			}
		}else{
			times += 1;
			times = String(times);
			storage.setItem("e_times_r3",times);
		}
	};

	// 24. Earned a total of 250 points or more
	if(array_badges[23] == 0 & sp_total > 250 & sp_total <= 500){
		numBadEarned += 1; 
		array_badges[23] = 1;
	};

	// 25. Earned a total of 500 points or more
	if(array_badges[24] == 0 & sp_total > 500 & sp_total <= 1000){
		numBadEarned += 1; 
		array_badges[24] = 1;
	};

	// 26. Earned a total of 1.000 points or more
	if(array_badges[25] == 0 & sp_total > 1000 & sp_total <= 10000){
		numBadEarned += 1; 
		array_badges[25] = 1;
	};

	// 27. Earned a total of 10.000 points or more
	if(array_badges[16] == 0 & sp_total > 10000){
		numBadEarned += 1; 
		array_badges[26] = 1;
	};

	// 28. Your first 10 km
	if(array_badges[27] == 0 & mileage_total > 10 & mileage_total <= 100){
		numBadEarned += 1; 
		array_badges[27] = 1;
	};
	
	// 29. Your first 100 km
	if(array_badges[28] == 0 & mileage_total > 100 & mileage_total <= 500){
		numBadEarned += 1; 
		array_badges[28] = 1;
	};

	// 30. Your first 500 km
	if(array_badges[29] == 0 & mileage_total > 500 & mileage_total <= 1000){
		numBadEarned += 1; 
		array_badges[29] = 1;
	};

	// 31. Your first 1.000 km
	if(array_badges[30] == 0 & mileage_total > 100){
		numBadEarned += 1; 
		array_badges[30] = 1;
	};

	// 32. Novice driver. Not committed, 5 errors for 8km
	if(array_badges[31] == 0 & nerrors_actual <= 5 & distanceFinal >= 8 & distanceFinal < 35){
		numBadEarned += 1; 
		array_badges[31] = 1;
	};

	// 33. Novice driver. Not committed, 10 errors for 35km
	if(array_badges[32] == 0 & nerrors_actual <= 10 & distanceFinal >= 35 & distanceFinal < 95){
		numBadEarned += 1; 
		array_badges[32] = 1;
	};

	// 34. Novice driver. Not committed, 20 errors for 95km
	if(array_badges[33] == 0 & nerrors_actual <= 20 & distanceFinal >= 95 & distanceFinal < 150){
		numBadEarned += 1; 
		array_badges[33] = 1;
	};

	// 35. Novice driver. Not committed, 25 errors for 150km
	if(array_badges[34] == 0 & nerrors_actual <= 25 & distanceFinal >= 150){
		numBadEarned += 1; 
		array_badges[34] = 1;
	};

	// 36. Promise driver. Not committed, 3 errors for 8km
	if(array_badges[35] == 0 & nerrors_actual <= 3 & distanceFinal >= 8 & distanceFinal < 35){
		numBadEarned += 1; 
		array_badges[35] = 1;
	};

	// 37. Promise driver. Not committed, 8 errors for 35km
	if(array_badges[36] == 0 & nerrors_actual <= 8 & distanceFinal >= 35 & distanceFinal < 95){
		numBadEarned += 1; 
		array_badges[36] = 1;
	};

	// 38. Promise driver. Not committed, 15 errors for 95km
	if(array_badges[37] == 0 & nerrors_actual <= 15 & distanceFinal >= 95 & distanceFinal < 150){
		numBadEarned += 1; 
		array_badges[37] = 1;
	};

	// 39. Promise driver. Not committed, 20 errors for 150km
	if(array_badges[38] == 0 & nerrors_actual <= 20 & distanceFinal >= 150){
		numBadEarned += 1; 
		array_badges[38] = 1;
	};

	// 40. Advanced driver. Not committed, 1 errors for 8km
	if(array_badges[39] == 0 & nerrors_actual <= 1 & distanceFinal >= 8 & distanceFinal < 35){
		numBadEarned += 1; 
		array_badges[39] = 1;
	};

	// 41. Advanced driver. Not committed, 3 errors for 35km
	if(array_badges[40] == 0 & nerrors_actual <= 3 & distanceFinal >= 35 & distanceFinal < 95){
		numBadEarned += 1; 
		array_badges[40] = 1;
	};

	// 42. Advanced driver. Not committed, 5 errors for 95km
	if(array_badges[41] == 0 & nerrors_actual <= 5 & distanceFinal >= 95 & distanceFinal < 150){
		numBadEarned += 1; 
		array_badges[41] = 1;
	};

	// 43. Advanced driver. Not committed, 10 errors for 150km
	if(array_badges[42] == 0 & nerrors_actual <= 10 & distanceFinal >= 150){
		numBadEarned += 1; 
		array_badges[42] = 1;
	};
	
	// 44. Expert driver. No committed any error for 8km
	if(array_badges[43] == 0 & nerrors_actual == 0 & distanceFinal >= 8 & distanceFinal < 35){
		numBadEarned += 1; 
		array_badges[43] = 1;
	};

	// 45. Expert driver. No committed any error for for 35km
	if(array_badges[44] == 0 & nerrors_actual == 0 & distanceFinal >= 35 & distanceFinal < 95){
		numBadEarned += 1; 
		array_badges[44] = 1;
	};

	// 46. Expert driver. No committed any error for 95km
	if(array_badges[45] == 0 & nerrors_actual == 0 & distanceFinal >= 95 & distanceFinal < 150){
		numBadEarned += 1; 
		array_badges[45] = 1;
	};

	// 47. Expert driver. No committed any error for 150km
	if(array_badges[46] == 0 & nerrors_actual == 0 & distanceFinal >= 150){
		numBadEarned += 1; 
		array_badges[46] = 1;
	};
	//console.debug(array_badges);
	if (numBadEarned>0) {
		notify("Badges earned","In last route your earned "+numBadEarned+" badges");
	};
};

function initAllVariables(){
	
	console.info("Function - INITIALIZING THE VARIABLES...");
	
	sp_actual,sp_final,nerrors_actual,perrors_actual = 0;

	// Init de value of previous variables
	mileage_total = $("#CEA\\.VehicleData\\.Maintenance\\.Mileage").val();
	mileage_actual = 0;
	console.info("INIT from "+mileage_total+" km");
	Revolutions,InstantSpeed,ThrottlePedalLevel,BreakPedal,BrakePedalPressure,SteeringWheelPosition = 0;
	SteeringWheelRotationSpeed,LampsTurnIndicatorLeftActivated,LampsTurnIndicatorRightActivated,CurrentGear,RecommendedGearArrow,HornActivated,Night = 0;
	WiperSpeed,FrontLeftWindowPosition,FrontRightWindowPosition,RearLeftWindowPosition,RearRightWindowPosition,MaintenanceExceed = 0;
	DriverBeltFastened,LeftHandCrossing,RightHandCrossing,TIVTime = 0;					
};

function saveInfo(){
	console.info("Function - SAVING ALL THE INFO...");

	storage.setItem("e_isGaming", "false");
	storage.setItem("e_sp_total", sp_total);
	storage.setItem("e_array_errors", array_errors);
	storage.setItem("e_nerrors_actual", nerrors_actual);	// Actual Number for error comitted
	storage.setItem("e_perrors_actual", perrors_actual);	// Actual points of error comitted
	storage.setItem("e_mileage_total", mileage_actual);		// Total kilometers
	
	// Count the number of tips
	for (var i=0; i < array_tips.length; i++) {
		ntips = parseInt(ntips);
		if(array_tips[i] == 1){ntips += 1;}
	}
	
	storage.setItem("e_ntips", ntips);
	storage.setItem("e_nbadges", badg_earned + numBadEarned);
	storage.setItem("e_sc_points", array_points);
	storage.setItem("e_array_tips", array_tips);
	storage.setItem("e_lb_position", array_positions);
	storage.setItem("e_array_badges", array_badges);
	
	// SWITCH by the route
	switch (route) {
	case 1:
		storage.setItem("e_sc_rows1", array_rows);
		storage.setItem("e_lb_rows1", JSON.stringify(array_lbps));
		break;
	case 2:
		storage.setItem("e_sc_rows2",  array_rows);
		storage.setItem("e_lb_rows2", JSON.stringify(array_lbps));
		break;
	case 3:
		storage.setItem("e_sc_rows3", array_rows);
		storage.setItem("e_lb_rows3", JSON.stringify(array_lbps));
		break;
	case 4:
		storage.setItem("e_sc_rows4", array_rows);
		storage.setItem("e_lb_rows4", JSON.stringify(array_lbps));
		break;
	default:
		storage.setItem("e_sc_rows1", array_rows);
		storage.setItem("e_lb_rows1", JSON.stringify(array_lbps));
		break;
	};
	
	storage.setItem("e_init","true");
};

// Subscription or Unsubscription
function subscriptionGaming(value) {
	
	//Separate the signals in three different variables because the number of subscriptions is limited
	var signals=[];
	signals.push('CEA.VehicleData.Engine.EngineStatus');						// Enum 	0b00 = Engine not running; 0b01 = Starting; 0b10 = Engine running; 0b11 = Engine stopped in stop phase
	signals.push('CEA.VehicleData.Engine.Revolutions');							// Range 	0 to 8191 RPM
	signals.push('CEA.VehicleData.Engine.FuelLowAlertOn');						// Boolean
	signals.push('CEA.VehicleData.Speed.InstantSpeed');							// Range 	0 to 254 km/h
	signals.push('CEA.VehicleData.Driving.ThrottlePedalLevel');					// Range 	0 to 100%
	signals.push('CEA.VehicleData.Driving.BreakPedal');							// Boolean
	signals.push('CEA.VehicleData.Driving.BrakePedalPressure');					// Range 	-55 to 354 bar
	signals.push('CEA.VehicleData.Driving.SteeringWheelPosition');				// Enum 	0b00 = Invalid ; 0b01 = Steering right ; 0b10 = Steering left ; 0b11 = Invalid
	signals.push('CEA.VehicleData.Driving.SteeringWheelRotationSpeed');			// Range 	0 to 1016
	signals.push('CEA.VehicleData.Driving.LampsTurnIndicatorLeftActivated');	// Boolean
	signals.push('CEA.VehicleData.Driving.LampsTurnIndicatorRightActivated');	// Boolean
	signals.push('CEA.VehicleData.Driving.CurrentGear');						// Enum 	0b0000 = P ; 0b0001 = R ; 0b0010 = N ; 0b0011 = D ; 0b0100 = 6th gear ; 0b0101 = 5th gear ; 0b0110 = 4th gear ; 0b0111 = 3rd gear ; 0b1000 = 2nd gear ; 0b1001 = 1st gear ; 0b1010 = Invalid ; 0b1011 = No gear to display ; 0b1100 = 7th gear
	signals.push('CEA.VehicleData.Driving.RecommendedGearArrow');				// Enum		0b00 = No gear recomendation arrow; 0b01 = Rising arrow gear recommendation; 0b10 = Lowering arrow gear recommendation; 0b11 = Rising and lowering arrow gear recommendation;
	signals.push('CEA.VehicleData.Driving.HornActivated');						// Boolean
	signals.push('CEA.VehicleData.ExtEnvironment.Night');						// Boolean
	signals.push('CEA.VehicleData.Bodywork.WiperSpeed');						// Enum 	0b0000 = Speed 0 (Low Speed) ; 0b0001 = Speed 1 ; 0b0010 = Speed 2 ; 0b0011 = Speed 3 ; 0b0100 = Speed 4 ; 0b0101 = Speed 5 ; 0b0110 = Speed 6 ; 0b0111 = Speed 7  ; 0b1000 = Speed 8 ; 0b1001 = Speed 9 ; 0b1010 = Speed 10 ; 0b1011 = Speed 11 ; 0b1100 = Speed 12 ; 0b1101 = Speed 13 ; 0b1110 = Speed 14 ; 0b1111 = Speed 15 (High Speed)
	signals.push('CEA.VehicleData.Bodywork.FrontLeftWindowPosition');			// Enum 	0b0000 = Closed ; 0b0001 = Between closed andmicro-descent ; 0b0010 = Micro-descent ; 0b0011 = Between microdescent and slight opening ; 0b0100 = Slight opening ; 0b0101 = Between slight opening and large mid-opening ; 0b0110 = Large mid-opening ; 0b0111 = Between large midopeningand fully open ; 0b1000 = Fully open ; 0b1001 = Position unknown ; 0b1010 = Invalid
	signals.push('CEA.VehicleData.Bodywork.FrontRightWindowPosition');			// Enum 	"" ""
	signals.push('CEA.VehicleData.Bodywork.RearLeftWindowPosition');			// Enum 	"" ""
	signals.push('CEA.VehicleData.Bodywork.RearRightWindowPosition');			// Enum 	"" ""
	signals.push('CEA.VehicleData.Maintenance.MaintenanceExceed');				// Boolean 	
	signals.push('CEA.VehicleData.Maintenance.Mileage');						// Range 	0 to 1677721,4 km
	signals.push('CEA.VehicleData.Security.DriverBeltFastened');				// Boolean
	signals.push('CEA.VehicleData.ADAS.LeftHandCrossing');						// Boolean 	
	signals.push('CEA.VehicleData.ADAS.RightHandCrossing');						// Boolean 	
	signals.push('CEA.VehicleData.ADAS.TIVTime');								// Range 	0 to 25.3 s
	
	if (value == true){
		// Subscription to the signals used in the game
		console.info("Function - SUBSCRIPTION TO THE SIGNALS...");
		subscribeSignals(signals);
	}else{
		// Unsubscription to the signals used in the game
		console.info("Function - UNSUBSCRIPTION TO THE SIGNALS...");
		unSubscribeSignals(signals);
	}
};
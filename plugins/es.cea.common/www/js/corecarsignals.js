
function CarSignals() {
}

/*
 * Set GPS destination position
 */
CarSignals.VEHICLEDATA_DRIVING_GPS_SET_DESTINATION = 'CEA.VehicleData.Driving.GPS.Set.Destination';

/*
 * Distance left to destination
 */
CarSignals.VEHICLEDATA_NAVIGATION_GPS_DISTANCETODESTINATION = 'CEA.VehicleData.Navigation.GPS.DistanceToDestination';

/*
 * Estimated time to Arrival (ETA)
 */
CarSignals.VEHICLEDATA_NAVIGATION_GPS_ETA = 'CEA.VehicleData.Navigation.GPS.ETA';

/*
 * GPS destination
 */
CarSignals.VEHICLEDATA_NAVIGATION_GPS_DESTINATION = 'CEA.VehicleData.Navigation.GPS.Destination';

/*
 * GPS current position
 */
CarSignals.VEHICLEDATA_NAVIGATION_GPS_CURRENT = 'CEA.VehicleData.Navigation.GPS.Current';

/*
 * Engine speed
 */
CarSignals.VEHICLEDATA_ENGINE_REVOLUTIONS = 'CEA.VehicleData.Engine.Revolutions';

/*
 * Fuel level
 */
CarSignals.VEHICLEDATA_ENGINE_FUELLEVEL = 'CEA.VehicleData.Engine.FuelLevel';

/*
 * KeyCar position
 */
CarSignals.VEHICLEDATA_ENGINE_KEYCARPOSITION = 'CEA.VehicleData.Engine.KeyCarPosition';

/*
 * Fuel Autonomy
 */
CarSignals.VEHICLEDATA_ENGINE_FUELAUTONOMY = 'CEA.VehicleData.Engine.FuelAutonomy';

/*
 * Fuel low alert
 */
CarSignals.VEHICLEDATA_ENGINE_FUELLOWALERTON = 'CEA.VehicleData.Engine.FuelLowAlertOn';

/*
 * Current fuel  consumption
 */
CarSignals.VEHICLEDATA_ENGINE_CURRENTFUELCONSUMPTION = 'CEA.VehicleData.Engine.CurrentFuelConsumption';

/*
 * Engine status
 */
CarSignals.VEHICLEDATA_ENGINE_ENGINESTATUS = 'CEA.VehicleData.Engine.EngineStatus';

/*
 * Trip 2 : Average fuel consumption
 */
CarSignals.VEHICLEDATA_ENGINE_TRIP2AVGFUELCONSUMPTION = 'CEA.VehicleData.Engine.Trip2AvgFuelConsumption';

/*
 * Mileage trip  1
 */
CarSignals.VEHICLEDATA_ENGINE_TRIP2MILEAGE = 'CEA.VehicleData.Engine.Trip2Mileage';

/*
 * Trip 1 : Average fuel consumption
 */
CarSignals.VEHICLEDATA_ENGINE_TRIP1AVGFUELCONSUMPTION = 'CEA.VehicleData.Engine.Trip1AvgFuelConsumption';

/*
 * Mileage trip  1
 */
CarSignals.VEHICLEDATA_ENGINE_TRIP1MILEAGE = 'CEA.VehicleData.Engine.Trip1Mileage';

/*
 * Electric alternator status
 */
CarSignals.VEHICLEDATA_ENGINE_ALTERNATORON = 'CEA.VehicleData.Engine.AlternatorOn';

/*
 * Check car status
 */
CarSignals.VEHICLEDATA_MAINTENANCE_CHECKSTATUS = 'CEA.VehicleData.Maintenance.CheckStatus';

/*
 * Engine oil level
 */
CarSignals.VEHICLEDATA_MAINTENANCE_OILLEVEL = 'CEA.VehicleData.Maintenance.OilLevel';

/*
 * Mileage for next maintenance (If MaintenanceExceed variable is TRUE, it indicates the KM exceed from the recommended revision)
 */
CarSignals.VEHICLEDATA_MAINTENANCE_KMBEFORENEXTMAINTENANCE = 'CEA.VehicleData.Maintenance.KMBeforeNextMaintenance';

/*
 * Maintencance Exceed
 */
CarSignals.VEHICLEDATA_MAINTENANCE_MAINTENANCEEXCEED = 'CEA.VehicleData.Maintenance.MaintenanceExceed';

/*
 * Number of days before next maintenance
 */
CarSignals.VEHICLEDATA_MAINTENANCE_DAYSFORNEXTMAINTENANCE = 'CEA.VehicleData.Maintenance.DaysForNextMaintenance';

/*
 * Recomended maintenance (Dashboard indicator)
 */
CarSignals.VEHICLEDATA_MAINTENANCE_RECOMENDEDMAINTENANCEON = 'CEA.VehicleData.Maintenance.RecomendedMaintenanceOn';

/*
 * Vehicle mileage
 */
CarSignals.VEHICLEDATA_MAINTENANCE_MILEAGE = 'CEA.VehicleData.Maintenance.Mileage';

/*
 * Vehicle dimensions
 */
CarSignals.VEHICLEDATA_CONFIGURATION_HEIGHT = 'CEA.VehicleData.Configuration.Height';

/*
 * Vehicle dimensions
 */
CarSignals.VEHICLEDATA_CONFIGURATION_WIDTH = 'CEA.VehicleData.Configuration.Width';

/*
 * Vehicle dimensions
 */
CarSignals.VEHICLEDATA_CONFIGURATION_LENGTH = 'CEA.VehicleData.Configuration.Length';

/*
 * Vehicle color
 */
CarSignals.VEHICLEDATA_CONFIGURATION_COLOR = 'CEA.VehicleData.Configuration.Color';

/*
 * Vehicle model
 */
CarSignals.VEHICLEDATA_CONFIGURATION_MODEL = 'CEA.VehicleData.Configuration.Model';

/*
 * Vehicle brand
 */
CarSignals.VEHICLEDATA_CONFIGURATION_BRAND = 'CEA.VehicleData.Configuration.Brand';

/*
 * Vehicle type
 */
CarSignals.VEHICLEDATA_CONFIGURATION_CARTYPE = 'CEA.VehicleData.Configuration.CarType';

/*
 * Vehicle Identification Number (VIN)
 */
CarSignals.VEHICLEDATA_CONFIGURATION_VIN = 'CEA.VehicleData.Configuration.VIN';

/*
 * Customization of the unlocking lighting function. When the car is open with the key the lights are switched on
 */
CarSignals.VEHICLEDATA_CONFIGURATION_UNLOCKINGLIGHTINGON = 'CEA.VehicleData.Configuration.UnlockingLightingOn';

/*
 * Time mode, 12h or 24h
 */
CarSignals.VEHICLEDATA_CONFIGURATION_TIMEMODE24HON = 'CEA.VehicleData.Configuration.TimeMode24HOn';

/*
 * Specifies the value of the minute parameter of the clock
 */
CarSignals.VEHICLEDATA_CONFIGURATION_DATEMINUTE = 'CEA.VehicleData.Configuration.DateMinute';

/*
 * Specifies the value of the hour parameter of the clock
 */
CarSignals.VEHICLEDATA_CONFIGURATION_DATEHOUR = 'CEA.VehicleData.Configuration.DateHour';

/*
 * Specifies the value of the day parameter of the clock
 */
CarSignals.VEHICLEDATA_CONFIGURATION_DATEDAY = 'CEA.VehicleData.Configuration.DateDay';

/*
 * Specifies the value of the month parameter of the clock
 */
CarSignals.VEHICLEDATA_CONFIGURATION_DATEMONTH = 'CEA.VehicleData.Configuration.DateMonth';

/*
 * Specifies the value of the year parameter of the clock
 */
CarSignals.VEHICLEDATA_CONFIGURATION_DATEYEAR = 'CEA.VehicleData.Configuration.DateYear';

/*
 * Outside temperature
 */
CarSignals.VEHICLEDATA_EXTENVIRONMENT_TEMPERATURE = 'CEA.VehicleData.ExtEnvironment.Temperature';

/*
 * Air pressure information
 */
CarSignals.VEHICLEDATA_EXTENVIRONMENT_AIRPRESSURE = 'CEA.VehicleData.ExtEnvironment.AirPressure';

/*
 * Vehicle altitude
 */
CarSignals.VEHICLEDATA_EXTENVIRONMENT_ALTITUDE = 'CEA.VehicleData.ExtEnvironment.Altitude';

/*
 * Day/Night status
 */
CarSignals.VEHICLEDATA_EXTENVIRONMENT_NIGHT = 'CEA.VehicleData.ExtEnvironment.Night';

/*
 * Volume unit
 */
CarSignals.VEHICLEDATA_CONFIGURATION_VOLUMEUNIT = 'CEA.VehicleData.Configuration.VolumeUnit';

/*
 * Consumption unit
 */
CarSignals.VEHICLEDATA_CONFIGURATION_CONSUMPTIONUNIT = 'CEA.VehicleData.Configuration.ConsumptionUnit';

/*
 * Distance Unit
 */
CarSignals.VEHICLEDATA_CONFIGURATION_DISTANCEUNIT = 'CEA.VehicleData.Configuration.DistanceUnit';

/*
 * Language
 */
CarSignals.VEHICLEDATA_CONFIGURATION_LANGUAGE = 'CEA.VehicleData.Configuration.Language';

/*
 * Dashboard Brightness level
 */
CarSignals.VEHICLEDATA_CONFIGURATION_DASHBOARDBRIGHTNESSLEVEL = 'CEA.VehicleData.Configuration.DashboardBrightnessLevel';

/*
 * Front right distribution
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_ACFRONTRIGHTDISTRIBUTION = 'CEA.VehicleData.IntEnvironment.ACFrontRightDistribution';

/*
 * Front left distribution
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_ACFRONTLEFTDISTRIBUTION = 'CEA.VehicleData.IntEnvironment.ACFrontLeftDistribution';

/*
 * Air condition speed in Manual Mode
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_ACSPEED = 'CEA.VehicleData.IntEnvironment.ACSpeed';

/*
 * Auto Air recycling mode: on
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_AIRRECYCLINGAUTO = 'CEA.VehicleData.IntEnvironment.AirRecyclingAuto';

/*
 * Force Air recycling mode: on
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_AIRRECYCLINGFORCE = 'CEA.VehicleData.IntEnvironment.AirRecyclingForce';

/*
 * Current values of front right temperature selected
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_ACFRONTRIGHTTEMPERATURE = 'CEA.VehicleData.IntEnvironment.ACFrontRightTemperature';

/*
 * Current Values of front left temperature selected
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_ACFRONTLEFTTEMPERATURE = 'CEA.VehicleData.IntEnvironment.ACFrontLeftTemperature';

/*
 * Status of MONO function. Same temperature for driver and passenger
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_ACFRONTMONOON = 'CEA.VehicleData.IntEnvironment.ACFrontMonoOn';

/*
 * Clear condesation system from the Windshield status
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_ACWINDSHIELDDEFOGGERON = 'CEA.VehicleData.IntEnvironment.ACWindshieldDefoggerOn';

/*
 * Air Conditioner (AC) Level
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_ACLEVEL = 'CEA.VehicleData.IntEnvironment.ACLevel';

/*
 * Air Conditioner (AC) Mode (Manual / Auto / OFF)
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_ACMODE = 'CEA.VehicleData.IntEnvironment.ACMode';

/*
 * Activation of Electrically Heated Rear Window
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_REARHEATEDWINDOWON = 'CEA.VehicleData.IntEnvironment.RearHeatedWindowOn';

/*
 * Status of AC REAR function (locked is when the driver blocks the rear function)
 */
CarSignals.VEHICLEDATA_INTENVIRONMENT_ACREARSTATUS = 'CEA.VehicleData.IntEnvironment.ACRearStatus';

/*
 * Get ID3 Content
 */
CarSignals.VEHICLEDATA_MEDIA_ID3CONTENT = 'CEA.VehicleData.Media.ID3Content';

/*
 * Get Total time of the playing song
 */
CarSignals.VEHICLEDATA_MEDIA_SONGTOTALTIME = 'CEA.VehicleData.Media.SongTotalTime';

/*
 * Get Current Time of the playing song
 */
CarSignals.VEHICLEDATA_MEDIA_SONGCURRENTTIME = 'CEA.VehicleData.Media.SongCurrentTime';

/*
 * Media USB connected
 */
CarSignals.VEHICLEDATA_MEDIA_USBCONNECTED = 'CEA.VehicleData.Media.USBConnected';

/*
 * Get Radio Station Programme Identification (PiCode)
 */
CarSignals.VEHICLEDATA_MEDIA_PICODE = 'CEA.VehicleData.Media.Picode';

/*
 * Get Radio Station extra Text information
 */
CarSignals.VEHICLEDATA_MEDIA_RADIOSTATIONTEXT = 'CEA.VehicleData.Media.RadioStationText';

/*
 * Get Radio Station Name
 */
CarSignals.VEHICLEDATA_MEDIA_RADIOSTATIONNAME = 'CEA.VehicleData.Media.RadioStationName';

/*
 * GET/SET Radio Station Frequency
 */
CarSignals.VEHICLEDATA_MEDIA_RADIOSTATIONFREQUENCY = 'CEA.VehicleData.Media.RadioStationFrequency';

/*
 * Insert new audio input over the current (overlaped)
 */
CarSignals.VEHICLEDATA_MEDIA_ADDAUDIOINPUT = 'CEA.VehicleData.Media.AddAudioInput';

/*
 * Depending on the current Source, PREVIOUS radio_station, song…
 */
CarSignals.VEHICLEDATA_MEDIA_PREVIOUS = 'CEA.VehicleData.Media.Previous';

/*
 * Depending on the current Source, NEXT radio_station, song…
 */
CarSignals.VEHICLEDATA_MEDIA_NEXT = 'CEA.VehicleData.Media.Next';

/*
 * Radio Station Source
 */
CarSignals.VEHICLEDATA_MEDIA_RADIOSTATIONSOURCE = 'CEA.VehicleData.Media.RadioStationSource';

/*
 * Media Bleep play
 */
CarSignals.VEHICLEDATA_MEDIA_BLEEPPLAY = 'CEA.VehicleData.Media.BleepPlay';

/*
 * Media Loudness on
 */
CarSignals.VEHICLEDATA_MEDIA_LOUDNESS = 'CEA.VehicleData.Media.Loudness';

/*
 * Media Fader on
 */
CarSignals.VEHICLEDATA_MEDIA_FADER = 'CEA.VehicleData.Media.Fader';

/*
 * Media Balance status
 */
CarSignals.VEHICLEDATA_MEDIA_BALANCESTATUS = 'CEA.VehicleData.Media.BalanceStatus';

/*
 * Media Ambiance mode
 */
CarSignals.VEHICLEDATA_MEDIA_AMBIANCEMODE = 'CEA.VehicleData.Media.AmbianceMode';

/*
 * Media Treble on
 */
CarSignals.VEHICLEDATA_MEDIA_TREBLE = 'CEA.VehicleData.Media.Treble';

/*
 * Media Bass on
 */
CarSignals.VEHICLEDATA_MEDIA_BASS = 'CEA.VehicleData.Media.Bass';

/*
 * Current sound volume level
 */
CarSignals.VEHICLEDATA_MEDIA_CURRENTVOLUME = 'CEA.VehicleData.Media.CurrentVolume';

/*
 * Media Volume Offset (could be negative)
 */
CarSignals.VEHICLEDATA_MEDIA_VOLUMEOFFSET = 'CEA.VehicleData.Media.VolumeOffSet';

/*
 * Media Mute on
 */
CarSignals.VEHICLEDATA_MEDIA_MUTE = 'CEA.VehicleData.Media.Mute';

/*
 * Blind Spot Monitoring function activation. This function will warn the driver through the side mirror, whenever a car is detected in the blind spot of the side mirror. 
 */
CarSignals.VEHICLEDATA_ADAS_BLINDSPOTMONITORINGON = 'CEA.VehicleData.ADAS.BlindSpotMonitoringOn';

/*
 * Lights sensor ordering the switch from low beam to full beam (or vice-versa)
 */
CarSignals.VEHICLEDATA_ADAS_AUTOROADLAMPSWITHCHINGSTATUS = 'CEA.VehicleData.ADAS.AutoRoadLampSwithchingStatus';

/*
 * Automatically switching Full beam to low beam lamps whenever another car is detected with the windshield camera. 
 */
CarSignals.VEHICLEDATA_ADAS_AUTOROADLAMPSWITHCHINGON = 'CEA.VehicleData.ADAS.AutoRoadLampSwithchingOn';

/*
 * Threshold Alert for crash risk in seconds. (ARC: Alert Risk CRASHHHHHHHHHHHHHHHHHHHHHHHHHHHHH)
 */
CarSignals.VEHICLEDATA_ADAS_ARCTHRESHOLD = 'CEA.VehicleData.ADAS.ARCThreshold';

/*
 * Current TIV  (Time Inter Vehicles) in seconds
 */
CarSignals.VEHICLEDATA_ADAS_TIVTIME = 'CEA.VehicleData.ADAS.TIVTime';

/*
 * Obstacle visual distance (parking sensor) front right
 */
CarSignals.VEHICLEDATA_ADAS_PARKINGSENSORSFRONTRIGHTDISTANCE = 'CEA.VehicleData.ADAS.ParkingSensorsFrontRightDistance';

/*
 * Obstacle visual distance (parking sensor) front center
 */
CarSignals.VEHICLEDATA_ADAS_PARKINGSENSORSFRONTMIDDLEDISTANCE = 'CEA.VehicleData.ADAS.ParkingSensorsFrontMiddleDistance';

/*
 * Obstacle visual distance (parking sensor) front left
 */
CarSignals.VEHICLEDATA_ADAS_PARKINGSENSORSFRONTLEFTDISTANCE = 'CEA.VehicleData.ADAS.ParkingSensorsFrontLeftDistance';

/*
 * Obstacle visual distance (parking sensor) rear right
 */
CarSignals.VEHICLEDATA_ADAS_PARKINGSENSORSREARRIGHTDISTANCE = 'CEA.VehicleData.ADAS.ParkingSensorsRearRightDistance';

/*
 * Obstacle visual distance (parking sensor) rear center
 */
CarSignals.VEHICLEDATA_ADAS_PARKINGSENSORSREARMIDDLEDISTANCE = 'CEA.VehicleData.ADAS.ParkingSensorsRearMiddleDistance';

/*
 * Obstacle visual distance (parking sensor) rear left
 */
CarSignals.VEHICLEDATA_ADAS_PARKINGSENSORSREARLEFTDISTANCE = 'CEA.VehicleData.ADAS.ParkingSensorsRearLeftDistance';

/*
 * Electronic Stability Control (ESC) is Working
 */
CarSignals.VEHICLEDATA_SECURITY_ESCISWORKING = 'CEA.VehicleData.Security.ESCisWorking';

/*
 * Electronic Stability Control (ESC) Inhibition status
 */
CarSignals.VEHICLEDATA_SECURITY_ESCINHIBITION = 'CEA.VehicleData.Security.ESCInhibition';

/*
 * Crash info detected
 */
CarSignals.VEHICLEDATA_SECURITY_AIRBAGCRASHINFODETECTED = 'CEA.VehicleData.Security.AirbagCrashInfoDetected';

/*
 * Passenger airbag inhibited status
 */
CarSignals.VEHICLEDATA_SECURITY_PASSENGERAIRBAGINHIBITED = 'CEA.VehicleData.Security.PassengerAirbagInhibited';

/*
 * State of row 1 rear right belt 
 */
CarSignals.VEHICLEDATA_SECURITY_R1REARRIGHTBELTFASTENED = 'CEA.VehicleData.Security.R1RearRightBeltFastened';

/*
 * State of row 1 rear center belt 
 */
CarSignals.VEHICLEDATA_SECURITY_R1REARCENTERBELTFASTENED = 'CEA.VehicleData.Security.R1RearCenterBeltFastened';

/*
 * State of row 1 rear left belt 
 */
CarSignals.VEHICLEDATA_SECURITY_R1REARLEFTBELTFASTENED = 'CEA.VehicleData.Security.R1RearLeftBeltFastened';

/*
 * State of passenger's seat belt
 */
CarSignals.VEHICLEDATA_SECURITY_PASSENGERBELTFASTENED = 'CEA.VehicleData.Security.PassengerBeltFastened';

/*
 * State of driver's seat belt
 */
CarSignals.VEHICLEDATA_SECURITY_DRIVERBELTFASTENED = 'CEA.VehicleData.Security.DriverBeltFastened';

/*
 * Position of the Rear Right window
 */
CarSignals.VEHICLEDATA_BODYWORK_REARRIGHTWINDOWPOSITION = 'CEA.VehicleData.Bodywork.RearRightWindowPosition';

/*
 * Position of the Rear Left window
 */
CarSignals.VEHICLEDATA_BODYWORK_REARLEFTWINDOWPOSITION = 'CEA.VehicleData.Bodywork.RearLeftWindowPosition';

/*
 * Position of the Front Right  window
 */
CarSignals.VEHICLEDATA_BODYWORK_FRONTRIGHTWINDOWPOSITION = 'CEA.VehicleData.Bodywork.FrontRightWindowPosition';

/*
 * Position of the Front Left window
 */
CarSignals.VEHICLEDATA_BODYWORK_FRONTLEFTWINDOWPOSITION = 'CEA.VehicleData.Bodywork.FrontLeftWindowPosition';

/*
 * Trunk open
 */
CarSignals.VEHICLEDATA_BODYWORK_TRUNKOPEN = 'CEA.VehicleData.Bodywork.TrunkOpen';

/*
 * Hood open
 */
CarSignals.VEHICLEDATA_BODYWORK_HOODOPEN = 'CEA.VehicleData.Bodywork.HoodOpen';

/*
 * Front Left door open
 */
CarSignals.VEHICLEDATA_BODYWORK_FRONTLEFTDOOROPEN = 'CEA.VehicleData.Bodywork.FrontLeftDoorOpen';

/*
 * Front Right door open
 */
CarSignals.VEHICLEDATA_BODYWORK_FRONTRIGHTDOOROPEN = 'CEA.VehicleData.Bodywork.FrontRightDoorOpen';

/*
 * Rear Right door open
 */
CarSignals.VEHICLEDATA_BODYWORK_REARRIGHTDOOROPEN = 'CEA.VehicleData.Bodywork.RearRightDoorOpen';

/*
 * Rear left  door open
 */
CarSignals.VEHICLEDATA_BODYWORK_REARLEFTDOOROPEN = 'CEA.VehicleData.Bodywork.RearLeftDoorOpen';

/*
 * Lamp On when any car door is open 
 */
CarSignals.VEHICLEDATA_BODYWORK_OPENDOORLAMPON = 'CEA.VehicleData.Bodywork.OpenDoorLampOn';

/*
 * Status of the rear doors child safety function
 */
CarSignals.VEHICLEDATA_BODYWORK_DOORCHILDSAFETYON = 'CEA.VehicleData.Bodywork.DoorChildsafetyOn';

/*
 * Status of the automatic Door locking function
 */
CarSignals.VEHICLEDATA_BODYWORK_AUTODOORLOCKINGON = 'CEA.VehicleData.Bodywork.AutoDoorLockingOn';

/*
 * Wiper sweep speed
 */
CarSignals.VEHICLEDATA_BODYWORK_WIPERSPEED = 'CEA.VehicleData.Bodywork.WiperSpeed';

/*
 * Window wiper status
 */
CarSignals.VEHICLEDATA_BODYWORK_WIPERSTATUS = 'CEA.VehicleData.Bodywork.WiperStatus';

/*
 * Side mirror automatically aims down when the rear gear is activited (IMA). Status of the function
 */
CarSignals.VEHICLEDATA_BODYWORK_SIDEMIRRORAUTOAIMDOWNON = 'CEA.VehicleData.Bodywork.SideMirrorAutoAimDownOn';

/*
 * Status of  automatic folding function for the  side mirrors
 */
CarSignals.VEHICLEDATA_BODYWORK_SIDEMIRRORFOLDINGFUNCTIONON = 'CEA.VehicleData.Bodywork.SideMirrorFoldingFunctionOn';

/*
 * Daytime lamp activation not depending on external lighting conditions
 */
CarSignals.VEHICLEDATA_DRIVING_LAMPSDAYTIMEACTIVATION = 'CEA.VehicleData.Driving.LampsDaytimeActivation';

/*
 * Horn status activated
 */
CarSignals.VEHICLEDATA_DRIVINGHORNACTIVATED = 'CEA.VehicleData.DrivingHornActivated';

/*
 * Acceleration Driver request in %
 */
CarSignals.VEHICLEDATA_DRIVING_THROTTLEPEDALLEVEL = 'CEA.VehicleData.Driving.ThrottlePedalLevel';

/*
 * Break pedal activated
 */
CarSignals.VEHICLEDATA_DRIVING_BREAKPEDAL = 'CEA.VehicleData.Driving.BreakPedal';

/*
 * "Daytime" lamp on
 */
CarSignals.VEHICLEDATA_DRIVING_LAMPSDAYTIMEON = 'CEA.VehicleData.Driving.LampsDaytimeOn';

/*
 * Left indicator lamp activated
 */
CarSignals.VEHICLEDATA_DRIVING_LAMPSTURNINDICATORLEFTACTIVATED = 'CEA.VehicleData.Driving.LampsTurnIndicatorLeftActivated';

/*
 * Right indicator lamp activated
 */
CarSignals.VEHICLEDATA_DRIVING_LAMPSTURNINDICATORRIGHTACTIVATED = 'CEA.VehicleData.Driving.LampsTurnIndicatorRightActivated';

/*
 * Rear fog lamp status
 */
CarSignals.VEHICLEDATA_DRIVING_LAMPSREARFOGON = 'CEA.VehicleData.Driving.LampsRearFogOn';

/*
 * Front fog lamp status
 */
CarSignals.VEHICLEDATA_DRIVING_LAMPSFRONTFOGON = 'CEA.VehicleData.Driving.LampsFrontFogOn';

/*
 * Full beam status
 */
CarSignals.VEHICLEDATA_DRIVING_LAMPSFULLBEAMON = 'CEA.VehicleData.Driving.LampsFullBeamOn';

/*
 * Low beam status
 */
CarSignals.VEHICLEDATA_DRIVING_LAMPSLOWBEAMON = 'CEA.VehicleData.Driving.LampsLowBeamOn';

/*
 * Position lamps status
 */
CarSignals.VEHICLEDATA_DRIVING_LAMPSPOSITIONON = 'CEA.VehicleData.Driving.LampsPositionOn';

/*
 * Parking brake activated
 */
CarSignals.VEHICLEDATA_DRIVING_PARKINGBRAKEON = 'CEA.VehicleData.Driving.ParkingBrakeOn';

/*
 * Steering wheel position (Left/Right)
 */
CarSignals.VEHICLEDATA_DRIVING_STEERINGWHEELPOSITION = 'CEA.VehicleData.Driving.SteeringWheelPosition';

/*
 * Steering wheel rotation direction clockwise if true, false counterclockwise
 */
CarSignals.VEHICLEDATA_DRIVING_STEERINGWHEELROTATIONDIRECTIONCLOCKWISE = 'CEA.VehicleData.Driving.SteeringWheelRotationDirectionClockwise';

/*
 * Steering wheel rotation speed in degrees per second
 */
CarSignals.VEHICLEDATA_DRIVING_STEERINGWHEELROTATIONSPEED = 'CEA.VehicleData.Driving.SteeringWheelRotationSpeed';

/*
 * Steering wheel angle
 */
CarSignals.VEHICLEDATA_DRIVING_STEERINGWHEELANGLE = 'CEA.VehicleData.Driving.SteeringWheelAngle';

/*
 * Reverse gear status
 */
CarSignals.VEHICLEDATA_DRIVING_GEARBOXREVERSEGEARON = 'CEA.VehicleData.Driving.GearboxReverseGearOn';

/*
 * Selection of  gearbox mode
 */
CarSignals.VEHICLEDATA_DRIVING_GEARBOXMODE = 'CEA.VehicleData.Driving.GearboxMode';

/*
 * Recommended gear indicator
 */
CarSignals.VEHICLEDATA_DRIVING_RECOMMENDEDGEAR = 'CEA.VehicleData.Driving.RecommendedGear';

/*
 * Current gear  engaged
 */
CarSignals.VEHICLEDATA_DRIVING_CURRENTGEAR = 'CEA.VehicleData.Driving.CurrentGear';

/*
 * Reset trip  2
 */
CarSignals.VEHICLEDATA_SPEED_TRIP2RESET = 'CEA.VehicleData.Speed.Trip2Reset';

/*
 * Reset trip  1
 */
CarSignals.VEHICLEDATA_SPEED_TRIP1RESET = 'CEA.VehicleData.Speed.Trip1Reset';

/*
 * Trip 2: Average speed
 */
CarSignals.VEHICLEDATA_SPEED_TRIP2AVERAGESPEED = 'CEA.VehicleData.Speed.Trip2AverageSpeed';

/*
 * Trip 1: Average speed
 */
CarSignals.VEHICLEDATA_SPEED_TRIP1AVERAGESPEED = 'CEA.VehicleData.Speed.Trip1AverageSpeed';

/*
 * Cruise control, speed memory 6
 */
CarSignals.VEHICLEDATA_SPEED_CRUISECONTROLMEM6 = 'CEA.VehicleData.Speed.CruiseControlMem6';

/*
 * Cruise control, speed memory 5
 */
CarSignals.VEHICLEDATA_SPEED_CRUISECONTROLMEM5 = 'CEA.VehicleData.Speed.CruiseControlMem5';

/*
 * Cruise control, speed memory 4
 */
CarSignals.VEHICLEDATA_SPEED_CRUISECONTROLMEM4 = 'CEA.VehicleData.Speed.CruiseControlMem4';

/*
 * Cruise control, speed memory 3
 */
CarSignals.VEHICLEDATA_SPEED_CRUISECONTROLMEM3 = 'CEA.VehicleData.Speed.CruiseControlMem3';

/*
 * Cruise control, speed memory 2
 */
CarSignals.VEHICLEDATA_SPEED_CRUISECONTROLMEM2 = 'CEA.VehicleData.Speed.CruiseControlMem2';

/*
 * Cruise control, speed memory 1
 */
CarSignals.VEHICLEDATA_SPEED_CRUISECONTROLMEM1 = 'CEA.VehicleData.Speed.CruiseControlMem1';

/*
 * Speed limitator, memory 6 speed limit
 */
CarSignals.VEHICLEDATA_SPEED_SPEEDLIMITMEM6 = 'CEA.VehicleData.Speed.SpeedLimitMem6';

/*
 * Speed limitator, memory 5 speed limit
 */
CarSignals.VEHICLEDATA_SPEED_SPEEDLIMITMEM5 = 'CEA.VehicleData.Speed.SpeedLimitMem5';

/*
 * Speed limitator, memory 4 speed limit
 */
CarSignals.VEHICLEDATA_SPEED_SPEEDLIMITMEM4 = 'CEA.VehicleData.Speed.SpeedLimitMem4';

/*
 * Speed limitator, memory 3 speed limit
 */
CarSignals.VEHICLEDATA_SPEED_SPEEDLIMITMEM3 = 'CEA.VehicleData.Speed.SpeedLimitMem3';

/*
 * Speed limitator, memory 2 speed limit
 */
CarSignals.VEHICLEDATA_SPEED_SPEEDLIMITMEM2 = 'CEA.VehicleData.Speed.SpeedLimitMem2';

/*
 * Speed limitator, memory 1 speed limit
 */
CarSignals.VEHICLEDATA_SPEED_SPEEDLIMITMEM1 = 'CEA.VehicleData.Speed.SpeedLimitMem1';

/*
 * Status of the active cruise or limit function
 */
CarSignals.VEHICLEDATA_SPEED_CONTROLTYPESTATUS = 'CEA.VehicleData.Speed.ControlTypeStatus';

/*
 * Selection of the Cruise, Limit or change way alert?? active function
 */
CarSignals.VEHICLEDATA_SPEED_CONTROLTYPE = 'CEA.VehicleData.Speed.ControlType';

/*
 * Instant vehicle speed
 */
CarSignals.VEHICLEDATA_SPEED_INSTANTSPEED = 'CEA.VehicleData.Speed.InstantSpeed';


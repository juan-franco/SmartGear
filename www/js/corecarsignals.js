/**
* Car signals list
* 
* @constructor
*/
/**
* Car signals list
*
* @constructor
*/
function CarSignals() {
}

/**
*	Bodywork signals
* @constructor
*/
CarSignals.Bodywork = function() {
}

/**
*	Configuration signals
* @constructor
*/
CarSignals.Configuration = function() {
}

/**
 *	Driving signals
 * @constructor
 */
CarSignals.Driving = function() {
	}
 /**
 * Engine signals
 * @constructor
 */
 CarSignals.Engine = function() {
 }

 /**
 * External Environment signals
 * @constructor
 */
 CarSignals.ExternalEnvironment = function() {
 }

 /**
 * Internal Environment signals
 * @constructor
 */
 CarSignals.InternalEnvironment = function() {
 }

 /**
 * Maintenance signals
 * @constructor
 */
 CarSignals.Maintenance = function() {
 }

 /**
 * Media signals
 * @constructor
 */
 CarSignals.Media = function() {
 }

 /**
 * Navigation signals
 * @constructor
 */
 CarSignals.Navigation = function() {
 }

 /**
 * Security signals
 * @constructor
 */
 CarSignals.Security = function() {
 }

 /**
 * ADAS signals
 * @constructor
 */
 CarSignals.ADAS = function() {
 }

 /**
 * Speed signals
 * @constructor
 */
 CarSignals.Speed = function() {
 }


/**
 * Flat tire sensor
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.ADAS.FLAT_TIRE = 'CEA.VehicleData.ADAS.FlatTire';

/**
 * NOX air polution level
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-8<br>Resolution : 0.4<br>Offset : 0 %<br>Min : 0 %<br>Max : 100 %<br>Invalide : 0xFFF<br>Unite : %
 */
CarSignals.ExternalEnvironment.NOX_LEVEL = 'CEA.VehicleData.ExtEnvironment.NOXLevel';

/**
 * CO air polution level
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-8<br>Resolution : 0.4<br>Offset : 0 %<br>Min : 0 %<br>Max : 100 %<br>Invalide : 0xFFF<br>Unite : %
 */
CarSignals.ExternalEnvironment.CO_LEVEL = 'CEA.VehicleData.ExtEnvironment.COLevel';

/**
 * Abnormal left-hand crossing
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.ADAS.LEFT_HAND_CROSSING = 'CEA.VehicleData.ADAS.LeftHandCrossing';

/**
 * Abnormal right-hand crossing
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.ADAS.RIGHT_HAND_CROSSING = 'CEA.VehicleData.ADAS.RightHandCrossing';

/**
 * Calculated engine load value
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 0 %<br>Min : 0 %<br>Max : 255 %<br>Invalide : 0xFFF<br>Unite : %
 */
CarSignals.Engine.ENGINE_LOAD_VALUE = 'CEA.VehicleData.Engine.EngineLoadValue';

/**
 * Engine coolant temperature
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : -40 ºC<br>Min : -40 ºC<br>Max : 215 ºC<br>Invalide : 0xFFF<br>Unite : ºC<br>
 */
CarSignals.Engine.ENGINE_COLLANT_TEMP = 'CEA.VehicleData.Engine.EngineCollantTemp';

/**
 * Intake manifold absolute pressure
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 0 kPaA<br>Min : 0 kPaA<br>Max : 255 kPaA<br>Invalide : 0xFFF<br>Unite : kPaA
 */
CarSignals.Engine.INTAKE_PRESSURE = 'CEA.VehicleData.Engine.IntakePressure';

/**
 * Intake air temperature
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : -40 ºC<br>Min : -40 ºC<br>Max : 215 ºC<br>Invalide : 0xFFF<br>Unite : ºC<br>
 */
CarSignals.Engine.INTAKE_AIR_TEMP = 'CEA.VehicleData.Engine.IntakeAirTemp';

/**
 * MAF air flow rate
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>Resolution : 0,01 g/s<br>Offset : 0,01 g/s<br>Min : 0 g/s<br>Max : 655,35 g/s<br>Invalide : 0xFFF<br>Unite : g/s<br>
 */
CarSignals.ExternalEnvironment.MAF_AIR = 'CEA.VehicleData.ExtEnvironment.MAFAir';

/**
 * Blind Spot Monitoring working real time. Right Side. It means that there is a car in the blind spot of the vehicle
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.ADAS.BLIND_SPOT_MONITORING_WORKING_RIGHT = 'CEA.VehicleData.ADAS.BlindSpotMonitoringWorkingRight';

/**
 * Blind Spot Monitoring function state. 
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.ADAS.BLIND_SPOT_MONITORING_FUNCTION = 'CEA.VehicleData.ADAS.BlindSpotMonitoringFunction';

/**
 * Brake pedal pressure
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-12<br>Resolution : 0.1<br>Offset : -55 Bar<br>Min : -55 Bar<br>Max : 354.4 Bar<br>Invalide : 0xFFF<br><br>
 */
CarSignals.Driving.BRAKE_PEDAL_PRESSURE = 'CEA.VehicleData.Driving.BrakePedalPressure';

/**
 * Configurable driver button. It could be used for any purpose where we want the driver to start an action, give a on/off interaction, etc. 
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Configuration.DRIVER_BUTTON_PUSH = 'CEA.VehicleData.Configuration.DriverButtonPush';

/**
 * Blind Spot Monitoring working real time. Left Side. It means that there is a car in the blind spot of the vehicle
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.ADAS.BLIND_SPOT_MONITORING_WORKING_LEFT = 'CEA.VehicleData.ADAS.BlindSpotMonitoringWorkingLeft';

/**
 * Status of vehicle locking
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0b000 = Invalid<br>0b001 = Locked<br>0b010 = Superlocked<br>0b011 = Unlocked<br>0b100 = Driver unlocked<br>0b101 = Cab unlocked<br>0b110 = Loading zone unlocked<br>0b111 = Invalid
 */
CarSignals.Bodywork.DOOR_LOCKING = 'CEA.VehicleData.Bodywork.DoorLocking';

/**
 * Distance left to destination
 *
 * <br><b>Writing Signal:</b> no
 */
CarSignals.Navigation.GPS_DISTANCE_TO_DESTINATION = 'CEA.VehicleData.Navigation.GPS.DistanceToDestination';

/**
 * Estimated time to Arrival (ETA)
 *
 * <br><b>Writing Signal:</b> no
 */
CarSignals.Navigation.GPS_ETA = 'CEA.VehicleData.Navigation.GPS.ETA';

/**
 * GPS destination
 *
 * <br><b>Writing Signal:</b> yes
 */
CarSignals.Navigation.GPS_DESTINATION = 'CEA.VehicleData.Navigation.GPS.Destination';

/**
 * GPS current position
 *
 * <br><b>Writing Signal:</b> no
 */
CarSignals.Navigation.GPS_CURRENT = 'CEA.VehicleData.Navigation.GPS.Current';

/**
 * Engine speed
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-16<br>Resolution : 0.125<br>Offset : 0 RPM<br>Min : 0 RPM<br>Max : 8191,75 RPM<br>Invalide : 0xFFFF<br>Unite : RPM
 */
CarSignals.Engine.REVOLUTIONS = 'CEA.VehicleData.Engine.Revolutions';

/**
 * Fuel level
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>Level of fuel filtered<br>UNM-8<br>Resolution : 1<br>Offset : 0 %<br>Min : 0 %<br>Max : 100 %<br>Invalide : 0xFF<br>Unite : %
 */
CarSignals.Engine.FUEL_LEVEL = 'CEA.VehicleData.Engine.FuelLevel';

/**
 * KeyCar position
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b00 = Stop<br>0b01 = Contact<br>0b10 = Starting<br>0b11 = Free
 */
CarSignals.Engine.KEY_CAR_POSITION = 'CEA.VehicleData.Engine.KeyCarPosition';

/**
 * Fuel Autonomy
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-16<br>Resolution : 1<br>Offset : 0 km<br>Min : 0 km<br>Max : 2000 km<br>Invalide : 0xFFFF<br>Unite : km
 */
CarSignals.Engine.FUEL_AUTONOMY = 'CEA.VehicleData.Engine.FuelAutonomy';

/**
 * Fuel low alert
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Engine.FUEL_LOW_ALERT_ON = 'CEA.VehicleData.Engine.FuelLowAlertOn';

/**
 * Current fuel  consumption
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-16<br>Resolution : 0.1<br>Offset : 0 l/100 km<br>Min : 0 l/100 km<br>Max : 30 l/100 km<br>Invalide : 0xFFFF<br>Unite : l/100 km
 */
CarSignals.Engine.CURRENT_FUEL_CONSUMPTION = 'CEA.VehicleData.Engine.CurrentFuelConsumption';

/**
 * Engine status
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b00 = Engine not running<br>0b01 = Starting<br>0b10 = Engine running<br>0b11 = Engine stopped in stop phase
 */
CarSignals.Engine.ENGINE_STATUS = 'CEA.VehicleData.Engine.EngineStatus';

/**
 * Trip 2 : Average fuel consumption
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-16<br>Resolution : 0.1<br>Offset : 0 l/100 km<br>Min : 0 l/100 km<br>Max : 30 l/100 km<br>Invalide : 0xFFFF<br>Unite : l/100 km
 */
CarSignals.Engine.TRIP_2_AVG_FUEL_CONSUMPTION = 'CEA.VehicleData.Engine.Trip2AvgFuelConsumption';

/**
 * Mileage trip  1
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-16<br>Resolution : 1<br>Offset : 0 km<br>Min : 0 km<br>Max : 50000 km<br>Invalide : 0xFFFF<br>Unite : km
 */
CarSignals.Engine.TRIP_2_MILEAGE = 'CEA.VehicleData.Engine.Trip2Mileage';

/**
 * Trip 1 : Average fuel consumption
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-16<br>Resolution : 0.1<br>Offset : 0 l/100 km<br>Min : 0 l/100 km<br>Max : 30 l/100 km<br>Invalide : 0xFFFF<br>Unite : l/100 km
 */
CarSignals.Engine.TRIP_1_AVG_FUEL_CONSUMPTION = 'CEA.VehicleData.Engine.Trip1AvgFuelConsumption';

/**
 * Mileage trip  1
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-16<br>Resolution : 1<br>Offset : 0 km<br>Min : 0 km<br>Max : 50000 km<br>Invalide : 0xFFFF<br>Unite : km
 */
CarSignals.Engine.TRIP_1_MILEAGE = 'CEA.VehicleData.Engine.Trip1Mileage';

/**
 * Electric alternator status
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Engine.ALTERNATOR_ON = 'CEA.VehicleData.Engine.AlternatorOn';

/**
 * Check car status
 *
 * <br><br><b>Data Type:</b> Text
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>Text
 */
CarSignals.Maintenance.CHECK_STATUS = 'CEA.VehicleData.Maintenance.CheckStatus';

/**
 * Engine oil level
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 0 %<br>Min : 0 %<br>Max : 250 %<br>Invalide : 0xFF<br>Units : %  If rate exceeds 100%, to allow overtake, indicate the maximum oil level.<br>"0xFE code current measurement".<br>"0xFD code measure oil level not effected"<br>"0xFC code a non-OK indeterminate oil level" <br> "0xFB code an oil level OK indeterminate"
 */
CarSignals.Maintenance.OIL_LEVEL = 'CEA.VehicleData.Maintenance.OilLevel';

/**
 * Mileage for next maintenance (If MaintenanceExceed variable is TRUE, it indicates the KM exceed from the recommended revision)
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-16<br>Resolution : 20<br>Offset : 0 km<br>Min : 0 km<br>Max : 140000 km<br>Invalide : 0xFFFF<br>Unite : km
 */
CarSignals.Maintenance.K_M_BEFORE_NEXT_MAINTENANCE = 'CEA.VehicleData.Maintenance.KMBeforeNextMaintenance';

/**
 * Maintencance Exceed, it indicates the sign of the KM before maintenance. -(negative) is for MaintenanceExceeded. +(positive) is for before Maintenance (related with the signal: KMBeforeNextMaintenance)
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Maintenance.MAINTENANCE_EXCEED = 'CEA.VehicleData.Maintenance.MaintenanceExceed';

/**
 * Number of days before next maintenance
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-12<br>Resolution : 1<br>Offset : 0 day<br>Min : 0 day<br>Max : 730 days<br>Invalide : 0xFFF<br>Unite : days
 */
CarSignals.Maintenance.DAYS_FOR_NEXT_MAINTENANCE = 'CEA.VehicleData.Maintenance.DaysForNextMaintenance';

/**
 * Recomended maintenance (Dashboard indicator)
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Maintenance.RECOMENDED_MAINTENANCE_ON = 'CEA.VehicleData.Maintenance.RecomendedMaintenanceOn';

/**
 * Vehicle mileage
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>Resolution : 0.1<br>Offset : 0 km<br>Min : 0 km<br>Max : 1677721,4 km<br>Invalide : 0xFFFFFF<br>Unite : km
 */
CarSignals.Maintenance.MILEAGE = 'CEA.VehicleData.Maintenance.Mileage';

/**
 * Vehicle dimensions
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 */
CarSignals.Configuration.HEIGHT = 'CEA.VehicleData.Configuration.Height';

/**
 * Vehicle dimensions
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 */
CarSignals.Configuration.WIDTH = 'CEA.VehicleData.Configuration.Width';

/**
 * Vehicle dimensions
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 */
CarSignals.Configuration.LENGTH = 'CEA.VehicleData.Configuration.Length';

/**
 * Vehicle color
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 */
CarSignals.Configuration.COLOR = 'CEA.VehicleData.Configuration.Color';

/**
 * Vehicle model
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 */
CarSignals.Configuration.MODEL = 'CEA.VehicleData.Configuration.Model';

/**
 * Vehicle brand
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 */
CarSignals.Configuration.BRAND = 'CEA.VehicleData.Configuration.Brand';

/**
 * Vehicle type
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 */
CarSignals.Configuration.CAR_TYPE = 'CEA.VehicleData.Configuration.CarType';

/**
 * Vehicle Identification Number (VIN)
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>text
 */
CarSignals.Configuration.VIN = 'CEA.VehicleData.Configuration.VIN';

/**
 * Customization of the unlocking lighting function. When the car is open with the key the lights are switched on
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Configuration.UNLOCKING_LIGHTING_ON = 'CEA.VehicleData.Configuration.UnlockingLightingOn';

/**
 * Time mode, 12h or 24h
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Configuration.TIME_MODE_24H_ON = 'CEA.VehicleData.Configuration.TimeMode24HOn';

/**
 * Specifies the value of the minute parameter of the clock
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 0 minute(s)<br>Min : 0 minute(s)<br>Max : 59 minute(s)<br>Invalide : 0x3F<br>Unite : minute(s)
 */
CarSignals.Configuration.DATE_MINUTE = 'CEA.VehicleData.Configuration.DateMinute';

/**
 * Specifies the value of the hour parameter of the clock
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 0 hour(s)<br>Min : 0 hour(s)<br>Max : 23 hour(s)<br>Invalide : 0x1F<br>Unite : hour(s)
 */
CarSignals.Configuration.DATE_HOUR = 'CEA.VehicleData.Configuration.DateHour';

/**
 * Specifies the value of the day parameter of the clock
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 0 day(s)<br>Min : 1 day(s)<br>Max : 31 day(s)<br>Invalide : 0x3F<br>Unite : day(s)
 */
CarSignals.Configuration.DATE_DAY = 'CEA.VehicleData.Configuration.DateDay';

/**
 * Specifies the value of the month parameter of the clock
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0b0000 = Value not used <br>0b0001 = January<br>0b0010 = February<br>0b0011 = March<br>0b0100 = April<br>0b0101 = May<br>0b0110 = June<br>0b0111 = July<br>0b1000 = August<br>0b1001 = September<br>0b1010 = October<br>0b1011 = November<br>0b1100 = December<br>0b1101 = Value not used <br>0b1110 = Unavailable<br>0b1111 = Invalid
 */
CarSignals.Configuration.DATE_MONTH = 'CEA.VehicleData.Configuration.DateMonth';

/**
 * Specifies the value of the year parameter of the clock
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 2000 years(s)<br>Min : 0 year(s)<br>Max : 125 year(s)<br>Invalide : 0x7F<br>Unite : year(s)
 */
CarSignals.Configuration.DATE_YEAR = 'CEA.VehicleData.Configuration.DateYear';

/**
 * Outside temperature
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-8<br>Resolution : 0.5<br>Offset : -40<br>Min : -40<br>Max : 85<br>Invalide : 0xFF<br>Unite :<br>Commentaires :<br>T = N/2 - 40, resolution 0,5<br>T = N/2 - 40, resolution 0.5
 */
CarSignals.ExternalEnvironment.TEMPERATURE = 'CEA.VehicleData.ExtEnvironment.Temperature';

/**
 * Air pressure information
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-5<br>Resolution : 15<br>Offset : 685 hPa<br>Min : 685 hPa<br>Max : 1120 hPa<br>Invalide : 0x1F<br>Unite : hPa<br>Exemple :<br>N= 20 => Info_pression_atmos = (N* 15) + 685 = 985 hPa<br>N= 20 => Info_pression_atmos = (N* 15) + 685 = 985 hPa
 */
CarSignals.ExternalEnvironment.AIR_PRESSURE = 'CEA.VehicleData.ExtEnvironment.AirPressure';

/**
 * Vehicle altitude
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-14<br>Resolution : 1<br>Offset : -999<br>Min : -999<br>Max : 15383<br>Invalide : 0x3FFF<br>Unite :<br>Exemple :<br>ALT = N*1 - 999<br>ALT = N*1 - 999
 */
CarSignals.ExternalEnvironment.ALTITUDE = 'CEA.VehicleData.ExtEnvironment.Altitude';

/**
 * Day/Night status
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.ExternalEnvironment.NIGHT = 'CEA.VehicleData.ExtEnvironment.Night';

/**
 * Volume unit
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0= Litre<br>1= Gallon
 */
CarSignals.Configuration.VOLUME_UNIT = 'CEA.VehicleData.Configuration.VolumeUnit';

/**
 * Consumption unit
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0= Volume for 100 units distance (e.g. 1/100 km)<br>1= Distance per volume unit (e.g. mpg, km/l)
 */
CarSignals.Configuration.CONSUMPTION_UNIT = 'CEA.VehicleData.Configuration.ConsumptionUnit';

/**
 * Distance Unit
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0= Km<br>1= Miles
 */
CarSignals.Configuration.DISTANCE_UNIT = 'CEA.VehicleData.Configuration.DistanceUnit';

/**
 * Language
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0b00000 = French<br>0b00001 = English<br>0b00010 = German<br>0b00011 = Spanish<br>0b00100 = Italian<br>0b00101 = Portuguese<br>0b00110 = Dutch<br>0b00111 = Greek<br>0b01000 = Brazilian Portuguese<br>0b01001 = Polish<br>0b01010 = Traditional Chinese<br>0b01011 = Simplified Chinese<br>0b01100 = Turkish<br>0b01101 = Japanese<br>0b01110 = Russian<br>0b01111 = Czech<br>0b10000 = Croat<br>0b10001 = Hungarian<br>0b10010 = Arab<br>0b10011 = Bulgarian<br>0b10100 = Korean<br>0b10101 = Danish<br>0b10110 = Estonian<br>0b10111 = Farsi<br>0b11000 = Finnish<br>0b11001 = Hebrew<br>0b11010 = Norwegian<br>0b11011 = Rumanian<br>0b11100 = Serbian<br>0b11101 = Swedish<br>0b11110 = Ukrainian<br>0b11111 = Vietnamese
 */
CarSignals.Configuration.LANGUAGE = 'CEA.VehicleData.Configuration.Language';

/**
 * Dashboard Brightness level
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-4<br>Resolution : 1<br>Offset : 0 <br>Min : 0 <br>Max : 15 <br>Invalide : <br>Unite : 
 */
CarSignals.Configuration.DASHBOARD_BRIGHTNESS_LEVEL = 'CEA.VehicleData.Configuration.DashboardBrightnessLevel';

/**
 * Front right distribution
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0b0000 = Auto Comfort<br>0b0001 = Auto Visibility<br>0b0010 = Foot<br>0b0011 = Ventilation<br>0b0100 = Defrosting<br>0b0101 = Foot ventilation<br>0b0110 = Foot defrosting<br>0b0111 = Ventilation Defrosting<br>0b1000 = Foot Ventilation Defrosting<br>0b1001 = Defrosting different<br>0b1010 = Not used<br>0b1011 = Not used<br>0b1100 = Not used<br>0b1101 = Not used<br>0b1110 = Not used<br>0b1111 = Not used
 */
CarSignals.InternalEnvironment.AC_FRONT_RIGHT_DISTRIBUTION = 'CEA.VehicleData.IntEnvironment.ACFrontRightDistribution';

/**
 * Front left distribution
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0b0000 = Auto Comfort<br>0b0001 = Auto Visibility<br>0b0010 = Foot<br>0b0011 = Ventilation<br>0b0100 = Defrosting<br>0b0101 = Foot ventilation<br>0b0110 = Foot defrosting<br>0b0111 = Ventilation Defrosting<br>0b1000 = Foot Ventilation Defrosting<br>0b1001 = Defrosting different<br>0b1010 = Not used<br>0b1011 = Not used<br>0b1100 = Not used<br>0b1101 = Not used<br>0b1110 = Not used<br>0b1111 = Not used
 */
CarSignals.InternalEnvironment.AC_FRONT_LEFT_DISTRIBUTION = 'CEA.VehicleData.IntEnvironment.ACFrontLeftDistribution';

/**
 * Air condition speed in Manual Mode
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0b0000 = AUTO<br>0b0001 = Speed0<br>0b0010 = Speed1<br>0b0011 = Speed2<br>0b0100 = Speed3<br>0b0101 = Speed4<br>0b0110 = Speed5<br>0b0111 = Speed6<br>0b1000 = Speed7<br>0b1001 = Speed8<br>0b1010 = Not used<br>0b1011 = Not used<br>0b1100 = Not used<br>0b1101 = Not used<br>0b1110 = Not used<br>0b1111 = Not used
 */
CarSignals.InternalEnvironment.AC_SPEED = 'CEA.VehicleData.IntEnvironment.ACSpeed';

/**
 * Auto Air recycling mode: on
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b000 = Auto Comfort<br>0b001 = Auto visibility<br>0b010 = Not used<br>0b011 = Forced closed<br>0b100 = Auto comfort without AQS<br>0b101 = Not used<br>0b110 = Not used<br>0b111 = Not used
 */
CarSignals.InternalEnvironment.AIR_RECYCLING_AUTO = 'CEA.VehicleData.IntEnvironment.AirRecyclingAuto';

/**
 * Current values of front right temperature selected
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0b00000 = LO<br>0b00001 = 16 &deg;C<br>0b00010 = 16,5 &deg;C <br>0b00011 = 17 &deg;C <br>0b00100 = 17,5 &deg;C <br>0b00101 = 18 &deg;C<br>0b00110 = 18,5 &deg;C<br>0b00111 = 19 &deg;C <br>0b01000 = 19,5 &deg;C <br>0b01001 = 20 &deg;C<br>0b01010 = 20,5 &deg;C<br>0b01011 = 21 &deg;C<br>0b01100 = 21,5 &deg;C<br>0b01101 = 22 &deg;C<br>0b01110 = 22,5 &deg;C<br>0b01111 = 23 &deg;C<br>0b10000 = 23,5 &deg;C<br>0b10001 = 24 &deg;C<br>0b10010 = 24,5 &deg;C<br>0b10011 = 25 &deg;C <br>0b10100 = 25,5 &deg;C <br>0b10101 = 26 &deg;C<br>0b10110 = HI<br>0bAUTRES = Not used
 */
CarSignals.InternalEnvironment.AC_FRONT_RIGHT_TEMPERATURE = 'CEA.VehicleData.IntEnvironment.ACFrontRightTemperature';

/**
 * Current Values of front left temperature selected
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0b00000 = LO<br>0b00001 = 16 &deg;C<br>0b00010 = 16,5 &deg;C <br>0b00011 = 17 &deg;C <br>0b00100 = 17,5 &deg;C <br>0b00101 = 18 &deg;C<br>0b00110 = 18,5 &deg;C<br>0b00111 = 19 &deg;C <br>0b01000 = 19,5 &deg;C <br>0b01001 = 20 &deg;C<br>0b01010 = 20,5 &deg;C<br>0b01011 = 21 &deg;C<br>0b01100 = 21,5 &deg;C<br>0b01101 = 22 &deg;C<br>0b01110 = 22,5 &deg;C<br>0b01111 = 23 &deg;C<br>0b10000 = 23,5 &deg;C<br>0b10001 = 24 &deg;C<br>0b10010 = 24,5 &deg;C<br>0b10011 = 25 &deg;C <br>0b10100 = 25,5 &deg;C <br>0b10101 = 26 &deg;C<br>0b10110 = HI<br>0bAUTRES = Not used
 */
CarSignals.InternalEnvironment.AC_FRONT_LEFT_TEMPERATURE = 'CEA.VehicleData.IntEnvironment.ACFrontLeftTemperature';

/**
 * Status of MONO function. Same temperature for driver and passenger
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.InternalEnvironment.AC_FRONT_MONO_ON = 'CEA.VehicleData.IntEnvironment.ACFrontMonoOn';

/**
 * Air Conditioner (AC) Level
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0b00 = Light<br>0b01 = Normal<br>0b10 = Strong<br>0b11 = Not used
 */
CarSignals.InternalEnvironment.AC_LEVEL = 'CEA.VehicleData.IntEnvironment.ACLevel';

/**
 * Air Conditioner (AC) Mode (Manual / Auto / OFF)
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0b00 = Auto<br>0b01 = Manual<br>0b10 = OFF<br>0b11 = Invalid
 */
CarSignals.InternalEnvironment.AC_MODE = 'CEA.VehicleData.IntEnvironment.ACMode';

/**
 * Activation of Electrically Heated Rear Window
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.InternalEnvironment.REAR_HEATED_WINDOW_ON = 'CEA.VehicleData.IntEnvironment.RearHeatedWindowOn';

/**
 * Status of AC REAR function (locked is when the driver blocks the rear function)
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0b00 = On<br>0b01 = On locked<br>0b10 = Off<br>0b11 = Off locked
 */
CarSignals.InternalEnvironment.AC_REAR_STATUS = 'CEA.VehicleData.IntEnvironment.ACRearStatus';

/**
 * Get ID3 Content
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>text
 */
CarSignals.Media.ID3_CONTENT = 'CEA.VehicleData.Media.ID3Content';

/**
 * Get Total time of the playing song
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>text
 */
CarSignals.Media.SONG_TOTAL_TIME = 'CEA.VehicleData.Media.SongTotalTime';

/**
 * Get Current Time of the playing song
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>text
 */
CarSignals.Media.SONG_CURRENT_TIME = 'CEA.VehicleData.Media.SongCurrentTime';

/**
 * Media USB connected
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Media.USB_CONNECTED = 'CEA.VehicleData.Media.USBConnected';

/**
 * Get Radio Station Programme Identification (PiCode)
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>text
 */
CarSignals.Media.PICODE = 'CEA.VehicleData.Media.Picode';

/**
 * Get Radio Station extra Text information
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>text
 */
CarSignals.Media.RADIO_STATION_TEXT = 'CEA.VehicleData.Media.RadioStationText';

/**
 * Get Radio Station Name
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>text
 */
CarSignals.Media.RADIO_STATION_NAME = 'CEA.VehicleData.Media.RadioStationName';

/**
 * GET/SET Radio Station Frequency
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>Resolution : 0.001<br>Offset : 1 Mhz<br>Min : 0,153 Mhz<br>Max : 26,1 Mhz<br>Unite : Mhz
 */
CarSignals.Media.RADIO_STATION_FREQUENCY = 'CEA.VehicleData.Media.RadioStationFrequency';

/**
 * Insert new audio input over the current (overlaped)
 *
 * <br><br><b>Data Type:</b> text
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>text
 */
CarSignals.Media.ADD_AUDIO_INPUT = 'CEA.VehicleData.Media.AddAudioInput';

/**
 * Depending on the current Source, PREVIOUS radio_station, song etc
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Media.PREVIOUS = 'CEA.VehicleData.Media.Previous';

/**
 * Depending on the current Source, NEXT radio_station, song etc
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Media.NEXT = 'CEA.VehicleData.Media.Next';

/**
 * Radio Station Source
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = FM<br>1 = AM<br>2 = USB<br>3 = Audio streaming
 */
CarSignals.Media.RADIO_STATION_SOURCE = 'CEA.VehicleData.Media.RadioStationSource';

/**
 * Media Bleep play
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = Song0<br>1 = Song1<br>2 = Song2<br>3 = Song3<br>4 = Song4<br>5 = Song5
 */
CarSignals.Media.BLEEP_PLAY = 'CEA.VehicleData.Media.BleepPlay';

/**
 * Media Loudness on
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Media.LOUDNESS = 'CEA.VehicleData.Media.Loudness';

/**
 * Media Fader on
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 0<br>Min : -9<br>Max : 9<br>Invalide : 0xFF
 */
CarSignals.Media.FADER = 'CEA.VehicleData.Media.Fader';

/**
 * Media Balance status
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 0<br>Min : -9<br>Max : 9<br>Invalide : 0xFF
 */
CarSignals.Media.BALANCE_STATUS = 'CEA.VehicleData.Media.BalanceStatus';

/**
 * Media Ambiance mode
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = Normal<br>1 = Rock<br>2 = Jazz<br>3 = Bass<br>4 = Classic
 */
CarSignals.Media.AMBIANCE_MODE = 'CEA.VehicleData.Media.AmbianceMode';

/**
 * Media Treble on
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 0<br>Min : -9<br>Max : 9<br>Invalide : 0xFF
 */
CarSignals.Media.TREBLE = 'CEA.VehicleData.Media.Treble';

/**
 * Media Bass on
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 0<br>Min : -9<br>Max : 9<br>Invalide : 0xFF
 */
CarSignals.Media.BASS = 'CEA.VehicleData.Media.Bass';

/**
 * Current sound volume level
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 0<br>Min : 0<br>Max : 30<br>Invalide : 0xFF
 */
CarSignals.Media.CURRENT_VOLUME = 'CEA.VehicleData.Media.CurrentVolume';

/**
 * Media Volume Offset (could be negative)
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>Resolution : 1<br>Offset : 0<br>Min : -30<br>Max : 30<br>Invalide : 0xFF
 */
CarSignals.Media.VOLUME_OFF_SET = 'CEA.VehicleData.Media.VolumeOffSet';

/**
 * Media Mute on
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Media.MUTE = 'CEA.VehicleData.Media.Mute';

/**
 * Blind Spot Monitoring function push. This function will warn the driver through the side mirror, whenever a car is detected in the blind spot of the side mirror. The signal is a writing signal to change the state from 0 to 1 or 1 to 0.
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.ADAS.BLIND_SPOT_MONITORING_PUSH = 'CEA.VehicleData.ADAS.BlindSpotMonitoringPush';

/**
 * Lights sensor ordering the switch from low beam to full beam (or vice-versa)
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = LowBeam<br>1 = FullBeam
 */
CarSignals.ADAS.AUTO_ROAD_LAMP_SWITHCHING_STATUS = 'CEA.VehicleData.ADAS.AutoRoadLampSwithchingStatus';

/**
 * Automatically switching Full beam to low beam lamps whenever another car is detected with the windshield camera. 
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.ADAS.AUTO_ROAD_LAMP_SWITHCHING_ON = 'CEA.VehicleData.ADAS.AutoRoadLampSwithchingOn';

/**
 * Threshold Alert for crash risk in seconds. (ARC: Alert Risk CRASH)
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>Resolution : 0.1<br>Offset : 0 s<br>Min : 0 s<br>Max : 25.3 s<br>Invalide : 0xFF<br>Unite : s
 */
CarSignals.ADAS.A_R_C_THRESHOLD = 'CEA.VehicleData.ADAS.ARCThreshold';

/**
 * Current TIV  (Time Inter Vehicles) in seconds
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>Resolution : 0.1<br>Offset : 0 s<br>Min : 0 s<br>Max : 25.3 s<br>Invalide : 0xFF<br>Unite : s
 */
CarSignals.ADAS.TIV_TIME = 'CEA.VehicleData.ADAS.TIVTime';

/**
 * Obstacle visual distance (parking sensor) front right
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b000 = Zone 1 (obstacle very close)<br>0b001 = Zone 2<br>0b010 = Zone 3<br>0b011 = zone 4<br>0b100 = Zone 5<br>0b101 = Zone 6<br>0b110 = Zone 7<br>0b111 = Zone 8 (Obstacle very far)
 */
CarSignals.ADAS.PARKING_SENSORS_FRONT_RIGHT_DISTANCE = 'CEA.VehicleData.ADAS.ParkingSensorsFrontRightDistance';

/**
 * Obstacle visual distance (parking sensor) front center
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b000 = Zone 1 (obstacle very close)<br>0b001 = Zone 2<br>0b010 = Zone 3<br>0b011 = zone 4<br>0b100 = Zone 5<br>0b101 = Zone 6<br>0b110 = Zone 7<br>0b111 = Zone 8 (Obstacle very far)
 */
CarSignals.ADAS.PARKING_SENSORS_FRONT_MIDDLE_DISTANCE = 'CEA.VehicleData.ADAS.ParkingSensorsFrontMiddleDistance';

/**
 * Obstacle visual distance (parking sensor) front left
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b000 = Zone 1 (obstacle very close)<br>0b001 = Zone 2<br>0b010 = Zone 3<br>0b011 = zone 4<br>0b100 = Zone 5<br>0b101 = Zone 6<br>0b110 = Zone 7<br>0b111 = Zone 8 (Obstacle very far)
 */
CarSignals.ADAS.PARKING_SENSORS_FRONT_LEFT_DISTANCE = 'CEA.VehicleData.ADAS.ParkingSensorsFrontLeftDistance';

/**
 * Obstacle visual distance (parking sensor) rear right
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b000 = Zone 1 (obstacle very close)<br>0b001 = Zone 2<br>0b010 = Zone 3<br>0b011 = zone 4<br>0b100 = Zone 5<br>0b101 = Zone 6<br>0b110 = Zone 7<br>0b111 = Zone 8 (Obstacle very far)
 */
CarSignals.ADAS.PARKING_SENSORS_REAR_RIGHT_DISTANCE = 'CEA.VehicleData.ADAS.ParkingSensorsRearRightDistance';

/**
 * Obstacle visual distance (parking sensor) rear center
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b000 = Zone 1 (obstacle very close)<br>0b001 = Zone 2<br>0b010 = Zone 3<br>0b011 = zone 4<br>0b100 = Zone 5<br>0b101 = Zone 6<br>0b110 = Zone 7<br>0b111 = Zone 8 (Obstacle very far)
 */
CarSignals.ADAS.PARKING_SENSORS_REAR_MIDDLE_DISTANCE = 'CEA.VehicleData.ADAS.ParkingSensorsRearMiddleDistance';

/**
 * Obstacle visual distance (parking sensor) rear left
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b000 = Zone 1 (obstacle very close)<br>0b001 = Zone 2<br>0b010 = Zone 3<br>0b011 = zone 4<br>0b100 = Zone 5<br>0b101 = Zone 6<br>0b110 = Zone 7<br>0b111 = Zone 8 (Obstacle very far)
 */
CarSignals.ADAS.PARKING_SENSORS_REAR_LEFT_DISTANCE = 'CEA.VehicleData.ADAS.ParkingSensorsRearLeftDistance';

/**
 * Electronic Stability Control (ESC) is Working
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Security.ESC_IS_WORKING = 'CEA.VehicleData.Security.ESCisWorking';

/**
 * Electronic Stability Control (ESC) Inhibition status
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Security.ESC_INHIBITION = 'CEA.VehicleData.Security.ESCInhibition';

/**
 * Crash info detected
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Security.AIRBAG_CRASH_INFO_DETECTED = 'CEA.VehicleData.Security.AirbagCrashInfoDetected';

/**
 * Passenger airbag inhibited status
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Security.PASSENGER_AIRBAG_INHIBITED = 'CEA.VehicleData.Security.PassengerAirbagInhibited';

/**
 * State of row 1 rear right belt 
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Security.R_1_REAR_RIGHT_BELT_FASTENED = 'CEA.VehicleData.Security.R1RearRightBeltFastened';

/**
 * State of row 1 rear center belt 
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Security.R_1_REAR_CENTER_BELT_FASTENED = 'CEA.VehicleData.Security.R1RearCenterBeltFastened';

/**
 * State of row 1 rear left belt 
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Security.R_1_REAR_LEFT_BELT_FASTENED = 'CEA.VehicleData.Security.R1RearLeftBeltFastened';

/**
 * State of passenger's seat belt
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Security.PASSENGER_BELT_FASTENED = 'CEA.VehicleData.Security.PassengerBeltFastened';

/**
 * State of driver's seat belt
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Security.DRIVER_BELT_FASTENED = 'CEA.VehicleData.Security.DriverBeltFastened';

/**
 * Position of the Rear Right window
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b0000 = Closed<br>0b0001 = Between closed andmicro-descent<br>0b0010 = Micro-descent<br>0b0011 = Between microdescent and slight opening<br>0b0100 = Slight opening<br>0b0101 = Between slight opening and large mid-opening<br>0b0110 = Large mid-opening<br>0b0111 = Between large midopeningand fully open<br>0b1000 = Fully open<br>0b1001 = Position unknown<br>0b1010 = Invalid<br>0b1011 = Invalid<br>0b1100 = Invalid<br>0b1101 = Invalid<br>0b1110 = Invalid<br>0b1111 = Invalid
 */
CarSignals.Bodywork.REAR_RIGHT_WINDOW_POSITION = 'CEA.VehicleData.Bodywork.RearRightWindowPosition';

/**
 * Position of the Rear Left window
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b0000 = Closed<br>0b0001 = Between closed andmicro-descent<br>0b0010 = Micro-descent<br>0b0011 = Between microdescent and slight opening<br>0b0100 = Slight opening<br>0b0101 = Between slight opening and large mid-opening<br>0b0110 = Large mid-opening<br>0b0111 = Between large midopeningand fully open<br>0b1000 = Fully open<br>0b1001 = Position unknown<br>0b1010 = Invalid<br>0b1011 = Invalid<br>0b1100 = Invalid<br>0b1101 = Invalid<br>0b1110 = Invalid<br>0b1111 = Invalid
 */
CarSignals.Bodywork.REAR_LEFT_WINDOW_POSITION = 'CEA.VehicleData.Bodywork.RearLeftWindowPosition';

/**
 * Position of the Front Right  window
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b0000 = Closed<br>0b0001 = Between closed andmicro-descent<br>0b0010 = Micro-descent<br>0b0011 = Between microdescent and slight opening<br>0b0100 = Slight opening<br>0b0101 = Between slight opening and large mid-opening<br>0b0110 = Large mid-opening<br>0b0111 = Between large midopeningand fully open<br>0b1000 = Fully open<br>0b1001 = Position unknown<br>0b1010 = Invalid<br>0b1011 = Invalid<br>0b1100 = Invalid<br>0b1101 = Invalid<br>0b1110 = Invalid<br>0b1111 = Invalid
 */
CarSignals.Bodywork.FRONT_RIGHT_WINDOW_POSITION = 'CEA.VehicleData.Bodywork.FrontRightWindowPosition';

/**
 * Position of the Front Left window
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b0000 = Closed<br>0b0001 = Between closed andmicro-descent<br>0b0010 = Micro-descent<br>0b0011 = Between microdescent and slight opening<br>0b0100 = Slight opening<br>0b0101 = Between slight opening and large mid-opening<br>0b0110 = Large mid-opening<br>0b0111 = Between large midopeningand fully open<br>0b1000 = Fully open<br>0b1001 = Position unknown<br>0b1010 = Invalid<br>0b1011 = Invalid<br>0b1100 = Invalid<br>0b1101 = Invalid<br>0b1110 = Invalid<br>0b1111 = Invalid
 */
CarSignals.Bodywork.FRONT_LEFT_WINDOW_POSITION = 'CEA.VehicleData.Bodywork.FrontLeftWindowPosition';

/**
 * Trunk open
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Bodywork.TRUNK_OPEN = 'CEA.VehicleData.Bodywork.TrunkOpen';

/**
 * Hood open
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Bodywork.HOOD_OPEN = 'CEA.VehicleData.Bodywork.HoodOpen';

/**
 * Front Left door open
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Bodywork.FRONT_LEFT_DOOR_OPEN = 'CEA.VehicleData.Bodywork.FrontLeftDoorOpen';

/**
 * Front Right door open
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Bodywork.FRONT_RIGHT_DOOR_OPEN = 'CEA.VehicleData.Bodywork.FrontRightDoorOpen';

/**
 * Rear Right door open
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Bodywork.REAR_RIGHT_DOOR_OPEN = 'CEA.VehicleData.Bodywork.RearRightDoorOpen';

/**
 * Rear left  door open
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Bodywork.REAR_LEFT_DOOR_OPEN = 'CEA.VehicleData.Bodywork.RearLeftDoorOpen';

/**
 * Lamp On when any car door is open 
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Bodywork.OPEN_DOOR_LAMP_ON = 'CEA.VehicleData.Bodywork.OpenDoorLampOn';

/**
 * Status of the rear doors child safety function
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Bodywork.DOOR_CHILDSAFETY_ON = 'CEA.VehicleData.Bodywork.DoorChildsafetyOn';

/**
 * Wiper sweep speed
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b0000 = Speed 0 (Low Speed)<br>0b0001 = Speed 1<br>0b0010 = Speed 2<br>0b0011 = Speed 3<br>0b0100 = Speed 4<br>0b0101 = Speed 5<br>0b0110 = Speed 6<br>0b0111 = Speed 7 <br>0b1000 = Speed 8<br>0b1001 = Speed 9<br>0b1010 = Speed 10<br>0b1011 = Speed 11<br>0b1100 = Speed 12<br>0b1101 = Speed 13<br>0b1110 = Speed 14<br>0b1111 = Speed 15 (High Speed)
 */
CarSignals.Bodywork.WIPER_SPEED = 'CEA.VehicleData.Bodywork.WiperSpeed';

/**
 * Window wiper status
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b00 = W in AF<br>0b01 = Other status<br>0b10 = W stopped in maintenance position<br>0b11 = Not used
 */
CarSignals.Bodywork.WIPER_STATUS = 'CEA.VehicleData.Bodywork.WiperStatus';

/**
 * Side mirror automatically aims down when the rear gear is activited (IMA). Status of the function
 *
 * <br><br><b>Data Type:</b> boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Bodywork.SIDE_MIRROR_AUTO_AIM_DOWN_ON = 'CEA.VehicleData.Bodywork.SideMirrorAutoAimDownOn';

/**
 * Status of  automatic folding function for the  side mirrors
 *
 * <br><br><b>Data Type:</b> boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Bodywork.SIDE_MIRROR_FOLDING_FUNCTION_ON = 'CEA.VehicleData.Bodywork.SideMirrorFoldingFunctionOn';

/**
 * Horn status activated
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.HORN_ACTIVATED = 'CEA.VehicleData.Driving.HornActivated';

/**
 * Acceleration Driver request in %
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-8<br>Resolution : 0.5<br>Offset : 0 %<br>Min : 0 %<br>Max : 100 %<br>Invalide : 0xFF<br>Unite : %
 */
CarSignals.Driving.THROTTLE_PEDAL_LEVEL = 'CEA.VehicleData.Driving.ThrottlePedalLevel';

/**
 * Break pedal activated
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.BREAK_PEDAL = 'CEA.VehicleData.Driving.BreakPedal';

/**
 * "Daytime" lamp on
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.LAMPS_DAYTIME_ON = 'CEA.VehicleData.Driving.LampsDaytimeOn';

/**
 * Left indicator lamp activated
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.LAMPS_TURN_INDICATOR_LEFT_ACTIVATED = 'CEA.VehicleData.Driving.LampsTurnIndicatorLeftActivated';

/**
 * Right indicator lamp activated
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.LAMPS_TURN_INDICATOR_RIGHT_ACTIVATED = 'CEA.VehicleData.Driving.LampsTurnIndicatorRightActivated';

/**
 * Rear fog lamp status
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.LAMPS_REAR_FOG_ON = 'CEA.VehicleData.Driving.LampsRearFogOn';

/**
 * Front fog lamp status
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.LAMPS_FRONT_FOG_ON = 'CEA.VehicleData.Driving.LampsFrontFogOn';

/**
 * Full beam status
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.LAMPS_FULL_BEAM_ON = 'CEA.VehicleData.Driving.LampsFullBeamOn';

/**
 * Low beam status
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.LAMPS_LOW_BEAM_ON = 'CEA.VehicleData.Driving.LampsLowBeamOn';

/**
 * Position lamps status
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.LAMPS_POSITION_ON = 'CEA.VehicleData.Driving.LampsPositionOn';

/**
 * Parking brake activated
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.PARKING_BRAKE_ON = 'CEA.VehicleData.Driving.ParkingBrakeOn';

/**
 * Steering wheel position (Left/Right)
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b00 = Invalid<br>0b01 = Steering right<br>0b10 = Steering left<br>0b11 = Invalid
 */
CarSignals.Driving.STEERING_WHEEL_POSITION = 'CEA.VehicleData.Driving.SteeringWheelPosition';

/**
 * Steering wheel rotation direction clockwise if true, false counterclockwise
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.STEERING_WHEEL_ROTATION_DIRECTION_CLOCKWISE = 'CEA.VehicleData.Driving.SteeringWheelRotationDirectionClockwise';

/**
 * Steering wheel rotation speed in degrees per second
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-8<br>Resolution : 1<br>Offset : 0<br>Min : 0<br>Max : 1016
 */
CarSignals.Driving.STEERING_WHEEL_ROTATION_SPEED = 'CEA.VehicleData.Driving.SteeringWheelRotationSpeed';

/**
 * Steering wheel angle
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>SNM-16<br>Resolution : 1<br>Offset : 0<br>Min : -780<br>Max : 780
 */
CarSignals.Driving.STEERING_WHEEL_ANGLE = 'CEA.VehicleData.Driving.SteeringWheelAngle';

/**
 * Reverse gear status
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Driving.GEARBOX_REVERSE_GEAR_ON = 'CEA.VehicleData.Driving.GearboxReverseGearOn';

/**
 * Selection of gearbox mode
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0b000 = Auto<br>0b001 = Not used<br>0b010 = Auto + Sport<br>0b011 = Not used<br>0b100 = Sequential<br>0b101 = Sequential + Sport<br>0b110 = Auto + Snow<br>0b111 = Not used
 */
CarSignals.Driving.GEARBOX_MODE = 'CEA.VehicleData.Driving.GearboxMode';

/**
 * Recommended gear indicator. Arrow up means to move up the gear, arrow down means to move down the gear
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b00 = No gear recomendation arrow<br>0b01 = Rising arrow gear recommendation<br>0b10 = Lowering arrow gear recommendation<br>0b11 = Rising and lowering arrow gear recommendation
 */
CarSignals.Driving.RECOMMENDED_GEAR_ARROW = 'CEA.VehicleData.Driving.RecommendedGearArrow';

/**
 * Current gear engaged
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b0000 = P<br>0b0001 = R<br>0b0010 = N<br>0b0011 = D<br>0b0100 = 6th gear<br>0b0101 = 5th gear<br>0b0110 = 4th gear<br>0b0111 = 3rd gear<br>0b1000 = 2nd gear<br>0b1001 = 1st gear<br>0b1010 = Invalid<br>0b1011 = No gear to display<br>0b1100 = 7th gear
 */
CarSignals.Driving.CURRENT_GEAR = 'CEA.VehicleData.Driving.CurrentGear';

/**
 * Reset trip  2
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Speed.TRIP_2_RESET = 'CEA.VehicleData.Speed.Trip2Reset';

/**
 * Reset trip  1
 *
 * <br><br><b>Data Type:</b> Boolean
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>0 = False<br>1 = True
 */
CarSignals.Speed.TRIP_1_RESET = 'CEA.VehicleData.Speed.Trip1Reset';

/**
 * Trip 2: Average speed
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-8<br>Resolution : 1<br>Offset : 0 km/h<br>Min : 0 km/h<br>Max : 250 km/h<br>Invalide : 0xFF<br>Unite : km/h
 */
CarSignals.Speed.TRIP_2_AVERAGE_SPEED = 'CEA.VehicleData.Speed.Trip2AverageSpeed';

/**
 * Trip 1: Average speed
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-8<br>Resolution : 1<br>Offset : 0 km/h<br>Min : 0 km/h<br>Max : 250 km/h<br>Invalide : 0xFF<br>Unite : km/h
 */
CarSignals.Speed.TRIP_1_AVERAGE_SPEED = 'CEA.VehicleData.Speed.Trip1AverageSpeed';

/**
 * Cruise control, speed memory 6
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.CRUISE_CONTROL_MEM_6 = 'CEA.VehicleData.Speed.CruiseControlMem6';

/**
 * Cruise control, speed memory 5
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.CRUISE_CONTROL_MEM_5 = 'CEA.VehicleData.Speed.CruiseControlMem5';

/**
 * Cruise control, speed memory 4
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.CRUISE_CONTROL_MEM_4 = 'CEA.VehicleData.Speed.CruiseControlMem4';

/**
 * Cruise control, speed memory 3
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.CRUISE_CONTROL_MEM_3 = 'CEA.VehicleData.Speed.CruiseControlMem3';

/**
 * Cruise control, speed memory 2
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.CRUISE_CONTROL_MEM_2 = 'CEA.VehicleData.Speed.CruiseControlMem2';

/**
 * Cruise control, speed memory 1
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.CRUISE_CONTROL_MEM_1 = 'CEA.VehicleData.Speed.CruiseControlMem1';

/**
 * Speed limitator, memory 6 speed limit
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.SPEED_LIMIT_MEM_6 = 'CEA.VehicleData.Speed.SpeedLimitMem6';

/**
 * Speed limitator, memory 5 speed limit
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.SPEED_LIMIT_MEM_5 = 'CEA.VehicleData.Speed.SpeedLimitMem5';

/**
 * Speed limitator, memory 4 speed limit
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.SPEED_LIMIT_MEM_4 = 'CEA.VehicleData.Speed.SpeedLimitMem4';

/**
 * Speed limitator, memory 3 speed limit
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.SPEED_LIMIT_MEM_3 = 'CEA.VehicleData.Speed.SpeedLimitMem3';

/**
 * Speed limitator, memory 2 speed limit
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.SPEED_LIMIT_MEM_2 = 'CEA.VehicleData.Speed.SpeedLimitMem2';

/**
 * Speed limitator, memory 1 speed limit
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> yes
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.SPEED_LIMIT_MEM_1 = 'CEA.VehicleData.Speed.SpeedLimitMem1';

/**
 * Status of the active cruise or limit function
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b000 = Stand by<br>0b001 = Activity without overspeeding<br>0b010 = Limitation activated by cruise control<br>0b011 = Activity with overspeeding without pedal pick-up<br>0b100 = Activity with overspeeding on pedal pick-up<br>0b101 = Reserved<br>0b110 = Function no activation possible<br>0b111 = Fault
 */
CarSignals.Speed.CONTROL_TYPE_STATUS = 'CEA.VehicleData.Speed.ControlTypeStatus';

/**
 * Selection of the Cruise or Limit function
 *
 * <br><br><b>Data Type:</b> Enum
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>0b00 = All functions OFF<br>0b01 = Cruise control ON<br>0b10 = Limit function ON
 */
CarSignals.Speed.CONTROL_TYPE = 'CEA.VehicleData.Speed.ControlType';

/**
 * Instant vehicle speed
 *
 * <br><br><b>Data Type:</b> Range
 * <br><b>Writing Signal:</b> no
 * <br><b>Signal Values:</b><br>UNM-8 Resolution : 1 <br>Offset : 0 km/h <br>Min : 0 km/h <br>Max : 254 km/h <br>Invalid :  <br>Unit : km/h
 */
CarSignals.Speed.INSTANT_SPEED = 'CEA.VehicleData.Speed.InstantSpeed';


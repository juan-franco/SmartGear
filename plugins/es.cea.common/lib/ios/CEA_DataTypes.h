//
//  CEA_DataTypes.h
//  CarEasyApps
//
//  Created by Joaquin on 14/02/14.
//  Copyright (c) 2014 Joaquin. All rights reserved.
//
#ifndef CEA_main_Datatypes_h
#define CEA_main_Datatypes_h

#define FLAG_ACTIVE_PERIODID_SUBCRIBE 0
#define FLAG_CAR_SIMUATAION_ACTIVE 0
#define FLAG_NEW_CAR_ACTIVE 1

#define DONGLE_NAME @"BlueDash"
#define CLOUD_CONNECTION_SUFIX @"cea.altia.es"
#define DONGLE_ADDRESS_SUFFIX @"cea://"

#if FLAG_NEW_CAR_ACTIVE == 1
#define SIGNAL_TRANSLATOR_FILE @"SignalsName"
#define DBC_FILE_NUM 0
#else
#define SIGNAL_TRANSLATOR_FILE @"SignalsName_SC"
#define DBC_FILE_NUM 1
#endif

#define NOTIFICATION_ERROR_CLOUD @"httpConnectionError"
#define NOTIFICATION_DATA_CLOUD @"httpJsonReceived"
#define NOTIFICATION_TIMEOUT @"TimeOut"
#define NOTIFICATION_DONGLE_UPDATE @"ParamsUpdated"
#define NOTIFICATION_PERIODIC_SUBSCRIBE @"TemporizationEnd"
#define NOTIFICATION_DONGLE_KO @"DONGLE_KO"

#define NOTIFICATION_DONGLE_UPDATE_PRUEBA @"ParamsUpdated_prueba"

#define ERROR_NOT_FOUND 404
#define ERROR_BAD_ARGUMENT 600
#define ERROR_OK 200
#define NO_ERROR 200
#define ERROR_REQ_TOUT 408
#define ERROR_METHOD_NOT_ALLOWED 404
#define ERROR_CONFLICT 409
#define ERROR_EXP_FAILED 417
#define ERROR_MISSING_SIGNALS 404
#define ERROR_TOO_MANY_SIGNALS 404
#define ERROR_READING_DBC 422
#define ERROR_OPENING_EASESSION 423
#define ERROR_GONE 410
#define ERROR_INT_SERVER_ERROR 500

#define GET_TIMEOUT 2
#define HTTP_TIMEOUT 2
#define TIME_TIMEOUT_CHECK 1.0
#define TIME_PERIODIC_SUBSCRIBE_CHECK 1.0
#define JSON_FORMAT_ERROR -1


#define GPS_SIGNAL_NAME @"ID_GEOLOCALIZATION"
#define VIN_SIGNAL_NAME @"ID_VIN"
#define WMI_SIGNAL_NAME @"WMI_1"

#define JSON_TYPE @"type"
#define JSON_QUERY @"query"
#define JSON_STATUS @"status"
#define JSON_RESULT @"result"
#define JSON_EMPTY @""

#define JSON_ID @"id"
#define JSON_TIMESTAMP @"timestamp"
#define JSON_SRCID @"srcid"
#define JSON_DSTID @"dstid"
#define JSON_PAYLOAD @"payload"

#define GET_TYPE @"GET"
#define SET_TYPE @"SET"
#define REPLY_TYPE @"REPLY"
#define SUBSCRIBE_TYPE @"SUBSCRIBE"
#define CLOUD_SUBSCRIBE_TYPE @"CLOUD_SUBSCRIBE"
#define UNSUBSCRIBE_TYPE @"UNSUBSCRIBE"
#define FORWARD_TYPE @"FORWARD"
#define HTTP_TYPE @"HTTP"
#define TIMEOUT_TYPE @"TIMEOUT"


#endif

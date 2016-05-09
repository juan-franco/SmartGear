//
//  JSONmsg.h
//  CEA_main
//
//  Created by Joaquin on 28/08/13.
//  Copyright (c) 2013 Joaquin. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CEA_DataTypes.h"
#include <ifaddrs.h>
#include <arpa/inet.h>


@interface CEA_Presentation : NSObject {
    //Payload elements
    NSString *type_;
    NSDictionary *query_;
    NSString *status_;
    NSDictionary *result_;
    NSString *resultString_;
    
    //JSON session message fields
    NSString *identifier;
    NSString *timestamp;
    NSString *srcid;
    NSString *dstid;
    NSString *payload;
}

@property (nonatomic, retain) NSString *type;
@property (nonatomic, retain) NSDictionary *query;
@property (nonatomic, retain) NSString *status;
@property (nonatomic, retain) NSDictionary *result;
@property (nonatomic, retain) NSString *resultString;

@property (nonatomic, retain) NSString *identifier;
@property (nonatomic, retain) NSString *timestamp;
@property (nonatomic, retain) NSString *srcid;
@property (nonatomic, retain) NSString *dstid;
@property (nonatomic, retain) NSString *payload;



//---------------- Payload Methods------------------------

-(NSDictionary *) requestDictionary;
-(NSDictionary *) responseWithResultDictionary;
-(NSDictionary *) responseWithoutResultDictionary;

//----------------- JSON message Methods ------------------

-(NSInteger) getMessageFromJSON:(NSString*) jsonString;
-(NSString *) createJSONMessageStringWithType: (NSString*) type andStatus:(NSString*) status andParameterList: (NSDictionary*) paramDict andIsRequest: (BOOL) isRequest;
-(NSString *) createJSONStringOfDataModelParameter: (NSDictionary *) paramDict;
-(NSDictionary *) getDataModelParameterFromJSONString: (NSString *) jsonString;

//--------------  JSON Session message Methods------------

-(NSString *) createJSONSessionStringMessageFromAuthority:(NSString*) localAuth ToDestination: (NSString*) destination withPayload: (NSString*) messagePayload;
-(void) getDataFromJSONSessionString: (NSString *) jsonString;
-(NSArray *) createArrayFromDataModelParameter: (NSDictionary *) paramDict;


//---------------- TOOLS -----------------

/*!
 \brief		Obtains a new UUID
 \details
 \note
 \retval    NSString with the UUID
 */
-(NSString *) obtainUUID;

/*!
 \brief		Obtains the current time
 \details   Gets the actual system time and creates a time string.
 \note
 \retval    NSString with the timestamp. Format yyyy'-'MM'-'dd'T'HH':'mm':'ss'ZZ
 */
-(NSString *) obtainTimestamp;

/*!
 \brief		Obtains the bundle ID for the actual endpoint 
 \details   Creates the srcID value for the mesages.
 \note
 \retval    NSString with the srcId value
 */
-(NSString *) obtainSrcid;


/*!
 \brief		Gets local IP
 \details
 \note
 \retval    NSString with device IP
 */
-(NSString *) getIPAddress;

@end

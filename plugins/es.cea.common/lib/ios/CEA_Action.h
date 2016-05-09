//
//  CEA_Action.h
//  CarEasyApps
//
//  Created by Joaquin on 14/02/14.
//  Copyright (c) 2014 Joaquin. All rights reserved.
//

#import <Foundation/Foundation.h>

#define NUM_MSG_RETRY 3

@interface CEA_Action : NSObject
@property (nonatomic, retain) NSString *type;
@property (nonatomic, retain)  NSArray *params;
@property (nonatomic, retain) NSString *callback;
@property (nonatomic, retain) NSString *identifier;
@property (nonatomic, assign) NSTimeInterval timeStamp;
@property (nonatomic, assign) int retransmitions_left;
@property (nonatomic, retain) NSString *payload;

-(id)initWithType: (NSString*)newType andParams: (NSArray*) newParams andCallback: (NSString*) newCallback;
-(id)initWithType: (NSString*)newType andId: (NSString*) newIdentifier andCallback: (NSString*) newCallback;
-(id)initWithType: (NSString*)newType andParams: (NSArray*) newParams andId: (NSString*) newIdentifier andPayload: (NSString*) newPayload andCallback: (NSString*) newCallback;
@end

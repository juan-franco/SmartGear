//
//  CEA_RemoteEndpoint.h
//  CarEasyApps
//
//  Created by Joaquin on 14/02/14.
//  Copyright (c) 2014 Joaquin. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CEA_Session.h"
#import "CEA_Protocolos.h"

@interface CEA_RemoteEndpoint : NSObject <CEA_RemoteEndpointDelegate>

@property (nonatomic, strong) NSTimer *subscribeTimer;
@property (nonatomic, retain) NSTimer *timeOutTimer;
@property (nonatomic, strong) NSMutableArray *pendingActions;
@property (nonatomic, strong) NSString *endpointAddress;
@property (nonatomic, strong) NSString *destination;
@property (nonatomic, strong) NSString *localAuthority;

@property (nonatomic,strong) id session;    //Session Communication Object


@end

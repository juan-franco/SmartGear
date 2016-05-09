//
//  CEA_EndpointFactory.h
//  CarEasyApps
//
//  Created by Joaquin on 14/02/14.
//  Copyright (c) 2014 Joaquin. All rights reserved.
//
#import <Foundation/Foundation.h>
#import "CEA_RemoteEndpoint.h"



@interface CEA_EndpointFactory : NSObject{
    NSMutableArray *_accessoryList;
}
@property (nonatomic, assign) id <CEA_CallbackDelegate> delegate;


/*!
 \brief		Discover the availble RemoteEndopoints
 \details
 \note
 \retval
 \internal
 \author		Joaquin Lago
 \endinternal
 \ingroup
 */
-(void) discoverEndpointsWithCallback: (NSString*) callbackMethod;

/*!
 \brief		Create a new RemoteEndpoint with the selected address
 \details
 \note
 \retval    RemoteEnpoint instance AND Status value: 200 if OK.
 \internal
 \author		Joaquin Lago
 \endinternal
 \ingroup
 */
-(CEA_RemoteEndpoint*) getRemoteEndpointInstanceWithLocalAuthority: (NSString*) localAuthority andEndpointAddress: (NSString*) endpointAddress andReturnStatusIn: (NSInteger *) status;

/*!
 \brief		Gets current version
 \details
 \note
 \retval    JSON String with platform, verson and last update date AND Status value: 200 if OK.
 \internal
 \author		Joaquin Lago
 \endinternal
 \ingroup
 */
-(NSString*) getVersion: (NSInteger *) status;

@end

//
//  CEA_Session.h
//  CarEasyApps
//
//  Created by Joaquin on 14/02/14.
//  Copyright (c) 2014 Joaquin. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface CEA_Session : NSObject <NSURLConnectionDelegate>
{
    NSMutableData *receivedData_;
}

@property (nonatomic,strong) NSURLConnection * connection;
@property (nonatomic,assign) bool finished;
@property (nonatomic, strong) NSMutableArray * threads;

/*!
 \brief		Sends the messageData information to the destinationURL
 \details   messageData must follow the specified JSON notation
 \note      CLOUD METHOD
 \author	Joaquin Lago
 */
-(void) sendData: (NSString *) messageData toURL: (NSString*) destinationURL;


@end

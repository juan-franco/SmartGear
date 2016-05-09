//
//  CEACarSimulator.h
//  
//  Created by Imatia on 24/09/13.
//
//

#import <Cordova/CDV.h>
#import "CEA_RemoteEndpoint.h"

@interface CEACarSimulator : CDVPlugin <CEA_CallbackDelegate>{
}

- (void)get:(CDVInvokedUrlCommand*)command;
- (void)set:(CDVInvokedUrlCommand*)command;
- (void)subscribe:(CDVInvokedUrlCommand *)command;
- (void)unsubscribe:(CDVInvokedUrlCommand *)command;
- (void) login:(CDVInvokedUrlCommand *)command;

@end

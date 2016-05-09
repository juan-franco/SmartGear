//
//  CEA_Protocolos.h
//  CarEasyApps
//
//  Created by Joaquin on 07/03/14.
//  Copyright (c) 2014 Joaquin. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol CEA_CallbackDelegate <NSObject>

/*!
 \brief		Application callback reception method.
 \details   Application's implemetation shoud redirect the informacion received to the specific application method.
 \note      Application MUST implement this method to receive ALL the callbacks from the RemoteEndpoint and the EndpoitFactory.
 */
-(void) receiveCallbackToMethod: (NSString*) callbackMethod WithObjectList: (NSString*) objectList andStatus: (NSInteger) status;
@end

@protocol CEA_RemoteEndpointDelegate <NSObject>

/*!
 \brief		Starts RemoteEndpoint
 \details
 \param[in] Endpoint address
 \param[in] local Authority
 
 */
-(id)   initWithAddress: (NSString *) address andLocalAuthority: (NSString*) localAuth;
/*!
 \brief		Gets the attributes requested
 \details   Requests the attribute list to the dongle or cloud and sets a new Action for this event.
 \param[in] attributeIDList NSString with the list of the requested attributes
 \param[in] callbackMethod  NSString with the callback method to return to.
 \note      Errors will be reported to app if Dongle status is not correct.
 */
-(void) get:(NSString *)attributeIDList callback:(NSString*) callbackMethod;

/*!
 \brief		Sets the attributes with the given values (JUST CLOUD. DONLGE CAN NOT WRITE)
 \details   Modifies the attribute list values in the cloud and sets a new Action for this event.
 \param[in] attributeIDList NSString with the list of the requested attributes and its values
 \param[in] callbackMethod  NSString with the callback method to return.
 */
-(void) set:(NSString *)attributeIDList callback:(NSString*) callbackMethod;

/*!
 \brief		Subscribes the given group of attributes
 \details   Creates a subscription to the gruoped attributes. Callbacks will only be called if all the signals of the group have valid values.
 \param[in] attributeIDList NSString with the list of the requested attributes
 \param[in] callbackMethod  NSString with the callback method to return to.
 \note      After a correct subscription a 200 OK is return to the callbackMethod
 */
-(void) subscribe:(NSString*) attributeIDList callback:(NSString*) callbackMethod;

/*!
 \brief		Unsubscribes the given group of attributes
 \details   Removes a subscription group of attributes. Callbacks will only be launched if all the signals of the group have valid values.
 \param[in] attributeIDList NSString with the group of the requested attributes
 \param[in] callbackMethod  NSString with the callback method to return to.
 \note      After a correct unsubscription a 200 OK is return to the callbackMethod
 */
-(void) unsubscribe:(NSString*) attributeIDList callback:(NSString*) callbackMethod;

/*!
 \brief  Login the user for a secure access
 \details
 \param[in] userName NSStirng with the user's name
 \param[in] password NSString with the user's password
 \param[in] callback NSString with the callback method to return to.
 \retval Application's callback method is called
 */
-(void) loginUser:(NSString*) userName withPassword: (NSString*) password callback: (NSString*) callbackMethod;



@property (nonatomic, assign) id <CEA_CallbackDelegate> delegate;
@property (nonatomic, strong) NSError *status;

@end;
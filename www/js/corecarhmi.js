/**
 * Represents the core car
 * 
 * @constructor
 */
function CarHMI(ceacar) {
	var ceacar = ceacar;

	/**
	 * Gets the related car signal name value.<br><b>NOTE</b> In the callback function, you have to SUBSCRIBE to the newly
	 * created HMI if you want to detect when the user presses one of the buttons in the HMI. 
	 * 
	 * @param textMessage {string} Text to show on the car screen dialog
	 * @param resource {string} Signal name to catch dialog result from the car
	 * @param options {Array} List of option buttons to show on the dialog
	 * @param callbackResultFunction {Function} The callback result function
	 * @param callbackErrorFunction {Function} The callback error function
	 * @public
	 */
	this.createHMIMessage = function(textMessage, resource, options, callbackResultFunction, callbackErrorFunction) {
		console.debug('createHMIMessage BEGIN');
		var JSONObject = {
			"type" : "DIALOG",
			"text" : textMessage,
			"action" : "CREATE",
			"options" : options,
			"resource" : resource
		};
		var element = {
			"HMI.element" : JSONObject
		};

		var attributeIDList = [];
		attributeIDList.push(element);
		console.debug('create HMI message: ' + JSON.stringify(attributeIDList));

		ceacar.set(attributeIDList, callbackResultFunction, callbackErrorFunction);
		console.debug('createHMIMessage END');
	};


	/**
	 * Subscribe the car HMI resource to get the car dialog response<br>
	 * <b>NOTE:</b> In the callback function, after detecting the option chosen by the user, it is necessary to UNSUBSCRIBE to the HMI
	 * 
	 * @param resource {string} Signal name to catch dialog result from the car
	 * @param callbackResultFunction {Function} The callback result function
	 * @param callbackErrorFunction {Function} The callback error function
	 * @public
	 */
	this.subscribeHMIMessage = function(resource, callbackResultFunction, callbackErrorFunction) {
		console.debug('subscribeHMIMessage BEGIN');
		
		var JSONObject = {"resource": resource};
		
		var element = {
				"HMI.element" : JSONObject
		};
			
		var attributeIDList = [];
		attributeIDList.push(element);
		
		console.debug('subscribe HMI message: ' + JSON.stringify(attributeIDList));
	    ceacar.subscribe(attributeIDList, callbackResultFunction, null, callbackErrorFunction);		
		console.debug('subscribeHMIMessage END');
	};
	


	/**
	 * Unsubscribe the car HMI resource<br><b>NOTE:</b> In the callback function, you have to DELETE the HMI to make it disappear from the car screen.
	 * 
	 * @param resource {string} Signal name to catch dialog result from the car
	 * @param callbackResultFunction {Function} The callback result function
	 * @param callbackErrorFunction {Function} The callback error function
	 * @public
	 */
	this.unsubscribeHMIMessage = function(resource, callbackResultFunction, callbackErrorFunction) {
		console.debug('unsubscribeHMIMessage BEGIN');
		
		var JSONObject = {"resource": resource};
		
		var element = {
				"HMI.element" : JSONObject
		};
			
		var attributeIDList = [];
		attributeIDList.push(element);
		
		console.debug('subscribe HMI message: ' + JSON.stringify(attributeIDList));
	    ceacar.unsubscribe(attributeIDList, callbackResultFunction, null, callbackErrorFunction);		
		console.debug('unsubscribeHMIMessage END');
	};


	/**
	 * Removes the HMI dialog from the car screen 
	 * 
	 * @param resource {string} Signal name to catch dialog result from the car
	 * @param callbackResultFunction {Function} The callback result function
	 * @param callbackErrorFunction {Function} The callback error function
	 * @public
	 */
	this.deleteHMIMessage = function(resource, callbackResultFunction, callbackErrorFunction) {		
		console.debug('deleteHMIMessage BEGIN');
		var JSONObject= {
				 "type":"DIALOG",
	             "action":"DELETE",
	             "resource":resource};
		var element = {
				"HMI.element" : JSONObject
		};
				
		var attributeIDList = [];
		attributeIDList.push(element);
		console.log('delete HMI message: ' + JSON.stringify(attributeIDList));
	    ceacar.set(attributeIDList, callbackResultFunction, callbackErrorFunction);

	    console.debug('deleteHMIMessage END');
	};
	
}

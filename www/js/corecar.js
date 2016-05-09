/**
 * Represents the core car
 * 
 * @constructor
 */
function Car(ceacar) {	
	var ceacar = ceacar;
		
	/**
	 * Gets the related car signal name value
	 * 
	 * @param signalname {string} The car signal name
	 * @param callbackResultFunction {Function} The callback result function
	 * @param callbackErrorFunction {Function} The callback error function
	 * @public
	 */
	this.getValue = function(signalname, callbackResultFunction, callbackErrorFunction) {
		var attributeIDList = [];
		var objCurrent = {};
		objCurrent[signalname] = '';
		attributeIDList.push(objCurrent);
		ceacar.get(attributeIDList, callbackResultFunction, callbackErrorFunction);
		return;
	}; 
	

	
	/**
	 * Sets the related car signal value
	 * 
	 * @param signalname {string} The car signal name
	 * @param signalvalue {Object} The car signal value
	 * @param callbackResultFunction {Function} The callback result function
	 * @param callbackErrorFunction {Function} The callback error function
	 * @public
	 */
	this.setValue = function(signalname, signalvalue, callbackResultFunction, callbackErrorFunction) {
		var attributeIDList = [];
		var obj = {};
		obj[signalname] = signalvalue;
		console.info("Setting Signal Value: " + signalname + " = " + signalvalue);
		attributeIDList.push(obj);
		ceacar.set(attributeIDList, callbackResultFunction, callbackErrorFunction);
	};
	
	/**
	 * Subscribes the related car signal
	 * 
	 * @param signalname {string} The car signal name
	 * @param callbackResultFunction {Function} The callback result function
	 * @param callbackErrorFunction {Function} The callback error function
	 * @public
	 */
	this.subscribe = function(signalname, callbackResultFunction, callbackErrorFunction) {
		var attributeIDList = [];
		var objCurrent = {};
		objCurrent[signalname] = '';
		
		console.info("Subscribing Signal: " + signalname);
		attributeIDList.push(objCurrent);
		ceacar.subscribe(attributeIDList, callbackResultFunction, null, callbackErrorFunction);
	}; 
	
	/**
	 * Unsubscribes the related car signal
	 * 
	 * @param signalname {string} The car signal name
	 * @param callbackResultFunction {Function} The callback result function
	 * @param callbackErrorFunction {Function} The callback error function
	 * @public
	 */
	this.unsubscribe = function(signalname, callbackResultFunction, callbackErrorFunction) {
		var attributeIDList = [];
		var objCurrent = {};
		objCurrent[signalname] = '';		
		console.info("Unsubscribing Signal: " + signalname);
		attributeIDList.push(objCurrent);
		ceacar.unsubscribe(attributeIDList, callbackResultFunction, callbackErrorFunction);
	}; 
	
	
	/**
	 * 
	 * SIGNALS ARRAY METHODS
	 * 
	 */

	/**
	 * Gets the related car signals list values
	 * 
	 * @param signalsarray {Array} Array with the different car signal names to get
	 * @param callbackResultFunction {Function} The callback result function
	 * @param callbackErrorFunction {Function} The callback error function
	 * @public
	 */
	this.getArrayValue = function(signalsarray, callbackResultFunction, callbackErrorFunction) {
		var attributeIDList = [];

		console.info("Getting Signals Value: ");
		for (i = 0; i < signalsarray.length; i++) {	
			var signalname = signalsarray[i];
			console.info("--- " + signalname);
			var objCurrent = {};
			objCurrent[signalname] = '';
			attributeIDList.push(objCurrent);
		}		
		ceacar.get(attributeIDList, callbackResultFunction, callbackErrorFunction);
		return;
	}; 
	

	/**
	 * Sets the related car signals list values
	 * 
	 * @param signalsarray {Array} Array with the different car signal names to set
	 * @param signalsvalues {Array} Array with the different car signal values to set
	 * @param callbackResultFunction {Function} The callback result function
	 * @param callbackErrorFunction {Function} The callback error function
	 * @public
	 */
	this.setArrayValue = function(signalsarray, signalsvaluesarray, callbackResultFunction, callbackErrorFunction) {
		var attributeIDList = [];

		console.info("Getting Signals Value: ");
		for (i = 0; i < signalsarray.length; i++) {	
			var signalname = signalsarray[i];
			console.info("--- " + signalname);
			var objCurrent = {};
			objCurrent[signalname] = signalsvaluesarray[i];
			attributeIDList.push(objCurrent);
		}		
		ceacar.set(attributeIDList, callbackResultFunction, callbackErrorFunction);
		return;
	}; 

	/**
	 * Subscribes the related signals list
	 * 
	 * @param signalname {Array} Array with the different car signal names to get
	 * @param callbackResultFunction {Function} The callback result function
	 * @param callbackErrorFunction {Function} The callback error function
	 * @public
	 */
	this.subscribeArray = function(signalsarray, callbackResultFunction, callbackErrorFunction) {
		var attributeIDList = [];

		for (i = 0; i < signalsarray.length; i++) {	
			var signalname = signalsarray[i];
			console.info("Subscribing Signal: " + signalname);
			var objCurrent = {};
			objCurrent[signalname] = '';
			attributeIDList.push(objCurrent);
		}
		ceacar.subscribe(attributeIDList, callbackResultFunction, null, callbackErrorFunction);
	}; 


	/**
	 * Unsubscribes the related signals list
	 * 
	 * @param signalname {Array} Array with the different car signal names to get
	 * @param callbackResultFunction {Function} The callback result function
	 * @param callbackErrorFunction {Function} The callback error function
	 * @public
	 */
	this.unsubscribeArray = function(signalsarray, callbackResultFunction, callbackErrorFunction) {
		var attributeIDList = [];

		for (i = 0; i < signalsarray.length; i++) {	
			var signalname = signalsarray[i];
			console.info("Unsubscribing Signal: " + signalname);
			var objCurrent = {};
			objCurrent[signalname] = '';
			attributeIDList.push(objCurrent);
		}
		ceacar.unsubscribe(attributeIDList, callbackResultFunction, null, callbackErrorFunction);
	}; 
}




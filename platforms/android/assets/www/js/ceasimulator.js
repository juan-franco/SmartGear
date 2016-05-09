cordova.define("cordova/plugin/ceasimulator", function(require, exports, module) {

  var exec = cordova.require('cordova/exec');

  /**
   * @constructor
   * @alias CEASimulator
   */
  var CEASimulator = function() {

  };

  /**
   * Gets from car simulator the attribute values request in attributes
   * parameter.
   * 
   * 
   * @param attributes
   *          {Array} The car signal value
   * @param successCallback
   *          {Function} The callback result function
   * @param errorCallback
   *          {Function} The callback error function
   */
  CEASimulator.prototype.get = function(attributes, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CEASimulator", "get", [ JSON.stringify(attributes) ]);
  },

  /**
   * Sets to car simulator the attributes values which IDs are passed as
   * parameters.
   * 
   * 
   * @param attributes
   *          {Array} The car signal value
   * @param successCallback
   *          {Function} The callback result function
   * @param errorCallback
   *          {Function} The callback error function
   */
  CEASimulator.prototype.set = function(attributes, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CEASimulator", "set", [ JSON.stringify(attributes) ]);
  },

  /**
   * Subscribe car simulator values. Notifies to successCallback {Function}
   * whenever a value of attribute passed as parameter has changed.
   * 
   * @param attributes
   *          {Array} The car signal value
   * @param successCallback
   *          {Function} The callback result function
   * @param errorCallback
   *          {Function} The callback error function
   * 
   */
  CEASimulator.prototype.subscribe = function(attributes, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CEASimulator", "subscribe", [ JSON.stringify(attributes) ]);
  },

  /**
   * Unsubscribe car simulator values. Remove the notification of change of the
   * attribute values.
   * 
   * @param attributes
   *          {Array} The car signal value
   * @param successCallback
   *          {Function} The callback result function
   * @param errorCallback
   *          {Function} The callback error function
   */
  CEASimulator.prototype.unsubscribe = function(attributes, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CEASimulator", "unsubscribe", [ JSON.stringify(attributes) ]);
  },

  // login
  /*
   * Log in into car simulator.
   * 
   * @param user
   *          {String} The user
   * @param password
   *          {String} The password
   * @param successCallback
   *          {Function} The callback result function
   * @param errorCallback
   *          {Function} The callback error function
   */
  CEASimulator.prototype.login = function(user, password, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CEASimulator", "login", [ user, password ]);
  },

  module.exports = new CEASimulator();
});
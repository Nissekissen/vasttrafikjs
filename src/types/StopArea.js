const Client = require('../Client');
const StopBase = require('./base/StopBase');

module.exports = class StopArea extends StopBase {
    /**
     * The class containing information about a StopArea.
     * 
     * @param {Client} client 
     * @param {Object} options 
     */
    constructor(client, options) {
        super(client, options);
    }
    
}

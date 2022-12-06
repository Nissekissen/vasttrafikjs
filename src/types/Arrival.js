const ArrivalDepartureBase = require('./base/ArrivalDepartureBase');

module.exports = class Arrival extends ArrivalDepartureBase {
    /**
     * The class containing information about an Arrival.
     * 
     * @param {Client} client 
     * @param {Object} options 
     */
    constructor(client, options) {
        super(client, options);
    }
}
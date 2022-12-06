const Departure = require('./Departure');
const BoardBase = require('./base/BoardBase');

module.exports = class DepartureBoard extends BoardBase {
    /**
     * The class containing information about a DepartureBoard.
     * 
     * @param {Client} client 
     * @param {Object} options 
     */
    constructor(client, options) {
        super(client, options);
        if (this.Departure != undefined) {
            this.departures = [];
            for (const departure of this.Departure) {
                this.departures.push(new Departure(client, departure));
            }
        }
    }
}
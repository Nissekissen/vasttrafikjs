const Arrival = require('./Arrival');
const BoardBase = require('./base/BoardBase');

module.exports = class ArrivalBoard extends BoardBase {
    /**
     * The class containing information about an ArrivalBoard.
     * 
     * @param {Client} client 
     * @param {Object} options 
     */
    constructor(client, options) {
        super(client, options);
        if (this.Arrival != undefined) {
            this.arrivals = [];
            for (const departure of this.Arrival) {
                this.arrivals.push(new Arrival(client, departure));
            }
        }
    }
}
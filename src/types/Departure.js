import ArrivalDepartureBase from "./base/ArrivalDepartureBase.js";

export default class Departure extends ArrivalDepartureBase {
    /**
     * Data about a specific Departure.
     * 
     * @param {Client} client 
     * @param {Object} options 
     */
    constructor(client, options) {
        super(client, options);
    }
}
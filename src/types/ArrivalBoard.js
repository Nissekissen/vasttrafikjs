import Arrival from "./Arrival.js";
import BoardBase from "./base/BoardBase.js";

export default class ArrivalBoard extends BoardBase {
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
import Base from "./Base.js";

export default class StopBase extends Base {
    constructor(client, options) {
        super(options);
        this.client = client;
    }
    async getDepartureBoard() {

    }
    async getArrivalBoard() {
        
    }
}
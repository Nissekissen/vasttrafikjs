import Base from "./Base.js";
import Request from "../../utils/Request.js";
import APIType from "../API/APIType.js";
import Reseplaneraren from "../API/Reseplaneraren.js";
import RawRequest from "../../utils/RawRequest.js";

export default class ArrivalDepartureBase extends Base {
    constructor(client, options) {
        super(options);
        this.client = client;
    }
    async getJourneyDetails() {
        // const request = new Request(this.client.token, 'GET', APIType.Reseplaneraren, Reseplaneraren.journeyDetail, {ref: this.JourneyDetailRef.ref}, {});
        const request = new RawRequest(this.client.token, this.JourneyDetailRef.ref, 'GET', {}, {});
        const response = await request.getResponse();
        return await response.json();
    }
}
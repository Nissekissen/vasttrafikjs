import StopArea from "./StopArea.js";
import Request from "../utils/Request.js";

export default class StopPoint {
    constructor(client, options) {
        this.client = client;
        const entries = Object.entries(options)
        for (const option of entries) {
            this[option[0]] = option[1]
        }
    }
    async getStopArea() {
        const request = new Request(this.token, 'GET', 'geo/v2', 'StopAreas/' + this.stopAreaGid, {"includeStopPoints": true}, {})
        const response = await request.getResponse();
        const jsonData = await response.json();
        return new StopArea(jsonData.stopArea)
    }
}
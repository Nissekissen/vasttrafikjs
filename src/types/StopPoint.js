import StopArea from "./StopArea.js";
import Request from "../utils/Request.js";
import StopBase from "./base/StopBase.js";

export default class StopPoint extends StopBase {
    constructor(client, options) {
        super(client, options)
    }
    async getStopArea() {
        const request = new Request(this.client.token, 'GET', 'geo/v2', 'StopAreas/' + this.stopAreaGid, {"includeStopPoints": true}, {})
        const response = await request.getResponse();
        const jsonData = await response.json();
        return new StopArea(jsonData.stopArea)
    }
}
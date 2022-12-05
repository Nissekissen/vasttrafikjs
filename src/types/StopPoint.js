import StopArea from "./StopArea.js";
import Request from "../utils/Request.js";
import StopBase from "./base/StopBase.js";

export default class StopPoint extends StopBase {

    /**
     * The class containing information about a StopPoint.
     * 
     * @param {*} client 
     * @param {*} options 
     */
    constructor(client, options) {
        super(client, options)
    }
    /**
     * Get data about the linked stopArea.
     * 
     * @returns {StopArea} The stopArea linked to this stopPoint.
     */
    async getStopArea() {
        const request = new Request(this.client.token, 'GET', 'geo/v2', 'StopAreas/' + this.stopAreaGid, {"includeStopPoints": true}, {})
        const response = await request.getResponse();
        const jsonData = await response.json();
        return new StopArea(jsonData.stopArea)
    }
}
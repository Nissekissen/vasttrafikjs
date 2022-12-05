import Client from "../Client.js";
import StopBase from "./base/StopBase.js"

export default class StopArea extends StopBase {
    /**
     * The class containing information about a StopArea.
     * 
     * @param {Client} client 
     * @param {Object} options 
     */
    constructor(client, options) {
        super(client, options);
    }
    
}

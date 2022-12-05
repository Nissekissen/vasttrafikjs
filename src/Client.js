import fetch from 'node-fetch'
import APIType from './types/API/APIType.js';
import Geography from './types/API/Geography.js';
import StopArea from './types/StopArea.js';
import StopPoint from './types/StopPoint.js';
import Token from './types/Token.js';
import Request from './utils/Request.js';

export default class Client {
    /**
     * The main class of the library. It is from this class that you can access data about stopPoints and journeys.
     * 
     * @param {Token} token 
     */
    constructor(token) {
        if (token) {
            this.token = token;
        }
    }
    /**
     * 
     * @param {string} publicToken The public token on your Developer Portal.
     * @param {string} privateToken The private token on your Developer Portal.
     * @param {string} deviceId The id for the current device.
     * @returns {Token} The token for this device.
     * 
     * You can find information about the public and private tokens on https://developer.vasttrafik.se/
     */
    async generateToken(publicToken, privateToken, deviceId) {
        const url = `https://api.vasttrafik.se/token?grant_type=client_credentials&scope=${deviceId}`;
        const accessToken = btoa(publicToken + ':' + privateToken) + "="
        const response = await fetch(url, { method: 'POST', headers: { "Content-Type": "application/x-www-form-urlencoded", 'Authorization': `Basic ${accessToken}` } })
        const token = new Token(await response.json())
        this.token = token;
        return token;
    }
    /**
     * Get the information about a stopPoint from its ID.
     * Read more here: https://developer.vasttrafik.se/portal/#/api/Geography/v2/admin
     * 
     * @param {string} id The id for the stopPoint.
     * @returns {StopPoint} The found stoppoint.
     */
    async getStopPointById(id) {
        const request = new Request(this.token, 'GET', APIType.Geography, Geography.StopPoints + id, {}, {});
        const response = await request.getResponse();
        const jsonData = await response.json();

        return new StopPoint(this, jsonData.stopPoint);
    }

    /**
     * Get information about a StopArea from its ID.
     * Read more here: https://developer.vasttrafik.se/portal/#/api/Geography/v2/admin
     * 
     * @param {string} id The ID for the Stop Area.
     * @returns {StopArea} The found StopArea.
     */
    async getStopAreaById(id) {
        const request = new Request(this.token, 'GET', APIType.Geography, Geography.StopAreas + id, {"includeStopPoints": true}, {})
        const response = await request.getResponse();
        const jsonData = await response.json();
        return new StopArea(this, jsonData.stopArea);
    }
    
    /**
     * Get information about a StopArea from its name. 
     * Read more here: https://developer.vasttrafik.se/portal/#/api/Geography/v2/admin
     * 
     * @param {string} name The name of the StopArea. Must be an exact match.
     * @returns {StopArea} The found stoparea.
     */
    async getStopAreaByName(name) {
        const request = new Request(this.token, 'GET', APIType.Geography, Geography.StopAreas, {"name": name, "includeStopPoints": true}, {})
        const response = await request.getResponse();
        const jsonData = await response.json();
        return new StopArea(this, jsonData.stopAreas[0]);
    }
}
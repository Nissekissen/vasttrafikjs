import fetch from 'node-fetch'
import APIType from './types/API/APIType.js';
import Geography from './types/API/Geography.js';
import StopArea from './types/StopArea.js';
import StopPoint from './types/StopPoint.js';
import Token from './types/Token.js';
import Request from './utils/Request.js';

export default class Client {
    constructor(token) {
        if (token) {
            this.token = token;
        }
    }
    async generateToken(publicToken, privateToken, deviceId) {
        const url = `https://api.vasttrafik.se/token?grant_type=client_credentials&scope=${deviceId}`;
        const accessToken = btoa(publicToken + ':' + privateToken) + "="
        const response = await fetch(url, { method: 'POST', headers: { "Content-Type": "application/x-www-form-urlencoded", 'Authorization': `Basic ${accessToken}` } })
        const token = new Token(await response.json())
        this.token = token;
        return token;
    }
    async getStopPointById(id) {
        const request = new Request(this.token, 'GET', APIType.Geography, Geography.StopPoints + id, {}, {});
        const response = await request.getResponse();
        const jsonData = await response.json();

        return new StopPoint(this, jsonData.stopPoint);
    }
    async getStopAreaById(id) {
        const request = new Request(this.token, 'GET', APIType.Geography, Geography.StopAreas + id, {"includeStopPoints": true}, {})
        const response = await request.getResponse();
        const jsonData = await response.json();
        return new StopArea(this, jsonData.stopArea);
    }
    async getStopAreaByName(name) {
        const request = new Request(this.token, 'GET', APIType.Geography, Geography.StopAreas, {"name": name, "includeStopPoints": true}, {})
        const response = await request.getResponse();
        const jsonData = await response.json();
        return new StopArea(this, jsonData.stopAreas[0]);
    }
}
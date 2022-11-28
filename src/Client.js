import fetch from 'node-fetch'
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
        const request = new Request(this.token, 'GET', 'geo/v2', 'StopPoints/' + id, {}, {});
        const response = await request.getResponse();
        return await response.text();
    }
    async getStopAreaById(id) {
        const request = new Request(this.token, 'GET', 'geo/v2', 'StopAreas/' + id, {}, {})
        const response = await request.getResponse();
        return await response.text();
    }
}
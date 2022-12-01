import fetch from 'node-fetch';
import RequestError from '../errors/RequestError.js';
import paramUtils from './params.js'



export default class Request {
    /**
     * 
     * @param {string} token Access token 
     * @param {string} method Request type, for example GET or POST
     * @param {APIType | String} api API Type
     * @param {Object} params Request parameters
     * @param {Object} headers Request headers (not including token)
     */
    constructor(token, method, api, option, paramsObject, headers) {
        let params = paramUtils.paramsObjectToString(paramsObject)
        this.url = `https://api.vasttrafik.se/${api}/${option}${params}`
        this.method = method
        this.headers = headers
        this.headers['Authorization'] = `${token.token_type} ${token.access_token}`
    }
    async getResponse() {
        this.response = await fetch(this.url, {
            method: this.method,
            headers: this.headers
        })
        if (this.response.status != 200) {
            throw new RequestError(await this.response.text());
        }
        return this.response;
    }
}
const RequestError = require('../../errors/RequestError')
const fetch = require('node-fetch');
const APIResponse = require('../../utils/APIResponse');

module.exports = class RequestBase {
    /**
     * 
     * @param {Token} token Access token.
     * @param {string} method The request method. Usually 'GET' or 'POST'.
     * @param {string} url The request URL.
     * @param {Object} headers Optional headers. Leave as {} if not used.
     */
    constructor(token, method, url, headers) {
        this.token = token;
        this.method = method;
        this.url = url;
        this.headers = headers;
    }
    /**
     * Send the request and get the response. 
     * 
     * @returns The response. JSON data can be accessed using `await response.json()`
     */
    async getResponse() {
        this.response = await fetch(this.url, {
            method: this.method,
            headers: this.headers
        })
        if (this.response.status != 200) {
            throw new RequestError(await this.response.text());
        }
        return new APIResponse(this.response);
    }
}
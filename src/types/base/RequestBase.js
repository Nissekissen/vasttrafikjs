import fetch from "node-fetch";
import RequestError from "../../errors/RequestError.js";

export default class RequestBase {
    constructor(token, method, url, headers) {
        this.token = token;
        this.method = method;
        this.url = url;
        this.headers = headers;
    }
    async getResponse() {
        console.log(this.headers)
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
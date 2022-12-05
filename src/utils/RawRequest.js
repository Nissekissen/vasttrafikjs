import RequestBase from "../types/base/RequestBase.js";
import paramUtils from "./params.js";

export default class RawRequest extends RequestBase {
    /**
     * If you want to send a request that is not based on the regular url.
     * 
     * @param {Token} token 
     * @param {string} url 
     * @param {string} method 
     * @param {Object} paramsObject 
     * @param {Object} headers 
     */
    constructor(token, url, method, paramsObject, headers) {
        super(token, method, url, headers)
        let params = paramUtils.paramsObjectToString(paramsObject)
        this.url = `${url}${params}`;
        this.method = method;
        this.headers = headers;
        this.headers['Authorization'] = `${token.token_type} ${token.access_token}`;
        
    }
}
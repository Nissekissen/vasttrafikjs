const RequestBase = require('../types/base/RequestBase');
const paramUtils = require('./params');

module.exports = class Request extends RequestBase {
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
        let url = `https://api.vasttrafik.se/${api}/${option}${params}`;
        headers['Authorization'] = `${token.token_type} ${token.access_token}`
        super(token, method, url, headers);
    }
}
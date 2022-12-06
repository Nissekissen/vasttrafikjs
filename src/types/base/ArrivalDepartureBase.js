const Base = require('./Base');
const RawRequest = require('../../utils/RawRequest');

module.exports = class ArrivalDepartureBase extends Base {
    constructor(client, options) {
        super(options);
        this.client = client;
    }
    async getJourneyDetails() {
        const request = new RawRequest(this.client.token, this.JourneyDetailRef.ref, 'GET', {}, {});
        const response = await request.getResponse();
        return await response.json();
    }
}
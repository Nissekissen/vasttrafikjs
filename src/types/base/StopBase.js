const Base = require('./Base');
const Request = require('../../utils/Request');
const APIType = require('../API/APIType');
const Reseplaneraren = require('../API/Reseplaneraren');
const DepartureBoard = require('../DepartureBoard');
const ArrivalBoard = require('../ArrivalBoard');

module.exports = class StopBase extends Base {
    constructor(client, options) {
        super(options);
        this.client = client;
    }
    /**
     * Get the departureboard of this Stop. 
     * 
     * @param {Date} date The selected date. If not specified, current time is used.
     * @returns a new DepartureBoard.
     */
    async getDepartureBoard(date) {
        if (!date) date = new Date();
        const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        const timeString = `${date.getHours()}%3A${date.getMinutes()}`;
        const request = new Request(this.client.token, 'GET', APIType.Reseplaneraren, Reseplaneraren.departureBoard, {id: this.gid, date: dateString, time: timeString, format: 'json'}, {});
        const response = await request.getResponse();
        const jsonData = await response.json();
        this.departureBoard = jsonData.DepartureBoard
        return new DepartureBoard(this.client, jsonData.DepartureBoard);
    }
    /**
     * Get the ArrivalBoard of this Stop.
     * 
     * @param {Date} date The selected date. If not specified, current time is used.
     * @returns a new ArrivalBoard.
     */
    async getArrivalBoard(date) {
        if (!date) date = new Date();
        const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        const timeString = `${date.getHours()}%3A${date.getMinutes()}`;
        const request = new Request(this.client.token, 'GET', APIType.Reseplaneraren, Reseplaneraren.departureBoard, {id: this.gid, date: dateString, time: timeString, format: 'json'}, {});
        const response = await request.getResponse();
        const jsonData = await response.json();
        this.arrivalBoard = jsonData.ArrivalBoard
        return new ArrivalBoard(this.client, jsonData.ArrivalBoard);
    }
}
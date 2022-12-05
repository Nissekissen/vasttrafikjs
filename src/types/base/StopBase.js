import Base from "./Base.js";
import Request from "../../utils/Request.js";
import APIType from "../API/APIType.js";
import Reseplaneraren from "../API/Reseplaneraren.js";
import DepartureBoard from "../DepartureBoard.js";
import ArrivalBoard from "../ArrivalBoard.js";

export default class StopBase extends Base {
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
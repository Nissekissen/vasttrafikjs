import fetch from 'node-fetch';
import Client from './Client.js';
import StopPoint from './types/StopPoint.js';
import Token from './types/Token.js';
import params from './utils/params.js'

const apiToken = "cd095dda-538e-39b3-a1eb-0a1236f42f5b";

const getToken = btoa('7QJeI1ydNj54P9B8qYDuTfffrXsa:4t06wWjb8YByV3PXhASn37eX00Ea') + "="

const client = new Client();

const StopPoint = new StopPoint({test: 'test2'});

client.generateToken('7QJeI1ydNj54P9B8qYDuTfffrXsa', '4t06wWjb8YByV3PXhASn37eX00Ea', 'device_423481701').then(async response => {
    console.log(response)
})



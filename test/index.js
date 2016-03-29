'use strict'

let Learnard = require('../').Learnard;
let Neuron = require('../').Neuron;

let bot = new Learnard([2,3,1]);
console.log(bot.layers);

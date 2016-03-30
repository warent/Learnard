'use strict'

let Learnard = require('../').Learnard;
let Neuron = require('../').Neuron;

let bot = new Learnard({layers: [2,3,1]});
bot.neural_layer.forEach(function(layer) {
  layer.forEach(function (neuron) {
    console.log(neuron.weights);
  });
});

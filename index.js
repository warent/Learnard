'use strict'
let math = require('mathjs');

class Neuron {

  constructor(bias, weights) {
    this.bias = bias || 0;
    this.weights = weights || [];
  }

  sigmoid(z) {
    let calculated = 1.0/(1.0+math.exp(-z));
  }

  sigmoid_prime(z) {
    let sig = sigmoid(z);
    return sig*(1-sig);
  }

  feed(input) {
    return sigmoid(math.dot(this.weights, input)+this.bias);
  }

}

class Learnard {

  constructor(layers) {
    this.layers = math.matrix(layers);
    this.neurons = [];

    // Initialize our neural layers
    // The first layer of neurons, by definition, don't accept inputs and therefore don't accept weights or biases
    this.neurons.push([]);
    for (let i = 0; i < layers[0].length; i++) {
      this.neurons[0].push(new Neuron());
    }
    // Now our hidden and output layers
    for (let i = 1; i < layers.length; i++) {
      this.neurons.push([]);
      for (let n = 0; n < layers[i]; n++) {
        let sprout = new Neuron(math.randomInt(1, 10), math.randomInt(1, 10));
        this.neurons[i].push(sprout);
      }
    }
  }


}

module.exports.Learnard = Learnard;
module.exports.Neuron = Neuron;

'use strict'
let math = require('mathjs');

class Neuron {

  constructor(params) {
    params = params || {};
    this.inputs = params.inputs || 1;
    if (!params.weights) {
      // Initialize default weights (1) if none specified
      this.weights = [];
      for (let i = 0; i < this.inputs; i++) {
        this.weights.push(1);
      }
    } else {
      this.weights = params.weights;
    }
    // Vectorize array
    this.weights = math.matrix(this.weights);
    this.bias = params.bias || 0;
  }

  sigmoid(z) {
    let calculated = 1.0/(1.0+math.exp(-z));
  }

  sigmoid_prime(z) {
    let sig = sigmoid(z);
    return sig*(1-sig);
  }

  feed(inputs) {
    return sigmoid(math.dot(this.weights, inputs)+this.bias);
  }

}

class Learnard {

  constructor(layers) {
    this.layers = math.matrix(layers);
    this.neural_layer = [];
    this.neural_inputs = 2;

    // Initialize our neural layers
    // The first layer of neural_layer, by definition, don't accept inputs and therefore don't accept weights or biases
    this.neural_layer.push([]);
    for (let i = 0; i < layers[0].length; i++) {
      this.neural_layer[0].push(new Neuron());
    }
    // Now our hidden and output layers
    for (let i = 1; i < layers.length; i++) {
      this.neural_layer.push([]);
      for (let n = 0; n < layers[i]; n++) {
        let sprout = new Neuron({
          inputs: this.neural_inputs,
          weights: math.random(math.range(1, this.neural_inputs+1)),
          bias: math.random()
        });
        this.neural_layer[i].push(sprout);
      }
    }
  }
}

module.exports.Learnard = Learnard;
module.exports.Neuron = Neuron;

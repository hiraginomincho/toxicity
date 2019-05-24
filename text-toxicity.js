"use strict";

console.log("Toxicity: Using TensorFlow.js version " + tf.version.tfjs);

const threshold = 0.9;

let model;

const predict = async() => {
  model = await toxicity.load(threshold);
  console.log("Toxicity: ready");
  Toxicity.ready();
};

function classifyTextData(text) {
  const sentences = [text];
  model.classify(sentences).then(predictions => {
    var result = [];
    for (let i = 0; i < predictions.length; i++) {
      result.push([predictions[i]["label"], predictions[i]["results"][0]["probabilities"][1]]);
    }
    console.log("Toxicity: " + JSON.stringify(result));
    Toxicity.reportResult(JSON.stringify(result));
  });
}

predict();

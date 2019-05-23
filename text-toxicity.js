"use strict";

console.log("Toxicity: Using TensorFlow.js version " + tf.version.tfjs);

const threshold = 0.9;

function classifyTextData(text) {
  toxicity.load(threshold).then(model => {
    const sentences = [text];
    model.classify(sentences).then(predictions => {
        console.log(predictions);
    });
  });
}

const express = require('express');
const app = express();

app.use(express.static('docs'))

module.exports = app;

// var path = require('path');

// function tf_load_status() {
//     const status = document.getElementById('status');
//     status.innerText = 'Loaded TensorFlow.js - version: ' + tf.version.tfjs;
//     console.log('Hello TensorFlow');
// }
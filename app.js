const express = require('express');
const app = express();

var path = require('path');

function tf_load_status() {
    const status = document.getElementById('status');
    status.innerText = 'Loaded TensorFlow.js - version: ' + tf.version.tfjs;
    console.log('Hello TensorFlow');
}

app.use(express.static('static'))

module.exports = app;
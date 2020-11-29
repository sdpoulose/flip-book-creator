(function localFileVideoPlayer() {
  'use strict'
  var URL = window.URL || window.webkitURL
  var displayMessage = function (message, isError) {
    var element = document.querySelector('#message')
    element.innerHTML = message
    element.className = isError ? 'error' : 'info'
  }
  var playSelectedFile = function (event) {
    var file = this.files[0]
    var type = file.type
    var videoNode = document.querySelector('video')
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') canPlay = 'no'
    var message = 'Can play type "' + type + '": ' + canPlay
    var isError = canPlay === 'no'
    displayMessage(message, isError)

    if (isError) {
      return
    }

    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL
  }
  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', playSelectedFile, false)
})()

var video = document.querySelector('video');
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var w, h, ratio;

video.addEventListener('loadedmetadata', function () {
  ratio = video.videoWidth / video.videoHeight;
  w = video.videoWidth - 100;
  h = parseInt(w / ratio, 10);
  canvas.width = w;
  canvas.height = h;
}, false);

function snap() {
  context.fillRect(0, 0, w, h);
  context.drawImage(video, 0, 0, w, h);
  var link = document.createElement('a');
  link.download = 'filename.png';
  link.href = document.getElementById('canvas').toDataURL()
  link.click();
}

function capture() {
  setInterval(snap, 1500);
}
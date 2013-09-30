
var exec = require("cordova/exec");

function LowLatencyAudio() {}
  
LowLatencyAudio.prototype.preloadFX = function ( id, assetPath, success, fail) {
    return exec(success, fail, "LowLatencyAudio", "preloadFX", [id, assetPath]);
};
    
LowLatencyAudio.prototype.preloadAudio = function ( id, assetPath, voices, success, fail) {
    return exec(success, fail, "LowLatencyAudio", "preloadAudio", [id, assetPath, voices]);
};
    
LowLatencyAudio.prototype.play = function (id, success, fail) {
    return exec(success, fail, "LowLatencyAudio", "play", [id]);
};
    
LowLatencyAudio.prototype.stop = function (id, success, fail) {
    return exec(success, fail, "LowLatencyAudio", "stop", [id]);
};
    
LowLatencyAudio.prototype.loop = function (id, success, fail) {
    return exec(success, fail, "LowLatencyAudio", "loop", [id]);
};
    
LowLatencyAudio.prototype.unload = function (id, success, fail) {
    return exec(success, fail, "LowLatencyAudio", "unload", [id]);
};  

LowLatencyAudio.prototype.volume = function ( id, value, success, fail) {
    return exec(success, fail, "LowLatencyAudio", "setVolume", [id, value]);
};

module.exports = new LowLatencyAudio();

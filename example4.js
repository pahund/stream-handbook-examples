// usage: node example4.js

var Readable = require("stream").Readable,
    c = 97,
    alphabetStream;

function AlphabetStream() {
    Readable.call(this);
}

AlphabetStream.prototype = new Readable();

AlphabetStream.prototype._read = function () {
    this.push(String.fromCharCode(c++));
    if (c > "z".charCodeAt(0)) {
        this.push(null);
    }
};

alphabetStream = new AlphabetStream();

alphabetStream.pipe(process.stdout);

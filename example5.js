// usage: node example5.js  | head -c5

var Readable = require("stream").Readable,
    c = 97 - 1,
    alphabetStream;

function AlphabetStream() {
    Readable.call(this);
}

AlphabetStream.prototype = new Readable();

AlphabetStream.prototype._read = function () {
    if (c >= "z".charCodeAt(0)) {
        return this.push(null);
    }
    setTimeout((function () {
        this.push(String.fromCharCode(++c));
    }).bind(this), 100);
};

alphabetStream = new AlphabetStream();

alphabetStream.pipe(process.stdout);

process.on("exit", function () {
    console.error("\n_read() called " + (c - 97) + " times");
});

process.stdout.on("error", process.exit);


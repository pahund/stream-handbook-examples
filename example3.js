// usage: node example3.js

var Readable = require("stream").Readable,
    readable = new Readable();

readable.push("foo");
readable.push("bar");
readable.push(null);
readable.pipe(process.stdout);

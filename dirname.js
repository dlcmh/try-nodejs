// run with `node dirname.js`

// http://stackoverflow.com/a/8817507/998664
// __dirname cannot be run within the Node REPL
// __dirname means 'The directory of this script'.
// In REPL, you don't have a script. Hence, __dirname would not have
// any real meaning.
console.log(__dirname);

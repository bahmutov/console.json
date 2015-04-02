// arguments to JSON.stringify described in standard
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

(function init(root) {


  function consoleJson(replacer, space) {
    if (typeof replacer === 'number') {
      space = replacer;
      replacer = null;
    }
    if (typeof space === 'undefined') {
      space = 2;
    }

    setConsoleJson(replacer, space);
  }

  function setConsoleJson(replacer, space) {
    if (typeof space === 'number') {
      console.assert(space >= 0, 'invalid space number ' + space);
    } else if (typeof space !== 'string') {
      throw new Error('space argument should be either number of string, not ' + space);
    }

    console.json = function consoleJsonWorker() {
      var args = Array.prototype.slice.call(arguments);
      args = args.map(function (k) {
        if (typeof k === 'object' || Array.isArray(k)) {
          return JSON.stringify(k, replacer, space);
        }
        return k;
      });
      console.log.apply(console, args);
    };
  }

  setConsoleJson(null, 2);

  if (typeof module !== 'undefined') {
    module.exports = consoleJson;
  } else {
    root.consoleJson = consoleJson;
  }
}(this));

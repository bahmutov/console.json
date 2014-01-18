if (typeof console.json === 'undefined') {
  console.json = function () {
    var args = Array.prototype.slice.call(arguments);
    args = args.map(function (k) {
      if (typeof k === 'object' || typeof k === 'array') {
        return JSON.stringify(k, null, 2);
      }
      return k;
    });
    console.log.apply(null, args);
  };
}
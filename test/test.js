require('..');

var foo = {
    n: 21,
    bar: {
      a: ['first', 'second']
    }
};
console.json('foo', foo);
console.log('foo', foo);
const { inspect } = require('util');

module.exports = function spreadObject(obj) {
  console.log(
    inspect(obj, {
      numericSeparator: true,
      maxStringLength: Infinity,
      maxArrayLength: Infinity,
      breakLength: Infinity,
      compact: false,
      depth: Infinity,
    })
  );
};

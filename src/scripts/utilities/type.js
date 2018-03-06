import getType from './typeof';

// Undefined, Null, Boolean, String, Symbol, Number, and Object

const isUndefined = _var => getType(_var) === 'undefined';

const isNull = _var => getType(_var) === 'null';

const isBoolean = bool => getType(bool) === 'boolean';

const isString = str => getType(str) === 'string';

const isSymbol = sym => getType(sym) === 'symbol';

const isNumber = num => getType(num) === 'number';

const isObject = obj => getType(obj) === 'object';

// Others

const isArray = obj => Array.isArray(obj);

const isFunction = fn => {
  let type = getType(fn);
  return type === 'function' || type === 'generatorfunction';
};

export {
  getType,
  isUndefined,
  isNull,
  isBoolean,
  isNumber,
  isString,
  isSymbol,
  isObject,
  isArray,
  isFunction
};

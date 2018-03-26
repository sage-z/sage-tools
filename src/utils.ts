'use strict';


// /**
//  * 遍历数组或对象调用每个项目的函数。
//  *
//  * If `obj` is an Array callback will be called passing
//  * the value, index, and complete array for each item.
//  *
//  * If 'obj' is an Object callback will be called passing
//  * the value, key, and complete object for each property.
//  *
//  * @param {Object|Array} obj The object to iterate
//  * @param {Function} fn The callback to invoke for each item
//  */
// function forEach(obj, fn) {
//   // Don't bother if no value provided
//   if (obj === null || typeof obj === 'undefined') {
//     return;
//   }

//   // Force an array if not already something iterable
//   if (typeof obj !== 'object') {
//     /*eslint no-param-reassign:0*/
//     obj = [obj];
//   }

//   if (isArray(obj)) {
//     // Iterate over array values
//     for (var i = 0, l = obj.length; i < l; i++) {
//       fn.call(null, obj[i], i, obj);
//     }
//   } else {
//     // Iterate over object keys
//     for (var key in obj) {
//       if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         fn.call(null, obj[key], key, obj);
//       }
//     }
//   }
// }

// /**
//  * Accepts varargs expecting each argument to be an object, then
//  * immutably merges the properties of each object and returns result.
//  *
//  * When multiple objects contain the same key the later object in
//  * the arguments list will take precedence.
//  *
//  * Example:
//  *
//  * ```js
//  * var result = merge({foo: 123}, {foo: 456});
//  * console.log(result.foo); // outputs 456
//  * ```
//  *
//  * @param {Object} obj1 Object to merge
//  * @returns {Object} Result of all merge properties
//  */
// function merge(/* obj1, obj2, obj3, ... */) {
//   var result = {};
//   function assignValue(val, key) {
//     if (typeof result[key] === 'object' && typeof val === 'object') {
//       result[key] = merge(result[key], val);
//     } else {
//       result[key] = val;
//     }
//   }

//   for (var i = 0, l = arguments.length; i < l; i++) {
//     forEach(arguments[i], assignValue);
//   }
//   return result;
// }

export = {
  // forEach: forEach,
  // merge: merge
};
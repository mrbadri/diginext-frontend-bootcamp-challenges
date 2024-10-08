/**
 * Returns a flatten object. Remember that the level of nesting is not specified.
 * Use case. Form creation for nested objects or lists.
 *
 * @param {object} object An object that may be nested.
 *
 * @returns flatten object.
 *
 * @example flatten({"a": {"b": {"c": "d"}}}) => {"a.b.c": "d"}
 *
 */
function flatten(object) {
  const obj = {};

  const helper = (object, preKey = "") => {
    for (key in object) {
      const val = object[key];
      const newKey = preKey + key;

      if (typeof val === "object" && val !== null && !Array.isArray(val)) {
        helper(object[key], newKey + ".");
      } else {
        return (obj[newKey] = val);
      }
    }
  };

  helper(object);

  return obj;
}

const result = flatten({
  a: { b: { c: { d: "test2" } } },
  bb: { b: { c: { d: "test3" } }, ali: 123 },
});

// console.log(result);

/**
 * Returns a nested object. Remember that the level of nesting is not specified.
 *
 * @param {object} object A flat object
 *
 * @returns maybe nested object
 *
 * @example revertFlatten({"a.b.c": "d"}) => {"a": {"b": {"c": "d"}}}
 *
 */
function revertFlatten(object) {
  const obj = {};

  const helper = (obj, i = 0) => {
    for (key in object) {
      const val = object[key];
      const keyList = key.split(".");
      const currentKey = keyList[i];

      if (!keyList?.[i + 1]) {
        obj[currentKey] = val;
        return obj;
      } else {
        obj[currentKey] = {};
      }

      helper(obj[currentKey], i + 1);
    }
  };

  helper(obj);

  return obj;
}

const res2 = revertFlatten({ "a.b.c": "d", "d.s.a.d": "al" });
console.log(res2);

// => {"a": {"b": {"c": "d"}}}

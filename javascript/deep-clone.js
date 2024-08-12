/**
 * Creates a deep copy of the arg. Remember that the arg can be nested with infinite levels.
 * Use case: List copy. Object copy.
 *
 * @param {JSON serializable value} arg Any JSON serializable value
 *
 * @returns An Literal exact copy of the arg
 */
function deepClone(arg) {
  if (typeof arg !== "object" || arg === null) return arg;

  if (Array.isArray(arg)) {
    const copy = arg.map((item) => deepClone(item));
    return copy;
  }

  if (typeof arg === "object") {
    const copy = {};

    for (key in arg) {
      copy[key] = deepClone(arg[key]);
    }

    return copy;
  }
}
const arg = {
  a: { b: "test", l: 12 },
  c: { b: "test" },
  f: [1, 2, "3s", { h: { k: 12121 } }],
};

console.log(deepClone(arg));

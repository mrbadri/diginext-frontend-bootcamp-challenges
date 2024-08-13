/**
 *
 * This function will get 2 objects and returns the changes in the format provided at the end of the file.
 * Use case: Git file diff
 *
 * @param {object} oldObject
 * @param {object} newObject
 *
 * @returns diff object.
 */
function jsonDiff(oldObject, newObject) {
  const diff = {};

  for (key in newObject) {
    if (key in oldObject) {
      if (oldObject[key] !== newObject[key]) {
        diff[key] = {
          type: "modified",
          oldValue: oldObject[key],
          newValue: newObject[key],
        };
      }
    } else {
      diff[key] = {
        type: "added",
        newValue: newObject[key],
      };
    }
  }

  for (key in oldObject) {
    if (!(key in newObject)) {
      diff[key] = {
        type: "removed",
        oldValue: oldObject[key],
      };
    }
  }

  console.log(diff);

  return diff;
  // TODO: Implement here
}

jsonDiff({ k1: 1, k2: 2 }, { k1: 21, k3: 123 });

// {
//     "key1": {
//         "type": "modified",
//         "oldValue": "old value",
//         "newValue": "new value"
//     },
//     "key 2": {
//         "type": "added",
//         "newValue": "new value"
//     },
//     "key 3": {
//         "type": "removed",
//         "oldValue": "old value"
//     },
//     ...
// }

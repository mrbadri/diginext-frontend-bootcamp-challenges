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
  // TODO: Implement here
}

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

// module.exports.items = ['item1','item2']
// const person = {
//     name:'bob',
// }
// module.exports.singleperson = person

const i = require("lodash");
const items  = [1,[2,[3,[4]]]];
const newItems = i.flattenDeep(items);
console.log(newItems);
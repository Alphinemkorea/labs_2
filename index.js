const group1 = ["John", "Mary"];
const group2 = ["Alex", "Jane"];
const group3 = ["Mike"];

function combineUsers(...arrays) {
  let result = [];

  for (let arr of arrays) {
    result = result.concat(arr);
  }

  return result;
}

const combined = combineUsers(group1, group2, group3);

console.log(combined);

function combineUsers(...arrays) {
  return {
    users: arrays.flat(),
    createdAt: new Date()
  };
}
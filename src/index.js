module.exports = function check (str, bracketsConfig) {
  let arr = [];
  let map = new Map();
    
  for (const iter of bracketsConfig) {
    map.set(iter[0], iter[1]);
  } 
  arr.push(str[0]);
  for (let i = 1; i < str.length; i++) {
    if (str[i] === map.get(arr[arr.length - 1])) arr.pop(); 
    else arr.push(str[i]);
  }
  if (arr.length > 0) return false;
  return true;
}


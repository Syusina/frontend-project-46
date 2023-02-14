import { readFileSync } from 'fs';

const stringify = (value, replacer = ' ', spacesCount = 1) => {
  const iter = (currentValue, depth) => {
    if (typeof (currentValue) !== 'object' || currentValue === null) {
      return String(currentValue);
    }
    const a = depth * spacesCount;
    const b = replacer.repeat(a);
    const c = replacer.repeat(a - spacesCount);

    const arr = Object.entries(currentValue);
    const lines = arr.map(([key, val]) => `${b}${key}: ${iter(val, depth + 1)}`);
    const result = ['{', ...lines, `${c}}`].join('\n');
    return result;
  };
  return iter(value, 1);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = readFileSync(filepath1, 'utf8');
  const data2 = readFileSync(filepath2, 'utf8');
  const obj1 = JSON.parse(data1);
  const obj2 = JSON.parse(data2);

  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  const keys = [...key1, ...key2];
    
  const result = {};
  for (const key of keys) {
    const hasValue1 = Object.hasOwn(obj1, key);
    const hasValue2 = Object.hasOwn(obj2, key);
     if (!hasValue1) {
      result[`+ ${key}`] = obj2[key];
    } else if (!hasValue2) {
       result[`- ${key}`] = obj1[key];
     } else if (obj1[key] === obj2[key]) {
      result[`  ${key}`] = obj1[key];
    } else {
      result[`- ${key}`] = obj1[key];
      result[`+ ${key}`] = obj2[key];
     }
   }
  return stringify(result);
};
export default genDiff;

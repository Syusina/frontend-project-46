import _ from 'lodash';

const makeTree = (file1, file2) => {
  const key1 = Object.keys(file1);
  const key2 = Object.keys(file2);
  const keys = _.sortBy(_.union(key1, key2));

  const result = keys.map((key) => {
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return { 
        type: 'nested', 
        name: key, 
        children: makeTree(file1[key], file2[key])
      }
    }
    if (!_.has(file1, key)) {
      return {
        type: 'added',
        name: key,
        value: file2[key],
      }
    }
    if (!_.has(file2, key)) {
      return {
        type: 'removed',
        name: key,
        value: file1[key],
      }
    }
    if (!_.isEqual(file1[key], file2[key])) {
      return {
        type: 'update',
        name: key,
        value1: file1[key],
        value2: file2[key],
      }
    }
    return {
      type: 'unchange',
      name: key,
      value: file1[key],
    }
  });
  return result;
};
export default makeTree;
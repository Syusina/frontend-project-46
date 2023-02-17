import _ from 'lodash';

const checkUnnested = (node) => {
  if (typeof(node) === 'object') {
    return '[complex value]';
  }
  if (typeof(node) === 'string') {
    return `'${node}'`;
  }
  return node;
};

const plain = (value) => {
  const iter = (tree, format) => {
    const result = tree.flatMap((val) => {
      if (val.type === 'nested') {
        return iter(val.children, `${format}${val.name}.`);
      }
      if (val.type === 'added') {
        return `Property '${format}${val.name}' was added with value: ${checkUnnested(val.value)}`;
      }
      if (val.type === 'deleted') {
        return `Property '${format}${val.name}' was deleted`;
      }
      if (val.type === 'change') {
        return `Property '${format}${val.name}' was change. From ${checkUnnested(val.value1)} to ${checkUnnested(val.value2)}`;
      }
      if (val.type === 'unchange') {
        return [];
      }
     });
     return result.join('\n');
  };
  return iter(value, '');
};

export default plain;
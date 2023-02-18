const checkUnnested = (node) => {
  if (node === null) {
    return null;
  }
  if (typeof (node) === 'object' && node !== null) {
    return '[complex value]';
  }
  if (typeof (node) === 'string') {
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
      if (val.type === 'removed') {
        return `Property '${format}${val.name}' was removed`;
      }
      if (val.type === 'update') {
        return `Property '${format}${val.name}' was updated. From ${checkUnnested(val.value1)} to ${checkUnnested(val.value2)}`;
      }
      return [];
    });
    return result.join('\n');
  };
  return iter(value, '');
};

export default plain;

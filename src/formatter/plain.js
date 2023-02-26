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
  return String(node);
};

const plain = (value) => {
  const iter = (tree, format) => {
    const result = tree.flatMap((val) => {
      switch (val.type) {
        case 'nested':
          return iter(val.children, `${format}${val.name}.`);
        case 'added':
          return `Property '${format}${val.name}' was added with value: ${checkUnnested(val.value)}`;
        case 'removed':
          return `Property '${format}${val.name}' was removed`;
        case 'update':
          return `Property '${format}${val.name}' was updated. From ${checkUnnested(val.value1)} to ${checkUnnested(val.value2)}`;
        default:
          return [];
      }
    });
    return result.join('\n');
  };
  return iter(value, '');
};

export default plain;

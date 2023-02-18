const replacer = ' ';
const getIndent = (depth) => replacer.repeat(depth * 4 - 2);

const stringify = (data, depth = 1) => {
  if (typeof (data) !== 'object' || data === null) {
    return `${String(data)}`;
  }
  const arrEntries = Object.entries(data);
  const lines = arrEntries.map(([key, value]) => `${getIndent(depth)}  ${key}: ${stringify(value, depth + 1)}`);
  const result = ['{', ...lines, `${getIndent(depth - 1)}  }`].join('\n');

  return result;
};

const stylish = (tree) => {
  const iter = (currentValue, depth) => {
    const lastIndent = depth === 1 ? '' : `${getIndent(depth - 1)}  `;
    const arrValue = Object.values(currentValue);
    const lines = arrValue.map((val) => {
      if (val.type === 'nested') {
        return `${getIndent(depth)}  ${val.name}: ${iter(val.children, depth + 1)}`;
      }
      if (val.type === 'added') {
        return `${getIndent(depth)}+ ${val.name}: ${stringify(val.value, depth + 1)}`;
      }
      if (val.type === 'removed') {
        return `${getIndent(depth)}- ${val.name}: ${stringify(val.value, depth + 1)}`;
      }
      if (val.type === 'update') {
        const first = `${getIndent(depth)}- ${val.name}: ${stringify(val.value1, depth + 1)}`;
        const second = `${getIndent(depth)}+ ${val.name}: ${stringify(val.value2, depth + 1)}`;
        return `${first}\n${second}`;
      }
      return `${getIndent(depth)}  ${val.name}: ${stringify(val.value, depth + 1)}`;
    });
    const result = ['{', ...lines, `${lastIndent}}`].join('\n');
    return result;
  };
  return iter(tree, 1);
};
export default stylish;

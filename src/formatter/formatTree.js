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
      const firstIdent = getIndent(depth);
      const {
        type, name, value, value1, value2, children,
      } = val;

      switch (type) {
        case 'nested':
          return `${firstIdent}  ${name}: ${iter(children, depth + 1)}`;
        case 'added':
          return `${firstIdent}+ ${name}: ${stringify(value, depth + 1)}`;
        case 'removed':
          return `${firstIdent}- ${name}: ${stringify(value, depth + 1)}`;
        case 'update':
          return `${firstIdent}- ${name}: ${stringify(value1, depth + 1)}\n${getIndent(depth)}+ ${name}: ${stringify(value2, depth + 1)}`;
        default:
          return `${firstIdent}  ${name}: ${stringify(value, depth + 1)}`;
      }
    });
    return ['{', ...lines, `${lastIndent}}`].join('\n');
  };
  return iter(tree, 1);
};
export default stylish;

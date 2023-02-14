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
export default stringify;
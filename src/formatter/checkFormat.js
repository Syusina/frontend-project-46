import plain from "./plain.js";
import stylish from "./formatTree.js";

const checkFormat = (tree, format) => {
  if (format === '.json') {
    return JSON.stringify(tree);
  }
  if (format === '.yml') {
    return plain(tree);
  }
  if (format === '.yaml') {
    return plain(tree);
  }
  if (format === 'stylish') {
    return stylish(tree);
  }
};

export default checkFormat;
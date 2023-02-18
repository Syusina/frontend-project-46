import plain from './plain.js';
import stylish from './formatTree.js';

const checkFormat = (tree, format) => {
  if (format === '.json') {
    return JSON.stringify(tree);
  }
  if (format === 'plain') {
    return plain(tree);
  }
  return stylish(tree);
};

export default checkFormat;

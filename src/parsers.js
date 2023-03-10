import yaml from 'js-yaml';

const parser = (content, format) => {
  if (format === '.json') {
    return JSON.parse(content);
  }
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(content);
  }
  return 'Type is not supported';
};

export default parser;

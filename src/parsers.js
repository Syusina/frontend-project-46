import yaml from 'js-yaml';

const parser = (content, format) => {
  if (format === '.json') {
    return JSON.parse(content);
  } else if (format === '.yml') {
    return yaml.load(content);
  }
  else if (format === '.ymal') {
    return yaml.load(content);
  }
};

export default parser;
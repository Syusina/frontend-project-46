import yaml from 'js-yaml';
import _ from 'lodash';

const parser = (content, format) => {
  if (format === '.json') {
    return JSON.parse(content);
  }
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(content);
  }
};

export default parser;

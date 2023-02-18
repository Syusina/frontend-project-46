import { readFileSync } from 'fs';
import makeTree from './makeTree.js';
import path from 'node:path';
import parser from './parsers.js';
import checkFormat from './formatter/index.js';

// определяем формат по расширению
const fileFormat = (file) => {
  const format = path.extname(file);
  return format;
};

// читаем содержимое файла в нужной кодировке
const fileContent = (file) => {
  const content = readFileSync(file, 'utf8');
  return content;
};

// получаем данные
const dataFile = (filepath) => {
  const format = fileFormat(filepath);
  const content = fileContent(filepath);
  const parsedFile = parser(content, format);
  return parsedFile; 
};

// объединяем в главную функцию
const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const tree = makeTree(dataFile(filepath1), dataFile(filepath2));
  return checkFormat(tree, format);
};
export default genDiff;

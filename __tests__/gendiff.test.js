import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff-JSON', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toBe(readFile('expect-JSON.txt'));
});

test('gendiff-YML', () => {
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yml'), 'plain')).toBe(readFile('expect-YML.txt'));
});

test('gendiff-stylish', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toBe(readFile('expect-stylish.txt'));
});

test('gendiff-JSON-no-format', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(readFile('expect-stylish.txt'));
});

test('gendiff-YML-no-format', () => {
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yml'))).toBe(readFile('expect-stylish.txt'));
});

test('gendiff-YML-plain', () => {
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.json'), 'plain')).toBe(readFile('expect-YML.txt'));
});

test('gendiff-YML-json', () => {
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yml'), 'json')).toBe(readFile('expect-JSON.txt'));
});

test('gendiff-format-js', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'js')).toBe('Type is not supported');
});

test('gendiff-file-js', () => {
  expect(genDiff(getFixturePath('file1.js'), getFixturePath('file2.json'), 'js')).toBe('Type is not supported');
});

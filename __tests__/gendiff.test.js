import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import { readFileSync } from 'fs';
import genDiff from "../src";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff-JSON', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), '.json')).toBe(readFile('expect-JSON.txt'));
});

test('gendiff-YML', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), '.yml')).toBe(readFile('expect-YML.txt'));
});

test('gendiff-YAML', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), '.yaml')).toBe(readFile('expect-YML.txt'));
});

test('gendiff-stylish', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toBe(readFile('expect-stylish.txt'));
});

test('gendiff-no-format', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(readFile('expect-stylish.txt'));
});

test('gendiff-YAML', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), '.yaml')).toBe(readFile('expect-YML.txt'));
});
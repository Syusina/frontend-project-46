import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'node:path';
import fs from 'fs';
import genDiff from "../src";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(readFile('expect.txt'));
});
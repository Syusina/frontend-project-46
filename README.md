<h1>Difference Generator</h1>

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Syusina/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Syusina/frontend-project-46/actions)  <a href="https://codeclimate.com/github/Syusina/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/15108a03c40a3659513b/maintainability" /></a>  <a href="https://codeclimate.com/github/Syusina/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/15108a03c40a3659513b/test_coverage" /></a>  [![GitHub Actions Demo](https://github.com/Syusina/frontend-project-46/actions/workflows/github-actions-demo.yml/badge.svg)](https://github.com/Syusina/frontend-project-46/actions/workflows/github-actions-demo.yml)

<h2>Description</h2>
A difference generator is a program that determines the difference between two data structures. This is a popular task for which there are many online services, such as JSON Diff. A similar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

Utility features:
- Support for different input formats: `yaml`, `json`
- Report generation as `plain text`, `stylish` and `json`

<h2>Requirements</h2>

```
Node 14.x version at least
```

<h2>Install</h2>
1. Clone repository:

```
git clone git@github.com:Syusina/frontend-project-46.git
```

2. Install dependencies:
```
make install
```

<h2>Usage example:</h2>

- Help

```
node gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Arguments:
  filepath1            path to file1
  filepath2            path to file2

Options:
  -V, --version        output the version number
  -f, --format <type>  output format
  -h, --help           display help for command
  ```

  - Plain format
 
  ```
node gendiff --format plain ../__fixtures__/file1.yaml ../__fixtures__/file2.yml
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
```

- Stylish format

```
node gendiff ../__fixtures__/file1.json ../__fixtures__/file2.json
common: {
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: null
  + setting4: blah blah
  + setting5: {
      key5: value5
    }
  }

```

<h2>Demonstration</h2>

<h3>Stylish (simple object):</h3>
<a href="https://asciinema.org/a/DEiEH8SNbEznfedFDLVo87zOo" target="_blank"><img src="https://asciinema.org/a/DEiEH8SNbEznfedFDLVo87zOo.svg" /></a>

<h3>Stylish (nested object):</h3>
<a href="https://asciinema.org/a/RYQ4CFlnNVSNl7cqfigdVtVXf" target="_blank"><img src="https://asciinema.org/a/RYQ4CFlnNVSNl7cqfigdVtVXf.svg" /></a>

<h3>Plain:</h3>
<a href="https://asciinema.org/a/yx6Js6AQMhaM6s9YblLUYnkM5" target="_blank"><img src="https://asciinema.org/a/yx6Js6AQMhaM6s9YblLUYnkM5.svg" /></a>

<h3>JSON:</h3>
<a href="https://asciinema.org/a/IfivgJG6J2dlLS7W3mozEKDJZ" target="_blank"><img src="https://asciinema.org/a/IfivgJG6J2dlLS7W3mozEKDJZ.svg" /></a>
install:
	npx ci

test:
	npx jest

test-coverage:
	npm jest --coverage

lint:
	npx eslint .

publish:
	npm publish --dry-run
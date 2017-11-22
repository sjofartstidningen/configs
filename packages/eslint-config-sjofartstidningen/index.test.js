import test from 'ava';
import { CLIEngine } from 'eslint';
import eslintrc from './index';

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,
});

const lint = text => {
  const linter = cli.executeOnText(text);
  return linter.results[0];
};

test('make sure it recognizes basic airbnb-configs', t => {
  const result = lint(`
    const hello = 'world';
  `);

  t.truthy(result.errorCount > 0);
});

test('make sure it recognizes invalid imports', t => {
  const result = lint(`
    import unknown from 'unknown';
    export default unknown;
  `);

  t.truthy(result.errorCount > 0);
});

test('make sure it recognizes prettier stuff', t => {
  const result = lint(`
    const obj = {
      "hello": "world"
    }
  `);

  t.truthy(result.errorCount > 0);
});

test('make sure it recognizes flow type', t => {
  const result = lint(`
    // @flow

    const isGreater = (a: number, b: number): bool => a > b;
    isGreater(1, 2);
  `);

  t.truthy(result.errorCount > 0);
});

test('make sure it recognizes "fetch"', t => {
  const result = lint(`
    export default async url => {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    };
  `);

  t.truthy(result.errorCount < 1);
});

test('make sure it recognizes "fetch"', t => {
  const result = filterPrettierErrors(
    lint(`
    export default async url => {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    };
  `),
  );

  t.truthy(result.errorCount < 1);
});

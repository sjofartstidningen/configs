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

const filterPrettierErrors = result => {
  const messages = result.messages.filter(
    m => m.ruleId !== 'prettier/prettier',
  );
  const diff = result.messages.length - messages.length;
  return Object.assign({}, result, {
    messages,
    errorCount: result.errorCount - diff,
  });
};

test('make sure it recognizes basic airbnb-configs', t => {
  const result = lint(`
      const hello = 'world';
    `);

  t.truthy(filterPrettierErrors(result).errorCount > 0);
});

test('make sure it recognizes invalid imports', t => {
  const result = lint(`
      import unknown from 'unknown';
      export default unknown;
    `);

  t.truthy(filterPrettierErrors(result).errorCount > 0);
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

  t.truthy(filterPrettierErrors(result).errorCount > 0);
});

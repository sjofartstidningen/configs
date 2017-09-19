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

test('make sure it recognizes react rules', t => {
  const result = lint(`
    export default ({ name }) => <p>Hello {name}</p>;
  `);

  t.truthy(filterPrettierErrors(result).errorCount > 0);
});

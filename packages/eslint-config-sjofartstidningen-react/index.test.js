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

test('make sure it recognizes react rules', t => {
  const result = lint(`
    export default ({ name }) => <p>Hello {name}</p>;
  `);

  t.truthy(result.errorCount > 0);
});

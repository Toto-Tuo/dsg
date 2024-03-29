module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    // allow reassigning param
    'no-param-reassign': [2, { props: false }],
    // based on the OS, it will take appropriate line endings
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'import/extensions': ['error', {
      js: 'always',
    }],
    'editorconfig/charset': 'error',
    'editorconfig/eol-last': 'error',
    'editorconfig/indent': 'error',
    'editorconfig/linebreak-style': 'error',
    'editorconfig/no-trailing-spaces': 'error',
  },
  plugins: ['editorconfig'],
};

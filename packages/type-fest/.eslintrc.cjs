module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['@nice/eslint-config/vanilla'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {},
  overrides: [
    {
      files: ['vite.config.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};

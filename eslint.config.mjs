import prettierConfig from 'eslint-config-prettier'
import nextConfig from 'eslint-config-next/core-web-vitals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...nextConfig,
  prettierConfig,
  {
    files: ['*.d.ts', '**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-sparse-arrays': 'off',
    },
  },
  {
    rules: {
      'import/no-anonymous-default-export': 'off',
    },
  },
]

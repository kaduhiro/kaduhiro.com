module.exports = {
  plugins: ['import', 'unused-imports', 'sort-export-all', 'tailwindcss'],
  extends: ['next', 'next/core-web-vitals', 'plugin:tailwindcss/recommended', 'prettier'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../'],
          },
          {
            group: ['@/entities/*/*', '@/repositories/*/repository', '@/usecases/*/usecase'],
          },
          {
            group: ['@/components/elements/*/*', '@/components/layouts/*', '@/components/parts/*/*'],
          },
          {
            group: ['@/states/*'],
          },
        ],
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'object', 'type', 'index'],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{next/**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/entities/**,@/repositories/**,@/usecases/**,@/components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/states/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/assets/**',
            group: 'index',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
      },
    ],
    'no-console': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'unused-imports/no-unused-imports': 'error',
    'sort-export-all/sort-export-all': 'warn',
    '@next/next/no-img-element': 'off',
  },
};

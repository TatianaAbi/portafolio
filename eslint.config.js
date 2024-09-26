import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
  { 
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      semi: ['error', 'never'],
      indent: ['error', 2],
      'newline-before-return': 'error',
      quotes: ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-single']
    }
  },
  { 
    languageOptions: { 
      globals: globals.browser
    } 
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]

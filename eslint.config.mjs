import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'cn', 'cva'],
      },

      next: {
        rootDir: true,
      },
    },
  },
  eslintConfigPrettier,
];

export default eslintConfig;

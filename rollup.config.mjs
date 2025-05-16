import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get all component directories
const componentDirs = fs.readdirSync('./src').filter(dir =>
  fs.statSync(path.resolve('./src', dir)).isDirectory()
);

// Create an entry map for all components
const componentEntries = {};
componentDirs.forEach(dir => {
  const files = fs.readdirSync(`./src/${dir}`);
  const mainFile = files.find(file => file === `${dir}.tsx`);
  if (mainFile) {
    componentEntries[dir] = `./src/${dir}/${mainFile}`;
  }
});

// External dependencies we don't want to bundle
const external = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'react-hook-form',
  '@mantine/core',
  '@mantine/dates',
];

const plugins = [
  resolve(),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
    exclude: ['**/*.spec.tsx'],
    declaration: false,
    declarationDir: undefined
  }),
];

export default [
  // CJS and ESM bundles for each component
  {
    input: {
      index: './src/index.ts',
      ...componentEntries
    },
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
      },
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].mjs',
        exports: 'named',
      },
    ],
    plugins,
    external,
  },
  // Create type definitions
  {
    input: {
      index: './src/index.ts',
      ...componentEntries
    },
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    plugins: [dts()],
    external,
  },
  // Optimized bundles for CDN use
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/bundle.min.cjs',
        format: 'cjs',
        plugins: [terser()],
      },
      {
        file: 'dist/bundle.min.mjs',
        format: 'esm',
        plugins: [terser()],
      },
    ],
    plugins,
    external,
  },
];
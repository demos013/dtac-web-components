import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sourcemaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const pkg = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    external: [/@material-ui\/core\/.*/],
    plugins: [
      uglify.uglify(),
      babel({
        exclude: 'node_modules/**', // only transpile our source code,
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-transform-runtime',
        ],
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      sourcemaps(),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        name: 'union',
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        name: 'union',
      },
    ],
  },
]

import localResolve from 'rollup-plugin-local-resolve';
import babel from '@rollup/plugin-babel';

import pkg from './package.json';

const cjs = {
  exports: 'named',
  format: 'cjs',
};

const esm = {
  format: 'es',
};

const getCJS = override => Object.assign({}, cjs, override);
const getESM = override => Object.assign({}, esm, override);

const input = 'src/index.js';

const getExternal = () => [...Object.keys(pkg.dependencies), /@jens-2020/];

const getPlugins = () => [
  localResolve(),
  babel({
    babelrc: true,
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
  }),
];

const config = {
  input,
  output: [
    getESM({ file: 'lib/index.es.js' }),
    getCJS({ file: 'lib/index.cjs.js' }),
  ],
  external: getExternal(),
  plugins: getPlugins(),
};

export default config;

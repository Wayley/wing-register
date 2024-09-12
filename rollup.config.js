import { terser } from 'rollup-plugin-terser';
const name = '$WingAsyncRetry';

export default {
  input: 'temp/index.js',
  output: [
    {
      file: 'dist/wing-register.js',
      format: 'umd',
      name,
    },
    {
      file: 'dist/wing-register.es.js',
      format: 'es',
    },
    {
      file: 'dist/wing-register.amd.js',
      format: 'amd',
    },
    {
      file: 'dist/wing-register.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/wing-register.iife.js',
      format: 'iife',
      name,
    },
  ],
  plugins: [terser()],
};

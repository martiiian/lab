import { defineConfig } from 'rollup'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
  input: 'main.js',
  output: [
    {
      dir: 'dist',
      format: 'es'
    },
  ],
  plugins: [json()]
})

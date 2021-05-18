import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/use-masonry.cjs.js',
        format: 'cjs'
      },
      {
        file: 'dist/use-masonry.esm.js',
        format: 'es'
      }
    ],
    plugins: [typescript()],
    external: ['masonry-layout']
  },
]

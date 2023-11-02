// rollup.config.js
import alias from './plugin/alias.js';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [
    alias({
      entries: [
        // { find: '@', replacement: resolve(__dirname, './src') },
        { find: '@mylib/', replacement: resolve(__dirname, './src/my') },
        // 更多别名配置...
      ]
    })
  ]
};

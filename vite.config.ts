import { defineConfig, loadEnv, UserConfig } from 'vite'
import type { ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  console.log('root', root)
  console.log('env', env)
  return {
    root, // 项目根目录（index.html 文件所在的位置） 默认： process.cwd()
    base: '/', //  开发或生产环境服务的公共基础路径：默认'/'   1、绝对 URL 路径名： /foo/；  2、完整的 URL： https://foo.com/； 3、空字符串或 ./（用于开发环境）
    publicDir: resolve(__dirname, './dist'), // 默认'public'  作为静态资源服务的文件夹  (打包public文件夹会没有，里面得东西会直接编译在dist文件下)
    assetsInclude: resolve(__dirname, './src/assets'), // 静态资源处理

    // 插件
    plugins: [
      react(),
      eslint(),
      viteMockServe({
        mockPath: './mock/'
      })
    ],

    // 服务器配置
    server: {
      https: false, // 是否开启 https
      open: false, // 是否自动在浏览器打开
      cors: true, // 允许跨域  8月更新
      port: 80, // 端口号
      host: '0.0.0.0'
      // proxy: {
      //   '/api': {
      //     target: '', // 后台接口
      //     changeOrigin: true,
      //     secure: false, // 如果是https接口，需要配置这个参数
      //     // ws: true, //websocket支持
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // }
    },
    // ******项目构建配置******
    build: {
      target: 'modules', // 设置最终构建的浏览器兼容目标  //es2015(编译成es5) | modules
      outDir: 'dist', // 构建得包名  默认：dist
      assetsDir: 'assets', // 静态资源得存放路径文件名  assets
      sourcemap: true, // 构建后是否生成 source map 文件
      reportCompressedSize: false, // 启用/禁用 brotli 压缩大小报告。 禁用该功能可能会提高大型项目的构建性能
      minify: 'esbuild', // 项目压缩 :boolean | 'terser' | 'esbuild'
      chunkSizeWarningLimit: 1000, // chunk 大小警告的限制（以 kbs 为单位）默认：500
      cssTarget: 'chrome61' // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
    },

    // ******resolver配置******
    resolve: {
      alias: {
        // 别名配置
        // 键必须以斜线开始和结束
        '@': resolve(__dirname, 'src'),
        '#': resolve(__dirname, 'types')
      }
    }
  }
})

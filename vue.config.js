const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
	// 基本路径
	baseUrl: '/',
	// 输出文件目录
	outputDir: 'dist',
	// 静态资源目录 (js, css, img, fonts)
	assetsDir: 'assets',
	// eslint-loader 是否在保存的时候检查,有效值：ture | false | 'error'
	lintOnSave: true,
	// use the full build with in-browser compiler?
	// https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
	// 运行时版本是否需要编译
	runtimeCompiler: false,
	// vue-loader 配置项
	// https://vue-loader.vuejs.org/en/options.html
	// vueLoader: {},
	// 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
	transpileDependencies: [],
	// 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
	productionSourceMap: true,
	// webpack配置，值位对象时会合并配置，为方法时会改写配置
	configureWebpack: config => {
		if (debug) {
			// 为开发环境修改配置...
		} else {
			// 为生产环境修改配置...
		}
		// 开发生产环境共同配置
		Object.assign(config, {
			resolve: {
				alias: {
					'@': path.resolve(__dirname, './src'),
					'@c': path.resolve(__dirname, './src/components'),
					vue$: 'vue/dist/vue.esm.js'
				}
			}
		})
	},
	// webpack链接API，用于生成和修改webapck配置
	chainWebpack: config => {
		if (debug) {
			// 为开发环境修改配置...
			config.module
				.rule('vue')
				.use('vue-loader')
				.loader('vue-loader')
				.tap(options => {
					// 修改它的选项...
					return options
				})
		} else {
			// 为生产环境修改配置...
		}
	},
	// css相关配置,配置高于chainWebpack中关于css loader的配置
	css: {
		// 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
		extract: true,
		// 是否在构建样式地图，false将提高构建速度
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {
			css: {
				// 这里的选项会传递给 css-loader
				localIdentName: '[name]-[hash]',
				camelCase: 'only'
			},
			postcss: {
				// 这里的选项会传递给 postcss-loader
			}
		},
		// 是否开启支持‘foo.module.css’样式
		modules: false
	},
	// 构建时开启多进程处理babel编译
	parallel: require('os').cpus().length > 1,
	// 是否启用dll
	// See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
	// dll: false,
	// 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	pwa: {},
	// webpack-dev-server 相关配置
	devServer: {
		open: process.platform === 'darwin', //配置自动启动浏览器
		host: '0.0.0.0',
		port: 8080,
		https: false,
		hotOnly: false,
		//设置代理
		proxy: {
			'/api': {
				target: '<url>',
				ws: true,
				changOrigin: true
			}
		},
		before: app => {}
	},
	// 第三方插件配置
	pluginOptions: {
		// ...
	}
}

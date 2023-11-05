const {
	defineConfig
} = require('@vue/cli-service')

module.exports = defineConfig({
	transpileDependencies: ['true'],
	lintOnSave: false, //关闭语法检查
	//开启代理服务器（方式二）
	devServer: {
		host: 'localhost',//process.env.HOST,//'localhost', // 项目运行的ip
		port: 8080,//process.env.PORT && Number(process.env.PORT),//8888, // 项目运行的端口号
		proxy: {
			// https://vip.bljiex.com/so.php
			'/api': {
				target: 'https://vip.bljiex.com', // 需要代理的地址
				changeOrigin: true, //是否跨域
				ws: true,
				secure: true, // 如果是https接口，需要配置这个参数
				pathRewrite: { //重写接口地址
					'^/api': ''
				},
				headers: { //header设置
					referer: 'https://vip.bljiex.com' //'https://m.mi.com/',//referer
					// origin: 'https://m.mi.com/'
				},
				logLevel: 'debug',
				onProxyReq: (proxyReq, req) => {
					// http请求
					debugger
					console.log('req->[HPM] %s %s %s %s %s', req.method, req.originalUrl, '->', req.url, req
						.rawHeaders);
				},
				onProxyReqWs(proxyReq, req, socket, options, head) {
					// websocket请求（单个TCP连接上进行全双工通信的协议）
					console.log('ws->[HPM] %s %s %s %s', req.method, '-', req.url);
				}
			},
			
		}
	}
})
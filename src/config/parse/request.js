// const { spawn } = require('child_process');
// // import spawn from 'child_process'
// const child = spawn('python3', ['request.py', 'https://dm.xbqgx.com/dmku/?ac=dm&id=96483976fc99502d274f334b6df414de', 'get']);
//
// // function handleClick() {
// //
// //
// // https://vip.bljiex.com/api.php?out=jsonp&wd=%E6%B6%88%E5%A4%B1%E7%9A%84%E5%A5%B9&cb=jQuery182037791752297772474_1694619667223&_=1694619667227
// //
// // https://vip.bljiex.com/api.php?out=jsonp&flag=0&id=791&cb=jQuery18208360321343093746_1694619664564&_=1694619700977
// // https://dm.xbqgx.com/dmku/?ac=dm&id=96483976fc99502d274f334b6df414de
//
// child.stdout.on('data', data => {
//   console.log(`stdoutdd: ${data}`);
// });
//
// child.stderr.on('data', data => {
//   console.log(`stderr: ${data}`);
// });
//
// child.on('close', code => {
//   console.log(`子进程退出码：${code}`);
// });
// // }
//
// // function handleClick() {
// //   alert("request!!!")
// // }
//

const { PythonShell } = require('python-shell');

// 配置PythonShell选项
const options = {
  args: ['https://dm.xbqgx.com/dmku/?ac=dm&id=96483976fc99502d274f334b6df414de', 'get']
};

// 运行Python脚本，并处理结果
// 'python3', ['request.py', 'https://dm.xbqgx.com/dmku/?ac=dm&id=96483976fc99502d274f334b6df414de', 'get'
PythonShell.run('request.py', options, function (err, result) {
  if (err) throw err;

  // 处理Python脚本的输出结果
  console.log(result);
});

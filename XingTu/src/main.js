import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
//引入pinia
//引入初始化样式文件
import '@/styles/common.scss'
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
// const express = require('express');
// const request = require('request');
// const cors = require("cors");
// app.use(cors()); //使用cors中间件
// app.get('/api/get', (req, res) => {
//     // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据

//     res.header("Access-Control-Allow-Origin","*")
//     const query = req.query;
//     // 调用 res.send() 方法，向客户端响应处理的结果
//     res.send({
//         status: 0, // 0 表示处理成功，1 表示处理失败
//         msg: "GET 请求成功！", // 状态的描述
//         data: query, // 需要响应给客户端的数据
//     });
// })
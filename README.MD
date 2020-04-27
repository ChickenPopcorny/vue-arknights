# vue-arknights

这是一个仿明日方舟官网的项目，使用 Vue + Node.js + MongoDB 分别开发了前台移动端、后台 PC 端以及服务器端。项目地址：

- 前台移动端：https://www.yesuanzao.cn/m
- 后台 PC 端：https://www.yesuanzao.cn/admin （账号密码均为`admin`）

项目主要特性如下：

- 使用了前后端分离的开发模式
- 服务端使用 Express 提供接口服务，通过 mongoose 操作 MongoDB 数据库
- 后台可以对干员、文章、世界观等基本信息进行增删查改
- 实现了后台管理员登录功能，并使用了 bcrypt 对密码进行加密
- 前后端通过 token 传递用户登录状态
- 后台使用 Element-UI 快速搭建管理页面
- 后台通过 vue-router 管理页面路由
- 前台使用 fullpage 实现了全屏页面滚动
- 项目部署在阿里云服务器，配置了 Nginx 反向代理
- 开启了 HTTPS 协议



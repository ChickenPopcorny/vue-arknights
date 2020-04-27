module.exports = {
    dbURL: 'mongodb://localhost/vue-arknights', // 数据库连接地址
    secret: 'chicken',                          // bcrypt 的密钥
    messages: {                                 // 提示信息
        selectSuccess: '查询成功',
        createSuccess: '添加成功',
        deleteSuccess: '删除成功',
        updateSuccess: '修改成功',
        uploadSuccess: '上传成功',
        loginSuccess: '登录成功',
        unknownError: '服务器开小差了，稍后再试吧',
        loginError: '用户名或密码错误',
        noAuthError: '请先登录'
    }
}
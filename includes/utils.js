module.exports = {
  // 处理成功请求
  handleSuccess(data, message, res) {
    // 0: 请求成功
    let jsonResponse = { data, message, status: 0 }
    res.send(JSON.stringify(jsonResponse))
  },

  // 处理失败请求，这里统一返回 HTTP 状态码 200，然后从数据中获取错误信息
  handleError(err, message, status, res) {
    console.log('出错啦==================================')
    console.log(err)
    // 1: 未知错误, 2: 权限不足
    let jsonResponse = { message, status }
    res.send(JSON.stringify(jsonResponse))
  }
}
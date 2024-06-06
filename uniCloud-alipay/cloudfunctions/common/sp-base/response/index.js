// 统一返回格式
class R {
  constructor({ code, msg, data }) {
    this.code = code
    this.msg = msg
    this.data = data
  }

  static ok(data, msg) {
    return new R({
      code: 0,
      msg: msg || 'ok',
      data,
    })
  }

  static fail(msg) {
    return new R({
      code: 1,
      msg,
      data: null,
    })
  }
}

module.exports = {
  R,
}

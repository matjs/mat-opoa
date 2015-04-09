var path = require('path');
var send = require('koa-send');

function opoa(opts) {
  opts = opts || {};

  opts.root = path.resolve(opts.root);
  opts.index = opts.index || 'index.html';

  return function *opoa(next) {
    // 只有配置了proxy参数才会做反向代理
    if (opts.proxy && /\.json$/.test(this.path)) {
      this.url = this.url.replace(this.host, opts.proxy);
      return yield next;
    }
    if (this.method == 'HEAD' || this.method == 'GET') {
      if (yield send(this, this.path, opts)) return;
    }
    yield next;
  };
}

module.exports = opoa;
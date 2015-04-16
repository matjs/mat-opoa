# mat-opoa

[![npm version](https://badge.fury.io/js/mat-opoa.svg)](http://badge.fury.io/js/mat-opoa)

## Installation

```sh
npm install --save-dev mat-opoa
```

## Usage

```javascript
var mat  = require('mat');
var rap  = require('mat-rap');
var opoa = require('mat-opoa');

// rap mock数据环境
mat.task('default', function () {
  mat.use(rap({
    projectId: "123"
  }));

  mat.use(opoa({
    root: './'
  }));
})

// daily 数据接口环境
mat.task('daily', function () {
  mat.use(opoa({
    root: './',
    proxy: 'www.abc.net'
  }));
})
```

## Options

- `root`
  
  项目静态资源根目录

- `proxy`
  
  *配置反向代理时用到*
  
  反向代理目标地址，可以是域名（本地配置host），也可以直接ip地址
'use strict';
var error = require('../config/error.json');
/**
 * 自定义错误类型，继承来自Error对象
 * @param {string} message 错误消息体
 * @param {number} code    错误码
 * 
 * edit by plusmancn@gmail.com  wechat@plusman
 */
function CodeError(message,code) { 
  this.code = code || 1;
  this.message = error[code] || message ||  'not find defination in error.json';
  this.stack = Error().stack;
} 

CodeError.prototype = Object.create(Error.prototype); 
CodeError.prototype.name = "CodeError";


module.exports = CodeError;
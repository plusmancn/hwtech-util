'use strict';
/**
 * 用户权限验证中间件，基于cookie ||  header 
 * header 设置为 X-HWTECH-HYX-AccessToken:accessToken
 */
var decipher = require('./cookie_cipher').decipher;
var queryystring = require('querystring');

/**
 * 添加req.userauth 参数  
 * @param  {String} key  cookie token 解密key
 * @return {Dic} 
 * ```
 * {
 *   accessToken:accessToken,
 *   accessDic:accessDic
 * }
 * ```
 */
exports = module.exports = function(key,projectCode){ 
  if (!key) {
    throw new Error('key 参数缺失');
  }

  return function(req,res,next){
    
    var accessToken = req.headers['x-hwtech-'+ projectCode.toLowerCase() +'-accesstoken'] || req.cookies[projectCode.toUpperCase() + '_ACCESS_TOKEN'] || '';
    var accessDic = '';
    var isAuth = false;
    try{
      accessDic = accessToken?queryystring.parse(decipher(key,accessToken)):{};
      isAuth = !!accessDic.userId?true:false;
    }catch(ex){
      accessDic = {};
      isAuth = false;
    }
    
    req.userauth = {
      'accessToken':accessToken,
      'accessDic':accessDic,
      'isAuth':isAuth
    };
    next();
  };
};
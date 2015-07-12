'use strict';
/**
 * @function paramsFilter
 * @description 有效性参数检测控制器
 * try{
 *        
 * }catch(ex){
 *    
 * }
 * ```
 * // 可配置参数
 * {
 *   required  必须包含
 * }
 * ```
 * @param {Obj} inputObj 需要检测的参数对象
 * @param {Obj}  passParams 对象参数检测规则
 * @return {Obj | throw Error} 键值对 
 */
exports = module.exports = function(inputObj,passParams){
  var outoutObj = {};
  var inputObjKeys = Object.keys(inputObj);
  var passParamsKeys = Object.keys(passParams);
  // 参数完整性检测
  for(var key in passParams){
    if (passParams[key].indexOf('required') !== -1) {
      if(typeof inputObj[key] === 'undefined'){
        throw new Error(key + '参数缺失');
      }    
    }
  }

  var filterObjKeys =  inputObjKeys.filter(function(val,index){
    return passParamsKeys.indexOf(val) !== -1;
  });

  for(var i = 0,l = filterObjKeys.length; i < l; i++){
    outoutObj[filterObjKeys[i]] = inputObj[filterObjKeys[i]];
  }

  return outoutObj;
};

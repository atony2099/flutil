/*
 * @Author: atony2099 
 * @Date: 2018-08-02 11:34:01 
 * @Last Modified by: atony2099
 * @Last Modified time: 2018-08-04 16:50:23
 */

function isPhoneNumber(numStr){
  return  /^1[3456789]\d{9}$/.test(numStr)
} 

module.exports = isPhoneNumber
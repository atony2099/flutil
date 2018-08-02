/*
 * @Author: atony2099 
 * @Date: 2018-08-02 11:25:08 
 * @Last Modified by: atony2099
 * @Last Modified time: 2018-08-02 15:39:58
 */

const fs = require('fs')
const path = require('path')

let modules = {}
function loadPath(dir) {
  fs.readdirSync(dir).forEach( function(file){
    const currentFIle =  path.join(dir,file)
    // console.log(currentFIle)
    const fileState = fs.statSync(currentFIle)
    if (fileState.isFile()) {
      if ((/.+\.js/).test(currentFIle)) {
        const array =  file.split('.')
        let item = array[array.length - 2];
        modules[item] = require(currentFIle)
      }
    }else {
      loadPath(currentFIle)
    }
  });
}
const dir = path.join(__dirname,'mainmodules')
loadPath(dir)

module.exports = modules

module.exports = function check(str, bracketsConfig) {
  let testStr = [];
       
  for(var i = 0; i < str.length; i++){ 
    for(var j = 0; j < bracketsConfig.length; j++){

      if (str[i] === bracketsConfig[j][0]){
        if (bracketsConfig[j][1] === bracketsConfig[j][0] && testStr[testStr.length - 1] === bracketsConfig[j][0]) {
            testStr.pop();
            continue;
          }
        testStr.push(str[i]);
      } else if (str[i] === bracketsConfig[j][1]){
        if(testStr.pop() !== bracketsConfig[j][0]){
          return false;
        }
      }
    }
  }
  
  if(testStr.length === 0){
    return true;
  } else {
    return false;
  }
}

const hi = function(greeting) {
    return  `Hi ${greeting}`;
}

const calc = function(num1, callback){
  return  callback('calc');
}

console.log(calc(1, hi));

console.log(hi('callback'));
var sumit = require('./app/sum-it');
var args = process.argv.slice(2);

var type = args[0];
var num1 = parseInt(args[1]);
var num2 = parseInt(args[2]);

switch(type){
    case 'add':
        console.log(sumit.add(num1, num2));
        break;
    case 'subtract':
        console.log(sumit.subtract(num1, num2));
        break;
    case 'multiply':
        console.log(sumit.multiply(num1, num2));
        break;
    case 'divide':
        console.log(sumit.divide(num1, num2));
        break;
    default:
        console.log('Unknown type');
}
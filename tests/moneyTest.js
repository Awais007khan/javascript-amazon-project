import {formatCurrency} from '../scripts/utils/money.js'

 // Basic Test Cases
 console.log('test suite: formatCurrency');
 console.log('Converts cents into dollars')
if (formatCurrency(2095) === '20.95') {
    console.log('passed');  
} else{
    console.log('failed');
}
// we`re using testing method to test diff test cases for our code to work properly

// Edge Cases - test with values that are tricky
console.log('works with 0'); 
if(formatCurrency(0) === '0.00') {
    console.log('passed again');

} else{
    console.log('failed');

}
console.log('rounds up to the nearest cent');
if(formatCurrency(2000.5) === '20.01') {
    console.log('Passed!');
} else{
    console.log('failed!');
}
//Solution for 8kyu problem Sum the Strings (pair programming)
function sumStr(a,b) {
    return ((parseInt(a)|0)+(parseInt(b)|0)).toString()
  }
//Solution for 8kyu problem Will you make it? (pair programming)
const zeroFuel = (distanceToPump, mpg, fuelLeft) => 
(mpg*fuelLeft >= distanceToPump );

// Solution for 7kyu problem Over The Road
function overTheRoad(address, n) {
    return (2*n + 1) - address
   }

//Mumbling Solution
function accum(s) {
  const array = s.toLowerCase().split("");
  const stretch = array.map( (a,index) => a.repeat(index+1)); 
  const caps = stretch.map(a => a[0].toUpperCase() + a.slice(1));
return caps.join('-')
}

//Descending Order Solution
const descendingOrder = (n) => parseInt(n.toString().split('').sort().reverse().join(''))

//Highest and Lowest Solution
function highAndLow(numbers){
const array1 = numbers.split(' ');
return `${Math.max(...array1)} ${Math.min(...array1)}`;
}

//You're a square Solution
const isSquare =(n) => Number.isInteger(Math.sqrt(n))

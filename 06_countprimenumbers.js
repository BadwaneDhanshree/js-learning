const array = [3,9,7,6,19,29,53];

function isPrime(num){
  
    if (num <= 1) {

        return false;
    }
     for (let i = 2; i <= Math.sqrt(num); i++){
          
        if (num % i === 0) {
             return false;
        }
     }
     return true;
}

function countPrimes(array){
    let count = 0;
    for ( let i =0; i< array.length; i++){
        if (isPrime(array[i])){
            count++;

        }
    }
    return count++;
}
  console.log("Count of prime numbers:",countPrimes(array));
    
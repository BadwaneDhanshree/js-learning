const array = [3,9,7,6,19,29,53];

function isPrime(num){
  
    if (num <= 1) {

        return false;
    }
     for (let i = 2; i < num ; i++){
          
        if (num % i == 0) {
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


       
  const result = isPrime(3);

  console.log(`Is 3 Prime number : ${result}`);

  const result1 = isPrime(9);

  console.log(`Is 9 Prime number : ${result1}`);

  const result2 = isPrime(7);

  console.log(`Is 7 Prime number : ${result2}`);

  const result3 = isPrime(6);

  console.log(`Is 6 Prime number : ${result3}`);

  const result4 = isPrime(19);

  console.log(`Is 19 Prime number : ${result4}`);

  const result5 = isPrime(29);

  console.log(`Is 29 Prime number : ${result5}`);

  const result6 = isPrime(53);

  console.log(`Is 53 Prime number : ${result6}`);


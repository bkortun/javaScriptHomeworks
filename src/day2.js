//primeNumber
function findPrime(...numbers){
    numbers.forEach(number => {
        if (number<=0) {
            console.log(number+" isn't a prime")
            return;
        }
        for (let i = 2; i < number; i++) {
            if (number%i==0) {
                console.log(number+" isn't a prime")
                return;
            }
            
        }
        console.log(number+" is a prime")
    });
}

findPrime(-2,5,12,45,67,91,101)

//friendNumber
function findFriendNumber(number1,number2){
    let total1=0,total2=0;
    for (let i = 1; i < number1; i++) {
        if (number1%i==0) {
            total1+=i;
        }
        
    }
    for (let i = 1; i < number2; i++) {
        if (number2%i==0) {
            total2+=i;
        }
        
    }
    if (total1==number2 && total2==number1) {
        console.log(number1+" and "+number2+" are friend numbers")
    }
    else{
        console.log(number1+" and "+number2+" are not friend numbers")
    }
}
findFriendNumber(20,84)

//perfectNumber

function perfectNumberList() {
    let list=[];
    for (let number = 1; number < 1000; number++) {
        let total=0;
        for (let divisor = 1; divisor <= number; divisor++) {
            if (number%divisor==0) {
                total+=divisor;
                
            }
            
        }
        if (total==number*2) {
            list.push(number)
        } 
    }
    console.log(list)
}

perfectNumberList()

//primeNumberList
function primeNumberList() {
    let list=[];
    for (let number = 2; number <= 1000; number++) {
        let isNotPrime=false;
       for (let divisor = 2; divisor < number; divisor++) {
           if (number%divisor==0) {
                isNotPrime=true;
           }
       }
       if (!isNotPrime) {
        list.push(number)
       }
    }
     console.log(list)
}
primeNumberList()
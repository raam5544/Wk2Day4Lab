// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

// function gradeCalculator(marks) {
//     if (marks >= 80) {
//         console.log('You did a good job')
//     } else if (marks >= 70) {
//         console.log('Keep trying')
//     } else if (marks >= 60) {
//         console.log('ehh')
//     } else if (marks >= 50) {
//         console.log('Not to good')
//     } else {
//         console.log('Bad Grade You\'ll Get Em Next Time')
//     }
// }

// gradeCalculator(10)

// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

// function multiple_of_ten(number) {
//     output = 10
//     while (output < number) {
//         console.log(output)
//         output += 10
//     }
// }
// multiple_of_ten(85)

// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

// function quarterCalculator(billAmount, itemPrice) {
//     let balance = billAmount - itemPrice
//     quarterAmount = (balance * 4)
//     console.log(quarterAmount + ' ' + 'Quarters')
// }
// quarterCalculator(10, 3)
//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paind and amount cost

// function denomCalc(paidAmount, costAmount) {
//     let balance = paidAmount - costAmount;
//     let count50 = 0
//     let count20 = 0
//     while (balance > 0) {
//         if (balance >= 50 && balance % 50 == 0) {
//             while (balance >= 50) {
//                 count50++
//                 balance = balance - (count50 * 50)
//             }
//             console.log(count50)
//         }
//         if (balance >= 20 && balance % 20 == 0) {
//             while (balance >= 20) {
//                 count20++
//                 balance = balance - (count20 * 20)
//             }
//         }

//         console.log(count20)
//     }
// }

function den50(x) {

}

function denomCalc(paidAmount, costAmount) {
    let balance = paidAmount - costAmount;
    let count50 = 0
    let count20 = 0
    let count10 = 0
    let count5 = 0
    while (balance > 0) {
        while (balance >= 50) {
            balance = balance - 50
            count50++
        }
        console.log(count50)
        console.log(balance)
        while (balance >= 20) {
            balance = balance - 20
            count20++
            console.log(balance)
        }
        while (balance >= 10) {
            balance = balance - 10
            count10++
            console.log(balance)
        }
        while (balance >= 5) {
            balance = balance - 5
            count5++
            console.log(balance)
        }
        console.log(count20)
        // console.log(count20)
        // console.log(count50)
    }
}
denomCalc(300, 220)

// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
// function fizzBuzz(number) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         console.log('FizzBuzz')
//     } else if (number % 3 === 0) {
//         console.log('Fizz')
//     } else if (number % 5 === 0) {
//         console.log('Buzz')
//     } else {
//         console.log(number)
//     }
// }
// fizzBuzz(4)
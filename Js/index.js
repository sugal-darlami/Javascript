//consoles
// console.log("Sugal");
// console.warn("warning");
// console.error("Error");
// const name = "Shyam";


//arithmetic
// let a = 6, b = 2;
// let sum = a + b;
// let subtraction = a - b;
// let multiply = a * b;
// let Division = a / b;
// let remainder = a % b;
// let exponent = a ** b;

// console.log("Sum:", sum);
// console.log("Subtraction:", subtraction);
// console.log("Multiplication:", multiply);
// console.log("Division:", Division);
// console.log("Remainder:", remainder);
// console.log("Exponent:", exponent);

//comparison
// let c = 10, d = 5;

// console.log(c == d);
// console.log(c === d);

// console.log(c != d);
// console.log(c !== d);

// console.log(c > d);
// console.log(c < d);

// console.log(c >= d);
// console.log(c <= d);



//ternary operator
// let age = 20;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);

// //Convert number to string
// let g = 123;
// let strin = String(g);
// console.log(typeof strin);

// //Convert string to number
// let x = "123";
// let num = Number(x);
// console.log(typeof num);

// //calculator
// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));
// let operations = prompt("Enter operator (+, -, *, /): ");
// let results;
// switch (operations) {
//     case "+":
//         results = num1 + num2;
//         break;
//     case "-":
//         results = num1 - num2;
//         break;

//     case "*":
//         results = num1 * num2;
//         break;

//     case "/":
//         results = num1 / num2;
//         break;

//     default:
//         results = "Invalid operator";
// }
// console.log("Result", results);


//greater checker
// let a = 10;
// let b = 5;
// let c = 15;
// let d = 1;
// let e = 32;

// if (a > b && a > c && a > d && a > e) {
//     console.log("a is greater");
// }
// if (b > a && b > c && b > d && b > e) {
//     console.log("b is greater");
// }
// if (c > a && c > b && c > d && c > e) {
//     console.log("c is greater");
// }
// if (d > a && d > b && d > c && d > e) {
//     console.log("d is greater");
// }
// if (e > a && e > b && e > c && e > d) {
//     console.log("e is greater");
// }

//nested IF
// let a = 40;
// let b = 40;
// let c = 15;
// let d = 1;
// let e = 32;

// if (a >= b) {
//     if (a >= c) {
//         if (a >= d) {
//             if (a >= e) {
//                 console.log("a is greater");
//             }
//         }
//     }
// }

// if (b >= a) {
//     if (b >= c) {
//         if (b >= d) {
//             if (b >= e) {
//                 console.log("b is greater");
//             }
//         }
//     }
// }

// if (c >= a) {
//     if (c >= b) {
//         if (c >= d) {
//             if (c >= e) {
//                 console.log("c is greater");
//             }
//         }
//     }
// }

// if (d >= a) {
//     if (d >= b) {
//         if (d >= c) {
//             if (d >= e) {
//                 console.log("d is greater");
//             }
//         }
//     }
// }

// if (e >= a) {
//     if (e >= b) {
//         if (e >= c) {
//             if (e >= d) {
//                 console.log("e is greater");
//             }
//         }
//     }
// }




for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= 5 - i; j++) {
        stars += " ";
    }
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}


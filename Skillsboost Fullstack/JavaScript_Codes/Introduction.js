// window.alert("Welcome to Javascript");
// let name = "Umar";
// name = "Ahmad";
// console.log(name);

// var age = 12;
// document.getElementById("para").onclick = alert(age);

// let res = null;
// res = "no more null";
// console.log(res);

//......................Arithmetic Operators
let a = 2;
let b = 3;
let c = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);
// console.log(c + b / a);

//.............................Assignment Operators
// (" = , += , -=");
// score = 10;
// score += a;
// console.log(score);
// score -= a;
// console.log(score);

//...............................Comparison operators
// 5 == 5;
// console.log(5 == 5);
// 5 == "5";
// console.log(5 == "5");
// 5 === "5";
// console.log(5 === "5");
// 5 !== "5";
// 10 > 5;
// 10 < 5;
// 10 >= 11;

// const age = 20;
// const hasID = true;

// const isEligible = age >= 18 && hasID;
// console.log(isEligible);

//............................String Methods
// 1 .............. concatenation
// const fname = "Ade";
// const lname = "Bayo";
// const nam = "shayo";
// const fullName = fname + " " + lname;
// console.log(fullName);
// console.log(fname + " " + lname);

// 2..............Template literals with backticks(also for concatenation)
// console.log(`${fname} ${lname}`);

// 3 .....................".length()"
// console.log(fullName.length);
// console.log(fname.length);

// 4 ..................... ".touppercase()"
// console.log(nam.toLowerCase());
// 5.................... .tolowerCase();
// console.log(fname.toLowerCase());
// 6................. .trim() This removes whiteSpace from front nd back
// console.log("  Adegoke  ".trim());
// 7 ...............  .startWith();

// 8 ............. .includes(); - checks if whats inside d bracket exists in d str
// console.log("  Adegoke  ".includes("e"));

const fname = "Ade";
const lname = "Bayo";
const nam = "shayo";
const fullName = fname + " " + lname;
console.log(fullName);

const fullN = "Olawale Deji";
const searchWord = "wale";

console.log(fullN.length);
console.log(fullN.toUpperCase());
console.log(fullN.toLowerCase());
console.log(fullN.includes("Deji"));
console.log(fullN.includes(searchWord));

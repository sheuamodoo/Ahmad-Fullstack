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

//.........................CLASSWORK
// const fname = "Ade";
// const lname = "Bayo";
// const nam = "shayo";
// const fullName = fname + " " + lname;
// console.log(fullName);

// const fullN = "Olawale Deji";
// const searchWord = "wale";

// console.log(fullN.length);
// console.log(fullN.toUpperCase());
// console.log(fullN.toLowerCase());
// console.log(fullN.includes("Deji"));
// console.log(fullN.includes(searchWord));

// const fullN = "Olawale Deji";
// const searchWord = "wale";

// console.log("Full Name:" + fullN);
// console.log("1- Length:" + fullN.length);
// console.log("2- Uppercase:", fullN.toUpperCase());
// console.log("3- Lowercase:", fullN.toLowerCase());
// console.log("4- Contains 'Deji'? ", fullN.includes("Deji"));
// console.log(`4- Contains ${searchWord}? ${fullN.includes(searchWord)}`);

//........................DataType Conversions
// const price = "1500";
// const numericPrice = Number(price);
// console.log(price + 500);
// console.log(numericPrice + 500);

//........................... math.round()
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.min(10, 20, 5, 31.5));
// console.log(Math.max(10, 20, 5, 31.5));

//.............................TAKING INPUTS
// const name = prompt("What is your name?: ");
// const age = prompt("What is your age?: ");
// alert(`Welcome ${name}, you are ${age} years old `);

// console.log(`Welcome ${name}, you are ${age} years old `);
// alert("Welcome!" + " " + name);
// alert("Welcome!", name); -- This is not working
// alert(`Welcome!, ${name}`);

//..........................CONDITIONAL STATEMENTS
// const age = 20;
const age = prompt("Enter your age: ");
if (age >= 18) {
  console.log(`You are ${age} years old. You're an adult`);
} else if (age >= 13) {
  console.log(`You are ${age} years old. You're a teenager`);
} else {
  console.log(`You are ${age} years old. You're a child`);
}

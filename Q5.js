// Q5 -----------------------------------------------------------------------------------------------------------------
let a = 15
let b = 5;
let c = 20;
let name = "Kelvin";
console.log((a > b && !(c < b || name !== "kelvin")) || (a + b * 2 < c && !false));
// Explanation
// 15+5*2<20 && !false =false
// 20<5 || "Kelvin" !== "kelvin" =true 
// 15>5 && !true = false
// false || false = false
// = false
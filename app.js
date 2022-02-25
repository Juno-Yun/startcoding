const age = prompt("How old are you?");
//const age = parseInt(prompt("How old are you?"));
//console.log("input : " + age + " / " + parseInt(age));
//console.log(typeof age);

if (isNaN(age) == true) {
  console.log("input : " + age + " / Input is string");
} else if (age <= 19) {
  console.log("input : " + age + " / You are young");
} else if (age > 19 && age <= 63) {
  console.log("input : " + age + " / You can work for the company");
} else if (age > 63) {
  console.log("You are retired");
}

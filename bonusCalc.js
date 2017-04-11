console.log("sourced");

//global employees
//name, empNum, salary, rating

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];
//console.log(employees[0]);


//following along with liveSolve here : ------------------

// for (var i = 0; i <employees.length; i++) {
//   console.log(employees[i]);
//   //call function calcNewBonus
//   // log the result (the return)
// }

// console.log(calcNewBonus(atticus));
//
// // function that takes single employee arry and returns new array
// function calcNewBonus(singleEmployee){
//   console.log("in calcNewBonus singleEmployee -> ", singleEmployee);
//
//   var empRating = singleEmployee[3];
//
//   var bonusPercentage = 0;
//
// // determine base bonus using employee rating
//   switch (empRating) {
//     case 2:
//       bonusPercentage = 0;
//       break;
//     case 3:
//       bonusPercentage = 4;
//       break;
//     case 4:
//       bonusPercentage = 6;
//       break;
//     case 5:
//       bonusPercentage = 0;
//       break;
//     default:
//   }
//   //use switch condition- days of the week, specific rating numbers
//
//   var newEmpArray = [];
// // contains name, bonus %, compensation (salary+bonus), bonus (rounded)
//   return newEmpArray;
// }
// //returns new array


// ---------------------------------


// this function returns ratingBonus which is a percent
//   //Those who have a rating of a 2 or below should not receive a bonus.
// // Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// // Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// // Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
function checkRating(indivEmployeeArray){
  var ratingBonus;
  if (indivEmployeeArray[3] <= 2){
    ratingBonus = 0;
  }
  else if (indivEmployeeArray[3] === 3){
    ratingBonus = 4;
  }
  else if (indivEmployeeArray[3] === 4){
    ratingBonus = 6;
  }
  else if (indivEmployeeArray[3] === 5){
    ratingBonus = 10;
  }
  else {
    console.log("Error in checkRating function");
  }
  //console.log("Rating Employee Bonus Percent = ", ratingBonus);
  return ratingBonus;
  // end ratingBonus/checkRating
}

//testing:
//console.log("Function Check: ", checkRating(atticus));


// // If they have an employee number with four digits, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
// // However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// // No bonus can be above 13% or below 0% total.
function employeeBonus(indivEmployeeArray){
  var bonusPercent = checkRating(indivEmployeeArray);
  var newBonusPercent = bonusPercent;
  if (indivEmployeeArray[1].length === 4){
    newBonusPercent = bonusPercent + 5;
    //console.log(newBonusPercent);
  }//

  if (indivEmployeeArray[2] > 65000){
      newBonusPercent = bonusPercent - 1;
      //console.log(newBonusPercent);
      }

  if (newBonusPercent > 13){
    newBonusPercent = 13;
  }

  if (newBonusPercent < 0){
    newBonusPercent = 0;
  }
  //newBonusPercent = Math.min(bonusPercent,13);
  //console.log(newBonusPercent);
  //newBonusPercent = Math.max(bonusPercent,0);
  //console.log("New Bonus Percent", newBonusPercent);

  //console.log("Employee Bonus Percent = ", newBonusPercent);
  return newBonusPercent;
}

//testing:
//console.log("length", atticus[1].length);
//console.log("Employee Bonus Function Check: ", employeeBonus(atticus));
//console.log("Employee Bonus Function Check: ", employeeBonus(jem));
//console.log("Employee Bonus Function Check: ", employeeBonus(robert));


function buildInvidualBonus(indivEmployeeArray){
  var compensationArray = [];
  var salary = indivEmployeeArray[2];
  var bonusPercent = employeeBonus(indivEmployeeArray);

  compensationArray[0] = indivEmployeeArray[0];
  //console.log(compensationArray);

  compensationArray[1] = bonusPercent;
  //console.log(compensationArray);

  var bonusDollars = (bonusPercent*0.01) * salary;
  //console.log("bonus dollars: ", bonusDollars);

  compensationArray[2] = Number(salary) + Number(bonusDollars); // + ((employeeBonus(indivEmployeeArray)/100)) * indivEmployeeArray[2];
  //console.log(compensationArray);

  compensationArray[3] = bonusDollars;
  console.log(compensationArray);
}

//buildInvidualBonus(atticus);



function calculateAllBonus(employeesArray){
  //This function runs the whole show, brings everything together
  finalArray = [];
  for (var i=0; i<employeesArray.length; i++) {
    finalArray[i] = buildInvidualBonus(employeesArray[i]);
    //calculateIndivBonus(i);
  }
  //returns final bonus array
  console.log(finalArray);
  return finalArray;
}


calculateAllBonus(employees);

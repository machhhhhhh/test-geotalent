const A_person = 31;
const B_person = 25;
const C_person = 10;
let waitPerson = 142;
// let waitPerson = 0
let countA = 0;
let countB = 0;
let countC = 0;

const A_Travel = 350.0;
const B_Travel = 280.0;
const C_Travel = 120.0;

const calculate_rate = (person, price) => {
  return price / person;
};

while (waitPerson > 0) {

  let person = waitPerson >=  A_person ? A_person : waitPerson ;
  const rate_A = calculate_rate(person, A_Travel);

  person = waitPerson >=  B_person ? B_person : waitPerson ;
  const rate_B = calculate_rate(person, B_Travel);

  person = waitPerson >=  C_person ? C_person : waitPerson ;
  const rate_C = calculate_rate(person, C_Travel);



  const rate = [rate_A, rate_B, rate_C];

  // console.log(rate);


  // another way
  // const rate_1 = [
  //   calculate_rate(waitPerson - A_person, A_Travel),
  //   calculate_rate(waitPerson - B_person, B_Travel),
  //   calculate_rate(waitPerson - C_person, C_Travel),
  // ];

  const min = Math.min(...rate) // find the cheapest
  const index = rate.indexOf(min) // find the type
  // console.log(index);

  // 0 = A, 1 = B, 2 = C

  if(index===0){
    waitPerson -= A_person
    countA++
  }
  else if (index ===1){
    waitPerson -= B_person
    countB++
  }
  else {
    waitPerson -= C_person
    countC++
  }

}

console.log(countA);
console.log(countB);
console.log(countC);

const result = (countA* A_Travel) + (countB* B_Travel) + (countC *C_Travel)
console.log(result);

//   if(waitPerson > 25 && waitPerson < 31){

//     waitPerson = waitPerson - B_person
//     countB ++
//   }

//   else if(waitPerson> 0 && waitPerson < 10){
//     waitPerson = waitPerson - C_person
//     countC ++
// }

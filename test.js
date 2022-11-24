let waitPerson = 142;
const travel_info = [
  { limit: 31, name: "A", price: 350.0, round: 0 },
  { limit: 25, name: "B", price: 280.0, round: 0 },
  { limit: 10, name: "C", price: 120.0, round: 0 },
];

const calculate_rate = (person, price) =>  price / person;

while (waitPerson > 0) { // O(N)
    const rate = [];
    for(let i=0; i<3; i++){ //  O(C)
        let person = waitPerson >= travel_info[i].limit ? travel_info[i].limit : waitPerson;
        const r = calculate_rate(person, travel_info[i].price);
        rate.push(r)
    }

    //*****************  second way  *************
    // let person = waitPerson >=  A_person ? A_person : waitPerson ;
    // const rate_A = calculate_rate(person, A_Travel);

    // person = waitPerson >=  B_person ? B_person : waitPerson ;
    // const rate_B = calculate_rate(person, B_Travel);

    // person = waitPerson >=  C_person ? C_person : waitPerson ;
    // const rate_C = calculate_rate(person, C_Travel);



    // const rate = [rate_A, rate_B, rate_C];

    // if(index===0){
    //   waitPerson -= A_person
    //   countA++
    // }
    // else if (index ===1){
    //   waitPerson -= B_person
    //   countB++
    // }
    // else {
    //   waitPerson -= C_person
    //   countC++
    // }

    // ********************* end second way ********


  const min = Math.min(...rate); // find the cheapest
  const index = rate.indexOf(min); // find the type   // 0 = A, 1 = B, 2 = C

  travel_info[index].round ++
  waitPerson -= travel_info[index].limit;
}

let result = 0
travel_info.forEach(item => result += item.price * item.round)

console.table(travel_info);
console.log(result);
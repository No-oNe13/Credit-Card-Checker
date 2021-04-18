const source = '4485314290955104';

const newCC = () => {
  
    let numbers = new Array(source.length);
      for (let i = 0; i < source.length; i++) {
       numbers[i] = source.charCodeAt(i) - 48;
    }
    return numbers
};

console.log (newCC());

//console.log(newCC());

const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

let invCC = [];
let valCC = [];
// Below code for the Valid Credit Cards validateCred() #3

valCC = array => {
    const arrayLength = array.length;
    const modifiedArrayLength = arrayLength -2;
    let sum = 0;
    let a = arrayLength -1;
    let m = modifiedArrayLength;
    do {
      let num = (array [m] *2);
        if (num >= 10) {
          num = (num -9)
    }
      m = m -2;
      sum = sum + num;
    }
     while (m >= 0);
    do 
    {
      let arrLen = (array [a]);
      a = a -2;
      sum = sum + arrLen;
    } 
    while (a >= 0);
      checkSum = sum %10;
        if (checkSum === 0) {
      return true
    }
      return false
};

console.log (valCC (invalid3));
console.log (valCC (valid3));
console.log (valCC (mystery3));
console.log (valCC (newCC()));
//console.log (valCC (numbers));

// Below code for the Find Invalid Credit Cards findInvalidCards() #4

 findInvCC = (arr) => {
  batch.forEach (arr => {
    if (valCC (arr) == false) {
      invCC.push (arr);
    }
    })

};


findInvCC();
console.log (invCC);

// Below code for the Invalid Credit Card Companies idInvalidCardCompanies() #5

  let invCCom = [];

const idInvCCom = () => {
    for (let i = 0; i < invCC.length; i++) {
      const badCC = invCC[i];
      for (let j = 0; j < 1; j++) {
        switch (badCC [j]) {
          case badCC [j] [0] = 3:
            invCCom.push ('Amex');
          break;
          case badCC [j] [0] = 4:
            invCCom.push ('Visa');
          break;
          case badCC [j] [0] = 5:
            invCCom.push ('MasterCard');
          break;
          case badCC [j] [0] = 6:
            invCCom.push ('Discover');
          break;
          default:
            invCCom.push ('Not Known');
          
        }
      }
    }
};
idInvCCom();
console.log (invCCom);

const duplicated = (arr) => {
  return arr.filter ((a, b) => arr.indexOf (a) === b)
};

console.log ('Companys that have mailed out cards with invalid numbers. As follows:'+ ' ' +duplicated(invCCom));


const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);
const alphabetLowerCase = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

let firstNameTarget = document.getElementById("firstName");
console.log(Array.from(firstNameTarget.innerText));
let lastNameTarget = document.getElementById("lastName");
console.log(Array.from(lastNameTarget.innerText));
let fullStackTarget = document.getElementById("fullStack");
console.log(Array.from(fullStackTarget.innerText));

const makeRandomString = (length) => {
  const randomArray = [];

  randomArray.push(alphabet[Math.floor(Math.random() * 26)]); // first capital letter

  for (let index = 1; index < length; index++) {
    randomArray.push(alphabetLowerCase[Math.floor(Math.random() * 26)]);
  }

  return randomArray.join("");
};


function shuffleNames(firstNameTarget, lastNameTarget, fullStackTarget) {
    let counter = 0;
    const cyclesLimit = Math.floor(3500 / 75);

    fullStackTarget.innerText = "Backend";
    fullStackTarget.style.alignSelf = "flex-start";

    const shuffleFullStackIntervalId = setInterval(() => {

        if (fullStackTarget.innerText === "Full Stack") {
            fullStackTarget.innerText = "Backend";
            
        } else if(fullStackTarget.innerText === "Backend") {
            fullStackTarget.innerText = "Frontend"
        } else fullStackTarget.innerText = "Backend";

        // console.log(fullStackTarget.style.alignSelf);
        

        if (fullStackTarget.style.alignSelf === "") {
            fullStackTarget.style.alignSelf = "flex-start";
            
        } else if(fullStackTarget.style.alignSelf === "flex-start") {
            fullStackTarget.style.alignSelf = "flex-end"
        } else fullStackTarget.style.alignSelf = "flex-start";

    }, 1000)

  const shuffleNamesIntervalId = setInterval(() => {
    // console.log(makeRandomString(firstNameTarget.innerText.length));
    firstNameTarget.innerText = makeRandomString(
      firstNameTarget.innerText.length
    );
    lastNameTarget.innerText = makeRandomString(
      lastNameTarget.innerText.length
    );
    counter++;
    // console.log(counter);
    
    if (counter === cyclesLimit) {
        clearInterval(shuffleNamesIntervalId);
        clearInterval(shuffleFullStackIntervalId);
        firstNameTarget.innerText = 'Eugene';
        lastNameTarget.innerText = 'Smyshliaev';
        fullStackTarget.innerText = 'Full Stack';
        fullStackTarget.style.alignSelf = "";
    };
  }, 100);
};

console.log(document.getElementById('bio').offsetHeight);


document.getElementById('bio').offsetHeight === 0 && shuffleNames(firstNameTarget, lastNameTarget, fullStackTarget);

setInterval(() => {
    document.getElementById('bio').offsetHeight === 0 && shuffleNames(firstNameTarget, lastNameTarget, fullStackTarget);
}, 20 * 1000)





// for (let cycles = 1; cycles < cyclesLimit; cycles++) {
//     console.log(cycles);
// };



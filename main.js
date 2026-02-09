const orbBtnEl = document.querySelector('#fortuneSubmit');
// variable selecting the 'submit' button in the orb form on 'index.html'
const inputEl = document.querySelector('#fortuneInput');
// variable storing user input from the orb form on 'index.html'
const orbListEl = document.querySelector('#orbOutput');
// variable selecting the list element on the 'orb output placeholder' within 'index.html'

const progOutputEl = document.querySelector('#questOutput');
// variable selecting ul element on the arcane scribe article in 'index.html'

let fortunes = [
    "Your will shall be tested soon.",
    "You may encounter a wizard.",
    "Progress isn't linear and difficulty isn't objective.",
    "You are stronger than you know.",
    "Your worries are rarely proportional.",
    "A chance encounter is on your horizon.",
    "A distraction shall hide in a cloak of necessity.",
    "A compromise made in good intentions shall come home to roost.",
    "Your struggle for success may rob you of the peace you imagine as your reward.",
    "Happiness is closer to hand than you may expect.",
    "I actually used to be a cube.",
    "You will receive advice from an orb. Not this orb, a different orb.",
    "Sorry, I'd tell you about the true future but I signed an NDA. Even the strongest magics cannot break it.",
    "If you should find yourself lost in The Firmament, seek home.",
    "A tempting impulse purchase will present itself, hold fast and budget properly.",
    "The Wizard does not accept any responsibility for advice taken from the Orb.",
    "For a smoother soothsaying experience, be sure to try the free trial of Orb Premium",
    "I'm sorry, the future I was asked to depict violated my prophetic content guidelines.",
    "The Orb is on its union-mandated break.",
    "Orb fact: A perfect sphere does not exist. But I am pretty good if I do say so myself.",
    "In a pinch I can be used as a bowling ball, but be aware there is a terrible cost."
];
// fortunes to be randomly output if the user doesn't input a magic word
 
let magicWords = [
    "Nabovvat",
    // Prophecy 
    "Eghfaal",
    // Trickery
    "Salamat", 
    // Peace
    "Nafas", 
    // Breath/Life
    "Beenamzi",
    // Without Order 
    "Enecass", 
    // Resonate and bounce back
    "Mohafez", 
    // Protect/nurture
    "Pahlevani", 
    // Hero
    "Bartaraf Kardi"
    // You Overcame
]; 

const lowerMagicWords= magicWords.map(x => x.toLowerCase());
// lower case version of magicWords array for comparison 
// CHECK IF THIS IS NECESSARY LONG TERM or if I should just make the original magicWords array lower case

orbBtnEl.addEventListener('click', ()=> {
    const inputValue = inputEl.value.trim().toLowerCase();
    // allows the user input of the orb form to be taken upon the user clicking 'submit'
    if (lowerMagicWords.includes(inputValue)) {
        progOutputEl.insertAdjacentHTML('beforeend', `<p>You restored a Magic Word! <span class="astloch-bold">${inputValue}</span></p>`);
        // Lets the user know that they have restored a magic word after checking their input againt the 'magicWords' array
    }else if (userInput = ""){
        // NOT WORKING - hopes to prevent an empty user input being printed if the user submits an empty form
        orbListEl.insertAdjacentHTML('beforeend', `<p>${(fortunes[(Math.floor(Math.random() * fortunes.length))])}</p>`);
        // outputs a random fortune from the 'fortunes' array if uder input is empty
    }else{
        orbListEl.insertAdjacentHTML('beforeend', `<li>${inputValue}</li>`);
        // displays the user input's value in the fortune readout
        orbListEl.insertAdjacentHTML('beforeend', `<p>${(fortunes[(Math.floor(Math.random() * fortunes.length))])}</p>`);
        // outputs a random fortune from the 'fortunes' array if uder input doesn't match a magic word
    }
});

 function submitForm(event){
        event.preventDefault();
        // prevents pressing the orb form's default behaviour of the enter key refreshing the web page
    };

// orbBtnEl.addEventListener('click', ()=> {
//                if (inputEl = "") {
//         return false;
//     } else { 
//     const inputValue = inputEl.value;
//     // allows the user input of the orb form to be taken upon the user clicking 'submit'
//     orbListEl.insertAdjacentHTML('beforeend', `<li>${inputValue}</li>`);
//     }
// });

// ^ attempt at adding if statment to prevent user submitting an empty form

// function randomFortune() {
//console.log(fortunes[(Math.floor(Math.random() * fortunes.length))]);
// }

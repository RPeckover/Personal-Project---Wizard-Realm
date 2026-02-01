const orbBtnEl = document.querySelector('fortuneSubmit');
// variable selecting the 'submit' button in the orb form on 'index.html'
const inputEl = document.querySelector('fortuneInput');
// variable storing user input from the orb form on 'index.html'
const orbListEl = document.querySelector('orbOutput');
// variable selecting the list element on the 'orb output placeholder' within 'index.html'

// Above query selectors may require 'CSS.escape()' if the IDs are not CSS friendly?

// const outputEL = document.querySelector('questOutput');

orbBtnEl.addEventListener('click', () => {
    const inputValue = inputEl.value;
    // allows the user input of the orb form to be taken upon the user clicking 'submit'
    orbListEl.insertAdjacentHTML('beforeend', `<li>${inputValue}</li>`);
});

let fortunes = [
    "Your will shall be tested soon.",
    "You may encounter a wizard.",
    "Progress isn't linear and difficulty isn't objective.",
    "You are stronger than you know.",
    "Your worries are rarely proportional.",
    "A chance encounter is on your horizon.",
    "A distraction shall hide in a cloak of necessity.",
    "A compromise made in good intentions will come home to roost.",
    "Your struggle for success may rob you of the peace you imagine as your reward.",
    "Happiness is closer to hand than you may expect.",
    "I actually used to be a cube.",
    "You will receive advice from an orb. Not this orb, a different orb.",
    "Sorry, I'd tell you about the true future but I signed an NDA. Even the strongest magics cannot break it.",
    "If you should find yourself lost in The Firmament, seek home.",
    "A tempting impulse purchase will present itself, hold fast and budget properly.",
    "The Wizard does not accept any responsibility for advice taken from the Orb.",
    "For a smoother soothsaying experience, be sure to try the fre trial of Orb Premium",
    "I'm sorry, the future I was asked to depict violated my prophetic content guidelines.",
    "The Orb is on its union-mandated break.",
    "Orb fact: A perfect sphere does not exist. But I am pretty good if I do say so myself.",
    "In a pinch I can be used as a bowling ball, but be aware there is a terrible cost."
];
 
// let magicWords = [
// "Nabovvat", 
// "Eghfaal",
// "Salamat", 
// "Nafas", 
// "Beenamzi", 
// "Enecass", 
// "Mohafez", 
// "Pahlevani", 
// "Bartaraf Kardi"
// ];

if (userInput.includes())

function randomFortune() {
    console.log(fortunes[(Math.floor(Math.random() * arr.length))]);
}
randomFortune()

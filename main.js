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

let foundWords = [];
let wordsRemaining;
// used to track and display the user's progress

function progressCheck() {
    foundWords = JSON.parse(localStorage.getItem("storedFoundWords")) || [];
// re-populates local array that stores magic words the user has already found ^ call on page load
}

const dataTextEl = document.querySelector("#dataText");
// variable selecting the text element for the 'data' article in 'about.html'

function aboutLoad() { 
    dataTextEl.insertAdjacentHTML('beforeend', `there are 8 magic words in total<br>---<br>${8-foundWords.length} magic words remain<br>---<br></br>`);
    for (let i = 0; i < lowerMagicWords.length; i++) {
    if (foundWords.includes(lowerMagicWords[i])) {
        document.getElementById(`word${i+1}HintList`).style.display = "none"; 
        // hides 'hint' elements if the user has already found the associated word
        document.getElementById(`word${i+1}Found`).insertAdjacentHTML("beforeend", "<p>found</p>");
        // lets the user know they have already found this word
    }
}
}
// 'bartaraf kardi' doesn't work for hiding / displaying elements - something about it in the foundWords array likely isn't matching to the lowerMagicWords array

const wordFoundTextEl = document.querySelector('#wordFound');
// selects all divs in 'hints' section so that they can display new text upon user fidning the associated words
// MAY REQUIRE EACH DIV ASSOCIATED TO A WORD TO HAVE A DIFFERENT ID

// BELOW FUNCTION should be on page load of 'about.html' and check against found words which will be populated on load based off local storage keys, if the key stores a value of 'true' 
function hideHints() {
    if (foundWords.includes())
        //WORD-HINT-UL-ELEMENT.style.display = "none";
        //wordFoundTextEl.insertAdjacentHTML('beforeend', `<p>You have discovered this word</p>`);
;
}
// function to remove hints for words the user has already found
// could I make each hint list ID the same?


// eraseButttonEL = document.querySelector('#eraseBtn');
// eraseTickboxEl = document.querySelector('#eraseTickbox');

function eraseProgress() {
    // function to clear local storage and reset the quest progress for the user. User must tick box and click button to do this to prevent accidental loss of progress
    //const tickState =
if (document.querySelector('#eraseTickbox').checked) {
    // checks user has used the tickbox confirming their intent to erase progress
    localStorage.clear();
    window.alert("quest progress reset.");
    window.location.reload();
} else {
    window.alert("please tick the box if you would like to erase all progress");
    // alerts user that they must use the tickbox to reset their progress
}
}
// intended to alert user if they click the button without ticking the box and reset local storage if the box is ticked and the button is clicked
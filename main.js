let magicWords = [// array of the magic words sought by the user
    "Nabovvat",
    // Prophecy 
    "Eghfaal",
    // Trickery
    "Salamat", 
    // Peace
    "Nafas", 
    // Breath/Life
    "Beenazmi",
    // Without Order 
    "Mohafez", 
    // Protect/nurture
    "Pahlevani", 
    // Hero
    "Bartaraf Kardi"
    // You Overcame
]; 

let magicWordsMeaning = [// array storing the Magic Words meanings to be displayed in the 'hints' article on 'about.html upon the user discovering a word
    "prophecy",
    "trickery",
    "peace",
    "breath/life",
    "without order",
    "protect/nurture",
    "hero",
    "you overcame"
];

const lowerMagicWords= magicWords.map(x => x.toLowerCase());// lower case version of magicWords array for comparison 
// CHECK IF THIS IS NECESSARY LONG TERM or if I should just make the original magicWords array lower case

let foundWords = [];// used to track and display the user's progress

function progressCheck() {
    foundWords = JSON.parse(localStorage.getItem("storedFoundWords")) || [];// re-populates local array that stores magic words the user has already found ^ call on page load
}

const dataTextEl = document.querySelector("#dataText");// variable selecting the text element for the 'data' article in 'about.html'

function aboutLoad() {// checks if user has found Magic Words and removes associated hints from 'about.html' if so  
    dataTextEl.insertAdjacentHTML('beforeend', `there are 8 magic words in total<br>---<br>${8-foundWords.length} magic words remain<br>---<br></br>`);
    for (let i = 0; i < lowerMagicWords.length; i++) {
    if (foundWords.includes(lowerMagicWords[i])) {
        document.getElementById(`word${i+1}HintList`).style.display = "none"; // hides 'hint' elements if the user has already found the associated word
        document.getElementById(`word${i+1}Found`).insertAdjacentHTML("beforeend", `<p><span class="astloch-bold">${lowerMagicWords[i]}</span> (${magicWordsMeaning[i]}) found</p>`); // lets the user know they have already found this word
    }
}
}

const wordFoundTextEl = document.querySelector('#wordFound');// selects all divs in 'hints' section so that they can display new text upon user fidning the associated words

function eraseProgress() {// function to clear local storage and reset the quest progress for the user. User must tick box and click button to do this to prevent accidental loss of progress
if (document.querySelector('#eraseTickbox').checked) {// checks user has used the tickbox confirming their intent to erase progress
    localStorage.clear();// clears local storage and thus, user progress
    window.alert("quest progress reset.");
    window.location.reload();// reloads page
} else {
    window.alert("please tick the box if you would like to erase all progress");// alerts user that they must use the tickbox to reset their progress
}
}
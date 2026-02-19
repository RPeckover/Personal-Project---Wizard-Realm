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

let foundWords = [];
let wordsRemaining;
// used to track and display the user's progress


// localStorage.setItem("storedFoundWords", JSON.stringify(foundWords));

function progressCheck() {
    foundWords = JSON.parse(localStorage.getItem("storedFoundWords")) || [];
// re-populates local array that stores magic words the user has already found ^ call on page load
}

const dataTextEl = document.querySelector("#dataText");

// const word1HintListEl = document.querySelector('#word1HintList');

function aboutLoad() { 
    dataTextEl.insertAdjacentHTML('beforeend', `there are 8 magic words in total<br>---<br>${8-foundWords.length} magic words remain<br>---<br></br>`);
    if (foundWords.includes(lowerMagicWords[0])){
        word1HintList.style.display = "none"; // hide the element
        word1Found.insertAdjacentHTML('beforeend', `<p>found</p>`); // lets user know they have found this word
    } else if (foundWords.includes(lowerMagicWords[1])) {
        word2HintList.style.display = "none"; // hide the element
        word2Found.insertAdjacentHTML('beforeend', `<p>found</p>`); // lets user know they have found this word
    } else if (foundWords.includes(lowerMagicWords[2])) {
        word3HintList.style.display = "none"; // hide the element
        word3Found.insertAdjacentHTML('beforeend', `<p>found</p>`); // lets user know they have found this word
    } else if (foundWords.includes(lowerMagicWords[3])) {
        word4HintList.style.display = "none"; // hide the element
        word4Found.insertAdjacentHTML('beforeend', `<p>found</p>`); // lets user know they have found this word
    } else if (foundWords.includes(lowerMagicWords[4])) {
        word5HintList.style.display = "none"; // hide the element
        word5Found.insertAdjacentHTML('beforeend', `<p>found</p>`); // lets user know they have found this word
    } else if (foundWords.includes(lowerMagicWords[5])) {
        word6HintList.style.display = "none"; // hide the element
        word6Found.insertAdjacentHTML('beforeend', `<p>found</p>`); // lets user know they have found this word
    } else if (foundWords.includes(lowerMagicWords[6])) {
        word7HintList.style.display = "none"; // hide the element
        word7Found.insertAdjacentHTML('beforeend', `<p>found</p>`); // lets user know they have found this word
    } else if (foundWords.includes(lowerMagicWords[7])) {
        word8HintList.style.display = "none"; // hide the element
        word8Found.insertAdjacentHTML('beforeend', `<p>found</p>`); // lets user know they have found this word
    } else {
        return 0;
}
}

// Check if above code is necessary for 'about.html' or if I can use the 'wordsRemaining' variable in the <p> element directly

orbBtnEl.addEventListener('click', ()=> {
    const inputValue = inputEl.value.trim().toLowerCase();
    // allows the user input of the orb form to be taken upon the user clicking 'submit'
    if (lowerMagicWords.includes(inputValue) & foundWords.includes(inputValue)) {
        progOutputEl.insertAdjacentHTML('beforeend', `<p>You have already found this Magic Word!</p>`);
        
    }else if (lowerMagicWords.includes(inputValue)) {
        progOutputEl.insertAdjacentHTML('beforeend', `<p>You restored a Magic Word! <span class="astloch-bold">${inputValue}</span><br><br>${7-foundWords.length} Words remain.</p>`);
        // lets the user know that they have restored a magic word after checking their input againt the 'magicWords' array, displays number of words remaining for user to find
        foundWords.push(inputValue);
        // adds successful user input to an array of found words to prevent them being input multiple times
        localStorage.setItem("storedFoundWords", JSON.stringify(foundWords));
        // 
    }else if (inputValue === ""){
        // prevents an empty user input being printed if the user submits an empty form
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

const itemDescEl = document.querySelector('#itemDescText');
const detailViewEl = document.querySelector('#detailViewContent');
// third variable for article title to change to item name via the array?

let trinkets = [
    ["Brasswork", "An ornamental brass created as a symbol of collaboration. Some would say that this artefact holds untold value. I would say that you’re welcome to pay me untold riches if you’d like! Sales pitch aside - its lustre is finely rendered by artisans, a rare collaboration between the finest craftsmen of the underground and the surface. While it may not have been made for a practical purpose, it was formed with true reverence for the art of making."],
    ["Luck of the Drawers", "Carved from the bow of a wish-granting tree struck by lightning one night, these drawers may contain any number of small items but it shall only grant the user what they need. Sadly, the draws currently aren’t working as intended due to my ambient magics having been siphoned by the loss of the words! I did however discover this cypher upon its side... [INSERT CYPHER]"],
    ["The Trench-Heart", "Uncovered from the depths of a sea trench, a place where only the hardiest of creatures dwell, this rock itself resonates with vitality. The green and blue hues streaked through it are cause for debate amongst scholars. Some believe they are competing for control over the rock, some believe they are harmonious. Regardless of these musings the mystery of its natural energies and origin remain enshrouded. I asked the fish, but the fish do not remember. I asked the rocks, but the rocks do not recall. Even the rocks do not recall."],
    ["Vestige of Barnabus", "Barnabus C. Horatio was a jealous mage who hoarded arcane knowledge and attempted to lay waste to several kingdoms for criticising his hat. As recompense he is now imprisoned in a cage of plush fabric. Though his days terrorising the lands are long gone, his pettiness still lingers. Barnabus has long since become naught but a nuisance in lieu of dominating the world."],
    ["Krogg", "Krogg isn’t the only Krogg to exist, but each one of them is the same entity. Inscrutable, Krogg’s grimace comforts my soul and haunts my darkest dreams. But I have never known Krogg to be anything but benevolent. Treat Krogg with deference and I am sure there will be no problems. In fact, if you help recover the sacred word I’m sure that might incur quite the boon."],
    ["Dragonsnail Carving", "Gemsnails in the rare event they are left to grow unbidden become gargantuan beasts, Dragon snails. Unpredictable but mostly docile they roam the crystal caverns. Their ‘Slime Breath’ appearing similar to Dragon’s Flame earned them their moniker. This model was carved by one of the few dwarf naturalists who observed one."],
    ["Brooch of the Elements (Revised Edition)", "beyond its fashion potential, the many colours each hold a charm related to the classical elements, water, earth, fire, air, electricity, slime and other. Yes, yes the academy’s revamp of the elements remains controversial."],
    ["Box of the Fish King", "As boxes go, you’ll be hard pressed to find one more ornate than that of the Fish King. Its hand-painted sides spin the tale of the Aurora Lake. Upon sightings of a magnificent fish, shining as gold, the queen would accept no other gift and ordered the fish captured. But the humble wild fisherman, the only one skilled enough to find the beast, couldn't bring himself to take its beauty from the world. When he was brought to the queen for his disobedience, he  stayed loyal to his love of the waters. Before he received his punishment, the onlookers were blessed with the sight of  the fish king as it leapt from the lake and caught the light. The fisherman was forgiven, his care for the world rewarded until his last days upon that very lake. A heartening story that may hold more truth than we know."],
    ["Pietra Dura", "I once dreamt I was a foreigner lost in a patchwork of fields.<br>Their rambling forms abruptly hemmed in by an abyss.<br>I wandered their borders, hoping my feet would guide me.<br>The memory now hazy, my wakeful mind deigned only recall:<br> The yellow of the mottled south west and its rippling mirror opposite.<br>The warmth the sun breathed into the deep red rocks just below.<br> That it was in the green shimmering bands that I first felt more sure.<br>And finally, upon my time to leave, the spiral carried me home upon its gentle rungs."],
    ["Unrefined Bubblestone", "Unrefined Bubblestone. These crystals when processed were once popular in use by soft drink alchemists. Outside of its utility in arcane beverages the crystals hold a great beauty in their strange structure. Another name given for its appearance was Graperock, though I don't advise biting down on the raw mineral despite its appetising appearance! But hey - you buy it, you make the rules! But magical item insurance doesn’t cover dental."],
    ["Unknown Effigy", "Ah the effigy. Enigmatic as ever, it seldom communicates though it's very apparent it is more conscious than it would appear! Sometimes when I am not looking it turns to face me, it’s rather unnerving! See if you can’t get it to utter some words. Perhaps the loss of the secret words shall compel it to interact."]
// multidimensional array storing trinket names and descriptions
];

// 'mosaic' AKA 'pietra dura' click sequence psuedocode etc -

const SWyellowMapEl = document.querySelector('#SWyellow');
const NEyellowMapEl = document.querySelector('#NEyellow');
const redMapEl = document.querySelector('#red');
const greenMapEl = document.querySelector('#green');
const spiralMapEl = document.querySelector('#spiral');
//get click - each map area
//if else statement

function genericItemDesc() {
// function to serve basic, non-custom info into the item description via user clicking a trinket 
// HOW DO I TELL WHICH ITEM THE USER CLICKED ACTIVATED THIS FUNCTION?

}

function drawDesc() {
// function to serve info into the item description via user clicking the 'drawer' trinket

}

function kroggDesc() {
// function to serve info into the item description via user clicking the 'krogg' trinket

}

function boxDesc() {
// function to serve info into the item description via user clicking the 'box' trinket

}

function mosaicDesc() {
// function to serve info into the item description via user clicking the 'mosaic' trinket

}

const brassImgEl = document.querySelector('#brassImg');
const drawImgEl = document.querySelector('#drawImg');
const mineralImgEl = document.querySelector('#mineralImg');
const plushImgEl = document.querySelector('#plushImg');
const kroggImgEl = document.querySelector('#kroggImg');
const snailImgEl = document.querySelector('#snailImg');
const broochImgEl = document.querySelector('#broochImg');
const boxImgEl = document.querySelector('#boxImg');
const mosaicImgEl = document.querySelector('#mosaicImg');
const grapeImgEl = document.querySelector('#grapeImg');
const effigyImgEl = document.querySelector('#effigyImg');
//LOOK INTO IF THIS IS BEST METHOD 

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
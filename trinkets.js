const detailViewEl = document.querySelector('#detailViewContent');
const treasureDisplayEl = document.querySelector('#treasureDisplay');
const detailTitleEl = document.querySelector('#detailTitle');
// ^ Unneeded?

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

treasureDisplayEl.addEventListener("click", (event) => {
    
    //const currentTarget = event.currentTarget.getAttribute("id");
    const target = event.target.getAttribute("id");
    testDisplay.insertAdjacentHTML('beforeend', `<br>${target}`);
    trinketDesc(target);
});

function trinketDesc(target) {
    for (let i = 0; i < trinkets.length; i++) {
        if (target == (`trinket${[i+1]}Img`)) {
            console.log("match");
            document.getElementById(`descTextBox`).innerHTML = ""; // removes instructional text from view
            document.getElementById(`detailTitle`).innerHTML = ""; // removes detail view heading from view
            detailTitle.insertAdjacentHTML('beforeend', `${trinkets[i][0]}`); // displays trinket name in 'detail view' article title
            descTextBox.insertAdjacentHTML('beforeend', `${trinkets[i][1]}`); // displays trinket text in 'item description'
            break; // prevents the loop for continuing to run
        }
        else {
            document.getElementById(`descTextBox`).innerHTML = "select an item to view info<br>---<br>"; // displays instructional text
            document.getElementById(`detailTitle`).innerHTML = "detail view"; // removes detail view heading from view
        }
    }
}
// function to serve basic, non-custom info into the item description via user clicking a trinket 

// function trinketsLoad() {

// }

function drawDesc() {
// function to serve info into the item description via user clicking the 'drawer' trinket

}

function kroggDesc() {
// function to serve info into the item description via user clicking the 'krogg' trinket

}

function boxDesc() {
// function to serve info into the item description via user clicking the 'box' trinket

}

// 'mosaic' AKA 'pietra dura' click sequence psuedocode etc -
const SWyellowMapEl = document.querySelector('#SWyellow');
const NEyellowMapEl = document.querySelector('#NEyellow');
const redMapEl = document.querySelector('#red');
const greenMapEl = document.querySelector('#green');
const spiralMapEl = document.querySelector('#spiral');
//get click - each map area
//if else statement

function mosaicDesc() {
// function to serve info into the item description via user clicking the 'mosaic' trinket

}
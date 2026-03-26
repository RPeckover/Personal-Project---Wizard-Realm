const detailViewEl = document.querySelector('#detailViewContent');
const treasureDisplayEl = document.querySelector('#treasureDisplay');// used
const detailTitleEl = document.querySelector('#detailTitle');
const mosaicMapEl = document.querySelector('#mosaicImgMap');// used
const drawFormEl = document.querySelector('#drawForm');// used
// ^ some unneeded?

let trinkets = [// multidimensional array storing trinket names and descriptions
    ["Brasswork", "An ornamental brass created as a symbol of collaboration. Some would say that this artefact holds untold value. I would say that you’re welcome to pay me untold riches if you’d like! Sales pitch aside - its lustre is finely rendered by artisans, a rare collaboration between the finest craftsmen of the underground and the surface. While it may not have been made for a practical purpose, it was formed with true reverence for the art of making."],
    ["Luck of the Drawers", "Carved from the bow of a wish-granting tree struck by lightning one night, these drawers may contain any number of small items but it shall only grant the user what they need. Sadly, the draws currently aren’t working as intended due to my ambient magics having been siphoned by the loss of the words! I did however discover this strange survey scroll upon its side..."],
    ["The Trench-Heart", "Uncovered from the depths of a sea trench, a place where only the hardiest of creatures dwell, this rock itself resonates with vitality. The green and blue hues streaked through it are cause for debate amongst scholars. Some believe they are competing for control over the rock, some believe they are harmonious. Regardless of these musings the mystery of its <a href='mycomancy.html'>natural</a> energies and origin remain enshrouded. I asked the fish, but the fish do not remember. I asked the rocks, but the rocks do not recall. Even the rocks do not recall."],
    ["Vestige of Barnabus", "Barnabus C. Horatio was a jealous mage who hoarded arcane knowledge and attempted to lay waste to several kingdoms for criticising his hat. As recompense he is now imprisoned in a cage of plush fabric. Though his days terrorising the lands are long gone, his pettiness still lingers. Barnabus has long since become naught but a nuisance in lieu of dominating the world."],
    ["Krogg", "Krogg isn’t the only Krogg to exist, but each one of them is the same entity. Inscrutable, Krogg’s grimace comforts my soul and haunts my darkest dreams. But I have never known Krogg to be anything but benevolent. Treat Krogg with deference and I am sure there will be no problems. In fact, if you help recover the sacred word I’m sure that might incur quite the boon."],
    ["Dragonsnail Carving", "Gemsnails in the rare event they are left to grow unbidden become gargantuan beasts, Dragon snails. Unpredictable but mostly docile they roam the crystal caverns. Their ‘Slime Breath’ appearing similar to Dragon’s Flame earned them their moniker. This model was carved by one of the few dwarf naturalists who observed one."],
    ["Brooch of the Elements (Revised Edition)", "beyond its fashion potential, the many colours each hold a charm related to the classical elements, water, earth, fire, air, electricity, slime and other. Yes, yes the academy’s revamp of the elements remains controversial."],
    ["Box of the Fish King", "As boxes go, you’ll be hard pressed to find one more ornate than that of the Fish King. Its hand-painted sides spin the story of the Aurora Lake. After sightings of a magnificent fish, shining as gold, the queen would accept no other favor and ordered the fish be caught. But the humble wild fisherman, the only one skilled enough to find the beast, couldn't bring himself to take its beauty from the world. When he was brought to the queen for his disobedience, he stayed loyal to his love of the waters. Before he received his punishment, the onlookers were blessed with the sight of the fish king as it leapt from the lake and caught the light. The fisherman was forgiven, his care rewarded until his last days spent upon that very lake. A heartening tale that may hold more truth than we know."],
    ["Pietra Dura", "I once dreamt I was a foreigner lost in a patchwork of fields.<br>Their rambling forms abruptly hemmed in by an abyss.<br>I wandered their borders, hoping my feet would guide me.<br>The memory now hazy, my wakeful mind deigned only recall:<br> The yellow of the mottled south west and its rippling mirror opposite.<br>The warmth the sun breathed into the deep red rocks just below.<br> That it was in the green shimmering bands that I first felt more sure.<br>And finally, upon my time to leave, the spiral carried me home upon its gentle rungs."],
    ["Unrefined Bubblestone", "Unrefined Bubblestone. These crystals when processed were once popular in use by soft drink alchemists. Outside of its utility in arcane beverages the crystals hold a great beauty in their strange structure. Another name given for its appearance was Graperock, though I don't advise biting down on the raw mineral despite its appetising appearance! But hey - you buy it, you make the rules! But magical item insurance doesn’t cover dental."],
    ["Unknown Effigy", "Ah the effigy. Enigmatic as ever, it seldom communicates though it's very apparent it is more conscious than it would appear! Sometimes when I am not looking it turns to face me, it’s rather unnerving! See if you can’t get it to utter some words. Perhaps the loss of the secret words shall compel it to interact."]
];

treasureDisplayEl.addEventListener("click", (event) => {
    //const currentTarget = event.currentTarget.getAttribute("id");
    const target = event.target.getAttribute("id");
    //testDisplay.insertAdjacentHTML('beforeend', `<br>${target}`);
    trinketDesc(target);
});

function trinketDesc(target) {
    const canvas = document.querySelector("canvas");// gets the canvas element for the sake of accessing the 3D model
    canvas.style.display = "none";// hides ThreeJS renderer, allowing the 3D model to load in the background and be dynamically displayed via altering styling
    const parent = document.querySelector("#detailViewContent");// selects the parent element of the detail view, used to hide all content within it before displaying the relevant content for the trinket clicked
    parent.querySelectorAll("*").forEach(element => {// iterates through all child elements of the detail view and hides them
        element.style.display = "none";// hides the elements
    });
    for (let i = 0; i < trinkets.length; i++) {// iterates through the trinkets array to find a match for the trinket image clicked
        if (target == (`trinket${[i+1]}Img`)) {
            console.log("match");
            document.getElementById(`drawForm`).style.display = "none"// removes form specific to the 'draws' trinket from displaying
            document.getElementById(`descTextBox`).innerHTML = "";// removes instructional text from view
            document.getElementById(`descTitle`).innerHTML = "";// removes item description heading from view
            descTitle.insertAdjacentHTML('beforeend', `${trinkets[i][0]}`);// displays trinket name in 'item description' article title
            descTextBox.insertAdjacentHTML('beforeend', `${trinkets[i][1]}`);// displays trinket text in 'item description'
                switch (target) {// switch statement for trinkets with specific media that deviates from the 'generic' trinkets
                    case `trinket2Img`:
                        console.log("Drawers selected");
                        document.getElementById(`drawDetailImg`).style.display = "block";
                        document.getElementById(`drawForm`).style.display = "block"
                        break;
                    case `trinket5Img`:
                        console.log("Krogg selected");
                        canvas.style.display = "block";
                        break;
                    case `trinket8Img`:
                        console.log("box selected");
                        document.getElementById(`box1`).style.display = "block";
                        document.getElementById(`box2`).style.display = "block";
                        break;
                    case `trinket9Img`:
                        console.log("mosaic selected");
                        document.getElementById(`mosaicDetailImg`).style.display = "block";
                        break;
                    default:
                        console.log("generic item selected");
                        document.getElementById(`detailImg${[i+1]}`).style.display = "block"
                }
                break;// prevents the for loop continuing to run
            }
        else 
            document.getElementById(`descTextBox`).innerHTML = "select an item to view info<br>---<br>";// displays instructional text
            document.getElementById(`descTitle`).innerHTML = "item description";// displays description title heading 
    }
} 

let mosaicMapSequence = ["SWyellow", "NEyellow", "red", "green", "spiral"];
let mosaicFoundIndex = 0;// current index of the sequence the user is on, incremented upon each correct click to check progress through the sequence
mosaicMapEl.addEventListener("click", (event) => {
    const mosaicTarget = event.target.getAttribute("id");
    // testDisplay.insertAdjacentHTML('beforeend', `<br>${mosaicTarget}`);
    
    mapCheck(mosaicTarget);
});

function mapCheck(mosaicMapClickHist) { 
    console.log(mosaicMapClickHist);
    let mosaicAudio = new Audio('assets/wizard-audio/word-found' + (mosaicFoundIndex + 1) + '.mp3');// success sound that will iterate with each correct click the user makes and allows volume adjustment
    mosaicAudio.volume = 0.5;// sets audio level lower than the default 100%
    if(mosaicMapClickHist == (mosaicMapSequence[mosaicFoundIndex])) {// checks if the clicked area matches the current target in the sequence 
        mosaicAudio.play();// plays success sound
        mosaicFoundIndex++;// incrementss the index to check for the next target in sequence upon user clicking the correct area
    }else{
        mosaicFoundIndex = 0;// resets the index to ensure user must complete the sequence without clicking incorrectly mid-way through
    }
    if(mosaicFoundIndex == 5){// checks if the user completed the sequence
        console.log("mosaic complete");
        detailViewContent.insertAdjacentHTML('beforeend', `<br><div class="centered-article"><p class="green"><span class="astloch-bold">${lowerMagicWords[4]}</span></p></div>`);// displays the magic word as a reward for the puzzle 
    }
}

function drawSubmit() {
  let option1 = document.getElementById('book2').checked;
  let option2 = document.getElementById('gnome1').checked;
  let drawAudio = new Audio('assets/wizard-audio/word-found1.mp3');// selects audio to enable volume adjustment
  drawAudio.volume = 0.5;// sets audio level lower than the default 100%
  if(option1 && option2){// checks if user has selected the correct options
    drawAudio.play();// plays success audio
  	document.getElementById("drawResult").innerHTML = ('beforeend', `<br><div class="centered-article"><p class="green"><span class="astloch-bold">${lowerMagicWords[2]}</span></p></div>`);// displays the magic word as a reward for the puzzle 
    document.getElementById(`drawDetailImg`).style.display = "none";
    document.getElementById(`drawWin`).style.display = "block";
  }else{
    document.getElementById("drawResult").innerHTML = ('beforeend', `<br><p class="centered-article">Incorrect</p>`);
  }
}
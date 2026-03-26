let fortunes = [
    "Your will shall be tested soon.",
    "You may encounter a wizard.",
    "Progress isn't linear and difficulty isn't objective.",
    "You are stronger than you know.",
    // "Your worries are rarely proportional.",
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


const orbBtnEl = document.querySelector('#fortuneSubmit');// variable selecting the 'submit' button in the orb form on 'index.html'
const inputEl = document.querySelector('#fortuneInput');// variable storing user input from the orb form on 'index.html'
const orbListEl = document.querySelector('#orbOutput');// variable selecting the list element on the 'orb output placeholder' within 'index.html'
const progOutputEl = document.querySelector('#questOutput');// variable selecting ul element on the arcane scribe article in 'index.html'
const vid = document.getElementById("wizardVideo");// variable selecting video element in 'index.html' to be able to change source and play videos based on user progress
const wordFoundAudio = [
    "assets/wizard-audio/word-found1.mp3", 
    "assets/wizard-audio/word-found2.mp3", 
    "assets/wizard-audio/word-found3.mp3", 
    "assets/wizard-audio/word-found4.mp3",
    "assets/wizard-audio/word-found5.mp3"
];// array of word found audio
let isIdleMode = false;// sets idle videos to not play by default
 
wizardVideo.addEventListener("ended", () => {// checks if video has ended, if user hasn't located the first magic word, it is provided in the arcane scribe, also triggers idle videos  
    if (foundWords.includes("nabovvat") === false) { 
        progOutputEl.insertAdjacentHTML('beforeend', `<p>The wizard has provided you a small scroll reading "type <span class="astloch-bold">nabovvat</span> into the orb's textbox!"</p>`);
    }
    if(isIdleMode) {
        playIdleVideo();// plays random idle videos
    }
    if (foundWords.length === 8) {
        progOutputEl.insertAdjacentHTML('beforeend', `<p><i>Wazlini hands you a small, finely hewn pouch and bids you farewell.</i><br><br>
        Thank you for taking this silly little journey. If you would like to experience it again, you can reset your progress on 'about'.</p>`);
    }
})

orbBtnEl.addEventListener('click', ()=> {// allows the user input of the orb form to be taken upon the user clicking 'submit' on the orb form
    isIdleMode = false;
    vid.muted = false;
    vid.controls = true;
    const inputValue = inputEl.value.trim().toLowerCase();
    if (lowerMagicWords.includes(inputValue) & foundWords.includes(inputValue)) {
        progOutputEl.insertAdjacentHTML('beforeend', `<p>You have already found this Magic Word!</p>`);
        
    }else if (lowerMagicWords.includes(inputValue)) {
        progOutputEl.insertAdjacentHTML('beforeend', `<p>You restored a Magic Word! <span class="astloch-bold">${inputValue}</span><br><br>${7-foundWords.length} Words remain.</p>`);
        // lets the user know that they have restored a magic word after checking their input against the 'magicWords' array, displays number of words remaining for user to find
        questProgressAudio = new Audio(wordFoundAudio[Math.floor(Math.random() * wordFoundAudio.length)])// selects a random 'word found' audio clip from the 'wordFoundAudio' array
        questProgressAudio.volume = 0.5;// sets audio level lower than the default 100%
        questProgressAudio.play(); // plays a random randomised success audio
        foundWords.push(inputValue);// adds successful user input to an array of found words to prevent them being input multiple times
        localStorage.setItem("storedFoundWords", JSON.stringify(foundWords));
       switch (foundWords.length) {// plays 'word found' video
            case 1:// triggers when user inputs their first magic word to the 'orbSubmit' form
                progOutputEl.insertAdjacentHTML('beforeend', `<p>Well done Adventurer! Now that you've discovered your first Magic Word, go forth and uncover the rest! Seek the 'About' page if you are in need of guidance.</p>`);
                isIdleMode = true;// 
                break;
            case 2:// triggers when user has found 2 magic words
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/word-found-1.mp4";// set video source to appropriate word found video based on number of words found
                vid.play();
                }, 2000);// delay set to 2 seconds
                isIdleMode = true;// set idle mode to true to trigger idle video playback after word found video ends
                break;
            case 3:// triggers when user has found 3 magic words
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/word-found-2.mp4";
                vid.play();
                }, 2000);// delay set to 2 seconds
                isIdleMode = true;
                break;
            case 4:// triggers when user has found 4 magic words
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/word-found-3.mp4";
                vid.play();
                }, 2000);// delay set to 2 seconds
                isIdleMode = true;
                break;
            case 5:// triggers when user has found 5 magic words
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/word-found-4.mp4";
                vid.play();
                }, 2000);// delay set to 2 seconds
                isIdleMode = true;
                break;
            case 6: // triggers when user has found 6 magic words
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/word-found-5.mp4";
                vid.play();
                }, 2000);// delay set to 2 seconds
                isIdleMode = true;
                break;
            case 7:// triggers when user has found 7 magic words
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/word-found-6.mp4";
                vid.play();
                }, 2000);// delay set to 2 seconds
                progOutputEl.insertAdjacentHTML('beforeend', `<p>Well done adventurer, you have discovered all but one of the words! 
                I have found a clue to the final Magic word. A scroll bearing two number sequences - "2-1-18-20-1-18-1-6 11-1-18-4-9". You have done much to help but please help me decipher it!</p>`);// final word puzzle
                isIdleMode = true;
                break;
            case 8:// triggers when user has found 8 magic words
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/wizard-outro.mp4";
                vid.play();
                }, 2000);// delay set to 2 seconds
                // add final sequence / reward here
                break;
            default:
                break;
        }
    }else if (inputValue === ""){// prevents an empty user input being printed if the user submits an empty form
        orbListEl.insertAdjacentHTML('beforeend', `<p>${(fortunes[(Math.floor(Math.random() * fortunes.length))])}</p>`);// outputs a random fortune from the 'fortunes' array if user input is empty
    }else{
        orbListEl.insertAdjacentHTML('beforeend', `<li>${inputValue}</li>`);// displays the user input's value in the fortune readout
        orbListEl.insertAdjacentHTML('beforeend', `<p>${(fortunes[(Math.floor(Math.random() * fortunes.length))])}</p>`);// outputs a random fortune from the 'fortunes' array if user input doesn't match a magic word
    }
});

function playIdleVideo() {// function to play a random idle video from the 'idleVideoSources' array, called after 'word found' videos end to return to an idle state
    const idleVideoSources = 
        ["assets/wizard-videos/idle-anim-1.mp4", 
        "assets/wizard-videos/idle-anim-2-short-end.mp4", 
        "assets/wizard-videos/idle-anim-3.mp4", 
        "assets/wizard-videos/idle-anim-4.mp4", 
        "assets/wizard-videos/idle-anim-5.mp4", 
        "assets/wizard-videos/ominous-point.mp4"];// array of idle animation videos 
    const srcVideo = idleVideoSources[Math.floor(Math.random() * idleVideoSources.length)];// selects a random video from the idleVideoSources array 
    vid.src = srcVideo;
    vid.muted = true;
    vid.controls = false;
}

vid.addEventListener("canplaythrough", () => {// listener to preload videos to ensure smooth transition
    if(isIdleMode) {
        setTimeout(() => {// delay to avoid constant loops or video switches
            vid.play();
        }, 6000);// delay set to 6 seconds
    }
});

function submitForm(event){
    event.preventDefault();// prevents pressing the enter key's default behaviour of the refreshing the web page if user's cursor is active within the orb form
    };

function indexLoad() {
    if (foundWords.length > 0){
    progOutputEl.insertAdjacentHTML('beforeend', `<p>So far you have found the magic words: <span class="astloch-bold">${foundWords.join(', ')}</span><br><br>${8-foundWords.length} Words remain.<br><br></p>`);
    }// informs the user of how many Magic Words they have found and how many remain if the user has found at least 1 word
    if (foundWords.length === 7) {
        progOutputEl.insertAdjacentHTML('beforeend', `<p>Well done adventurer, you have discovered all but one of the words! 
        I have found a clue to the final Magic word. A scroll bearing two number sequences - "2-1-18-20-1-18-1-6 11-1-18-4-9". You have done much to help but please help me decipher it!</p>`);// final word puzzle
    }
    if (foundWords.length === 8) {
        vid.src = "assets/wizard-videos/wizard-outro.mp4";// replaces the intro with the outro as the default video on page load if the user has found all Magic Words
        progOutputEl.insertAdjacentHTML('beforeend', `<p>CONGRATULATIONS! You have completed the quest!</p>`);// congratulates the user
    }
};
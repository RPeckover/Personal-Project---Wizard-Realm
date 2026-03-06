const orbBtnEl = document.querySelector('#fortuneSubmit');
// variable selecting the 'submit' button in the orb form on 'index.html'
const inputEl = document.querySelector('#fortuneInput');
// variable storing user input from the orb form on 'index.html'
const orbListEl = document.querySelector('#orbOutput');
// variable selecting the list element on the 'orb output placeholder' within 'index.html'
const progOutputEl = document.querySelector('#questOutput');
// variable selecting ul element on the arcane scribe article in 'index.html'
const vid = document.getElementById("wizardVideo"); //Jake Hobbs
//VARIABLE SELECTING VIDEO ELEMENT IN INDEX.HTML TO BE ABLE TO CHANGE SOURCE AND PLAY VIDEOS BASED ON USER PROGRESS
const wordFoundAudio = [
    "assets/wizard-audio/word-found1.mp3", 
    "assets/wizard-audio/word-found2.mp3", 
    "assets/wizard-audio/word-found3.mp3", 
    "assets/wizard-audio/word-found4.mp3",
    "assets/wizard-audio/word-found5.mp3"
];
let isIdleMode = false;

orbBtnEl.addEventListener('click', ()=> {
    isIdleMode = false;
    vid.muted = false;
    vid.controls = true;
    const inputValue = inputEl.value.trim().toLowerCase();
    // allows the user input of the orb form to be taken upon the user clicking 'submit'
    if (lowerMagicWords.includes(inputValue) & foundWords.includes(inputValue)) {
        progOutputEl.insertAdjacentHTML('beforeend', `<p>You have already found this Magic Word!</p>`);
        
    }else if (lowerMagicWords.includes(inputValue)) {
        progOutputEl.insertAdjacentHTML('beforeend', `<p>You restored a Magic Word! <span class="astloch-bold">${inputValue}</span><br><br>${7-foundWords.length} Words remain.</p>`);
        // lets the user know that they have restored a magic word after checking their input againt the 'magicWords' array, displays number of words remaining for user to find
        new Audio(wordFoundAudio[Math.floor(Math.random() * wordFoundAudio.length)]).play(); //PLAYS A RANDOM WORD FOUND AUDIO CLIP FROM THE 'wordFoundAudio' ARRAY UPON THE USER FINDING A MAGIC WORD
        //NOTE THE ABOVE AUDIO WILL CURRENTLY OVERLAP THE VIDEO AUDIO WHICH PLAYS BELOW - Jake Hobbes
        foundWords.push(inputValue);
        // adds successful user input to an array of found words to prevent them being input multiple times
        localStorage.setItem("storedFoundWords", JSON.stringify(foundWords));
       switch (foundWords.length) { // plays word found video
            case 2://CASES UPDATED AS THESE WERE ORIGINALLY WRAPPED IN SINGLE QUOTES AND THEREFORE A CHAR NOT INTEGER, MEANING THE SWITCH STATEMENT WASN'T WORKING PROPERLY
                //"assets/wizard-videos/word-found-1.mp4"
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/word-found-1.mp4";//SET VIDEO SOURCE TO APPROPRIATE WORD FOUND VIDEO BASED ON NUMBER OF WORDS FOUND
                vid.play();
                }, 2000);// delay set to 2 seconds
                isIdleMode = true;//SET IDLE MODE TO TRUE TO TRIGGER IDLE VIDEO PLAYBACK AFTER WORD FOUND VIDEO ENDS
                break;
            case 3:
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/word-found-2.mp4";
                vid.play();
                }, 2000);// delay set to 2 seconds
                isIdleMode = true;
                break;
            case 4:
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/word-found-3.mp4";
                vid.play();
                }, 2000);// delay set to 2 seconds
                isIdleMode = true;
                break;
            case 5:
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/word-found-4.mp4";
                vid.play();
                }, 2000);// delay set to 2 seconds
                isIdleMode = true;
                break;
            case 6:
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/word-found-5.mp4";
                vid.play();
                }, 2000);// delay set to 2 seconds
                isIdleMode = true;
                break;
            case 7:
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/word-found-6.mp4";
                vid.play();
                }, 2000);// delay set to 2 seconds
                isIdleMode = true;
                break;
            case 8:
                setTimeout(() => {// delay to avoid overlap between word found audio and video playing
                vid.src = "assets/wizard-videos/wizard-outro.mp4";
                vid.play();
                }, 2000);// delay set to 2 seconds
                break;
            default:
                break;
        }
    }else if (inputValue === ""){
        // prevents an empty user input being printed if the user submits an empty form
        orbListEl.insertAdjacentHTML('beforeend', `<p>${(fortunes[(Math.floor(Math.random() * fortunes.length))])}</p>`);
        // outputs a random fortune from the 'fortunes' array if user input is empty
    }else{
        orbListEl.insertAdjacentHTML('beforeend', `<li>${inputValue}</li>`);
        // displays the user input's value in the fortune readout
        orbListEl.insertAdjacentHTML('beforeend', `<p>${(fortunes[(Math.floor(Math.random() * fortunes.length))])}</p>`);
        // outputs a random fortune from the 'fortunes' array if uder input doesn't match a magic word
    }
});

//Jake Hobbs
vid.addEventListener('ended', () => {//CHECK IF VIDEO HAS ENDED AND TRIGGER IDLE VIDEO
    if(isIdleMode) {
        playIdleVideo();
    }
}
);
//Jake Hobbs
function playIdleVideo() {//FUNCTION TO PLAY A RANDOM IDLE VIDEO FROM THE 'idleVideoSources' ARRAY, CALLED AFTER WORD FOUND VIDEOS END TO RETURN TO AN IDLE STATE
    const idleVideoSources = 
        ["assets/wizard-videos/idle-anim-1.mp4", 
        "assets/wizard-videos/idle-anim-2-short-end.mp4", 
        "assets/wizard-videos/idle-anim-3.mp4", 
        "assets/wizard-videos/idle-anim-4.mp4", 
        "assets/wizard-videos/idle-anim-5.mp4", 
        "assets/wizard-videos/ominous-point.mp4"];
    const srcVideo = idleVideoSources[Math.floor(Math.random() * idleVideoSources.length)]; 
    vid.src = srcVideo;
    vid.muted = true;
    vid.controls = false;
}
//Jake Hobbs
vid.addEventListener("canplaythrough", () => {//LISTENER TO PRELOAD VIDEOS TO ENSURE SMOOTH TRANSITION
    if(isIdleMode) {
        setTimeout(() => {//DELAY TO AVOID CONSTANT LOOPS OR VIDEO SWITCHES
            vid.play();
        }, 10000);//DELAY SET TO 10 SECONDS
    }
});

function submitForm(event){
    event.preventDefault();
    // prevents pressing the orb form's default behaviour of the enter key refreshing the web page
    };

//const video = document.getElementById();
        // const idleVideoSources = 
        // ["assets/wizard-videos/idle-anim-1.mp4", 
        //     "assets/wizard-videos/idle-anim-2-short-end.mp4", 
        //     "assets/wizard-videos/idle-anim-3.mp4", 
        //     "assets/wizard-videos/idle-anim-4.mp4", 
        //     "assets/wizard-videos/idle-anim-5.mp4", 
        //     "assets/wizard-videos/ominous-point.mp4"];
        // const sourceIndex = Math.floor(Math.random() * idleVideoSources.length);
        // const source = document.createElement("source");
        // source.setAttribute("src", idleVideoSources[sourceIndex]);
        // video.appendChild(source);

// based on: https://stackoverflow.com/questions/63736520/math-random-javascript-with-mp4/63736591#63736591
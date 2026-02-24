const orbBtnEl = document.querySelector('#fortuneSubmit');
// variable selecting the 'submit' button in the orb form on 'index.html'
const inputEl = document.querySelector('#fortuneInput');
// variable storing user input from the orb form on 'index.html'
const orbListEl = document.querySelector('#orbOutput');
// variable selecting the list element on the 'orb output placeholder' within 'index.html'
const progOutputEl = document.querySelector('#questOutput');
// variable selecting ul element on the arcane scribe article in 'index.html'

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
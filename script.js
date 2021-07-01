const appsModalButton = document.getElementById("google-apps");
const appsModal = document.getElementById("apps-modal-container");

const accountModalButton = document.getElementById("google-account");
const accountModal = document.getElementById("google-accounts-modal");

const backgroundsMenu = document.getElementById("backgrounds");
const shortcutsMenu = document.getElementById("shortcuts");
const colorsMenu = document.getElementById("color");

const bgButton = document.getElementById("backgrounds-button");
const scButton = document.getElementById("shortcuts-button");
const colorsButton = document.getElementById("colors-button");

const customizeButton = document.getElementById("customize");
const customUnderlay = document.getElementById("customizer-underlay");
const customizerCancel = document.getElementById("cancel");
const customizerDone = document.getElementById("done");
const customizerModal= document.getElementById("customizer-modal")

/* background selections */
const bgOne = document.getElementById("one");
const bgTwo = document.getElementById("two");
const bgThree = document.getElementById("three");
const bgFour = document.getElementById("four")
const bgFive = document.getElementById("five")
const bgSix = document.getElementById("six")
const bgSeven = document.getElementById("seven")
const bgEight = document.getElementById("eight")

const imgOne = "url(img/backgrounds/annie-spratt-3tlHKNAv1eE-unsplash.jpg)";
const imgTwo = "url(img/backgrounds/claudio-schwarz-purzlbaum-98hDglL83q0-unsplash.jpg)";
const imgThree = "url(img/backgrounds/dustin-humes-P326A4p7aeE-unsplash.jpg)";
const imgFour = "url(img/backgrounds/julien-riedel-OH_MxLlYYSg-unsplash.jpg)";
const imgFive = "url(img/backgrounds/levi-stute-OhZd1t1Fm9M-unsplash.jpg)";
const imgSix = "url(img/backgrounds/marek-piwnicki-gA2i_h4XRJU-unsplash.jpg)";
const imgSeven = "url(img/backgrounds/silvan-schuppisser-PGU_XpT47iw-unsplash.jpg)";
const imgEight = "url(img/backgrounds/yang-shuo-oYprTx37G9g-unsplash.jpg)";

const googleLogo = document.getElementById("logo-inner");

window.onload = () => {
    document.body.style.backgroundImage = localStorage.getItem("currentBackground")
    
    for(let i = 0; i < 6; i++){
        googleLogo.children[i].classList.add("default")
        console.log(i)
    }
    
    console.log(googleLogo.childNodes)
}

//toggle apps modal
appsModalButton.addEventListener('click', (e) => {
    appsModal.classList.toggle("show")
    accountModal.classList.remove("show")
    e.stopPropagation();
})

//toggle account modal
accountModalButton.addEventListener('click', (e) => {
    accountModal.classList.toggle("show")
    appsModal.classList.remove("show")
    e.stopPropagation();
})

window.onclick = () => {
    accountModal.classList.remove("show")
    appsModal.classList.remove("show")
}



/* CUSTOMIZER */

/* open the customizer*/
customizeButton.addEventListener('click', (e) => {
    customUnderlay.classList.add("show");
    backgroundsMenu.classList.add("show");
})


/*exit and don't apply changes */
customizerCancel.addEventListener('click', () => {
    backgroundsMenu.classList.remove("show");
    shortcutsMenu.classList.remove("show");
    colorsMenu.classList.remove("show");
    customUnderlay.classList.remove("show");
})


/* Customizer modal changes size to alert user to either click "cancel" or "done" to exit */
customUnderlay.addEventListener('click', (e) =>{
    handleClick(e, customUnderlay)
}) 

handleClick = (event, element) => {
    if (event.target.id != element.id) {
        event.stopPropagation();

    } else{
        customizerModal.classList.add("animate");
        setTimeout(function(){ customizerModal.classList.remove("animate") }, 200)
    }
    
  }


/* Navigate the customizer menu */



/*open backgrounds menu*/
bgButton.addEventListener('click', (e) => {
    shortcutsMenu.classList.remove("show");
    colorsMenu.classList.remove("show");
    backgroundsMenu.classList.add("show");
})
/*open shortcuts menu */
scButton.addEventListener('click', (e) => {
    backgroundsMenu.classList.remove("show");
    colorsMenu.classList.remove("show");
    shortcutsMenu.classList.add("show");
})
/*open colors menu*/
colorsButton.addEventListener('click', (e) => {
    backgroundsMenu.classList.remove("show");
    shortcutsMenu.classList.remove("show");
    colorsMenu.classList.add("show");
})

/*background image selector*/
let tempBackground = null;
let newBG = false;

/* one */
bgOne.addEventListener('click', () => {
    document.body.style.backgroundImage = imgOne;
    tempBackground = imgOne;
    newBG = true;
    console.log(tempBackground)
})
/* two */
bgTwo.addEventListener('click', () => {
    document.body.style.backgroundImage = imgTwo;
    newBG = true;
    tempBackground = imgTwo;
})
/* three */
bgThree.addEventListener('click', () => {
    document.body.style.backgroundImage = imgThree;
    newBG = true;
    tempBackground = imgThree;
})
/* four */
bgFour.addEventListener('click', () => {
    document.body.style.backgroundImage = imgFour;
    newBG = true;
    tempBackground = imgFour;
})
/* five */
bgFive.addEventListener('click', () => {
    document.body.style.backgroundImage = imgFive;
    newBG = true;
    tempBackground = imgFive;
})
/* six */
bgSix.addEventListener('click', () => {
    document.body.style.backgroundImage = imgSix;
    newBG = true;
    tempBackground = imgSix;
})
/* seven */
bgSeven.addEventListener('click', () => {
    document.body.style.backgroundImage = imgSeven;
    newBG = true;
    tempBackground = imgSeven;
})
/* eight */
bgEight.addEventListener('click', () => {
    document.body.style.backgroundImage = imgEight;
    newBG = true;
    tempBackground = imgEight;
})

/* Save state set in customizer */
customizerDone.addEventListener('click', () => {
    customUnderlay.classList.remove("show");
    if(newBG){
        localStorage.setItem("currentBackground", tempBackground);
    }
})

/* color menu hover effects */

/*

customizerModal.addEventListener('click', () =>{
    console.log("yo")
})
*/

/* exit and apply changes */

/* background image selection 
            <span id="g">G</span>
            <span id="o">o</span>
            <span id="o2">o</span>
            <span id="g">g</span>
            <span id="l">l</span>
            <span id="e">e</span>
*/

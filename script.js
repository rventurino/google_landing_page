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

/* background image selections */
const bgOne = document.getElementById("one");
const bgTwo = document.getElementById("two");
const bgThree = document.getElementById("three");
const bgFour = document.getElementById("four")
const bgFive = document.getElementById("five")
const bgSix = document.getElementById("six")
const bgSeven = document.getElementById("seven")
const bgEight = document.getElementById("eight")

/*background images*/
const imgOne = "url(img/backgrounds/annie-spratt-3tlHKNAv1eE-unsplash.jpg)";
const imgTwo = "url(img/backgrounds/claudio-schwarz-purzlbaum-98hDglL83q0-unsplash.jpg)";
const imgThree = "url(img/backgrounds/dustin-humes-P326A4p7aeE-unsplash.jpg)";
const imgFour = "url(img/backgrounds/hermansyah-7uXn7nudorc-unsplash.jpg)";
const imgFive = "url(img/backgrounds/levi-stute-OhZd1t1Fm9M-unsplash.jpg)";
const imgSix = "url(img/backgrounds/marek-piwnicki-gA2i_h4XRJU-unsplash.jpg)";
const imgSeven = "url(img/backgrounds/silvan-schuppisser-PGU_XpT47iw-unsplash.jpg)";
const imgEight = "url(img/backgrounds/adam-chang-IWenq-4JHqo-unsplash.jpg)";

/*important elements for style change */
const header = document.getElementById("header");
const circleClass = document.getElementsByClassName("circle");
const googleLogo = document.getElementById("logo-inner");
const addShortcutSpan = document.getElementById("addShortcutSpan")

/* color buttons */
const defaultColorButton = document.getElementById("default");
const darkColorButton = document.getElementById("dark");
const blueSapphireColorButton = document.getElementById("blue-sapphire");
const viridianGreenColorButton = document.getElementById("viridian-green");
const middleBlueGreenColorButton = document.getElementById("middle-blue-green");
const mediumChampagneColorButton = document.getElementById("medium-champagne");
const gambogeColorButton = document.getElementById("gamboge");
const mahoganyColorButton = document.getElementById("mahogany");
const rufousColorButton = document.getElementById("rufous");
const yellowColorButton = document.getElementById("yellow");
const rubyRedColorButton = document.getElementById("ruby-red");
const pinkColorButton = document.getElementById("pink");
/*
Color selector modal 
--rich-black-fogra-29: #001219ff;
--blue-sapphire: #005f73ff;
--viridian-green: #0a9396ff;
--middle-blue-green: #94d2bdff;
--medium-champagne: #e9d8a6ff;
--gamboge: #ee9b00ff;
--alloy-orange: #ca6702ff;
--mahogany: #bb3e03ff;
--rufous: #ae2012ff;
--ruby-red: #9b2226ff;
*/
//left: logo color right:bg-color
const darkLogo = "lightgray";
const darkBGColor = "#001219ff";
const blueSapphireLogo = "lightblue";
const blueSapphireBGColor =  "#005f73ff";
const viridianGreenLogo = "lightgreen";
const viridianGreenBGColor = "#0a9396ff";
const middleBlueGreenLogo = "white";
const middleBlueGreenBGColor = "#94d2bdff";
const mediumChampagneLogo = "#333";
const mediumChampagneBGColor = "#e9d8a6ff";
const gambogeLogo = "darkgoldenrod"
const gambogeBGColor = "#ee9b00ff"
const mahoganyLogo = "white"
const mahoganyBGColor = "#bb3e03ff"
const rufousLogo = "lightsalmon"
const rufousBGColor = "#ae2012ff"
const yellowLogo = "white"
const yellowBGColor = "yellow"
const rubyRedLogo = "pink"
const rubyRedBGColor = "#9b2226ff"
const pinkLogo = "white"
const pinkBGColor = "pink"

/*critical state selection variables*/
let tempBackground = null;
let newBG = false;
let textColor = 0; // 0: default 1: white 2: dark
let currentBackground = localStorage.getItem("currentBackground");
let tempLogoColor = null;
let tempBGColor = null;
let currentLogoColor; //local storage
let currentBGColor; //local storage
let newColor = false;


window.onload = () => {
    if(currentBackground === "null"){
        textColor = 0;
        colorChanger(textColor);
        console.log("temporarily disabled")
    } else {
        document.body.style.backgroundImage = currentBackground;
    }
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


/* BACKGROUND CHOICES */

/* one */
bgOne.addEventListener('click', () => {
    document.body.style.backgroundImage = imgOne;
    tempBackground = imgOne;
    newBG = true;
    textColor = 2;
})
/* two */
bgTwo.addEventListener('click', () => {
    document.body.style.backgroundImage = imgTwo;
    newBG = true;
    tempBackground = imgTwo;
    textColor = 1;
})
/* three */
bgThree.addEventListener('click', () => {
    document.body.style.backgroundImage = imgThree;
    newBG = true;
    tempBackground = imgThree;
    textColor = 1;
})
/* four */
bgFour.addEventListener('click', () => {
    document.body.style.backgroundImage = imgFour;
    newBG = true;
    tempBackground = imgFour;
    textColor = 2;
})
/* five */
bgFive.addEventListener('click', () => {
    document.body.style.backgroundImage = imgFive;
    newBG = true;
    tempBackground = imgFive;
    textColor = 1;
})
/* six */
bgSix.addEventListener('click', () => {
    document.body.style.backgroundImage = imgSix;
    newBG = true;
    tempBackground = imgSix;
    textColor = 1;
})
/* seven */
bgSeven.addEventListener('click', () => {
    document.body.style.backgroundImage = imgSeven;
    newBG = true;
    tempBackground = imgSeven;
    textColor = 2;
})
/* eight */
bgEight.addEventListener('click', () => {
    document.body.style.backgroundImage = imgEight;
    newBG = true;
    tempBackground = imgEight;
    textColor = 2;
})
/*
header
.circle
#addShortcutSpan
.logo-inner children
*/
// 0: default 1: white 2: dark
/* Save state set in customizer */
customizerDone.addEventListener('click', () => {
    customUnderlay.classList.remove("show");
    if(newBG){
        localStorage.setItem("currentBackground", tempBackground);
        colorChanger(textColor)
    }
    else if (newColor){
        /*
        tempLogoColor
        tempBGColor
        currentLogoColor
        currentBGColor
        newColor
        */
    }
})

colorChanger = (colorNumber) =>{
    switch(colorNumber){
        //default state
        case 0:
            localStorage.setItem("currentBackground", null)
            document.body.style.backgroundColor = "white" 
            header.style.color = "#333";
            addShortcutSpan.style.color = "#333"
            for(let i = 0; i < 6; i++){
                googleLogo.children[i].classList.add("default")
            }
            for(let i = 0; i < circleClass.length; i++){
                circleClass[i].style.backgroundColor = "#333"
            }
            break;
        //dark background images
        case 1: 
            header.style.color = "white";
            googleLogo.style.color = "white";
            addShortcutSpan.style.color = "white";
            for(let i = 0; i < circleClass.length; i++){
                circleClass[i].style.backgroundColor = "white"
            }
            break;
        //light background images
        case 2: 
            header.style.color = "#333";
            googleLogo.style.color = "#333";
            addShortcutSpan.style.color ="#333"
            for(let i = 0; i < circleClass.length; i++){
                circleClass[i].style.backgroundColor = "#333"
            }
            break;
        
    }
}

/* color menu */










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

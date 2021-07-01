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

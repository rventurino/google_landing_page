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


//toggle apps modal
appsModalButton.addEventListener('click', (e) => {
    appsModal.classList.toggle("show")
    accountModal.classList.remove("show")
})

window.onclick = () => {
    appsModal.classList.remove("show")
}


//toggle account modal
accountModalButton.addEventListener('click', (e) => {
    accountModal.classList.toggle("show")
    appsModal.classList.remove("show")
})

window.onclick = () => {
    accountModal.classList.remove("show")
    appsModal.classList.remove("show")
}

/* stop event loop propagation */
accountModalButton.addEventListener('click', (e) => {
    e.stopPropagation();
})

appsModalButton.addEventListener('click', (e) => {
    e.stopPropagation();
})


/* CUSTOMIZER */

/* open the customizer*/
customizeButton.addEventListener('click', (e) => {
    customUnderlay.classList.add("show");
})


/*exit and don't apply changes */
customizerCancel.addEventListener('click', () => {
    customUnderlay.classList.remove("show");
})

customUnderlay.addEventListener('click', () =>{
    customUnderlay.classList.remove("show");

}) 

/* exit and apply changes */

/* background image selection 
            <span id="g">G</span>
            <span id="o">o</span>
            <span id="o2">o</span>
            <span id="g">g</span>
            <span id="l">l</span>
            <span id="e">e</span>
*/

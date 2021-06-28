/* TODO



    google apps modal
*/

const appsModalButton = document.getElementById("google-apps");
const appsModal = document.getElementById("apps-modal-container");
const main = document.getElementsByTagName('main');


//toggle apps modal
appsModalButton.addEventListener('click', (e) => {
    appsModal.classList.toggle("show")

})

window.onclick = () => {
    appsModal.classList.remove("show")
}

appsModalButton.addEventListener('click', (e) => {
    e.stopPropagation();

})

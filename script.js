const appsModalButton = document.getElementById("google-apps");
const appsModal = document.getElementById("apps-modal-container");
const accountModalButton = document.getElementById("google-account");
const accountModal = document.getElementById("google-accounts-modal");


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

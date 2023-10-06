let modalNote = document.querySelector(".vote-note-note")
console.log(modalNote);
let closeModal = document.querySelector(".close-modal");
console.log(closeModal);

if (modalNote) {
    modalNote.classList.add('active');
}

function closeModalWindow() {
    modalNote.style.display = "none";
}
let voteAnswersList = document.querySelectorAll(".vote-answers-list");
let voteItemHeader = document.querySelectorAll(".vote-item-header");
let voteFormButtons = document.querySelector(".vote-form-box-buttons");

function firstItem() {
    voteItemHeader[0].style.display = "block";
    voteAnswersList[0].style.display = "block";
}

function nextItem(current) {
    voteItemHeader[current-1].style.display = "none";
    voteAnswersList[current-1].style.display = "none";

    voteItemHeader[current].style.display = "block";
    voteAnswersList[current].style.display = "block";

    if (current == voteAnswersList.length-1) {
        voteFormButtons.style.display = "flex";
    }
}

function prevItem(current) {
    voteItemHeader[current-1].style.display = "none"; 
    voteAnswersList[current-1].style.display = "none"; 

    voteItemHeader[current-2].style.display = "block"; 
    voteAnswersList[current-2].style.display = "block"; 
}

firstItem();
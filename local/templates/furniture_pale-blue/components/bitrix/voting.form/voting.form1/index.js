let voteAnswersList = document.querySelectorAll(".vote-answers-list");
let voteItemHeader = document.querySelectorAll(".vote-item-header");

function firstItem() {
    voteItemHeader[0].style.display = "block";
    voteAnswersList[0].style.display = "block";
}

function nextItem(current) {

    voteItemHeader[current-1].style.display = "none";
    voteAnswersList[current-1].style.display = "none";

    voteItemHeader[current].style.display = "block";
    voteAnswersList[current].style.display = "block";
}

function prevItem(current) {

    voteItemHeader[current-1].style.display = "none"; 
    voteAnswersList[current-1].style.display = "none"; 

    voteItemHeader[current-2].style.display = "block"; 
    voteAnswersList[current-2].style.display = "block"; 
}

firstItem();
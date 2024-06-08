const paragraph = document.querySelector('p');
const title = document.querySelector('h1');

//firs task of first part
const subtitle = document.createElement("h2");
const amountOfWordsInElem = paragraph.innerHTML.split(" ").length;
subtitle.innerText = `Amount of words in paragraph: ${amountOfWordsInElem}`;

//first solution
// title.insertAdjacentHTML("afterend", subtitle.outerHTML);

//second solution
title.after(subtitle);

//task 2 of first part

const paragraphContentList = paragraph.innerHTML.replace(/[,]/g, "").split(" ");
const highlightedWords = paragraphContentList.map((word) =>
    word.length >= 8 ? `<span class="highlight">${word}</span>` : word
).join(" ");

paragraph.innerHTML = highlightedWords;

//task 3 of  part 1

const listOfSentences = paragraph.innerHTML.split(/[.,!,?]/).filter(sentences=>sentences !== "").map(elem => elem.trimStart()).join('.<br>');
paragraph.innerHTML = listOfSentences;



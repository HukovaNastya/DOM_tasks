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
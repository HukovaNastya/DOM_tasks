//first task

const proPlan = document.getElementById("pro-plan");
const cardBody = proPlan.querySelector(".card-body");
const proPlanList = cardBody.querySelector(".list-unstyled");

proPlanList.insertAdjacentHTML("beforeend", ` <li>24/7 Phone support</li>`);

//second task
const container = document.querySelector(".card-deck");
container.classList.add("d-flex", "justify-content-flex-end", "flex-direction-reverse");


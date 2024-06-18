//first task

const proPlan = document.getElementById("pro-plan");
const cardBodyPrpPlan = proPlan.querySelector(".card-body");
const proPlanList =  cardBodyPrpPlan.querySelector(".list-unstyled");

proPlanList.insertAdjacentHTML("beforeend", ` <li>24/7 Phone support</li>`);

//second task
const container = document.querySelector(".card-deck");
container.classList.add("d-flex", "justify-content-flex-end", "flex-direction-reverse");

//third task
const getStartedBtn = cardBodyPrpPlan.querySelector(".btn");
getStartedBtn .classList.add("background-blue", "color-white");
getStartedBtn.innerText = "Buy Now";


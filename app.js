const proPlan = document.getElementById("pro-plan");
const cardBody = proPlan.querySelector(".card-body");
const proPlanList = cardBody.querySelector(".list-unstyled");

proPlanList.insertAdjacentHTML("beforeend", ` <li>24/7 Phone support</li>`);

console.log("prpOlan", proPlanList);
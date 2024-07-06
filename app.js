//first task

const proPlan = document.getElementById("pro-plan");
const cardBodyPrpPlan = proPlan.querySelector(".card-body");
const proPlanList =  cardBodyPrpPlan.querySelector(".list-unstyled");

proPlanList.insertAdjacentHTML("beforeend", ` <li>24/7 Phone support</li>`);

//second task
const container = document.querySelector(".card-deck");
container.classList.add("d-flex", "justify-content-flex-end", "flex-direction-reverse", "align-items-center");

//third task
const getStartedBtn = cardBodyPrpPlan.querySelector(".btn");
getStartedBtn .classList.add("background-blue", "color-white");
getStartedBtn.innerText = "Buy Now";

//fourth tasks
container.style.padding = "10px 30px 0  30px";

const toggleBtnContainer = document.createElement('div');
toggleBtnContainer.classList.add('toggle-btn', );

toggleBtnContainer.insertAdjacentHTML("afterbegin", `   
<label class="toggle">
  <span class="year-month">Monthly</span>
  <input type="checkbox" />
  <span class="slider round"></span>
</label>
`)

container.insertBefore(toggleBtnContainer, container.childNodes[2]);

const toggle = document.querySelector('.toggle input')
const basicPlan = document.getElementById("basic-plan");
const proPlanPyament = proPlan.querySelector(".pricing");
const basicPlanPyament = basicPlan.querySelector(".pricing");

const applySaleForYearMode = (price) => {
    return  price = `${parseFloat(price) * 10} / year`;
}

toggle.addEventListener('click', () => {
    const yearMonth = toggle.parentNode.querySelector('.year-month')
    yearMonth.textContent = toggle.checked ? 'Yearly' : 'Monthly';


    if(yearMonth.textContent === "Yearly") {
        proPlanPyament.textContent = applySaleForYearMode(proPlanPyament.textContent);
        basicPlanPyament.textContent = applySaleForYearMode(basicPlanPyament.textContent);
    }
})


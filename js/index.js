// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mush) => {
    if(state.mushrooms){
      mush.style.visibility = "visible";
    } else {
      mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPep) => {
    if(state.greenPeppers){
      greenPep.style.visibility = "visible";
    } else {
      greenPep.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauces = document.querySelectorAll('.sauce');
  sauces.forEach((sauce) => {
    if(state.whiteSauce){
      sauce.classList.add('sauce-white');
    } else {
      sauce.classList.remove('sauce-white');
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crusts = document.querySelectorAll('.crust');
  crusts.forEach((crust) =>{
    if(state.glutenFreeCrust){
      crust.classList.add('crust-gluten-free');
    } else {
      crust.classList.remove('crust-gluten-free');
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let stateArr = Object.entries(state);
  for (let i = 0; i < stateArr.length; i++) {
    let currentClass = `.btn-${stateArr[i][0]}`
    
    if (stateArr[i][0] === 'pepperoni') {
      currentClass = '.btn-pepperoni'
    } 
    if (stateArr[i][0] === 'mushrooms') {
      currentClass = '.btn-mushrooms'
    } 
    if (stateArr[i][0] === 'greenPeppers') {
      currentClass = '.btn-green-peppers'
    }
    else if (stateArr[i][0] === 'whiteSauce'){
      currentClass = '.btn-sauce'
    } 
    else if (stateArr[i][0] === 'glutenFreeCrust') {
      currentClass = '.btn-crust'
    } 

    if (stateArr[i][1]) {
      document.querySelector(currentClass).classList.add('active');
    } else {
      document.querySelector(currentClass).classList.remove('active');
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let stateArr = Object.entries(state);
  let priceList = document.querySelector('.price').querySelector('ul');
  let total = basePrice;
  
  for (let i = 0; i < stateArr.length; i++){
    if(!stateArr[i][1]){
      priceList.children[i].style.display = "none";
    } else {
      priceList.children[i].style.display = "block";
      total += ingredients[stateArr[i][0]].price;
    }
  } 
  document.querySelector('.price').querySelector('strong').innerText = `$${total}`;
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', function(){
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn-mushrooms").addEventListener("click", function(){
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn-green-peppers").addEventListener("click", function(){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function(){
state.whiteSauce = !state.whiteSauce;
renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function(){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})

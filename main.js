var boxOne  = document.querySelector('.input-container');
var recipeChoice = document.querySelector('.recipe-choice');
var lcButton = document.querySelector('.lets-cook-button');
var label = document.querySelector('.input-container');
var clearBtnParent = document.querySelector('.clear-button');
var clearBtn = document.querySelector('.clear-button');

lcButton.addEventListener("click", selectRandomItem);
label.addEventListener("click", showButton);

function showButton() {
  lcButton.classList.remove("hidden");
}

function selectRandomItem() {
  var test2 = document.querySelectorAll('label');
  var dinnerChoice = document.querySelector('input[type="radio"]:checked').value;

  var target = determineArray(dinnerChoice)
  var result = target[getRandomIndex(target.length)];

  renderItem(result)
}

function renderItem(recipeString) {
recipeChoice.innerHTML = `<center class="result"><p><i>You should make:</i></p> <p><h1>${recipeString}!</h1></p></center>`
displayButton()
}

function determineArray(arrayName) {
  if(arrayName === "mains") {
    arrayName = mains
  }

  if(arrayName === "desserts") {
    arrayName = desserts
  }

  if(arrayName === "sides") {
    arrayName = sides
  }

  return arrayName
}

function getRandomIndex(int) {
  return Math.floor(Math.random() * int);
}

function displayButton() {
  clearBtnParent.classList.remove("hidden");
  clearBtn.classList.remove("hidden");
}

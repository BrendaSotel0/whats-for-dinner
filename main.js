var boxOne  = document.querySelector('.input-container');
var recipeChoice = document.querySelector('.recipe-choice');

//buttons
var lcButton = document.querySelector('.lets-cook-button');

//event listeners
lcButton.addEventListener("click", selectRandomItem);

function selectRandomItem() {
  var dinnerChoice = document.querySelector('input[type="radio"]:checked').value;
  var target = determineArray(dinnerChoice)
  var result = target[getRandomIndex(target.length)];

  renderItem(result)
  return result
}

function renderItem(recipeString) {
recipeChoice.innerHTML = `<p>${recipeString}</p>`
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

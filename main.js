var boxOne  = document.querySelector('.input-container');
var recipeChoice = document.querySelector('.recipe-choice');
var lcButton = document.querySelector('.lets-cook-button');

lcButton.addEventListener("click", selectRandomItem);

function selectRandomItem() {
  var dinnerChoice = document.querySelector('input[type="radio"]:checked').value;
  var target = determineArray(dinnerChoice)
  var result = target[getRandomIndex(target.length)];

  renderItem(result)
  return result
}

function renderItem(recipeString) {
recipeChoice.innerHTML = `<center class="result"><p><i>You should make:</i></p> <p><h1>${recipeString}!</h1></p></center>`
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

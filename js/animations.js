const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + "+";
    } else {
      element.innerText = i;
    }
    i++;
  }
  setTimeout(() => {
    increaseNumberAnimationStep(i, element, endNumber);
  }, INCREASE_NUMBER_ANIMATION_SPEED);
}
//---------------------------------------------------------
function initIncreaseNumberAnimation() {
  let element = document.querySelector(".features__clients-count");
  increaseNumberAnimationStep(0, element, 5000);
}
initIncreaseNumberAnimation();

/**Мой вариант счётчика
 * let counter = 0;
let element = document.querySelector(".features__clients-count");
function numberIncreaser() {
  if (counter < 5000) {
    element.innerText = counter;
  } else if (counter === 5000) {
    element.innerText = counter + "+";
  } else {
    clearInterval(myInterval);
  }

  counter += 50;
}
let myInterval = setInterval(() => {
  numberIncreaser();
}, 50);
 */

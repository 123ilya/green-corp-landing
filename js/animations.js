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
//Получаем элемент, в котором будем изменять и добовлять дочерние элеменнты, и применяем к нему метод addEventListener
document
  .querySelector("#budget")
  .addEventListener("change", function handleSelectChange(event) {
    if (event.target.value === "other") {
      //Должны добавить еще одно текстовое поле
      //---------------------------------------------------
      let formContainer = document.createElement("div");
      formContainer.classList.add("form__group", "form__other-input");
      let input = document.createElement("input");
      input.placeholder = "Введите ваш вариант";
      input.type = "text";
      formContainer.appendChild(input);
      //-------------------------------------------------
      //Получаем тег <form>, в который будем вставлять наше поле(перед кнопкой)
      let idForm = document.querySelector("#form form");
      //Получаем кнопку
      let form_Submit = document.querySelector(".form__submit");
      idForm.insertBefore(formContainer, form_Submit);
    }
    //-------------------------------------------------------------------
    let otherinput = document.querySelector(".form__other-input");
    if (event.target.value !== "other" && Boolean(otherinput)) {
      //Удаляем ранее добавленное текстовое поле
      let idForm = document.querySelector("#form form");
      idForm.removeChild(otherinput);
    }
  });

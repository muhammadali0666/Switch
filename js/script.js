const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form-input")
const elResult = document.querySelector(".result")


elForm.addEventListener('submit', function(evt){
  evt.preventDefault ();

  let formInput = Number(elFormInput.value);

  switch (formInput) {
    case 1:
      elResult.textContent = "dushanba"
    break;
    case 2:
      elResult.textContent = "seshanba"
    break;
    case 3:
      elResult.textContent = "chorshanba"
    break;
    case 4:
      elResult.textContent = "payshanba"

    break;
    case 5:
      elResult.textContent = "juma"
    break;
    case 6:
      elResult.textContent = "shanba"
    break;
    case 7:
      elResult.textContent = "yakshanba"
    break;
    default: 
    elResult.textContent = "bunday kun yo'q"
    
  }
})
"use strict";
/*Selecting Elements */
const AmountBill = document.querySelector(".bill-amount");
const btn1 = document.querySelector(".tip-butt1");
const btn2 = document.querySelector(".tip-butt2");
const btn3 = document.querySelector(".tip-butt3");
const btn4 = document.querySelector(".tip-butt4");
const btn5 = document.querySelector(".tip-butt5");
const btnCustom = document.querySelector(".Custom-tip");
const peopleNumber = document.querySelector(".people-num");
const tipAmount = document.querySelector(".tip-count");
const totalWithTip = document.querySelector(".Total-count");
const resetBtn = document.querySelector(".reset-btn");
/*Buttons, Bill Input and Tip amount and total : */
document.querySelectorAll(".tip-butt").forEach((item) => {
  item.addEventListener("click", (event) => {
    const amountEntered = Number(AmountBill.value);
    const numOfppl = Number(peopleNumber.value);
    let tipPer1;

    if (event.target === btn1) {
      btn1.classList.add("tip-btn-active");
      let tipPer1 = parseFloat((amountEntered * 0.05) / numOfppl).toFixed(2);
      let totalPer1 = parseFloat(
        amountEntered / numOfppl + Number(tipPer1)
      ).toFixed(2);
      tipAmount.textContent = tipPer1;
      totalWithTip.textContent = totalPer1;
      resetBtn.classList.add("reset-btn-active");
    } else if (event.target === btn2) {
      btn2.classList.add("tip-btn-active");
      let tipPer1 = parseFloat((amountEntered * 0.1) / numOfppl).toFixed(2);
      let totalPer1 = parseFloat(
        amountEntered / numOfppl + Number(tipPer1)
      ).toFixed(2);

      tipAmount.textContent = tipPer1;
      totalWithTip.textContent = totalPer1;
      resetBtn.classList.add("reset-btn-active");
    } else if (event.target === btn3) {
      btn3.classList.add("tip-btn-active");
      let tipPer1 = parseFloat((amountEntered * 0.15) / numOfppl).toFixed(2);
      let totalPer1 = parseFloat(
        amountEntered / numOfppl + Number(tipPer1)
      ).toFixed(2);

      tipAmount.textContent = tipPer1;
      totalWithTip.textContent = totalPer1;
      resetBtn.classList.add("reset-btn-active");
    } else if (event.target === btn4) {
      btn4.classList.add("tip-btn-active");
      let tipPer1 = parseFloat((amountEntered * 0.25) / numOfppl).toFixed(2);
      let totalPer1 = parseFloat(
        amountEntered / numOfppl + Number(tipPer1)
      ).toFixed(2);

      tipAmount.textContent = tipPer1;
      totalWithTip.textContent = totalPer1;
      resetBtn.classList.add("reset-btn-active");
    } else if (event.target === btn5) {
      btn5.classList.add("tip-btn-active");
      let tipPer1 = parseFloat((amountEntered * 0.5) / numOfppl).toFixed(2);
      let totalPer1 = parseFloat(
        amountEntered / numOfppl + Number(tipPer1)
      ).toFixed(2);

      tipAmount.textContent = tipPer1;
      totalWithTip.textContent = totalPer1;
      resetBtn.classList.add("reset-btn-active");
    }
  });
});

/*Event to custom button */
btnCustom.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const amountEntered = Number(AmountBill.value);
    const numOfppl = Number(peopleNumber.value);
    let Customtip = Number(btnCustom.value);
    let tipPer1 = parseFloat(
      (amountEntered * Customtip) / 100 / numOfppl
    ).toFixed(2);
    let totalPer1 = parseFloat(
      amountEntered / numOfppl + Number(tipPer1)
    ).toFixed(2);
    tipAmount.textContent = tipPer1;
    totalWithTip.textContent = totalPer1;
  }
});

/*Reset Buttons */
resetBtn.addEventListener("click", function () {
  btn1.classList.remove("tip-btn-active");
  btn2.classList.remove("tip-btn-active");
  btn3.classList.remove("tip-btn-active");
  btn4.classList.remove("tip-btn-active");
  btn5.classList.remove("tip-btn-active");
  resetBtn.classList.remove("reset-btn-active");
  tipAmount.textContent = `$0.00`;
  totalWithTip.textContent = `$0.00`;
  AmountBill.value = "";
  peopleNumber.value = "";
  btnCustom.value = "";
});

/*Changing styles of input and custom button when clicked. */
AmountBill.addEventListener("click", function () {
  AmountBill.classList.add("input-clicked");
});
btnCustom.addEventListener("click", function () {
  btnCustom.classList.add("input-clicked");
});
peopleNumber.addEventListener("click", function () {
  peopleNumber.classList.add("input-clicked");
});

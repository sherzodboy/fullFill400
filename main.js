"use strict";

const threeIcon = document.getElementById("three");
const nav_ul = document.getElementById("nav_ul");
const clientsIconLeft = document.querySelector(".clients_img_two_one");
const clientsIconTwo = document.querySelector(".clients_img_two_two");
const clients_div_1 = document.querySelector(".clients_div_1");
const clients_div_8 = document.querySelector(".clients_div_8");
const sendBtn = document.querySelector(".contacts_right_btn");
const sendView = document.querySelector(".sendView");
const blur = document.querySelector(".blur");
const okayBtn = document.querySelector(".okayBtn");
const input_name = document.querySelector(".input_name");
const input_num = document.querySelector(".input_num");
const input_mail = document.querySelector(".input_mail");

threeIcon.addEventListener("click", () => {
  nav_ul.classList.toggle("important");
});

clientsIconLeft.addEventListener("click", () => {
  clients_div_1.setAttribute("src", "images/Rectangle 14.png");
});

clientsIconTwo.addEventListener("click", () => {
  clients_div_1.setAttribute("src", "images/Rectangle 13.png");
});

function orderNow() {
  alert("before oredering u must register(contact us)");
}

sendBtn.addEventListener("click", function () {
  if (
    input_name.value.trim() !== "" &&
    input_num.value !== "" &&
    input_mail.value !== ""
  ) {
    sendView.classList.add("block");
    blur.classList.add("block");
  } else if (
    input_name.value.trim() !== "" ||
    input_num.value !== "" ||
    input_mail.value !== ""
  ) {
    alert("Fill all inputs completely");
  }
});
sendBtn2();
okayBtn2();

okayBtn.addEventListener("click", () => {
  sendView.classList.remove("block");
  blur.classList.remove("block");
  input_name.value = "";
  input_num.value = "";
  input_mail.value = "";
});

function sendBtn2() {
  if (
    (input_name.value.trim() !== "" && input_num.value !== "") ||
    input_mail.value !== ""
  ) {
    sendView.classList.add("block");
    blur.classList.add("block");
  } else if (
    input_name.value.trim() !== "" ||
    input_num.value !== "" ||
    input_mail.value !== ""
  ) {
    alert("Fill all inputs completely");
  }
}

function okayBtn2() {
  sendView.classList.remove("block");
  blur.classList.remove("block");
  input_name.value = "";
  input_num.value = "";
  input_mail.value = "";
}

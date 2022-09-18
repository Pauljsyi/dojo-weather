console.log(..."page loaded");

//after refresh show cookie
// after clicking button make cookie disappear

function closeModal(e) {
  console.log(e);

  document.querySelector(e).remove();
}

function loading() {
  alert("Loading weather report ...");
}

let select = document.querySelector("select");
let highTemp = document.getElementsByClassName("high-temp");
let lowTemp = document.getElementsByClassName("low-temp");

// console.log(highTemp.innerText == 24 + "°");
// console.log(highTemp, highTemp.length);

// console.log(highTemp[0].innerText.split("°"));

//parse through string
// convert string to number
// convert current degree to desired degree
// changed innertext to reflect changes

function convertDegrees(e) {
  // from celsius to fahrenheit
  if (e.value === "fahrenheit") {
    // change all high temperatures to fahrenheit
    for (var i = 0; i < highTemp.length; i++) {
      // console.log("current index: ", i);
      let parsed = parseInt(highTemp[i].innerText);
      // console.log("parsed: ", parsed);
      let converted = (parsed * 9) / 5 + 32;
      // console.log("converted: ", converted);
      highTemp[i].innerText = converted + "°";
    }
    // change all low temperatures to fahrenheit
    for (var i = 0; i < lowTemp.length; i++) {
      // console.log("current index: ", i);
      let parsed = parseInt(lowTemp[i].innerText);
      // console.log("parsed: ", parsed);
      let converted = (parsed * 9) / 5 + 32;
      // console.log("converted: ", converted);
      lowTemp[i].innerText = converted + "°";
    }
  } else {
    // from fahrenheit to celsius
    // change all high temperatures to celsius
    for (var i = 0; i < highTemp.length; i++) {
      // console.log("current index: ", i);
      let parsed = parseInt(highTemp[i].innerText);
      // console.log("parsed: ", parsed);
      let converted = ((parsed - 32) * 5) / 9;
      // console.log("converted: ", converted);
      highTemp[i].innerText = Math.round(converted) + "°";
    }
    // change all low temperatures to celsius
    for (var i = 0; i < lowTemp.length; i++) {
      // console.log("current index: ", i);
      let parsed = parseInt(lowTemp[i].innerText);
      // console.log("parsed: ", parsed);
      let converted = ((parsed - 32) * 5) / 9;
      // console.log("converted: ", converted);
      lowTemp[i].innerText = Math.round(converted) + "°";
    }
  }
}

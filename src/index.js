import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


document.body.addEventListener('keydown', function(e) {
  console.log(e.code + " was pressed.")
})

// let menuSubmit = document.getElementById("menu-submit");


// let numberSelect = document.getElementById("number-select");
// let setSelect = document.getElementById("set-select");
// let colorSelect = document.getElementById("color-select");

// let settings = [];
// let url = '';

// const [cardData, setCardData] = useState(0);

// menuSubmit.addEventListener("click", function(e){
//   e.preventDefault()
//   settings = [];
//   settings.push(numberSelect.value, setSelect.value, colorSelect.value);
//   alert(settings);
//   // alert(settings[0]);
//   url = `https://api.magicthegathering.io/v1/cards?colors=${settings[2]}&setName=${settings[1]}&pageSize=${settings[0]}`;
//   alert(url);
//   drawCards()
// });

// function drawCards() {
//   fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.cards[0].name, data.cards[1].name, data.cards[2].name);
//     //Hook here i think.
//     setCardData(data)
//     console.log(cardData)
//   });
// }
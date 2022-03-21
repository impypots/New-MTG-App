import React from 'react';
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

let menuSubmit = document.getElementById("menu-submit");


let numberSelect = document.getElementById("number-select");
let setSelect = document.getElementById("set-select");
let colorSelect = document.getElementById("color-select");

let settings = [];
let url = `https://api.magicthegathering.io/v1/cards?supertypes=legendary&types=creature&colors=${settings[2]}&setName=${settings[1]}&pageSize=${settings[0]}`;

menuSubmit.addEventListener("click", function(e){
  e.preventDefault()
  settings = [];
  settings.push(numberSelect.value, setSelect.value, colorSelect.value);
  alert(settings);
});


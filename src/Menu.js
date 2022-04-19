import React, { useState, useEffect } from 'react';
import logo from './mtg-logo.png';

let menuSubmit = document.getElementById("menu-submit");


let numberSelect = document.getElementById("number-select");
let setSelect = document.getElementById("set-select");
let colorSelect = document.getElementById("color-select");

let settings = [];
let url = '';

let h2Text = 'this is the card Data:'





export default function PokemonList() {
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
  //     setCardData(data.cards[0].name)
  //     console.log(cardData)
  //   });
  // }

  const [cardData, setCardData] = useState("yeaaa");

  useEffect(() => {
    h2Text = `this is the card Data: ${cardData}`
  })

  function logData() {
    setCardData("yessirdatahere"); 
  }

  return (
    <div id="menu-div">
      <div id="menu-header">
        <h1>Magic: The Gathering Card Guessing Game</h1>
      </div>
      <div>
        <form id="menu-form">
          <label htmlFor="number-select">Difficulty: </label>
          <select name="number-select" id="number-select">
            <option>3</option>
            <option>4</option>
            <option>6</option>
          </select>
          <br />
          <label htmlFor="set-select">Set: </label>
          <select name="set-select" id="set-select">
            <option>Origins</option>
            <option>Amonkhet</option>
            <option>Kamigawa</option>
            <option>Khans</option>
          </select>
          <br />
          <label htmlFor="color-select">Color: </label>
          <select name="color-select" id="color-select">
            <option>Blue</option>
            <option>Green</option>
            <option>White</option>
            <option>Red</option>
            <option>black</option>
          </select>
          <button onClick={() => logData()} id="menu-submit">Start</button>
        </form>
        <h2>{h2Text}</h2>
      </div>
    </div>
    
  )
}


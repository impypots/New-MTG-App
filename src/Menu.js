import React from 'react';
import logo from './mtg-logo.png';

export default function PokemonList() {
  return (
    <div id="menu-div">
      <div id="menu-header">
        <h1>Magic: The Gathering Card Guessing Game</h1>
      </div>
      <div>
        <form id="menu-form">
          <label for="number-select">Difficulty: </label>
          <select name="number-select" id="number-select">
            <option>3</option>
            <option>4</option>
            <option>6</option>
          </select>
          <br />
          <label for="set-select">Set: </label>
          <select name="set-select" id="set-select">
            <option>Origins</option>
            <option>Amonkhet</option>
            <option>Kamigawa</option>
            <option>Khans</option>
          </select>
          <br />
          <label for="color-select">Color: </label>
          <select name="color-select" id="color-select">
            <option>Blue</option>
            <option>Green</option>
            <option>White</option>
            <option>Red</option>
            <option>black</option>
          </select>
          <button type="submit" id="menu-submit">Start</button>
        </form>
      </div>
    </div>
    
  )
}


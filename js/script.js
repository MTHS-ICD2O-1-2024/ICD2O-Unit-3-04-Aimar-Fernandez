// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Apr 2025
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
  // output
  document.getElementById("answer").innerHTML =
    "Volume is: " + (fahrenheit - 32) * 5/9 + "°C"
}

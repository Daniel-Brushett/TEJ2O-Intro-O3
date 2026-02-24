/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daniel John Brushett
 * Created on: 02/03/26
 * This program makes the microbit state temperature
*/

let currentTemperatureCelcius: number
let currentTemperatureKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

//variables
let lightvalue: number 
let lightValuePercentage: number 

input.onButtonPressed(Button.A, function ()  {
 // process
lightvalue = input.lightLevel()
lightValuePercentage = (lightvalue / 255) * 100
lightValuePercentage = Math.round(lightValuePercentage)

// output
basic.clearScreen()
basic.showString('Percentage light is: ' + lightValuePercentage.toString() + '%.')
})
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

// On Button A
input.onButtonPressed(Button.A, function() {
    currentTemperatureCelcius = input.temperature()
    currentTemperatureKelvin = currentTemperatureCelcius + 273
    basic.showNumber(currentTemperatureKelvin)
})

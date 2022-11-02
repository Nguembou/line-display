input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.toggle(4 - index, 0)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        led.toggle(0, 4 - index)
        basic.pause(500)
    }
})
basic.forever(function () {
	
})

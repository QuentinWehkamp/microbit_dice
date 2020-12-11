input.onGesture(Gesture.Shake, function () {
    number = randint(1, 6)
    switch(number){
        case 1:
            basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    	break;
        case 2:
        basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
        break;
        case 3:
        basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
        break;
        case 4:
        basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . . . # .
        . . . # .
        `)
    	break;
        case 5:
        basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
        break;
        case 6:
        basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
        break;
    }
basic.pause(5000)
})
let number = 0
while (number == 0) {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(250)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.pause(250)
}

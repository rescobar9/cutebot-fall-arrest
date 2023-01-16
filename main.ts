basic.showLeds(`
    . . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . .
    `)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(20, 20)
    } else {
        cuteBot.motors(-50, -50)
        basic.pause(300)
        cuteBot.motors(0, randint(50, 100))
        basic.pause(100)
        cuteBot.motors(0, 0)
        basic.pause(1000)
    }
})

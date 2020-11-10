basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    }
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showIcon(IconNames.Sad)
    }
})

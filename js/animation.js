let squareOne = anime({
    targets: '.square1',
    translateX: function() {
        return anime.random(0, 5)
    },
    translateY: function() {
        return anime.random(0, 5)
    },
    rotate: function() {
        return anime.random(0, 5)
    },
    duration: 10000,
    direction: 'alternate',
    loop: true,
    easing: 'cubicBezier(.31,.54,.87,.35)'
})

let circleOne = anime({
    targets: '.circle1',
    translateY: function() {
        return anime.random(0, 30)
    },
    translateX: function() {
        return anime.random(0, 20)
    },
    easing: 'cubicBezier(.42,1.04,.17,-0.04)',
    loop: true,
    direction: 'alternate',
    duration: 7000
})

let circleTwo = anime({
    targets: '.circle2',
    translateX: function() {
        return anime.random(4, 10)
    },
    translateY: function() {
        return anime.random(10, 20)
    },
    easing: 'cubicBezier(.53,.32,1,.87)',
    loop: true,
    direction: 'alternate',
    duration: 4000
})

let circleThree = anime({
    targets: '.circle3',
    translateY: function() {
        return anime.random(60, 30)
    },
    translateX: function() {
        return anime.random(-30, 50)
    },
    loop: true,
    duration: 3000,
    direction: 'alternate',
    easing: 'cubicBezier(.25,.76,.87,.34)'
})

let circleFour = anime({
    targets: '.circle4',
    translateX: function() {
        return anime.random(-50, 20)
    },
    translateY: function() {
        return anime.random(100, -45)
    },
    loop: true,
    duration: 4000,
    direction: 'alternate',
    easing: 'easeOutInCirc'
})

let circleFive = anime({
    targets: '.circle5',
    translateY: function() {
        return anime.random(-30, 30)
    },
    translateX: function() {
        return anime.random(10, 0)
    },
    loop: true,
    duration: 2000,
    direction: 'alternate',
    easing: 'cubicBezier(.1,.79,.69,.72)'
})

let circleSix = anime({
    targets: '.circle5',
    translateY: function() {
        return anime.random(-30, 30)
    },
    translateX: function() {
        return anime.random(10, 0)
    },
    loop: true,
    duration: 2000,
    direction: 'alternate',
    easing: 'cubicBezier(.1,.79,.69,.72)'
})
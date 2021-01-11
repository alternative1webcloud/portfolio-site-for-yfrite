let squareOne = anime({
    targets: '.square1',
    translateX: function() {
        return anime.random(0, 5)
    },
    translateY: function() {
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

let squareTwo = anime({
    targets: '.square2',
    translateX: function() {
        return anime.random(-30, 20)
    },
    translateY: function() {
        return anime.random(0, 20)
    },
    scale: 0.5,
    loop: true,
    duration: 4000,
    direction: 'alternate',
    easing: 'cubicBezier(.31,.55,.94,.43)',
})

let squareThree = anime({
    targets: '.square3',
    translateX: 20,
    translateY: 30,
    loop: true,
    duration: 2000,
    direction: 'alternate',
    easing: 'cubicBezier(.31,.55,.94,.43)',
})

let squareFour = anime({
    targets: '.square4',
    translateX: anime.random(30, 10),
    translateY: anime.random(-10, 30),
    loop: true,
    duration: 3500,
    direction: 'alternate',
    easing: 'easeInBounce'
})

let squareFive = anime({
    targets: '.square5',
    translateY: anime.random(0, 30),
    translateX: anime.random(-10, 30),
    loop: true,
    direction: 'alternate',
    easing: 'spring(1, 80, 10, 00)',
    duration: 3200
})
let squareSix = anime({
    targets: '.square6',
    translateY: anime.random(0, 30),
    translateX: anime.random(-5, 50),
    loop: true,
    direction: 'alternate',
    easing: 'spring(1, 80, 10, 00)',
    duration: 4000,
    delay: 4000
})

let triangleOne =  anime({
    targets: '.tringle1',
    translateX: [
        {value: 250, duration: 4000, delay: 3000},
        {value: 0, duration: 1000, delay: 500, rotate: '1turn'}
    ],
    translateY: [
        {value: 80, duration: 2000, delay: 1000, rotate: '1turn'},
        {value: 100, duration: 3000, delay: 2000},
        {value: 50, duration: 6000, delay: 3000, rotate: '1turn'}
    ],
    loop: true,
    duration: 3500,
    direction: 'alternate',
})

let triangleTwo =  anime({
    targets: '.tringle2',
    translateX: [
        {value: 200, duration: 4000, delay: 2000},
        {value: 100, duration: 1000, delay: 100, rotate: '1turn'}
    ],
    translateY: [
        {value: -200, duration: 2000, delay: 2000, rotate: '1turn'},
        {value: 300, duration: 3000, delay: 3500},
        {value: 0, duration: 6000, delay: 6000, rotate: '1turn'}
    ],
    scaleX: [
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 },
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 }
    ],
    scaleY: [
        { value: [1.75, 1], duration: 3500 },
        { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 4500 },
        { value: 1.75, duration: 6000, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 4500 }
    ],
    loop: true,
    duration: 5000,
    direction: 'alternate',
})
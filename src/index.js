'use strict'

import './style.css'

let customDate = new Date('February 10, 2024 00:00:00')

function timing() {
    let now = new Date().getTime()
    let x = customDate - now
    if (x > 0) {
        let days = Math.floor(x / (1000 * 60 * 60 * 24))
        let hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((x % (1000 * 60)) / 1000)
        document.querySelector('.timing').innerHTML = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`
    }
}

setInterval(timing, 1000)

'use strict'

let customDate = new Date('December 24, 2022 00:00:00')
let timer = setInterval(timing, 1000);

function timing() {
    let now = new Date().getTime()
    let x = customDate - now
    if (x > 0) {
        let days = Math.floor(x / (1000 * 60 * 60 * 24))
        let hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let mins = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60))
        let secs = Math.floor((x % (1000 * 60)) / 1000)
    
        let time = `${days} days : ${hours} hours : ${mins} minutes : ${secs} seconds`
        document.querySelector('.timing').innerHTML = time
    }
}


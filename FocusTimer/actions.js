import state from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

export function playBtn(){
    state.isRunning = !state.isRunning
    timer.countdown()
}

export function pauseBtn(){
    elements.minutes.setAttribute("contenteditable", true)
    elements.minutes.focus()
}

export function plusBtn(){
    let minutes = Number(elements.minutes.textContent) + 5
    let seconds = Number(elements.seconds.textContent)
    timer.updateDisplay(minutes, seconds)
}

export function minusBtn(){
    let minutes = Number(elements.minutes.textContent) - 5
    let seconds = Number(elements.seconds.textContent)
    timer.updateDisplay(minutes, seconds)
}

export function card1(){
    document.documentElement.classList.add('runningCard1')
    sounds.buttonPressFlorest.play()
}

export function card1Running(){
    document.documentElement.classList.remove('runningCard1')
    sounds.buttonPressFlorest.pause(); 
    sounds.buttonPressFlorest.currentTime = 0;
}

export function card2(){
    document.documentElement.classList.add('runningCard2')
    sounds.buttonPressRain.play()
}

export function card2Running(){
    document.documentElement.classList.remove('runningCard2')
    sounds.buttonPressRain.pause(); 
    sounds.buttonPressRain.currentTime = 0;
}

export function card3(){
    document.documentElement.classList.add('runningCard3')
    sounds.buttonPressCoffeeShop.play()
}

export function card3Running(){
    document.documentElement.classList.remove('runningCard3')
    sounds.buttonPressCoffeeShop.pause(); 
    sounds.buttonPressCoffeeShop.currentTime = 0;
}

export function card4(){
    document.documentElement.classList.add('runningCard4')
    sounds.buttonPressFireplace.play()
}

export function card4Running(){
    document.documentElement.classList.remove('runningCard4')
    sounds.buttonPressFireplace.pause(); 
    sounds.buttonPressFireplace.currentTime = 0;
}
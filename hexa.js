const hexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

btn.addEventListener('click', function(){

    let hexColor = '#'

    for(let i = 0; i < 6; i++) {
        hexColor += hexa[getRandomNumbers()]
    }

    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = hexColor
    color.textContent = hexColor
})

function getRandomNumbers() {
    return Math.floor(Math.random() * hexa.length)
}
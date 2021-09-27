let btn = document.getElementById('btn')
let body = document.querySelector('body')

let colors = ['red', 'violet', 'orange']

body.style.backgroundColor = "blue"

btn.addEventListener('click', changeColor)
function changeColor() {
    let colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}




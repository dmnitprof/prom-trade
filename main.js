import './style.css'

const button = document.querySelector('.button')
button.onclick = function () {
    let field1 = parseInt(document.querySelector('#field1').value)
    let field2 = parseInt(document.querySelector('#field2').value)
    let field3 = parseInt(document.querySelector('#field3').value)
    let field4 = parseInt(document.querySelector('#field4').value)
    let result = document.querySelector('#result')
    if (!field1 && !field2 && !field3 && !field4) {
        alert('Заполните поля')
        return
    }
    let sum = field1 + field2 + field3 + field4
    result.innerHTML = sum.toString()

}
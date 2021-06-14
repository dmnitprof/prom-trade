import './style.css'

const radio1 = document.querySelector('#radio1')
const radio2 = document.querySelector('#radio2')
const radio3 = document.querySelector('#radio3')
const radio4 = document.querySelector('#radio4')
const field1 = document.querySelector('#field1')
const labelfield2 = document.querySelector('.label-field2')
const field2 = document.querySelector('#field2')
const field3 = document.querySelector('#field3')
const field4 = document.querySelector('#field4')
const button = document.querySelector('.button')
const result = document.querySelector('#result')

radio4.addEventListener('change', function () {
    if(radio4.checked) {
        field2.classList.add('visible')
        labelfield2.classList.add('visible')
    }
})
radio3.addEventListener('change', function () {
    if(radio3.checked) {
        field2.classList.remove('visible')
        labelfield2.classList.remove('visible')
    }
})

radio2.addEventListener('change', function () {
    if(radio2.checked) {
        field2.classList.remove('visible')
        labelfield2.classList.remove('visible')
    }
})

radio1.addEventListener('change', function () {
    if(radio1.checked) {
        field2.classList.remove('visible')
        labelfield2.classList.remove('visible')
    }
})



field3.addEventListener('input', function () {
    if (field3.value) {
        field4.setAttribute('disabled', 'disabled')
    }else {
        field4.removeAttribute('disabled', '')
    }
})

field4.addEventListener('input', function () {
    if (field4.value) {
        field3.setAttribute('disabled', 'disabled')
    }else {
        field3.removeAttribute('disabled', '')
    }
})

button.onclick = function () {

    let vfilds1 = +field1.value
    let vfilds2 = +field2.value
    let vfilds3 = +field3.value
    let vfilds4 = +field4.value
    let calculation

    if(radio1.checked && field4.getAttribute('disabled')){
        calculation = (vfilds1 * vfilds3)

    }
    if(radio1.checked && field3.getAttribute('disabled')){
        calculation = (vfilds1 * vfilds4)
    }
    if(radio2.checked && field4.getAttribute('disabled')) {
        calculation = (vfilds1 * 2) * vfilds3
    }
    if(radio2.checked && field3.getAttribute('disabled')){
        calculation = (vfilds1 * 2) * vfilds4
    }
    if(radio3.checked && field4.getAttribute('disabled')) {
        calculation = (vfilds1 * 2) * vfilds3
    }
    if(radio3.checked && field3.getAttribute('disabled')){
        calculation =(vfilds1 * 2)  * vfilds4
    }
    if(radio4.checked && field4.getAttribute('disabled')) {
        calculation =((vfilds1 * 2) + (vfilds2 * 4)) * vfilds3
    }
    if (radio4.checked && field3.getAttribute('disabled')){
        calculation = ((vfilds1 * 2) + (vfilds2 * 4)) * vfilds4
    }
    if(!vfilds1 || !vfilds3) {
        let info =`<span class="danger">Заполните нужные поля!</span>`
        result.innerHTML = info
    }else {
        result.innerHTML = `${calculation}<span>,&nbsp;кг</span>`
    }

    let inputs = document.querySelectorAll('input[type=number]')
    for (let i = 0;  i < inputs.length; i++) {
        inputs[i].value = ''
    }


}



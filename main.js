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


radio1.addEventListener('change', function () {
    if (!radio3.checked) {
        field2.style.display = 'none'
        labelfield2.style.display = 'none'
    }
})

radio2.addEventListener('change', function () {
    if (!radio2.checked) {
        field2.style.display = 'none'
        labelfield2.style.display = 'none'
    }
})

radio3.addEventListener('change', function () {
    if (radio3.checked) {
        field2.style.display = 'block'
        labelfield2.style.display = 'block'
    }
})


radio4.addEventListener('change', function () {
    if (!radio4.checked) {
        field2.style.display = 'none'
        labelfield2.style.display = 'none'
    }
})


button.onclick = function () {
    let vfilds1 = +field1.value
    let vfilds2 = +field2.value
    let vfilds3 = +field3.value
    let vfilds4 = +field4.value

    // field3.addEventListener('input', function () {
    //     if (!vfilds3) {
    //         field4.setAttribute('disabled', 'disabled')
    //     }
    // })
    //
    // field4.addEventListener('input', function () {
    //     if (!vfilds4) {
    //         field3.setAttribute('disabled', 'disabled')
    //     }else {
    //         field3.removeAttribute('disabled', '')
    //     }
    // })
    let calculation
    calculation = vfilds1 * vfilds3
    result.innerHTML = calculation

}



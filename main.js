import './style.css'

const radioButtons = document.querySelectorAll('.radio')
const radio = document.querySelector('.radio')
const inputs = document.querySelectorAll('.input')
const field1 = document.querySelector('#field1')
const field2 = document.querySelector('#field2')
const field3 = document.querySelector('#field3')
const field4 = document.querySelector('#field4')
const fieldInput2 = document.querySelector('.field2')
const labelField2 = document.querySelector('.label-field2')
const button = document.querySelector('.button')
let result = document.querySelector('#result')

let getCheckboxNumber
let getInputNumber

/*============================================================*/

//   radioButtons
for (const radio of radioButtons) {
    radio.addEventListener('change', (e) => {

        getCheckboxNumber = parseInt(e.target.getAttribute('data-check'))

        if (radio.checked && getCheckboxNumber === 4) {
            fieldInput2.style.display = 'block'
            labelField2.style.display = 'block'
        } else {

            fieldInput2.style.display = 'none'
            labelField2.style.display = 'none'

        }

    })
}

/*============================================================*/
//   inputs

for (const input of inputs) {
    input.addEventListener('input', (e) => {
        getInputNumber = parseInt(e.target.getAttribute('data-input'))
        let getInput = e.target.value
        if (getInput && getInputNumber === 3) {
            inputs[3].setAttribute('disabled', 'disabled')
            inputs[3].classList.add('disabled')
            field4.value = field3.value * 1000

        } else if (!getInput && getInputNumber === 3) {
            inputs[3].removeAttribute('disabled', '')
            inputs[3].classList.remove('disabled')
            field4.value = ''
        }

        if (getInput && getInputNumber === 4) {
            inputs[2].setAttribute('disabled', 'disabled')
            inputs[2].classList.add('disabled')
            field3.value = field4.value / 1000

        } else if (!getInput && getInputNumber === 4) {
            inputs[2].removeAttribute('disabled', '')
            inputs[2].classList.remove('disabled')
            field3.value = ''
        }
    })
}

/*============================================================*/
// calculation

button.addEventListener('click', (e) => {
    if (!radio.checked) {
        innerHTML(result, `<span class="danger">Заполните нужные поля!</span>`)
    }

    if (getCheckboxNumber === 1) {
        innerHTML(result, `${+field1.value * +field3.value}<span>,&nbsp;кг</span>`)

    }
    if (getCheckboxNumber === 2) {

        innerHTML(result, `${(+field1.value * 2) * +field3.value}<span>,&nbsp;кг</span>`)

    }
    if (getCheckboxNumber === 3) {
        innerHTML(result, `   ${(+field1.value * 2) * +field3.value}<span>,&nbsp;кг</span>`)
    }
    if (getCheckboxNumber === 4) {
        innerHTML(result, `${((+field1.value * 2) + (+field2.value * 4)) * +field3.value}<span>,&nbsp;кг</span>`)
    }

})

function innerHTML(element, value) {
    return element.innerHTML = `${value}`
}


let string = ''
let buttons = document.querySelectorAll('.button')
let multiply = document.querySelector('.multiply')
let toggle_dark = document.querySelector('.btn-dark')
let toggle_light = document.querySelector('.btn-light')
let calculator = document.querySelector('.digital-calculator')
let display = document.querySelector('.display')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (Event) => {
        if (Event.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('input').value = string
        }

        else if (Event.target.innerHTML == 'c') {
            string = ''
            document.querySelector('input').value = string
        }

        else if (Event.target.innerHTML == '%') {
            string = eval(string) / 100
            document.querySelector('input').value = string
        }

        else if (Event.target.innerHTML == '+/-') {
            string = document.querySelector('input').value
            document.querySelector('input').value = -1 * string
        }

        else {
            console.log(Event.target);
            string = string + Event.target.innerHTML
            document.querySelector('input').value = string
        }
    })
})

toggle_dark.addEventListener('click', (Event) => {
    console.log('Dark is Clicked');
    display.style.backgroundColor = 'rgba(32, 36, 45, 1)'
    display.style.color = 'white'
    calculator.style.backgroundColor = 'rgba(32, 36, 45, 1)'
})

toggle_light.addEventListener('click', (Event) => {
    console.log('Light is Clicked');
    display.style.backgroundColor = '#D0D3E2'
    display.style.color = 'black'
    calculator.style.backgroundColor = '#D0D3E2'
})


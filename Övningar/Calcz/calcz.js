class Calculator {
    constructor(pretaskTextElement, currenttaskTextElement) {
        this.pretaskTextElement = pretaskTextElement
        this.currenttaskTextElement = currenttaskTextElement
        this.clear()
    }

clear() {
    this.currenttask = ''
    this.pretask = ''
    this.operation = undefined
}

delete() {
    this.currenttask = this.currenttask.toString().slice(0, -1)

}

selectedNumber(number) {
    if (number === '.' && this.currenttask.includes('.')) return
    this.currenttask = this.currenttask.toString() + number.toString()

}

chooseOperation() {
if (this.currenttask === '') return
if (this.pretask !== '') {
this.compute()
}
this.operation = operation
this.pretask = this.currenttask
this.currenttask = ''
}

compute() {
let computation
const pre = parseFloat(this.pretask)
const current = parseFloat(this.currenttask)
if (isNaN(pre) || isNaN(currrent)) return
switch (this.operation) {
case '+':
    computation = pre + current
    break
    case '-':
    computation = pre - current
    break
    case '*':
    computation = pre * current
    break
    case '/':
    computation = pre / current
    break

    default: 
    return
    }

this.currenttask = computation
this.operation = undefined
this.pretask = ''
}

getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay

    }
}

updateDisplay () {
    this.currenttaskTextElement.innerText = 
    this.getDisplayNumber(this.currenttask)
    if (this.operation != null) {
        this.pretaskTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
} else {
    this.pretaskTextElement.innerText = ''
}

const numberButtons = document.querySelectorAll('[value-number]')
const operationButtons = document.querySelectorAll('[value-operation]')
const equalsButton = document.querySelector('[value-equals]')
const deleteButton = document.querySelector('[value-delete]')
const allClearButton = document.querySelector('[value-all-clear]')
const pretaskTextElement = document.querySelector('[value-pre-task]')
const currenttaskTextElement = document.querySelector('[value-current-task]')



const calculator = new Calculator(pretaskTextElement. currenttaskTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.selectedNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.selectedNumber(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
    
})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
    
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()

})

}}
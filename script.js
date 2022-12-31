class Calculator {
  constructor(previousOpTextElement, currentOpTextElement) {
    this.previousOpTextElement = previousOpTextElement
    this.currentOpTextElement = currentOpTextElement
    this.clear
  }

  clear() {
    this.currentOp = ''
    this.previousOp = ''
    this.operation = undefined
  }
  //   clear() {
  //     this.previousOp.innerText = '';
  //     this.currentOp.innerText = '';
  //     this.operation = undefined;
  // }

  delete() {

  }

  appendNumber(number) {
    this.currentOpend = (this.currentOperand ?? '') + number;
  }

  chooseOperation(operation) {

  }
  compute() {

  }
  updateDisplay() {
    this.currentOpTextElement.innerText = this.currentOp
  }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationsButtons = document.querySelectorAll('[data-operation]')

const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')

const allClearButton = document.querySelector('[data-all-clear]')
const previousOpTextElement = document.querySelector('[data-previous-op]')

const currentOpTextElement = document.querySelector('[data-current-op]')

const calculator = new Calculator(previousOpTextElement,
  currentOpTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
var checkboxes = [false, false];
const setCheckbox = (element) => {
  const type = 'checkbox'
  const indexId = element.value
  element.setAttribute('checked', element.checked)
  checkboxes[indexId] = element.checked
  const atLeastOne = checkboxes.some((box) => box === true)
  if (atLeastOne) {
    validate(3, true)
    inputSuccess(type, `<b>OK!</b>`)
  } else {
    validate(3, false)
    inputError(type, 'select at least <b>one :(</b>')
  }
}

const checkName = (str) => {
  const type = 'name'
  const numbers = /\d/
  const containNumbers = str.match(numbers)

  if (containNumbers) {
    validate(0, false)
    inputError(type)
  } else if (!containNumbers && str.length > 0) {
    validate(0, true)
    inputSuccess(type)
  } else {
    validate(0, false)
    inputNormal(type)
  }
}

const checkEmail = (str) => {
  const type = 'email'
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const mailSyntax = str.match(mailformat)
  console.log(mailSyntax);
  const domainName = str.split("@")[1]
  const checkDomain = 'spitogatos.gr'

  if (domainName === undefined) {
    validate(1, false)
    inputNormal(type)
  } else if (domainName !== checkDomain) {
    validate(1, false)
    inputError(type, `only <b>@${checkDomain}</b> is allowed`)
  } else {
    validate(1, true)
    inputSuccess(type, `email looks <b>OK!</b>`)
  }
}

function checkPhone(str) {
  const type = 'tel'
  const telNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  const telPatternMatch = str.match(telNum)
  const letters = /[A-Za-z]+/
  const containLetters = str.match(letters)

  if (telPatternMatch && str.length === 12 && !containLetters) {
    validate(2, true)
    inputSuccess(type)
  } else if (str.length < 12 && !containLetters) {
    inputNormal(type)
  }
  else if (containLetters || !telPatternMatch || str.length > 12) {
    validate(2, false)
    inputError(type)
  }
}

function checkMessage(str) {
  const type = 'message'

  if (str.length > 100) {
    inputError(type, str.length)
  }
  else {
    inputNormal(type, str.length)
  }
}

const inputError = (id, msg = "Error Message",) => {
  document.getElementById(`${id}-helper`).innerHTML = msg
  document.getElementById(`${id}-helper`)?.classList.add('helper-text-error')
  document.getElementById(`${id}-check`)?.classList.remove('check-ok')
  document.getElementById(`${id}`)?.classList.add('did-error-input')
  document.getElementById(`${id}-label`)?.classList.add(`label-error`)
}

const inputSuccess = (id, msg = "Help Text") => {
  document.getElementById(`${id}-helper`).innerHTML = msg
  document.getElementById(`${id}-helper`)?.classList.remove('helper-text-error')
  document.getElementById(`${id}-check`)?.classList.add('check-ok')
  document.getElementById(`${id}`)?.classList.remove('did-error-input')
  document.getElementById(`${id}-label`)?.classList.remove(`label-error`)
}

const inputNormal = (id, msg = "This field is required") => {
  document.getElementById(`${id}-helper`).innerHTML = msg
  document.getElementById(`${id}-helper`)?.classList.remove('helper-text-error')
  document.getElementById(`${id}-check`)?.classList.remove('check-ok')
  document.getElementById(`${id}`)?.classList.remove('did-error-input')
  document.getElementById(`${id}-label`)?.classList.remove(`label-error`)
}

var validateStates = [false, false, false, false]
const validate = (index, state) => {

  validateStates[index] = state
  isValid = validateStates.every(inputValidation => inputValidation === true)
  const submitButton = document.getElementById('submitButton')
  isValid ? submitButton.removeAttribute('disabled') : submitButton.setAttribute('disabled', "")   
}
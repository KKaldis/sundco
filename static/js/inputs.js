const setCheckbox = (element) => {
  element.setAttribute('checked', element.checked)
}

const checkName = (str) => {
  const type = 'name'
  const numbers = /\d/
  const containNumbers = str.match(numbers)

  if (containNumbers) {
    inputError(type)
  } else if (!containNumbers && str.length > 0) {
    inputSuccess(type)
  } else {
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
    inputNormal(type)
  } else if (domainName !== checkDomain) {
    inputError(type)
  } else {
    inputSuccess(type)
  }
}

function checkPhone(str) {
  const type = 'tel'
  const telNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  const telPatternMatch = str.match(telNum)
  const letters = /[A-Za-z]+/
  const containLetters = str.match(letters)

  if (telPatternMatch && str.length === 12 && !containLetters) {
    inputSuccess(type)
  } else if (str.length < 12 && !containLetters) {
    inputNormal(type)
  }
  else if (containLetters || !telPatternMatch || str.length > 12) {
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
  document.getElementById(`${id}-helper`).classList.add('helper-text-error')
  document.getElementById(`${id}-check`)?.classList.remove('check-ok')
  document.getElementById(`${id}`).classList.add('did-error-input')
  document.getElementById(`${id}-label`).classList.add(`label-error`)
}

const inputSuccess = (id, msg = "Help Text") => {
  document.getElementById(`${id}-helper`).innerHTML = msg
  document.getElementById(`${id}-helper`).classList.remove('helper-text-error')
  document.getElementById(`${id}-check`)?.classList.add('check-ok')
  document.getElementById(`${id}`).classList.remove('did-error-input')
  document.getElementById(`${id}-label`).classList.remove(`label-error`)
}

const inputNormal = (id, msg = "This field is required") => {
  document.getElementById(`${id}-helper`).innerHTML = msg
  document.getElementById(`${id}-helper`).classList.remove('helper-text-error')
  document.getElementById(`${id}-check`)?.classList.remove('check-ok')
  document.getElementById(`${id}`).classList.remove('did-error-input')
  document.getElementById(`${id}-label`).classList.remove(`label-error`)
}
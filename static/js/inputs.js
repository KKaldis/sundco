//! check checkbox 
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

//! check name for number characters and length
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

//! check email syntax and domain name
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
  } else if (mailSyntax && domainName === checkDomain) {
    validate(1, true)
    inputSuccess(type, `email looks <b>OK!</b>`)
  }
}

//! check phone pattern and character type
const checkPhone = (str) => {
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

//! check message length
const checkMessage = (str) => {
  const type = 'message'

  if (str.length > 100) {
    validate(4, false)
    inputError(type, str.length)
  }
  else {
    validate(4, true)
    inputNormal(type, str.length)
  }
}

//!dropdown select
const select = (element) => {
  element.setAttribute("value", element.value)
  const subCategories = fetchedData[element.value]?.subCategories
  const selectSubcategory = document.getElementById('subCategoryId');
  element.id === 'categoryId' && renderOptions(subCategories, selectSubcategory)
}

//! Render dropdown options
const renderOptions = (list, element) => {
  while (element.childNodes.length > 3) {
    element.removeChild(element.lastChild);
  }
  const { id } = element
  for (i = 0; i < list?.length; i++) {
    let option = document.createElement('option');
    const key = list[i][id]
    const name = list[i].name
    option.innerHTML = name;
    option.setAttribute('value', key);
    element.appendChild(option);
  }
}

//! render input error
const inputError = (id, msg = "Error Message",) => {
  document.getElementById(`${id}-helper`).innerHTML = msg
  document.getElementById(`${id}-helper`)?.classList.add('helper-text-error')
  document.getElementById(`${id}-check`)?.classList.remove('check-ok')
  document.getElementById(`${id}`)?.classList.add('did-error-input')
  document.getElementById(`${id}-label`)?.classList.add(`label-error`)
}

//! render input success
const inputSuccess = (id, msg = "Help Text") => {
  document.getElementById(`${id}-helper`).innerHTML = msg
  document.getElementById(`${id}-helper`)?.classList.remove('helper-text-error')
  document.getElementById(`${id}-check`)?.classList.add('check-ok')
  document.getElementById(`${id}`)?.classList.remove('did-error-input')
  document.getElementById(`${id}-label`)?.classList.remove(`label-error`)
}

//! render input normal state
const inputNormal = (id, msg = "This field is required") => {
  document.getElementById(`${id}-helper`).innerHTML = msg
  document.getElementById(`${id}-helper`)?.classList.remove('helper-text-error')
  document.getElementById(`${id}-check`)?.classList.remove('check-ok')
  document.getElementById(`${id}`)?.classList.remove('did-error-input')
  document.getElementById(`${id}-label`)?.classList.remove(`label-error`)
}

//! validation check
var validateStates = [false, false, false, false, false]
const validate = (index, state) => {
  validateStates[index] = state
  isValid = validateStates.every(inputValidation => inputValidation === true)
  const submitButton = document.getElementById('submitButton')
  isValid ? submitButton.removeAttribute('disabled') : submitButton.setAttribute('disabled', "")
}
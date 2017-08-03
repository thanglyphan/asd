
export function checkValidUser(name, email, password) {
  if(!checkValidName(name)) {
    return 0
  }

  if(!checkValidEmail(email)) {
    return 1
  }

  if(!checkValidPassword(password)) {
    return 2
  }
}

export function checkValidEmail(email) {
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email)
}

export function checkValidName(name) {
  if(name.length > 2){
    return true
  }
  return false
}

export function checkValidPassword(password) {
  if(password.length > 5) {
    return true
  }
  return false
}

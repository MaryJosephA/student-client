const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (events) {
  console.log(events)
  event.preventDefault()
  const data = getFormFields(events.target)
  console.log(events.target)
  alert('Made it to onSignUp')
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// const onSignIn = function (events) {
//   event.preventDefault()
//
//   const data = getFormFields(events.target)
//   // alert('Made it to onSignUp')
//   // console.log(data)
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }

// const onChangePassword = function (events) {
//   event.preventDefault()
//
//   const data = getFormFields(event.target)
//   // alert('Made it to onSignUp')
//   // console.log(data)
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }

// const onSignOut = function () {
//   // console.log('signoutsuccessfull')
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
module.export = {
  onSignUp
  // onSignIn,
  // onChangePassword,
  // onSignOut
}

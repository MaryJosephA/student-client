const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (events) {
  event.preventDefault()
  const data = getFormFields(events.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (events) {
  event.preventDefault()

  const data = getFormFields(events.target)
  // alert('Made it to onSignUp')
  // console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (events) {
  event.preventDefault()

  const data = getFormFields(event.target)
  // alert('Made it to changePassword')
  // console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function () {
  // console.log('signoutsuccessfull')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onCreateCourse = function (events) {
  event.preventDefault()
  // console.log('product Created!')
  const data = getFormFields(event.target)
  // console.log(event)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}
const onShowCourses = function (events) {
  event.preventDefault()
  // ajaxCalls.showStatsAjaxCall()
  const data = getFormFields(event.target)
  // const product = data.product
  // if (product.editable === false) {
  //   $('#display.message').html('this is product of ' + data.user.email)
  // console.log(event)
  api.showCourse(data)
    .then(ui.onShowCourses)
    .catch(ui.onShowFailure)
  // } else {
  //   $('#display.message').html('this is product of ' + data.user.email)
}
const onUpdateCourse = function (event) {
// nPrevent default reload
  event.preventDefault()
  // Get product ID input value
  const data = getFormFields(event.target)
  // returns: {product: {id: 45}}
  // console.log('productData is', data)
  // Make API call
  api.updateCourse(data)
  // Handle success
    // .then(console.log)
    .then(ui.onUpdateCourse)
    // .then(ui.success)
    // Handle Failure
    .catch(ui.onUpdateFailure)
  // console.log('Sync: outside .then')
}
const onDeleteCourse = function (event) {
// nPrevent default reload
  event.preventDefault()

  // event.target is a button
  // console.log('this event is :', event.target)

  const studentDataId = event.target.getAttribute('data-id')

  // But prodData is an empty object? :(
  // console.log('prodData is', prodDataId)

  // Make API call
  api.deleteCourse(studentDataId)
  // Handle success
    // .then(console.log)
    .then(ui.onDeleteCourse)
    .catch(ui.onDeleteFailure)
    // .then(ui.success)
    // Handle Failure
    // .catch(ui.error)
  // console.log('Sync: outside .then')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateCourse,
  onShowCourses,
  onUpdateCourse,
  onDeleteCourse
}

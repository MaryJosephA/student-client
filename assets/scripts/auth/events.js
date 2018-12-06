const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (events) {
  const data = getFormFields(events.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (events) {
  event.preventDefault()

  const data = getFormFields(events.target)
  // console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (events) {
  event.preventDefault()

  const data = getFormFields(event.target)
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
  const data = getFormFields(event.target)
  api.showCourse(data)
    .then(ui.onShowCourses)
    .catch(ui.onShowFailure)
}
const onUpdateCourse = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // Make API call
  api.updateCourse(data)
    .then(ui.onUpdateCourse)
    .catch(ui.onUpdateFailure)
}
const onDeleteCourse = function (event) {
// nPrevent default reload
  event.preventDefault()

  const studentDataId = event.target.getAttribute('data-id')

  // Make API call
  api.deleteCourse(studentDataId)
    .then(ui.onDeleteCourse)
    .catch(ui.onDeleteFailure)
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

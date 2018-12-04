const store = require('../store.js')
// const authEvents = require('./auth/events.js')

const signUpSuccess = function () {
  console.log('you are signedup')
  $('#display-message').html('Please log in')
  $('#display-message').css('color', 'green')
  // $('#sign-in-form').show()
  // $('#sign-up-form').trigger('reset')
  // $('#sign-up-form').hide()
  // $('#getProductsButton').hide()
  // $('#AddProduct').hide()
  // $('#update').hide()
  // $('#delete').hide()
}
const signUpFailure = function () {
  $('#display-message').html('sign up failed')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').show()
}

const signInSuccess = function (response) {
  $('#display-message').html('welcome' + ' ' + response.user.email + ' ' + response.user.id)
  $('#signout').show()
  // $('#change-password').show()
  $('#changepassword').show()
  $('#getProductsButton').show()
  $('#AddProduct').show()
  $('#update').show()
  $('#delete').show()
  $('#display-message').css('color', 'green')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#sign-out-form').show()
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-out-button').addClass('hidden')
  // console.log($('#change-password'))
}
const signInFailure = function () {
  $('#display-message').html('oops please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password').trigger('reset')
}
const signOutSuccess = function () {
  $('#display-message').html('Sign Out successful')
  // $('#display-message').fadeOut(2000)
  $('#change-password').hide()
  $('#display-message').css('color', 'green')
  $('#main').hide()
  $('#sign-in-form').show()
  $('#signout').hide()
  $('#signup').show()
  // $('#sign-up-form').show()
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('change-password').trigger('reset')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#create-product').hide()
  $('#update-product').hide()
  $('#delete-product').hide()
  $('#changepassword').hide()
  $('#getProductsButton').hide()
  $('#AddProduct').hide()
  $('#update').hide()
  $('#delete').hide()
  $('#content').html('')
}
const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').show()
  $('#signout').show()
}
const changePasswordSuccess = function () {
  $('#display-message').text('Success change password')
  $('#display-message').css('color', 'green')
  $('#change-password').trigger('reset')
  $('#change-password').hide()
}
const changePasswordFailure = function () {
  $('#display-message').html('please try again')
  $('#display-message').css('color', 'red')
  $('#change-password').trigger('reset')
  $('#change-password').hide()
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}

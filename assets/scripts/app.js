'use strict'
const authEvents = require('./auth/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-course').on('submit', authEvents.onCreateCourse)
  $('#getCourseButton').on('click', authEvents.onShowCourses)
  $('#update-course').on('submit', authEvents.onUpdateCourse)
  $('#content').on('click', '.delete', authEvents.onDeleteCourse)
  $('#signout').on('click', authEvents.onSignOut)
  // your JS code goes here
  $('#sign-up-form').hide()
  $('#sign-out-form').hide()
  $('#changepassword').hide()
  $('#create-course').hide()
  $('#update-course').hide()
  $('#delete-product').hide()
  $('#change-password').hide()
  $('#getCourseButton').hide()
  $('#AddCourse').hide()
  $('#update').hide()
  $('#delete').hide()

  $('#signup').click(function () {
    $('#sign-up-form').show()
    $('#signup').hide()
  })
  $('#changepassword').click(function () {
    $('#change-password').show()
  // $('#create-product').hide()
  })
  $('#AddCourse').click(function () {
    $('#create-course').show()
  })
  $('#update').click(function () {
    $('#update-course').show()
    $('#create-course').hide()
  })
  $('#delete').click(function () {
    $('#delete-course').show()
    $('#update-course').hide()
    $('#create-course').hide()
  })
  $('#changepassword').click(function () {
    $('#change-password').show()
  // $('#create-product').hide()
  })
  $('#getCourseButton').click(function () {
    $('#create-course').hide()
    $('#update-course').hide()
    $('#delete-course').hide()
    $('#display-message').html('')
  })
})

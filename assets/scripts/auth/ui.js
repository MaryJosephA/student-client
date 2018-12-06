const store = require('../store.js')
// const authEvents = require('./auth/events.js')

const signUpSuccess = function () {
  $('#display-message').html('Please log in')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').show()
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
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
  $('#getCourseButton').show()
  $('#AddCourse').show()
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
  $('#create-course').hide()
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
const onCreateSuccess = function (response) {
  // store.product = response.product
  $('#content').html('')
  const course = response.course
  const courseHTML = (`
      <div class="table-container">
      <table class="table table-striped">
  <thead>
  <tr>
    <th scope="row">coursename</th>
    <td>coursenumber</td>
    <td>id</td>
  </tr>

  </thead>
  <tbody>
  <tr>
    <th scope="col">${course.coursename}</th>
    <th scope="col">${course.coursenumber}</th>
    <th scope="col">${course.id}</th>

  </tr>
    </tbody>
    </table>
    </div>

    `)
  // $('#display-message').text('created')
  $('#update-product').trigger('reset')
  $('#delete-product').hide()

  // append productHTML to content
  $('#content').append(courseHTML)
  $('#display-message').text('sucessfully created the data')
  $('#create-course').trigger('reset')
  $('#content').append(response.course)
  // console.log('onCreateSuccess ran. Data is :', data)
}
const onCreateFailure = function (error) {
  $('#display-message').text('Error on creating course')
  $('#display-message').css('color', 'red')
  $('#create-product').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onShowCourses = function (response) {
  $('#content').html('')
  $('#update-course').hide()
  const divHTML = (`
   <div class="row">
   <div class="col box grey"><strong>coursename</strong></div>
   <div class="col box grey"><strong>coursenumber</strong></div>
   <div class="col box grey"><strong>id</strong></div>
   <div class="col box grey"><strong></strong></div>
   </div>
    `)
  $('#content').append(divHTML)

  // loop through API response data
  response.courses.forEach(course => {
    // build HTML element with data
    //       const myClock = document.getElementById('delete')
    let buttonhtml = ''
    // let emailhtml = ''
    if (course.editable === true) {
      buttonhtml = `<button data-id='${course.id}' type="submit" class="delete btn btn-primary navbar-btn">Delete</button>`
      // emailhtml = `<p data-user='${store.user.email}'>  ${store.user.email} </h4>`
    }

    const courseHTML = (`

     <div class="row">
     <div class="col box grey">${course.coursename}</div>
     <div class="col box grey">${course.coursenumber}</div>
     <div class="col box grey">${course.id}</div>
     <div class="col box grey">${buttonhtml}</div>
    </div>'
    `)
    $('#content').append(courseHTML)
  })
}

const onShowFailure = function (error) {
  $('#display-message').text('Please try again')
  $('#display-message').css('color', 'red')
  console.error('onShowFailure ran. Error is :', error)
}
const onUpdateCourse = function (response) {
  $('#content').html('')
  const course = response.course
  const courseHTML = (`
    <div class="table-container">
      <table class="table table-striped">
  <thead>
  <tr>
    <th scope="row">coursename</th>
    <td>coursenumber</td>
    <td>id</td>
  </tr>

  </thead>
  <tbody>
  <tr>
    <th scope="col">${course.coursename}</th>
    <th scope="col">${course.coursenumber}</th>
    <th scope="col">${course.id}</th>

  </tr>
    </tbody>
    </table>
    </div>

    `)
  $('#display-message').text('Updated the course')
  $('#update-course').trigger('reset')
  $('#delete-course').hide()

  // append productHTML to content
  $('#content').append(courseHTML)
}
// <p>ID: ${product.id}</p>
// <h4>prod_name: ${product.prod_name}</h4>
// <p>Quantity: ${product.quantity}</p>
// <br />

const onUpdateFailure = function (error) {
  $('#display-message').text('Error on updating course')
  $('#display-message').css('color', 'red')
  $('#update-course').trigger('reset')
  $('#display-message').removeClass()
  $('#display-message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}
const onDeleteCourse = function (response) {
  $('#display-message').text('deleted successful')
  // console.log('Async: inside .then')
  // console.log(response)
  $('#delete-product').trigger('reset')
  $('#display-message').trigger('reset')
  // empty content elemen
  $('#content').html('')
  $('#display-message').css('color', 'green')
}
const onDeleteFailure = function () {
  $('#change-password').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#content').html('')
  $('#display-message').css('color', 'Red')
  $('#delete-product').trigger('reset')

// }

  // $('#message').removeClass()
  // $('#message').addClass('failure')
  // console.error('onCreateFailure ran. Error is :', error)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  onCreateSuccess,
  onCreateFailure,
  onShowCourses,
  onShowFailure,
  onUpdateCourse,
  onUpdateFailure,
  onDeleteCourse,
  onDeleteFailure
}

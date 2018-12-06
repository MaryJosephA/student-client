'use strict'
const config = require('../config.js')
const store = require('../store.js')

const signUp = function (studentdata) {
  console.log('sigup', studentdata)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: studentdata
  })
}
const signIn = function (studentdata) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: studentdata
  })
}
const changePassword = function (studentdata) {
  // console.log('change password ', proddata)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
      // Authorization: 'Token token=' + store.user.token
    },
    data: studentdata
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
      // Authorization: 'Token token=' + store.user.token
    }
  })
}
const create = function (studentdata) {
  // console.log('data: ', studentData)
  return $.ajax({
    url: config.apiUrl + '/courses',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },

    data: studentdata
  })
}
const showCourse = function (studentData) { /// ///////////////////////////////////////////////////////
  return $.ajax({
    url: config.apiUrl + '/courses',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
    // data: prodData

  })
}
const updateCourse = function (studentData) {
  // console.log(prodData.product.Id)
  return $.ajax({
    url: config.apiUrl + `/courses/${studentData.course.id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
      // Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: studentData
  })
}
const deleteCourse = function (studentDataId) {
  // prodData is empty! But I need the id
  console.log('im trying to delete with studentData', studentDataId)
  return $.ajax({
    url: config.apiUrl + '/courses/' + studentDataId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
      // Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  create,
  showCourse,
  updateCourse,
  deleteCourse
}

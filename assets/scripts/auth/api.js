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
module.export = {
  signUp,
  signIn,
  changePassword,
  signOut
}

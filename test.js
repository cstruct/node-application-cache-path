var path = require('path')
var assert = require('assert')
var applicationCachePath = require('./')

assert.ok(path.isAbsolute(applicationCachePath('test')), 'should return an absolute path')

assert.throws(function () {
  applicationCachePath()
}, TypeError, 'should throw error when called incorrectly without parameter')

assert.throws(function () {
  applicationCachePath(1)
}, TypeError, 'should throw error when called incorrectly with wrong type')

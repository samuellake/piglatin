
var assert = require('assert')

var PL = require('./piglatin.js')

var _hello_ = PL('Hello There')

assert.equal('elloHayhereTay',_hello_)

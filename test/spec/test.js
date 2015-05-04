/* global describe, it */

var should = require('should'),
  assert = require('assert'),
  jsdom = require('jsdom');

var M = require('../app/scripts/main.js');

(function () {
  'use strict';

  describe('Mapbox generator', function() {
    // create a dom so jquery will work
    var doc = jsdom.jsdom(html),
      window = doc.parentWindow,
      $ = global.jQuery = require('jquery')(window);

      it('generates json when you submit the form', function() {
        $('form').submit();
        $('div#json-data').length.should.eq(1);
      });
  });

  //describe('Give it some context', function () {
    //describe('maybe a bit more context here', function () {
      //it('should run here few assertions', function () {

      //});
    //});
  //});
})();

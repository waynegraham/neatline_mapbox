/* global ZeroClipboard */

var nl = [
'                                    .   oooo   o8o                       ',
'                                  .o8   `888   `"\'                       ',
'ooo. .oo.    .ooooo.   .oooo.   .o888oo  888  oooo  ooo. .oo.    .ooooo. ',
'`888P"Y88b  d88\' `88b `P  )88b    888    888  `888  `888P"Y88b  d88\' `88b',
' 888   888  888ooo888  .oP"888    888    888   888   888   888  888ooo888',
' 888   888  888    .o d8(  888    888 .  888   888   888   888  888    .o',
'o888o o888o `Y8bod8P\' `Y888""8o   "888" o888o o888o o888o o888o `Y8bod8P'
].join('\n');

console.log(nl);

$(document).ready(function() {
  'use strict';

  // copy-n-paste from ZeroClipBoard
  var client = new ZeroClipboard($('#copy-button'));
  client.on('ready', function() {
    client.on('aftercopy', function(event) {
      //event.target.style.display = "none";
      console.log('copied text to clipboard' + event.data['text/plain']);
    });
  });

  // download the json string
  $('#download-button').click(function(event) {
    console.log(event);
    this.href = 'data:text/plain;charset=UTF-8,' + makeJson();
  });

  // generate json to text area
  $('form').submit(function(event) {
    event.preventDefault();
    $('#json-data').val(makeJson());
  });


  /**
   * TODO: make this a mustache (or whatever) template
   */
  function makeJson() {

    var title = $('input#map-title').val();
    var id    = $('input#mapboxId').val();
    var user  = $('input#mapbox-user').val();

    var nlMapbox = {
      'Mapbox (Neatline)': [
        {
          title: title,
          id: id,
          properties: {
            urls: [
              'http://a.tiles.mapbox.com/v3/' + user + '/${z}/${x}/${y}.png',
              'http://b.tiles.mapbox.com/v3/' + user + '/${z}/${x}/${y}.png',
              'http://c.tiles.mapbox.com/v3/' + user + '/${z}/${x}/${y}.png',
              'http://d.tiles.mapbox.com/v3/' + user + '/${z}/${x}/${y}.png',
            ]
          }
        }
      ]
    };

    return JSON.stringify(nlMapbox);
  }

});

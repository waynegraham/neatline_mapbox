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

  var client = new ZeroClipboard($('#copy-button'));
  client.on("ready", function(readyEvent) {
    client.on("aftercopy", function(event) {
      //event.target.style.display = "none";
      console.log("copied text to clipboard" + event.data["text/plain"]);
    });
  });

  $('#download-button').click(function(event) {
    console.log(event);

    var val = $('input:text').val();

    var nl_mapbox = {
      "Mapbox (Neatline)": [
        {
          title: "foobar",
          id: val,
          properties: {
            urls: [
              "http://a.tiles.mapbox.com/v3/dclure.hc7a4mo9/${z}/${x}/${y}.png",
              "http://b.tiles.mapbox.com/v3/dclure.hc7a4mo9/${z}/${x}/${y}.png",
              "http://c.tiles.mapbox.com/v3/dclure.hc7a4mo9/${z}/${x}/${y}.png",
              "http://d.tiles.mapbox.com/v3/dclure.hc7a4mo9/${z}/${x}/${y}.png"
            ]
          }
        }
      ]
    };


    this.href = "data:text/plain;charset=UTF-8," + JSON.stringify(nl_mapbox);

    //this.href = 'data:text/plain;charset=UTF-8,' + $('input:text').val();
  });




  $('form').submit(function(event, form) {
    event.preventDefault();
    var val = $('input:text').val();

    var nl_mapbox = {
      "Mapbox (Neatline)": [
        {
          title: "foobar",
          id: val,
          properties: {
            urls: [
              "http://a.tiles.mapbox.com/v3/dclure.hc7a4mo9/${z}/${x}/${y}.png",
              "http://b.tiles.mapbox.com/v3/dclure.hc7a4mo9/${z}/${x}/${y}.png",
              "http://c.tiles.mapbox.com/v3/dclure.hc7a4mo9/${z}/${x}/${y}.png",
              "http://d.tiles.mapbox.com/v3/dclure.hc7a4mo9/${z}/${x}/${y}.png"
            ]
          }
        }
      ]
    };

    $('#json-data').val(JSON.stringify(nl_mapbox));


    //console.log(JSON.stringify(nl_mapbox));
  });
});

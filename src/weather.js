$(document).ready(function() {

    var config = {
        siteSections: [
            { name: "social",
              sites: [
                "www.facebook.com",
                "www.reddit.com"
              ]},
              {
              name: "media",
              sites: [
                "www.youtube.com",
                "www.spotify.com"
              ]},
              {
              name: "work",
              sites: [
                "www.stackoverflow.com",
                "www.outlook.office.com/owa",
                "unanet.unanet.com"
              ]}
        ]
    };

    for( var i = 0; i < config.siteSections.length; i++ ) {
        var sectionName = config.siteSections[i].name;
        $("#sites").append('<div class="vertical siteblock" id="'+
                            sectionName+
                            '"></div>');

        var appendObj = $("#"+sectionName);
        appendObj.append('<div class="siteheader">'+
                         '<h1>'+ sectionName +'</h1></div>');

        appendObj.append('<div class="sitechunk"></div>');
        appendObj = appendObj.children(".sitechunk");
        for( var j = 0; j < config.siteSections[i].sites.length; j++ ) {
            appendObj.append('<div class="sitelabel"></div>');
            appendObj = appendObj.children(".sitelabel:last");

            appendObj.append(
                        '<h2>'+
                        config.siteSections[i].sites[j]+
                        '</h2>');

            appendObj = appendObj.parent();
        }
    }

    $("div.sitelabel").click(function() {
        var text = $(this).children("h2").text();
        $(location).attr('href',"https://"+text);
    });

    $.simpleWeather({
        location: 'Fairfax, VA',
        woeid: '',
        unit: 'f',
        success: function(weather) {
            $("#location").html(weather.city.toLowerCase() + "," + weather.region.toLowerCase());
            $("#low").html("low: "+weather.low);
            $("#high").html("high: "+weather.high);

            $("div").fadeIn();
        },
        error: function(error) {

        }
    });

});

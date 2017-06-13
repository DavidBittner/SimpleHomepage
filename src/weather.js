function gradient( max, min, val ) {
    if( val < min ) {
        return min;
    }
    return (max-min)/(val-min);
}

function calcColor( 

$(document).ready(function() {

    $.simpleWeather({
        location: 'Fairfax, VA',
        woeid: '',
        unit: 'f',
        success: function(weather) {
            console.log(weather);

            $("#location").html(weather.city + "," + weather.region);
            $("#low").html("low: "+weather.low);
            $("#high").html("high: "+weather.high);

            $("div").fadeIn();
        },
        error: function(error) {

        }
    });

});

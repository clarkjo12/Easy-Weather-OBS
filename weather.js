$(document).ready(function(){

    
    // "setInterval" for permanent looping;
    // "setTimeout" for a single refresh (no reason to change this unless you know what youre doing)

        setInterval(() => {
            console.log('Call Made');
            console.log("data");
    
    
            $.ajax({
    
               url: "COPY THE URL YOUVE BEEN USING HERE",
    
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    console.log(data);
                    console.log(data.weather[0].main);
                    console.log(data.main);
                    console.log(data.main.temp);
                    var iconcode = data.weather[0].icon;
                    var information = show(data);
                    $("#show").html(information);
                }
            });


// EDITABLE TIMER!! // RIGHT HERE! //  60000 = 1 minute //
// for 3 mins type: 3*60000, for 17 mins, type: 17*60000 //
// BE VERY VERY VERY CAREFUL!!!!!!!!! - never put less then 2*60000 // 
//otherwise, Open Weather WILL START CHARING YOU $$$ ////////////////

        }, 3*60000);
        
// BE VERY VERY VERY CAREFUL!!!!!!!!! - never put less then 2*60000 // 
//otherwise, Open Weather WILL START CHARING YOU $$$ ////////////////
    })
    
    function show(data){
        var iconcode = data.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    
        return "<img   id=wicon src="+iconurl +">"+"<h3> "+ Math.round(data.main.temp) +"°F" +"</h3>"
        ;}
    
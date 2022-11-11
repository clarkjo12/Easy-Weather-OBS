# Easy-Weather-OBS
An HTML Overlay, that displays the Current Temperature and Conditions for a City of your choice; and will automatically refresh, as often as you'd like.


Navigate to OpenWeather, and generate an API key, it will take a few hours to activate within Open Weather's system.. fyi
Go here: https://home.openweathermap.org/api_keys
Create and account, etc; with the free version, you get 1400 calls per day. I personally have mine set to 3 minutes, so its only 480 calls per day

==========================
== Testing your API key 
==========================


I couldnt get some cities to work, so I added a seperate Zipcode url to use if this happens for you.

To test for City:
Replace "rome,ny,us" with your City, State, and Country,
Then replace the "fake" API key, with the one that you personally generated on Open Weather.
If it doesnt work; remember you will probaly have to wait a few hours until it activates...

https://api.openweathermap.org/data/2.5/weather?q=rome,ny,us&appid=2g7d5k7dk5g72k52lfjglj123&units=imperial

If the City way doesnt work, Try the Zipcode URL instead,

https://api.openweathermap.org/data/2.5/weather?zip=13316,us&appid=k54glh7f34fjl15h3j3hf5f13hl7&units=metric


To Change between F, C - Replace the last word with either:
"imperial" = F
"metric" = C

==========================
== Test Weather App 
==========================








==========================
== Edit Refresh Timer 
==========================


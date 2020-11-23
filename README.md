# unit-one-project




My app/site is going to have two different input fields that the user will input their location and date. 
The search button will have an onclick event that will fetch 2 API's, convert them into json objects, filter through the api and pull the (id-->date, weather state, weather abbr, wind speed, wind direction, temp, air pressure, humididty, visibility)

<!-- PSEUDOCODE --> 

1. Pull APIs into code.
   ---->Call fetch api(json)
   ---->Response, promise
   ---->Complete and grab data from body of response
   ---->Make element with the data
   ---->Handle errors
2. Create an input bar for the user to enter in their "values" which will be their location and the date they are searching for. 
3. Create a submit button, so that the users iput will pull information from the API populating the weather and the sunrise and sunset times based on their request. 
   ----> Make variables for the API, the city & date (not hard coded, it is null), and the URLs (making it into a string or template literal)
   ----> The API can be broken down into its separate parts of the information we want to populate.
   ----> let weather; let sunset; let surise;
   ----> create a functions that populates the different variables onto a card or display box by using let url = `template literal` or string of the different variables.
4. Create a cached element for the submit button and create a functions that asks the API what the sunset, sunrise and weather are based on the text input field.
    ---->input.value()


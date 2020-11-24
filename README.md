# unit-one-project


### Technologies Used:

* HTML
* CSS
* JavaScript
* Wireframe CC
* Whimsical
* Postman
* Heroku
* [Meta Weather API](https://www.metaweather.com/api/)
* [Sunrise Sunset API](https://sunrise-sunset.org/api)
* GitHub


### Getting Started:

[Weather to Fly!](weather_to_fly.surge.sh)


Deployed App: 
![Photo](/Users/alexafaulkison/code/sei/homework/unit-one-project/images/Screenshot of App.png"Image of App")






### Biggest Challenges

My app/site was originally supposed to have 2 input buttons that would allow the user to input their city and the date they desire, however; I struggled immensly with the weather API. Between using outside servers to get around CORS and extracting the specific data I desired I decided to change my plan. Each city in this API has a specific and random id number that would have made it difficult to translate, so I hard coded the city's specific API code and limited this project to only pulling data from a few locations. 



### Pseudocode

1. Connect all cached element references: buttons and div and footers where data will be appended. 
2. Pull APIs into code.
   ---->Call fetch api(json)
   ---->Response, promise, async, await second API
   ---->Complete and grab data from body of response
   ---->Make element with the data
   ---->Handle errors
3. Create event listners for each button and have it pull the promised API's and append the weather to the div and the sunrise and sunset data to the footer. 
4. Since the API's are being fetched through another server and it is fetching 2 API's create a message to allow the user to know that their click is doing something and to please wait. 
5. Create a delete function so that the appended/fetched data does not keep pushing into the array and displaying multiple fetch requests. 


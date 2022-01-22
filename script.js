$(document).ready(function(){

    var typed = new Typed('.typed', {
        strings: ['Hello,', 'find some weather info'],
        smartBackspace: true,
        loop:true,
        typeSpeed:100,// Default value
      });

    $("#searchinput").on("keyup", function(e){
  
       let cityname= e.target.value;
       const APIKey= "e2f664c72f187b3d3a0c64387e70435e";
  
      //  make a request to the server
  
      $.ajax({
  
          url:`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`,
          
      }).done(function(weatherdata){
  
          console.log(weatherdata);
          $("#profile").html(`
          <div class="container">
          
          <div class="row">
          
         <div class="card" style="width: 18rem;">
              
                  <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title">weather: ${weatherdata.weather[0].description}</h5>
                      <p class="card-text">The temperature at <b>${cityname}</b> is: <b>${weatherdata.main.temp}&#8451;</b> and it feels like it is: <b>${weatherdata.main.feels_like}&#8451;</b></p>
                      <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">learn more about this place</a>
                  </div>
         </div>
  
          
          
          </div>  
          
          </div>`);
      });
  
    });
  
  
  })
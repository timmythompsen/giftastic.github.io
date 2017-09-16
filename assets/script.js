


	var cars = ["Mustang", "Corvette", "BMW M6", "Porsche 911"];
	renderButtons();

	$("button").on("click", function() {

        var car = $(this).attr("data-name");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response) {
	      console.log(response);

	    var results = response.data;
	    var display= $("<div class='display'>");
        for (var i = 0; i < results.length; i++) {
	        console.log(results[i].id);
	        console.log(results[i].url);

			var carDiv = $("<div class='car'>");

			var rating = results[i].rating;
			var pOne = $("<p>").text("Rating: " + rating);

	        carDiv.append(pOne);
	        var id = results[i].id;
	        var pTwo = $("<p>").text("ID: " + id);
	        carDiv.append(pTwo);
	        var imgURL = results[i].images.fixed_height.url;
	        var image = $("<img>").attr("src", imgURL);
	        carDiv.append(image);
	     	display.append(carDiv);
	        
	      }
			$("#car-view").html(display);

	    });
	});

	    function renderButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < cars.length; i++) {

          var a = $("<button>");
         
          a.addClass("car");
         
          a.attr("data-name", cars[i]);
          
          a.text(cars[i]);
          
          $("#buttons-view").append(a);
	        }
	      }

	      
	      $("#add-car").on("click", function(event) {
	        event.preventDefault();
	        
	        var newcar = $("#car-input").val().trim();

	        cars.push(newcar);
	        console.log(cars);
	        
	        renderButtons();
	      });

	      
	     




    
$(document).ready(function() {
//ajax request to get newsfeed data 
       $.ajax("https://api.parse.com/1/classes/newsfeed", 
       {
               beforeSend: function(request) {
                       request.setRequestHeader ("X-Parse-Application-Id", "8ruV5CC0r9uV55IbzuM0Nzg0VTEXkhPkAzRWKn9i");
                       request.setRequestHeader ("X-Parse-REST-API-Key", "iXsmVSZmZqlZdz5VNzPWu7G1k2T5SHMAu3QW8dOY");
               }
       }
	).done(function(response) {
	       $.each(response.results, function(index, article) {
	               $(".newsfeed").append("<h1>" + article["title"] + "</h1><p>" + article ["body"] + "</p>");
	 });

	});



	$( ".postit" ).click(function(event) {
		var newtitleInput = $(".titleInput").val(), 
			newbodyInput = $(".bodyInput").val() 
				  // alert(newtitleInput)
		  		//   alert(newbodyInput)
		  	
  		$.ajax({
			'type': 'POST',
			'url': 'https://api.parse.com/1/classes/newsfeed',
			'data': JSON.stringify({
				'title' : newtitleInput,
				'body'  : newbodyInput
			}),
				 beforeSend: function(request) {
       		    request.setRequestHeader ("X-Parse-Application-Id", "8ruV5CC0r9uV55IbzuM0Nzg0VTEXkhPkAzRWKn9i");
        	    request.setRequestHeader ("X-Parse-REST-API-Key", "iXsmVSZmZqlZdz5VNzPWu7G1k2T5SHMAu3QW8dOY");
        	    request.setRequestHeader ("Content-Type", "application/json")
			}	
		}).done(function(response) {
			console.log(response);
		});

		event.preventDefault();
	});//end click event
});//end ready





// $.ajax('https://api.parse.com/1/classes/newsfeed', 
//   {
//     beforeSend: function(request) {
//       request.setRequestHeader('X-Parse-Application-Id', '8ruV5CC0r9uV55IbzuM0Nzg0VTEXkhPkAzRWKn9i');
//             request.setRequestHeader('X-Parse-REST-API-Key', 'iXsmVSZmZqlZdz5VNzPWu7G1k2T5SHMAu3QW8dOY');
//             console.log(request)

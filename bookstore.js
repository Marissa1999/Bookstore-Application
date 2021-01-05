  $(document).ready(function()
      {
		  
        $.get('bookstore.xml', function(data)
		{
			

        $('body').append('<h1> Book Table </h1>');

		
			
        $(data).find('book').each(function()
		{

		
            var book = $(this); 
            var title = book.find('title').text();
		    var author = book.find('author').text();
            var year = book.find('year').text();
            var price = book.find('price').text();

            console.log(title);
			console.log(author);
			console.log(year);
			console.log(price);

	
	        var table = "<table border=1 width=50%><tr><th>Title</th><th>Author</th><th>Year</th><th>Price</th></tr>";
	
	
	            table += "<tr><th>" 
				+ title + "</th><th>"
	        	+ author + "</th><th>"
	         	+ year + "</th><th>"
				+ price + "</th></table>";

				
			$('body').append(table);
		    
		});
		
	});
	
});
	
	
			
	    /*
			var attributes = $(this)[0].attributes;
			//console.log($(attributes)[0].nodeValue);
			
			var myHTML = "";
			
		    myHTML += $(title)[0].innerHTML + " by ";
			
			$(author).each(function()
			{
				myHTML += $(title)[0].innerHTML + " and ";
			});
			
			myHTML = myHTML.slice(0, -4);
			myHTML += "<br>";

		   });
		
		    $("#content").html(myHTML);
		
		});
		
		$.fail(function()
		{
			alert("Request Failed");
		});
		
		$.always(function()
		{
			console.log("Request Ended");
		});
		
     */
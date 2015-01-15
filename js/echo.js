function echo()
{
   if(arguments.length > 0){   

	     var div = document.getElementById("echodiv");
	     for (var i=0; i<arguments.length; i++){

	     	div.innerHTML += "<br>"+arguments[i];
	     }

		div.innerHTML +="<br>";
	 }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
echo('foo', 'bar', 'baz','foo', 'bar', 'baz');



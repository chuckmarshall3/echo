<?php

function echostring()
{	
    $args = func_get_args();
    foreach ($args as $a){
      echo $a."<br>";
	}
	echo "<br>";
  
}

echostring();
echostring('bla');
echostring('foo', 'bar', 'baz');
echostring('foo', 'bar', 'baz', 'foo', 'bar', 'baz', 'foo', 'bar', 'baz');
?>

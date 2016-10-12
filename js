/*script.js*/
$( document ).ready(function() {
  $("button").click(function() {
  	$("ul").append("<li>VITTUSAATANA</li>");
});
});
$(document).on('click', '.toDo', function() {
    $('li').fadeOut(function(){
      $('li').remove();
      });
		});

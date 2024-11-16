//Alert
$(document).ready(function(){

	// $('button').click(function(){
	// 	alert("Hello Everybody!");
	// });
	$("#alert").on('click',function(){
		alert("Hello Everybody!");
	});
});

//show-hide
$(document).ready(function(){
  $("#hide").click(function(){
    $(".content").hide();
  });
  $("#show").click(function(){
    $(".content").show();
  });
});

//fade-toggle
$(document).ready(function(){
  $("#hd").click(function(){
    $(".text").fadeOut();
  });
  $("#sh").click(function(){
    $(".text").fadeIn();
  });
  $("#toggle").click(function(){
    $(".text").fadeToggle(500);
  });
});

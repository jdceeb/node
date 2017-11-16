$(function() { 
  var social = $(".page-wrapper");
	
  $(".next").click(function() {
    social.html(window.dmotion.dhtml);
	  
  });
  $(".committee").click(function() {
    social.html(window.committee.dhtml);
	  
  });
});

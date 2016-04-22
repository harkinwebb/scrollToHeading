$(document).ready(function(){
	var scrollToHeading = new ScrollToHeading('h2.heading', '#menu', 'active', 'a.menuItem');

	scrollToHeading.build();

	$(document).on('click', 'a.menuItem', function(event){
		event.preventDefault();

		scrollToHeading.scroll($(this).attr('href'), 100);
	});

	$(document).on('scroll', function(){
		scrollToHeading.highlightActive();
	});
});
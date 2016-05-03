$(document).ready(function(){
	var options = {
		'headingElement': ':header',
		'container': '#menu',
		'activeClass': 'active',
		'menuItemSelector': 'a.menuItem',
		'classMap': {
			'H1': 'class1',
			'H2': 'class2',
			'H3': 'class3',
			'H4': 'class4',
			'H5': 'class5',
			'H6': 'class6'
		}
	};

	var scrollToHeading = new ScrollToHeading(options);

	scrollToHeading.build();

	$(document).on('click', 'a.menuItem', function(event){
		event.preventDefault();

		scrollToHeading.scroll($(this).attr('href'), 100);
	});

	$(document).on('scroll', function(){
		scrollToHeading.highlightActive(false);
	});
});
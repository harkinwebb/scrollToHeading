var ScrollToHeading = function(options){
	this.headingElement = $(options.headingElement);
	this.container = $(options.container);
	this.headingList = $('<ul></ul>');
	this.activeClass = options.activeClass;
	this.menuItemSelector = options.menuItemSelector;
	this.headingClasses = options.classMap;
};

ScrollToHeading.prototype.build = function(){

	var headingList = this.headingList;
	var headingClasses = this.headingClasses;

	this.headingElement.each(function(){
		var listItem = $('<li></li>');
		var listItemLink = $('<a></a>');
		var elementType = $(this).prop('nodeName').toUpperCase();

		listItemLink.html($(this).html());
		listItemLink.attr('href', '#'+$(this).attr('id'));

		listItemLink.addClass('menuItem');

		console.log(elementType);

		if(elementType in headingClasses)
		{
			console.log('In headding classes');
			listItemLink.addClass(headingClasses[elementType]);
		}

		listItem.append(listItemLink);
		headingList.append(listItem);
	});

	this.container.append(this.headingList);
};

ScrollToHeading.prototype.scroll = function(elementId, scrollSpeed){

	var target = $(elementId);

	$('html, body').animate({
          scrollTop: target.offset().top
        }, scrollSpeed);
};

ScrollToHeading.prototype.scrollToMenu = function(){
	this.scroll('#'+this.container.attr('id'));
};

ScrollToHeading.prototype.highlightActive = function(addToParent = false){

	var activeClass = this.activeClass;
	var menuItemSelector = this.menuItemSelector;

	this.headingElement.each(function(){
		var heading = $(this);
		var position = heading.position().top - $(window).scrollTop();

		if(position <= 0)
		{
			if(addToParent === true)
			{
				$(menuItemSelector).parent().removeClass(activeClass);
			}
			else
			{
				$(menuItemSelector).removeClass(activeClass);
			}

			var anchor = heading.attr('id');

			if(addToParent === true)
			{
				$(menuItemSelector+'[href="#'+anchor+'"]').parent().addClass(activeClass);
			}
			else
			{
				$(menuItemSelector+'[href="#'+anchor+'"]').addClass(activeClass);
			}
		}
	});
};
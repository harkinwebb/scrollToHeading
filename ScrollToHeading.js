var ScrollToHeading = function(headingElement, container, activeClass, menuItemSelector){
	this.headingElement = $(headingElement);
	this.container = $(container);
	this.headingList = $('<ul></ul>');
	this.activeClass = activeClass;
	this.menuItemSelector = menuItemSelector;
}; 

ScrollToHeading.prototype.build = function(){

	var headingList = this.headingList;

	this.headingElement.each(function(){
		var listItem = $('<li></li>');
		var listItemLink = $('<a></a>');
		//var returnLink = $('<a></a>');

		//returnLink.html('&nbsp; Return to menu');
		//returnLink.addClass('returnLink');
		//returnLink.attr('href', '#');

		listItemLink.html($(this).html());
		listItemLink.attr('href', '#'+$(this).attr('id'));
		listItemLink.addClass('menuItem');

		listItem.append(listItemLink);
		headingList.append(listItem);
		//$(this).append(returnLink);
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
	var menuItemSelector = this.menuItemSelector

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
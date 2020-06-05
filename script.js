$(function(){
	
	$('.btn-todo-add').click(function(){

		var newElement0 = $('<li class="li-task"></li>')
		newElement0.prependTo($('.ul-todo__list'));
		
		var newElement1 = $('<h3></h3>');
		newElement1.text($('.todo-task').val());
		newElement1.prependTo($(newElement0));

		var newElement3 = $('<a class="img-red-cross" href="#"><img src="img/red-cross.png"></a>');
		newElement3.appendTo($(newElement0));

		var newElement4 = $('<img class="img-arrow"src="img/arrow.png">');
		newElement4.appendTo($(newElement0));

		var newElement5 = $('<hr>');
		newElement5.text('');
		newElement5.appendTo($(newElement0));

		var newElement2 = $('<div class="todo-discr"></div>')
		newElement2.text($('.todo-discription').val());
		newElement2.appendTo($(newElement0));


		$('.img-red-cross').click(function(){
			$(this).parents('li').remove();
			return false;
		});

		var shown = true;
		$('.img-arrow').click(function(){
			var temp = $(this).parents('li');
			if (shown) {			
				$(temp).children('.todo-discr').hide('slow');
				$(this).toggleClass('img-arrow1');
				shown = false;
			} else {
				shown = true
				$(temp).children('.todo-discr').show('slow');
				$(this).toggleClass('img-arrow1');
			}
		});



		// rotate(this)
		// 	// $(this).css({
		// 	// 			'transform': 'rotate(180deg)',
		// 	// 			'padding-right':'24px',
		// 	// 			'float': 'right'
		// 	// 		});
		// 	rotate()






		
		// function hideDiscription() {
		// 	console.log(Math.random())
		// 	$(this).children(newElement2).hide(slow);
		// 	$(this).children(newElement4).css({
		// 				'transform': 'rotate(180deg)',
		// 				'padding-right': '24px',
		// 				'float': 'right'
		// 			});
		// }

		// function showDiscription() {
		// 	console.log(Math.random())
		// 	$(this).children(newElement2).show(slow);
		// 	$(this).children(newElement4).css({
		// 				'transform': 'rotate(180deg)',
		// 				'padding-right': '24px',
		// 				'float': 'right'
		// 			});
		// };


		// $(.).click(function(){
		// 	if($(this).parents(newElement0).children(newElement2).is(':visible')){
		// 		$(this).parents(newElement0).children(newElement2).hide(slow);
		// 	}else $(this).parents(newElement0).children(newElement2).show(slow)
		// })
		




});

});
function equalHeight(){
	if(jQuery(window).width() > 768	){
		jQuery('.row-eq-height').each(function(){
			var height = [];
			jQuery(this).children().each(function(i){
				height[i] = jQuery(this).innerHeight();
			});
			Array.max = function( array ){
			    return Math.max.apply( Math, array );
			};
			var maxHeight = Array.max(height);
			jQuery(this).children().innerHeight(maxHeight);
		});
	}
}

//Resize
jQuery(document).ready(equalHeight);
jQuery(window).resize(function(){
	jQuery('.row-eq-height').children().css('height', 'auto');
	equalHeight();
});

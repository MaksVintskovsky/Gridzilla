$(document).ready(function(){

	/*::::::::::::: Owl-carousel:::::::::::::*/
  	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
		dots: false,
	  	items: 1,
	    margin: 10
	});
	$('.slider-next').click(function() {
	    owl.trigger('next.owl.carousel', [800]);
	})
	$('.slider-prev').click(function() {
	    owl.trigger('prev.owl.carousel', [800]);
	})

	/*::::::::::::: Menu-button:::::::::::::*/
	$('.nav-button').on('click', function(e){
	        e.preventDefault();
	        $('.nav').toggleClass('nav-open');
	})

    /*::::::::::::: Main Nav Active links:::::::::::::*/                      
    $('.nav a').each(function () {             // получаем все нужные нам ссылки
        var location = window.location.href; // получаем адрес страницы
        var link = this.href;                // получаем адрес ссылки
        if(location == link) {               // при совпадении адреса ссылки и адреса окна
            $(this).addClass('active');  //добавляем класс
        }
    });
    /*::::::::::::: Blog Nav Active links:::::::::::::*/
    let blog_nav = $('.blog-nav a')
    let blog_pag = $('.blog-pagination a')
    
    blog_nav.click(function(){
    	if(blog_nav.hasClass('active')){
    		blog_nav.removeClass('active')
    	}
    	$(this).addClass('active')
    })
    blog_pag.click(function(){
    	if(blog_pag.hasClass('active')){
    		blog_pag.removeClass('active')
    	}
    	$(this).addClass('active')
    })
});
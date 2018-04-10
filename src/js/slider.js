(function(){
	$('.flex-container').waitForImages(function() {
		$('.spinner').fadeOut();
	}, $.noop, true);
	
	$(".flex-slide").each(function(){
		$(this).hover(function(){
			

			$('.flex-slide').click(function() {
    $(this).css({
        '-webkit-flex-grow': '10',
        'flex-grow': '10'
    })
				$(this).find('.flex-about').css({
				opacity: '0.8'
			});
				$(this).find('.flex-title').css({
				transform: 'rotate(360deg)',
				top: '15%',
				'text-transform': 'uppercase'	
						
			});

				
			$(".flex-title").css("width", "80%");	
      	
});

			$('.flex-slide').mouseleave(function() {
    $(this).css({
        '-webkit-flex-grow': '1',
        'flex-grow': '1'
    });
				$(".flex-title").css("text-transform", "none");
				
				
$(".flex-title").css("transform", "rotate(270deg)");
$(".flex-title").css("width", "100%");				
});			
				
			
		}, function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(90)',
				top: '67%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});
})();

$(".home").click(function() {
$('.home').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/test.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".home").mouseleave(function() {
$('.home').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/test.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".home").mouseover(function() {
$('.home').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/test.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".enclassic").click(function() {
  $('.enclassic').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/en_classic.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".enclassic").mouseleave(function() {
  $('.enclassic').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/en_classic.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".enclassic").mouseover(function() {
  $('.enclassic').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/en_classic.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".artdeco").click(function() {
  $('.artdeco').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/art-deco.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".artdeco").mouseleave(function() {
  $('.artdeco').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/art-deco.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".artdeco").mouseover(function() {
  $('.artdeco').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/art-deco.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".borocco").click(function() {
  $('.borocco').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/borocco.jpg)', 'background-size':'cover', 'background-position':'center center', 'background-attachment':'fixed', transition:'1s'});
});

$(".borocco").mouseleave(function() {
  $('.borocco').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/borocco.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".borocco").mouseover(function() {
  $('.borocco').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/borocco.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".loft").click(function() {
  $('.loft').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/loft.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".loft").mouseleave(function() {
  $('.loft').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/loft.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".loft").mouseover(function() {
  $('.loft').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/loft.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".office").click(function() {
  $('.office').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/office_mebel.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".office").mouseleave(function() {
  $('.office').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/office_mebel.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".office").mouseover(function() {
  $('.office').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/office_mebel.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".provans").click(function() {
  $('.provans').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/provans.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".provans").mouseleave(function() {
  $('.provans').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/provans.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".provans").mouseover(function() {
  $('.provans').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/provans.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".sclassic").click(function() {
  $('.sclassic').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/sovremennaya_classica.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".sclassic").mouseleave(function() {
  $('.sclassic').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/sovremennaya_classica.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".sclassic").mouseover(function() {
  $('.sclassic').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/sovremennaya_classica.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".smebel").click(function() {
  $('.smebel').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/sovremennaya_mebel.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".smebel").mouseleave(function() {
  $('.smebel').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/sovremennaya_mebel.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".smebel").mouseover(function() {
  $('.smebel').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/sovremennaya_mebel.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".hitech").click(function() {
  $('.hitech').css({background: 'linear-gradient(rgba(143, 118, 88, 0.2), rgba(143, 118, 88, 0.2)), url(https://www.enterprism.ru/hitech.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".hitech").mouseleave(function() {
  $('.hitech').css({background: 'linear-gradient(rgba(143, 118, 88, 0.7), rgba(143, 118, 88, 0.7)), url(https://www.enterprism.ru/hitech.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});

$(".hitech").mouseover(function() {
  $('.hitech').css({background: 'linear-gradient(rgba(143, 118, 88, 0.4), rgba(143, 118, 88, 0.4)), url(https://www.enterprism.ru/hitech.jpg)', 'background-size':'cover', 'background-position':'left center', 'background-attachment':'fixed', transition:'1s'});
});
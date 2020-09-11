$(document).ready(function(){	
	$('#carrossel').carousel({ interval: 4000 });
	
	$('#atracoes').carousel({ interval: false });
	
	$('#neve').click(function(){
		if($(this).hasClass('ativo')){
			$(this).removeClass('ativo');
			$(document).snowfall('clear');
		}else{
			$(this).addClass('ativo');
			$(document).snowfall({
				flakeColor : '#DDDDDD',
				flakeCount : 50,
				minSize : 1,
				maxSize : 10,			
				round : true,	
				shadow : true
			});
		}
	});
	
	$('#atracoes').on('slide.bs.carousel', function (e) {
		var atual = $(e.relatedTarget).index();
		
		console.log(atual);
		
		$('#atracao-' + atual).show();
		$('[id^=atracao-]:not([id=atracao-' + atual + '])').hide();
	})
	
	$('#atracao-0').each(function(){
		if($('div.active').index() == 0){
			$(this).show();
		}
	});
});

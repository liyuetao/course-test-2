$(function(){
	var aDiv=$('.right_side');
	var oBtn=$('#btn');
	
	aDiv.click(function(){
		$('.show_list').hide();
		$(this).children().eq(1).show();			
		var aLi=$(this).children().eq(1).children();
		var oP=$(this).children().eq(0)[0];
		aLi.click(function(){
			oP.innerHTML=$(this).html();
			$(this).parent().hide();
			$().enabledFn();
			return false;
		});
		return false;
	});
	
	$(document).click(function(){
		$('.show_list').each(function() {
            $(this).hide();
        });
	});
	
	var aP=$('.right_side p');
	var aI=$('.right_side i');
	oBtn.click(function(){
		var arr=['B','A','A','C','C'];
		for(var j=1; j<aP.length; j++){
			aP[j].innerHTML==arr[j-1]?(aI[j].className='icon_r'):(aI[j].className='icon_e');
		}
		
		oBtn.attr('disabled','disabled');
		oBtn.addClass('start').removeClass('end');
		
		$('.show_list').empty();
		$('.show_list').css('border','none');
	});
	
	$.fn.enabledFn=function(){
		for(var j=1; j<aP.length; j++){
			if(aP[j].innerHTML=='')return;
		}
		oBtn.attr('disabled',false);
		oBtn.addClass('end').removeClass('start');
	};

	
	$('#audioPl').toggle(function(){
		$('#sour').attr('src','media/SB_L_16_EDIT.mp3');
	},function(){
		$('#sour').attr('src','');
	});
	$('#sour').hide();
});
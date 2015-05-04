$(function(){
	var aInput=$('.tex');
		
	for(var i=0; i<aInput.length; i++){
		(function(index){
			aInput[i].onclick=function(event){
				if(navigator.platform=='iPad'){
					return;
				}else{
					
					_softkeyboard_(aInput[index],window.top.document.getElementById('skb'));
					
					var this_Top=$(this).position().top;
					var this_Left=$(this).position().left;
					var key_height=$('.keyBox').outerHeight(true)
					var key_width=$('.keyBox').outerWidth(true)
					var padd=1;  
					if($(this).offset().top-$(document).scrollTop()<$(document).height()/2){
						 $('.keyBox').css('top',$(this).position().top+$(this).outerHeight()+padd+'px')
						 
						}
					else{
						$('.keyBox').css('top',$(this).position().top-key_height-padd+'px')
						}
						
					if($(this).offset().left<$(document).width()/2){
						 $('.keyBox').css('left',0)
						}
					else{
						$('.keyBox').css('left',-($(this).position().left-key_width)/2+'px')
						}	
				}
				stopPro(event);
			}	
		})(i);	
	}
  	$(document).click(function(){
  		$('#skb').hide();
  	});
});
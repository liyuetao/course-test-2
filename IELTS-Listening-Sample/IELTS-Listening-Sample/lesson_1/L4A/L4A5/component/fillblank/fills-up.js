

function fillUpBlank(data, number, template, css) {

	function preset(data) {
		for(var i=0; i<data.content.length; i++) {
			var seqs = data.content[i].text.split("#");
			var list = [];
			
			for(var k=0; k<seqs.length; k++) {
				if(seqs[k]=="") continue;
				if (k%2==0) {  
					list.push({
						plain: true,
						text: seqs[k]
					});
				} else {  
					if (seqs[k]=="p") {
						k++;
						list.push({
							p: true,
							text: seqs[k]
						});
					} else {
						list.push(getAnswer(seqs[k]));
					}
				}
			}
			data.content[i].list = list;
			function getAnswer(id) {
				var questions = data.content[i].questions;
				for (var k = 0; k < questions.length; k++) {
					if (questions[k].id==id) {
						return questions[k];
					}
				}
			}
		}
	}
	
	function readFn() {
		var arr=[];
		var seq = 1;
		$(this.container).find(".fb_blank").each(function() {
			arr.push({
				"order" : seq,
				"answer" : $(this).val()
			});
			seq ++;
		});
		if (console) {
			console.log(JSON.stringify(arr));
		}
		return arr;
	}
	
	
	function setFn(answer){
		var arr = answer;
		if (typeof answer == "string") {
			arr = JSON.parse(answer);
		}
		$(this.container).find(".fb_blank").each(function() {
			$(this).val(arr.shift().answer);
		});
	}
	
	
	function refresh(){
		$(this.container).find(".fb_blank").attr("disabled", false).val("").css("background-color", "").css("color", "");
		$(this.container).find('.annotation').hide();
	}
	
	function showAnswer(){
	    this.refresh();
	    $(this.container).find(".fb_blank").each(function() {
			$(this).val($(this).data("answer"));
			$(this).attr("disabled", true);
		});
	}
	
	function answerEqual(val,answer){
		if(typeof answer=='string') {
			if(answer.indexOf(",")>0){
				answer=answer.toLowerCase().split(",");
			}else{
				return val.toLowerCase()==answer.toLowerCase();
			}
		}
		if(answer instanceof Array){
            var isEqual=true;
            var valArr=val.toLowerCase().split(",");
            for(var j=0;j<valArr.length;j++){
                var isValInAnswer=false;
                for(var i=0;i<answer.length;i++){
                    if(valArr[j]==answer[i]){
                        isValInAnswer=true;
                        break;
                    }
                }
                if(!isValInAnswer){
                    isEqual=false;
                    break;
                }
            }
			return isEqual;
		}
	}
	function checkAnswer(){
		$(this.container).find(".fb_blank").each(function() {
			if (!answerEqual($(this).val(),$(this).data("answer"))) {
				$(this).css({'background-color':'red','color':'white'});
			} else {
				$(this).css({'background-color':'green','color':'white'});
			}
			$(this).attr("disabled", true);
		});
		$(this.container).find('.annotation').show();
	}

	function checkFn(answer) {
		var arr = answer;
		if (typeof answer == "string") {
			arr = JSON.parse(answer);
		}
		var result = 1;
		$(this.container).find(".fb_blank").each(function() {
			if (!answerEqual(arr.shift().answer,$(this).data("answer"))) {
				result = 0;
			}
		});
		return result;
    }
	
	var originalJSON = jQuery.extend(true, {}, data);
	
	function render() {
		 preset(data);
	     var div = $(template(data));
	     
	     initKeyboard('skb1')
	     
	     return div;
	     
	     function initKeyboard(kbid, top, left) {
	    	 var aInput=$(div).find('.tex');
	    	 
	    	 for(var i=0; i<aInput.length; i++){
	    		 (function(index){
	    			 aInput[i].onclick=function(event){
	    				 if(navigator.platform=='iPad'){
	    					 return;
	    				 } else {
	    					 
	    					 _softkeyboard_(aInput[index],window.top.document.getElementById(kbid));
	    					 
	    					 if (top && left) {
	    						 $('.keyBox').css('top',top);
	    						 $('.keyBox').css('left',left);
	    						 return;
	    					 }
	    					 
	    					 
	    					 var this_Top=$(this).offset().top;
	    					 var this_Left=$(this).offset().left;
	    					 var key_height=$('.keyBox').outerHeight(true)
	    					 var key_width=$('.keyBox').outerWidth(true)
	    					 var padd=1;  
	    					 if($(this).offset().top-$(document).scrollTop()<$(document).height()/2){
	    						 $('.keyBox').css('top',$(this).offset().top+$(this).outerHeight()+padd+'px')
	    					 } else {
	    						 $('.keyBox').css('top',$(this).offset().top-key_height-padd+'px')
	    					 }
	    					 
	    					 if($(this).offset().left<$(document).width()/2){
	    						 $('.keyBox').css('left',0)
	    					 } else {
	    						 $('.keyBox').css('left',-($(this).position().left-key_width)/2+'px')
	    					 }
	    				 }
	    				 stopPro(event);
	    			 }	
	    		 })(i);	
	    	 }
	    	 $(document).click(function(){
	    		 $('#' + kbid).hide();
	    	 });
	     }
	}
	
	
	 var activityComponent = {
				'data': originalJSON,
		        'container': render(),
		        'readFn': readFn,
		        'setFn': setFn,
		        'refresh': refresh,
		        
		        
		        'showAnswer': showAnswer,
		        'checkAnswer': checkAnswer,
		        'checkFn': checkFn
	 };
	 return activityComponent;
}

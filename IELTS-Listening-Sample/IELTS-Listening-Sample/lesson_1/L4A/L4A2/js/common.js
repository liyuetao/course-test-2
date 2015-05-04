var activityComponents = [];
var activityOrderNumber = 1;
  		
function addActivityComponent(data, func, template) {
	var component = func(data, activityOrderNumber, template);
	activityComponents.push(component);
	activityOrderNumber ++;
	return component;
}
function checkFn(param) {
    var num = activityComponents.length;
    var answers;
    if(typeof param == 'undefined'){
        answers=readFn();
    }else if(param instanceof Array){
        answers=param;
    }else if(typeof param== 'string'){
        answers=JSON.parse(param);
    }
    var arr = [];
    for (var i = 0; i < num; i++) {
        var actComponent = activityComponents[i];
        if(actComponent.checkFn){
            arr.push(actComponent.checkFn(answers[i]));
        }else{
            arr.push(-1);
        }
    }
    return JSON.stringify(arr);
}
function readFn() {
    var num = activityComponents.length;
    var arr = [];
    for (var i = 0; i < num; i++) {
        var actComponent = activityComponents[i];
        arr.push(actComponent.readFn());
    }
    return JSON.stringify(arr);
}

function setFn(str) {
    var arr = JSON.parse(str);
    for (var i = 0, len = arr.length; i < len; i++) {
        var actComponent = activityComponents[i];
        actComponent.setFn(arr[i]);
    }
}

function checkAnswer() {
    activityComponents.forEach(function(actComponent){
        actComponent.checkAnswer();
    });
}

function showAnswer() {
    activityComponents.forEach(function(actComponent){
        actComponent.showAnswer();
    });
}

function refresh() {
    activityComponents.forEach(function(actComponent){
        actComponent.refresh();
    });
}
$.fn.toggleClick = function () {
    var methods = arguments, 
        count = methods.length; 

    
    return this.each(function (i, item) {
        
        var index = 0; 
        $(item).click(function () { 
            return methods[index++ % count].apply($(item), arguments); 
            
        });
    });
};
Handlebars.registerHelper('order_items', function (index, type) {
    if (type == "alpha") {
        return String.fromCharCode(97 + index);
    } else if (type == "ALPHA") {
        return String.fromCharCode(65 + index);
    } else if (type == "Number") {
        return "" + (index + 1);
    } else if (type == "None") {
        return "";
    } else {
        return "" + (index + 1);
    }
});

(function($) {
	$.fn.randomize = function() {
	  return this.each(function() {
	      var $this = $(this);
	      var elems = $this.children();

	      elems.sort(function() { return (Math.round(Math.random())-0.5); });  
	      elems.detach();

	      for(var i=0; i < elems.length; i++) {
	    	  $this.append(elems[i]);      
	      }
	  });    
	}
})(jQuery);

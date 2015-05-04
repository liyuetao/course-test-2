 function _softkeyboard_(target,container){  
        var _ = _softkeyboard_;  
        _.target = target;  
        _.doc = container.ownerDocument;  
        (_.doc.parentWindow||_.doc.defaultView)._softkeyboard_ = _softkeyboard_;  
        _.skb = container;  
        _.skb.innerHTML = _.getkeyshtml();  
        var toggle = (_.skb.style.display == "block");  
        _.skb.style.display = toggle ? "block" : "block";  
        _.preventKey(target); 
        return toggle;  
    }  
   
    function closeKeyBoard()  
    {  
        document.getElementById('skb').style.display = "none";  
    }  
  
    _softkeyboard_.shifted = true;  
    _softkeyboard_.getkeyshtml = function(shifted,event){ 
        stopPro(event); 
        var htm = [], keys = _softkeyboard_.shifted ?   
            ["`1234567890-=","backspace","<br/>","qwertyuiop[]\\","<br/>","asdfghjkl;","'","<br/>","shift","zxcvbnm,./","shift","<br/>"," "] :   
            ["~!@#$%^&*()_+","backspace","<br/>","QWERTYUIOP{}|","<br/>","ASDFGHJKL:",'"',"<br/>","shift","ZXCVBNM<>?","shift","<br/>"," "]; 
        var esp = { 
                "'":'<input type="button" value="\'" onclick="_softkeyboard_.onkeydown(this);" />',  
                '"':"<input type='button' value='\"' onclick='_softkeyboard_.onkeydown(this);' />",  
                " ":'<input type="button" value=" " onclick="_softkeyboard_.onkeydown(this);"  class="space"/>',   
                "<br/>":"<br/>", 
                "backspace":'<input type="button" class="del" value="Delete" onclick="_softkeyboard_.backspace();" />',  
                "shift":'<input type="button"  class="shift" value="Shift" onclick="_softkeyboard_.shifted=!_softkeyboard_.shifted;_softkeyboard_.skb.innerHTML = _softkeyboard_.getkeyshtml();" />' 
        };  
        for(var j = 0; j < keys.length; j++){  
            if(esp[keys[j]]){  
                htm.push(esp[keys[j]]);  
            }  
            else{  
                
                
                for(var i = 0; i < keys[j].length; i++){   
                    htm.push("<input type='button' class='key' value='"+ keys[j].charAt(i)+"' onclick='_softkeyboard_.onkeydown(this);' />");  
                }  
            }  
        }  
        
        return htm.join("");  
    }
    function stopPro(ev) {
        if (ev && ev.stopPropagation) {
          
          ev.stopPropagation();
        } else {
          
          window.event.cancelBubble = true;
        }
      };  
    _softkeyboard_.onkeydown = function(ele,event){ 
        _softkeyboard_.target.value += ele.value;  
        _softkeyboard_.target.focus();
        stopPro(event);
    }  
    _softkeyboard_.backspace = function(event){  
        with(_softkeyboard_.target){  
            value = value.substr(0,value.length-1);  
        } 
        stopPro(event); 
    }  
    _softkeyboard_.addCSSRule = function(key,value){}  
    _softkeyboard_.hide = function(){  
        if(_softkeyboard_.skb){  
            _softkeyboard_.skb.style.display = "none"  
        }  
    }  
    _softkeyboard_.preventKey = function(target){  
        var targetkeydown = function(e){  
            e = window.event?window.event:e;  
            switch(e.keyCode){  
                case 27:
                case 9:
                    _softkeyboard_.hide();  
                    if(window.event){e.returnValue = false;}else{e.preventDefault();}break;  
            }  
        };  
        
    }  
   
    window.top._softkeyboard_=_softkeyboard_;  
    _softkeyboard_.preventKey(window.top.document.body); 
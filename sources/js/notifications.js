//Notifications functions
var mess = {
    "invisible": true,
    "success": {
        "class": "Color's class-name copied to your clipboard.",
        "hex": "Color's hex copied to your clipboard.",
        "rgb": "RGB copied to your clipboard."
    },
    hide: function(){
        addClass(info, "invisible");
        mess.invisible = true;
    },
    show: function(){
        if(mess.invisible){
            removeClass(info, "invisible");
            mess.invisible = false;
            setTimeout(function(){
                mess.hide();
            }, 3000);
        }
    },
    set: function(text){
        info.textContent = text;
    }
};
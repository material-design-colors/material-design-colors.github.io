//Notifications functions
var mess = {
    "success": {
        "class": "Color's class-name copied to your clipboard.",
        "hex": "Color's hex copied to your clipboard.",
        "rgb": "RGB copied to your clipboard."
    },
    "timer": null,
    hide: function(){
        addClass(info, "invisible");
    },
    show: function(){
        clearTimeout(mess.timer);
        removeClass(info, "invisible");
        mess.timer = setTimeout(function(){
            mess.hide();
        }, 3000);
    },
    set: function(text){
        info.textContent = text;
    }
};
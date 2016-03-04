//Notifications functions
var mess = {
    "invisible": true,
    "success": "",
    "success_class": "Color class-name copied to your clipboard.",
    "success_hex": "Color hex copied to your clipboard.",
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
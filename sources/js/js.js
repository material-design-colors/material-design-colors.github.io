var colors = {
        "extended": [
            "red",
            "pink",
            "purple",
            "deep-purple",
            "indigo",
            "blue",
            "light-blue",
            "cyan",
            "teal",
            "green",
            "light-green",
            "lime",
            "yellow",
            "amber",
            "orange",
            "deep-orange"
        ],
        "usual": [
            "brown",
            "grey",
            "blue-grey"
        ]
    },
    rows,
    blocks,
    flag_vertical = false, //flag used for switching display style
    flag_copy_hex = false, //flag used for switching copying classname/hex-color
    switcher_display, //used for switch vertical/horizontal displaying
    switcher_copy, //used for switch classname/color copying
    container, //used for html container
    info; //used for notifications

window.onload = function () {
    container = document.getElementById("container");
    info = document.getElementById("info");
    switcher_display = document.getElementById("switch-display");
    switcher_copy = document.getElementById("switch-copy");

    switcher_display.addEventListener("click", switchDStyle);
    switcher_copy.addEventListener("click", switchCopy);

    //Rendering color-blocks
    colors.extended.forEach(function (color) {
        //Paste extended
        pasteExtended(color);
    });

    //Now paste usual
    colors.usual.forEach(function (color) {
        pasteUsual(color);
    });

    rows = document.getElementsByClassName("row");
    blocks = document.getElementsByClassName("block");

    each(blocks, function(block){
        var this_style = getComputedStyle(block);
        block.setAttribute("data-color-hex", rgb2hex(this_style.backgroundColor));
    });

    //Activate copy to clipboard by click
    var clipboard = new Clipboard('.block');

    clipboard.on('success', function() {
        if(flag_copy_hex){
            mess.set(mess.success_hex);
        }else{
            mess.set(mess.success_class);
        }
        mess.show();
    });

    clipboard.on('error', function() {
        mess.set("Can't copy to clipboard. Please open an issue.");
        mess.show();
    });

    //Show hello info
    mess.show();
};


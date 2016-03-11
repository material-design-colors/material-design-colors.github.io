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
    blocks,
    flag_vertical = false, //flag used for switching display style
    flag_back = false, //flag used for switching back color
    switcher_display, //used for switch vertical/horizontal displaying
    switcher_back, //used for switch background color of page to black
    switcher_copy_rgb, //used for switch rgb copying
    switcher_copy_hex, //used for switch hex copying
    switcher_copy_class, //used for switch class copying
    container, //used for html container
    info; //used for notifications

document.addEventListener('DOMContentLoaded', function () {
    container = document.getElementById("container");
    info = document.getElementById("info");
    switcher_display = document.getElementById("switch-display");
    switcher_back = document.getElementById("switch-back");
    switcher_copy_rgb = document.getElementById("switch-copy-rgb");
    switcher_copy_hex = document.getElementById("switch-copy-hex");
    switcher_copy_class = document.getElementById("switch-copy-class");

    switcher_display.addEventListener("click", switchDStyle);
    switcher_back.addEventListener("click", switchBack);
    switcher_copy_class.addEventListener("click", switchCopy);
    switcher_copy_hex.addEventListener("click", switchCopy);
    switcher_copy_rgb.addEventListener("click", switchCopy);

    //Rendering color-blocks
    colors.extended.forEach(function (color) {
        //Paste extended
        pasteExtended(color);
    });

    //Now paste usual
    colors.usual.forEach(function (color) {
        pasteUsual(color);
    });

    blocks = document.getElementsByClassName("block");

    each(blocks, function (block) {
        var this_style = getComputedStyle(block);
        var hex = rgb2hex(this_style.backgroundColor);
        block.setAttribute("data-color-rgb", this_style.backgroundColor);
        block.setAttribute("data-color-hex", hex);
    });

    //Activate copy to clipboard by click
    var clipboard = new Clipboard('.block');

    clipboard.on('success', function (sender) {
        mess.showSuccess(sender.trigger);
    });

    clipboard.on('error', function () {
        mess.show(mess.text.fail);
    });

    //Show hello info
    //Really I don't know what I'm doing
    setTimeout(function () {
        mess.show(mess.text.hello);
    }, 0);
});


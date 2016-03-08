//Notifications functions
var mess = {
    "text": {
        "success": {
            "class": "Color's class-name copied to your clipboard.",
            "hex": "Color's hex copied to your clipboard.",
            "rgb": "RGB copied to your clipboard."
        },
        "fail": "Can't copy to clipboard. Please open an issue.",
        "hello": "Just click on color block to copy it to the clipboard"
    },
    show: function (mess) {
        'use strict';
        var data = {
            message: mess
        };
        document.getElementById("info").MaterialSnackbar.showSnackbar(data);
    },
    showSuccess: function (sender) {
        switch (sender.getAttribute("data-copy-type")) {
            case "class":
                this.show(mess.text.success.class);
                break;
            case "hex":
                this.show(mess.text.success.hex);
                break;
            case "rgb":
                this.show(mess.text.success.rgb);
                break;
        }
    }
};
//Smooth gradient switcher
function switchBack() {
    var back = document.getElementById("back");
    if (flag_back) {
        removeClass(back, "black");
    } else {
        addClass(back, "black");
    }
    flag_back = !flag_back;
}

//Displaying style switcher
function switchDStyle() {
    var rows = document.getElementsByClassName("row");
    if (flag_vertical) {
        removeClass(container, "flex-center");
        removeClass(container, "flex-vertical-center");

        //rows
        each(rows, function (this_row) {
            addClass(this_row, "flex-center");
        });
    } else {
        addClass(container, "flex-center");
        addClass(container, "flex-vertical-center");

        //rows
        each(rows, function (this_row) {
            removeClass(this_row, "flex-center");
        });
    }
    flag_vertical = !flag_vertical;
}

//Copying switcher
function switchCopy() {
    switch (this.getAttribute("data-option")) {
        case "class":
            setCopy('data-color-class', 'class');
            break;
        case "hex":
            setCopy('data-color-hex', 'hex');
            break;
        case "rgb":
            setCopy('data-color-rgb', 'rgb');
            break;
    }
}

function setCopy(attr, type) {
    each(blocks, function (block) {
        block.setAttribute('data-clipboard-text', block.getAttribute(attr));
        block.setAttribute('data-copy-type', type);
    });
}
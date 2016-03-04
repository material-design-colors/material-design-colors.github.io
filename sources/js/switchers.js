//Displaying style switcher
function switchDStyle(){
    if(flag_vertical){
        removeClass(container, "flex-center");
        removeClass(container, "flex-vertical-center");
        removeClass(container, "container-vertical");

        //rows
        each(rows, function(this_row){
            addClass(this_row, "flex-center");
        });
    }else{
        addClass(container, "flex-center");
        addClass(container, "flex-vertical-center");
        addClass(container, "container-vertical");

        //rows
        each(rows, function(this_row){
            removeClass(this_row, "flex-center");
        });
    }
    flag_vertical = !flag_vertical;
}

//Copying switcher
function switchCopy(){
    switch(this.getAttribute("data-option")){
        case "class":
            mess.set(mess.success.class);
            setCopy('data-color-class');
            break;
        case "hex":
            mess.set(mess.success.hex);
            setCopy('data-color-hex');
            break;
        case "rgb":
            mess.set(mess.success.rgb);
            setCopy('data-color-rgb');
            break;
    }
}

function setCopy(attr){
    each(blocks, function(block){
        block.setAttribute('data-clipboard-text', block.getAttribute(attr));
    });
}
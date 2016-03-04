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
    if(flag_copy_hex){
        each(blocks, function(block){
            block.setAttribute('data-clipboard-text', block.getAttribute('data-color-class'));
        });
    }else{
        each(blocks, function(block){
            block.setAttribute('data-clipboard-text', block.getAttribute('data-color-hex'));
        });
    }
    flag_copy_hex = !flag_copy_hex;
}
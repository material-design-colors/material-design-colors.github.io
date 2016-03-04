//-------------------- Functions
function pasteUsual(color) {
    var this_colors = [];
    for (var i = 50; i < 1000; i = i + 100) {
        //Paste block
        this_colors.push("mdl-color--" + color + "-" + i);

        //for first interaction
        if (i === 50) {
            i = i + 50;
        }
    }

    paste(this_colors);
}

function pasteExtended(color) {
    var this_colors = [];
    var extended = {
        1000 : 700,
        1100 : 400,
        1200 : 200,
        1300 : 100
    };

    for (var i = 50; i < 1400; i = i + 100) {
        if(i < 1000){
            this_colors.push("mdl-color--" + color + "-" + i);
        }else{
            this_colors.push("mdl-color--" + color + "-A" + extended[i]);
        }

        //for first interaction
        if (i === 50) {
            i = i - 50;
        }
    }

    paste(this_colors);
}

function paste(colors) {
    var row = document.createElement('div');
    row.className = "row flex-center";

    colors.forEach(function (color) {
        var block = document.createElement('div');
        block.className = "block " + color;
        block.setAttribute('data-clipboard-text', color);
        block.setAttribute('data-color-class', color);
        row.appendChild(block);
    });

    container.appendChild(row);
}
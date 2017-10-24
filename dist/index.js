// function maketableclickable(){

// }

function turnblue(td) {
    $(td).addClass('blue');
}

function move(x, y) {
    ax = Math.abs(4 - x);
    ay = Math.abs(4 - y);
    if (ax * ay == 0 && ax + ay == 1) {
        f = document.pad;
        f.elements[4 * by + bx].value = f.elements[4 * y + x].value;
        f.elements[4 * y + x].value = '   ';
        bx = x;
        by = y;
        f.msg.value++;
    }
}

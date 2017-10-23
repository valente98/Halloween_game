const $ = require('jquery');
const appRoot = $('#app');

dx = 4;
dy = 4;
function box{ 
for (y = 0; y < 4; y++) {
    $('#boxes').html('<tr id="box">');
    for (x = 0; x < 4; x++) {
        $('#box').html('<td><tt><input type=button value="   " ');
        $('#box').html('onclick="move(' + x + ',' + y + ');"></tt></td>');
    }
    $('#boxes').html('</tr>');
}
}
function move(x, y) {
    ax = Math.abs(bx - x);
    ay = Math.abs(by - y);
    if (ax * ay == 0 && ax + ay == 1) {
        f = $('#boxes').pad;
        f.elements[4 * by + bx].value = f.elements[4 * y + x].value;
        f.elements[4 * y + x].value = '   ';
        bx = x;
        by = y;
        f.msg.value++;
    }
}

// function maketableclickable(){

// }

function turnblue(td) {
    $(td).addClass('blue');
}
function addLetters() {
    var grid = [
        '',
        'H',
        'A',
        'P',
        'P',
        'Y',
        'H',
        'A',
        'L',
        'L',
        'O',
        'W',
        'E',
        'E',
        'N',
        '!'
    ];
    return grid;
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function displayLetters() {
    var arr = shuffle(addLetters());
    var td = $('td');
    var c = 0;
    td.each(function() {
        $(this).html('<h1>' + arr[c] + '</h1>');
        c++;
    });
}

function swap(x, y) {}

displayLetters();

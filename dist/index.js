// function maketableclickable(){

// }
function makeBoard() {
    return shuffle(addLetters());
}

var LETTERS = makeBoard().slice();

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
    var td = $('td');
    var c = 0;
    td.each(function() {
        $(this).html('<h1>' + LETTERS[c] + '</h1>');
        c++;
        $('#count').html('<h3> Moves: ' + count + '</h3');
    });
    if (LETTERS.join('') == 'HAPPYHALLOWEEN!') {
        $('#end-game').html(
            '<h1 id="won">YOU WIN!!</h1><br><center><div><button class="btn" onclick="document.location.reload()">Play Again</button></center></div>'
        );
    }
}
var count = 0;
function swap(x, arr) {
    arr.forEach(function(i) {
        if (LETTERS[i] == '') {
            count += 1;
            LETTERS[i] = LETTERS[x];
            LETTERS[x] = '';
            displayLetters();
            return '';
        }
    });
}

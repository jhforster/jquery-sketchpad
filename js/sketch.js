$(document).ready(function(){
    gridSize = 30;
    drawGrid();
    marker();

    $('[name=marker]').click(function(){
        marker();
    })

    $('[name=multi]').click(function(){
        multi();
    })

    $('[name=eraser]').click(function(){
        eraser();
    })

    $('[name=clear]').click(function(){
        clear();
        gridSize = 30;
        drawGrid();
        marker();
    })

    $('[name=resolution]').click(function(){
        gridSize = prompt("Please enter a between 6 and 64", "16");
        clear();
        drawGrid();
        marker();
    })
});

function drawGrid() {
    for (var i=0; i < gridSize * gridSize; i++) {
        $('.canvas').append('<div class="pixel"></div>');
    }
    $('.pixel').css({
        'width': $('.canvas').width() / gridSize,
        'height': $('.canvas').height() / gridSize
    })
}

function marker() {
    $('.pixel').mouseenter(function(){
        $(this).css("background-color", "#212121")
    })
}

function multi() {
    $('.pixel').mouseenter(function(){
        var rainbowPaint = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$(this).css("background", rainbowPaint);
    })
}

function eraser() {
    $('.pixel').mouseenter(function(){
        $(this).css("background-color", "#f0f0f0")
    })
}

function clear() {
    $('.canvas').empty()
}

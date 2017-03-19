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
        shake();
    })

    $('[name=resolution]').click(function(){
        gridSize = prompt("Please enter a value below 100 (the larger the number, the longer it takes)", "30");
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
    $('.canvas').empty();
}

function reset() {
    clear();
    gridSize = 30;
    drawGrid();
    marker();
}

function shake() {
    $('.canvas').shake({
        direction: "left",
        times: 4,
        speed: 65,
		distance: 70
    });
    setTimeout(reset, 600);
}

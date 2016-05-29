'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');


  $( document ).ready(function() {
    let currentScore;
    let previousScores;

    let playerTurn;

    let newGame = function(){

    };

    let makeMove = function(){

    };

    let board = [
      '<div id="a"> <xmp> <div id="a"></div> </xmp> </div>',
      '<div id="b"> <xmp> <div id="b"></div> </xmp> </div>',
      '<div id="c"> <xmp> <div id="c"></div> </xmp> </div>',
      '<div id="d"> <xmp> <div id="d"></div> </xmp> </div>',
      '<div id="e"> <xmp> <div id="e"></div> </xmp> </div>',
      '<div id="f"> <xmp> <div id="f"></div> </xmp> </div>',
      '<div id="g"> <xmp> <div id="g"></div> </xmp> </div>',
      '<div id="h"> <xmp> <div id="h"></div> </xmp> </div>',
      '<div id="i"> <xmp> <div id="i"></div> </xmp> </div>',
    ];

    var names = ['top-left', 'top-center', 'top-right',
           'middle-left', 'middle-center', 'middle-right',
           'bottom-left', 'bottom-center', 'bottom-right',];

    for (var i = 0; i < board.length; i++) {
      $("#"+ names[i]).html(board[i]);
    };


    let determentEndGame = function (){

    };

  });

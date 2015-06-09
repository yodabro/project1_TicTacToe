board = {

  playerArr: [1, 2],

  boardArr: [
    [],
    [],
    []
  ],

  switchPlayer: function() { /* switching playas */
    this.playerArr.push(this.playerArr.shift());
  },

  horizontalCheck: function(row) { /* checking horizontal squares for win */
    for (var i = 0; i < this.boardArr.length; i++) {
    	// console.log(row);
      if (this.boardArr[row][0].innerHTML !== this.boardArr[row][i].innerHTML || this.boardArr[row][0].innerHTML == "") {
        return false;
      }
    }
    return true;
  },


  verticalCheck: function(column) { /* checks vertical */
    for (var i = 0; i < this.boardArr.length; i++) {
      if (this.boardArr[0][column].innerHTML !== this.boardArr[i][column].innerHTML || this.boardArr[0][column].innerHTML == "") {
        return false;
      }
    }
    return true;
  },

  diagLCheck: function() { /* checks diagonal Left */
    for (var i = 0; i < this.boardArr.length; i++) {
      if (this.boardArr[0][0].innerHTML !== this.boardArr[i][i].innerHTML || this.boardArr[0][0].innerHTML == "") {
        return false;
      }
    }
    return true;
  },


  diagRCheck: function() { /* checks diagonal Right */ /*rewright the function needed*/
    for (var i = 0; i < this.boardArr.length; i++) {
      if (this.boardArr[0][2].innerHTML !== this.boardArr[i][2-i].innerHTML || this.boardArr[0][2].innerHTML == "") {
        return false;
      }
    }
    return true;
  },

  boardInfo: [],

  setEventListener: function() {
    var knopki = document.querySelectorAll('td');
    for (var i = 0; i < knopki.length; i++) {
      this.boardInfo.push(knopki[i])

      for (var k = 0; k < 3; k++) {
        for (var j = 0; j < 3; j++) {
          board.boardArr[k][j] = (board.boardInfo[k * 3 + j]);
        }
      }
      board.boardInfo[i].addEventListener('click', function(event) {
        currentThis = this;
        if (currentThis.innerHTML === "") {
          if (board.playerArr[0] === 1) {
            currentThis.innerHTML = ("<img src='http://vignette1.wikia.nocookie.net/mkwikia/images/f/f3/Scorpion-mk2-fix1.gif/revision/latest?cb=20081004200429'/>");
          } else if (board.playerArr[0] === 2) {
            currentThis.innerHTML = ("<img src='http://vignette3.wikia.nocookie.net/mkwikia/images/3/3c/Subzero-mk2-fix.gif/revision/latest?cb=20081004200559'/>");
          }
          board.switchPlayer();
          board.winnerCheck();
        }
      })
    }
  },

  // Check to see who has won
  winnerCheck: function() {
    for (var i = 0; i < 3; i++) {
      var x = this.horizontalCheck(i);
      var y = this.verticalCheck(i); 
      if (x) {
        alert("Flawless Victory");
      }
      if (y) {
        alert("Victory");
      }
  }
      if (this.diagLCheck()) {
        alert("Left Cross Victory");
      }
      if (this.diagRCheck()) {
        alert("Right Cross Victory");
      }else {
      	(this.tieCheck());
      }
    
    return null;
  },

  // check to see if there is tie
  tieCheck: function() {
    if (this.horizontalCheck() !== true || this.verticalCheck() !== true || this.diagLCheck() !== true || this.diagRCheck() !== true) {
      alert("Tie");
    }
  },
  //reseting everything
  reset: function() {
    var $td = $('td');
    for (var i = 0; i < 9; i++) {
      $($td[i]).html("");
    }
    this.boardArr = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    board.boardInfo = [];
    board.playerArr = [1, 2];
    board.setEventListener();
  },


}
$("#button").on("click", board.reset);



board.setEventListener();
board.reset();
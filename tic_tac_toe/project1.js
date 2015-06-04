board = {

playerArr : [1,2],

boardArr : [[],[]],

switchPlayer : function () {  /* switching playas */
	this.playerArr.push(this.playerArr.shift());
},

horizontalCheck : function (x){   /* checking horizontal squares for win */
	for (var i=0; i<this.boardArr.length;i++) {
		if (this.boardArr[x][0]!==this.boardArr[x][i]) {
			return false;
		}
	} return true;
},


verticalCheck : function (x){ /* checks vertical */
	for (var i=0; i<this.boardArr.length;i++) {
		if (this.boardArr[x][0]!==this.boardArr[i][x]) {
			return false;
			}
	} return true;
},

diagLCheck : function (){ /* checks diagonal Left */
	for (var i=0; i<this.boardArr.length;i++) {
		if (this.boardArr[0][0]!==this.boardArr[i][i]) {
			return false;
		}
	} return true;
},


diagRcheck : function (){  /* checks diagonal Right */
	for (var i=0; i<this.boardArr.length;i++) {
		if (this.boardArr[0][x]!==this.boardArr[i][x-i]){
	 		return false;
		}
	} return true;
},

boardInfo : [],

setEventListener : function () {
	var knopki = document.querySelectorAll('td');
	for (var i=0;i<knopki.length;i++) {

		
		knopki[i].addEventListener('click', function (event) {
			currentThis = this;
			if (currentThis.innerHTML==="") {
				if (board.playerArr[0]===1) {
					currentThis.innerHTML = ("<img src='http://vignette1.wikia.nocookie.net/mkwikia/images/f/f3/Scorpion-mk2-fix1.gif/revision/latest?cb=20081004200429'/>");
				}
				else if (board.playerArr[0]===2) {
					currentThis.innerHTML = ("<img src='http://vignette3.wikia.nocookie.net/mkwikia/images/3/3c/Subzero-mk2-fix.gif/revision/latest?cb=20081004200559'/>");
				}
				board.switchPlayer();
				board.boardInfo.push(knopki[i]);
			}
		})
	}
}
}
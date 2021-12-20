var init = function()
{
	var WHITE_PAWN = '♙'
	var WHITE_ROOK = '♖'
	var WHITE_KNIGHT = '♘'
	var WHITE_BISHOP = '♗'
	var WHITE_QUEEN = '♕'
	var WHITE_KING= '♔'
	var White_piece=[];

	var BLACK_PAWN = '♟'
	var BLACK_ROOK = '♜'
	var BLACK_KNIGHT = '♞'
	var BLACK_BISHOP = '♝'
	var BLACK_QUEEN = '♛'
	var BLACK_KING = '♚'
	var Black_piece=[];

	var noting='';///String.fromCharCode(173);
	var arr;
	var check=0;
	var vi=[];
	var vi_white=[];
	var Turn=1;
	var White_king_move=0;
	var Black_king_move=0;

	Black_piece.push(BLACK_ROOK);
	Black_piece.push(BLACK_KNIGHT);
	Black_piece.push(BLACK_BISHOP);
	Black_piece.push(BLACK_QUEEN);
	Black_piece.push(BLACK_KING);
	Black_piece.push(BLACK_PAWN);

	White_piece.push(WHITE_ROOK);
	White_piece.push(WHITE_KNIGHT);
	White_piece.push(WHITE_BISHOP);
	White_piece.push(WHITE_QUEEN);
	White_piece.push(WHITE_KING);
	White_piece.push(WHITE_PAWN);

	arr=new Array(8);
	for(var i=0;i<8;i++)
	{
		arr[i]=new Array(8);
	}
	
	_piece=[];
	for(var i=0;i<8;i++)
	{
		arr[1][i]=BLACK_PAWN;
		arr[2][i]=noting;
		arr[3][i]=noting;
		arr[4][i]=noting;
		arr[5][i]=noting;
		arr[6][i]=WHITE_PAWN;
	}

	arr[0][0]=BLACK_ROOK;
	arr[0][1]=BLACK_KNIGHT;
	arr[0][2]=BLACK_BISHOP;
	arr[0][3]=BLACK_QUEEN;
	arr[0][4]=BLACK_KING;
	arr[0][5]=BLACK_BISHOP;
	arr[0][6]=BLACK_KNIGHT;
	arr[0][7]=BLACK_ROOK;

	arr[7][0]=WHITE_ROOK;
	arr[7][1]=WHITE_KNIGHT;
	arr[7][2]=WHITE_BISHOP;
	arr[7][3]=WHITE_QUEEN;
	arr[7][4]=WHITE_KING;
	arr[7][5]=WHITE_BISHOP;
	arr[7][6]=WHITE_KNIGHT;
	arr[7][7]=WHITE_ROOK;
	
	return arr;
};
module.exports=init;

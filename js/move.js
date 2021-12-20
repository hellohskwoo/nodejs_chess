function mast(a)
{
	/*var Black_piece=[];
	var White_piece=[];*/
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
	
	
	a=parseInt(a);
	var x=parseInt(a/8);
	var y=parseInt(a%8);
	//alert("mast_turn:"+Turn);
	if(check==1)
	{
		
		_peace=vi[0][2];
		tmp_x=vi[0][0];
		tmp_y=vi[0][1];
		if(_peace==WHITE_KING && x==7 && y==2 && White_king_move==0 && vi[1][0]==7 && vi[1][1]==2)
		{
			arr[tmp_x][tmp_y]=noting;
			arr[x][y]=WHITE_KING;
			arr[7][0]=noting;
			arr[7][3]=WHITE_ROOK;
			Turn=0;
		}
		else if(_peace==WHITE_KING && x==7 && y==6 && White_king_move==0 && vi[1][0]==7 && vi[1][1]==6)
		{
			arr[tmp_x][tmp_y]=noting;
			arr[x][y]=WHITE_KING;
			arr[7][7]=noting;
			arr[7][5]=WHITE_ROOK;
			Turn=0;
		}
		else if(_peace==BLACK_KING && x==0 && y==2 && Black_king_move==0 && vi[1][0]==0 && vi[1][1]==6)
		{
			arr[tmp_x][tmp_y]=noting;
			arr[x][y]=BLACK_KING;
			arr[0][0]=noting;
			arr[0][3]=BLACK_ROOK;
			Turn=0;
		}
		else if(_peace==BLACK_KING && x==0 && y==6 && Black_king_move==0 && vi[1][0]==0 && vi[1][1]==6)
		{
			arr[tmp_x][tmp_y]=noting;
			arr[x][y]=BLACK_KING;
			arr[0][7]=noting;
			arr[0][5]=BLACK_ROOK;
			Turn=1;
		}
		else
		{
			for(var i=1;i<vi.length;i++)
			{
				arr[vi[i][0]][vi[i][1]]=vi[i][2];
				if(x==vi[i][0] && y==vi[i][1])
				{
					arr[tmp_x][tmp_y]=noting;
					arr[x][y]=_peace;
					if(_peace==WHITE_KING) White_king_move=1;
					console.log(Black_piece);
					if(Black_piece.indexOf(_peace)!=-1) Turn=1;
					else Turn=0;
				} 
			}
		}
		
		
		vi=[];
		
		check=0;
		for(var i=0;i<8;i++)
		{
			for(var j=0;j<8;j++)
			{
				document.getElementsByTagName('th')[i*8+j].id=i*8+j;
				document.getElementsByTagName('th')[i*8+j].innerHTML=arr[i][j];
				if((i*8+i+j)%2==0) document.getElementsByTagName('th')[i*8+j].bgColor="#EADAB9";
				else document.getElementsByTagName('th')[i*8+j].bgColor="#9A784F";
				 
			}
		}
		
	}

	if(Turn==0) // 검정색 턴 
	{
		
		if(arr[x][y]==BLACK_PAWN) // 기물:pawn
		{
			pawn_move(x,y);
		}
		else if(arr[x][y]==BLACK_ROOK) // 기물 : rook
		{
			rook_move(x,y,0);
		}
		else if(arr[x][y]==BLACK_BISHOP)
		{
			bishop_move(x,y,0,1);
		}
		else if(arr[x][y]==BLACK_QUEEN)
		{
			rook_move(x,y,0);
			bishop_move(x,y,0,0);
		}
		else if(arr[x][y]==BLACK_KING)
		{
			king_move(x,y,0);
		}
		else if(arr[x][y]==BLACK_KNIGHT)
		{
			knight_move(x,y,0);
		}
	}
	else // 흰색 턴 
	{
		if(arr[x][y]==WHITE_PAWN) // 기물:pawn
		{
			pawn_move(x,y);
		}
		else if(arr[x][y]==WHITE_ROOK)
		{
			rook_move(x,y,1);
		}
		else if(arr[x][y]==WHITE_BISHOP)
		{
			bishop_move(x,y,1,1);
		}
		else if(arr[x][y]==WHITE_QUEEN)
		{

			rook_move(x,y,1);
			bishop_move(x,y,1,0);	
		}
		else if(arr[x][y]==WHITE_KING)
		{
			king_move(x,y,1);
		}
		else if(arr[x][y]==WHITE_KNIGHT)
		{
			knight_move(x,y,1);
		}
	}
	
	
}

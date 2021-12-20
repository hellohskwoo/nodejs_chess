function rook_move(x,y,color_tmp)
{
	if(color_tmp==1)
	{
		vi.push(Array(x,y,arr[x][y]));
		document.getElementsByTagName('th')[(x)*8+y].bgColor='green';
		for(var i=x+1;i<8;i++)
		{
			
			if(White_piece.indexOf(arr[i][y])!=-1) break;
			else if(Black_piece.indexOf(arr[i][y])!=-1)
			{
				vi.push(Array(i,y,arr[i][y]));
				document.getElementsByTagName('th')[(i)*8+y].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(i,y,arr[i][y]));
				document.getElementsByTagName('th')[(i)*8+y].bgColor='green';
			}
		}
		for(var i=x-1;i>=0;i--)
		{
			
			if(White_piece.indexOf(arr[i][y])!=-1) break;
			else if(Black_piece.indexOf(arr[i][y])!=-1)
			{
				vi.push(Array(i,y,arr[i][y]));
				document.getElementsByTagName('th')[(i)*8+y].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(i,y,arr[i][y]));
				document.getElementsByTagName('th')[(i)*8+y].bgColor='green';
			}
		}
		for(var i=y+1;i<8;i++)
		{
			
			if(White_piece.indexOf(arr[x][i])!=-1) break;
			else if(Black_piece.indexOf(arr[x][i])!=-1)
			{
				vi.push(Array(x,i,arr[x][i]));
				document.getElementsByTagName('th')[(x)*8+i].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(x,i,arr[x][i]));
				document.getElementsByTagName('th')[(x)*8+i].bgColor='green';
			}
		}
		for(var i=y-1;i>=0;i--)
		{
			
			if(White_piece.indexOf(arr[x][i])!=-1) break;
			else if(Black_piece.indexOf(arr[x][i])!=-1)
			{
				vi.push(Array(x,i,arr[x][i]));
				document.getElementsByTagName('th')[(x)*8+i].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(x,i,arr[x][i]));
				document.getElementsByTagName('th')[(x)*8+i].bgColor='green';
			}
		}
		check=1;
	}
	else // 기물 : rook
	{
		vi.push(Array(x,y,arr[x][y]));
		document.getElementsByTagName('th')[(x)*8+y].bgColor='green';
		for(var i=x+1;i<8;i++)
		{
			
			if(Black_piece.indexOf(arr[i][y])!=-1) break;
			else if(White_piece.indexOf(arr[i][y])!=-1)
			{
				vi.push(Array(i,y,arr[i][y]));
				document.getElementsByTagName('th')[(i)*8+y].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(i,y,arr[i][y]));
				document.getElementsByTagName('th')[(i)*8+y].bgColor='green';
			}
		}
		for(var i=x-1;i>=0;i--)
		{
			
			if(Black_piece.indexOf(arr[i][y])!=-1) break;
			else if(White_piece.indexOf(arr[i][y])!=-1)
			{
				vi.push(Array(i,y,arr[i][y]));
				document.getElementsByTagName('th')[(i)*8+y].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(i,y,arr[i][y]));
				document.getElementsByTagName('th')[(i)*8+y].bgColor='green';
			}
		}
		for(var i=y+1;i<8;i++)
		{
			
			if(Black_piece.indexOf(arr[x][i])!=-1) break;
			else if(White_piece.indexOf(arr[x][i])!=-1)
			{
				vi.push(Array(x,i,arr[x][i]));
				document.getElementsByTagName('th')[(x)*8+i].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(x,i,arr[x][i]));
				document.getElementsByTagName('th')[(x)*8+i].bgColor='green';
			}
		}
		for(var i=y-1;i>=0;i--)
		{
			
			if(Black_piece.indexOf(arr[x][i])!=-1) break;
			else if(White_piece.indexOf(arr[x][i])!=-1)
			{
				vi.push(Array(x,i,arr[x][i]));
				document.getElementsByTagName('th')[(x)*8+i].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(x,i,arr[x][i]));
				document.getElementsByTagName('th')[(x)*8+i].bgColor='green';
			}
		}
		check=1;

	}
}
function pawn_move(x,y)
{
	if(arr[x][y]==BLACK_PAWN) // 기물:pawn
	{
		if(x==1)
		{

			vi.push(Array(x,y,BLACK_PAWN));
			document.getElementsByTagName('th')[(x)*8+y].bgColor='green';
			for(var i=1;i<=2;i++)
			{
				if(arr[i+1][y]!=noting)
				{
					break;
				}
				vi.push(Array(i+1,y,noting));
				document.getElementsByTagName('th')[(x+i)*8+y].bgColor='green';
			}
			if(y+1<8 &&arr[x+1][y+1]!=noting && Black_piece.indexOf(arr[x+1][y+1])==-1)
			{
				vi.push(Array(x+1,y+1,arr[x+1][y+1]));
				document.getElementsByTagName('th')[(x+1)*8+y+1].bgColor='green';
			}
			if(y-1>=0 && arr[x+1][y-1]!=noting && Black_piece.indexOf(arr[x+1][y-1])==-1)
			{
				vi.push(Array(x+1,y-1,arr[x+1][y-1]));
				document.getElementsByTagName('th')[(x+1)*8+y-1].bgColor='green';
			}
			check=1;
		}
		else 
		{
			vi.push(Array(x,y,BLACK_PAWN));
			document.getElementsByTagName('th')[(x)*8+y].bgColor='green';
			
			if(arr[x+1][y]==noting)
			{
				vi.push(Array(x+1,y,noting));
				document.getElementsByTagName('th')[(x+1)*8+y].bgColor='green';
			}
			if(y+1<8 &&arr[x+1][y+1]!=noting && Black_piece.indexOf(arr[x+1][y+1])==-1)
			{
				vi.push(Array(x+1,y+1,arr[x+1][y+1]));
				document.getElementsByTagName('th')[(x+1)*8+y+1].bgColor='green';
			}
			if(y-1>=0 && arr[x+1][y-1]!=noting && Black_piece.indexOf(arr[x+1][y-1])==-1)
			{
				vi.push(Array(x+1,y-1,arr[x+1][y-1]));
				document.getElementsByTagName('th')[(x+1)*8+y-1].bgColor='green';
			}
			check=1;
		}
	}
	else if(arr[x][y]==WHITE_PAWN) // 기물:pawn
	{
		if(x==6)
		{

			vi.push(Array(x,y,WHITE_PAWN));
			document.getElementsByTagName('th')[(x)*8+y].bgColor='green';
			for(var i=1;i<=2;i++)
			{
				if(arr[6-i][y]!=noting)
				{
					break;
				}
				vi.push(Array(6-i,y,noting));
				document.getElementsByTagName('th')[(x-i)*8+y].bgColor='green';
			}
			if(y+1<8 &&arr[x-1][y+1]!=noting && White_piece.indexOf(arr[x-1][y+1])==-1)
			{
				vi.push(Array(x-1,y+1,arr[x-1][y+1]));
				document.getElementsByTagName('th')[(x-1)*8+y+1].bgColor='green';
			}
			if(y-1>=0 && arr[x-1][y-1]!=noting && White_piece.indexOf(arr[x-1][y-1])==-1)
			{
				vi.push(Array(x-1,y-1,arr[x-1][y-1]));
				document.getElementsByTagName('th')[(x-1)*8+y-1].bgColor='green';
			}
			check=1;
		}
		else
		{
			vi.push(Array(x,y,WHITE_PAWN));
			document.getElementsByTagName('th')[(x)*8+y].bgColor='green';
			if(arr[x-1][y]==noting)
			{
				vi.push(Array(x-1,y,noting));
				document.getElementsByTagName('th')[(x-1)*8+y].bgColor='green';
			}
			if(y+1<8 &&arr[x-1][y+1]!=noting && White_piece.indexOf(arr[x-1][y+1])==-1)
			{
				vi.push(Array(x-1,y+1,arr[x-1][y+1]));
				document.getElementsByTagName('th')[(x-1)*8+y+1].bgColor='green';
			}
			if(y-1>=0 && arr[x-1][y-1]!=noting && White_piece.indexOf(arr[x-1][y-1])==-1)
			{
				vi.push(Array(x-1,y-1,arr[x-1][y-1]));
				document.getElementsByTagName('th')[(x-1)*8+y-1].bgColor='green';
			}
			check=1;
		}
	}
}
function bishop_move(x,y,color_tmp,flag)  // 기물 : bishop
{ 
	if(color_tmp==1)
	{
		if(flag==1)
		{
			vi.push(Array(x,y,arr[x][y]));
			document.getElementsByTagName('th')[(x)*8+y].bgColor='green';
		}
		
		for(var i=1;i<8 && i+x<8 && i+y<8 ;i++)
		{
			
			if(White_piece.indexOf(arr[i+x][i+y])!=-1) break;
			else if(Black_piece.indexOf(arr[i+x][i+y])!=-1)
			{
				vi.push(Array(i+x,i+y,arr[i+x][i+y]));
				document.getElementsByTagName('th')[(i+x)*8+i+y].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(i+x,i+y,arr[i+x][i+y]));
				document.getElementsByTagName('th')[(i+x)*8+i+y].bgColor='green';
			}
		}
		for(var i=1;i<8 && i+x<8 && y-i>=0;i++)
		{
			
			if(White_piece.indexOf(arr[i+x][y-i])!=-1) break;
			else if(Black_piece.indexOf(arr[i+x][y-i])!=-1)
			{
				vi.push(Array(i+x,y-i,arr[i+x][y-i]));
				document.getElementsByTagName('th')[(i+x)*8+y-i].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(i+x,y-i,arr[i+x][y-i]));
				document.getElementsByTagName('th')[(i+x)*8+y-i].bgColor='green';
			}
		}
		for(var i=1;i<8 && x-i>=0 && i+y<8;i++)
		{
			
			if(White_piece.indexOf(arr[x-i][i+y])!=-1) break;
			else if(Black_piece.indexOf(arr[x-i][i+y])!=-1)
			{
				vi.push(Array(x-i,i+y,arr[x-i][i+y]));
				document.getElementsByTagName('th')[(x-i)*8+i+y].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(x-i,i+y,arr[x-i][i+y]));
				document.getElementsByTagName('th')[(x-i)*8+i+y].bgColor='green';
			}
		}
		for(var i=1;i<8 && x-i>=0 && y-i>=0;i++)
		{
			
			if(White_piece.indexOf(arr[x-i][y-i])!=-1) break;
			else if(Black_piece.indexOf(arr[x-i][y-i])!=-1)
			{
				vi.push(Array(x-i,y-i,arr[x-i][y-i]));
				document.getElementsByTagName('th')[(x-i)*8+y-i].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(x-i,y-i,arr[x-i][y-i]));
				document.getElementsByTagName('th')[(x-i)*8+y-i].bgColor='green';
			}
		}
		check=1;
	}
	else // 기물 : black_bishop
	{
		if(flag==1)
		{
			vi.push(Array(x,y,arr[x][y]));
			document.getElementsByTagName('th')[(x)*8+y].bgColor='green';
		}
		
		for(var i=1;i<8 && i+y<8 && i+x<8;i++)
		{
			
			if(Black_piece.indexOf(arr[i+x][i+y])!=-1) break;
			else if(White_piece.indexOf(arr[i+x][i+y])!=-1)
			{
				vi.push(Array(i+x,i+y,arr[i+x][i+y]));
				document.getElementsByTagName('th')[(i+x)*8+i+y].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(i+x,i+y,arr[i+x][i+y]));
				document.getElementsByTagName('th')[(i+x)*8+i+y].bgColor='green';
			}
		}
		for(var i=1;i<8 && i+x<8 && y-i>=0;i++)
		{
			
			if(Black_piece.indexOf(arr[i+x][y-i])!=-1) break;
			else if(White_piece.indexOf(arr[i+x][y-i])!=-1)
			{
				vi.push(Array(i+x,y-i,arr[i+x][y-i]));
				document.getElementsByTagName('th')[(i+x)*8+y-i].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(i+x,y-i,arr[i+x][y-i]));
				document.getElementsByTagName('th')[(i+x)*8+y-i].bgColor='green';
			}
		}
		for(var i=1;i<8 && x-i>=0 && i+y<8;i++)
		{
			
			if(Black_piece.indexOf(arr[x-i][i+y])!=-1) break;
			else if(White_piece.indexOf(arr[x-i][i+y])!=-1)
			{
				vi.push(Array(x-i,i+y,arr[x-i][i+y]));
				document.getElementsByTagName('th')[(x-i)*8+i+y].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(x-i,i+y,arr[x-i][i+y]));
				document.getElementsByTagName('th')[(x-i)*8+i+y].bgColor='green';
			}
		}
		for(var i=1;i<8 && x-i>=0 && y-i>=0;i++)
		{
			
			if(Black_piece.indexOf(arr[x-i][y-i])!=-1) break;
			else if(White_piece.indexOf(arr[x-i][y-i])!=-1)
			{
				vi.push(Array(x-i,y-i,arr[x-i][y-i]));
				document.getElementsByTagName('th')[(x-i)*8+y-i].bgColor='green';
				break;
			}
			else
			{
				vi.push(Array(x-i,y-i,arr[x-i][y-i]));
				document.getElementsByTagName('th')[(x-i)*8+y-i].bgColor='green';
			}
		}
		check=1;

	}
}
function king_move(x,y,color_tmp)
{
	if(color_tmp==1)
	{
		
		check=1;
		vi.push(Array(x,y,arr[x][y]));
		document.getElementsByTagName('th')[(x)*8+y].bgColor='green';
		if(White_king_move==0)
		{
			if(arr[7][0]==WHITE_ROOK && arr[7][1]==noting && arr[7][2]==noting && arr[7][3]==noting)
			{
				vi.push(Array(7,2,arr[7][2]));
				document.getElementsByTagName('th')[(7)*8+2].bgColor='green';
			}
			if(arr[7][7]==WHITE_ROOK && arr[7][5]==noting && arr[7][6]==noting)
			{
				vi.push(Array(7,6,arr[7][6]));
				document.getElementsByTagName('th')[(7)*8+6].bgColor='green';
			}
		}
		for(var i=-1;i<=1;i++)
		{
			for(var j=-1;j<=1;j++)
			{
				if((i==0 && j==0) || !(x+i>=0 && x+i<8) || !(y+j>=0 && y+j<8)) continue;
				if(White_piece.indexOf(arr[x+i][y+j])!=-1) continue;
				vi.push(Array(x+i,y+j,arr[x+i][y+j]));
				document.getElementsByTagName('th')[(x+i)*8+y+j].bgColor='green';
			
			}
		}
		
	}
	else 
	{
		check=1;
		vi.push(Array(x,y,arr[x][y]));
		document.getElementsByTagName('th')[(x)*8+y].bgColor='green';
		if(Black_king_move==0)
		{
			if(arr[0][0]==BLACK_ROOK && arr[0][1]==noting && arr[0][2]==noting && arr[0][3]==noting)
			{
				vi.push(Array(0,2,arr[0][2]));
				document.getElementsByTagName('th')[(0)*8+2].bgColor='green';
			}
			if(arr[0][7]==BLACK_ROOK && arr[0][5]==noting && arr[0][6]==noting)
			{
				vi.push(Array(0,6,arr[0][6]));
				document.getElementsByTagName('th')[(0)*8+6].bgColor='green';
			}
		}
		for(var i=-1;i<=1;i++)
		{
			for(var j=-1;j<=1;j++)
			{
				if((i==0 && j==0) || !(x+i>=0 && x+i<8) || !(y+j>=0 && y+j<8)) continue;
				if(Black_piece.indexOf(arr[x+i][y+j])!=-1) continue;
				vi.push(Array(x+i,y+j,arr[x+i][y+j]));
				document.getElementsByTagName('th')[(x+i)*8+y+j].bgColor='green';
			
			}
		}
		
	}
}
function knight_move(x,y,color_tmp)
{
	if(color_tmp==1)
	{
		vi.push(Array(x,y,arr[x][y]));
		document.getElementsByTagName('th')[(x)*8+y].bgColor='green';
		if(x+2<8 && y+1<8 && White_piece.indexOf(arr[x+2][y+1])==-1)
		{
			vi.push(Array(x+2,y+1,arr[x+2][y+1]));
			document.getElementsByTagName('th')[(x+2)*8+y+1].bgColor='green';
		}
		if(x+1<8 && y+2<8 && White_piece.indexOf(arr[x+1][y+2])==-1)
		{
			vi.push(Array(x+1,y+2,arr[x+1][y+2]));
			document.getElementsByTagName('th')[(x+1)*8+y+2].bgColor='green';
		}

		if(x-1>=0 && y+2<8 && White_piece.indexOf(arr[x-1][y+2])==-1)
		{
			vi.push(Array(x-1,y+2,arr[x-1][y+2]));
			document.getElementsByTagName('th')[(x-1)*8+y+2].bgColor='green';
		}
		if(x-2>=0 && y+1<8 && White_piece.indexOf(arr[x-2][y+1])==-1)
		{
			vi.push(Array(x-2,y+1,arr[x-2][y+1]));
			document.getElementsByTagName('th')[(x-2)*8+y+1].bgColor='green';
		}

		if(x+2<8 && y-1>=0 && White_piece.indexOf(arr[x+2][y-1])==-1)
		{
			vi.push(Array(x+2,y-1,arr[x+2][y-1]));
			document.getElementsByTagName('th')[(x+2)*8+y-1].bgColor='green';
		}
		if(x+1<8 && y-2>=0 && White_piece.indexOf(arr[x+1][y-2])==-1)
		{
			vi.push(Array(x+1,y-2,arr[x+1][y-2]));
			document.getElementsByTagName('th')[(x+1)*8+y-2].bgColor='green';
		}

		if(x-2>=0 && y-1>=0 && White_piece.indexOf(arr[x-2][y-1])==-1)
		{
			vi.push(Array(x-2,y-1,arr[x-2][y-1]));
			document.getElementsByTagName('th')[(x-+2)*8+y-1].bgColor='green';
		}
		if(x-1>=0 && y-2>=0 && White_piece.indexOf(arr[x-1][y-2])==-1)
		{
			vi.push(Array(x-1,y-2,arr[x-1][y-2]));
			document.getElementsByTagName('th')[(x-1)*8+y-2].bgColor='green';
		}
		check=1;
	}
	else
	{
		vi.push(Array(x,y,arr[x][y]));
		document.getElementsByTagName('th')[(x)*8+y].bgColor='green';
		if(x+2<8 && y+1<8 && Black_piece.indexOf(arr[x+2][y+1])==-1)
		{
			vi.push(Array(x+2,y+1,arr[x+2][y+1]));
			document.getElementsByTagName('th')[(x+2)*8+y+1].bgColor='green';
		}
		if(x+1<8 && y+2<8 && Black_piece.indexOf(arr[x+1][y+2])==-1)
		{
			vi.push(Array(x+1,y+2,arr[x+1][y+2]));
			document.getElementsByTagName('th')[(x+1)*8+y+2].bgColor='green';
		}

		if(x-1>=0 && y+2<8 && Black_piece.indexOf(arr[x-1][y+2])==-1)
		{
			vi.push(Array(x-1,y+2,arr[x-1][y+2]));
			document.getElementsByTagName('th')[(x-1)*8+y+2].bgColor='green';
		}
		if(x-2>=0 && y+1<8 && Black_piece.indexOf(arr[x-2][y+1])==-1)
		{
			vi.push(Array(x-2,y+1,arr[x-2][y+1]));
			document.getElementsByTagName('th')[(x-2)*8+y+1].bgColor='green';
		}

		if(x+2<8 && y-1>=0 && Black_piece.indexOf(arr[x+2][y-1])==-1)
		{
			vi.push(Array(x+2,y-1,arr[x+2][y-1]));
			document.getElementsByTagName('th')[(x+2)*8+y-1].bgColor='green';
		}
		if(x+1<8 && y-2>=0 && Black_piece.indexOf(arr[x+1][y-2])==-1)
		{
			vi.push(Array(x+1,y-2,arr[x+1][y-2]));
			document.getElementsByTagName('th')[(x+1)*8+y-2].bgColor='green';
		}

		if(x-2>=0 && y-1>=0 && Black_piece.indexOf(arr[x-2][y-1])==-1)
		{
			vi.push(Array(x-2,y-1,arr[x-2][y-1]));
			document.getElementsByTagName('th')[(x-+2)*8+y-1].bgColor='green';
		}
		if(x-1>=0 && y-2>=0 && Black_piece.indexOf(arr[x-1][y-2])==-1)
		{
			vi.push(Array(x-1,y-2,arr[x-1][y-2]));
			document.getElementsByTagName('th')[(x-1)*8+y-2].bgColor='green';
		}
		check=1;
	}
}
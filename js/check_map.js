function check_map(a,b)
{
	console.log(a);
	console.log(b);
	for(var i=0;i<8;i++)
	{
		for(var j=0;j<8;j++)
		{
			if(a[i][j]!=b[i][j])
			{
				return 0;
			}
		}
	}
	return 1;
}

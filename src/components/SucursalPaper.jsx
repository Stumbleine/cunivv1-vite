import React from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Box } from '@mui/system';
import { grey } from '@mui/material/colors';
function SucursalPaper({ sucursal, sayHello }) {
	const sucursaL = sucursal;
	return (
		<Paper
			sx={{
				display: 'flex',
				alignItems: 'center',
				width: '90%',
				minWidth: 200,
				minHeight: 60,
				background: grey[50],
			}}>
			<Box sx={{ ml: 2 }}>
				<Typography variant="body1">{sucursaL.name}</Typography>
				<Typography variant="body2">{sucursaL.address} </Typography>
			</Box>
			<Box>
				<IconButton onClick={() => sayHello('puta')}>
					<Edit></Edit>
				</IconButton>
				<IconButton>
					<Delete></Delete>
				</IconButton>
			</Box>
		</Paper>
	);
}

export default SucursalPaper;

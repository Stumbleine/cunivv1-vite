import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { grey } from '@mui/material/colors';
import AddBusiness from '../components/AddBusiness';
export default function Business() {
	return (
		<Box component="main" sx={{ background: grey[50] }}>
			<Container maxWidth="xl" sx={{ background: 'grey' }}>
				<AddBusiness></AddBusiness>
			</Container>
		</Box>
	);
}

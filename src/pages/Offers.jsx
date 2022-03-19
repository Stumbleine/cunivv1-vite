import { Container, Grid, Typography, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import AddOfferDialog from '../components/AddOfferDialog';
import OfferCard from '../components/OfferCard';
export default function Offers() {
	const offers = useSelector((state) => state.offers.offers);
	return (
		<Box component="main" sx={{ background: grey[100] }}>
			<Container maxWidth="xl" sx={{ background: 'grey' }}>
				<Box sx={{ background: 'white' }}>
					<Typography variant="h4" sx={{ mb: 2 }}>
						Ofertas
					</Typography>
					<Stack
						direction="row"
						flexWrap="wrap-reverse"
						alignItems="center"
						justifyContent="flex-end"
						sx={{ mb: 5, background: 'blue' }}>
						<AddOfferDialog />
						<Stack
							direction="row"
							spacing={1}
							flexShrink={0}
							sx={{ background: 'grey' }}>
							<Box>FILTER</Box>
						</Stack>
					</Stack>
				</Box>
				<Grid
					container
					spacing={2}
					sx={{
						background: 'pink',
						display: 'flex',
						justifyContent: 'center',
					}}>
					{offers.map((offer, id = offer.id) => (
						<Grid item key={id} sx={{ display: 'flex', justifyContent: 'end' }}>
							<OfferCard offer={offer}></OfferCard>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}

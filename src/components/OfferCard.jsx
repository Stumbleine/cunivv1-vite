import { Delete, Edit, OpenInFull } from '@mui/icons-material';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material';
import React from 'react';

import OfferContent from './OfferContent';

export default function OfferCard(props) {
	const offer = props.offer;

	return (
		<>
			<Card sx={{ width: 240, height: 270, bgcolor: 'background.paper' }}>
				<OfferContent offer={offer}>
					<CardMedia
						component="img"
						alt="green iguana"
						height="140"
						image={offer.image}
					/>
					<CardContent sx={{ p: 1, height: 90 }}>
						<Typography
							gutterBottom
							component="div"
							variant="subtitle1"
							sx={{ lineHeight: '25px' }}>
							{offer.title}
						</Typography>
						<Typography gutterBottom component="div" variant="body2">
							{offer.discount} descuento
						</Typography>
					</CardContent>{' '}
				</OfferContent>
				<CardActions sx={{ p: 0, justifyContent: 'end' }}>
					<IconButton size="small">
						<Edit
							sx={{
								color: 'text.icon',
								'&:hover': {
									color: 'primary.main',
								},
							}}></Edit>
					</IconButton>
					<IconButton size="small">
						<Delete
							sx={{
								color: 'text.icon',
								'&:hover': {
									color: 'primary.main',
								},
							}}
						/>
					</IconButton>
				</CardActions>
			</Card>
		</>
	);
}

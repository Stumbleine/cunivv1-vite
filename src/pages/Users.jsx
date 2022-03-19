import { Container, Grid, Typography, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import AddOfferDialog from '../components/AddOfferDialog';
import OfferCard from '../components/OfferCard';
import UsersTable from '../components/UsersTable';
export default function Users() {
	return (
		<Box component="main">
			<Container maxWidth="xl">
				<UsersTable></UsersTable>
			</Container>
		</Box>
	);
}

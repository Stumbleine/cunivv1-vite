import { Delete, Label } from '@mui/icons-material';
import {
	Container,
	Stack,
	Typography,
	Button,
	Card,
	TableContainer,
	Table,
	TableBody,
	TableRow,
	TableCell,
	Avatar,
	IconButton,
	TableHead,
	TableSortLabel,
	TablePagination,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useSelector } from 'react-redux';
function UsersTable() {
	const users = useSelector((state) => state.users.users);

	const TABLE_HEAD = [
		{ id: 'name', label: 'Name', alignRight: false },
		{ id: 'role', label: 'Role', alignRight: false },
		{ id: 'entidad', label: 'Entidad', alignRight: false },
		{ id: 'verificado', label: 'Verificado', alignRight: false },
		{ id: 'estado', label: 'Estado', alignRight: false },
		{ id: '' },
	];
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [selected, setSelected] = useState([]);
	const [page, setPage] = useState(0);
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};
	const handleChangeRowsPerPage = (event) => {
		console.log('CantPerpage', event.target.value);
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	return (
		<Box>
			<Container>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					mb={5}>
					<Typography variant="h4" gutterBottom>
						User
					</Typography>
					<Button variant="contained" to="#">
						Crear Usuario
					</Button>
				</Stack>
				<Card>
					<TableContainer sx={{ minWidth: 800 }}>
						<Table>
							<TableHead>
								<TableRow>
									{TABLE_HEAD.map((cell) => (
										<TableCell key={cell.id}>
											<TableSortLabel hideSortIcon>{cell.label}</TableSortLabel>
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{users
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((user, index = user.id) => (
										<TableRow key={index} hover>
											<TableCell component="th" scope="row">
												<Stack direction="row" alignItems="center" spacing={2}>
													<Avatar alt={user.name} src={user.avatar} />
													<Box>
														<Typography variant="subtitle2" noWrap>
															{user.name}
														</Typography>

														<Typography variant="subtitle2" noWrap>
															{user.email}
														</Typography>
													</Box>
												</Stack>
											</TableCell>
											<TableCell align="left">{user.role}</TableCell>
											<TableCell align="left">{user.entidad}</TableCell>
											<TableCell align="left">{user.verificado}</TableCell>
											<TableCell align="left">
												<Label
													variant="ghost"
													color={
														(user.estado === 'offline' && 'error') || 'success'
													}>
													{user.estado}
												</Label>
											</TableCell>
											<TableCell align="right">
												<IconButton>
													<Delete></Delete>
												</IconButton>
											</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[5, 10]}
						component="div"
						count={users.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Card>
			</Container>
		</Box>
	);
}

export default UsersTable;

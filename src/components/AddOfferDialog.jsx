import {
	Button,
	CardActionArea,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Slide,
	TextField,
	Box,
	FormControl,
	Select,
	MenuItem,
	InputAdornment,
	Icon,
	InputLabel,
	Typography,
} from '@mui/material';
import { grey, pink } from '@mui/material/colors';
import { useEffect, useState, forwardRef } from 'react';
import { Image } from '@mui/icons-material';
const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function AddOfferDialog(props) {
	const [open, setOpen] = useState(false);
	const [discountType, setdiscountType] = useState(10);
	const handlediscountType = (event) => {
		setdiscountType(event.target.value);
	};
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<Button variant="contained" onClick={handleClickOpen}>
				Nueva oferta
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
				sx={{ minWidth: 500 }}>
				<DialogTitle sx={{ color: 'primary.main' }}>Nueva oferta</DialogTitle>

				<DialogContent sx={{}}>
					<Box
						sx={{
							display: 'flex',
							mt: 1,
							width: '100%',
						}}>
						<Box sx={{ width: '50%' }}>
							<TextField
								required
								variant="outlined"
								label="titulo"
								placeholder="Titulo de oferta"
								autoFocus
								InputProps={{
									style: {
										color: grey[800],
									},
								}}
								sx={{ width: '100%' }}
							/>
						</Box>
						<Box sx={{ ml: 2, width: '50%' }}>
							<TextField
								required
								variant="outlined"
								label="imagen"
								autoFocus
								InputProps={{
									style: {
										color: grey[800],
									},
									endAdornment: (
										<Icon>
											<Image></Image>
										</Icon>
									),
								}}
								sx={{ width: '100%' }}
							/>
						</Box>
					</Box>
					<Box
						sx={{
							display: 'flex',
							mt: 3,
							width: '100%',
						}}>
						<Box sx={{ width: '50%' }}>
							<InputLabel>Fecha inicio *</InputLabel>
							<TextField
								required
								variant="outlined"
								type="date"
								placeholder="Titulo de oferta"
								autoFocus
								InputProps={{
									style: {
										color: grey[800],
									},
								}}
								sx={{ width: '100%' }}
							/>
						</Box>
						<Box sx={{ width: '50%', ml: 2 }}>
							<InputLabel>Fecha fin *</InputLabel>
							<TextField
								required
								variant="outlined"
								type="date"
								placeholder="Titulo de oferta"
								autoFocus
								InputProps={{
									style: {
										color: grey[800],
									},
								}}
								sx={{ width: '100%' }}
							/>
						</Box>
					</Box>
					<Box sx={{ mt: 3, width: '100%' }}>
						<InputLabel>Tipo de descuento *</InputLabel>

						<Box
							sx={{
								display: 'flex',

								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<TextField
								required
								variant="outlined"
								placeholder={discountType === 30 ? 'ejem: lleva 2x1 ..' : ''}
								autoFocus
								InputProps={{
									style: {
										color: grey[800],
									},
									startAdornment:
										discountType === 10 ? (
											<InputAdornment position="start">%</InputAdornment>
										) : discountType === 20 ? (
											<InputAdornment position="start">Bs.</InputAdornment>
										) : (
											<></>
										),
								}}
								sx={{ width: '75%' }}
							/>
							<FormControl>
								<Select
									sx={{ minWidth: 130, width: '25%' }}
									value={discountType}
									onChange={handlediscountType}
									inputProps={{ 'aria-label': 'Without label' }}>
									<MenuItem value={10}>porcentaje</MenuItem>
									<MenuItem value={20}>monto</MenuItem>
									<MenuItem value={30}>descriptivo</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</Box>
					<Box sx={{ mt: 3, width: '100%' }}>
						<TextField
							required
							label="Descripcion sobre la oferta"
							variant="outlined"
							autoFocus
							multiline
							InputProps={{
								style: {
									color: grey[800],
								},
							}}
							sx={{ width: '100%' }}
						/>
					</Box>
					<Box sx={{ mt: 3, width: '100%' }}>
						<TextField
							variant="outlined"
							label="Condiciones de canje"
							autoFocus
							multiline
							InputProps={{
								style: {
									color: grey[800],
								},
							}}
							sx={{ width: '100%' }}
						/>
					</Box>
					{/* Productos... */}
					<Box sx={{ mt: 3, width: '100%' }}>
						<TextField
							required
							label="Lista de productos"
							variant="outlined"
							autoFocus
							multiline
							InputProps={{
								style: {
									color: grey[800],
								},
							}}
							sx={{ width: '100%' }}
						/>
					</Box>

					{/* adasdasda */}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cerrar</Button>
					<Button onClick={handleClose}>Guardar</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default AddOfferDialog;

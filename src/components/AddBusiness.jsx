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
function AddBusiness() {
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<Button variant="contained" onClick={handleClickOpen}>
				Agregar Empresa
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
				sx={{ minWidth: 500 }}>
				<DialogTitle sx={{ color: 'primary.main' }}>Nueva Empresa</DialogTitle>
				<DialogContent>
					<Typography>Datos de la empresa</Typography>
					<Box
						sx={{
							display: 'flex',
							mt: 2,
							width: '100%',
						}}>
						<Box sx={{ width: '50%' }}>
							<TextField
								required
								variant="outlined"
								label="Razon social"
								placeholder="nombre de la empresa/institucion"
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
								label="logo"
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
							<TextField
								required
								variant="outlined"
								label="NIT"
								placeholder="codigo nit"
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
								label="telefono"
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
					<Box sx={{ height: 200, mt: 3 }}>
						<Button variant="contained">Añadir Sucursales</Button>
					</Box>
					<Typography>Social</Typography>
					<Box sx={{ width: '100%', mt: 1 }}>
						<TextField
							size="small"
							variant="outlined"
							label="instagram"
							placeholder="@username"
							autoFocus
							InputProps={{
								style: {
									color: grey[800],
								},
							}}
							sx={{ width: '100%' }}
						/>
					</Box>
					<Box sx={{ width: '100%', mt: 3 }}>
						<TextField
							size="small"
							variant="outlined"
							label="facebook"
							placeholder="url-fb"
							autoFocus
							InputProps={{
								style: {
									color: grey[800],
								},
							}}
							sx={{ width: '100%' }}
						/>
					</Box>
				</DialogContent>
			</Dialog>
		</>
	);
}

export default AddBusiness;

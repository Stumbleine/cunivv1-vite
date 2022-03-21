import {
	Container,
	Typography,
	TextField,
	InputLabel,
	FormControl,
	Select,
	MenuItem,
	InputAdornment,
	Paper,
	Stack,
	TableRow,
	TableCell,
	Button,
	Card,
	IconButton,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { grey, orange, pink, cyan } from '@mui/material/colors';
import { Add, Camera, Delete, Edit, Image } from '@mui/icons-material';
import AddSucursal from '../../components/AddSucursal';
import SucursalPaper from '../../components/SucursalPaper';
function AddProviderPage() {
	const [listSucursal, setListSucursal] = useState([]);
	const [uploadHover, setUploadHover] = useState(false);
	const [logo, setLogo] = useState(null);
	const handleChangeLogo = (e) => {
		console.log(e.target.files);
		setLogo(URL.createObjectURL(e.target.files[0]));
	};
	const handleAddSucursal = (sucursal) => {
		setListSucursal([...listSucursal, sucursal]);
	};
	const sayHello = (data) => {
		console.log('HELLOOOOO', data);
	};
	useEffect(() => {
		console.log('SUCURSALES-REG=>', listSucursal);
	}, [listSucursal]);

	return (
		<Box component="main">
			<Container
				sx={{
					background: grey[200],
					mx: 'auto',
				}}>
				<Box>
					<Typography>Crear nuevo proveedor</Typography>
				</Box>
				<Box sx={{ display: 'flex', maxWidth: 1000 }}>
					{/* primer panel(logo y titulos) */}
					<Card sx={{ minWidth: 350, maxWidth: 450, p: 2 }}>
						<Box
							sx={{
								width: '100%',
								minHeight: 210,
								display: 'center',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<label htmlFor="contained-button-file">
								<TextField
									type="file"
									required
									multiple
									accept="image/*"
									id="contained-button-file"
									onChange={handleChangeLogo}
									sx={{ display: 'none' }}
								/>
								<Box
									sx={{
										width: 200,
										height: 200,
										border: 1,
										borderStyle: 'dashed',
										borderRadius: '50%',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}>
									<Box
										component="span"
										onMouseOver={() => setUploadHover(true)}
										onMouseLeave={() => setUploadHover(false)}
										sx={{
											width: '90%',
											height: '90%',
											display: 'flex',
											justifyContent: 'center',
											cursor: 'pointer',
											alignItems: 'center',
											borderRadius: '50%',
											position: 'relative',
											background: grey[200],
										}}>
										{logo === null ? (
											<Box
												sx={{
													textAlign: 'center',
												}}>
												<Image></Image>
												<Typography>Subir logo</Typography>
											</Box>
										) : (
											<Box
												component="img"
												src={logo}
												style={{
													width: '100%',
													height: '100%',
													borderRadius: '100%',
													backgroundRepeat: 'no-repeat',
													backgroundSize: 'cover',
													backgroundPosition: 'center',
												}}
												sx={{ zIndex: 'modal' }}></Box>
										)}
										{uploadHover && logo != null ? (
											<Box
												sx={{
													width: '100%',
													height: '100%',
													background: 'rgba(31, 30, 31, 0.3)',

													zIndex: 'tooltip',
													borderRadius: '50%',
													position: 'absolute',
													textAlign: 'center',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
												}}>
												<Box>
													<Image sx={{ color: 'white' }}></Image>
													<Typography sx={{ color: 'white' }}>
														Subir logo
													</Typography>
												</Box>
											</Box>
										) : (
											<></>
										)}
									</Box>
								</Box>
							</label>
						</Box>
						<Box sx={{ width: '100%', textAlign: 'center' }}>
							<Typography variant="body2" sx={{ color: grey[700] }}>
								imagenes de 300x200 y formato *.png *.jpg
							</Typography>

							<Typography variant="body2" sx={{ color: grey[700] }}>
								tamaño max. 3 MB
							</Typography>
						</Box>
						<Box sx={{}}>
							<TextField
								required
								variant="outlined"
								label="Razon social"
								placeholder="razon social de la empresa"
								autoFocus
								InputProps={{
									style: {
										color: grey[900],
									},
								}}
								sx={{ width: '100%', mt: 2 }}
							/>
							<TextField
								required
								variant="outlined"
								label="Descripcion"
								placeholder="Descripcion"
								autoFocus
								InputProps={{
									style: {
										color: grey[900],
									},
								}}
								sx={{ width: '100%', mt: 2 }}
							/>
							<TextField
								required
								variant="outlined"
								label="NIT"
								placeholder="nit del negocio"
								autoFocus
								InputProps={{
									style: {
										color: grey[900],
									},
								}}
								sx={{ width: '100%', mt: 2 }}
							/>
							<TextField
								required
								variant="outlined"
								label="telefono"
								placeholder="telefono"
								autoFocus
								InputProps={{
									style: {
										color: grey[900],
									},
								}}
								sx={{ width: '100%', mt: 2 }}
							/>
							<Typography>Social</Typography>
							<TextField
								required
								size="small"
								variant="outlined"
								label="facebook"
								autoFocus
								InputProps={{
									style: {
										color: grey[900],
									},
								}}
								sx={{ width: '100%', mt: 1 }}
							/>
							<TextField
								required
								size="small"
								variant="outlined"
								label="instagram"
								autoFocus
								InputProps={{
									style: {
										color: grey[900],
									},
								}}
								sx={{ width: '100%', mt: 2 }}
							/>
						</Box>
					</Card>

					{/* segundo panel */}
					<Card
						sx={{
							minWidth: 500,
							maxWidth: 700,
							p: 2,
							background: 'white',
							display: 'flex',
							justifyContent: 'space-between',
							flexDirection: 'column',
							direction: 'row',
							ml: 1,
						}}>
						<Box sx={{}}>
							{/* Agregar sucurusales */}
							<Box sx={{ width: '100%', background: 'green' }}>
								<Box
									sx={{
										background: 'pink',
									}}>
									<Typography>Sucursales </Typography>
									<Stack
										direction="column"
										spacing={1}
										sx={{
											alignItems: 'center',
											border: 1,
											borderColor: grey[100],
											p: 1,
											maxHeight: 250,
											background: grey[50],
											overflowY: 'scroll',
										}}>
										{listSucursal.length != 0 ? (
											listSucursal.map((sucursal, index) => (
												<SucursalPaper
													sucursal={sucursal}
													key={index}
													sayHello={sayHello}
												/>
											))
										) : (
											<Typography>
												Es necesario agregar al menos 1 sucursal
											</Typography>
										)}
									</Stack>
									<Box
										sx={{
											width: '100%',
											textAlign: 'end',
											alignSelf: 'flex-end',
										}}>
										<AddSucursal
											handleAddSucursal={handleAddSucursal}></AddSucursal>
									</Box>
								</Box>
							</Box>

							<Box sx={{ width: '100%', mt: 1 }}>
								<Box sx={{}}>
									<Typography>Productos </Typography>
									<Stack
										direction="column"
										spacing={1}
										sx={{
											alignItems: 'center',
											border: 1,
											borderColor: grey[100],
										}}>
										{[1, 2, 3, 4].map((n, index) => (
											<Paper
												key={index}
												sx={{
													display: 'flex',
													alignItems: 'center',
													width: '90%',
													minWidth: 200,
													minHeight: 60,
													background: grey[50],
												}}>
												<Box sx={{ ml: 2 }}>
													<Typography variant="body1">
														NombreSucursal
													</Typography>
													<Typography variant="body2">
														direccion: av.asdasdadasd
													</Typography>
												</Box>
											</Paper>
										))}
									</Stack>
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								display: 'flex',
								width: '100%',
								justifyContent: 'end',
								background: grey[50],
							}}>
							<Button size="small">Cancelar</Button>
							<Button size="small" sx={{ ml: 2 }} variant="contained">
								Crear Empresa??
							</Button>
						</Box>
					</Card>
				</Box>
			</Container>
		</Box>
	);
}

export default AddProviderPage;

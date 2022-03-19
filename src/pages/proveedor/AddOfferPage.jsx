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
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState, forwardRef } from 'react';

import { grey, orange, pink, cyan } from '@mui/material/colors';
import { CheckBox, Image } from '@mui/icons-material';
export default function AddOfferPage() {
	const [discountType, setdiscountType] = useState(10);
	const handlediscountType = (event) => {
		setdiscountType(event.target.value);
	};
	const [uploadHover, setUploadHover] = useState(false);
	const handleChangeimage = (e) => {
		console.log(e.target.files);
		setimage(URL.createObjectURL(e.target.files[0]));
	};
	const [image, setimage] = useState(null);
	return (
		<Box component="main">
			<Container maxWidth="xl" sx={{ height: '92vh', background: grey[800] }}>
				<Box>
					<Typography>Crear nueva oferta</Typography>
				</Box>
				<Box sx={{ display: 'flex', width: 1, background: pink[600] }}>
					{/* primer panel(image y titulos) */}
					<Card sx={{ minWidth: 400, p: 2 }}>
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
									onChange={handleChangeimage}
									sx={{ display: 'none' }}
								/>

								<Box
									component="span"
									onMouseOver={() => setUploadHover(true)}
									onMouseLeave={() => setUploadHover(false)}
									sx={{
										width: 380,
										height: 210,
										display: 'flex',
										justifyContent: 'center',
										cursor: 'pointer',
										alignItems: 'center',
										borderRadius: 10,
										position: 'relative',
										background: grey[200],
									}}>
									{image === null ? (
										<Box
											sx={{
												textAlign: 'center',
											}}>
											<Image></Image>
											<Typography>Subir imagen</Typography>
										</Box>
									) : (
										<Box
											component="img"
											src={image}
											style={{
												width: '100%',
												height: '100%',
												borderRadius: 10,
												backgroundRepeat: 'no-repeat',
												backgroundSize: 'cover',
												backgroundPosition: 'center',
											}}
											sx={{ zIndex: 'modal' }}></Box>
									)}
									{uploadHover && image != null ? (
										<Box
											sx={{
												width: '100%',
												height: '100%',
												background: 'rgba(31, 30, 31, 0.3)',

												zIndex: 'tooltip',
												borderRadius: 10,
												position: 'absolute',
												textAlign: 'center',
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}>
											<Box>
												<Image sx={{ color: 'white' }}></Image>
												<Typography sx={{ color: 'white' }}>
													Subir imagen
												</Typography>
											</Box>
										</Box>
									) : (
										<></>
									)}
								</Box>
							</label>
						</Box>
						<Box sx={{ width: '100%', textAlign: 'center', mt: 1 }}>
							<Typography variant="body2" sx={{ color: grey[700] }}>
								imagenes de 500x300 y formato *.png *.jpg
							</Typography>

							<Typography variant="body2" sx={{ color: grey[700] }}>
								tamaño max. 3 MB
							</Typography>
						</Box>
						{/* datos de la oferta */}
						<Box sx={{}}>
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
								sx={{ width: '100%', mt: 2 }}
							/>
							<Box sx={{ mt: 2, width: '100%' }}>
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
										placeholder={
											discountType === 30 ? 'ejem: lleva 2x1 ..' : ''
										}
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
										sx={{ width: '60%' }}
									/>
									<FormControl sx={{ width: '40%' }}>
										<Select
											sx={{ width: '100%' }}
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
						</Box>
					</Card>

					{/* segundo panel */}
					<Card
						sx={{
							minWidth: 600,
							maxWidth: 700,
							p: 2,
							background: 'white',
							display: 'flex',
							justifyContent: 'space-between',
							flexDirection: 'column',
							direction: 'row',
							ml: 1,
						}}>
						<Box sx={{ display: 'flex' }}>
							<Box sx={{ width: '50%', p: 1 }}>
								<Box sx={{ width: '100%' }}>
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
									<Box sx={{ width: '100%', mt: 2 }}>
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
									<Box sx={{ mt: 3, width: '100%' }}>
										<TextField
											required
											label="Descripcion de productos y ofertas"
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
								</Box>
							</Box>
							<Box sx={{ width: '50%', p: 1 }}>
								<Box sx={{}}>
									<Typography>Sucursales </Typography>
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
												<CheckBox sx={{ ml: 1 }} />
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
								Crear Oferta
							</Button>
						</Box>
					</Card>
				</Box>
			</Container>
		</Box>
	);
}

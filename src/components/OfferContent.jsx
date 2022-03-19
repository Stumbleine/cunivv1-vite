import {
	Button,
	CardActionArea,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Slide,
	CardMedia,
} from '@mui/material';
import React from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
function OfferContent(props) {
	const [open, setOpen] = React.useState(false);
	const offer = props.offer;
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<CardActionArea onClick={handleClickOpen}>
				{' '}
				{props.children}
			</CardActionArea>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description">
				<DialogTitle>{offer.title}</DialogTitle>
				<DialogContent>
					<CardMedia
						component="img"
						alt="green iguana"
						height="140"
						image={offer.image}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cerrar</Button>
					<Button onClick={handleClose}>Guardar</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default OfferContent;

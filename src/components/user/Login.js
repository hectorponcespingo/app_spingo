import React, { useState } from 'react';

// * IMPORT IMG LOGO SPINGO
import spingo_logo from '../../assets/img/general/spingo-logo-light.png';


// * IMPORTS MATERIAL UI - LOGIN
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// * IMPORT MATERIAL UI ALERT TOAST
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const theme = createTheme();

export const Login = () => {

	// * HOOKS
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState ("");
	const [open, setOpen] = useState(false);

	
	// * FUNCTIONS

	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

    const handleSubmit = (event) => {
		event.preventDefault();

		// Get Data User
        const data = new FormData(event.currentTarget);

		setEmail(data.get('email'));
		setPassword(data.get('password'));

		// Show Toast
		setOpen(true);

        console.log({
			email: data.get('email'),
			password: data.get('password'),
        });
		
    };

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	
	const Copyright = (props) => {
		return (
			<Typography variant="body2" color="text.secondary" align="center" {...props}>
				{'Derechos Reservados © '}
				<Link color="inherit" href="https://spingo.mx/">
					SpinGo
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		);
	}

    return (
		
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
					<img src={spingo_logo} className="img-logo" alt="logo-spingo" />

					<Typography component="h1" variant="h5">
						Iniciar Sesión
					</Typography>

					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

						<TextField margin="normal" required fullWidth id="email" label="Correo Electrónico" name="email" autoComplete="email" autoFocus />

						<TextField margin="normal" required fullWidth name="password" label="Contraseña" type="password" id="password" autoComplete="current-password" />
						
						<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordarme" />
						
						<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} > Iniciar Sesión </Button>
					
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2"> ¿Has olvidado tu contraseña? </Link> 
							</Grid>
							<Grid item> 
								<Link href="#" variant="body2"> {"¿No tienes una cuenta? Registrate"} </Link>
							</Grid>
						</Grid>
					</Box>
				</Box>

				<Copyright sx={{ mt: 8, mb: 4 }} />

			</Container>

			
			<Stack spacing={2} sx={{ width: '100%' }}>
				<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical : "top", horizontal : "center" }}>
					<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
						¡Bienvenido {email} {password}!
					</Alert>
				</Snackbar>
			</Stack>


      	</ThemeProvider>
    )
}

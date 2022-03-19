import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { lightTheme } from './theme';
import Home from './pages/Home';
import Business from './pages/Business';
import Offers from './pages/Offers';
import Users from './pages/Users';
import Cashiers from './pages/Cashiers';
import NavBar from './components/NavbBar';
import AddOfferPage from './pages/proveedor/AddOfferPage';
import AddProviderPage from './pages/admin/AddProviderPage';
function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<NavBar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/empresas" element={<Business />} />
					<Route path="/ofertas" element={<Offers />} />
					<Route path="/estudiantes" element={<Users />} />
					<Route path="/cajeros" element={<Cashiers />} />
					<Route path="/proveedor/nueva-oferta" element={<AddOfferPage />} />
					<Route path="/admin/nuevo-proveedor" element={<AddProviderPage />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;

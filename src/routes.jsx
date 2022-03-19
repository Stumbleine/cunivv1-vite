import { Navigate, useRoutes } from 'react-router-dom';
import NavbBar from './components/NavbBar';
import Business from './pages/Business';
import Cashiers from './pages/Cashiers';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Offers from './pages/Offers';
import Products from './pages/Products';
import Users from './pages/Users';

export default function Router() {
	return useRoutes([
		{
			path: '/',
			element: <NavbBar></NavbBar>,
			children: [
				{ path: 'inicio', element: <Home /> },
				{ path: 'ofertas', element: <Offers /> },
				{ path: 'productos', element: <Products /> },
				{ path: 'empresas', element: <Business /> },
				{ path: 'estudiantes', element: <Users /> },
				{ path: 'cajeros', element: <Cashiers /> },
				{ path: '404', element: <NotFound /> },
			],
		},
		{ path: '*', element: <Navigate to="/404" replace /> },
	]);
}

import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <div>Login Page Placeholder</div>,
  },
  {
    path: '/cadastro',
    element: <div>Signup Page Placeholder</div>,
  },
]);

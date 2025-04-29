import { RouteObject } from 'react-router-dom';
import Home from '../../views/Home';

const sharedRoutes: RouteObject[] = [
  { path: '/about', element: <AboutPage /> },
  { path: '/contact', element: <ContactPage /> },
];

export default sharedRoutes;

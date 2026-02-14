import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import { RouteTransition } from './components/motion/RouteTransition';
import { SiteLayout } from './components/SiteLayout';
import HomePage from './pages/HomePage';
import SectorPage from './pages/SectorPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutContactPage from './pages/AboutContactPage';

const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <RouteTransition>
        <Outlet />
      </RouteTransition>
    </SiteLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const sectorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sector/$sectorId',
  component: SectorPage,
});

const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/$productId',
  component: ProductDetailPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutContactPage,
});

const routeTree = rootRoute.addChildren([indexRoute, sectorRoute, productRoute, aboutRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

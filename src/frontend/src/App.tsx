import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ServicesPage from "./pages/ServicesPage";

// ── Root route renders the shared Layout shell ──────────────────────────────
const rootRoute = createRootRoute({
  component: () => <Layout />,
  notFoundComponent: () => (
    <main className="flex flex-col items-center justify-center min-h-[50vh] gap-4 text-center px-4">
      <h1
        className="text-4xl font-bold font-display"
        style={{ color: "oklch(0.52 0.23 253)" }}
      >
        404
      </h1>
      <p className="text-lg" style={{ color: "rgba(0,0,0,0.60)" }}>
        Page not found.
      </p>
      <a
        href="/"
        className="px-5 py-2 rounded text-sm font-semibold text-white transition-colors"
        style={{ backgroundColor: "oklch(0.52 0.23 253)" }}
      >
        Back to Home
      </a>
    </main>
  ),
});

// All page components imported above

// ── Individual routes ────────────────────────────────────────────────────────
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
});

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$productSlug",
  component: ProductDetailPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const serviceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/$serviceSlug",
  component: ServiceDetailPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

// ── Route tree ───────────────────────────────────────────────────────────────
const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  productsRoute,
  productDetailRoute,
  servicesRoute,
  serviceDetailRoute,
  contactRoute,
]);

// ── Router ───────────────────────────────────────────────────────────────────
export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default router;

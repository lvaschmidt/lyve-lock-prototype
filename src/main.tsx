import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import {
  Router,
  Route,
  RootRoute,
  RouterProvider,
  Outlet,
} from "@tanstack/react-router";
import { Home } from "./Home.tsx";
import { Lot } from "./Lot.tsx";
import { SearchResults } from "./SearchResults.tsx";
import { Search } from "./Search.tsx";

const rootRoute = new RootRoute();

const mapRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "map",
  component: () => (
    <App>
      <Outlet />
    </App>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => mapRoute,
  path: "/",
  component: Home,
});

const lotRoute = new Route({
  getParentRoute: () => mapRoute,
  path: "lot/$id",
  component: Lot,
});

const searchResultRoute = new Route({
  getParentRoute: () => mapRoute,
  path: "search/$query",
  component: SearchResults,
});

const searchRoute = new Route({
  getParentRoute: () => mapRoute,
  path: "search",
  component: Search,
});

const routeTree = rootRoute.addChildren([
  mapRoute.addChildren([indexRoute, lotRoute, searchRoute, searchResultRoute]),
]);
export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

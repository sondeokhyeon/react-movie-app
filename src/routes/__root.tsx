import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-[100vh] h-full">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});

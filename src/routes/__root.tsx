import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-[100vh] h-full">
      <Outlet />
    </div>
  ),
});

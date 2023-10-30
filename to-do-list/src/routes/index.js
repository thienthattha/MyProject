import Home from "~/pages/Home";
import Page1 from "~/pages/Page1";
import Page2 from "~/pages/Page2";

// Public routes
export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Page1", component: Page1, layout: null },
  { path: "/Page2", component: Page2, layout: null },
];

export const privateRoutes = [];

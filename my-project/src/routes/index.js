import Homes from "~/pages/Home";
import Page1 from "~/pages/Page1";
import Page2 from "~/pages/Page2";
import ToDOLists from "~/pages/ToDoLists";

// Public routes
export const publicRoutes = [
  { path: "/", component: Homes },
  { path: "/Page1", component: Page1, layout: null },
  { path: "/Page2", component: Page2, layout: null },
  { path: "/ToDOLists", component: ToDOLists, layout: null },
];

export const privateRoutes = [];

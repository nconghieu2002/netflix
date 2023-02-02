import Home from "pages/Home";
import Detail from "pages/Detail";

import Test from "pages/Test";

//Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/detail", component: Detail },
  { path: "/test", component: Test, layout: null },
  //them layout neu muon co layout rieng
];

//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };

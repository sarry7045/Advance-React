import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Links from "./Components/ReactRouterDom/Links";
import Home from "./Components/ReactRouterDom/Home";
// import About from "./Components/ReactRouterDom/About";
import Products from "./Components/ReactRouterDom/Products";
import Feature from "./Components/ReactRouterDom/Feature";
import New from "./Components/ReactRouterDom/New";
import Users from "./Components/ReactRouterDom/Users";
import UserDetails from "./Components/ReactRouterDom/UserDetails";
import UserAdmin from "./Components/ReactRouterDom/UserAdmin";
import NoMatch from "./Components/ReactRouterDom/NoMatch";
const LazyAbout = React.lazy(() => import("./Components/ReactRouterDom/About"))

function App() {
  return (
    <>
      <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<React.Suspense fallback="Loading..."><LazyAbout /></React.Suspense>} />
        <Route path="/products" element={<Products />}>
          <Route index element={<Feature />} />
          {/* index is for the default page in products page - its called relative links */}
          <Route path="feature" element={<Feature />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />} >
        <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<UserAdmin />} />
          </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

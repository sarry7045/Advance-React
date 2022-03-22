import React from "react";
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
// import Profile from "./Components/ReactRouterDom/Profile";
// import { Auth } from "./Components/ReactRouterDom/Auth";
// import Login from "./Components/ReactRouterDom/Login";
import NoMatch from "./Components/ReactRouterDom/NoMatch";
import Navbar from "./Components/Navbar";
import MaterialComponents from "./Components/Material-UI/MaterialComponents";
import OtherThings from "./Components/ReactLogics/OtherThings";
const LazyAbout = React.lazy(() => import("./Components/ReactRouterDom/About"));

function App() {
  return (
    <>
      {/* <Auth> */}
      <Navbar />

      <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/products" element={<Products />}>
          <Route index element={<Feature />} />
          {/* index is for the default page in products page - its called relative links */}
          <Route path="feature" element={<Feature />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<UserAdmin />} />
        </Route>
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/otherthings" element={<OtherThings />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/materialcomponents" element={<MaterialComponents />} />
      </Routes>
      {/* </Auth> */}
    </>
  );
}

export default App;

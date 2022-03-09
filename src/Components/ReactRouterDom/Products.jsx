import React from "react";
import { Link, Outlet } from "react-router-dom";

// outlet is use for the multiple pages routing  like example -  localhost:3000/products/new or feature

const Products = () => {
  return (
    <>
      <nav>
        <div>
          <Link to="feature"> Featured</Link>

          {/* if we use /feature then page is redirect to direct feature page  */}
        </div>
        <div>
          <Link to="new">New</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;

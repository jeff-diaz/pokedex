import React from "react";

import { Outlet, useNavigate } from "react-router";

function AppLayout() {
  const shouldRedirect = true;

  const navigate = useNavigate();

  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default AppLayout;

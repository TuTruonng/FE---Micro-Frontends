import React, { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Hamburger from "../Hamburger";
import Header from "../Header";
import TopSection from "../TopSection";
import Footer from "../Footer";
import FormFeedback from "@/screens/FormFeedback";

const fallbackComponent = () => {
  return (
    <div style={{ width: '100px', height: '100px', backgroundColor: '#cccccc' }}></div>
  )
}


function Layout() {

  const location = useLocation();

  useEffect(() => {
    ($("select") as any).niceSelect();
  }, []);

  useEffect(() => {
    document.getElementsByTagName("BODY")[0].scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div>
      {/* {loading && (
        <div className="background-fade"/>
      )} */}
      <Hamburger />
      <Header />
      <div className="container">
        <TopSection />
        <Suspense fallback={fallbackComponent()}>
          <Outlet />
        </Suspense>
        <FormFeedback />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

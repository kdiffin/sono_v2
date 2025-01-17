import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

function Layout() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

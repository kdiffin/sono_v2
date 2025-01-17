import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";

function Layout() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
}

export default Layout;

import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  p-4 px-6 bg-background border-b border-border">
      <div className="text-2xl flex items-center gap-2  font-bold text-foreground">
        <img
          src="logo.png"
          className="w-6 h-6 hover:rotate-[110deg] transition  mt-1"
        />
        <Link to="/">
          <span className="text-primary">S</span>O
          <span className="text-primary">N</span>O
        </Link>
      </div>

      <div>
        <Avatar>
          <AvatarFallback>br</AvatarFallback>
          <AvatarImage src="" />
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;

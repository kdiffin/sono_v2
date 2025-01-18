import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Login from "@/components/auth";

const Navbar = () => {
  return (
    <div className="flex border-b border-border justify-center items-center">
      <nav className="flex items-center container justify-between  p-4 px-6 bg-background ">
        <div className="text-2xl flex items-center gap-2  font-bold text-foreground">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                src="/logo.png"
                className="w-6 h-6  hover:rotate-[110deg] transition  mt-1"
              />
            </DropdownMenuTrigger>
            {/* TODO ADD NAVIGATION TO LEADERBOARD PAGE */}
            <DropdownMenuContent className="ml-4 ">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Work in progress</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/" className="group   hover:underline underline-offset-4">
            <span className="text-primary">S</span>O
            <span className="text-primary ">N</span>O
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Login />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

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

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  p-4 px-6 bg-background border-b border-border">
      <div className="text-2xl flex items-center gap-2  font-bold text-foreground">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              src="/logo.png"
              className="w-6 h-6  hover:rotate-[110deg] transition  mt-1"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-4 ">
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Recent C</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link to="/" className="group   hover:underline underline-offset-4">
          <span className="text-primary">S</span>O
          <span className="text-primary ">N</span>O
        </Link>
      </div>

      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {/*  TODO: ADD LINK HERE. */}
              <Avatar>
                <AvatarFallback>br</AvatarFallback>
                <AvatarImage src="" />
              </Avatar>
            </TooltipTrigger>
            <TooltipContent className="mr-2">
              <p>Your profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </nav>
  );
};

export default Navbar;

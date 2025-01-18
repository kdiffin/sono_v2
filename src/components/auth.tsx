// Login.tsx
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import useAuth from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogIn, LogOutIcon } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Auth: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Reference to the user document in Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef); // Get the user document

      if (!userDoc.exists()) {
        // If the user does not exist, create a new document
        await setDoc(userDocRef, {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          aura: 0,
          participatedEventsIDs: [],
        });
      } else {
        // If the user exists, update their displayName, email, and photoURL
        await setDoc(
          userDocRef,
          {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          },
          { merge: true }
        ); // Use merge to update only specific fields
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      {user ? (
        <div className="flex items-center gap-2">
          <Button variant={"destructive"} size={"icon"} onClick={logout}>
            <LogOutIcon />
          </Button>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to={"/profile/" + user.uid}>
                  <Avatar>
                    <AvatarFallback>
                      {user.displayName![0] ?? ""}
                    </AvatarFallback>
                    <AvatarImage
                      className="rounded-full h-10 w-10"
                      src={user.photoURL ?? ""}
                    />
                  </Avatar>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="mr-2">
                <p>Your profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ) : (
        <Button size={"icon"} onClick={handleLogin}>
          <LogIn />
        </Button>
      )}
    </>
  );
};

export default Auth;

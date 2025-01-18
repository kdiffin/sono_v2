// HomeLeaderboard.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase"; // Adjust the import path as necessary
import useAuth from "@/hooks/useAuth"; // Adjust the import path as necessary
import { cn } from "@/lib/utils"; // Adjust the import path as necessary
import { Sparkles } from "lucide-react";
import { Link } from "react-router";

interface User {
  aura: number;
  displayName: string;
  email: string;
  participatedEventsIDs: string[];
  photoURL: string;
}

export function HomeLeaderboard() {
  const [users, setUsers] = useState<any[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const userDocs = await getDocs(usersCollection);
      const usersData = userDocs.docs.map((doc) => ({
        id: doc.id, // Include the document ID if needed
        ...doc.data(),
      })) as any[];
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  // Sort users by aura in descending order
  const sortedParticipants = [...users].sort((a, b) => b.aura - a.aura);

  return (
    <div className="">
      {sortedParticipants.length > 0 ? (
        <ul>
          {sortedParticipants.map((participant, i) => (
            <li
              key={participant.email}
              className={cn(
                "flex p-4 items-center flex-wrap  rounded-2xl mb-2",
                i % 2 === 0 ? "bg-muted" : ""
              )}
            >
              <img
                src={participant.photoURL}
                alt={participant.displayName}
                className="w-10 h-10 rounded-full mr-2"
              />
              <Link to={"/profile/" + participant.id}>
                <span className="font-semibold hover:underline underline-offset-4">
                  {participant.displayName}
                </span>
              </Link>

              <span className="ml-auto rounded-md p-2 px-4 bg-primary text-white font-semibold flex items-center gap-2">
                <Sparkles size={16} />
                {participant.aura} Aura
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="italic text-muted-foreground">
          No participants for this event yet.
        </p>
      )}
    </div>
  );
}

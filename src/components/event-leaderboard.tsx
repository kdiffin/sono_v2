// EventLeaderboard.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { EVENTS } from "@/data";
import useAuth from "@/hooks/useAuth";
import { db } from "@/firebase";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { Link } from "react-router";

interface User {
  aura: number;
  displayName: string;
  email: string;
  participatedEventsIDs: string[];
  photoURL: string;
}

export function EventLeaderboard({ id }: { id: string }) {
  const [users, setUsers] = useState<any[]>([]);
  const { user } = useAuth();
  const event = EVENTS.find((event) => event.id === id); // Find the event by ID

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const userDocs = await getDocs(usersCollection);
      const usersData = userDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as any[];
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  if (!event) {
    return <div className="p-4">Event not found</div>;
  }

  // Filter users who participated in the event
  const participants = users.filter((user) =>
    user.participatedEventsIDs.includes(id)
  );

  const sortedParticipants = participants.sort((a, b) => b.aura - a.aura);

  return (
    <div className="flex  flex-col flex-wrap border-2 border-primary  border-dashed rounded-sm p-8 justify-between gap-6">
      <h2 className="text-2xl font-semibold  mb-2">
        Leaderboard for {event.title}
      </h2>
      <div className="">
        {sortedParticipants.length > 0 ? (
          <ul>
            {sortedParticipants.map((participant, i) => (
              <li
                key={participant.email}
                className={cn(
                  "flex p-4 rounded-2xl  items-center mb-2",
                  i % 2 == 0 ? "bg-muted" : ""
                )}
              >
                <img
                  src={participant.photoURL}
                  alt={participant.displayName}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <Link to={"/profile/" + participant.id}>
                  <span className="font-semibold hover:underline underline-offset-4 ">
                    {participant.displayName}
                  </span>
                </Link>
                <span className="ml-auto rounded-md p-2 px-4 bg-primary text-white font-semibold flex items-center gap-2">
                  <Sparkles size={16} />
                  {participant.aura} Aura
                </span>{" "}
              </li>
            ))}
          </ul>
        ) : (
          <p className="italic text-muted-foreground">
            No participants for this event yet.
          </p>
        )}
      </div>
    </div>
  );
}

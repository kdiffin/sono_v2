import { DifficultyBadge } from "@/components/event-card";
import { EventLeaderboard } from "@/components/event-leaderboard";
import ImageCustom from "@/components/image-custom";
import { Badge } from "@/components/ui/badge";
import { EVENTS } from "@/data";
import { db } from "@/firebase";
import useAuth from "@/hooks/useAuth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Plus, Sparkles, User2Icon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useToast } from "@/hooks/use-toast";

const EventPage = () => {
  const { id } = useParams(); // Get the event ID from the URL parameters
  const event = EVENTS.find((event) => event.id === id); // Find the event by ID
  const [showClaim, setShowClaim] = React.useState(false);
  const { user } = useAuth();
  const [auraLoading, setAuraLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  if (!event) {
    return <div className="p-4">Event not found</div>; // Handle case where event is not found
  }

  async function claimAura() {
    setAuraLoading(true);
    const userDocRef = doc(db, "users", user?.uid ?? "");
    const userReal = await getDoc(userDocRef);
    const userData = userReal.data();
    if (userData) {
      setDoc(
        userDocRef,
        {
          aura: userData.aura + event!.aura,
          participatedEventsIDs: [...userData.participatedEventsIDs, event?.id],
        },
        { merge: true }
      );
    }
    toast({
      title: "+ " + event?.aura + " Aura! ✨",
      description: "Thanks for saving the earth! 🌎",
    });

    setAuraLoading(false);
    navigate(`/profile/${user?.uid}`);
  }

  return (
    <div className="p-4 justify-center flex flex-col  items-center">
      <div className="container">
        <div className="mb-4">
          <ImageCustom
            src={event.image}
            className="h-64 rounded-t-md w-full object-cover"
            alt=""
          />
        </div>

        <div className="flex items-center flex-wrap border-2 border-secondary border-dashed rounded-sm p-8 justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold  mb-2">{event.title}</h1>
            <p className="text-muted-foreground max-w-xl ">
              {event.description}
            </p>
            <div className="flex gap-1 flex-wrap   mt-3 items-center">
              <DifficultyBadge difficulty={event.difficulty} />
              <Badge variant="default">
                <Sparkles size={12} /> <Plus size={12} />
                {event.aura} Aura
              </Badge>
              <Badge variant="secondary">
                <User2Icon size={12} /> {event.author}
              </Badge>
            </div>
          </div>

          <div className="items-center flex flex-wrap   gap-2">
            <label
              className={
                `${user === null ? "bg-muted  " : " "} ` +
                "w-32 h-32 bg-primary   p-4 transition hover:bg-primary/80 text-white flex flex-col justify-center items-center rounded-md cursor-pointer"
              }
            >
              <input
                disabled={user === null || event.disabled}
                type="file"
                accept="image/*"
                onChange={() => setShowClaim(true)}
                className="hidden" // Hide the default file input
              />
              <Plus size={24} className="justify-center mt-auto items-center" />
              <p className="font-semibold text-xs text-center mt-auto">
                {!user ? "LOGIN TO PARTICIPATE" : "UPLOAD PROOF OF COMPLETION"}
              </p>
            </label>

            <button
              onClick={async () => await claimAura()}
              disabled={!showClaim || auraLoading || event.disabled}
              className="w-32 h-32 bg-secondary disabled:bg-muted  p-4  transition hover:bg-secondary/80  text-white flex flex-col justify-center items-center rounded-md"
            >
              <Sparkles
                size={24}
                className="justify-center mt-auto items-center "
              />

              <p className="font-semibold text-xs mt-auto">
                REDEEM {event.aura} AURA
              </p>
            </button>
          </div>
        </div>
        <div className="mt-6">
          <EventLeaderboard id={id ?? ""} />
        </div>
      </div>
    </div>
  );
};

export default EventPage;

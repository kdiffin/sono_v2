import EventCard, { DifficultyBadge } from "@/components/event-card";
import ImageCustom from "@/components/Image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EVENTS } from "@/data";
import { Leaf, Plus, Sparkles, SparklesIcon, User2Icon } from "lucide-react";
import React from "react";
import { useParams } from "react-router";

const EventPage = () => {
  const { id } = useParams(); // Get the event ID from the URL parameters
  const event = EVENTS.find((event) => event.id === id); // Find the event by ID

  if (!event) {
    return <div className="p-4">Event not found</div>; // Handle case where event is not found
  }

  return (
    <div className="p-4 justify-center flex flex-col items-center">
      <div className="container">
        <div className="mb-4">
          <ImageCustom
            src={event.image}
            className="h-64 rounded-t-md w-full object-cover"
            alt=""
          />
        </div>
        <div className="flex items-center border-2 border-secondary border-dashed rounded-sm p-8 justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold  mb-2">{event.title}</h1>
            <p className="text-muted-foreground max-w-xl ">
              {event.description}
            </p>
            <div className="flex gap-1  mt-3 items-center">
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

          <div className="flex items-center gap-2">
            <button className="w-32 h-32 bg-primary p-4 transition  hover:bg-primary/80  text-white flex flex-col justify-center items-center rounded-md">
              <Plus
                size={24}
                className="justify-center mt-auto items-center "
              />

              <p className="font-semibold text-xs mt-auto">
                UPLOAD PROOF OF COMPLETION
              </p>
            </button>
            <button
              disabled={true}
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
      </div>
    </div>
  );
};

export default EventPage;

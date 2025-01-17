import EventCard, { EventCardContainer } from "@/components/event-card";
import { EVENTS } from "@/data";
import React from "react";

function Home() {
  return (
    <div className="p-6">
      <h2 className="text-3xl  font-semibold">
        Welcome to <span className="text-primary font-semibold">SONO! 🌎♻</span>
      </h2>
      <p className="mt-2">
        You can get started on your sustainability journey by checking out these{" "}
        <span className="text-secondary underline underline-offset-4 font-semibold">
          Featured Events
        </span>
        .
      </p>

      <EventCardContainer>
        {EVENTS.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            description={event.description}
            difficulty={event.difficulty}
            aura={event.aura}
            image={event.image}
            author={event.author}
            disabled={event.disabled}
          />
        ))}
      </EventCardContainer>
    </div>
  );
}

export default Home;

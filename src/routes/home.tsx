import EventCard, { EventCardContainer } from "@/components/event-card";
import { HomeLeaderboard } from "@/components/home-leaderboard";
import { EVENTS } from "@/data";

function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-6 container">
        <div className="pb-16">
          <h2 className="text-3xl  font-semibold">
            Welcome to{" "}
            <span className="text-primary font-semibold">SONO! 🌎♻</span>
          </h2>
          <p className="mt-2">
            You can get started on your sustainability journey by checking out
            these{" "}
            <span className="text-secondary underline underline-offset-4 font-semibold">
              Featured Events
            </span>
            .
          </p>

          <div className="">
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
        </div>

        <div className="pb-24">
          <h2 className="text-3xl  font-semibold">
            Check out today's{" "}
            <span className="text-secondary font-semibold">
              leaderboard 📈📊
            </span>
          </h2>
          <p className="mt-2">
            All the{" "}
            <span className="text-primary underline underline-offset-4 font-semibold">
              planet savers
            </span>{" "}
            which have contributed to making the earth a better place today!
          </p>

          <div className="mt-8">
            <HomeLeaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

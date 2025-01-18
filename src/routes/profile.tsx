import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Make sure to configure Firebase
import { doc, getDoc } from "firebase/firestore"; // Import the correct methods
import ImageCustom from "@/components/image-custom";
import { useParams } from "react-router";
import { Sparkles } from "lucide-react";
import { EVENTS } from "@/data";
import EventCard, { EventCardContainer } from "@/components/event-card";

function Profile() {
  const [userData, setUserData] = useState<any>(null); // Use 'any' or define a User type
  const [eventData, setEventData] = useState<any>(null); // Use 'any' or define a User type

  const { id } = useParams(); // Get the event ID from the URL parameters

  useEffect(() => {
    const fetchUserData = async () => {
      const userDocRef = doc(db, "users", id ?? "");
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        setUserData(userDoc.data());
      } else {
        console.error("No such user!");
      }
    };

    fetchUserData();
  }, []);

  // Function to find participated events
  const getParticipatedEvents = (participatedEventsIDs: string[]) => {
    return EVENTS.filter((event) => participatedEventsIDs.includes(event.id));
  };

  // Get the events the user has participated in
  const participatedEvents = userData
    ? getParticipatedEvents(userData.participatedEventsIDs)
    : [];

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="container p-6">
        {userData ? (
          <div>
            <div className="flex items-center flex-wrap  bg-muted rounded-2xl justify-between md:gap-10">
              <div className="flex items-center p-5 gap-4">
                <ImageCustom
                  src={userData?.photoURL}
                  className="rounded-full h-8 w-8"
                  alt=""
                />
                <h2 className="  text-xl mb-1 font-semibold">
                  <span className="   underline underline-offset-4   font-semibold">
                    {userData?.displayName}
                  </span>{" "}
                </h2>
              </div>

              <div className="flex items-center p-5 gap-4">
                <span className="ml-auto rounded-md p-2 px-4 bg-primary text-white font-semibold flex items-center gap-2">
                  <Sparkles size={16} />
                  {userData.aura} Aura
                </span>
              </div>
            </div>

            <div className="pt-6">
              <h2 className="text-3xl  font-semibold">
                <span className="font-semibold">Event History 📚</span>
              </h2>
              <p className="mt-2">
                Here are the events{" "}
                <span className="text-primary underline underline-offset-4">
                  {userData.displayName}
                </span>{" "}
                has participated in:
              </p>{" "}
              {participatedEvents.length > 0 ? (
                <EventCardContainer>
                  {participatedEvents.map((event) => (
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
              ) : (
                <p>No participated events found.</p>
              )}
            </div>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;

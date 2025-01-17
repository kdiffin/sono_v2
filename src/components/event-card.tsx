import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  DiffIcon,
  Leaf,
  Plus,
  PlusCircle,
  Sparkles,
  SquareActivity,
  User,
  User2Icon,
} from "lucide-react";
import { Badge } from "./ui/badge";
import ImageCustom from "./Image";
import { Link } from "react-router";

function EventCard({
  title,
  description,
  difficulty,
  aura,
  image,
  disabled,
  author,
  id,
}: {
  title: string;
  description: string;
  difficulty: string;
  disabled?: boolean;
  aura: number;
  image?: string;
  author: string;
  id: string;
}) {
  if (disabled) {
    return (
      <Card className=" flex flex-col  select-none">
        <div className="opacity-50 flex-1 h-full   pointer-events-none">
          <div>
            <ImageCustom
              src={image}
              className="h-64 rounded-t-md w-full object-cover"
              alt=""
            />
          </div>

          <CardContent className="pt-6   pb-4">
            <div className="flex gap-1 items-center">
              <DifficultyBadge difficulty={difficulty} />
              <Badge variant="default">
                <Sparkles size={12} /> <Plus size={12} />
                {aura} Aura
              </Badge>
              <Badge variant="secondary">
                <User2Icon size={12} /> {author}
              </Badge>
            </div>

            <div className="flex mt-4 justify-between">
              <div className="gap-1 flex flex-col">
                <CardTitle> {title} has ended </CardTitle>
                <CardDescription>{description}</CardDescription>
              </div>
            </div>
          </CardContent>
        </div>
        <CardFooter className="pt-0  ">
          <Button variant={"fancy"} size={"sm"}>
            <Sparkles /> <BarChart />
            Aura Leaderboard
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <div>
        {" "}
        <ImageCustom
          src={image}
          className="h-64 rounded-t-md w-full object-cover"
          alt=""
        />
      </div>

      <CardContent className=" pt-6 pb-4">
        <div className="flex gap-1  items-center">
          <DifficultyBadge difficulty={difficulty} />
          <Badge variant="default">
            <Sparkles size={12} /> <Plus size={12} />
            {aura} Aura
          </Badge>
          <Badge variant="secondary">
            <User2Icon size={12} /> {author}
          </Badge>
        </div>

        <div className="flex mt-4 justify-between">
          <div className="gap-1 flex flex-col">
            <CardTitle> {title} </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Link to={"/event/" + id}>
          <Button variant={"fancy"} size={"sm"}>
            <Leaf /> Join Event
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export function EventCardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid mt-5 gap-4 sm:grid-cols-2 p-1 xl:grid-cols-3 2xl:grid-cols-4">
      {children}
    </div>
  );
}

export function DifficultyBadge({ difficulty }: { difficulty: string }) {
  if (difficulty === "Easy")
    return (
      <Badge
        className="bg-green-700  hover:bg-green-700/80 text-white"
        variant="outline"
      >
        Easy
      </Badge>
    );
  if (difficulty === "Medium")
    return (
      <Badge
        className="bg-yellow-700 hover:bg-yellow-700/80 text-white"
        variant="outline"
      >
        Medium
      </Badge>
    );
  if (difficulty === "Hard")
    return (
      <Badge
        variant="outline"
        className="bg-red-700 hover:bg-red-700/80 text-white"
      >
        Hard
      </Badge>
    );
}

export default EventCard;

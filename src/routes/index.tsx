import { createFileRoute } from "@tanstack/react-router";
import { LogicPoster } from "@/components/logic/poster";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <LogicPoster />;
}

import type { Metadata } from "next";
import { PastShowsPage } from "./PastShowsPage";

export const metadata: Metadata = {
  title: "Past Shows",
  description: "Relive the greatest moments in combat sports. Browse our archive of past events.",
};

export default function PastShows() {
  return <PastShowsPage />;
}

import type { Metadata } from "next";
import { ShowsPage } from "./ShowsPage";

export const metadata: Metadata = {
  title: "Upcoming Shows",
  description: "Browse all upcoming live combat sports events. PPV streaming in HD.",
};

export default function Shows() {
  return <ShowsPage />;
}

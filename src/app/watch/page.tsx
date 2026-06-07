import type { Metadata } from "next";
import { WatchPage } from "./WatchPage";

export const metadata: Metadata = {
  title: "Watch Live",
  description: "Stream live combat sports in HD. Premium PPV experience.",
};

export default function Watch() {
  return <WatchPage />;
}

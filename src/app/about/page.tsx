import type { Metadata } from "next";
import { AboutPage } from "./AboutPage";

export const metadata: Metadata = {
  title: "About",
  description: "The future of combat sports streaming. Built by fight fans, for fight fans.",
};

export default function About() {
  return <AboutPage />;
}

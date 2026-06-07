import type { Metadata } from "next";
import { FaqPage } from "./FaqPage";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about LiveCombatSports streaming.",
};

export default function Faq() {
  return <FaqPage />;
}

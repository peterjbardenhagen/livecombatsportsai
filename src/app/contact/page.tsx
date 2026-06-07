import type { Metadata } from "next";
import { ContactPage } from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the LiveCombatSports team.",
};

export default function Contact() {
  return <ContactPage />;
}

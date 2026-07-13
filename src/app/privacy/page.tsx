import type { Metadata } from "next";
import { Privacy } from "@/components/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | iLayer Solutions",
  description:
    "How iLayer Solutions collects, uses, and protects personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.",
};

export default function PrivacyPage() {
  return <Privacy />;
}

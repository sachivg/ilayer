"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meeyqaeo";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function useFormspreeSubmit(onSuccess?: () => void) {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });
      if (response.ok) {
        setStatus("success");
        onSuccess?.();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return { status, submit };
}

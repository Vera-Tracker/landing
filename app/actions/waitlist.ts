"use server";

import { getSupabaseAdmin, type IbdType } from "@/lib/supabase";

export type WaitlistResult =
  | { ok: true }
  | { ok: false; error: string };

const IBD_TYPES: IbdType[] = [
  "crohns",
  "ulcerative_colitis",
  "prefer_not_to_say",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function joinWaitlist(formData: FormData): Promise<WaitlistResult> {
  const honeypot = String(formData.get("company") || "").trim();
  if (honeypot) {
    return { ok: true };
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const ibdType = String(formData.get("ibd_type") || "").trim() as IbdType;

  if (!name || name.length < 2) {
    return { ok: false, error: "Please enter your name." };
  }

  if (!isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!IBD_TYPES.includes(ibdType)) {
    return { ok: false, error: "Please select an IBD type." };
  }

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    console.error("Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and a key.");
    return {
      ok: false,
      error: "Waitlist is temporarily unavailable. Please try again soon.",
    };
  }

  const { error } = await supabase.from("waitlist").insert({
    name,
    email,
    ibd_type: ibdType,
  });

  if (error) {
    if (error.code === "23505") {
      return { ok: false, error: "You're already on the waitlist with this email." };
    }
    console.error("Waitlist insert failed:", error.message);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  return { ok: true };
}

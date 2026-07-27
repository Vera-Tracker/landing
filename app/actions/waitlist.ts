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

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  if (
    url.includes("YOUR_PROJECT") ||
    !url.startsWith("https://") ||
    !url.includes(".supabase.co")
  ) {
    console.error("NEXT_PUBLIC_SUPABASE_URL looks invalid:", url);
    return {
      ok: false,
      error: "Waitlist is misconfigured. Check NEXT_PUBLIC_SUPABASE_URL in .env.local.",
    };
  }

  try {
    const { error } = await supabase.from("waitlist").insert({
      name,
      email,
      ibd_type: ibdType,
    });

    if (error) {
      if (error.code === "23505") {
        return { ok: false, error: "You're already on the waitlist with this email." };
      }
      console.error(
        "Waitlist insert failed:",
        error.message,
        error.details || "",
        error.hint || "",
      );
      if (/fetch failed|ENOTFOUND|ECONNREFUSED|network/i.test(error.message)) {
        return {
          ok: false,
          error:
            "Could not reach Supabase. Check your internet connection, that the project is active, and restart npm run dev.",
        };
      }
      return { ok: false, error: "Something went wrong. Please try again." };
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const cause =
      err instanceof Error && err.cause instanceof Error
        ? err.cause.message
        : "";
    console.error("Waitlist insert threw:", message, cause);
    return {
      ok: false,
      error:
        "Could not reach Supabase. Check your internet connection and that the project is active.",
    };
  }

  return { ok: true };
}

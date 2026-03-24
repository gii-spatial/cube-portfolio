import type { ArsenalMetaData } from "@/interfaces/shared";

/**
 * Returns a random string from the ArsenalMetaData.toSay array
 * or an empty string if none exists.
 */
export function getRandomToSay(arsenal: ArsenalMetaData): string {
  if (!arsenal.toSay || arsenal.toSay.length === 0) return "";
  const index = Math.floor(Math.random() * arsenal.toSay.length);
  return arsenal.toSay[index];
}

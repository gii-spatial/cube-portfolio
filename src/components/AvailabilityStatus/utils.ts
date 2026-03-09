import type { StatusVariant } from "./variants";

export function isStatusVariant(value: unknown): value is StatusVariant {
  return value === "open_for_opportunities" || value === "not_available";
}

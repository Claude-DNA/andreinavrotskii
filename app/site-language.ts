import { headers } from "next/headers";

export const englishUrl = "https://andreinavrotskii.com";
export const russianUrl = "https://ru.andreinavrotskii.com";

export async function isRussianSite() {
  const host = (await headers()).get("host")?.split(":")[0].toLowerCase();
  return host === new URL(russianUrl).hostname;
}

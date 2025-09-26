import type { Site } from "./types.js";

const STORAGE_KEY = "sites";

export function getSites(): Site[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? (JSON.parse(data) as Site[]) : [];
}

export function saveSites(sites: Site[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sites));
}

export function addSite(site: Site): void {
  const sites = getSites();
  sites.push(site);
  saveSites(sites);
}

export function removeSite(id: string): void {
  const sites = getSites().filter((site) => site.id !== id);
  saveSites(sites);
}

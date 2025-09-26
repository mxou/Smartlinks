import { addSite } from "./storage.js";
import type { Site } from "./types.js";

const form = document.querySelector("form") as HTMLFormElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = (document.querySelector("#site-name") as HTMLInputElement).value;
  const url = (document.querySelector("#site-url") as HTMLInputElement).value;
  const category = (document.querySelector("#category") as HTMLSelectElement).value;

  const newSite: Site = {
    id: crypto.randomUUID(),
    name,
    url,
    category,
    createdAt: new Date().toISOString(),
  };

  addSite(newSite);
  form.reset();

  window.location.href = "../index.html";
});

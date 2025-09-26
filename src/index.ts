import { getSites, removeSite } from "./storage.js";
import type { Site } from "./types.js";

const grid = document.querySelector(".grid") as HTMLDivElement;

function renderSites() {
  const sites: Site[] = getSites();
  grid.innerHTML = "";

  sites.forEach((site) => {
    const card = document.createElement("div");
    card.className = "flex flex-col justify-center items-center bg-white p-2.5 gap-2 shadow-md rounded-sm";

    card.innerHTML = `
      <img src="./assets/media/tempimg.webp" alt="Image du site" class="w-60 h-auto" />
      <p class="text-xl font-bold">${site.name}</p>
      <p class="text-gray-600">${site.category}</p>
      <div class="flex flex-row gap-3 w-full">
        <button data-id="${site.id}" class="delete flex-1 p-2 bg-red-100 text-red-600 rounded-lg font-medium hover:bg-red-200">Supprimer</button>
        <a href="${site.url}" target="_blank" class="flex-1 p-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 text-center">Ouvrir</a>
      </div>
    `;

    grid.appendChild(card);
  });

  document.querySelectorAll(".delete").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = (e.target as HTMLButtonElement).dataset.id!;
      removeSite(id);
      renderSites();
    });
  });
}

renderSites();

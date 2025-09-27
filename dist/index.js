import { getSites, removeSite, getFaviconUrl } from "./storage.js";
let currentFilter = "Tout";
const grid = document.querySelector(".grid");
function renderSites() {
    var _a, _b, _c, _d, _e, _f;
    const sites = getSites();
    grid.innerHTML = "";
    let filteredSites;
    if (currentFilter === "Tout") {
        filteredSites = sites;
    }
    else {
        filteredSites = sites.filter((site) => site.category === currentFilter);
    }
    filteredSites.forEach((site) => {
        const card = document.createElement("div");
        card.className = "flex flex-col justify-center items-center bg-white p-2.5 gap-2 shadow-md rounded-sm";
        const imgUrl = getFaviconUrl(site.url);
        card.innerHTML = `
      <img src="${imgUrl}" alt="Favicon du site ${site.name}" class="w-60 h-auto" />
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
            const id = e.target.dataset.id; // En gros pour chaque btn, on écoute le click de CE btn en promettant qu'on a bien un data-id
            removeSite(id);
            renderSites();
        });
    });
    (_a = document.querySelector("#filter_btn_tout")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        currentFilter = "Tout";
        renderSites();
    });
    (_b = document.querySelector("#filter_btn_css")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        currentFilter = "CSS";
        renderSites();
    });
    (_c = document.querySelector("#filter_btn_icones")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        currentFilter = "Icônes";
        renderSites();
    });
    (_d = document.querySelector("#filter_btn_outils")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
        currentFilter = "Outils";
        renderSites();
    });
    (_e = document.querySelector("#filter_btn_react")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
        currentFilter = "React";
        renderSites();
    });
    (_f = document.querySelector("#filter_btn_design")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => {
        currentFilter = "Design";
        renderSites();
    });
}
renderSites();
//# sourceMappingURL=index.js.map
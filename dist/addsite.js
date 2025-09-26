import { addSite } from "./storage.js";
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#site-name").value;
    const url = document.querySelector("#site-url").value;
    const category = document.querySelector("#category").value;
    //   Les () servent a caster l'element avant d'acceder aux values
    // Caster veut dire "fait comme si cette variable était de x type" pour acceder au values
    const newSite = {
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
//# sourceMappingURL=addsite.js.map
const STORAGE_KEY = "sites";
export function getSites() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}
export function saveSites(sites) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sites));
}
export function addSite(site) {
    const sites = getSites();
    sites.push(site);
    saveSites(sites);
}
export function removeSite(id) {
    const sites = getSites().filter((site) => site.id !== id);
    saveSites(sites);
}
//# sourceMappingURL=storage.js.map
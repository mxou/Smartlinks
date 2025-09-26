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
export function getFaviconUrl(iconUrl) {
    try {
        const domain = new URL(iconUrl).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    }
    catch (_a) {
        return "./assets/media/tempimg.webp";
    }
}
//# sourceMappingURL=storage.js.map
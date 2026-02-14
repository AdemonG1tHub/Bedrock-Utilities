const HOMES_KEY = "homes";
function getHomeNameKey(index) {
    return `home_${index}_name`;
}
function getHomeLocationKey(index) {
    return `home_${index}_location`;
}
function parseHomesCount(value) {
    if (typeof value === "number" && Number.isInteger(value) && value >= 0) {
        return value;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
    if (typeof value === "string") {
        const asNumber = Number(value);
        if (Number.isInteger(asNumber) && asNumber >= 0) {
            return asNumber;
        }
        try {
            const parsed = JSON.parse(value);
            if (Array.isArray(parsed)) {
                return parsed.length;
            }
        }
        catch (_a) {
            return 0;
        }
    }
    return 0;
}
function parseLocationString(location) {
    const parts = location.split(",").map((part) => Number(part.trim()));
    if (parts.length !== 3 || parts.some((part) => Number.isNaN(part))) {
        return undefined;
    }
    return { x: parts[0], y: parts[1], z: parts[2] };
}
export function initializePlayerDatabase(player) {
    if (player.getDynamicProperty(HOMES_KEY) === undefined) {
        player.setDynamicProperty(HOMES_KEY, 0);
    }
}
export function getPlayerHomes(player) {
    const homesCount = parseHomesCount(player.getDynamicProperty(HOMES_KEY));
    const homes = [];
    for (let index = 0; index < homesCount; index++) {
        const name = player.getDynamicProperty(getHomeNameKey(index));
        const location = player.getDynamicProperty(getHomeLocationKey(index));
        if (typeof name !== "string" || typeof location !== "string") {
            continue;
        }
        const parsedLocation = parseLocationString(location);
        if (parsedLocation === undefined) {
            continue;
        }
        homes.push({
            name,
            location: parsedLocation,
        });
    }
    return homes;
}
//# sourceMappingURL=database.js.map
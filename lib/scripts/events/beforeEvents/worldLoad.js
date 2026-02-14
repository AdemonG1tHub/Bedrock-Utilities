import { system, world } from "@minecraft/server";
world.afterEvents.worldLoad.subscribe((eventData) => {
    const e = eventData;
    system.run(() => {
        console.log("World loaded!");
    });
});
//# sourceMappingURL=worldLoad.js.map
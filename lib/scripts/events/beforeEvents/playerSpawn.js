import { world } from "@minecraft/server";
import { initializePlayerDatabase } from "../../helperFunctions/database";
world.afterEvents.playerSpawn.subscribe((eventData) => {
    const player = eventData.player;
    const initialSpawn = eventData.initialSpawn;
    if (initialSpawn) {
        player.sendMessage("Welcome to the server! Use a compass to open the main menu.");
        initializePlayerDatabase(player);
    }
});
//# sourceMappingURL=playerSpawn.js.map
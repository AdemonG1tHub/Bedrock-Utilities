import { system } from "@minecraft/server";
export function teleportPlayer(player, x, y, z) {
    const seconds = 5;
    player.sendMessage(`Teleporting in ${seconds} seconds...`);
    system.runTimeout(() => {
        player.teleport({ x, y, z });
    }, seconds * 20);
}
//# sourceMappingURL=teleport.js.map
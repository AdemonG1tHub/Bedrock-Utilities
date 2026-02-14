import { system } from "@minecraft/server";
export function teleportPlayer(player, x, y, z) {
    let seconds = 5;
    player.sendMessage(`Teleporting in ${seconds} seconds...`);
    system.waitTicks(seconds * 20);
    player.teleport({ x, y, z });
}
//# sourceMappingURL=teleport.js.map
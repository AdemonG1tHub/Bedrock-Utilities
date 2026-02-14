import { system, Player } from "@minecraft/server";

export function teleportPlayer(player: Player, x: number, y: number, z: number) {
  const seconds = 5;

  player.sendMessage(`Teleporting in ${seconds} seconds...`);
  system.runTimeout(() => {
    player.teleport({ x, y, z });
  }, seconds * 20);
}

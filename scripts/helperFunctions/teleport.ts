import { system, world, Player } from "@minecraft/server";

export function teleportPlayer(player: Player, x: number, y: number, z: number) {
  let seconds: number = 5;

  player.sendMessage(`Teleporting in ${seconds} seconds...`);
  system.waitTicks(seconds * 20);
  player.teleport({ x, y, z });
}
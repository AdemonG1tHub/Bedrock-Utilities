import { system, world, Player } from "@minecraft/server";

export function advancedRelay(content: string, title: string, color: string, footer: string ) {
  const players = world.getPlayers();
  const message = {
    rawtext: [
      { text: content, color: color },
      { text: `\n${footer}`, color: "gray", italic: true }
    ]
  };

  for (const player of players) {
    if(player.name === "BedrockUtilities") {
      player.sendMessage(message);
    }
}}
import { world, Player } from "@minecraft/server";
import { mainMenu } from "../../guiPages/mainMenu";

world.beforeEvents.itemUse.subscribe((eventData) => {
  const player = eventData.source as Player;
  const item = eventData.itemStack;

  if (item.typeId === "minecraft:compass") {
    mainMenu(player);
  }
});
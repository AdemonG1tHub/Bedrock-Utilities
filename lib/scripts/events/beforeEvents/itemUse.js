import { world } from "@minecraft/server";
import { mainMenu } from "../../guiPages/mainMenu";
world.beforeEvents.itemUse.subscribe((eventData) => {
    const player = eventData.source;
    const item = eventData.itemStack;
    if (item.typeId === "minecraft:compass") {
        mainMenu(player);
    }
});
//# sourceMappingURL=itemUse.js.map
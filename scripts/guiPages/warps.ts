import { system, world, Player } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { BEDROCKUTILITIES_CONFIG } from "../globalConfig";
import { teleportPlayer } from "../helperFunctions/teleport";

export function warpsMenu(player: Player) {
  const menu = new ActionFormData().title("Warps").body("Select a warp to teleport to.");
  for (let i = 0; i < BEDROCKUTILITIES_CONFIG.WARPS.length; i++) {
    menu.button(BEDROCKUTILITIES_CONFIG.WARPS[i].NAME);
  }
  menu.show(player).then((response) => {
    if (
      response.selection !== undefined &&
      response.selection >= 0 &&
      response.selection < BEDROCKUTILITIES_CONFIG.WARPS.length
    ) {
      const warp = BEDROCKUTILITIES_CONFIG.WARPS[response.selection];
      teleportPlayer(player, warp.X, warp.Y, warp.Z);
    }
  });
}

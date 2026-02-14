import { Player } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { getPlayerHomes } from "../helperFunctions/database";
import { teleportPlayer } from "../helperFunctions/teleport";

export function homesMenu(player: Player) {
  const menu = new ActionFormData().title("Homes Menu").body("Select a home to teleport to.");
  const homes = getPlayerHomes(player);

  for (const home of homes) {
    menu.button(home.name);
  }

  menu.show(player).then((response) => {
    if (response.selection !== undefined && response.selection >= 0 && response.selection < homes.length) {
      const selectedHome = homes[response.selection];
      teleportPlayer(player, selectedHome.location.x, selectedHome.location.y, selectedHome.location.z);
    }
  });
}

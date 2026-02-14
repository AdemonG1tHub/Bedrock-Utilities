import { system, world, Player } from "@minecraft/server";
import { BEDROCKUTILITIES_CONFIG } from "../globalConfig";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

export function mainMenu(player: Player) {
  const menu = new ActionFormData()
    .title("Bedrock Utilities")
    .body("Made by AdemDEV")
    .button("Warps")
    .button("Shop")
    .button("Homes")
    .button("Clans")
    .button("Help")
    if (player.hasTag(BEDROCKUTILITIES_CONFIG.TAGS.ADMIN)) {
      menu.button("Staff")
    }
    menu.show(player).then(response => {
      if (response.selection === 0) {
        player.runCommand("warp menu")
      } else if (response.selection === 1) {
        player.runCommand("shop menu")
      } else if (response.selection === 2) {
        player.runCommand("home menu")
      } else if (response.selection === 3) {
        player.runCommand("clan menu")
      } else if (response.selection === 4) {
        player.runCommand("help menu")
      } else if (response.selection === 5 && player.hasTag(BEDROCKUTILITIES_CONFIG.TAGS.ADMIN)) {
        player.runCommand("staff menu")
      }
    })
}
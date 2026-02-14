import { system, world, Player } from "@minecraft/server";
import { BEDROCKUTILITIES_CONFIG } from "../globalConfig";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { mainMenu } from "../guiPages/mainMenu";

export function staffMenu(player: Player) {
  const menu = new ActionFormData()
    .title("Staff Menu")
    .body("Select an option.")
    .button("Ban User")
    .button("Mute User")
    .button("Warps Manager\nUnder Development")
    .button("Back to Main Menu");
    menu.show(player).then(response => {
      if (response.selection === 0) {
        if(player.hasTag(BEDROCKUTILITIES_CONFIG.TAGS.ADMIN)) {
          player.sendMessage("This option is under development.");
          //banMenu(player);
        } else {
          player.sendMessage("You do not have permission to use this option.");
        }
      } else if (response.selection === 1) {
        if(player.hasTag(BEDROCKUTILITIES_CONFIG.TAGS.ADMIN)) {
          player.sendMessage("This option is under development.");
          //muteMenu(player);
        } else {
          player.sendMessage("You do not have permission to use this option.");
        }
      } else if (response.selection === 2) {
        player.sendMessage("This option is under development.");
      } else if (response.selection === 3) {
        mainMenu(player);
      } else if (response.selection === undefined) {
        mainMenu(player);
      }
    })
}
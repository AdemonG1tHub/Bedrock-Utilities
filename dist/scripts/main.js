// scripts/globalConfig.ts
var BEDROCKUTILITIES_CONFIG = {
  TAGS: {
    ADMIN: "Admin"
  },
  WARPS: [
    {
      NAME: "Spawn",
      X: 0,
      Y: 64,
      Z: 0
    }
  ]
};

// scripts/events/beforeEvents/worldLoad.ts
import { system, world } from "@minecraft/server";
world.afterEvents.worldLoad.subscribe((eventData) => {
  const e = eventData;
  system.run(() => {
    console.log("World loaded!");
  });
});

// scripts/events/beforeEvents/itemUse.ts
import { world as world2, system as system3 } from "@minecraft/server";

// scripts/guiPages/mainMenu.ts
import { ActionFormData as ActionFormData3 } from "@minecraft/server-ui";

// scripts/staff/staffGUI.ts
import { ActionFormData } from "@minecraft/server-ui";
function staffMenu(player) {
  const menu = new ActionFormData().title("Staff Menu").body("Select an option.").button("Ban User").button("Mute User").button("Warps Manager\nUnder Development").button("Back to Main Menu");
  menu.show(player).then((response) => {
    if (response.selection === 0) {
      if (player.hasTag(BEDROCKUTILITIES_CONFIG.TAGS.ADMIN)) {
        player.sendMessage("This option is under development.");
      } else {
        player.sendMessage("You do not have permission to use this option.");
      }
    } else if (response.selection === 1) {
      if (player.hasTag(BEDROCKUTILITIES_CONFIG.TAGS.ADMIN)) {
        player.sendMessage("This option is under development.");
      } else {
        player.sendMessage("You do not have permission to use this option.");
      }
    } else if (response.selection === 2) {
      player.sendMessage("This option is under development.");
    } else if (response.selection === 3) {
      mainMenu(player);
    } else if (response.selection === void 0) {
      mainMenu(player);
    }
  });
}

// scripts/guiPages/warps.ts
import { ActionFormData as ActionFormData2 } from "@minecraft/server-ui";

// scripts/helperFunctions/teleport.ts
import { system as system2 } from "@minecraft/server";
function teleportPlayer(player, x, y, z) {
  const seconds = 5;
  player.sendMessage(`Teleporting in ${seconds} seconds...`);
  system2.runTimeout(() => {
    player.teleport({ x, y, z });
  }, seconds * 20);
}

// scripts/guiPages/warps.ts
function warpsMenu(player) {
  const menu = new ActionFormData2().title("Warps").body("Select a warp to teleport to.");
  for (let i = 0; i < BEDROCKUTILITIES_CONFIG.WARPS.length; i++) {
    menu.button(BEDROCKUTILITIES_CONFIG.WARPS[i].NAME);
  }
  menu.show(player).then((response) => {
    if (response.selection !== void 0 && response.selection >= 0 && response.selection < BEDROCKUTILITIES_CONFIG.WARPS.length) {
      const warp = BEDROCKUTILITIES_CONFIG.WARPS[response.selection];
      teleportPlayer(player, warp.X, warp.Y, warp.Z);
    }
  });
}

// scripts/guiPages/mainMenu.ts
function mainMenu(player) {
  const menu = new ActionFormData3().title("Bedrock Utilities").body("Made by AdemDEV").button("Warps").button("Shop").button("Homes").button("Clans").button("Help");
  if (player.hasTag(BEDROCKUTILITIES_CONFIG.TAGS.ADMIN)) {
    menu.button("Staff");
  }
  menu.show(player).then((response) => {
    if (response.selection === 0) {
      warpsMenu(player);
    } else if (response.selection === 1) {
      player.runCommand("shop menu");
    } else if (response.selection === 2) {
      player.runCommand("home menu");
    } else if (response.selection === 3) {
      player.runCommand("clan menu");
    } else if (response.selection === 4) {
      player.runCommand("help menu");
    } else if (response.selection === 5 && player.hasTag(BEDROCKUTILITIES_CONFIG.TAGS.ADMIN)) {
      staffMenu(player);
    }
  });
}

// scripts/events/beforeEvents/itemUse.ts
world2.beforeEvents.itemUse.subscribe((eventData) => {
  const player = eventData.source;
  const item = eventData.itemStack;
  if (item.typeId === "minecraft:compass") {
    system3.run(() => {
      mainMenu(player);
    });
  }
});

// scripts/events/afterEvents/playerSpawn.ts
import { world as world3 } from "@minecraft/server";

// scripts/helperFunctions/database.ts
var HOMES_KEY = "homes";
function initializePlayerDatabase(player) {
  if (player.getDynamicProperty(HOMES_KEY) === void 0) {
    player.setDynamicProperty(HOMES_KEY, 0);
  }
}

// scripts/events/afterEvents/playerSpawn.ts
world3.afterEvents.playerSpawn.subscribe((eventData) => {
  const player = eventData.player;
  const initialSpawn = eventData.initialSpawn;
  if (initialSpawn) {
    player.sendMessage("Welcome to the server! Use a compass to open the main menu.");
    initializePlayerDatabase(player);
  }
});

//# sourceMappingURL=../debug/main.js.map

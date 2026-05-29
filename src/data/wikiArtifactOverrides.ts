import type { Artifact } from './types'

type ArtifactOverride = Partial<Omit<Artifact, 'id'>>

export const WIKI_ARTIFACT_OVERRIDES: Record<string, ArtifactOverride> = {
  "season-of-the-undying": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Arc",
      "Void"
    ],
    "mods": [
      {
        "column": 1,
        "cost": 1,
        "description": "Defeating Hive combatants with finishers grants extra Glimmer. Mod does not stack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Dark_Glimmer_icon.png",
        "name": "Dark Glimmer",
        "row": 1,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "General Armor Mod"
      },
      {
        "column": 1,
        "cost": 2,
        "description": "Defeating Vex Minotaurs grants Gunsmith Materials. Mod does not stack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Labyrinth_Miner_icon.png",
        "name": "Labyrinth Miner",
        "row": 2,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "General Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Defeating Hive combatants grants extra Glimmer. Mod does not stack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Biomonetizer_icon.png",
        "name": "Biomonetizer",
        "row": 3,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "General Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Defeating Vex combatants grants extra Glimmer. Mod does not stack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Circuit_Scavenger_icon.png",
        "name": "Circuit Scavenger",
        "row": 4,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "General Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Defeating Vex Hobgoblins grants destination materials. Mod does not stack. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Dissection_Matrix_icon.png",
        "name": "Dissection Matrix",
        "row": 5,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "General Armor Mod"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Shield-piercing rounds designed to bypass combatant defenses. Strong against Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Rounds_icon.png",
        "name": "Anti-Barrier Rounds",
        "row": 1,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Weapon Mod"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Shield-piercing rounds designed to bypass combatant defenses. Strong against Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Hand_Cannon_icon.png",
        "name": "Anti-Barrier Hand Cannon",
        "row": 2,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Hand Cannon Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Uninterrupted fire grants bullets that cause disruption, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Rounds_icon.png",
        "name": "Overload Rounds",
        "row": 3,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Damage by fully drawn arrows causes disruption, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Arrowheads_icon.png",
        "name": "Overload Arrowheads",
        "row": 4,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Bow Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Aiming down sights loads a powerful explosive payload that staggers unshielded enemies. Strong against Unstoppable Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Hand_Cannon_icon.png",
        "name": "Unstoppable Hand Cannon",
        "row": 5,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Greatly increases reload speed of Hand Cannons.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Hand_Cannon_Loader_icon.png",
        "name": "Enhanced Hand Cannon Loader",
        "row": 1,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Greatly increases reload speed of Submachine Guns.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Submachine_Gun_Loader_icon.png",
        "name": "Enhanced Submachine Gun Loader",
        "row": 2,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Greatly increases the nocking speed of arrows.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Bow_Loader_icon.png",
        "name": "Enhanced Bow Loader",
        "row": 3,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Greatly increases reload speed of Fusion Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Fusion_Rifle_Loader_icon.png",
        "name": "Enhanced Fusion Rifle Loader",
        "row": 4,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Fusion Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Greatly increases reload speed of Auto Rifles. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Auto_Rifle_Loader_icon.png",
        "name": "Enhanced Auto Rifle Loader",
        "row": 5,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 3,
        "description": "Grants grenade energy on final blows with shield-piercing weapons or when a member of your fireteam shuts down a Barrier Champion's ability.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Breach_Refractor_icon.png",
        "name": "Breach Refractor",
        "row": 1,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 4,
        "cost": 3,
        "description": "Grants melee energy on final blows with shield-piercing weapons or when a member of your fireteam shuts down a Barrier Champion's ability.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Ballistic_Combo_icon.png",
        "name": "Ballistic Combo",
        "row": 2,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Void grenades cause disruption, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Grenades_icon.png",
        "name": "Overload Grenades",
        "row": 3,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Improves the effects of disruption, lowering combatants' damage output even further.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Disruptor_Spike_icon.png",
        "name": "Disruptor Spike",
        "row": 4,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 4,
        "cost": 3,
        "description": "Arc melee abilities stagger unshielded enemy combatants. Strong against Unstoppable Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Melee_icon.png",
        "name": "Unstoppable Melee",
        "row": 5,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [
            "Arc"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 5,
        "cost": 7,
        "description": "Finishers generate Heavy ammo. Requires one-half of your Super energy.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Heavy_Finisher_icon.png",
        "name": "Heavy Finisher",
        "row": 1,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Causing damage with a Void grenade adds a weaken effect to enemies.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Oppressive_Darkness_icon.png",
        "name": "Oppressive Darkness",
        "row": 2,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [
            "Weaken"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 5,
        "description": "Grants overshield and reduced cooldown during activation for all Arc class abilities.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Arc_Battery_icon.png",
        "name": "Arc Battery",
        "row": 3,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Grants bonus damage for all Arc melee abilities and refunds Super energy on finisher final blows.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Thunder_Coil_icon.png",
        "name": "Thunder Coil",
        "row": 4,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Grants bonus Void Super damage if cast while critically wounded. Lasts until the end of the Super activation. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/From_the_Depths_icon.png",
        "name": "From the Depths",
        "row": 5,
        "source": "Destiny 2 Wiki The Gate Lord's Eye page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      }
    ],
    "notes": "The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki The Gate Lord's Eye page",
        "url": "https://d2.destinygamewiki.com/wiki/The_Gate_Lord%27s_Eye"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Bow",
      "Hand Cannon",
      "SMG",
      "Fusion Rifle",
      "Machine Gun",
      "Mixed"
    ]
  },
  "season-of-dawn": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Solar",
      "Void"
    ],
    "mods": [
      {
        "column": 1,
        "cost": null,
        "description": "Grants weapon shield-piercing, bypassing combatant defenses. Strong against Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Ranger_icon.png",
        "name": "Anti-Barrier Ranger",
        "row": 1,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Weapon Mod"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Aiming down sights loads a powerful explosive payload that staggers unshielded enemies. Strong against Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Shot_icon.png",
        "name": "Unstoppable Shot",
        "row": 2,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Scout Rifle Mod"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Aiming down sights loads a high-impact burst that staggers unshielded enemy combatants. Strong against Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Burst_icon.png",
        "name": "Unstoppable Burst",
        "row": 3,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Pulse Rifle Mod"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Fully drawn arrows release a powerful explosive payload that staggers unshielded enemies. Strong against Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Arrows_icon.png",
        "name": "Unstoppable Arrows",
        "row": 4,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Bow Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Uninterrupted fire grants bullets that cause disruption, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Rounds_icon.png",
        "name": "Overload Rounds",
        "row": 5,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 3,
        "description": "Greatly increases reload speed of Rifle-class weapons.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Rifle_Loader_icon.png",
        "name": "Enhanced Rifle Loader",
        "row": 1,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Greatly reduces flinching from incoming fire while aiming any Rifle-class weapon.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Unflinching_Rifle_Aim_icon.png",
        "name": "Enhanced Unflinching Rifle Aim",
        "row": 2,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Greatly increases the nocking speed of arrows.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Bow_Loader_icon.png",
        "name": "Enhanced Bow Loader",
        "row": 3,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 2,
        "description": "Greatly increases the reload speed of Sniper Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Sniper_Rifle_icon.png",
        "name": "Enhanced Sniper Rifle Loader",
        "row": 4,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Sniper Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 2,
        "description": "Greatly improved target acquisition, accuracy, and aim-down-sights speed for Linear Fusion Rifles. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Linear_Fusion_Targeting_icon.png",
        "name": "Enhanced Linear Fusion Targeting",
        "row": 5,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Fusion Rifle",
            "Linear Fusion Rifle",
            "Mixed"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating Cabal combatants with finishers grants extra Glimmer. Mod does not stack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Dark_Glimmer_icon.png",
        "name": "Solidus Strike",
        "row": 1,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "General Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating Cabal Centurions grants Gunsmith Materials. Mod does not stack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Splintered_Gladius_icon.png",
        "name": "Splintered Gladius",
        "row": 2,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "General Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating Hive combatants grants extra Glimmer. Mod does not stack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Biomonetizer_icon.png",
        "name": "Biomonetizer",
        "row": 3,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "General Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating Cabal combatants grants a small amount of Glimmer. Mod does not stack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Tithe_Collector's_Sigil_icon.png",
        "name": "Tithe Collector's Sigil",
        "row": 4,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "General Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating Hive Knights grants Destination Materials. Mod does not stack. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Knight_Errant_icon.png",
        "name": "Knight Errant",
        "row": 5,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "General Armor Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Grants melee and grenade energy on final blows with shield-piercing weapons or when a member of your fireteam shuts down a Barrier Champion's ability.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Breach_Resonator_icon.png",
        "name": "Breach Resonator",
        "row": 1,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Solar grenades cause disruption, delaying ability regeneration and lowering combatant damage output. Strong against Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Molten_Overload_icon.png",
        "name": "Molten Overload",
        "row": 2,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [
            "Solar"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Improves the effects of disruption, lowering combatants' damage output even further.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Disruptor_Spike_icon.png",
        "name": "Disruptor Spike",
        "row": 3,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Void melee abilities stagger unshielded enemy combatants. Strong against Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Schwarzschild_Condensor_icon.png",
        "name": "Unstoppable Schwarzschild Condensor",
        "row": 4,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 3,
        "description": "Staggering Unstoppable Champions temporarily boosts weapon damage for allied players. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Tenderizer_icon.png",
        "name": "Tenderizer",
        "row": 5,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Grants a chance to generate healing orbs for you on Scout Rifle, Sniper Rifle, Bow, and Linear Fusion Rifle precision final blows.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Guardian_Angel_icon.png",
        "name": "Guardian Angel",
        "row": 1,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Heal"
          ],
          "subclasses": [],
          "weapons": [
            "Bow",
            "Scout Rifle",
            "Sniper Rifle",
            "Fusion Rifle",
            "Linear Fusion Rifle",
            "Mixed"
          ]
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 5,
        "description": "Activating Void class abilities grants an overshield. Increases cooldown of your class ability.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Void_Battery_icon.png",
        "name": "Void Battery",
        "row": 2,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 7,
        "description": "Finishers generate Heavy ammo. Requires one-half of your Super energy.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Heavy_Finisher_icon.png",
        "name": "Heavy Finisher",
        "row": 3,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Increases damage of all Solar melee abilities. Gain Super energy from performing finishers with a Solar subclass equipped.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Solar_Plexus_icon.png",
        "name": "Solar Plexus",
        "row": 4,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [
            "Solar"
          ],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Grants bonus Void Super damage if cast while critically wounded. Lasts until the end of the Super activation. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/From_the_Depths_icon.png",
        "name": "From the Depths",
        "row": 5,
        "source": "Destiny 2 Wiki The Lantern of Osiris page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      }
    ],
    "notes": "The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki The Lantern of Osiris page",
        "url": "https://d2.destinygamewiki.com/wiki/The_Lantern_of_Osiris"
      }
    ],
    "weaponFocus": [
      "Bow",
      "Scout Rifle",
      "Pulse Rifle",
      "Sniper Rifle",
      "Fusion Rifle",
      "Linear Fusion Rifle",
      "Mixed"
    ]
  },
  "season-of-the-worthy": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Solar",
      "Arc"
    ],
    "mods": [
      {
        "column": 1,
        "cost": null,
        "description": "Grants weapon shield-piercing, bypassing combatant defenses. Strong against Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_SMG_icon.png",
        "name": "Anti-Barrier SMG",
        "row": 1,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Submachine Gun Mod"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Grants weapon shield-piercing, bypassing combatant defenses. Strong against Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Sidearm_icon.png",
        "name": "Anti-Barrier Sidearm",
        "row": 2,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sidearm"
          ]
        },
        "type": "Sidearm Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Uninterrupted fire grants bullets that cause disruption, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Rounds_icon_2.png",
        "name": "Overload Rounds",
        "row": 3,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down sights loads a powerful explosive payload that staggers unshielded enemies. Strong against Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Hand_Cannon_icon.png",
        "name": "Unstoppable Hand Cannon",
        "row": 4,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Landing consecutive hits on enemy targets causes disruption, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Rounds_icon_3.png",
        "name": "Overload Rounds",
        "row": 5,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon",
            "Sidearm",
            "Mixed"
          ]
        },
        "type": "Sidearm and Hand Cannon Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Greatly reduces flinching from incoming fire while aiming Auto Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Unflinching_Auto_Rifle_Aim_icon.png",
        "name": "Enhanced Unflinching Auto Rifle Aim",
        "row": 1,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Greatly improved target acquisition, accuracy, and aim-down-sights speed for Auto Rifles, Machine Guns, SMGs, Pulse Rifles, Sidearms, and Fusion Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Scatter_Projectile_Targeting_icon.png",
        "name": "Enhanced Scatter Projectile Targeting",
        "row": 2,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle",
            "Pulse Rifle",
            "Sidearm",
            "SMG",
            "Fusion Rifle",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Greatly increases reload speed of Auto Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Auto_Rifle_Loader_icon.png",
        "name": "Enhanced Auto Rifle Loader",
        "row": 3,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 3,
        "description": "Greatly increases reload speed of Hand Cannons, Sidearms, Submachine Guns, and Bows.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Small_Arms_Loader_icon.png",
        "name": "Enhanced Small Arms Loader",
        "row": 4,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Bow",
            "Hand Cannon",
            "Sidearm",
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Swords get larger bonus reserves when you pick up ammo. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Sword_Scavenger_icon.png",
        "name": "Enhanced Sword Scavenger",
        "row": 5,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating combatants or opponents with Swords has a chance to grant a large amount of Glimmer. Mod does not stack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Flourishing_Blade_icon.png",
        "name": "Flourishing Blade",
        "row": 1,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating Cabal Centurions grants Gunsmith Materials. Mod does not stack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Splintered_Gladius_icon.png",
        "name": "Splintered Gladius",
        "row": 2,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "General Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating Fallen Captains grants destination materials. Mod does not stack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/While_Ye_May_icon.png",
        "name": "While Ye May",
        "row": 3,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "General Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating combatants or opponents with Hand Cannons or Sidearms grants a small amount of Glimmer. Mod does not stack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Prized_Shooting_icon.png",
        "name": "Prized Shooting",
        "row": 4,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon",
            "Sidearm",
            "Mixed"
          ]
        },
        "type": "General Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating combatants or opponents with Auto Rifles or Submachine Guns grants a small amount of Glimmer. Mod does not stack. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Automatic_Prize_icon.png",
        "name": "Automatic Prize",
        "row": 5,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle",
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 4,
        "cost": 6,
        "description": "Landing consecutive hits on enemy targets causes disruption, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Disrupting_Blade_icon.png",
        "name": "Disrupting Blade",
        "row": 1,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Arc grenades cause disruption, delaying ability regeneration and lowering combatant damage output. Strong against Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Surge_Detonators_icon.png",
        "name": "Surge Detonators",
        "row": 2,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [
            "Arc"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "The detonations from Warmind Cells you destroy cause disruption, delaying ability energy regeneration and lowering combatant damage output, and they stagger unshielded combatants. Strong against Overload Champions and Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Hammer_of_the_Warmind_icon.png",
        "name": "Hammer of the Warmind",
        "row": 3,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [
            "Overload",
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Warmind Cell Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Solar melee abilities stagger unshielded combatants. Strong against Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Inferno_Whip_icon.png",
        "name": "Inferno Whip",
        "row": 4,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [
            "Solar"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 4,
        "cost": 3,
        "description": "Immediately regain your melee charge when you or an ally staggers an Unstoppable Champion. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Flare-Up_icon.png",
        "name": "Flare-Up",
        "row": 5,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Receive less damage from combatants that are close to you while you are wielding a sword.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Passive_Guard_icon.png",
        "name": "Passive Guard",
        "row": 1,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Activating Solar class abilities grants an overshield and increases the cooldown of your class ability.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Soul_of_the_Praxic_Fire_icon.png",
        "name": "Soul of the Praxic Fire",
        "row": 2,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Dealing damage with Arc melee, Super, and grenade abilities spawns a Warmind Cell.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Tyrant's_Surge_icon.png",
        "name": "Tyrant's Surge",
        "row": 3,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Worthy Armor Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Grants bonus damage for all Arc melee abilities and refunds Super energy on finisher final blows.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Thunder_Coil_icon.png",
        "name": "Thunder Coil",
        "row": 4,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 7,
        "description": "After throwing an Arc grenade, gain increased grenade recharge for a short time. Arc final blows extend the duration of this benefit. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Lightning_Strikes_Twice_icon.png",
        "name": "Lightning Strikes Twice",
        "row": 5,
        "source": "Destiny 2 Wiki Warmind Khanjali page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      }
    ],
    "notes": "The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Warmind Khanjali page",
        "url": "https://d2.destinygamewiki.com/wiki/Warmind_Khanjali"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Bow",
      "Pulse Rifle",
      "Hand Cannon",
      "Sidearm",
      "SMG",
      "Fusion Rifle",
      "Sword",
      "Machine Gun",
      "Mixed"
    ]
  },
  "season-of-arrivals": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Solar",
      "Arc",
      "Void"
    ],
    "mods": [
      {
        "column": 1,
        "cost": null,
        "description": "Shield-piercing rounds designed to bypass combatant defenses. Strong against Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Rounds_icon.png",
        "name": "Anti-Barrier Rounds",
        "row": 1,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Weapon Mod"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Landing consecutive hits on enemy targets causes disruption, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Rounds_icon_3.png",
        "name": "Overload Rounds",
        "row": 2,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon",
            "Sidearm",
            "Mixed"
          ]
        },
        "type": "Sidearm and Hand Cannon Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down sights loads a powerful explosive payload that staggers unshielded enemies. Strong against Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Hand_Cannon_icon.png",
        "name": "Unstoppable Hand Cannon",
        "row": 3,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Damage by fully drawn arrows causes disruption, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Arrowheads_icon.png",
        "name": "Overload Arrowheads",
        "row": 4,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Bow Mod"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Aiming down sights loads a high-impact burst that staggers unshielded enemy combatants. Strong against Unstoppable Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Burst_icon.png",
        "name": "Unstoppable Burst",
        "row": 5,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Pulse Rifle Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Greatly increases reload speed of Pulse Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Pulse_Rifle_Loader_Seasonal_icon.png",
        "name": "Enhanced Pulse Rifle Loader",
        "row": 1,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Greatly reducing flinching from incoming fire while aiming any Rifle-class weapon.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Unflinching_Rifle_Aim_icon.png",
        "name": "Enhanced Unflinching Rifle Aim",
        "row": 2,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Greatly improved target acquisition, accuracy, and aim-down-sights speed for Auto Rifles, Machine Guns, SMGs, Pulse Rifles, Sidearms, and Fusion Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Scatter_Projectile_Targeting_icon.png",
        "name": "Enhanced Scatter Projectile Targeting",
        "row": 3,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle",
            "Pulse Rifle",
            "Sidearm",
            "SMG",
            "Fusion Rifle",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Swords get larger bonus reserves when you pick up ammo.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Sword_Scavenger_icon.png",
        "name": "Enhanced Sword Scavenger",
        "row": 4,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Greatly increases the nocking speed of arrows. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Enhanced_Bow_Loader_icon.png",
        "name": "Enhanced Bow Loader",
        "row": 5,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating combatants or opponents with Swords has a chance to grant a large amount of Glimmer.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Flourishing_Blade_icon.png",
        "name": "Flourishing Blade",
        "row": 1,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating combatants or opponents with Hand Cannons or Sidearms grants a small amount of Glimmer.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Prized_Shooting_icon.png",
        "name": "Prized Shooting",
        "row": 2,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon",
            "Sidearm",
            "Mixed"
          ]
        },
        "type": "General Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating combatants or opponents with Auto Rifles or Submachine Guns grants a small amount of Glimmer.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Automatic_Prize_icon.png",
        "name": "Automatic Prize",
        "row": 3,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle",
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating Taken combatants has a chance to grant a small amount of Glimmer.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Dimensional_Tithes_icon.png",
        "name": "Dimensional Tithes",
        "row": 4,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Defeating Taken combatants with your finisher grants a large amount of glimmer. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Dark_Glimmer_icon.png",
        "name": "Ascendant Bounty",
        "row": 5,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 4,
        "cost": 3,
        "description": "Become Charged with Light whenever you or a member of your fireteam staggers or disrupts a Champion or pierces a Champion's barrier.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Counter_Charge_icon.png",
        "name": "Counter Charge",
        "row": 1,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Combat Style Armor Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Aiming down Pulse Rifle sights loads a high-impact burst that staggers unshielded combatants. Strong against Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Pulse_Rifle_icon.png",
        "name": "Unstoppable Pulse Rifle",
        "row": 2,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Void grenades cause disruption, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Grenades_icon.png",
        "name": "Overload Grenades",
        "row": 3,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Grants melee and grenade energy on final blows with shield-piercing weapons or when a member of your fireteam shuts down a Barrier Champion's ability.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Breach_Resonator_icon.png",
        "name": "Breach Resonator",
        "row": 4,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Solar melee abilities stagger unshielded combatants. Strong against Unstoppable Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Inferno_Whip_icon.png",
        "name": "Inferno Whip",
        "row": 5,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [
            "Solar"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Causing damage with a Void grenade adds a weaken effect to combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Oppressive_Darkness_icon.png",
        "name": "Oppressive Darkness",
        "row": 1,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [
            "Weaken"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Increases damage of all Solar melee abilities. Gain Super energy from performing finishers with a Solar subclass equipped.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Solar_Plexus_icon.png",
        "name": "Solar Plexus",
        "row": 2,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [
            "Solar"
          ],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 7,
        "description": "Finishers generate Heavy ammo. Requires one-half of your Super energy.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Heavy_Finisher_icon.png",
        "name": "Heavy Finisher",
        "row": 3,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Grants bonus Arc Super Damage if cast while critically wounded. Lasts until the end of the Super activation.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Volatile_Conduction_icon.png",
        "name": "Volatile Conduction",
        "row": 4,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Volatile"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Grants a chance to generate healing orbs for you on Scout Rifle, Sniper Rifle, Bow, and Linear Fusion Rifle precision final blows. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Guardian_Angel_icon.png",
        "name": "Guardian Angel",
        "row": 5,
        "source": "Destiny 2 Wiki Seed of Silver Wings page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Heal"
          ],
          "subclasses": [],
          "weapons": [
            "Bow",
            "Scout Rifle",
            "Sniper Rifle",
            "Fusion Rifle",
            "Linear Fusion Rifle",
            "Mixed"
          ]
        },
        "type": "Class Item Mod"
      }
    ],
    "notes": "The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Seed of Silver Wings page",
        "url": "https://d2.destinygamewiki.com/wiki/Seed_of_Silver_Wings"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Bow",
      "Scout Rifle",
      "Pulse Rifle",
      "Hand Cannon",
      "Sidearm",
      "SMG",
      "Sniper Rifle",
      "Fusion Rifle",
      "Sword",
      "Machine Gun",
      "Linear Fusion Rifle",
      "Mixed"
    ]
  },
  "season-of-the-hunt": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Solar",
      "Void",
      "Stasis",
      "Mixed"
    ],
    "mods": [
      {
        "column": 1,
        "cost": 1,
        "description": "Landing sustained hits on combatants with any Auto Rifle you are wielding causes disruption, delaying ability energy regeneration and lowering combatant damage output. After any member of your fireteam disrupts a Champion, your Auto Rifles gain a temporary bonus to damage against Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Rounds_icon.png",
        "name": "Overload Rounds (Auto Rifle)",
        "row": 1,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down sights with any Hand Cannon you are wielding loads a powerful explosive payload that staggers unshielded combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Hand_Cannon_icon.png",
        "name": "Unstoppable Hand Cannon",
        "row": 2,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Grants weapon shield-piercing to any Pulse Rifle you are wielding, bypassing combatant defenses. Pulse Rifles you are wielding gain a bonus to damage against Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Pulse_Rifle_icon.png",
        "name": "Anti-Barrier Pulse Rifle",
        "row": 3,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Landing consecutive hits on combatants with any Scout Rifle you are wielding causes disruption, delaying ability energy regeneration and lowering combatant damage output. After any member of your fireteam disrupts a Champion, your Scout Rifles gain a temporary bonus to damage against Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Rounds_Scout_icon.png",
        "name": "Overload Rounds (Scout Rifle)",
        "row": 4,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Grants weapon shield-piercing to any Submachine Gun you are wielding, bypassing combatant defenses. Submachine Guns you are wielding gain a bonus to damage against Barrier Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_SMG_icon.png",
        "name": "Anti-Barrier Submachine Gun",
        "row": 5,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Improved target acquisition, accuracy, and aim-down-sights speed for Hand Cannons.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Hand_Cannon_Targeting_icon.png",
        "name": "Hand Cannon Targeting",
        "row": 1,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Reduces flinching from incoming fire while aiming Pulse Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unflinching_Pulse_Rifle_Aim_icon.png",
        "name": "Unflinching Pulse Rifle Aim",
        "row": 2,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Improved target acquisition, accuracy, and aim-down-sights speed for Scout Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Scout_Rifle_Targeting_icon.png",
        "name": "Scout Rifle Targeting",
        "row": 3,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Faster ready and stow speed for Shotguns.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Shotgun_Dexterity_Icon_(Seasonal).png",
        "name": "Shotgun Dexterity",
        "row": 4,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Shotgun"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Increases reload speed of Grenade Launchers. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Grenade_Launcher_Loader_icon.png",
        "name": "Grenade Launcher Loader",
        "row": 5,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Grenade Launcher"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Reduces flinching from incoming fire while aiming Hand Cannons.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unflinching_Hand_Cannon_Aim_icon.png",
        "name": "Unflinching Hand Cannon Aim",
        "row": 1,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases reload speed of Pulse Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Pulse_Rifle_Loader_icon.png",
        "name": "Pulse Rifle Loader",
        "row": 2,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Reduces flinching from incoming fire while aiming Scout Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unflinching_Scout_Rifle_Aim_icon.png",
        "name": "Unflinching Scout Rifle Aim",
        "row": 3,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases your chance of finding ammo while you have a Shotgun equipped.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Shotgun_Ammo_Finder_Icon_(Seasonal).png",
        "name": "Shotgun Ammo Finder",
        "row": 4,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Shotgun"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Grenade Launchers get bonus reserves when you pick up ammo. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Grenade_Launcher_Scavenger_icon.png",
        "name": "Grenade Launcher Scavenger",
        "row": 5,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Grenade Launcher"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Recharge your melee ability whenever you or a member of your fireteam staggers a Champion.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Momentum_Siphon_icon.png",
        "name": "Momentum Siphon",
        "row": 1,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Recharge your grenade ability whenever you or a member of your fireteam disrupts a Champion.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Surge_Eater_icon.png",
        "name": "Surge Eater",
        "row": 2,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Void melee abilities stagger unshielded combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Schwarzschild_Condensor_icon.png",
        "name": "Unstoppable Schwarzschild Condensor",
        "row": 3,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Solar and Stasis grenades cause disruption, delaying ability regeneration and lowering combatant damage output.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Thermal_Overload_icon.png",
        "name": "Thermal Overload",
        "row": 4,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [
            "Solar",
            "Stasis",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 6,
        "description": "Defeating a Champion by using a finisher spawns Heavy ammo for you and your fireteam. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Spoils_of_War_icon.png",
        "name": "Spoils of War",
        "row": 5,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Shotguns you wield fire a powerful explosive payload that staggers unshielded combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Shotgun_icon.png",
        "name": "Unstoppable Shotgun",
        "row": 1,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Shotgun"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 5,
        "cost": 4,
        "description": "Casting a Solar Super restores you to full health and shields.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Pyretic_Embrace_Icon.png",
        "name": "Pyretic Embrace",
        "row": 2,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Heal"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "When your Super ends, you gain a temporary bonus to weapon damage.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Berserker_icon.png",
        "name": "Berserker",
        "row": 3,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 2,
        "description": "Become Charged with Light by defeating combatants with Void melee abilities.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Abyssal_Charge_icon.png",
        "name": "Abyssal Charge",
        "row": 4,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Combat Style Armor Mod"
      },
      {
        "column": 5,
        "cost": 2,
        "description": "Rapidly defeating combatants with Solar or Stasis melee attacks creates an Orb of Power for your fireteam members. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Thermal_Blooming_icon.png",
        "name": "Thermal Blooming",
        "row": 5,
        "source": "Destiny 2 Wiki Fang of Xivu Arath page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar",
            "Stasis",
            "Mixed"
          ],
          "mechanics": [
            "Orb of Power"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Arms Armor Mod"
      }
    ],
    "notes": "The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Fang of Xivu Arath page",
        "url": "https://d2.destinygamewiki.com/wiki/Fang_of_Xivu_Arath"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Scout Rifle",
      "Pulse Rifle",
      "Hand Cannon",
      "SMG",
      "Shotgun",
      "Grenade Launcher",
      "Machine Gun",
      "Mixed"
    ]
  },
  "season-of-the-chosen": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Solar",
      "Arc",
      "Stasis"
    ],
    "mods": [
      {
        "column": 1,
        "cost": 1,
        "description": "Damage by fully drawn arrows disrupts combatants, stunning them, delaying ability energy regeneration and lowering combatant damage output.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Bow_Icon.png",
        "name": "Overload Bow",
        "row": 1,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down Pulse Rifle sights loads a high-impact burst that stuns unshielded combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Pulse_Rifle_icon.png",
        "name": "Unstoppable Pulse Rifle",
        "row": 2,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Scout Rifles you are wielding fire shield-piercing rounds and stun Barrier Champions. Scout Rifles deal bonus damage against Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Scout_Rifle_Icon.png",
        "name": "Anti-Barrier Scout Rifle",
        "row": 3,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down sights with any Hand Cannon you are wielding loads a powerful explosive payload that stuns unshielded combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Hand_Cannon_icon.png",
        "name": "Unstoppable Hand Cannon",
        "row": 4,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Uninterrupted fire from your equipped SMGs grants bullets that stun combatants, delaying ability energy regeneration and lowering combatant damage output. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Submachine_Gun_Icon.png",
        "name": "Overload Submachine Gun",
        "row": 5,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 2,
        "description": "Improves targeting for Scout Rifles and Sniper Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Scout_and_Sniper_Rifle_Targeting_icon.png",
        "name": "Scout and Sniper Rifle Targeting",
        "row": 1,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle",
            "Sniper Rifle",
            "Mixed"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Increases reload speed of Scout Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Scout_Rifle_Loader_Icon_(Seasonal).png",
        "name": "Scout Rifle Loader",
        "row": 2,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Faster ready and stow speed for Bows.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Bow_Dexterity_Icon_(Seasonal).png",
        "name": "Bow Dexterity",
        "row": 3,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Faster ready and stow speed for Sniper Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Sniper_Rifle_Dexterity_Icon_(Seasonal).png",
        "name": "Sniper Rifle Dexterity",
        "row": 4,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sniper Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Faster ready and stow speed for Sidearms. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Sidearm_Dexterity_Icon_(Seasonal).png",
        "name": "Sidearm Dexterity",
        "row": 5,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sidearm"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Reduces flinching from incoming fire while aiming Scout Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unflinching_Scout_Rifle_Aim_icon.png",
        "name": "Unflinching Scout Rifle Aim",
        "row": 1,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Sniper Rifles get bonus reserves when you pick up Special ammo.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Sniper_Rifle_Scavenger_Icon_(Seasonal).png",
        "name": "Sniper Rifle Scavenger",
        "row": 2,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sniper Rifle"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases reload speed of Bows.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Bow_Reloader_Icon_(Seasonal).png",
        "name": "Bow Reloader",
        "row": 3,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Reduces flinching from incoming fire while aiming Sniper Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unflinching_Sniper_Aim_Icon_(Seasonal).png",
        "name": "Unflinching Sniper Aim",
        "row": 4,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sniper Rifle"
          ]
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases reload speed of Submachine Guns. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Submachine_Gun_Loader_Icon_(Seasonal).png",
        "name": "Submachine Gun Loader",
        "row": 5,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 6,
        "description": "Sniper Rifles you are wielding fire shield-piercing rounds and stun Barrier Champions. Sniper Rifles deal bonus damage against Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Sniper_Rifle_Icon.png",
        "name": "Anti-Barrier Sniper Rifle",
        "row": 1,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sniper Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 6,
        "description": "Landing consecutive hits with any Sword you are wielding disrupts combatants, stunning them, delaying ability energy regeneration and lowering combatant damage output.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Disrupting_Blade_icon.png",
        "name": "Disrupting Blade",
        "row": 2,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Gain Stasis ability energy whenever you or a member of your fireteam stuns a Champion.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Resonance_Siphon_Icon.png",
        "name": "Resonance Siphon",
        "row": 3,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [
            "Stasis"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Arc grenades disrupt combatants, stunning them, delaying ability regeneration and lowering combatant damage output.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Surge_Detonators_icon.png",
        "name": "Surge Detonators",
        "row": 4,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [
            "Arc"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Solar melee abilities stun unshielded combatants. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Inferno_Whip_icon.png",
        "name": "Inferno Whip",
        "row": 5,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Your Light abilities do bonus damage to combatants affected by Stasis.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Focusing_Lens_Icon.png",
        "name": "Focusing Lens",
        "row": 1,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [
            "Stasis"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Receive less damage from combatants that are close to you while you are wielding a sword.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Passive_Guard_icon.png",
        "name": "Passive Guard",
        "row": 2,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Defeating targets with your Stasis Super refunds Super energy.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Glacial_Inheritance_Icon.png",
        "name": "Glacial Inheritance",
        "row": 3,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [
            "Stasis"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Rapid precision hits against distant combatants weaken them for a short duration.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Sundering_Glare_Icon.png",
        "name": "Sundering Glare",
        "row": 4,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Weaken"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Grants bonus Arc Super damage if cast while critically wounded. Lasts until the end of the Super activation. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Volatile_Conduction_icon.png",
        "name": "Volatile Conduction",
        "row": 5,
        "source": "Destiny 2 Wiki Bell of Conquests page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Volatile"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      }
    ],
    "notes": "The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Bell of Conquests page",
        "url": "https://d2.destinygamewiki.com/wiki/Bell_of_Conquests"
      }
    ],
    "weaponFocus": [
      "Bow",
      "Scout Rifle",
      "Pulse Rifle",
      "Hand Cannon",
      "Sidearm",
      "SMG",
      "Sniper Rifle",
      "Sword",
      "Machine Gun",
      "Mixed"
    ]
  },
  "season-of-the-splicer": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Arc",
      "Void",
      "Stasis"
    ],
    "mods": [
      {
        "column": 1,
        "cost": 1,
        "description": "Uninterrupted fire from your equipped SMGs grants bullets that stun combatants, delaying ability energy regeneration and lowering combatant damage output. Strong against OverloadOverload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Submachine_Gun_Icon.png",
        "name": "Overload Submachine Gun",
        "row": 1,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Scout Rifles you are wielding fire shield-piercing rounds and stun BarrierBarrier Champions. Scout Rifles deal bonus damage against BarrierBarrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Scout_Rifle_Icon.png",
        "name": "Anti-Barrier Scout Rifle",
        "row": 2,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down sights with any Sidearm you are wielding loads a powerful explosive payload that stuns unshielded combatants. Strong against UnstoppableUnstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Sidearm_icon.png",
        "name": "Unstoppable Sidearm",
        "row": 3,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sidearm"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Landing consecutive hits disrupts combatants, stunning them, delaying ability energy regeneration and lowering combatant damage output. Strong against OverloadOverload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Hand_Cannon_icon.png",
        "name": "Overload Hand Cannon",
        "row": 4,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Auto Rifles you are wielding fire shield-piercing rounds and stun BarrierBarrier Champions. Auto Rifles deal bonus damage against BarrierBarrier Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Auto_Rifle_icon.png",
        "name": "Anti-Barrier Auto Rifle",
        "row": 5,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Grenade Launchers get bonus reserves when you pick up ammo.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Grenade_Launcher_Scavenger_icon.png",
        "name": "Grenade Launcher Scavenger",
        "row": 1,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Grenade Launcher"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Rocket Launchers get bonus reserves when you pick up ammo.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Rocket_Launcher_Scavenger_Seasonal_icon.png",
        "name": "Rocket Launcher Scavenger",
        "row": 2,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Rocket Launcher"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Reduces flinching from incoming fire while aiming Pulse Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unflinching_Pulse_Rifle_Aim_icon.png",
        "name": "Unflinching Pulse Rifle Aim",
        "row": 3,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Increases reload speed of Scout Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Scout_Rifle_Loader_Icon_(Seasonal).png",
        "name": "Scout Rifle Loader",
        "row": 4,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Become Charged with Light by rapidly defeating multiple combatants with Grenade Launchers or Rocket Launchers. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Blast_Radius_Seasonal_icon.png",
        "name": "Blast Radius",
        "row": 5,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Grenade Launcher",
            "Rocket Launcher",
            "Mixed"
          ]
        },
        "type": "Charged with Light Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Greatly reduces flinching from incoming fire while aiming Auto Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unflinching_Auto_Rifle_Aim_Seasonal_icon.png",
        "name": "Unflinching Auto Rifle Aim",
        "row": 1,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "While Charged with Light, readying or firing a Rocket Launcher grants it increased damage and reload speed. Damaging a combatant with a rocket consumes one stack of Charged with Light.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Argent_Ordnance_Seasonal_icon.png",
        "name": "Argent Ordnance",
        "row": 2,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Rocket Launcher"
          ]
        },
        "type": "Charged with Light Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Faster ready and stow speed for Grenade Launchers.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Grenade_Launcher_Dexterity_Seasonal_icon.png",
        "name": "Grenade Launcher Dexterity",
        "row": 3,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Grenade Launcher"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases reload speed of Rocket Launchers.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Rocket_Launcher_Loader_Seasonal_icon.png",
        "name": "Rocket Launcher Loader",
        "row": 4,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Rocket Launcher"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Gain bonus Super energy on grenade kills. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Ashes_to_Assets_Seasonal_icon.png",
        "name": "Ashes to Assets",
        "row": 5,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 4,
        "cost": 7,
        "description": "When you ready or reload a Grenade Launcher, for a short period, that weapon stuns Unstoppable Champions. Strong against UnstoppableUnstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Grenade_Launcher_icon.png",
        "name": "Unstoppable Grenade Launcher",
        "row": 1,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Grenade Launcher"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "The detonations from Warmind Cells you destroy cause disruption, stunning combatants, delaying ability energy regeneration and lowering combatant damage output. Strong against OverloadOverload Champions and UnstoppableUnstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Hammer_of_the_Warmind_icon.png",
        "name": "Hammer of the Warmind",
        "row": 2,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [
            "Overload",
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Warmind Cell Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Stunning a Champion creates an explosive blast.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Sundering_Blast_icon.png",
        "name": "Sundering Blast",
        "row": 3,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Arc grenades disrupt combatants, stunning them, delaying ability regeneration and lowering combatant damage output. Strong against OverloadOverload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Surge_Detonators_icon.png",
        "name": "Surge Detonators",
        "row": 4,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [
            "Arc"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Void melee abilities Unstoppablestun unshielded combatants. Strong against UnstoppableUnstoppable Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Schwarzschild_Condensor_icon.png",
        "name": "Unstoppable Schwarzschild Condensor",
        "row": 5,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 9,
        "description": "When using a Grenade Launcher, damaging a boss, damaging a Champion, or breaking a combatant's shield reloads your stowed weapons and causes the combatant to take increased damage for a short duration.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Breach_and_Clear_icon.png",
        "name": "Breach and Clear",
        "row": 1,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Grenade Launcher"
          ]
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Defeating targets with your Stasis Super refunds Super energy.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Glacial_Inheritance_Icon.png",
        "name": "Glacial Inheritance",
        "row": 2,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [
            "Stasis"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Void splash damage final blows have a chance to create Warmind Cells.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Warmind's_Decree_icon.png",
        "name": "Warmind's Decree",
        "row": 3,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Warmind Cell Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Grenade final blows grant grenade energy. Multiple copies of this mod increase the amount of energy gained.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Impulse_Recycler_icon.png",
        "name": "Impulse Recycler",
        "row": 4,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 5,
        "cost": 2,
        "description": "Your Dragonfly, Chain Reaction, and Firefly explosions deal more damage. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Energy_Accelerant_icon.png",
        "name": "Energy Accelerant",
        "row": 5,
        "source": "Destiny 2 Wiki Paradrome Cube page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      }
    ],
    "notes": "The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Paradrome Cube page",
        "url": "https://d2.destinygamewiki.com/wiki/Paradrome_Cube"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Scout Rifle",
      "Pulse Rifle",
      "Hand Cannon",
      "Sidearm",
      "SMG",
      "Grenade Launcher",
      "Rocket Launcher",
      "Machine Gun",
      "Mixed"
    ]
  },
  "season-of-the-lost": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Solar",
      "Stasis",
      "Mixed"
    ],
    "mods": [
      {
        "column": 1,
        "cost": 1,
        "description": "Auto Rifles you are wielding fire shield-piercing rounds and stun Barrier Barrier Champions. Auto Rifles deal bonus damage against Barrier Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Auto_Rifle_icon.png",
        "name": "Anti-Barrier Auto Rifle",
        "row": 1,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Damage by fully drawn arrows disrupts combatants, stunning them, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Bow_Icon.png",
        "name": "Overload Bow",
        "row": 2,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down Pulse Rifle sights loads a high-impact burst that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Pulse_Rifle_icon.png",
        "name": "Unstoppable Pulse Rifle",
        "row": 3,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down sights with any Sidearm you are wielding loads a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Sidearm_icon.png",
        "name": "Unstoppable Sidearm",
        "row": 4,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sidearm"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 6,
        "description": "Landing consecutive hits with any Sword you are wielding disrupts combatants, stunning them, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Disrupting_Blade_icon.png",
        "name": "Disrupting Blade",
        "row": 5,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Gain bonus Super energy on melee kills.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Hands-On_Icon_(Seasonal).png",
        "name": "Hands-On",
        "row": 1,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Faster ready and stow speed for Shotguns.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Shotgun_Dexterity_Icon_(Seasonal).png",
        "name": "Shotgun Dexterity",
        "row": 2,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Shotgun"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Swords get larger bonus reserves when you pick up ammo.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Sword_Scavenger_Icon_(Seasonal).png",
        "name": "Sword Scavenger",
        "row": 3,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Increases reload speed of Fusion Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Fusion_Rifle_Loader_Icon_(Seasonal).png",
        "name": "Fusion Rifle Loader",
        "row": 4,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Fusion Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Improved target acquisition, accuracy, and aim-down-sights speed for Linear Fusion Rifles. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Linear_Fusion_Rifle_Targeting_Icon_(Seasonal).png",
        "name": "Linear Fusion Rifle Targeting",
        "row": 5,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Fusion Rifle",
            "Linear Fusion Rifle",
            "Mixed"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases reload speed of Auto Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Auto_Rifle_Loader_Icon_(Seasonal).png",
        "name": "Auto Rifle Loader",
        "row": 1,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases your chance of finding ammo while you have a Shotgun equipped.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Shotgun_Ammo_Finder_Icon_(Seasonal).png",
        "name": "Shotgun Ammo Finder",
        "row": 2,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Shotgun"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 3,
        "cost": 6,
        "description": "Receive less damage from combatants that are close to you while you are wielding a sword.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Passive_Guard_icon.png",
        "name": "Passive Guard",
        "row": 3,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Class Item Mod"
      },
      {
        "column": 3,
        "cost": 3,
        "description": "Fusion Rifles get bonus reserves when picking up ammo used by that Fusion Rifle.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Fusion_Scavenger_Icon.png",
        "name": "Fusion Scavenger",
        "row": 4,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Fusion Rifle"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Faster ready and stow speed for Sidearms. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Sidearm_Dexterity_Icon_(Seasonal).png",
        "name": "Sidearm Dexterity",
        "row": 5,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sidearm"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Aiming down Fusion Rifle and Linear Fusion Rifle sights loads a high-impact burst that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Fusion_Rifles_Icon.png",
        "name": "Unstoppable Fusion Rifles",
        "row": 1,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Fusion Rifle",
            "Linear Fusion Rifle",
            "Mixed"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 6,
        "description": "Causing damage with a Solar ability weakens Champions for a short duration.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Withering_Heat_Icon.png",
        "name": "Withering Heat",
        "row": 2,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Weaken"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Gain StasisStasis ability energy whenever you or a member of your fireteam stuns a Champion.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Resonance_Siphon_Icon.png",
        "name": "Resonance Siphon",
        "row": 3,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [
            "Stasis"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 3,
        "description": "Solar and Stasis melees disrupt combatants, stunning them, delaying ability regeneration and lowering combatant damage output. Strong against Overload Overload Champions. Refresh your melee ability whenever you or a member of your fireteam stuns an Overload Champion.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Thermoclastic_Strike_Icon.png",
        "name": "Thermoclastic Strike",
        "row": 4,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [
            "Solar",
            "Stasis",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Defeating a Champion spawns a random array of Solar and Stasis wells. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Fire_and_Ice_Icon.png",
        "name": "Fire and Ice",
        "row": 5,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar",
            "Stasis",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Elemental Well Mod"
      },
      {
        "column": 5,
        "cost": 5,
        "description": "Picking up a matching elemental well grants you Super energy.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Well_of_Potency_Icon.png",
        "name": "Well of Potency",
        "row": 1,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Elemental Well Mod"
      },
      {
        "column": 5,
        "cost": 4,
        "description": "Casting a Solar Super restores you to full health and shields.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Pyretic_Embrace_Icon.png",
        "name": "Pyretic Embrace",
        "row": 2,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Heal"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 2,
        "description": "Defeating a combatant with a Solar or Stasis melee creates an Orb of Power.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Thermoclastic_Blooming_Icon.png",
        "name": "Thermoclastic Blooming",
        "row": 3,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar",
            "Stasis",
            "Mixed"
          ],
          "mechanics": [
            "Orb of Power"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Your Light abilities do bonus damage to combatants affected by Stasis.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Focusing_Lens_Icon.png",
        "name": "Focusing Lens",
        "row": 4,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [
            "Stasis"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 7,
        "description": "Dealing damage to a combatant with a Fusion Rifle or Linear Fusion Rifle grants bonus damage with a Fusion Rifle or Linear Fusion Rifle against that combatant for a short duration. This effect stacks up to 5 times. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Particle_Deconstruction_Icon.png",
        "name": "Particle Deconstruction",
        "row": 5,
        "source": "Destiny 2 Wiki Wayfinder's Compass page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Fusion Rifle",
            "Linear Fusion Rifle",
            "Mixed"
          ]
        },
        "type": "Class Item Mod"
      }
    ],
    "notes": "The full mod grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Wayfinder's Compass page",
        "url": "https://d2.destinygamewiki.com/wiki/Wayfinder%27s_Compass"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Bow",
      "Pulse Rifle",
      "Sidearm",
      "Shotgun",
      "Fusion Rifle",
      "Sword",
      "Linear Fusion Rifle",
      "Mixed"
    ]
  },
  "season-of-the-risen": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Solar",
      "Arc",
      "Void",
      "Mixed"
    ],
    "mods": [
      {
        "column": 1,
        "cost": 1,
        "description": "Scout Rifles you are wielding fire shield-piercing rounds and stun Barrier Barrier Champions. Scout Rifles deal bonus damage against Barrier Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Scout_Rifle_Icon.png",
        "name": "Anti-Barrier Scout Rifle",
        "row": 1,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Uninterrupted fire from your equipped Auto Rifles and Submachine Guns grants bullets that stun combatants, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Rounds_icon_2.png",
        "name": "Overload Rounds",
        "row": 2,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle",
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down sights with any Hand Cannon you are wielding loads a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Hand_Cannon_icon.png",
        "name": "Unstoppable Hand Cannon",
        "row": 3,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Bows gain shield-piercing arrows, which bypass combatant defenses. Strong against Barrier Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Piercing_Bowstring_icon.png",
        "name": "Piercing Bowstring",
        "row": 4,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down Pulse Rifle sights loads a high-impact burst that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Pulse_Rifle_icon.png",
        "name": "Unstoppable Pulse Rifle",
        "row": 5,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Faster ready and stow speed for Glaives.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Glaive_Dexterity_icon_(Seasonal).png",
        "name": "Glaive Dexterity",
        "row": 1,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Glaive"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Rocket Launchers get bonus reserves when picking up Heavy ammo.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Rocket_Launcher_Scavenger_Seasonal_icon.png",
        "name": "Rocket Launcher Scavenger",
        "row": 2,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Rocket Launcher"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Increases the duration of the Psychohack Origin Trait and the effect of the Suros Synergy Origin Trait.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Psionic_Forging_I_icon.png",
        "name": "Psionic Forging I",
        "row": 3,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Powered melee combatant final blows spawn elemental wells matching your subclass energy type.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Melee_Wellmaker_icon_(Seasonal).png",
        "name": "Melee Wellmaker",
        "row": 4,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Elemental Well Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Improved target acquisition, accuracy, and aim-down-sights speed for Hand Cannons. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Hand_Cannon_Targeting_icon.png",
        "name": "Hand Cannon Targeting",
        "row": 5,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Glaives get bonus reserves when picking up ammo used by that Glaive.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Glaive_Scavenger_icon_(Seasonal).png",
        "name": "Glaive Scavenger",
        "row": 1,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Glaive"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 3,
        "cost": 2,
        "description": "Reduces incoming Arc damage from combatants. Reduces incoming Solar damage from combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Thermoshock_Plating_icon.png",
        "name": "Thermoshock Plating",
        "row": 2,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar",
            "Arc",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases reload speed of Auto Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Auto_Rifle_Loader_Icon_(Seasonal).png",
        "name": "Auto Rifle Loader",
        "row": 3,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Picking up an elemental well that matches your subclass energy type grants a temporary bonus to weapon damage of that same elemental type.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Font_Of_Might_icon_(Seasonal).png",
        "name": "Font of Might",
        "row": 4,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Elemental Well Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases the duration of the Land Tank Origin Trait and the effect of the Häkke Breach Armaments Origin Trait. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Psionic_Forging_II_icon.png",
        "name": "Psionic Forging II",
        "row": 5,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 4,
        "cost": 3,
        "description": "Glaives you wield fire a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Glaive_icon.png",
        "name": "Unstoppable Glaive",
        "row": 1,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Glaive"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 3,
        "description": "Defeating a Lucent Hive Lightbearer or Champion with your finisher spawns Heavy ammo for you and your allies.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Lucent_Finisher_icon.png",
        "name": "Lucent Finisher",
        "row": 2,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 4,
        "description": "Damaging combatants with your Glaive suppresses them, preventing them from using abilities for a short time.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Suppressing_Glaive_icon.png",
        "name": "Suppressing Glaive",
        "row": 3,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Glaive"
          ]
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Void grenades disrupt combatants, stunning them, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Grenades_icon.png",
        "name": "Overload Grenades",
        "row": 4,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Solar melee abilities stun unshielded combatants. Strong against Unstoppable Unstoppable Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Inferno_Whip_icon.png",
        "name": "Inferno Whip",
        "row": 5,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [
            "Solar"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Suppression effects you create have increased duration.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Suppression_Mastery_icon.png",
        "name": "Suppression Mastery",
        "row": 1,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Casting your Void Super while you are critically wounded or benefitting from Devour increases your damage with that Super.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Devouring_Depths_icon.png",
        "name": "Devouring Depths",
        "row": 2,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [
            "Devour"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 2,
        "description": "Picking up a Void elemental well grants your Void weapons Volatile rounds.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Volatile_Flow_icon.png",
        "name": "Volatile Flow",
        "row": 3,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [
            "Volatile"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Elemental Well Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Gain energy for your least-charged ability when you suppress a target.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Energy_Vampirism_icon.png",
        "name": "Energy Vampirism",
        "row": 4,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 7,
        "description": "Whenever you suppress a combatant, you also weaken them, causing them to take additional damage for a short time. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Suppressive_Darkness_icon.png",
        "name": "Suppressive Darkness",
        "row": 5,
        "source": "Destiny 2 Wiki Synaptic Spear page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Weaken"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      }
    ],
    "notes": "The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Synaptic Spear page",
        "url": "https://d2.destinygamewiki.com/wiki/Synaptic_Spear"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Bow",
      "Scout Rifle",
      "Pulse Rifle",
      "Hand Cannon",
      "SMG",
      "Glaive",
      "Rocket Launcher",
      "Machine Gun",
      "Mixed"
    ]
  },
  "season-of-the-haunted": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Solar",
      "Void",
      "Mixed"
    ],
    "mods": [
      {
        "column": 1,
        "cost": 1,
        "description": "Sidearms gain shield-piercing rounds, which bypass combatant defenses. Strong against Barrier Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Piercing_Sidearms_icon.png",
        "name": "Piercing Sidearms",
        "row": 1,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sidearm"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Uninterrupted fire from your equipped Auto Rifles and Submachine Guns grants bullets that stun combatants, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Rounds_icon_2.png",
        "name": "Overload Rounds",
        "row": 2,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle",
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down sights for a short time causes Scout Rifles you wield to fire a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Scout_Rifle_icon.png",
        "name": "Unstoppable Scout Rifle",
        "row": 3,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 3,
        "description": "Glaives you wield fire a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Glaive_icon.png",
        "name": "Unstoppable Glaive",
        "row": 4,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Glaive"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Pulse Rifles you are wielding fire shield-piercing rounds and stun Barrier Barrier Champions. Pulse Rifles deal bonus damage against Barrier Barrier Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Pulse_Rifle_icon.png",
        "name": "Anti-Barrier Pulse Rifle",
        "row": 5,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Gradually reloads your stowed Shotguns over time. Multiple copies of this perk stack to reduce the time taken to fully reload.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Shotgun_Holster_icon_(Seasonal).png",
        "name": "Shotgun Holster",
        "row": 1,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Shotgun"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Increases your chance of finding Special ammo while you have a Trace Rifle equipped.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Trace_Rifle_Ammo_Finder_icon_(Seasonal).png",
        "name": "Trace Rifle Ammo Finder",
        "row": 2,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Trace Rifle"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Increases the duration of the Psychohack Origin Trait and the effect of the Extrovert Origin Trait.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Nightmarish_Opulence_icon.png",
        "name": "Nightmarish Opulence",
        "row": 3,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Improved target acquisition, accuracy, and aim-down-sights speed for Pulse Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Pulse_Rifle_Targeting_icon_(Seasonal).png",
        "name": "Pulse Rifle Targeting",
        "row": 4,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Gradually reloads your stowed Sidearms over time. Multiple copies of this perk stack to reduce the time taken to fully reload. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Sidearm_Holster_icon_(Seasonal).png",
        "name": "Sidearm Holster",
        "row": 5,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Sidearm"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Faster ready and stow speed for Shotguns.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Shotgun_Dexterity_Icon_(Seasonal).png",
        "name": "Shotgun Dexterity",
        "row": 1,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Shotgun"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases the amount of Trace Rifle ammo you can carry.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Trace_Rifle_Reserves_icon_(Seasonal).png",
        "name": "Trace Rifle Reserves",
        "row": 2,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Trace Rifle"
          ]
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases the buff effect of the To Excess Origin Trait and the healing effect of the Souldrinker Origin Trait.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unquenchable_Thirst_icon.png",
        "name": "Unquenchable Thirst",
        "row": 3,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Heal",
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Solar Resistance: Reduces incoming Solar damage from combatants. Void Resistance: Reduces incoming Void damage from combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Armor_of_the_Dying_Star_icon.png",
        "name": "Armor of the Dying Star",
        "row": 4,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar",
            "Void",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Faster ready and stow speed for Sidearms. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Sidearm_Dexterity_Icon_(Seasonal).png",
        "name": "Sidearm Dexterity",
        "row": 5,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sidearm"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 3,
        "description": "Uninterrupted fire from your equipped Trace Rifles causes the beam to stun combatants, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Trace_Rifles_icon.png",
        "name": "Overload Trace Rifles",
        "row": 1,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Trace Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 4,
        "description": "Stunning a Champion causes it to ignite and clears your shield stun.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Revitalizing_Blast_icon.png",
        "name": "Revitalizing Blast",
        "row": 2,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Ignite"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 6,
        "description": "Causing damage with a Solar ability weakens Champions for a short duration.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Withering_Heat_Icon.png",
        "name": "Withering Heat",
        "row": 3,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Weaken"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Solar grenades cause Overload disruption, delaying ability regeneration and lowering combatant damage output. Strong against Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Molten_Overload_S17_icon.png",
        "name": "Molten Overload",
        "row": 4,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [
            "Solar"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "While you have a Glaive equipped, the Unstable Essence buff gained by picking up objects dropped by Nightmares has double its normal duration. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Glaive_of_Dreams_icon.png",
        "name": "Glaive of Dreams",
        "row": 5,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Glaive"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Activating your Solar class abilities grants you restoration.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Classy_Restoration_icon.png",
        "name": "Classy Restoration",
        "row": 1,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Restoration"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 5,
        "description": "Picking up an Orb of Power makes you radiant.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Radiant_Orbs_icon.png",
        "name": "Radiant Orbs",
        "row": 2,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Orb of Power",
            "Radiant"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "While radiant, Solar precision final blows cause combatants to ignite.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Rays_of_Precision_icon.png",
        "name": "Rays of Precision",
        "row": 3,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Ignite",
            "Radiant"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 5,
        "description": "Solar Exotic final blows create Solar elemental wells.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Flame_Harvesting_icon.png",
        "name": "Flame Harvesting",
        "row": 4,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Your ignitions do increased damage in an increased radius. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Solar_Fulmination_icon.png",
        "name": "Solar Fulmination",
        "row": 5,
        "source": "Destiny 2 Wiki Nightmare Harvester page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      }
    ],
    "notes": "The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Nightmare Harvester page",
        "url": "https://d2.destinygamewiki.com/wiki/Nightmare_Harvester"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Scout Rifle",
      "Pulse Rifle",
      "Sidearm",
      "SMG",
      "Shotgun",
      "Glaive",
      "Machine Gun",
      "Trace Rifle",
      "Mixed"
    ]
  },
  "season-of-plunder": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Solar",
      "Arc",
      "Mixed"
    ],
    "mods": [
      {
        "column": 1,
        "cost": 1,
        "description": "Damage by fully drawn arrows disrupts combatants, stunning them, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Bow_Icon.png",
        "name": "Overload Bow",
        "row": 1,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down Pulse Rifle sights loads a high-impact burst that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Pulse_Rifle_icon.png",
        "name": "Unstoppable Pulse Rifle",
        "row": 2,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Scout Rifles you are wielding fire shield-piercing rounds and stun Barrier Barrier Champions. Scout Rifles deal bonus damage against Barrier Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Scout_Rifle_Icon.png",
        "name": "Anti-Barrier Scout Rifle",
        "row": 3,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Auto Rifles you are wielding fire shield-piercing rounds and stun Barrier Barrier Champions. Auto Rifles deal bonus damage against Barrier Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Auto_Rifle_icon.png",
        "name": "Anti-Barrier Auto Rifle",
        "row": 4,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 3,
        "description": "Shotguns you wield fire a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Shotgun_icon.png",
        "name": "Unstoppable Shotgun",
        "row": 5,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Shotgun"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Increases reload speed of Scout Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Scout_Rifle_Loader_Icon_(Seasonal).png",
        "name": "Scout Rifle Loader",
        "row": 1,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Swords get larger bonus reserves when you pick up ammo.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Sword_Scavenger_Icon_(Seasonal).png",
        "name": "Sword Scavenger",
        "row": 2,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Gradually reloads your stowed Machine Guns over time. Multiple copies of this perk stack to reduce the time taken to fully reload.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Machine_Gun_Holster_icon_(Seasonal).png",
        "name": "Machine Gun Holster",
        "row": 3,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Machine Gun"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 2,
        "cost": 2,
        "description": "Improves targeting for Scout Rifles and Sniper Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Scout_and_Sniper_Rifle_Targeting_icon.png",
        "name": "Scout and Sniper Rifle Targeting",
        "row": 4,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle",
            "Sniper Rifle",
            "Mixed"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Improves the effect of the Right Hook and Runneth Over weapon Origin perks. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Bottomless_Bounty_I_icon.png",
        "name": "Bottomless Bounty I",
        "row": 5,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases reload speed of Glaives.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Glaive_Loader_icon_(Seasonal).png",
        "name": "Glaive Loader",
        "row": 1,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Glaive"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Grants class ability energy when you cause damage with a melee attack.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Focusing_Strike_icon_(Seasonal).png",
        "name": "Focusing Strike",
        "row": 2,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 2,
        "description": "Arc Damage Resistance: Reduces incoming Arc damage from combatants. Solar Damage Resistance: Reduces incoming Solar damage from combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Thermoshock_Plating_icon.png",
        "name": "Thermoshock Plating",
        "row": 3,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar",
            "Arc",
            "Mixed"
          ],
          "mechanics": [
            "Damage Resistance"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Machine Guns get bonus reserves when you pick up ammo.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Machine_Gun_Scavenger_icon_(Seasonal).png",
        "name": "Machine Gun Scavenger",
        "row": 4,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Machine Gun"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Improves the effect of the Soul Drinker and Hot Swap weapon Origin perks. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Bottomless_Bounty_II_icon.png",
        "name": "Bottomless Bounty II",
        "row": 5,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Uninterrupted fire from your equipped Machine Guns grants bullets that stun combatants, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Machine_Guns_icon.png",
        "name": "Overload Machine Guns",
        "row": 1,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Machine Gun"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 6,
        "description": "Sniper Rifles you are wielding fire shield-piercing rounds and stun Barrier Barrier Champions. Sniper Rifles deal bonus damage against Barrier Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Sniper_Rifle_Icon.png",
        "name": "Anti-Barrier Sniper Rifle",
        "row": 2,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sniper Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Damaging a Champion with an Arc ability causes the Champion to become jolted.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Bad_Amplitude_icon.png",
        "name": "Bad Amplitude",
        "row": 3,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Jolt"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Arc grenades disrupt combatants, stunning them, delaying ability regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Surge_Detonators_icon.png",
        "name": "Surge Detonators",
        "row": 4,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [
            "Arc"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 2,
        "description": "Solar melee abilities stun unshielded combatants. Strong against Unstoppable Unstoppable Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Inferno_Whip_icon.png",
        "name": "Inferno Whip",
        "row": 5,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [
            "Solar"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Grants bonus Arc Super damage if cast while critically wounded or while amplified. Lasts until the end of the Super activation.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Thunderous_Retort_icon.png",
        "name": "Thunderous Retort",
        "row": 1,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Amplified"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 1,
        "description": "Stay amplified longer.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Amped_Up_icon.png",
        "name": "Amped Up",
        "row": 2,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Amplified"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 4,
        "description": "Dealing precision damage to combatants affected by Arc debuffs spawns an Ionic Trace.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Trace_Evidence_icon.png",
        "name": "Trace Evidence",
        "row": 3,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 7,
        "description": "After throwing an Arc grenade, gain increased grenade recharge for a short time. Arc final blows extend the duration of this benefit.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Lightning_Strikes_Twice_icon.png",
        "name": "Lightning Strikes Twice",
        "row": 4,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Rapid precision hits against distant combatants weaken them for a short duration. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Sundering_Glare_Icon.png",
        "name": "Sundering Glare",
        "row": 5,
        "source": "Destiny 2 Wiki Skeleton Key page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Weaken"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      }
    ],
    "notes": "The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Skeleton Key page",
        "url": "https://d2.destinygamewiki.com/wiki/Skeleton_Key"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Bow",
      "Scout Rifle",
      "Pulse Rifle",
      "Shotgun",
      "Sniper Rifle",
      "Glaive",
      "Sword",
      "Machine Gun",
      "Mixed"
    ]
  },
  "season-of-the-seraph": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Arc",
      "Void",
      "Stasis",
      "Mixed"
    ],
    "mods": [
      {
        "column": 1,
        "cost": 1,
        "description": "Aiming down sights with any Hand Cannon you are wielding loads a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Hand_Cannon_icon.png",
        "name": "Unstoppable Hand Cannon",
        "row": 1,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Landing consecutive hits on combatants with any Scout Rifle you are wielding disrupts combatants, stunning them, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions. After any member of your fireteam disrupts a Champion, your Scout Rifles gain a temporary bonus to damage against Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Rounds_Scout_icon.png",
        "name": "Overload Scout Rifle",
        "row": 2,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Bows gain shield-piercing arrows, which bypass combatant defenses. Strong against Barrier Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Piercing_Bowstring_icon.png",
        "name": "Piercing Bowstring",
        "row": 3,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Pulse Rifles you are wielding fire shield-piercing rounds and stun Barrier Barrier Champions. Pulse Rifles deal bonus damage against Barrier Barrier Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Pulse_Rifle_icon.png",
        "name": "Anti-Barrier Pulse Rifle",
        "row": 4,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 1,
        "cost": 1,
        "description": "Uninterrupted fire from your equipped Auto Rifles and Submachine Guns grants bullets that stun combatants, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Rounds_icon_2.png",
        "name": "Overload Rounds",
        "row": 5,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle",
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Gradually reloads your stowed Power Grenade Launchers over time. Multiple copies of this perk stack to reduce the time taken to fully reload.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Grenade_Launcher_Holster_(Seasonal)_icon.png",
        "name": "Grenade Launcher Holster",
        "row": 1,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Grenade Launcher"
          ]
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Increases the duration and effectiveness of the Ambush Origin Trait and the Bray Inheritance Origin Trait.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Legacy_Ambush_icon.png",
        "name": "Legacy Ambush",
        "row": 2,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 3,
        "description": "Increases the airborne effectiveness of all equipped weapons.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/In-Flight_Compensator_icon.png",
        "name": "In-Flight Compensator",
        "row": 3,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 2,
        "cost": 1,
        "description": "Faster ready and stow speed for Bows.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Bow_Dexterity_Icon_(Seasonal).png",
        "name": "Bow Dexterity",
        "row": 4,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 2,
        "cost": 3,
        "description": "Stat Increase: +5 Mobility ▲ |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Mobile_Retrofit_icon.png",
        "name": "Mobile Retrofit",
        "row": 5,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Leg Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Improved target acquisition, accuracy, and aim-down-sights speed for Hand Cannons.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Hand_Cannon_Targeting_icon.png",
        "name": "Hand Cannon Targeting",
        "row": 1,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Increases reload speed of Pulse Rifles.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Pulse_Rifle_Loader_icon.png",
        "name": "Pulse Rifle Loader",
        "row": 2,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Gain a small amount of resistance to all damage dealt to you by combatants. Additional copies of this mod will increase this effect.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Energy_Diffusion_Substrate_icon.png",
        "name": "Energy Diffusion Substrate",
        "row": 3,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 3,
        "cost": 1,
        "description": "Greatly increases the duration and effectiveness of the Tex Balanced Stock Origin Trait and the Veist Stinger Origin Trait.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Sharp_Shooting_icon.png",
        "name": "Sharp Shooting",
        "row": 4,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Helmet Armor Mod"
      },
      {
        "column": 3,
        "cost": 4,
        "description": "Stat Increase: +5 Resilience ▲ |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Resilient_Retrofit_icon.png",
        "name": "Resilient Retrofit",
        "row": 5,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Chest Armor Mod"
      },
      {
        "column": 4,
        "cost": 7,
        "description": "When you ready or reload a Grenade Launcher, for a short period, that weapon stuns Unstoppable Champions. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Grenade_Launcher_icon.png",
        "name": "Unstoppable Grenade Launcher",
        "row": 1,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Grenade Launcher"
          ]
        },
        "type": "Arms Armor Mod"
      },
      {
        "column": 4,
        "cost": 3,
        "description": "Become Charged with Light whenever you or a member of your fireteam stuns a Champion.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Counter_Charge_icon.png",
        "name": "Counter Charge",
        "row": 2,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Combat Style Armor Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Champions you stun take additional damage from teammates.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Advance_Scout_icon.png",
        "name": "Advance Scout",
        "row": 3,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Void and Stasis grenades cause disruption, delaying ability regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Lord_Kelvin's_Basilisk_icon.png",
        "name": "Lord Kelvin's Basilisk",
        "row": 4,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [
            "Void",
            "Stasis",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 4,
        "cost": 1,
        "description": "Stasis and Arc melee abilities stun unshielded combatants. Strong against Unstoppable Unstoppable Champions. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Low_Entropy_Superconductor_icon.png",
        "name": "Low Entropy Superconductor",
        "row": 5,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [
            "Arc",
            "Stasis",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Receive less damage from combatants that are close to you while you are wielding a Glaive.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Passive_Aggressive_Guard_icon.png",
        "name": "Passive Aggressive Guard",
        "row": 1,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Glaive"
          ]
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 5,
        "description": "When using a Grenade Launcher, damaging a boss, damaging a Champion, or breaking a combatant's shield reloads your stowed weapons and weakens the combatant.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Weakened_Clear_icon.png",
        "name": "Weakened Clear",
        "row": 2,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Weaken",
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Grenade Launcher"
          ]
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 6,
        "description": "Dealing damage with elemental abilities grants increased damage to weapons of the same element for a short duration. Dealing damage with elemental weapons grants increased damage to abilities of the same element for a short duration.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Monochromatic_Maestro_icon.png",
        "name": "Monochromatic Maestro",
        "row": 3,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 5,
        "description": "While you are the only member of your fireteam, you deal increased damage to all combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Solo_Operative_icon.png",
        "name": "Solo Operative",
        "row": 4,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      },
      {
        "column": 5,
        "cost": 3,
        "description": "Defeating a Lucent Hive Lightbearer or Champion with your finisher spawns Heavy ammo for you and your allies. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Lucent_Finisher_icon.png",
        "name": "Lucent Finisher",
        "row": 5,
        "source": "Destiny 2 Wiki Seraph Cipher page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Class Item Mod"
      }
    ],
    "notes": "The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Seraph Cipher page",
        "url": "https://d2.destinygamewiki.com/wiki/Seraph_Cipher"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Bow",
      "Scout Rifle",
      "Pulse Rifle",
      "Hand Cannon",
      "SMG",
      "Glaive",
      "Grenade Launcher",
      "Machine Gun",
      "Mixed"
    ]
  },
  "season-of-defiance": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Solar",
      "Void",
      "Strand",
      "Prismatic",
      "Mixed"
    ],
    "mods": [
      {
        "column": 1,
        "cost": null,
        "description": "Your equipped Pulse Rifles fire shield-piercing rounds and stun Barrier Barrier Champions. Additionally, Pulse Rifles are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Pulse_Rifle_icon2.png",
        "name": "Anti-Barrier Pulse Rifle",
        "row": 1,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Your equipped Sidearms fire shield-piercing rounds and stun Barrier Barrier Champions. Additionally, Sidearms are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Piercing_Sidearms_icon2.png",
        "name": "Piercing Sidearms",
        "row": 2,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Sidearm"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Damage by fully drawn arrows from your equipped Bows causes disruption, stunning the target, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions. Additionally, Bows are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Bow_icon2.png",
        "name": "Overload Bow",
        "row": 3,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Aiming down the sights of a Scout Rifle for a short time loads a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. Additionally, Scout Rifles are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Scout_Rifle_icon2.png",
        "name": "Unstoppable Scout Rifle",
        "row": 4,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Sustained fire from Auto Rifles and Submachine Guns disrupts combatants, stunning them, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions. Additionally, Auto Rifles and Submachine Guns are always overcharged when that modifier is active. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overloaded_Auto_SMG_icon.png",
        "name": "Overloaded Auto/SMG",
        "row": 5,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Auto Rifle",
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "The armor energy costs of all armor mods affecting your Solar weapons are significantly discounted.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Authorized_Mods_Solar_icon.png",
        "name": "Authorized Mods: Solar",
        "row": 1,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "The armor energy costs of all armor mods affecting your Strand weapons are significantly discounted.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Authorized_Mods_Strand_icon.png",
        "name": "Authorized Mods: Strand",
        "row": 2,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Strand"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "The armor energy costs of all armor mods affecting your Void weapons are significantly discounted.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Authorized_Mods_Void_icon.png",
        "name": "Authorized Mods: Void",
        "row": 3,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "The armor energy costs of all armor mods affecting your grenades are significantly discounted.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Authorized_Mods_Grenades_icon.png",
        "name": "Authorized Mods: Grenades",
        "row": 4,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Grants access to armor mods in your helmet that combine the effects of the Strand Siphon mod with the Solar Siphon and Void Siphon mods. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Multi-Siphon_Mods_icon.png",
        "name": "Multi-Siphon Mods",
        "row": 5,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar",
            "Void",
            "Strand",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "The first time you break a combatant's shield, you create an Orb of Power if you break the shield with the matching damage type.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Shatter_Orbs_icon.png",
        "name": "Shatter Orbs",
        "row": 1,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Orb of Power"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Greatly improves the benefits provided by the Noble Deeds, Nanotech Tracer Rockets, Tex Balanced Stock, and Ambush Origin traits.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Defiant_Armory_icon.png",
        "name": "Defiant Armory",
        "row": 2,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Destroying a Tangle with a Strand weapon suspends targets damaged by the explosion.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Untangler_icon.png",
        "name": "Untangler",
        "row": 3,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Strand"
          ],
          "mechanics": [
            "Suspend",
            "Tangle"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Collecting a Firesprite gives you Armor Charge.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Solar_Surge_icon.png",
        "name": "Solar Surge",
        "row": 4,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Armor Charge"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Picking up an Orb of Power grants your Void weapons Volatile rounds. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Volatile_Flow_icon2.png",
        "name": "Volatile Flow",
        "row": 5,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [
            "Orb of Power",
            "Volatile"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Defeating a powerful combatant with a Void weapon has a chance to generate Heavy ammo for you and your teammates.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Bricks_from_Beyond_icon.png",
        "name": "Bricks from Beyond",
        "row": 1,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Firebolt Grenades apply more Scorch stacks. Damaging a combatant with a Firebolt Grenade spawns a Firesprite near them.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Flare_Up_icon.png",
        "name": "Flare Up",
        "row": 2,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Scorch"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Weapons with the Noble Deeds, Nanotracing Rockets, Tex Balanced Stock, and Ambush Origin traits are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Origin_Hones_icon.png",
        "name": "Origin Hones",
        "row": 3,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Overcharged",
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Rapid final blows with a Strand weapon grant your weapon Unraveling Rounds, with a longer duration near allies.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Allied_Unraveling_icon.png",
        "name": "Allied Unraveling",
        "row": 4,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Strand"
          ],
          "mechanics": [
            "Unravel"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "When you or a member of your fireteam stuns or defeats a Champion, you gain energy for your least-charged Strand ability. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Counterweave_icon.png",
        "name": "Counterweave",
        "row": 5,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Strand"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Destroying a Tangle with a Strand weapon creates a larger and more damaging explosion.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Threaded_Blast_icon.png",
        "name": "Threaded Blast",
        "row": 1,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Strand"
          ],
          "mechanics": [
            "Tangle"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "When you have Firebolt Grenades equipped, gain a second grenade charge.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Rain_of_Firebolts_icon.png",
        "name": "Rain of Firebolts",
        "row": 2,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "You gain a temporary bonus to Void weapon damage after you defeat a target with a Void weapon while at least one of your Void abilities is fully charged. This damage bonus increases based on the number of fully charged Void abilities you have.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Void_Weapon_Channeling_icon.png",
        "name": "Void Weapon Channeling",
        "row": 3,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "style=\"text-align:left\" | *Glaives you wield fire a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. Additionally, Glaives are always overcharged when that modifier is active. *Landing consecutive hits with a Sword you are wielding disrupts combatants, stunning them, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions. Additionally, Swords are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Medieval_Champion_icon.png",
        "name": "Medieval Champion",
        "row": 4,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [
            "Overload",
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Glaive",
            "Sword",
            "Mixed"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "When you cast your Super, each member of your fireteam with a subclass damage type different than yours gains a bonus to weapon damage. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Prismatic_Transfer_icon.png",
        "name": "Prismatic Transfer",
        "row": 5,
        "source": "Destiny 2 Wiki Ascendant Scepter page",
        "tags": {
          "champions": [],
          "elements": [
            "Prismatic"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      }
    ],
    "notes": "The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Ascendant Scepter page",
        "url": "https://d2.destinygamewiki.com/wiki/Ascendant_Scepter"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Bow",
      "Scout Rifle",
      "Pulse Rifle",
      "Sidearm",
      "SMG",
      "Glaive",
      "Sword",
      "Machine Gun",
      "Mixed"
    ]
  },
  "season-of-the-deep": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Arc",
      "Void",
      "Strand",
      "Mixed"
    ],
    "mods": [
      {
        "column": 1,
        "cost": null,
        "description": "Your equipped Auto Rifles fire shield-piercing rounds and stun Barrier Barrier Champions. Additionally, Auto Rifles are always overcharged when the modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Auto_Rifle_icon2.png",
        "name": "Anti-Barrier Auto Rifle",
        "row": 1,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Aiming down the sights of a Hand Cannon for a short time loads a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. Additionally, Hand Cannons are always overcharged when the modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Hand_Cannon_icon2.png",
        "name": "Unstoppable Hand Cannon",
        "row": 2,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Landing consecutive hits on combatants with any Scout Rifle you are wielding causes disruption, delaying ability energy regeneration and lowering their damage output. Strong against Overload Overload Champions. Additionally, Scout Rifles are always overcharged when the modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Scout_Rifle_icon.png",
        "name": "Overload Scout Rifle",
        "row": 3,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Uninterrupted fire from your equipped Trace Rifles causes the beam to stun combatants, delaying ability energy regeneration and lowering their damage output. Strong against Overload Overload Champions. Additionally, Trace Rifles are always overcharged when the modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Trace_Rifles_icon2.png",
        "name": "Overload Trace Rifles",
        "row": 4,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Trace Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Glaives you wield fire a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. Additionally, Glaives are always overcharged when the modifier is active. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Glaive_icon2.png",
        "name": "Unstoppable Glaive",
        "row": 5,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Glaive"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "The armor energy costs of all armor mods affecting your Arc weapons are significantly discounted.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Authorized_Mods_Arc_icon.png",
        "name": "Authorized Mods: Arc",
        "row": 1,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "The armor energy costs of all armor mods affecting your Void weapons are significantly discounted.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Authorized_Mods_Void_icon.png",
        "name": "Authorized Mods: Void",
        "row": 2,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "The armor energy costs of all armor mods affecting your Strand weapons are significantly discounted.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Authorized_Mods_Strand_icon.png",
        "name": "Authorized Mods: Strand",
        "row": 3,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Strand"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "The armor energy costs of all armor mods affecting your melee are significantly discounted.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Authorized_Mods_Melee_icon.png",
        "name": "Authorized Mods: Melee",
        "row": 4,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Multi-Siphon Mods: Grants access to Helmet armor mods that combine the effects of the Strand Siphon and Arc Siphon mods. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Technicolor_Siphon_icon.png",
        "name": "Technicolor Siphon",
        "row": 5,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc",
            "Strand",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Increases the amount of damage dealt by unraveling a target.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Improved_Unraveling_icon.png",
        "name": "Improved Unraveling",
        "row": 1,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Unravel"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Greatly improves the benefits provided by the Unsated Hunger, Nanotech Tracer Rockets, Harmonic Resonance, and Noble Deeds traits.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Deeper_Origins_icon.png",
        "name": "Deeper Origins",
        "row": 2,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Defeating a Void debuffed target creates a Void Breach while your Void subclass is equipped.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unto_the_Breach_icon.png",
        "name": "Unto the Breach",
        "row": 3,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [
            "Void"
          ],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Stay amplified longer while your Arc subclass is equipped.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Electric_Armor_icon.png",
        "name": "Amped Up",
        "row": 4,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Amplified"
          ],
          "subclasses": [
            "Arc"
          ],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Grants bonus Arc Super damage if cast while critically wounded or while amplified. Lasts until the end of the Super activation. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Thunderous_Retort_icon2.png",
        "name": "Thunderous Retort",
        "row": 5,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Amplified"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Your Strand weapons gain Unraveling Rounds whenever you gain Woven Mail while your Strand subclass is equipped.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Strand_Soldier_icon.png",
        "name": "Strand Soldier",
        "row": 1,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Strand"
          ],
          "mechanics": [
            "Woven Mail",
            "Unravel"
          ],
          "subclasses": [
            "Strand"
          ],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Origin Hones: Weapons with the Unsated Hunger, Nanotech Tracer Rockets, Harmonic Resonance, and Noble Deeds traits are always overcharged weapons for you when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overcharged_Armory_icon.png",
        "name": "Overcharged Armory",
        "row": 2,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Picking up a Void Breach gives you an overshield or refreshes your existing overshield.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Protective_Breach_icon.png",
        "name": "Protective Breach",
        "row": 3,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Gain a stack of Armor Charge when you stun a Champion.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Counter_Charge_icon2.png",
        "name": "Counter Charge",
        "row": 4,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Armor Charge"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Amplified Shielding: Gain damage resistance while amplified. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Amped_Up_icon2.png",
        "name": "Electric Armor",
        "row": 5,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Amplified",
            "Damage Resistance"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Targets affected by Strand debuffs take increased damage from Arc and Void abilities.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Conductive_Cosmic_Needle_icon.png",
        "name": "Conductive Cosmic Needle",
        "row": 1,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc",
            "Void",
            "Strand",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Arc final blows while you are amplified summon a burst of lightning that damages and jolts targets.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Shock_and_Awe_icon.png",
        "name": "Shock and Awe",
        "row": 2,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Jolt",
            "Amplified"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Picking up a Void Breach causes your next source of Void damage to create a large weakening pulse.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Supernova_icon.png",
        "name": "Supernova",
        "row": 3,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [
            "Weaken"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Performing a finisher while you are amplified grants Amplified to nearby allies when your Arc subclass is equipped. Performing a finisher while you have Woven Mail grants Woven Mail to nearby allies when your Strand subclass is equipped. Performing a finisher while you have Devour grants Devour to nearby allies when your Void subclass is equipped.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Squad_Goals_icon.png",
        "name": "Squad Goals",
        "row": 4,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc",
            "Void",
            "Strand",
            "Mixed"
          ],
          "mechanics": [
            "Devour",
            "Amplified",
            "Woven Mail",
            "Finisher"
          ],
          "subclasses": [
            "Arc",
            "Void",
            "Strand"
          ],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "After throwing an Arc grenade, gain increased grenade recharge for a short time. Arc final blows extend the duration of this benefit. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Lightning_Strikes_Twice_icon2.png",
        "name": "Lightning Strikes Twice",
        "row": 5,
        "source": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      }
    ],
    "notes": "The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki NPA Repulsion Regulator page",
        "url": "https://d2.destinygamewiki.com/wiki/NPA_Repulsion_Regulator"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Scout Rifle",
      "Hand Cannon",
      "Glaive",
      "Trace Rifle"
    ]
  },
  "season-of-the-witch": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Solar",
      "Arc",
      "Void",
      "Strand",
      "Mixed"
    ],
    "mods": [
      {
        "column": 1,
        "cost": null,
        "description": "Your equipped Auto Rifles fire shield-piercing rounds and stun Barrier Barrier Champions. Additionally, Auto Rifles are always overcharged when the modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Auto_Rifle_icon2.png",
        "name": "Anti-Barrier Auto Rifle",
        "row": 1,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Bows gain shield-piercing arrows, which bypass combatant defenses. Strong against Barrier Barrier Champions. Additionally, Bows are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Piercing_Bowstring_icon2.png",
        "name": "Piercing Bowstring",
        "row": 2,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Aiming down the sights of a Scout Rifle for a short time loads a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. Additionally, Scout Rifles are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Scout_Rifle_icon2.png",
        "name": "Unstoppable Scout Rifle",
        "row": 3,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Scout Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Landing consecutive hits with any Hand Cannon you are wielding disrupts combatants, stunning them, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Hand_Cannon_icon2.png",
        "name": "Overload Hand Cannon",
        "row": 4,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Aiming down sights for a brief period with any Fusion Rifle you are wielding loads a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. Additionally, Fusion Rifles are always overcharged when that modifier is active. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Fusion_icon.png",
        "name": "Unstoppable Fusion",
        "row": 5,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Fusion Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Combines the Arc and Strand Siphon mods into one.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Arc_Strand_Siphon_Combo_icon.png",
        "name": "Arc/Strand Siphon Combo",
        "row": 1,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc",
            "Strand",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Combines the Solar and Strand Siphon mods into one.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Solar_Strand_Siphon_Combo_icon.png",
        "name": "Solar/Strand Siphon Combo",
        "row": 2,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar",
            "Strand",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Combines the Void and Strand Siphon mods into one.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Void_Strand_Siphon_Combo_icon.png",
        "name": "Void/Strand Siphon Combo",
        "row": 3,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [
            "Void",
            "Strand",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Greatly improves the benefits provided by the Head Rush, Nanotech Tracer Rockets, Unsated Hunger, and Cursed Thrall Origin traits.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Origin_Perk_Specialization_I_icon.png",
        "name": "Origin Perk Specialization I",
        "row": 4,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "All Scavenger mods are discounted. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Diviner's_Discount_icon.png",
        "name": "Diviner's Discount",
        "row": 5,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Strand weapon final blows have a chance to generate a Tangle.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Thanatotic_Tangles_icon.png",
        "name": "Thanatotic Tangles",
        "row": 1,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [
            "Strand"
          ],
          "mechanics": [
            "Tangle"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Weapons with the Head Rush, Nanotech Tracer Rockets, Unsated Hunger, and Cursed Thrall Origin traits are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Origin_Perk_Specialization_II_icon.png",
        "name": "Origin Perk Specialization II",
        "row": 2,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Overcharged",
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "While using a Void subclass, Void weapon final blows have a chance to spawn a Void Elemental Orb. Void Orbs can be thrown to create a Void explosion that makes enemies it damages volatile.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Elemental_Orbs_Void_icon.png",
        "name": "Elemental Orbs: Void",
        "row": 3,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [
            "Volatile",
            "Elemental Orb"
          ],
          "subclasses": [
            "Void"
          ],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "While using an Arc subclass, Arc weapon final blows have a chance to spawn an Arc Elemental Orb. Arc Orbs can be thrown to create an Arc explosion that jolts targets it damages.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Elemental_Orbs_Arc_icon.png",
        "name": "Elemental Orbs: Arc",
        "row": 4,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Jolt",
            "Elemental Orb"
          ],
          "subclasses": [
            "Arc"
          ],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "While using a Solar subclass, Solar weapon final blows have a chance to spawn a Solar Elemental Orb. Solar Orbs can be thrown to create a Solar explosion that scorches targets it damages. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Elemental_Orbs_Solar_icon.png",
        "name": "Elemental Orbs: Solar",
        "row": 5,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Scorch",
            "Elemental Orb"
          ],
          "subclasses": [
            "Solar"
          ],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Uninterrupted fire from your equipped Machine Guns grants bullets that stun combatants, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Machine_Guns_icon2.png",
        "name": "Overload Machine Guns",
        "row": 1,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Machine Gun"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "While stunned, Champions take bonus damage from your abilities and Elemental Orb damage.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Elemental_Fury_icon.png",
        "name": "Elemental Fury",
        "row": 2,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Elemental Orb"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "When an ally destroys or picks up your Tangle or Elemental Orb, the Tangle cooldown is reduced by 5 seconds and you gain bonus damage with weapons matching your subclass for 10 seconds.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Communal_Pickups_icon.png",
        "name": "Communal Pickups",
        "row": 3,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Tangle",
            "Elemental Orb"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Picking up a Tangle or Elemental Orb grants energy to your least-powered ability.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Refreshing_Pickups_icon.png",
        "name": "Refreshing Pickups",
        "row": 4,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Tangle",
            "Elemental Orb"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "If you have fewer than 2 stacks of Armor Charge, rapid precision shots with Bows, Snipers, and Scout Rifles generate an Armor Charge. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Semi-Auto_Striker_icon.png",
        "name": "Semi-Auto Striker",
        "row": 5,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Armor Charge"
          ],
          "subclasses": [],
          "weapons": [
            "Bow",
            "Scout Rifle",
            "Mixed"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Dealing elemental ability damage increases matching weapon damage, and elemental weapon damage increases matching ability damage. Bonus granted is 10% for 5 seconds.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Monochromatic_Maestro_icon2.png",
        "name": "Monochromatic Maestro",
        "row": 1,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Sundering Glare: Rapid precision hits against distant combatants weaken them for a short duration.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Rapid-Fire_Ranger_icon.png",
        "name": "Rapid-Fire Ranger",
        "row": 2,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Weaken"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Subclass elemental buffs grant you bonus recovery and damage resistance against combatant attacks of the matching element type.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Elemental_Embrace_icon.png",
        "name": "Elemental Embrace",
        "row": 3,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Damage Resistance"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Combatant final blows with Tangles or Elemental Orbs have a chance to drop Special or Heavy ammo.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Elemental_Munitions_icon.png",
        "name": "Elemental Munitions",
        "row": 4,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Tangle",
            "Elemental Orb"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Collecting an Orb of Power causes you to gain 1 temporary Armor Charge. Your Armor Charges grant bonus damage to your thrown Tangles or Elemental Orbs. Your Armor Charge now decays over time. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Frenzied_Stacks_icon.png",
        "name": "Frenzied Stacks",
        "row": 5,
        "source": "Destiny 2 Wiki Acolyte's Staff page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Armor Charge",
            "Orb of Power",
            "Tangle",
            "Elemental Orb"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      }
    ],
    "notes": "The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Acolyte's Staff page",
        "url": "https://d2.destinygamewiki.com/wiki/Acolyte%27s_Staff"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Bow",
      "Scout Rifle",
      "Hand Cannon",
      "Fusion Rifle",
      "Machine Gun",
      "Mixed"
    ]
  },
  "season-of-the-wish": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Solar",
      "Stasis",
      "Strand",
      "Mixed"
    ],
    "mods": [
      {
        "column": 1,
        "cost": null,
        "description": "Your equipped Sidearms fire shield-piercing rounds and stun Barrier Barrier Champions. Additionally, Auto Rifles are always overcharged when the modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Sidearm_icon.png",
        "name": "Anti-Barrier Sidearm",
        "row": 1,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Auto Rifle",
            "Sidearm",
            "Mixed"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Aiming down the sights of a Hand Cannon for a short time loads a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. Additionally, Hand Cannons are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Hand_Cannon_icon2.png",
        "name": "Unstoppable Hand Cannon",
        "row": 2,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Aiming down the sights of a Bow for a short time loads a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. Additionally, Scout Rifles are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Bow_icon.png",
        "name": "Unstoppable Bow",
        "row": 3,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Bow",
            "Scout Rifle",
            "Mixed"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Landing consecutive hits with any Auto Rifle you are wielding disrupts combatants, stunning them, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Auto_Rifle_icon.png",
        "name": "Overload Auto Rifle",
        "row": 4,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Auto Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Sustained fire from Pulse Rifles disrupts combatants, stunning them, delaying ability energy regeneration, and lowering combatant damage output. Strong against Overload Overload Champions. Additionally, Pulse Rifles are always overcharged when that modifier is active. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Pulse_Rifle_icon.png",
        "name": "Overload Pulse Rifle",
        "row": 5,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Combines the Solar/Strand and Solar/Stasis Siphon mods into one.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Flame%2C_Fiber%2C_and_Freeze_icon.png",
        "name": "Flame, Fiber, and Freeze",
        "row": 1,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar",
            "Stasis",
            "Strand",
            "Mixed"
          ],
          "mechanics": [
            "Freeze"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Radiant causes Solar weapons to apply Scorch to unscorched combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Kindling_Trigger_icon.png",
        "name": "Kindling Trigger",
        "row": 2,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Scorch",
            "Radiant"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Rapid final blows with Rocket Launchers and Grenade Launchers grant Armor Charge.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Blast_Radius_icon2.png",
        "name": "Blast Radius",
        "row": 3,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Armor Charge"
          ],
          "subclasses": [],
          "weapons": [
            "Grenade Launcher",
            "Rocket Launcher",
            "Mixed"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Improves the benefits provided by the Sundering, Nano-Munitions, and Nanotech Tracer Rocket Origin Traits. Additionally, weapons with these traits are always overcharged.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Origin_Perk_Specialization_I_icon.png",
        "name": "Origin Perk Specialization I",
        "row": 4,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Overcharged",
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Increases ability damage to Taken and Scorn combatants. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/From_Whence_You_Came_icon.png",
        "name": "From Whence You Came",
        "row": 5,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Rapid Solar weapons precision hits and rapid Solar weapon final blows grant Radiant.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Flint_Striker_icon.png",
        "name": "Flint Striker",
        "row": 1,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Radiant"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "While radiant, deal increased weapon damage to combatants affected by Strand and Stasis debuffs.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Torch_icon.png",
        "name": "Torch",
        "row": 2,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [
            "Stasis",
            "Strand",
            "Mixed"
          ],
          "mechanics": [
            "Radiant"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Casting your Solar Super grants nearby allies Radiant and increases the damage of your Super for each nearby ally.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Heart_of_the_Flame_icon.png",
        "name": "Heart of the Flame",
        "row": 3,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Radiant"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Improves the benefits provided by the Noble Deeds, Unsated Hunger, Head Rush, and Dragon’s Vengeance Origin Traits. Additionally, weapons with these traits are always overcharged.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Origin_Perk_Specialization_II_icon.png",
        "name": "Origin Perk Specialization II",
        "row": 4,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Overcharged",
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "While your Super is nearly fully charged, ability final blows spawn Orbs of Power. Wearing Season of the Wish armor decreases Super amount threshold. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Wished_into_Being_icon.png",
        "name": "Wished into Being",
        "row": 5,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Picking up an Orb of Power grants Strand weapons Unraveling Rounds.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unravelling_Orbs_icon.png",
        "name": "Unravelling Orbs",
        "row": 1,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [
            "Strand"
          ],
          "mechanics": [
            "Orb of Power",
            "Unravel"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Killing an encased combatant spawns Stasis crystals.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Pillar_of_Ice_icon.png",
        "name": "Pillar of Ice",
        "row": 2,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [
            "Stasis"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Causing damage with a Solar ability weakens Champions and bosses for a short duration.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Revitalizing_Blast_icon.png",
        "name": "Revitalizing Blast",
        "row": 3,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Weaken"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Rocket Launchers are especially effective against Overload Overload Champions.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Rocket_Launchers_icon.png",
        "name": "Overload Rocket Launchers",
        "row": 4,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Rocket Launcher"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Breaking a combatant’s shield with a Strand or Stasis weapon has a chance to suspend or freeze that combatant. Wearing Season of the Wish armor increases this chance. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Dragons_Bite_icon.png",
        "name": "Dragon's Bite",
        "row": 5,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [
            "Stasis",
            "Strand",
            "Mixed"
          ],
          "mechanics": [
            "Freeze",
            "Suspend"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Damaging unraveled targets with a weapon occasionally spawns a Threadling.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Horde_Shuttle_icon.png",
        "name": "Horde Shuttle",
        "row": 1,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Unravel",
            "Threadling"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Shattering encased targets and Stasis crystals deals increased damage. Shattering a Stasis crystal releases shards of ice that damage and slow targets.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Hail_the_Storm_icon.png",
        "name": "Hail the Storm",
        "row": 2,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [
            "Stasis"
          ],
          "mechanics": [
            "Slow"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "While radiant, Solar precision final blows cause combatants to ignite.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Rays_of_Precision_icon.png",
        "name": "Rays of Precision",
        "row": 3,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [
            "Solar"
          ],
          "mechanics": [
            "Ignite",
            "Radiant"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "While you are the only member of your fireteam, you deal increased damage to all combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Solo_Operative_icon.png",
        "name": "Solo Operative",
        "row": 4,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Firing a Rocket Launcher consumes one stack of Armor Charge, granting increased damage and reload speed until you reload or stow your Rocket Launcher. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Argent_Ordnance_icon.png",
        "name": "Argent Ordnance",
        "row": 5,
        "source": "Destiny 2 Wiki Queensfoil Censer page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Armor Charge",
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Rocket Launcher"
          ]
        },
        "type": "Artifact Perk"
      }
    ],
    "notes": "The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Queensfoil Censer page",
        "url": "https://d2.destinygamewiki.com/wiki/Queensfoil_Censer"
      }
    ],
    "weaponFocus": [
      "Auto Rifle",
      "Bow",
      "Scout Rifle",
      "Pulse Rifle",
      "Hand Cannon",
      "Sidearm",
      "Grenade Launcher",
      "Rocket Launcher",
      "Mixed"
    ]
  },
  "episode-heresy": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Arc",
      "Void",
      "Strand",
      "Kinetic"
    ],
    "mods": [
      {
        "column": 1,
        "cost": null,
        "description": "Aiming down sights for a brief period with any Fusion Rifle you are wielding loads a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. Additionally, Fusion Rifles are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Fusion_icon.png",
        "name": "Unstoppable Fusion",
        "row": 1,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Fusion Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Shots from Machine Guns you are wielding disrupt combatants, stunning them, delaying ability energy regeneration and exhausting them. Strong against Overload Overload Champions. Additionally, Machine Guns are always overcharged when that modifier is active. Exhausted targets deal reduced outgoing damage.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Machine_Guns_icon.png",
        "name": "Overload Machine Guns",
        "row": 2,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Machine Gun"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Your equipped Sidearms fire shield-piercing rounds and stun Barrier Barrier Champions. Additionally, Sidearms are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Piercing_Sidearms_icon.png",
        "name": "Piercing Sidearms",
        "row": 3,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Sidearm"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Shotguns you are wielding fire shield-piercing rounds and stun Barrier Barrier Champions. Additionally, Sniper Rifles are always overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Anti-Barrier_Sniper_Rifle_icon.png",
        "name": "Anti-Barrier Sniper Rifle",
        "row": 4,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Shotgun",
            "Sniper Rifle",
            "Mixed"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Glaives you wield fire a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. Additionally, Glaives are always overcharged when the modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Glaive.png",
        "name": "Unstoppable Glaive",
        "row": 5,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged"
          ],
          "subclasses": [],
          "weapons": [
            "Glaive"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Uninterrupted fire from your equipped Trace Rifle causes the beam to stun combatants, delaying ability energy regeneration and exhausting them. Strong against Overload Overload Champions. Exhausted targets deal reduced outgoing damage.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overload_Trace_Rifles_icon.png",
        "name": "Overload Trace Rifles",
        "row": 6,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Trace Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Shortly after you ready or reload a Rocket Launcher, damage from that weapon stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions. Additionally, Rocket Launchers are always overcharged when that modifier is active. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unstoppable_Rocket_Launcher_icon.png",
        "name": "Unstoppable Rocket Launcher",
        "row": 7,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [
            "Overcharged",
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Rocket Launcher"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "While you are amplified or have Bolt Charge, Arc weapons gain increased handling and reload speed.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Overclock_and_Load_icon.png",
        "name": "Overclock and Load",
        "row": 1,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Amplified",
            "Bolt Charge",
            "Reload"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Weapons with the Subjugation Origin Trait gain stability and reload speed for a short duration when hitting any target. These weapons are also overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Deep_Alchemy_icon.png",
        "name": "Deep Alchemy",
        "row": 2,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Overcharged",
            "Reload",
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Rapid Void weapon precision hits and rapid Void weapon final blows grant Volatile Rounds. BOOST: Volatile detonations grant class ability energy.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Volatile_Marksman_icon.png",
        "name": "Volatile Marksman",
        "row": 3,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [
            "Volatile"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Weapons with the Timelost Magazine Origin Trait gain bonus damage; these weapons are also overcharged when that modifier is active.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Legend_Incarnate_icon.png",
        "name": "Legend Incarnate",
        "row": 4,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Overcharged",
            "Origin Trait"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Picking up an Orb of Power or a Tangle grants Strand weapons Unraveling Rounds. BOOST: Strand weapons deal increased damage to Strand debuffed targets.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Unraveling_Orbs_icon.png",
        "name": "Unraveling Orbs",
        "row": 5,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [
            "Strand"
          ],
          "mechanics": [
            "Orb of Power",
            "Unravel",
            "Tangle"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Rapid Trace Rifle final blows heal you and nearby allies. Powerful combatants increase the amount.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Beam_Medic_icon.png",
        "name": "Beam Medic",
        "row": 6,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Heal"
          ],
          "subclasses": [],
          "weapons": [
            "Trace Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Targets hit by your Tangles are severed. Reduce Tangle cooldown by picking one up. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Vile_Weave_icon.png",
        "name": "Vile Weave",
        "row": 7,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Tangle"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "While surrounded, Machine Guns and Glaives gain increased reload speed and stability; final blows heal you.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Hold_the_Line_icon.png",
        "name": "Hold the Line",
        "row": 1,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload",
            "Heal"
          ],
          "subclasses": [],
          "weapons": [
            "Glaive",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Defeating Arc debuffed targets grants Bolt Charge. BOOST: Rapidly defeating Arc debuffed targets spawns an Orb of Power and heals a small portion of health.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Dielectric_icon.png",
        "name": "Dielectric",
        "row": 2,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Orb of Power",
            "Bolt Charge",
            "Heal"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Defeating powerful Taken loads your weapon with Taken energy. The next time you fire, launch 3 Taken seeker rounds that Overload disrupt and exhaust targets. Exhausted targets deal reduced outgoing damage.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/King's_Vestige_icon.png",
        "name": "King's Vestige",
        "row": 3,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Improves the effects of Exhaust and Sever, lowering a target's damage output even further. Exhausted targets deal reduced outgoing damage.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Disruptor_Spike_icon.png",
        "name": "Disruptor Spike",
        "row": 4,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Defeating an exhausted or severed target with Arc damage releases a blinding burst. Exhausted targets deal reduced outgoing damage.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Photonic_Flare_icon.png",
        "name": "Photonic Flare",
        "row": 5,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Blind"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Rapid final blows with a Kinetic weapon or a weapon matching your equipped Super create an elemental pickup that matches your equipped Super. BOOST: Elemental pickups grant matching Super energy when they are collected.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Elemental_Siphon_icon.png",
        "name": "Elemental Siphon",
        "row": 6,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [
            "Kinetic"
          ],
          "mechanics": [
            "Elemental Pickup"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Rapid final blows with non-Exotic Rocket Launchers refund ammo and increase reload speed for a short duration. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Perpetual_Destruction_icon.png",
        "name": "Perpetual Destruction",
        "row": 7,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Rocket Launcher"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Defeating powerful combatants with your finisher spawns Special ammo for you and your allies; defeated Subjugators, Tormentors, or Champions spawn more ammo.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Dreadful_Finisher_icon.png",
        "name": "Dreadful Finisher",
        "row": 1,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Finisher"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Rapidly applying Volatile causes your next instance of Void weapon damage to create a weakening burst. BOOST: Applying Weaken provides a small Void overshield.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Maligned_Harvest_icon.png",
        "name": "Maligned Harvest",
        "row": 2,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [
            "Weaken",
            "Volatile",
            "Void Overshield"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "When you gain maximum Bolt Charge, you also become amplified. Lightning bolts deal more damage.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Flashover_icon.png",
        "name": "Flashover",
        "row": 3,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Amplified",
            "Bolt Charge"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Damaging unraveled targets with a weapon occasionally spawns a Threadling. BOOST: Threadlings sever targets that they damage.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Horde_Shuttle_icon.png",
        "name": "Horde Shuttle",
        "row": 4,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Unravel",
            "Threadling"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Rapid Glaive melee final blows grant Special ammo Glaives additional ammo. Blocking damage with Glaives increases their melee damage to targets.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/No_Bell_icon.png",
        "name": "No Bell",
        "row": 5,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Glaive"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Trace Rifles do more damage to targets afflicted by elemental debuffs matching their element type.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Harsh_Refraction_icon.png",
        "name": "Harsh Refraction",
        "row": 6,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Trace Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Picking up Special ammo has the chance to grant Heavy ammo. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Gold_from_Lead_icon.png",
        "name": "Gold from Lead",
        "row": 7,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Dealing sustained damage with Fusion Rifles or Linear Fusion Rifles partially refills the magazine from reserves and grants them bonus damage for a short duration against that target.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Particle_Reconstruction_icon.png",
        "name": "Particle Reconstruction",
        "row": 1,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Fusion Rifle",
            "Linear Fusion Rifle",
            "Mixed"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Defeating exhausted or severed targets with weapons that match your Super element grants Super energy. Exhausted targets deal reduced outgoing damage.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Elemental_Supercharger_icon.png",
        "name": "Elemental Supercharger",
        "row": 2,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Dealing sustained damage to targets with a Heavy Machine Gun or Rocket Launcher grants damage resistance and increases grenade and melee regeneration for a short duration. BOOST: While Heavy Ordnance Regeneration is active, defeating powerful combatants disorients nearby rank-and-file combatants.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Heavy_Ordnance_Regeneration_icon.png",
        "name": "Heavy Ordnance Regeneration",
        "row": 3,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Damage Resistance"
          ],
          "subclasses": [],
          "weapons": [
            "Rocket Launcher",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Stunning a Champion grants maximum stacks of Bolt Charge. Triggers an Arc bolt that heals you and jolts combatants that it damages.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Defilbrillating_Blast_icon.png",
        "name": "Defilbrillating Blast",
        "row": 4,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Jolt",
            "Bolt Charge",
            "Heal"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Defeating weakened targets with a Void weapon applies Volatile to nearby targets. Powerful targets increase the radius of the explosion.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Void_Flux_icon.png",
        "name": "Void Flux",
        "row": 5,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [
            "Weaken",
            "Volatile"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Casting a Super while you are critically wounded or have a elemental buff matching your Super element grants a period of increased Super damage.",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/Limiting_Break_icon.png",
        "name": "Limiting Break",
        "row": 6,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Dealing sustained damage to severed targets unravels them. Defeating a severed target creates a hotspot of Strand energy, granting Woven Mail to nearby allies for a short duration. BOOST: Unravelling projectiles deal increased damage. These deal further increased damage to severed targets. |}",
        "iconPath": "https://d2.destinygamewiki.com/wiki/Special:FilePath/To_Shreds_icon.png",
        "name": "To Shreds",
        "row": 7,
        "source": "Destiny 2 Wiki Tablet of Ruin page",
        "tags": {
          "champions": [],
          "elements": [
            "Strand"
          ],
          "mechanics": [
            "Woven Mail",
            "Unravel"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      }
    ],
    "notes": "The full perk grid is sourced from the Destiny 2 Wiki artifact page and should be periodically checked against first-party archival captures.",
    "sources": [
      {
        "label": "Destiny 2 Wiki Tablet of Ruin page",
        "url": "https://d2.destinygamewiki.com/wiki/Tablet_of_Ruin"
      }
    ],
    "weaponFocus": [
      "Sidearm",
      "Shotgun",
      "Sniper Rifle",
      "Fusion Rifle",
      "Glaive",
      "Rocket Launcher",
      "Machine Gun",
      "Trace Rifle",
      "Linear Fusion Rifle",
      "Mixed"
    ]
  },
  "ash-and-iron": {
    "championFocus": [
      "Anti-Barrier",
      "Overload",
      "Unstoppable"
    ],
    "confidence": "medium",
    "elementFocus": [
      "Arc",
      "Void",
      "Kinetic",
      "Mixed"
    ],
    "mods": [
      {
        "column": 1,
        "cost": null,
        "description": "Your equipped Hand Cannons fire shield-piercing rounds and stun Barrier Barrier Champions.",
        "iconPath": null,
        "name": "Anti-Barrier Hand Cannon",
        "row": 1,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Hand Cannon"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Your equipped Sniper Rifles fire shield-piercing rounds and stun Barrier Barrier Champions.",
        "iconPath": null,
        "name": "Anti-Barrier Sniper Rifle",
        "row": 2,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [
            "Anti-Barrier"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sniper Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Your equipped Pulse Rifles fire disrupting rounds which stun the target, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": null,
        "name": "Overload Pulse Rifle",
        "row": 3,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Pulse Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Your equipped Submachine Guns fire disrupting rounds which stun the target, delaying ability energy regeneration and lowering combatant damage output. Strong against Overload Overload Champions.",
        "iconPath": null,
        "name": "Overload Submachine Gun",
        "row": 4,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [
            "Overload"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "SMG",
            "Machine Gun",
            "Mixed"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 1,
        "cost": null,
        "description": "Crossbows, and Bows that have been fully drawn for a short time, fire a powerful explosive payload that stuns unshielded combatants. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": null,
        "name": "Unstoppable Bow",
        "row": 5,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Bow"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Grants access to the Helmet mods: Kinetic/Void Siphon and Kinetic/Arc Siphon. These mods combine two elemental siphons at a discounted cost.",
        "iconPath": null,
        "name": "Impact, Shock, Gravity",
        "row": 1,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc",
            "Void",
            "Kinetic",
            "Mixed"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "While you have an Arc or Void Super equipped, increase the maximum number of stacks of Armor Charge you can carry by 1.",
        "iconPath": null,
        "name": "Gravitic-Voltaic Charge",
        "row": 2,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc",
            "Void",
            "Mixed"
          ],
          "mechanics": [
            "Armor Charge"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Weapon final blows grant a stacking bonus to stability which resets on weapon reload or stow. Swords gain Guard Resistance.",
        "iconPath": null,
        "name": "Expert Handling",
        "row": 3,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "If the first shot shortly after reloading or readying your weapon is a precision hit, gain flinch resistance.",
        "iconPath": null,
        "name": "Fastest Draw",
        "row": 4,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 2,
        "cost": null,
        "description": "Rapid final blows with a Kinetic weapon or a weapon matching your equipped Super create an elemental pickup that matches your equipped Super.",
        "iconPath": null,
        "name": "Elemental Siphon",
        "row": 5,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [
            "Kinetic"
          ],
          "mechanics": [
            "Elemental Pickup"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Breaking a combatant's shield grants increased weapon stability, handling, and reload speed. Swords gain increased guard resistance.",
        "iconPath": null,
        "name": "Press The Advantage",
        "row": 1,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Sustained Kinetic weapon damage and rapid final blows have a chance to generate a unique ammo brick. Collecting this brick will grant ammo to equipped Kinetic damage weapons and grant Special and Heavy ammo progress.",
        "iconPath": null,
        "name": "Kinetic Synthesis",
        "row": 2,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [
            "Kinetic"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Precision hits with Bows and Sniper Rifles grant a stacking bonus to their reload speed.",
        "iconPath": null,
        "name": "Reload at Range",
        "row": 3,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Bow",
            "Sniper Rifle",
            "Mixed"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Shortly after guarding with a Sword, your light and heavy attacks stun unshielded combatants. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": null,
        "name": "Riposte",
        "row": 4,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 3,
        "cost": null,
        "description": "Rapid final blows against weakened combatants grant you Devour.",
        "iconPath": null,
        "name": "Power from Pain",
        "row": 5,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Weaken",
            "Devour"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Defeating Arc Arc debuffed targets grants Bolt Charge. Rapidly defeating Arc debuffed targets spawns an Orb of Power and heals a small portion of health.",
        "iconPath": null,
        "name": "Dielectric",
        "row": 1,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Orb of Power",
            "Bolt Charge",
            "Heal"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Breaking a combatant's shield temporarily grants you damage resistance and increased melee damage.",
        "iconPath": null,
        "name": "Armorsmith",
        "row": 2,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Damage Resistance"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "When you or a member of your fireteam stuns a champion, you gain energy for your least-charged ability.",
        "iconPath": null,
        "name": "Counter Energy",
        "row": 3,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "Briefly pause after executing a light attack, then follow it up with a light or heavy attack to empower your Sword for a short time, granting it bonus damage and charge rate.",
        "iconPath": null,
        "name": "Combination Argent Blade",
        "row": 4,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 4,
        "cost": null,
        "description": "While you have a Void elemental buff, melee and Sword hits weaken targets, while melee and Sword final blows create a weakening burst.",
        "iconPath": null,
        "name": "Singularity Blade",
        "row": 5,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [
            "Weaken"
          ],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Arc Arc weapon final blows have a chance to spawn an Arc Elemental Orb. Arc Orbs can be thrown or shot to create an Arc explosion that jolts targets it damages.",
        "iconPath": null,
        "name": "Elemental Orbs: Arc",
        "row": 1,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [
            "Arc"
          ],
          "mechanics": [
            "Jolt",
            "Elemental Orb"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Kinetic weapon damage against a powerful combatant has a chance to create a Kinetic Rupture. Targeting this Rupture causes a damaging explosion that staggers combatants. Strong against Unstoppable Unstoppable Champions.",
        "iconPath": null,
        "name": "Kinetic Rupture",
        "row": 2,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [
            "Unstoppable"
          ],
          "elements": [
            "Kinetic"
          ],
          "mechanics": [],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Sniper Rifle hits grant stacking Sniper Rifle damage, stability, and reload bonuses for a short time. Heavy ammo Sniper Rifle hits count as more than one hit.",
        "iconPath": null,
        "name": "Sniper's Meditation",
        "row": 3,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [
            "Reload"
          ],
          "subclasses": [],
          "weapons": [
            "Sniper Rifle"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Performing three Sword light attacks followed by a heavy attack summons penumbral blades that surround you to damage and disorient combatants. Sword final blows extend the duration of these penumbral blades.",
        "iconPath": null,
        "name": "Sword Storm Combo",
        "row": 4,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [],
          "mechanics": [],
          "subclasses": [],
          "weapons": [
            "Sword"
          ]
        },
        "type": "Artifact Perk"
      },
      {
        "column": 5,
        "cost": null,
        "description": "Defeating a weakened target spawns a tracking projectile that weakens other targets.",
        "iconPath": null,
        "name": "Void Infestation",
        "row": 5,
        "source": "Destinypedia Encrypted Data Disk page",
        "tags": {
          "champions": [],
          "elements": [
            "Void"
          ],
          "mechanics": [
            "Weaken"
          ],
          "subclasses": [],
          "weapons": []
        },
        "type": "Artifact Perk"
      }
    ],
    "notes": "The perk grid is sourced from Destinypedia and should be cross-checked against Bungie previews and first-party archival captures as more references stabilize.",
    "sources": [
      {
        "label": "Destinypedia Encrypted Data Disk page",
        "url": "https://www.destinypedia.com/Encrypted_Data_Disk"
      }
    ],
    "weaponFocus": [
      "Bow",
      "Pulse Rifle",
      "Hand Cannon",
      "SMG",
      "Sniper Rifle",
      "Sword",
      "Machine Gun",
      "Mixed"
    ]
  }
}

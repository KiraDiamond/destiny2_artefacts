export const DESTINY_ICON_BASE_URL = 'https://www.bungie.net'

export const destinyIconTargets = {
  classes: [
    { key: 'titan', name: 'Titan', type: 'class' },
    { key: 'hunter', name: 'Hunter', type: 'class' },
    { key: 'warlock', name: 'Warlock', type: 'class' },
  ],

  elements: [
    { key: 'kinetic', name: 'Kinetic', type: 'damageType' },
    { key: 'arc', name: 'Arc', type: 'damageType' },
    { key: 'solar', name: 'Solar', type: 'damageType' },
    { key: 'void', name: 'Void', type: 'damageType' },
    { key: 'stasis', name: 'Stasis', type: 'damageType' },
    { key: 'strand', name: 'Strand', type: 'damageType' },
    { key: 'prismatic', name: 'Prismatic', type: 'subclassElement' },
  ],

  subclasses: [
    { key: 'titan_striker', className: 'Titan', element: 'Arc', name: 'Striker', type: 'subclass' },
    { key: 'titan_sunbreaker', className: 'Titan', element: 'Solar', name: 'Sunbreaker', type: 'subclass' },
    { key: 'titan_sentinel', className: 'Titan', element: 'Void', name: 'Sentinel', type: 'subclass' },
    { key: 'titan_behemoth', className: 'Titan', element: 'Stasis', name: 'Behemoth', type: 'subclass' },
    { key: 'titan_berserker', className: 'Titan', element: 'Strand', name: 'Berserker', type: 'subclass' },
    { key: 'titan_prismatic', className: 'Titan', element: 'Prismatic', name: 'Prismatic Titan', type: 'subclass' },

    { key: 'hunter_arcstrider', className: 'Hunter', element: 'Arc', name: 'Arcstrider', type: 'subclass' },
    { key: 'hunter_gunslinger', className: 'Hunter', element: 'Solar', name: 'Gunslinger', type: 'subclass' },
    { key: 'hunter_nightstalker', className: 'Hunter', element: 'Void', name: 'Nightstalker', type: 'subclass' },
    { key: 'hunter_revenant', className: 'Hunter', element: 'Stasis', name: 'Revenant', type: 'subclass' },
    { key: 'hunter_threadrunner', className: 'Hunter', element: 'Strand', name: 'Threadrunner', type: 'subclass' },
    { key: 'hunter_prismatic', className: 'Hunter', element: 'Prismatic', name: 'Prismatic Hunter', type: 'subclass' },

    { key: 'warlock_stormcaller', className: 'Warlock', element: 'Arc', name: 'Stormcaller', type: 'subclass' },
    { key: 'warlock_dawnblade', className: 'Warlock', element: 'Solar', name: 'Dawnblade', type: 'subclass' },
    { key: 'warlock_voidwalker', className: 'Warlock', element: 'Void', name: 'Voidwalker', type: 'subclass' },
    { key: 'warlock_shadebinder', className: 'Warlock', element: 'Stasis', name: 'Shadebinder', type: 'subclass' },
    { key: 'warlock_broodweaver', className: 'Warlock', element: 'Strand', name: 'Broodweaver', type: 'subclass' },
    { key: 'warlock_prismatic', className: 'Warlock', element: 'Prismatic', name: 'Prismatic Warlock', type: 'subclass' },
  ],

  weaponTypes: [
    { key: 'auto_rifle', name: 'Auto Rifle', type: 'weaponType' },
    { key: 'pulse_rifle', name: 'Pulse Rifle', type: 'weaponType' },
    { key: 'scout_rifle', name: 'Scout Rifle', type: 'weaponType' },
    { key: 'hand_cannon', name: 'Hand Cannon', type: 'weaponType' },
    { key: 'sidearm', name: 'Sidearm', type: 'weaponType' },
    { key: 'submachine_gun', name: 'Submachine Gun', type: 'weaponType' },
    { key: 'combat_bow', name: 'Combat Bow', type: 'weaponType' },
    { key: 'shotgun', name: 'Shotgun', type: 'weaponType' },
    { key: 'sniper_rifle', name: 'Sniper Rifle', type: 'weaponType' },
    { key: 'fusion_rifle', name: 'Fusion Rifle', type: 'weaponType' },
    { key: 'trace_rifle', name: 'Trace Rifle', type: 'weaponType' },
    { key: 'glaive', name: 'Glaive', type: 'weaponType' },
    { key: 'grenade_launcher', name: 'Grenade Launcher', type: 'weaponType' },
    { key: 'rocket_launcher', name: 'Rocket Launcher', type: 'weaponType' },
    { key: 'linear_fusion_rifle', name: 'Linear Fusion Rifle', type: 'weaponType' },
    { key: 'machine_gun', name: 'Machine Gun', type: 'weaponType' },
    { key: 'sword', name: 'Sword', type: 'weaponType' },
  ],

  seasons: [
    { key: 'season_01_red_war', number: 1, name: 'The Red War', year: 1 },
    { key: 'season_02_curse_of_osiris', number: 2, name: 'Curse of Osiris', year: 1 },
    { key: 'season_03_warmind', number: 3, name: 'Warmind', year: 1 },

    { key: 'season_04_outlaw', number: 4, name: 'Season of the Outlaw', year: 2 },
    { key: 'season_05_forge', number: 5, name: 'Season of the Forge', year: 2 },
    { key: 'season_06_drifter', number: 6, name: 'Season of the Drifter', year: 2 },
    { key: 'season_07_opulence', number: 7, name: 'Season of Opulence', year: 2 },

    { key: 'season_08_undying', number: 8, name: 'Season of the Undying', year: 3 },
    { key: 'season_09_dawn', number: 9, name: 'Season of Dawn', year: 3 },
    { key: 'season_10_worthy', number: 10, name: 'Season of the Worthy', year: 3 },
    { key: 'season_11_arrivals', number: 11, name: 'Season of Arrivals', year: 3 },

    { key: 'season_12_hunt', number: 12, name: 'Season of the Hunt', year: 4 },
    { key: 'season_13_chosen', number: 13, name: 'Season of the Chosen', year: 4 },
    { key: 'season_14_splicer', number: 14, name: 'Season of the Splicer', year: 4 },
    { key: 'season_15_lost', number: 15, name: 'Season of the Lost', year: 4 },

    { key: 'season_16_risen', number: 16, name: 'Season of the Risen', year: 5 },
    { key: 'season_17_haunted', number: 17, name: 'Season of the Haunted', year: 5 },
    { key: 'season_18_plunder', number: 18, name: 'Season of Plunder', year: 5 },
    { key: 'season_19_seraph', number: 19, name: 'Season of the Seraph', year: 5 },

    { key: 'season_20_defiance', number: 20, name: 'Season of Defiance', year: 6 },
    { key: 'season_21_deep', number: 21, name: 'Season of the Deep', year: 6 },
    { key: 'season_22_witch', number: 22, name: 'Season of the Witch', year: 6 },
    { key: 'season_23_wish', number: 23, name: 'Season of the Wish', year: 6 },

    { key: 'season_24_echoes', number: 24, name: 'Echoes', displayName: 'Episode: Echoes', year: 7 },
    { key: 'season_25_revenant', number: 25, name: 'Revenant', displayName: 'Episode: Revenant', year: 7 },
    { key: 'season_26_heresy', number: 26, name: 'Heresy', displayName: 'Episode: Heresy', year: 7 },

    { key: 'season_27_edge_of_fate', number: 27, name: 'The Edge of Fate', year: 8 },
    { key: 'season_28_ash_and_iron', number: 28, name: 'Ash & Iron', year: 8 },
    { key: 'season_29_renegades', number: 29, name: 'Renegades', year: 8 },
    { key: 'season_30_shadow_and_order', number: 30, name: 'Shadow & Order', year: 8 },

    { key: 'season_31_shattered_cycle', number: 31, name: 'Shattered Cycle', year: 9 },
    { key: 'season_3x_the_alchemist', number: null, name: 'The Alchemist', year: 10 },
  ],

  expansions: [
    { key: 'destiny_2', name: 'Destiny 2' },
    { key: 'curse_of_osiris', name: 'Curse of Osiris' },
    { key: 'warmind', name: 'Warmind' },
    { key: 'forsaken', name: 'Forsaken' },
    { key: 'shadowkeep', name: 'Shadowkeep' },
    { key: 'beyond_light', name: 'Beyond Light' },
    { key: 'the_witch_queen', name: 'The Witch Queen' },
    { key: 'lightfall', name: 'Lightfall' },
    { key: 'the_final_shape', name: 'The Final Shape' },
    { key: 'the_edge_of_fate', name: 'The Edge of Fate' },
    { key: 'renegades', name: 'Renegades' },
  ],
} as const

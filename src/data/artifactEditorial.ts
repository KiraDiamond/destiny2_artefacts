export type ArtifactEditorialNote = {
  summary: string
  keyPerks: string[]
}

export const ARTIFACT_EDITORIAL_NOTES: Record<string, ArtifactEditorialNote> = {
  'season-of-the-undying': {
    summary: 'Void grenade weaken and Arc melee burst defined this opening artifact board.',
    keyPerks: ['Oppressive Darkness', 'Thunder Coil', 'From the Depths'],
  },
  'season-of-dawn': {
    summary: 'A rifle-heavy board with ally weapon buffs, Solar melee damage, and Void super spikes.',
    keyPerks: ['Tenderizer', 'Solar Plexus', 'From the Depths'],
  },
  'season-of-the-worthy': {
    summary: 'Warmind Cell chains, Arc melee damage, and sword survivability carried this sandbox.',
    keyPerks: ["Tyrant's Surge", 'Thunder Coil', 'Lightning Strikes Twice'],
  },
  'season-of-arrivals': {
    summary: 'Void debuffs and Arc super damage sat on top of strong Charged with Light setup.',
    keyPerks: ['Oppressive Darkness', 'Volatile Conduction', 'Counter Charge'],
  },
  'season-of-the-hunt': {
    summary: 'This board leaned on Champion control, heavy ammo support, and a clean weapon damage payoff.',
    keyPerks: ['Spoils of War', 'Thermal Overload', 'Berserker'],
  },
  'season-of-the-chosen': {
    summary: 'Long-range anti-Champion play peaked here with Stasis-assisted burst and easy weaken setup.',
    keyPerks: ['Focusing Lens', 'Sundering Glare', 'Anti-Barrier Sniper Rifle'],
  },
  'season-of-the-splicer': {
    summary: 'Grenade launchers, rockets, and explosive perk interactions pushed this artifact to the front.',
    keyPerks: ['Breach and Clear', 'Energy Accelerant', 'Argent Ordnance'],
  },
  'season-of-the-lost': {
    summary: 'Fusion and linear fusion damage dominated, backed by Solar weaken and Stasis synergy.',
    keyPerks: ['Particle Deconstruction', 'Focusing Lens', 'Withering Heat'],
  },
  'season-of-the-risen': {
    summary: 'Void 3.0 landed with glaive suppression, volatile rounds, and heavy solo Void burst.',
    keyPerks: ['Suppressive Glaive', 'Volatile Flow', 'Devouring Depths'],
  },
  'season-of-the-haunted': {
    summary: 'A Solar 3.0 board built around Restoration, scorch chains, and reliable debuff access.',
    keyPerks: ['Classy Restoration', 'Rays of Precision', 'Withering Heat'],
  },
  'season-of-plunder': {
    summary: 'Arc 3.0 builds thrived on amplified loops and one of the stronger Arc super finishers.',
    keyPerks: ['Thunderous Retort', 'Bad Amplitude', 'Surge Detonators'],
  },
  'season-of-the-seraph': {
    summary: 'A standout solo artifact that paired grenade launcher weaken with broad self damage scaling.',
    keyPerks: ['Solo Operative', 'Weakened Clear', 'Monochromatic Maestro'],
  },
  'season-of-defiance': {
    summary: 'Strand launch sandbox with suspend utility, Void weapon spikes, and broad grenade value.',
    keyPerks: ['Volatile Flow', 'Counterweave', 'Untangler'],
  },
  'season-of-the-deep': {
    summary: 'Arc and Strand damage spikes defined the season, with breach utility filling the gaps.',
    keyPerks: ['Thunderous Retort', 'Supernova', 'Improved Unraveling'],
  },
  'season-of-the-witch': {
    summary: 'Matching your build mattered here, with elemental pickups and mono-element damage rewards.',
    keyPerks: ['Monochromatic Maestro', 'Elemental Fury', 'Frenzied Stacks'],
  },
  'season-of-the-wish': {
    summary: 'Solar and Stasis builds got the most out of this board, especially in solo boss damage setups.',
    keyPerks: ['Solo Operative', 'Argent Ordnance', 'Flint Striker'],
  },
  'episode-echoes': {
    summary: 'A Prismatic-friendly episode that stacked Void weaken, weapon buffs, and sword utility.',
    keyPerks: ['Expanding Abyss', 'Shieldcrush', 'Prismatic Transfer'],
  },
  'episode-revenant': {
    summary: 'Stasis and Void debuffs ran the show, with grenade launcher weaken and Frost Armor utility.',
    keyPerks: ['Concussive Reload', 'Supernova', 'Brain Freeze'],
  },
  'episode-heresy': {
    summary: 'An endgame-weighted board centered on Void weaken loops, sever/exhaust, and fusion damage.',
    keyPerks: ['Particle Reconstruction', 'Limiting Break', 'Maligned Harvest'],
  },
  'the-edge-of-fate': {
    summary: 'Kinetic, Sword, Arc, and Void routes all feed into shield-break utility and personal damage buffs.',
    keyPerks: ['Combination Argent Blade', 'Singularity Blade', 'Void Infestation'],
  },
  'ash-and-iron': {
    summary: 'The current board doubles down on Kinetic, Sword, Arc, and Void self-buff routes.',
    keyPerks: ['Combination Argent Blade', 'Singularity Blade', 'Sniper\'s Meditation'],
  },
}

import Gem from "@App/Gem";

import {Type, Quality} from "@App/Type/Gem";

export const ChippedRuby = new Gem(Type.Ruby, Quality.Chipped, require("@Image/gem/chipped_ruby.png"), 1, "3-4 Fire Damage", "+10 to Life", "12% Resist Fire");
export const FlawedRuby = new Gem(Type.Ruby, Quality.Flawed, require("@Image/gem/flawed_ruby.png"), 5, "5-8 Fire Damage", "+17 to Life", "16% Resist Fire");
export const RegularRuby = new Gem(Type.Ruby, Quality.Regular, require("@Image/gem/regular_ruby.png"), 12, "8-12 Fire Damage", "+24 to Life", "22% Resist Fire");
export const FlawlessRuby = new Gem(Type.Ruby, Quality.Flawless, require("@Image/gem/flawless_ruby.png"), 15, "10-16 Fire Damage", "+31 to Life", "28% Resist Fire");
export const PerfectRuby = new Gem(Type.Ruby, Quality.Perfect, require("@Image/gem/perfect_ruby.png"), 18, "15-20 Fire Damage", "+38 to Life", "40% Resist Fire");

export const ChippedSapphire = new Gem(Type.Sapphire, Quality.Chipped, require('@Image/gem/chipped_sapphire.png'), 1, "1-3 Cold Damage, 1.0 sec Duration", "+10 Max Mana", "12% Resist Cold");
export const FlawedSapphire = new Gem(Type.Sapphire, Quality.Flawed, require('@Image/gem/flawed_sapphire.png'), 5, "3-5 Cold Damage, 1.4 sec Duration", "+17 Max Mana", "16% Resist Cold");
export const RegularSapphire = new Gem(Type.Sapphire, Quality.Regular, require('@Image/gem/regular_sapphire.png'), 12, "4-7 Cold Damage, 2.0 sec Duration", "+24 Max Mana", "22% Resist Cold");
export const FlawlessSapphire = new Gem(Type.Sapphire, Quality.Flawless, require('@Image/gem/flawless_sapphire.png'), 15, "6-10 Cold Damage, 2.4 sec Duration", "+31 Max Mana", "28% Resist Cold");
export const PerfectSapphire = new Gem(Type.Sapphire, Quality.Perfect, require('@Image/gem/perfect_sapphire.png'), 18, "10-14 Cold Damage, 3.0 sec Duration", "+38 Max Mana", "40% Resist Cold");

export const ChippedTopaz = new Gem(Type.Topaz, Quality.Chipped, require('@Image/gem/chipped_topaz.png'), 1, "1-8 Lightning Damage", "+9% Chance to Find Magic Items", "12% Resist Lightning");
export const FlawedTopaz = new Gem(Type.Topaz, Quality.Flawed, require('@Image/gem/flawed_topaz.png'), 5, "1-14 Lightning Damage", "+13% Chance to Find Magic Items", "16% Resist Lightning");
export const RegularTopaz = new Gem(Type.Topaz, Quality.Regular, require('@Image/gem/regular_topaz.png'), 12, "1-22 Lightning Damage", "+16% Chance to Find Magic Items", "22% Resist Lightning");
export const FlawlessTopaz = new Gem(Type.Topaz, Quality.Flawless, require('@Image/gem/flawless_topaz.png'), 15, "1-30 Lightning Damage", "+20% Chance to Find Magic Items", "28% Resist Lightning");
export const PerfectTopaz = new Gem(Type.Topaz, Quality.Perfect, require('@Image/gem/perfect_topaz.png'), 18, "1-40 Lightning Damage", "+24% Chance to Find Magic Items", "40% Resist Lightning");

export const ChippedEmerald = new Gem(Type.Emerald, Quality.Chipped, require('@Image/gem/chipped_emerald.png'), 1, "+10 Poison Damage over 3 Seconds", "+3 to Dexterity", "12% Resist Poison");
export const FlawedEmerald = new Gem(Type.Emerald, Quality.Flawed, require('@Image/gem/flawed_emerald.png'), 5, "+20 Poison Damage over 4 Seconds", "+4 to Dexterity", "16% Resist Poison");
export const RegularEmerald = new Gem(Type.Emerald, Quality.Regular, require('@Image/gem/regular_emerald.png'), 12, "+40 Poison Damage over 5 Seconds", "+6 to Dexterity", "22% Resist Poison");
export const FlawlessEmerald = new Gem(Type.Emerald, Quality.Flawless, require('@Image/gem/flawless_emerald.png'), 15, "+60 Poison Damage over 6 Seconds", "+8 to Dexterity", "28% Resist Poison");
export const PerfectEmerald = new Gem(Type.Emerald, Quality.Perfect, require('@Image/gem/perfect_emerald.png'), 18, "+100 Poison Damage over 7 Seconds", "+10 to Dexterity", "40% Resist Poison");

export const ChippedDiamond = new Gem(Type.Diamond, Quality.Chipped, require('@Image/gem/chipped_diamond.png'), 1, "+28% Damage vs. Undead", "+20 to attack Rating", "All Resistances +6%");
export const FlawedDiamond = new Gem(Type.Diamond, Quality.Flawed, require('@Image/gem/flawed_diamond.png'), 5, "+34% Damage vs. Undead", "+40 to attack Rating", "All Resistances +8%");
export const RegularDiamond = new Gem(Type.Diamond, Quality.Regular, require('@Image/gem/regular_diamond.png'), 12, "+44% Damage vs. Undead", "+60 to attack Rating", "All Resistances +11%");
export const FlawlessDiamond = new Gem(Type.Diamond, Quality.Flawless, require('@Image/gem/flawless_diamond.png'), 15, "+54% Damage vs. Undead", "+80 to attack Rating", "All Resistances +14%");
export const PerfectDiamond = new Gem(Type.Diamond, Quality.Perfect, require('@Image/gem/perfect_diamond.png'), 18, "+68% Damage vs. Undead", "+100 to attack Rating", "All Resistances +19%");

export const ChippedAmethyst = new Gem(Type.Amethyst, Quality.Chipped, require('@Image/gem/chipped_amethyst.png'), 1, "+40 to Attack Rating", "+3 to Strength", "+8 to Defense");
export const FlawedAmethyst = new Gem(Type.Amethyst, Quality.Flawed, require('@Image/gem/flawed_amethyst.png'), 5, "+60 to Attack Rating", "+4 to Strength", "+12 to Defense");
export const RegularAmethyst = new Gem(Type.Amethyst, Quality.Regular, require('@Image/gem/regular_amethyst.png'), 12, "+80 to Attack Rating", "+6 to Strength", "+18 to Defense");
export const FlawlessAmethyst = new Gem(Type.Amethyst, Quality.Flawless, require('@Image/gem/flawless_amethyst.png'), 15, "+100 to Attack Rating", "+8 to Strength", "+24 to Defense");
export const PerfectAmethyst = new Gem(Type.Amethyst, Quality.Perfect, require('@Image/gem/perfect_amethyst.png'), 18, "+150 to Attack Rating", "+10 to Strength", "+30 to Defense");

export const ChippedSkull = new Gem(Type.Skull, Quality.Chipped, require('@Image/gem/chipped_skull.png'), 1, "Steals 2% life, 1% Mana", "Replenish Life +2, Regenerate Mana 8%", "Attacker Takes 4 Damage");
export const FlawedSkull = new Gem(Type.Skull, Quality.Flawed, require('@Image/gem/flawed_skull.png'), 5, "Steals 2% life, 2% Mana", "Replenish Life +3, Regenerate Mana 8%", "Attacker Takes 8 Damage");
export const RegularSkull = new Gem(Type.Skull, Quality.Regular, require('@Image/gem/regular_skull.png'), 12, "Steals 3% life, 2% Mana", "Replenish Life +3, Regenerate Mana 12%", "Attacker Takes 12 Damage");
export const FlawlessSkull = new Gem(Type.Skull, Quality.Flawless, require('@Image/gem/flawless_skull.png'), 15, "Steals 3% life, 3% Mana", "Replenish Life +4, Regenerate Mana 12%", "Attacker Takes 16 Damage");
export const PerfectSkull = new Gem(Type.Skull, Quality.Perfect, require('@Image/gem/perfect_skull.png'), 18, "Steals 4% life, 3% Mana", "Replenish Life +5, Regenerate Mana 19%", "Attacker Takes 20 Damage");

export default {
    ChippedRuby,
    FlawedRuby,
    RegularRuby,
    FlawlessRuby,
    PerfectRuby,
    ChippedSapphire,
    FlawedSapphire,
    RegularSapphire,
    FlawlessSapphire,
    PerfectSapphire,
    ChippedTopaz,
    FlawedTopaz,
    RegularTopaz,
    FlawlessTopaz,
    PerfectTopaz,
    ChippedEmerald,
    FlawedEmerald,
    RegularEmerald,
    FlawlessEmerald,
    PerfectEmerald,
    ChippedDiamond,
    FlawedDiamond,
    RegularDiamond,
    FlawlessDiamond,
    PerfectDiamond,
    ChippedAmethyst,
    FlawedAmethyst,
    RegularAmethyst,
    FlawlessAmethyst,
    PerfectAmethyst,
    ChippedSkull,
    FlawedSkull,
    RegularSkull,
    FlawlessSkull,
    PerfectSkull,
};

export const GemsByType = {
    [Type.Ruby]: {
        [Quality.Chipped]: ChippedRuby,
        [Quality.Flawed]: FlawedRuby,
        [Quality.Regular]: RegularRuby,
        [Quality.Flawless]: FlawlessRuby,
        [Quality.Perfect]: PerfectRuby,
    },
    [Type.Sapphire]: {
        [Quality.Chipped]: ChippedSapphire,
        [Quality.Flawed]: FlawedSapphire,
        [Quality.Regular]: RegularSapphire,
        [Quality.Flawless]: FlawlessSapphire,
        [Quality.Perfect]: PerfectSapphire,
    },
    [Type.Topaz]: {
        [Quality.Chipped]: ChippedTopaz,
        [Quality.Flawed]: FlawedTopaz,
        [Quality.Regular]: RegularTopaz,
        [Quality.Flawless]: FlawlessTopaz,
        [Quality.Perfect]: PerfectTopaz,
    },
    [Type.Emerald]: {
        [Quality.Chipped]: ChippedEmerald,
        [Quality.Flawed]: FlawedEmerald,
        [Quality.Regular]: RegularEmerald,
        [Quality.Flawless]: FlawlessEmerald,
        [Quality.Perfect]: PerfectEmerald,
    },
    [Type.Diamond]: {
        [Quality.Chipped]: ChippedDiamond,
        [Quality.Flawed]: FlawedDiamond,
        [Quality.Regular]: RegularDiamond,
        [Quality.Flawless]: FlawlessDiamond,
        [Quality.Perfect]: PerfectDiamond,
    },
    [Type.Amethyst]: {
        [Quality.Chipped]: ChippedAmethyst,
        [Quality.Flawed]: FlawedAmethyst,
        [Quality.Regular]: RegularAmethyst,
        [Quality.Flawless]: FlawlessAmethyst,
        [Quality.Perfect]: PerfectAmethyst,
    },
    [Type.Skull]: {
        [Quality.Chipped]: ChippedSkull,
        [Quality.Flawed]: FlawedSkull,
        [Quality.Regular]: RegularSkull,
        [Quality.Flawless]: FlawlessSkull,
        [Quality.Perfect]: PerfectSkull,
    },
};

export const GemsByQuality = {
    [Quality.Chipped]: {
        [Type.Ruby]: ChippedRuby,
        [Type.Sapphire]: ChippedSapphire,
        [Type.Topaz]: ChippedTopaz,
        [Type.Emerald]: ChippedEmerald,
        [Type.Diamond]: ChippedDiamond,
        [Type.Amethyst]: ChippedAmethyst,
        [Type.Skull]: ChippedSkull,
    },
    [Quality.Flawed]: {
        [Type.Ruby]: FlawedRuby,
        [Type.Sapphire]: FlawedSapphire,
        [Type.Topaz]: FlawedTopaz,
        [Type.Emerald]: FlawedEmerald,
        [Type.Diamond]: FlawedDiamond,
        [Type.Amethyst]: FlawedAmethyst,
        [Type.Skull]: FlawedSkull,
    },
    [Quality.Regular]: {
        [Type.Ruby]: RegularRuby,
        [Type.Sapphire]: RegularSapphire,
        [Type.Topaz]: RegularTopaz,
        [Type.Emerald]: RegularEmerald,
        [Type.Diamond]: RegularDiamond,
        [Type.Amethyst]: RegularAmethyst,
        [Type.Skull]: RegularSkull,
    },
    [Quality.Flawless]: {
        [Type.Ruby]: FlawlessRuby,
        [Type.Sapphire]: FlawlessSapphire,
        [Type.Topaz]: FlawlessTopaz,
        [Type.Emerald]: FlawlessEmerald,
        [Type.Diamond]: FlawlessDiamond,
        [Type.Amethyst]: FlawlessAmethyst,
        [Type.Skull]: FlawlessSkull,
    },
    [Quality.Perfect]: {
        [Type.Ruby]: PerfectRuby,
        [Type.Sapphire]: PerfectSapphire,
        [Type.Topaz]: PerfectTopaz,
        [Type.Emerald]: PerfectEmerald,
        [Type.Diamond]: PerfectDiamond,
        [Type.Amethyst]: PerfectAmethyst,
        [Type.Skull]: PerfectSkull,
    },
}
import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "White",
    [Item.Wand],
    [Rune.Dol, Rune.Io],
    [
        new Stat(StatType.Special, "Hit Causes Monster To Flee 25%"),
        new Stat(StatType.Stats, "+10 To Vitality"),
        new Stat(StatType.Skill, "+3 To Poison And Bone Skills (Necromancer Only)"),
        new Stat(StatType.Skill, "+3 To Bone Armor (Necromancer Only)"),
        new Stat(StatType.Skill, "+2 To Bone Spear (Necromancer Only)"),
        new Stat(StatType.Skill, "+4 To Skeleton Mastery (Necromancer Only)"),
        new Stat(StatType.Defense, "Magic Damage Reduced By 4"),
        new Stat(StatType.FasterCastRate, "20% Faster Cast Rate"),
        new Stat(StatType.Stats, "+13 To Mana"),
    ],
    Character.Necromancer,
);
import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Sanctuary",
    [Item.Shield],
    [Rune.Ko, Rune.Ko, Rune.Mal],
    [
        new Stat(StatType.FasterHitRecovery, "+20% Faster Hit Recovery"),
        new Stat(StatType.FasterBlockRate, "+20% Faster Block Rate"),
        new Stat(StatType.IncreasedBlockChance, "20% Increased Chance of Blocking"),
        new Stat(StatType.Defense, "+130-160% Enhanced Defense (varies)"),
        new Stat(StatType.Defense, "+250 Defense vs. Missile"),
        new Stat(StatType.Stats, "+20 To Dexterity"),
        new Stat(StatType.Resistance, "All Resistances +50-70 (varies)"),
        new Stat(StatType.Defense, "Magic Damage Reduced By 7"),
        new Stat(StatType.Charges, "Level 12 Slow Missiles (60 Charges)"),
    ],
);

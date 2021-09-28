import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Chains of Honor",
    [Item.BodyArmor],
    [Rune.Dol, Rune.Um, Rune.Ber, Rune.Ist],
    [
        new Stat(StatType.Skill, "+2 To All Skills"),
        new Stat(StatType.Damage, "+200% Damage To Demons"),
        new Stat(StatType.Damage, "+100% Damage To Undead"),
        new Stat(StatType.Default, "8% Life Stolen Per Hit"),
        new Stat(StatType.Defense, "+70% Enhanced Defense"),
        new Stat(StatType.Stats, "+20 To Strength"),
        new Stat(StatType.Defense, "Replenish Life +7"),
        new Stat(StatType.Resistance, "All Resistances +65"),
        new Stat(StatType.Defense, "Damage Reduced By 8%"),
        new Stat(StatType.MagicFind, "25% Better Chance of Getting Magic Items"),
    ],
);

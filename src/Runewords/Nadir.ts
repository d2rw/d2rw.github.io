import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Nadir",
    [Item.Helm],
    [Rune.Nef, Rune.Tir],
    [
        new Stat(StatType.Defense, "+50% Enhanced Defense"),
        new Stat(StatType.Defense, "+10 Defense"),
        new Stat(StatType.Defense, "+30 Defense vs. Missile"),
        new Stat(StatType.Charges, "Level 13 Cloak of Shadows (9 Charges)"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.Stats, "+5 To Strength"),
        new Stat(StatType.GoldFind, "-33% Extra Gold From Monsters"),
        new Stat(StatType.Default, "-3 To Light Radius"),
    ],
);
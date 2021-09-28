import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Lore",
    [Item.Helm],
    [Rune.Ort, Rune.Sol],
    [
        new Stat(StatType.Skill, "+1 To All Skill Levels"),
        new Stat(StatType.Stats, "+10 To Energy"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.Resistance, "Lightning Resist +30%"),
        new Stat(StatType.Defense, "Damage Reduced By 7"),
        new Stat(StatType.Default, "+2 To Light Radius"),
    ],
);
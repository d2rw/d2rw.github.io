import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Splendor",
    [Item.Shield],
    [Rune.Eth, Rune.Lum],
    [
        new Stat(StatType.Skill, "+1 To All Skills"),
        new Stat(StatType.FasterCastRate, "+10% Faster Cast Rate"),
        new Stat(StatType.FasterBlockRate, "+20% Faster Block Rate"),
        new Stat(StatType.Defense, "+60-100% Enhanced Defense (varies)"),
        new Stat(StatType.Stats, "+10 To Energy"),
        new Stat(StatType.Defense, "Regenerate Mana 15%"),
        new Stat(StatType.GoldFind, "50% Extra Gold From Monsters"),
        new Stat(StatType.MagicFind, "20% Better Chance of Getting Magic Items"),
        new Stat(StatType.Default, "+3 To Light Radius"),
    ],
);

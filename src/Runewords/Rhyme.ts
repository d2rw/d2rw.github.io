import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Rhyme",
    [Item.Shield],
    [Rune.Shael, Rune.Eth],
    [
        new Stat(StatType.IncreasedBlockChance, "20% Increased Chance of Blocking"),
        new Stat(StatType.FasterBlockRate, "40% Faster Block Rate"),
        new Stat(StatType.Resistance, "All Resistances +25"),
        new Stat(StatType.Defense, "Regenerate Mana 15%"),
        new Stat(StatType.Special, "Cannot Be Frozen"),
        new Stat(StatType.GoldFind, "50% Extra Gold From Monsters"),
        new Stat(StatType.MagicFind, "25% Better Chance Of Getting Magic Items"),
    ],
);
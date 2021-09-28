import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Wealth",
    [Item.BodyArmor],
    [Rune.Lem, Rune.Ko, Rune.Tir],
    [
        new Stat(StatType.GoldFind, "300% Extra Gold From Monsters"),
        new Stat(StatType.MagicFind, "100% Better Chance Of Getting Magic Items"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.Stats, "+10 To Dexterity"),
    ],
);
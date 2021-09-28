import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Strength",
    [Item.Melee],
    [Rune.Amn, Rune.Tir],
    [
        new Stat(StatType.Damage, "35% Enhanced Damage"),
        new Stat(StatType.Special, "25% Chance Of Crushing Blow"),
        new Stat(StatType.Defense, "7% Life Stolen Per Hit"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.Stats, "+20 To Strength"),
        new Stat(StatType.Stats, "+10 To Vitality"),
    ],
);
import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Honor",
    [Item.Melee],
    [Rune.Amn, Rune.El, Rune.Ith, Rune.Tir, Rune.Sol],
    [
        new Stat(StatType.Damage, "+160% Enhanced Damage"),
        new Stat(StatType.Damage, "+9 To Minimum Damage"),
        new Stat(StatType.Damage, "+9 To Maximum Damage"),
        new Stat(StatType.Special, "25% Deadly Strike"),
        new Stat(StatType.AttackRating, "+250 To Attack Rating"),
        new Stat(StatType.Skill, "+1 to All Skills"),
        new Stat(StatType.Defense, "7% Life Stolen Per Hit"),
        new Stat(StatType.Defense, "Replenish Life +10"),
        new Stat(StatType.Stats, "+10 To Strength"),
        new Stat(StatType.Default, "+1 To Light Radius"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
    ],
);
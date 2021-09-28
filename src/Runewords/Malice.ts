import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Malice",
    [Item.Melee],
    [Rune.Ith, Rune.El, Rune.Eth],
    [
        new Stat(StatType.Damage, "+33% Enhanced Damage"),
        new Stat(StatType.Damage, "+9 To Maximum Damage"),
        new Stat(StatType.Special, "100% Chance Of Open Wounds"),
        new Stat(StatType.Damage, "-25% Target Defense"),
        new Stat(StatType.Damage, "-100 To Monster Defense Per Hit"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.AttackRating, "+50 To Attack Rating"),
        new Stat(StatType.Special, "Drain Life -5"),
    ],
);
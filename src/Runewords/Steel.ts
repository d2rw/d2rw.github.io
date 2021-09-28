import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Steel",
    [Item.Sword, Item.Axe, Item.Mace],
    [Rune.Tal, Rune.Eth],
    [
        new Stat(StatType.Damage, "20% Enhanced Damage"),
        new Stat(StatType.Damage, "+3 To Minimum Damage"),
        new Stat(StatType.Damage, "+3 To Maximum Damage"),
        new Stat(StatType.AttackRating, "+50 To Attack Rating"),
        new Stat(StatType.Special, "50% Chance Of Open Wounds"),
        new Stat(StatType.IncreasedAttackSpeed, "25% Increased Attack Speed"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.Default, "+1 To Light Radius"),
    ],
);
import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "King's Grace",
    [Item.Sword, Item.Scepter],
    [Rune.Amn, Rune.Ral, Rune.Thul],
    [
        new Stat(StatType.Damage, "+100% Enhanced Damage"),
        new Stat(StatType.Damage, "+100% Damage To Demons"),
        new Stat(StatType.Damage, "+50% Damage To Undead"),
        new Stat(StatType.Damage, "Adds 5-30 Fire Damage"),
        new Stat(StatType.Damage, "Adds 3-14 Cold Damage - 3 Second Duration"),
        new Stat(StatType.AttackRating, "+150 To Attack Rating"),
        new Stat(StatType.AttackRating, "+100 To Attack Rating Against Demons"),
        new Stat(StatType.AttackRating, "+100 To Attack Rating Against Undead"),
        new Stat(StatType.Defense, "7% Life Stolen Per Hit"),
    ],
);
import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Zephyr",
    [Item.Missile],
    [Rune.Ort, Rune.Eth],
    [
        new Stat(StatType.Damage, "+33% Enhanced Damage"),
        new Stat(StatType.AttackRating, "+66 To Attack Rating"),
        new Stat(StatType.Damage, "Adds 1-50 Lightning Damage"),
        new Stat(StatType.Damage, "-25% Target Defense"),
        new Stat(StatType.Defense, "+25 Defense"),
        new Stat(StatType.FasterRunWalk, "25% Faster Run/Walk"),
        new Stat(StatType.IncreasedAttackSpeed, "25% Increased Attack Speed"),
        new Stat(StatType.Default, "7% Chance To Cast Level 1 Twister When Struck"),
    ],
);
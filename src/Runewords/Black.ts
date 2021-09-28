import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Black",
    [Item.Clubs, Item.Hammer, Item.Mace],
    [Rune.Thul, Rune.Io, Rune.Nef],
    [
        new Stat(StatType.Damage, "+120% Enhanced Damage"),
        new Stat(StatType.Special, "40% Chance Of Crushing Blow"),
        new Stat(StatType.AttackRating, "+200 To Attack Rating"),
        new Stat(StatType.Damage, "Adds 3-14 Cold Damage - Cold Duration 3 Seconds"),
        new Stat(StatType.Stats, "+10 To Vitality"),
        new Stat(StatType.IncreasedAttackSpeed, "15% Increased Attack Speed"),
        new Stat(StatType.Special, "Knockback"),
        new Stat(StatType.Defense, "Magic Damage Reduced By 2"),
        new Stat(StatType.Charges, "Level 4 Corpse Explosion (12 Charges)"),
    ]
);

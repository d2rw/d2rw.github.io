import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Call to Arms",
    [Item.Weapon],
    [Rune.Amn, Rune.Ral, Rune.Mal, Rune.Ist, Rune.Ohm],
    [
        new Stat(StatType.Skill, "+1 To All Skills"),
        new Stat(StatType.IncreasedAttackSpeed, "+40% Increased Attack Speed"),
        new Stat(StatType.Damage, "+250-290% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "Adds 5-30 Fire Damage"),
        new Stat(StatType.Default, "7% Life Stolen Per Hit"),
        new Stat(StatType.Skill, "+2-6 To Battle Command (varies)"),
        new Stat(StatType.Skill, "+1-6 To Battle Orders (varies)"),
        new Stat(StatType.Skill, "+1-4 To Battle Cry (varies)"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Defense, "Replenish Life +12"),
        new Stat(StatType.MagicFind, "30% Better Chance of Getting Magic Items"),
    ],
);

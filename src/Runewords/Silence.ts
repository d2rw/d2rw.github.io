import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Silence",
    [Item.Weapon],
    [Rune.Dol, Rune.Eld, Rune.Hel, Rune.Ist, Rune.Tir, Rune.Vex],
    [
        new Stat(StatType.Damage, "200% Enhanced Damage"),
        new Stat(StatType.Damage, "+75% Damage To Undead"),
        new Stat(StatType.Special, "Requirements -20%"),
        new Stat(StatType.IncreasedAttackSpeed, "20% Increased Attack Speed"),
        new Stat(StatType.AttackRating, "+50 To Attack Rating Against Undead"),
        new Stat(StatType.Skill, "+2 To All Skills"),
        new Stat(StatType.Resistance, "All Resistances +75"),
        new Stat(StatType.FasterHitRecovery, "20% Faster Hit Recovery"),
        new Stat(StatType.Defense, "11% Mana Stolen Per Hit"),
        new Stat(StatType.Special, "Hit Causes Monster To Flee 25%"),
        new Stat(StatType.Special, "Hit Blinds Target +33"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.MagicFind, "30% Better Chance Of Getting Magic Items"),
    ],
);
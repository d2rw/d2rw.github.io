import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Edge",
    [Item.Missile],
    [Rune.Tir, Rune.Tal, Rune.Amn],
    [
        new Stat(StatType.Aura, "Level 15 Thorns Aura When Equipped"),
        new Stat(StatType.IncreasedAttackSpeed, "+35% Increased Attack Speed"),
        new Stat(StatType.Damage, "+320-380% Damage To Demons (varies)"),
        new Stat(StatType.Damage, "+280% Damage To Undead"),
        new Stat(StatType.Damage, "+75 Poison Damage Over 5 Seconds"),
        new Stat(StatType.Default, "7% Life Stolen Per Hit"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Stats, "+5-10 To All Attributes (varies)"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.Special, "Reduces All Vendor Prices 15%"),
    ],
    undefined,
    true
);

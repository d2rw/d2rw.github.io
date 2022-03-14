import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Death",
    [Item.Sword, Item.Axe],
    [Rune.Hel, Rune.El, Rune.Vex, Rune.Ort, Rune.Gul],
    [
        new Stat(StatType.Default, "100% Chance To Cast Level 44 Chain Lightning When You Die"),
        new Stat(StatType.Default, "25% Chance To Cast Level 18 Glacial Spike On Attack"),
        new Stat(StatType.Special, "Indestructible"),
        new Stat(StatType.Damage, "+300-385% Enhanced Damage (varies)"),
        new Stat(StatType.AttackRating, "20% Bonus To Attack Rating"),
        new Stat(StatType.AttackRating, "+50 To Attack Rating"),
        new Stat(StatType.Damage, "Adds 1-50 Lightning Damage"),
        new Stat(StatType.Defense, "7% Mana Stolen Per Hit"),
        new Stat(StatType.Special, "50% Chance of Crushing Blow"),
        new Stat(StatType.Special, "+(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)"),
        new Stat(StatType.Default, "+1 To Light Radius"),
        new Stat(StatType.Charges, "Level 22 Blood Golem (15 Charges)"),
        new Stat(StatType.Special, "Requirements -20%"),
    ],
    undefined,
    true
);

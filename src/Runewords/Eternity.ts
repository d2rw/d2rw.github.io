import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Eternity",
    [Item.Melee],
    [Rune.Amn, Rune.Ber, Rune.Ist, Rune.Sol, Rune.Sur],
    [
        new Stat(StatType.Special, "Indestructible"),
        new Stat(StatType.Damage, "+260-310% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "+9 To Minimum Damage"),
        new Stat(StatType.Default, "7% Life Stolen Per Hit"),
        new Stat(StatType.Special, "20% Chance of Crushing Blow"),
        new Stat(StatType.Special, "Hit Blinds Target"),
        new Stat(StatType.Special, "Slows Target By 33%"),
        new Stat(StatType.Defense, "Regenerate Mana 16%"),
        new Stat(StatType.Defense, "Replenish Life +16"),
        new Stat(StatType.Special, "Cannot Be Frozen"),
        new Stat(StatType.MagicFind, "30% Better Chance Of Getting Magic Items"),
        new Stat(StatType.Charges, "Level 8 Revive (88 Charges)"),
    ],
);

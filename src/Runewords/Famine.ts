import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Famine",
    [Item.Axe, Item.Hammer],
    [Rune.Fal, Rune.Ohm, Rune.Ort, Rune.Jah],
    [
        new Stat(StatType.IncreasedAttackSpeed, "+30% Increased Attack Speed"),
        new Stat(StatType.Damage, "+320-370% Enhanced Damage (varies)"),
        new Stat(StatType.Special, "Ignore Target's Defense"),
        new Stat(StatType.Damage, "Adds 180-200 Magic Damage"),
        new Stat(StatType.Damage, "Adds 50-200 Fire Damage"),
        new Stat(StatType.Damage, "Adds 51-250 Lightning Damage"),
        new Stat(StatType.Damage, "Adds 50-200 Cold Damage"),
        new Stat(StatType.Defense, "12% Life Stolen Per Hit"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Stats, "+10 To Strength"),
    ],
);
import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Venom",
    [Item.Weapon],
    [Rune.Tal, Rune.Dol, Rune.Mal],
    [
        new Stat(StatType.Special, "Hit Causes Monster To Flee 25%"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Damage, "Ignore Target's Defense"),
        new Stat(StatType.Defense, "7% Mana Stolen Per Hit"),
        new Stat(StatType.Charges, "Level 15 Poison Explosion (27 Charges)"),
        new Stat(StatType.Charges, "Level 13 Poison Nova (11 Charges)"),
        new Stat(StatType.Damage, "+273 Poison Damage Over 6 seconds"),
    ],
);
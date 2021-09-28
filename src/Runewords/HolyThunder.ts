import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "Holy Thunder",
    [Item.Scepter],
    [Rune.Eth, Rune.Ral, Rune.Ort, Rune.Tal],
    [
        new Stat(StatType.Damage, "+60% Enhanced Damage"),
        new Stat(StatType.Damage, "-25% Target Defense"),
        new Stat(StatType.Damage, "Adds 5-30 Fire Damage"),
        new Stat(StatType.Damage, "Adds 21-110 Lightning Damage"),
        new Stat(StatType.Damage, "+75 Poison Damage Over 5 Seconds"),
        new Stat(StatType.Damage, "+10 To Maximum Damage"),
        new Stat(StatType.Resistance, "Lightning Resistance +60%"),
        new Stat(StatType.Resistance, "+5 To Maximum Lightning Resistance"),
        new Stat(StatType.Skill, "+3 To Holy Shock (Paladin Only)"),
        new Stat(StatType.Charges, "Level 7 Chain Lightning (60 Charges)"),
    ],
    Character.Paladin
);

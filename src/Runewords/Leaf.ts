import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";
import Character from "@App/Type/Character";

export default new Runeword(
    "Leaf",
    [Item.Stave],
    [Rune.Tir, Rune.Ral],
    [
        new Stat(StatType.Damage, "Adds 5-30 Fire Damage"),
        new Stat(StatType.Skill, "+3 To Fire Skills"),
        new Stat(StatType.Skill, "+3 To Fire Bolt (Sorceress Only)"),
        new Stat(StatType.Skill, "+3 To Inferno (Sorceress Only)"),
        new Stat(StatType.Skill, "+3 To Warmth (Sorceress Only)"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.Defense, "+ (2 Per Character Level) +2-198 To Defense (Based On Character Level)"),
        new Stat(StatType.Resistance, "Cold Resist +33%"),
    ],
    Character.Sorceress
);
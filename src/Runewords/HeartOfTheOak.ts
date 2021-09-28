import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Heart of the Oak",
    [Item.Stave, Item.Mace],
    [Rune.Ko, Rune.Vex, Rune.Pul, Rune.Thul],
    [
        new Stat(StatType.Skill, "+3 To All Skills"),
        new Stat(StatType.FasterCastRate, "+40% Faster Cast Rate"),
        new Stat(StatType.Damage, "+75% Damage To Demons"),
        new Stat(StatType.AttackRating, "+100 To Attack Rating Against Demons"),
        new Stat(StatType.Damage, "Adds 3-14 Cold Damage, 3 sec. Duration (Normal)"),
        new Stat(StatType.Defense, "7% Mana Stolen Per Hit"),
        new Stat(StatType.Stats, "+10 To Dexterity"),
        new Stat(StatType.Defense, "Replenish Life +20"),
        new Stat(StatType.Stats, "Increase Maximum Mana 15%"),
        new Stat(StatType.Resistance, "All Resistances +30-40 (varies)"),
        new Stat(StatType.Charges, "Level 4 Oak Sage (25 Charges)"),
        new Stat(StatType.Charges, "Level 14 Raven (60 Charges)"),
    ],
);

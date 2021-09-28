import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Faith",
    [Item.Missile],
    [Rune.Ohm, Rune.Jah, Rune.Lem, Rune.Eld],
    [
        new Stat(StatType.Aura, "Level 12-15 Fanaticism Aura When Equipped (varies)"),
        new Stat(StatType.Skill, "+1-2 To All Skills (varies)"),
        new Stat(StatType.Damage, "+330% Enhanced Damage"),
        new Stat(StatType.Damage, "Ignore Target's Defense"),
        new Stat(StatType.AttackRating, "300% Bonus To Attack Rating"),
        new Stat(StatType.Damage, "+75% Damage To Undead"),
        new Stat(StatType.Damage, "+50 To Attack Rating Against Undead"),
        new Stat(StatType.Damage, "+120 Fire Damage"),
        new Stat(StatType.Resistance, "All Resistances +15"),
        new Stat(StatType.Special, "10% Reanimate As: Returned"),
        new Stat(StatType.GoldFind, "75% Extra Gold From Monsters"),
    ],
    undefined,
    true
);

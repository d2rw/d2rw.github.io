import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Insight",
    [Item.Polearm, Item.Stave],
    [Rune.Ral, Rune.Tir, Rune.Tal, Rune.Sol],
    [
        new Stat(StatType.Aura, "Level 12-17 Meditation Aura When Equipped (varies)"),
        new Stat(StatType.FasterCastRate, "+35% Faster Cast Rate"),
        new Stat(StatType.Damage, "+200-260% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "+9 To Minimum Damage"),
        new Stat(StatType.AttackRating, "180-250% Bonus to Attack Rating (varies)"),
        new Stat(StatType.Damage, "Adds 5-30 Fire Damage"),
        new Stat(StatType.Damage, "+75 Poison Damage Over 5 Seconds"),
        new Stat(StatType.Skill, "+1-6 To Critical Strike (varies)"),
        new Stat(StatType.Stats, "+5 To All Attributes"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.MagicFind, "23% Better Chance of Getting Magic Items"),
    ],
    undefined,
    true
);

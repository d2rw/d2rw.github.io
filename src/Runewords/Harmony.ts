import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Harmony",
    [Item.Missile],
    [Rune.Tir, Rune.Ith, Rune.Sol, Rune.Ko],
    [
        new Stat(StatType.Aura, "Level 10 Vigor Aura When Equipped"),
        new Stat(StatType.Damage, "+200-275% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "+9 To Minimum Damage"),
        new Stat(StatType.Damage, "+9 To Maximum Damage"),
        new Stat(StatType.Damage, "Adds 55-160 Lightning Damage"),
        new Stat(StatType.Damage, "Adds 55-160 Fire Damage"),
        new Stat(StatType.Damage, "Adds 55-160 Cold Damage"),
        new Stat(StatType.Skill, "+2-6 To Valkyrie (varies)"),
        new Stat(StatType.Stats, "+10 To Dexterity"),
        new Stat(StatType.Defense, "Regenerate Mana 20%"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.Defense, "+2 To Light Radius"),
        new Stat(StatType.Charges, "Level 20 Revive (25 Charges)"),
    ],
    undefined,
    true
);

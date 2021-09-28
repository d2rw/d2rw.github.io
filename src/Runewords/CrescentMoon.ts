import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Crescent Moon",
    [Item.Axe, Item.Sword, Item.Polearm],
    [Rune.Shael, Rune.Um, Rune.Tir],
    [
        new Stat(StatType.Skill, "+1 To All Skills"),
        new Stat(StatType.Default, "10% Chance To Cast Level 17 Chain Lightning On Striking"),
        new Stat(StatType.Default, "7% Chance To Cast Level 13 Static Field On Striking"),
        new Stat(StatType.IncreasedAttackSpeed, "+20% Increased Attack Speed"),
        new Stat(StatType.Damage, "+180-220% Enhanced Damage (varies)"),
        new Stat(StatType.Special, "Ignore Target's Defense"),
        new Stat(StatType.Damage, "-35% To Enemy Lightning Resistance"),
        new Stat(StatType.Special, "25% Chance of Open Wounds"),
        new Stat(StatType.Defense, "+9-11 Magic Absorb (varies)"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.Charges, "Level 18 Summon Spirit Wolf (30 Charges)"),
    ],
);

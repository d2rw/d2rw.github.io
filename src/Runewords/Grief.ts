import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Grief",
    [Item.Sword, Item.Axe],
    [Rune.Eth, Rune.Tir, Rune.Lo, Rune.Mal, Rune.Ral],
    [
        new Stat(StatType.Default, "35% Chance To Cast Level 15 Venom On Striking"),
        new Stat(StatType.IncreasedAttackSpeed, "+30-40% Increased Attack Speed (varies)"),
        new Stat(StatType.Damage, "Damage +340-400 (varies)"),
        new Stat(StatType.Damage, "Ignore Target's Defense"),
        new Stat(StatType.Damage, "-25% Target Defense"),
        new Stat(StatType.Damage, "+(1.875 per character level) 1.875-185.625% Damage To Demons (Based on Character Level)"),
        new Stat(StatType.Damage, "Adds 5-30 Fire Damage"),
        new Stat(StatType.Damage, "-20-25% To Enemy Poison Resistance (varies)"),
        new Stat(StatType.Special, "20% Deadly Strike"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Defense, "+2 To Mana After Each Kill"),
        new Stat(StatType.Defense, "+10-15 Life After Each Kill (varies)"),
    ],
    undefined,
    true
);

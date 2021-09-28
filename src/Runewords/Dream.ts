import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Dream",
    [Item.Helm, Item.Shield],
    [Rune.Io, Rune.Jah, Rune.Pul],
    [
        new Stat(StatType.Default, "10% Chance To Cast Level 15 Confuse When Struck"),
        new Stat(StatType.Aura, "Level 15 Holy Shock Aura When Equipped"),
        new Stat(StatType.FasterHitRecovery, "+20-30% Faster Hit Recovery (varies)"),
        new Stat(StatType.Defense, "+30% Enhanced Defense"),
        new Stat(StatType.Defense, "+150-220 Defense (varies)"),
        new Stat(StatType.Stats, "+10 To Vitality"),
        new Stat(StatType.Stats, "Increase Maximum Life 5% (Helms Only)"),
        new Stat(StatType.Stats, "+50 To Life (Shields Only)"),
        new Stat(StatType.Stats, "+0.625-61.875 To Mana (Based On Character Level)"),
        new Stat(StatType.Resistance, "All Resistances +5-20 (varies)"),
        new Stat(StatType.MagicFind, "12-25% Better Chance of Getting Magic Items (varies)"),
    ],
    undefined,
    true
);

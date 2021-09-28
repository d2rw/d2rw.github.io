import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Ice",
    [Item.Missile],
    [Rune.Amn, Rune.Shael, Rune.Jah, Rune.Lo],
    [
        new Stat(StatType.Default, "100% Chance To Cast Level 40 Blizzard When You Level-up"),
        new Stat(StatType.Default, "25% Chance To Cast Level 22 Frost Nova On Striking"),
        new Stat(StatType.Aura, "Level 18 Holy Freeze Aura When Equipped"),
        new Stat(StatType.IncreasedAttackSpeed, "+20% Increased Attack Speed"),
        new Stat(StatType.Damage, "+140-210% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "Ignore Target's Defense"),
        new Stat(StatType.Damage, "+25-30% To Cold Skill Damage (varies)"),
        new Stat(StatType.Damage, "-20% To Enemy Cold Resistance"),
        new Stat(StatType.Defense, "7% Life Stolen Per Hit"),
        new Stat(StatType.Special, "20% Deadly Strike"),
        new Stat(StatType.GoldFind, "3.125-309.375 Extra Gold From Monsters (Based on Character Level)"),
    ],
    undefined,
    true
);

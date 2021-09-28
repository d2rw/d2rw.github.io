import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Obedience",
    [Item.Polearm],
    [Rune.Hel, Rune.Ko, Rune.Thul, Rune.Eth, Rune.Fal],
    [
        new Stat(StatType.Default, "30% Chance To Cast Level 21 Enchant When You Kill An Enemy"),
        new Stat(StatType.FasterHitRecovery, "40% Faster Hit Recovery"),
        new Stat(StatType.Damage, "+370% Enhanced Damage"),
        new Stat(StatType.Damage, "-25% Target Defense"),
        new Stat(StatType.Damage, "Adds 3-14 Cold Damage 3 Second Duration (Normal)"),
        new Stat(StatType.Damage, "-25% To Enemy Fire Resistance"),
        new Stat(StatType.Special, "40% Chance of Crushing Blow"),
        new Stat(StatType.Defense, "+200-300 Defense (varies)"),
        new Stat(StatType.Stats, "+10 To Strength"),
        new Stat(StatType.Stats, "+10 To Dexterity"),
        new Stat(StatType.Resistance, "All Resistances +20-30 (varies)"),
        new Stat(StatType.Special, "Requirements -20%"),
    ],
    undefined,
    true
);

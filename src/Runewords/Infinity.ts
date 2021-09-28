import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Infinity",
    [Item.Polearm],
    [Rune.Ber, Rune.Mal, Rune.Ber, Rune.Ist],
    [
        new Stat(StatType.Default, "50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy"),
        new Stat(StatType.Aura, "Level 12 Conviction Aura When Equipped"),
        new Stat(StatType.FasterRunWalk, "+35% Faster Run/Walk"),
        new Stat(StatType.Damage, "+255-325% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "-(45-55)% To Enemy Lightning Resistance (varies)"),
        new Stat(StatType.Special, "40% Chance of Crushing Blow"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Stats, "0.5-49.5 To Vitality (Based on Character Level)"),
        new Stat(StatType.MagicFind, "30% Better Chance of Getting Magic Items"),
        new Stat(StatType.Charges, "Level 21 Cyclone Armor (30 Charges)"),
    ],
    undefined,
    true
);

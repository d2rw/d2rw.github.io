import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Last Wish",
    [Item.Sword, Item.Hammer, Item.Axe],
    [Rune.Jah, Rune.Mal, Rune.Jah, Rune.Sur, Rune.Jah, Rune.Ber],
    [
        new Stat(StatType.Default, "6% Chance To Cast Level 11 Fade When Struck"),
        new Stat(StatType.Default, "10% Chance To Cast Level 18 Life Tap On Striking"),
        new Stat(StatType.Default, "20% Chance To Cast Level 20 Charged Bolt On Attack"),
        new Stat(StatType.Aura, "Level 17 Might Aura When Equipped"),
        new Stat(StatType.Damage, "+330-375% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "Ignore Target's Defense"),
        new Stat(StatType.Special, "60-70% Chance of Crushing Blow (varies)"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Special, "Hit Blinds Target"),
        new Stat(StatType.MagicFind, "+(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level)"),
    ],
    undefined,
    true
);

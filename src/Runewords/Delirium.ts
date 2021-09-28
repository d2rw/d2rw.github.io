import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Delirium",
    [Item.Helm],
    [Rune.Lem, Rune.Ist, Rune.Io],
    [
        new Stat(StatType.Default, "1% Chance To Cast Level 50 Delirium* (morph) When Struck"),
        new Stat(StatType.Default, "6% Chance To Cast Level 14 Mind Blast When Struck"),
        new Stat(StatType.Default, "14% Chance To Cast Level 13 Terror When Struck"),
        new Stat(StatType.Default, "11% Chance To Cast Level 18 Confuse On Striking"),
        new Stat(StatType.Skill, "+2 To All Skills"),
        new Stat(StatType.Defense, "+261 Defense"),
        new Stat(StatType.Stats, "+10 To Vitality"),
        new Stat(StatType.GoldFind, "50% Extra Gold From Monsters"),
        new Stat(StatType.MagicFind, "25% Better Chance of Getting Magic Items"),
        new Stat(StatType.Charges, "Level 17 Attract (60 Charges)"),
    ],
);

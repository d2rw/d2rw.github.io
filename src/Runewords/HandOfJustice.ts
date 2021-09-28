import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Hand of Justice",
    [Item.Weapon],
    [Rune.Sur, Rune.Cham, Rune.Amn, Rune.Lo],
    [
        new Stat(StatType.Default, "100% Chance To Cast Level 36 Blaze When You Level-Up"),
        new Stat(StatType.Default, "100% Chance To Cast Level 48 Meteor When You Die"),
        new Stat(StatType.Aura, "Level 16 Holy Fire Aura When Equipped"),
        new Stat(StatType.IncreasedAttackSpeed, "+33% Increased Attack Speed"),
        new Stat(StatType.Damage, "+280-330% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "Ignore Target's Defense"),
        new Stat(StatType.Defense, "7% Life Stolen Per Hit"),
        new Stat(StatType.Damage, "-20% To Enemy Fire Resistance"),
        new Stat(StatType.Special, "20% Deadly Strike"),
        new Stat(StatType.Special, "Hit Blinds Target"),
        new Stat(StatType.Special, "Freezes Target +3"),
    ],
);

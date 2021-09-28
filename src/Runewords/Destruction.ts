import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Destruction",
    [Item.Polearm, Item.Sword],
    [Rune.Vex, Rune.Lo, Rune.Ber, Rune.Jah, Rune.Ko],
    [
        new Stat(StatType.Default, "23% Chance To Cast Level 12 Volcano On Striking"),
        new Stat(StatType.Default, "5% Chance To Cast Level 23 Molten Boulder On Striking"),
        new Stat(StatType.Default, "100% Chance To Cast level 45 Meteor When You Die"),
        new Stat(StatType.Default, "15% Chance To Cast Level 22 Nova On Attack"),
        new Stat(StatType.Damage, "+350% Enhanced Damage"),
        new Stat(StatType.Special, "Ignore Target's Defense"),
        new Stat(StatType.Damage, "Adds 100-180 Magic Damage"),
        new Stat(StatType.Default, "7% Mana Stolen Per Hit"),
        new Stat(StatType.Special, "20% Chance Of Crushing Blow"),
        new Stat(StatType.Special, "20% Deadly Strike"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Stats, "+10 To Dexterity"),
    ],
    undefined,
    true
);

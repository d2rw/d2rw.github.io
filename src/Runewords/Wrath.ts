import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Wrath",
    [Item.Missile],
    [Rune.Pul, Rune.Lum, Rune.Ber, Rune.Mal],
    [
        new Stat(StatType.Default, "30% Chance To Cast Level 1 Decrepify On Striking"),
        new Stat(StatType.Default, "5% Chance To Cast Level 10 Life Tap On Striking"),
        new Stat(StatType.Damage, "+375% Damage To Demons"),
        new Stat(StatType.AttackRating, "+100 To Attack Rating Against Demons"),
        new Stat(StatType.Damage, "+250-300% Damage To Undead (varies)"),
        new Stat(StatType.Damage, "Adds 85-120 Magic Damage"),
        new Stat(StatType.Damage, "Adds 41-240 Lightning Damage"),
        new Stat(StatType.Special, "20% Chance of Crushing Blow"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Stats, "+10 To Energy"),
        new Stat(StatType.Special, "Cannot Be Frozen"),
    ],
    undefined,
    true
);

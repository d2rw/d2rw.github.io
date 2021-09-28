import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Breath of the Dying",
    [Item.Weapon],
    [Rune.Vex, Rune.Hel, Rune.El, Rune.Eld, Rune.Zod, Rune.Eth],
    [
        new Stat(StatType.Default, "50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy"),
        new Stat(StatType.Special, "Indestructible"),
        new Stat(StatType.IncreasedAttackSpeed, "+60% Increased Attack Speed"),
        new Stat(StatType.Damage, "+350-400% Enhanced Damage (varies)"),
        new Stat(StatType.Damage, "+200% Damage To Undead"),
        new Stat(StatType.Damage, "-25% Target Defense"),
        new Stat(StatType.AttackRating, "+50 To Attack Rating"),
        new Stat(StatType.AttackRating, "+50 To Attack Rating Against Undead"),
        new Stat(StatType.Default, "7% Mana Stolen Per Hit"),
        new Stat(StatType.Default, "12-15% Life Stolen Per Hit (varies)"),
        new Stat(StatType.Special, "Prevent Monster Heal"),
        new Stat(StatType.Stats, "+30 To All Attributes"),
        new Stat(StatType.Default, "+1 To Light Radius"),
        new Stat(StatType.Special, "Requirements -20%"),
    ],
);

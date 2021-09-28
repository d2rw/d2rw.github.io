import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Phoenix",
    [Item.Weapon, Item.Shield],
    [Rune.Vex, Rune.Vex, Rune.Lo, Rune.Jah],
    {
        [Item.Weapon]: [
            new Stat(StatType.Default, "100% Chance To Cast level 40 Blaze When You Level-up"),
            new Stat(StatType.Default, "40% Chance To Cast Level 22 Firestorm On Striking"),
            new Stat(StatType.Aura, "Level 10-15 Redemption Aura When Equipped (varies)"),
            new Stat(StatType.Damage, "+350-400% Enhanced Damage (varies)"),
            new Stat(StatType.Damage, "Ignores Target's Defense"),
            new Stat(StatType.Defense, "14% Mana Stolen Per Hit"),
            new Stat(StatType.Damage, "-28% To Enemy Fire Resistance"),
            new Stat(StatType.Special, "20% Deadly Strike"),
            new Stat(StatType.Defense, "+350-400 Defense Vs. Missile (varies)"),
            new Stat(StatType.Defense, "+15-21 Fire Absorb (varies)"),
        ],
        [Item.Shield]: [
            new Stat(StatType.Default, "100% Chance To Cast level 40 Blaze When You Level-up"),
            new Stat(StatType.Default, "40% Chance To Cast Level 22 Firestorm On Striking"),
            new Stat(StatType.Aura, "Level 10-15 Redemption Aura When Equipped (varies)"),
            new Stat(StatType.Defense, "+350-400 Defense Vs. Missile (varies)"),
            new Stat(StatType.Damage, "+350-400% Enhanced Damage (varies)"),
            new Stat(StatType.Damage, "-28% To Enemy Fire Resistance"),
            new Stat(StatType.Stats, "+50 To Life"),
            new Stat(StatType.Resistance, "+5% To Maximum Lightning Resist"),
            new Stat(StatType.Resistance, "+10% To Maximum Fire Resist"),
            new Stat(StatType.Defense, "+15-21 Fire Absorb (varies)"),
        ]
    },
    undefined,
    true
);

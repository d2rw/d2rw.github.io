import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Fortitude",
    [Item.Weapon, Item.BodyArmor],
    [Rune.El, Rune.Sol, Rune.Dol, Rune.Lo],
    {
        [Item.Weapon]: [
            new Stat(StatType.Default, "20% Chance To Cast Level 15 Chilling Armor when Struck"),
            new Stat(StatType.FasterCastRate, "+25% Faster Cast Rate"),
            new Stat(StatType.Damage, "+300% Enhanced Damage"),
            new Stat(StatType.Damage, "+9 To Minimum Damage"),
            new Stat(StatType.AttackRating, "+50 To Attack Rating"),
            new Stat(StatType.Special, "20% Deadly Strike"),
            new Stat(StatType.Special, "Hit Causes Monster To Flee 25%"),
            new Stat(StatType.Defense, "+200% Enhanced Defense"),
            new Stat(StatType.Stats, "+X To Life (Based on Character Level)*"),
            new Stat(StatType.Resistance, "All Resistances +25-30 (varies)"),
            new Stat(StatType.Defense, "12% Damage Taken Goes To Mana"),
            new Stat(StatType.Default, "+1 To Light Radius"),
        ],
        [Item.BodyArmor]: [
            new Stat(StatType.Default, "20% Chance To Cast Level 15 Chilling Armor when Struck"),
            new Stat(StatType.FasterCastRate, "+25% Faster Cast Rate"),
            new Stat(StatType.Damage, "+300% Enhanced Damage"),
            new Stat(StatType.Defense, "+200% Enhanced Defense"),
            new Stat(StatType.Defense, "+15 Defense"),
            new Stat(StatType.Stats, "+X To Life (Based on Character Level)*"),
            new Stat(StatType.Defense, "Replenish Life +7"),
            new Stat(StatType.Resistance, "+5% To Maximum Lightning Resist"),
            new Stat(StatType.Resistance, "All Resistances +25-30 (varies)"),
            new Stat(StatType.Defense, "Damage Reduced By 7"),
            new Stat(StatType.Defense, "12% Damage Taken Goes To Mana"),
            new Stat(StatType.Default, "+1 To Light Radius"),
        ],
    },
    undefined,
    true
);

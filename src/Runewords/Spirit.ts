import Runeword from "@App/Runeword";

import Item from "@App/Type/Item";
import StatType from "@App/Type/Stat";

import * as Rune from "@App/Runes";
import Stat from "@App/Stat";

export default new Runeword(
    "Spirit",
    [Item.Sword, Item.Shield],
    [Rune.Tal, Rune.Thul, Rune.Ort, Rune.Amn],
    {
        [Item.Sword]: [
            new Stat(StatType.Skill, "+2 To All Skills"),
            new Stat(StatType.FasterCastRate, "+25-35% Faster Cast Rate (varies)"),
            new Stat(StatType.FasterHitRecovery, "+55% Faster Hit Recovery"),
            new Stat(StatType.Damage, "Adds 1-50 Lightning Damage"),
            new Stat(StatType.Damage, "Adds 3-14 Cold Damage 3 Second Duration (Normal)"),
            new Stat(StatType.Damage, "+75 Poison Damage Over 5 Seconds"),
            new Stat(StatType.Defense, "7% Life Stolen Per Hit"),
            new Stat(StatType.Defense, "+250 Defense Vs. Missile"),
            new Stat(StatType.Stats, "+22 To Vitality"),
            new Stat(StatType.Stats, "+89-112 To Mana (varies)"),
            new Stat(StatType.Defense, "+3-8 Magic Absorb (varies)"),
        ],
        [Item.Shield]: [
            new Stat(StatType.Skill, "+2 To All Skills"),
            new Stat(StatType.FasterCastRate, "+25-35% Faster Cast Rate (varies)"),
            new Stat(StatType.FasterHitRecovery, "+55% Faster Hit Recovery"),
            new Stat(StatType.Defense, "+250 Defense Vs. Missile"),
            new Stat(StatType.Stats, "+22 To Vitality"),
            new Stat(StatType.Stats, "+89-112 To Mana (varies)"),
            new Stat(StatType.Resistance, "Cold Resist +35%"),
            new Stat(StatType.Resistance, "Lightning Resist +35%"),
            new Stat(StatType.Resistance, "Poison Resist +35%"),
            new Stat(StatType.Default, "+3-8 Magic Absorb (varies)"),
            new Stat(StatType.Defense, "Attacker Takes Damage of 14"),
        ]
    },
    undefined,
    true
);
